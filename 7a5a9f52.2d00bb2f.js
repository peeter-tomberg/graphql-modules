(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{101:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(8),o=(n(0),n(128)),s={id:"development-environment",title:"Development Environment",sidebar_label:"Development Environment"},i={unversionedId:"recipes/development-environment",id:"version-legacy/recipes/development-environment",isDocsHomePage:!1,title:"Development Environment",description:"TypeScript",source:"@site/versioned_docs/version-legacy/recipes/development-environment.md",slug:"/recipes/development-environment",permalink:"/docs/legacy/recipes/development-environment",editUrl:"https://github.com/Urigo/graphql-modules/edit/master/website/versioned_docs/version-legacy/recipes/development-environment.md",version:"legacy",sidebar_label:"Development Environment",sidebar:"version-legacy/docs",previous:{title:"Test Your Module",permalink:"/docs/legacy/introduction/test-your-module"},next:{title:"Load Your Schema and Resolvers",permalink:"/docs/legacy/recipes/load-your-schema"}},c=[{value:"TypeScript",id:"typescript",children:[{value:"TS-Node <strong><em>(recommended way)</em></strong>",id:"ts-node-recommended-way",children:[]},{value:"Webpack",id:"webpack",children:[]},{value:"TypeScript-Babel-Starter",id:"typescript-babel-starter",children:[]}]},{value:"JavaScript Usage",id:"javascript-usage",children:[{value:"With Babel",id:"with-babel",children:[]},{value:"Without decorators",id:"without-decorators",children:[]}]},{value:"Testing Environment",id:"testing-environment",children:[{value:"Jest",id:"jest",children:[]},{value:"Other Test Runners",id:"other-test-runners",children:[]}]}],l={rightToc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"typescript"},"TypeScript"),Object(o.b)("p",null,"GraphQL Modules always supports the latest TypeScript version. Lower versions are not supported!"),Object(o.b)("h3",{id:"ts-node-recommended-way"},"TS-Node ",Object(o.b)("strong",{parentName:"h3"},Object(o.b)("em",{parentName:"strong"},"(recommended way)"))),Object(o.b)("p",null,"To set up your development environment easily, we recommend to use ",Object(o.b)("a",{parentName:"p",href:"http://www.typescriptlang.org/"},"TypeScript"),"."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"You don't have to use TypeScript, but it makes it much easier to use GraphQL Modules.")),Object(o.b)("p",null,"To get started with your development environment, install the following tools in your project:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"yarn add -D ts-node typescript nodemon\n")),Object(o.b)("p",null,"Next, create/update ",Object(o.b)("inlineCode",{parentName:"p"},"tsconfig.json")," in your root directory:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{\n  "compilerOptions": {\n    "experimentalDecorators": true,\n    "module": "commonjs",\n    "target": "es6",\n    "lib": ["es6", "esnext", "es2015"],\n    "noImplicitAny": false,\n    "suppressImplicitAnyIndexErrors": true,\n    "moduleResolution": "node",\n    "emitDecoratorMetadata": true,\n    "sourceMap": true,\n    "declaration": true,\n    "outDir": "./dist",\n    "rootDir": "./src"\n  },\n  "include": ["src/**/*.ts"],\n  "files": ["src/index.ts"],\n  "exclude": ["node_modules"]\n}\n')),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"These configurations facilitate development, but of course you can modify them as you wish. Keep particularly in mind to keep ",Object(o.b)("inlineCode",{parentName:"p"},"experimentalDecorators: true")," because that's important for GraphQL Modules.")),Object(o.b)("p",null,"Next, add the following scripts to your ",Object(o.b)("inlineCode",{parentName:"p"},"package.json"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{\n  "scripts": {\n    "dev": "nodemon --exec ts-node src/main.ts",\n    "debug": "nodemon --exec node -r ts-node/register --inspect src/index.ts",\n    "build": "tsc",\n    "start": "node dist/index.js"\n  }\n}\n')),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"dev")," starts your server in the development mode."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"debug")," starts the server in the debug mode."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"build")," uses the ",Object(o.b)("inlineCode",{parentName:"li"},"tsc")," compiler to compile your code to JavaScript."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"start")," runs the compiled server using pure Node.")),Object(o.b)("h4",{id:"paths"},Object(o.b)("inlineCode",{parentName:"h4"},"paths")),Object(o.b)("p",null,"TypeScript has an ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",{parentName:"strong",href:"https://www.typescriptlang.org/docs/handbook/module-resolution.html"},"aliasing mechanism"))," for working with modules directories."),Object(o.b)("p",null,"To set it up quickly with GraphQL Modules, first add the following package to your server:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"yarn add tsconfig-paths\n")),Object(o.b)("p",null,"Then update your scripts to load the ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",{parentName:"strong",href:"https://gist.github.com/jamestalmage/df922691475cff66c7e6"},"require extension"))," for TypeScript ",Object(o.b)("inlineCode",{parentName:"p"},"paths"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{\n  "scripts": {\n    "dev": "nodemon --exec ts-node -r tsconfig-paths/register src/main.ts",\n    "debug": "nodemon --exec ts-node -r tsconfig-paths/register --inspect --debug-brk src/index.ts",\n    "build": "tsc",\n    "start": "node dist/index.js"\n  }\n}\n')),Object(o.b)("p",null,"And you can add custom mapping to your ",Object(o.b)("inlineCode",{parentName:"p"},"tsconfig.json")," file:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{\n  "compilerOptions": {\n    "baseUrl": ".",\n    "paths": {\n      "@modules/*": ["./modules/*"]\n    }\n  }\n}\n')),Object(o.b)("p",null,"You can now import files between modules like below:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},"import { SomeProvider } from '@modules/my-module';\n")),Object(o.b)("h4",{id:"import-from-graphql-files"},"Import from ",Object(o.b)("inlineCode",{parentName:"h4"},".graphql")," files"),Object(o.b)("p",null,"You can also treat ",Object(o.b)("inlineCode",{parentName:"p"},".graphql")," files as text files and import from them easily.\nIt's useful because many IDEs detect ",Object(o.b)("inlineCode",{parentName:"p"},".graphql")," files and do syntax highlighting for them."),Object(o.b)("p",null,"You can use ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",{parentName:"strong",href:"https://github.com/ardatan/graphql-import-node"},"graphql-import-node"))," to enable NodeJS to import ",Object(o.b)("inlineCode",{parentName:"p"},".graphql")," files:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"yarn add graphql-import-node\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},"import 'graphql-import-node'; // You should add this at the begininng of your entry file.\nimport * as UserTypeDefs from './user.graphql';\n")),Object(o.b)("h3",{id:"webpack"},"Webpack"),Object(o.b)("p",null,"If you are using Webpack, we recommend to use ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",{parentName:"strong",href:"https://github.com/TypeStrong/ts-loader"},"ts-loader"))," or ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",{parentName:"strong",href:"https://github.com/s-panferov/awesome-typescript-loader"},"awesome-typescript-loader"))," to load your TypeScript files."),Object(o.b)("p",null,"To load ",Object(o.b)("inlineCode",{parentName:"p"},".graphql")," files, you can use ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",{parentName:"strong",href:"https://github.com/apollographql/graphql-tag#webpack-preprocessing-with-graphql-tagloader"},"graphql-tag/loader")),"."),Object(o.b)("p",null,"Here is a simple ",Object(o.b)("inlineCode",{parentName:"p"},"webpack.config.js")," that should do the job:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  mode: 'development',\n  devtool: 'inline-source-map',\n  entry: './src/index.ts',\n  output: {\n    filename: 'dist/server.js',\n  },\n  resolve: {\n    // Add `.ts` and `.tsx` as a resolvable extension\n    extensions: ['.ts', '.tsx', '.js', '.graphql'],\n    plugins: [new TsconfigPathsPlugin()],\n  },\n  module: {\n    rules: [\n      { test: /\\.tsx?$/, loader: 'ts-loader' },\n      {\n        test: /\\.(graphql|gql)$/,\n        exclude: /node_modules/,\n        loader: 'graphql-tag/loader',\n      },\n    ],\n  },\n};\n")),Object(o.b)("h3",{id:"typescript-babel-starter"},"TypeScript-Babel-Starter"),Object(o.b)("p",null,"You can use Babel for TypeScript with GraphQL Modules by using ",Object(o.b)("a",{parentName:"p",href:"https://github.com/Microsoft/TypeScript-Babel-Starter"},"TypeScript-Babel-Starter"),"."),Object(o.b)("p",null,"Still, if you use dependency injection, you have to decorate each property and argument in the providers manually even for the classes like below;"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},"import { Injectable, Inject } from '@graphql-modules/di';\n@Injectable()\nexport class SomeProvider {\n  constructor(@Inject(OtherProvider) private otherProvider: OtherProvider) {}\n}\n")),Object(o.b)("h2",{id:"javascript-usage"},"JavaScript Usage"),Object(o.b)("p",null,"If you are using JavaScript (not TypeScript) in your project, you can either ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",{parentName:"strong",href:"https://www.typescriptlang.org/docs/handbook/migrating-from-javascript.html"},"add support for TypeScript"))," or use GraphQL Modules with the JavaScript API."),Object(o.b)("h3",{id:"with-babel"},"With Babel"),Object(o.b)("p",null,"If you are using ",Object(o.b)("a",{parentName:"p",href:"http://babeljs.io"},"Babel")," to transpile your JavaScript files, you can use ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",{parentName:"strong",href:"http://babeljs.io/docs/en/babel-plugin-transform-decorators"},"babel-plugin-transform-decorators"))," to get decorators support, which enables using decorators such as ",Object(o.b)("inlineCode",{parentName:"p"},"@Inject")," in a regular way."),Object(o.b)("h3",{id:"without-decorators"},"Without decorators"),Object(o.b)("h4",{id:"dependency-injection"},"Dependency Injection"),Object(o.b)("p",null,"You can use ",Object(o.b)("inlineCode",{parentName:"p"},"Inject")," and ",Object(o.b)("inlineCode",{parentName:"p"},"Injectable")," as regular functions to wrap your arguments and classes from ",Object(o.b)("inlineCode",{parentName:"p"},"tslib"),"."),Object(o.b)("p",null,"Take care to add the polyfill ",Object(o.b)("inlineCode",{parentName:"p"},"reflect-metadata")," and require it (once)."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"require('reflect-metadata');\nInject(AProvider)(MyProvider, undefined, 0); // inject AProvider to the first MyProvider constructor argument\nInject(ModuleConfig)(MyProvider, undefined, 0); // inject SimpleModule Config to the second MyProvider constructor argument\nmodule.exports = Injectable({...})(MyProvider);\n")),Object(o.b)("h2",{id:"testing-environment"},"Testing Environment"),Object(o.b)("p",null,"We recommend Jest as your test runner: it has a simple API, it's super fast and you can integrate it with any CI tools."),Object(o.b)("h3",{id:"jest"},"Jest"),Object(o.b)("p",null,"To test your GraphQL Modules server with Jest, first add support for TypeScript to your Jest instance:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"yarn add -D jest @types/jest ts-jest\n")),Object(o.b)("p",null,"Then, add the following section to your ",Object(o.b)("inlineCode",{parentName:"p"},"package.json"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{\n  "jest": {\n    "transform": {\n      "^.+\\\\.tsx?$": "ts-jest"\n    },\n    "testRegex": "(/__tests__/.*|(\\\\.|/)(test|spec))\\\\.(jsx?|tsx?)$",\n    "moduleFileExtensions": ["ts", "tsx", "js", "jsx", "json", "node"]\n  }\n}\n')),Object(o.b)("p",null,"And add a script to your ",Object(o.b)("inlineCode",{parentName:"p"},"package.json"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{\n  "scripts": {\n    "test": "jest"\n  }\n}\n')),Object(o.b)("p",null,"Also, make sure that each one of your spec files starts with:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},"import 'reflect-metadata';\n")),Object(o.b)("h3",{id:"other-test-runners"},"Other Test Runners"),Object(o.b)("p",null,"You can use any other test runner you prefer.\nJust figure out how to use it with TypeScript and make sure you can import CommonJS easily."))}p.isMDXComponent=!0},128:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=p(n),u=r,m=b["".concat(s,".").concat(u)]||b[u]||d[u]||o;return n?a.a.createElement(m,i(i({ref:t},l),{},{components:n})):a.a.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);