"use strict";(self.webpackChunkcosmos_sdk_docs=self.webpackChunkcosmos_sdk_docs||[]).push([[72052],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>u});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},p=Object.keys(e);for(a=0;a<p.length;a++)t=p[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)t=p[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),s=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=s(e.components);return a.createElement(l.Provider,{value:n},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,p=e.originalType,l=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),m=s(t),g=i,u=m["".concat(l,".").concat(g)]||m[g]||c[g]||p;return t?a.createElement(u,o(o({ref:n},d),{},{components:t})):a.createElement(u,o({ref:n},d))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var p=t.length,o=new Array(p);o[0]=g;var r={};for(var l in n)hasOwnProperty.call(n,l)&&(r[l]=n[l]);r.originalType=e,r[m]="string"==typeof e?e:i,o[1]=r;for(var s=2;s<p;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},61217:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>p,metadata:()=>r,toc:()=>s});var a=t(87462),i=(t(67294),t(3905));const p={sidebar_position:1},o="Overview of app_di.go",r={unversionedId:"build/building-apps/app-go-v2",id:"build/building-apps/app-go-v2",title:"Overview of app_di.go",description:"The Cosmos SDK allows much easier wiring of an app.go thanks to App Wiring and depinject.",source:"@site/docs/build/building-apps/01-app-go-v2.md",sourceDirName:"build/building-apps",slug:"/build/building-apps/app-go-v2",permalink:"/main/build/building-apps/app-go-v2",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"buildSidebar",previous:{title:"Overview of app_di.go",permalink:"/main/build/building-apps/app-go-di"},next:{title:"Application Mempool",permalink:"/main/build/building-apps/app-mempool"}},l={},s=[{value:"<code>app_config.go</code>",id:"app_configgo",level:2},{value:"Complete <code>app_config.go</code>",id:"complete-app_configgo",level:3},{value:"Alternative formats",id:"alternative-formats",level:3},{value:"<code>app_di.go</code>",id:"app_digo",level:2},{value:"Advanced Configuration",id:"advanced-configuration",level:3},{value:"Registering non app wiring modules",id:"registering-non-app-wiring-modules",level:3},{value:"Complete <code>app_di.go</code>",id:"complete-app_digo",level:3}],d={toc:s},m="wrapper";function c(e){let{components:n,...t}=e;return(0,i.kt)(m,(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"overview-of-app_digo"},"Overview of ",(0,i.kt)("inlineCode",{parentName:"h1"},"app_di.go")),(0,i.kt)("admonition",{title:"Synopsis",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The Cosmos SDK allows much easier wiring of an ",(0,i.kt)("inlineCode",{parentName:"p"},"app.go")," thanks to App Wiring and ",(0,i.kt)("a",{parentName:"p",href:"/main/build/packages/depinject"},(0,i.kt)("inlineCode",{parentName:"a"},"depinject")),".\nLearn more about the rationale of App Wiring in ",(0,i.kt)("a",{parentName:"p",href:"/main/build/architecture/adr-057-app-wiring"},"ADR-057"),".")),(0,i.kt)("admonition",{title:"Pre-requisite Readings",type:"note"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/main/build/architecture/adr-057-app-wiring"},"ADR 057: App Wiring")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/main/build/packages/depinject"},"Depinject Documentation")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/main/build/building-modules/depinject"},"Modules depinject-ready")))),(0,i.kt)("p",null,"This section is intended to provide an overview of the ",(0,i.kt)("inlineCode",{parentName:"p"},"SimApp")," ",(0,i.kt)("inlineCode",{parentName:"p"},"app_di.go")," file with App Wiring."),(0,i.kt)("h2",{id:"app_configgo"},(0,i.kt)("inlineCode",{parentName:"h2"},"app_config.go")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"app_config.go")," file is the single place to configure all modules parameters."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create the ",(0,i.kt)("inlineCode",{parentName:"p"},"AppConfig")," variable:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.53.0-rc.2/simapp/app_config.go#L290\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Configure the ",(0,i.kt)("inlineCode",{parentName:"p"},"runtime")," module:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.53.0-rc.2/simapp/app_config.go#L289-L302\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Configure the modules defined in the ",(0,i.kt)("inlineCode",{parentName:"p"},"PreBlocker"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"BeginBlocker")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"EndBlocker")," and the ",(0,i.kt)("inlineCode",{parentName:"p"},"tx")," module:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.53.0-rc.2/simapp/app_config.go#L108-L132\n")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.53.0-rc.2/simapp/app_config.go#L222-L227\n")))),(0,i.kt)("h3",{id:"complete-app_configgo"},"Complete ",(0,i.kt)("inlineCode",{parentName:"h3"},"app_config.go")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.53.0-rc.2/simapp/app_config.go\n")),(0,i.kt)("h3",{id:"alternative-formats"},"Alternative formats"),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"The example above shows how to create an ",(0,i.kt)("inlineCode",{parentName:"p"},"AppConfig")," using Go. However, it is also possible to create an ",(0,i.kt)("inlineCode",{parentName:"p"},"AppConfig")," using YAML, or JSON.",(0,i.kt)("br",{parentName:"p"}),"\n","The configuration can then be embed with ",(0,i.kt)("inlineCode",{parentName:"p"},"go:embed")," and read with ",(0,i.kt)("a",{parentName:"p",href:"https://pkg.go.dev/cosmossdk.io/core/appconfig#LoadYAML"},(0,i.kt)("inlineCode",{parentName:"a"},"appconfig.LoadYAML")),", or ",(0,i.kt)("a",{parentName:"p",href:"https://pkg.go.dev/cosmossdk.io/core/appconfig#LoadJSON"},(0,i.kt)("inlineCode",{parentName:"a"},"appconfig.LoadJSON")),", in ",(0,i.kt)("inlineCode",{parentName:"p"},"app_di.go"),"."),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-go"},"//go:embed app_config.yaml\nvar (\n    appConfigYaml []byte\n    appConfig = appconfig.LoadYAML(appConfigYaml)\n)\n"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'modules:\n  - name: runtime\n    config:\n      "@type": cosmos.app.runtime.v1alpha1.Module\n      app_name: SimApp\n      begin_blockers: [staking, auth, bank]\n      end_blockers: [bank, auth, staking]\n      init_genesis: [bank, auth, staking]\n  - name: auth\n    config:\n      "@type": cosmos.auth.module.v1.Module\n      bech32_prefix: cosmos\n  - name: bank\n    config:\n      "@type": cosmos.bank.module.v1.Module\n  - name: staking\n    config:\n      "@type": cosmos.staking.module.v1.Module\n  - name: tx\n    config:\n      "@type": cosmos.tx.module.v1.Module\n')),(0,i.kt)("p",null,"A more complete example of ",(0,i.kt)("inlineCode",{parentName:"p"},"app.yaml")," can be found ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/blob/91b1d83f1339e235a1dfa929ecc00084101a19e3/simapp/app.yaml"},"here"),"."),(0,i.kt)("h2",{id:"app_digo"},(0,i.kt)("inlineCode",{parentName:"h2"},"app_di.go")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"app_di.go")," is the place where ",(0,i.kt)("inlineCode",{parentName:"p"},"SimApp")," is constructed. ",(0,i.kt)("inlineCode",{parentName:"p"},"depinject.Inject")," facilitates this by automatically wiring the app modules and keepers, with the provided application configuration ",(0,i.kt)("inlineCode",{parentName:"p"},"AppConfig"),". ",(0,i.kt)("inlineCode",{parentName:"p"},"SimApp")," is constructed upon calling the ",(0,i.kt)("inlineCode",{parentName:"p"},"Build")," method on the injected ",(0,i.kt)("inlineCode",{parentName:"p"},"*runtime.AppBuilder"),".",(0,i.kt)("br",{parentName:"p"}),"\n","In short, ",(0,i.kt)("inlineCode",{parentName:"p"},"depinject")," and the ",(0,i.kt)("a",{parentName:"p",href:"https://pkg.go.dev/github.com/cosmos/cosmos-sdk/runtime"},(0,i.kt)("inlineCode",{parentName:"a"},"runtime")," package")," abstract the wiring of the app, and the ",(0,i.kt)("inlineCode",{parentName:"p"},"AppBuilder")," takes care of constructing the application. ",(0,i.kt)("a",{parentName:"p",href:"https://pkg.go.dev/github.com/cosmos/cosmos-sdk/runtime"},(0,i.kt)("inlineCode",{parentName:"a"},"runtime"))," handles registering the codecs, KV store, subspaces, and instantiating ",(0,i.kt)("inlineCode",{parentName:"p"},"baseapp"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.53.0-rc.2/simapp/app_di.go#L100-L270\n")),(0,i.kt)("admonition",{type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"When using ",(0,i.kt)("inlineCode",{parentName:"p"},"depinject.Inject"),", the injected types must be pointers.")),(0,i.kt)("h3",{id:"advanced-configuration"},"Advanced Configuration"),(0,i.kt)("p",null,"In advanced cases, it is possible to inject extra (module) configuration in a way that is not (yet) supported by ",(0,i.kt)("inlineCode",{parentName:"p"},"AppConfig"),".",(0,i.kt)("br",{parentName:"p"}),"\n","In this case, use ",(0,i.kt)("inlineCode",{parentName:"p"},"depinject.Configs")," for combining the extra configuration, and ",(0,i.kt)("inlineCode",{parentName:"p"},"AppConfig")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"depinject.Supply")," for providing the extra configuration.\nMore information on how ",(0,i.kt)("inlineCode",{parentName:"p"},"depinject.Configs")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"depinject.Supply")," function can be found in the ",(0,i.kt)("a",{parentName:"p",href:"https://pkg.go.dev/cosmossdk.io/depinject"},(0,i.kt)("inlineCode",{parentName:"a"},"depinject")," documentation"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.53.0-rc.2/simapp/app_di.go#L114-L162\n")),(0,i.kt)("h3",{id:"registering-non-app-wiring-modules"},"Registering non app wiring modules"),(0,i.kt)("p",null,"It is possible to combine app wiring / depinject enabled modules with non-app wiring modules.\nTo do so, use the ",(0,i.kt)("inlineCode",{parentName:"p"},"app.RegisterModules")," method to register the modules on your app, as well as ",(0,i.kt)("inlineCode",{parentName:"p"},"app.RegisterStores")," for registering the extra stores needed."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"// ....\napp.App = appBuilder.Build(db, traceStore, baseAppOptions...)\n\n// register module manually\napp.RegisterStores(storetypes.NewKVStoreKey(example.ModuleName))\napp.ExampleKeeper = examplekeeper.NewKeeper(app.appCodec, app.AccountKeeper.AddressCodec(), runtime.NewKVStoreService(app.GetKey(example.ModuleName)), authtypes.NewModuleAddress(govtypes.ModuleName).String())\nexampleAppModule := examplemodule.NewAppModule(app.ExampleKeeper)\nif err := app.RegisterModules(&exampleAppModule); err != nil {\n    panic(err)\n}\n\n// ....\n")),(0,i.kt)("admonition",{type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"When using AutoCLI and combining app wiring and non-app wiring modules. The AutoCLI options should be manually constructed instead of injected.\nOtherwise it will miss the non depinject modules and not register their CLI.")),(0,i.kt)("h3",{id:"complete-app_digo"},"Complete ",(0,i.kt)("inlineCode",{parentName:"h3"},"app_di.go")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Note that in the complete ",(0,i.kt)("inlineCode",{parentName:"p"},"SimApp")," ",(0,i.kt)("inlineCode",{parentName:"p"},"app_di.go")," file, testing utilities are also defined, but they could as well be defined in a separate file.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.53.0-rc.2/simapp/app_di.go\n")))}c.isMDXComponent=!0}}]);