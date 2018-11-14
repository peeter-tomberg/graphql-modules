
import { ProviderNotValidError, ServiceIdentifierNotFoundError, DependencyProviderNotFoundError, ProviderAlreadyDefinedError, ProviderClassNotDecoratedError } from '../errors';
import { ServiceIdentifier, Type, Provider, ProviderScope, ProviderOptions, Factory } from './types';
import { isTypeProvider, PROVIDER_OPTIONS, isValueProvider, isClassProvider, isFactoryProvider, DESIGN_PARAM_TYPES, getServiceIdentifierName } from './utils';
import { NAME_SESSION_INJECTOR_MAP } from './utils';

declare var Reflect: any;

export class Injector {
  public children = new Set<Injector>();
  private _classMap = new Map<ServiceIdentifier<any>, Type<any>>();
  private _factoryMap = new Map<ServiceIdentifier<any>, Factory<any>>();
  private _instanceMap = new Map<ServiceIdentifier<any>, any>();
  public _applicationScopeSet = new Set<ServiceIdentifier<any>>();
  public _requestScopeSet = new Set<ServiceIdentifier<any>>();
  public _sessionScopeSet = new Set<ServiceIdentifier<any>>();
  constructor(public name: string, private _defaultScope = ProviderScope.Application) {}
  public provide<T>(provider: Provider<T>): void {

    if (isTypeProvider(provider)) {
      const options: ProviderOptions = Reflect.getMetadata(PROVIDER_OPTIONS, provider);
      if (options && !options.overwrite && this.has(provider)) {
        throw new ProviderAlreadyDefinedError(this.name, provider);
      }
      this._classMap.set(provider, provider);
      switch ((options && options.scope) || this._defaultScope) {
        case ProviderScope.Application:
          this._applicationScopeSet.add(provider);
        break;
        case ProviderScope.Request:
          this._requestScopeSet.add(provider);
        break;
        case ProviderScope.Session:
          this._sessionScopeSet.add(provider);
        break;
      }
      return;
    }

    if (!provider.overwrite && this.has(provider.provide)) {
      throw new ProviderAlreadyDefinedError(this.name, provider.provide);
    }

    if (isValueProvider(provider)) {
      this._instanceMap.set(provider.provide, provider.useValue);
    } else if (isClassProvider(provider)) {
      this._classMap.set(provider.provide, provider.useClass);
    } else if (isFactoryProvider(provider)) {
      this._factoryMap.set(provider.provide, provider.useFactory);
    } else {
      throw new ProviderNotValidError(this.name, provider['provide'] && provider);
    }

    switch (provider.scope || this._defaultScope) {
      case ProviderScope.Application:
        this._applicationScopeSet.add(provider.provide);
      break;
      case ProviderScope.Request:
        this._requestScopeSet.add(provider.provide);
      break;
      case ProviderScope.Session:
        this._sessionScopeSet.add(provider.provide);
      break;
    }

  }

  public has<T>(serviceIdentifier: ServiceIdentifier<T>): boolean {
    return (
      this._instanceMap.has(serviceIdentifier) ||
      this._classMap.has(serviceIdentifier) ||
      this._factoryMap.has(serviceIdentifier)
    );
  }

  public remove<T>(serviceIdentifier: ServiceIdentifier<T>): void {
    this._instanceMap.delete(serviceIdentifier);
    this._classMap.delete(serviceIdentifier);
    this._factoryMap.delete(serviceIdentifier);
  }

  public get<T, Session = any>(serviceIdentifier: ServiceIdentifier<T>, session?: Session): T {
      if (this._sessionScopeSet.has(serviceIdentifier) && !session) {
        throw new Error(`You cannot inject Provider #${getServiceIdentifierName(serviceIdentifier)} in application scope!`);
      }
      const sessionScopeInstanceMap = session && session[NAME_SESSION_INJECTOR_MAP].get(this.name).injector.sessionScopeInstanceMap;
      if (sessionScopeInstanceMap && sessionScopeInstanceMap.has(serviceIdentifier)) {
        return sessionScopeInstanceMap.get(serviceIdentifier);
      } else if (this._instanceMap.has(serviceIdentifier)) {
        return this._instanceMap.get(serviceIdentifier);
      } else if (this._classMap.has(serviceIdentifier)) {
        const RealClazz = this._classMap.get(serviceIdentifier);
        try {
          const dependencies = Reflect.getMetadata(DESIGN_PARAM_TYPES, RealClazz);
          if (!dependencies) {
            throw new ProviderClassNotDecoratedError<T>(this.name, serviceIdentifier, RealClazz.name);
          }
          const dependencyInstances = dependencies.map((dependency: ServiceIdentifier<any>) => this.get(dependency, session));
          const instance = new RealClazz(...dependencyInstances);
          if (this._applicationScopeSet.has(serviceIdentifier)) {
            this._instanceMap.set(serviceIdentifier, instance);
          } else if (sessionScopeInstanceMap && this._sessionScopeSet.has(serviceIdentifier)) {
            sessionScopeInstanceMap.set(serviceIdentifier, instance);
          }
          return instance;
        } catch (e) {
          if (e instanceof ServiceIdentifierNotFoundError) {
            throw new DependencyProviderNotFoundError(e.serviceIdentifier, RealClazz, this.name);
          } else {
            throw e;
          }
        }
      } else if (this._factoryMap.has(serviceIdentifier)) {
        const factory = this._factoryMap.get(serviceIdentifier);
        const instance = factory(this);
        if (this._applicationScopeSet.has(serviceIdentifier)) {
          this._instanceMap.set(serviceIdentifier, instance);
        } else if (sessionScopeInstanceMap && this._sessionScopeSet.has(serviceIdentifier)) {
          sessionScopeInstanceMap.set(serviceIdentifier, instance);
        }
        return instance;
      } else {
        for (const child of this.children) {
          try {
            return child.get(serviceIdentifier, session);
          } catch (e) {
            if (e instanceof ServiceIdentifierNotFoundError) {
              continue;
            } else {
              throw e;
            }
          }
        }
        throw new ServiceIdentifierNotFoundError(serviceIdentifier, this.name);
      }
  }

}
