"use strict";(self.webpackChunkcosmos_sdk_docs=self.webpackChunkcosmos_sdk_docs||[]).push([[43890],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=i.createContext({}),s=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return i.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(n),m=r,g=c["".concat(p,".").concat(m)]||c[m]||d[m]||o;return n?i.createElement(g,a(a({ref:t},u),{},{components:n})):i.createElement(g,a({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:r,a[1]=l;for(var s=2;s<o;s++)a[s]=n[s];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},67137:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var i=n(87462),r=(n(67294),n(3905));const o={sidebar_position:1},a="What is runtime?",l={unversionedId:"build/building-apps/runtime",id:"version-0.53/build/building-apps/runtime",title:"What is runtime?",description:"The runtime package in the Cosmos SDK provides a flexible framework for configuring and managing blockchain applications. It serves as the foundation for creating modular blockchain applications using a declarative configuration approach.",source:"@site/versioned_docs/version-0.53/build/building-apps/00-runtime.md",sourceDirName:"build/building-apps",slug:"/build/building-apps/runtime",permalink:"/v0.53/build/building-apps/runtime",draft:!1,tags:[],version:"0.53",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"buildSidebar",previous:{title:"Overview of app.go",permalink:"/v0.53/build/building-apps/app-go"},next:{title:"Overview of app_di.go",permalink:"/v0.53/build/building-apps/app-go-di"}},p={},s=[{value:"Overview",id:"overview",level:2},{value:"Core Components",id:"core-components",level:2},{value:"App Structure",id:"app-structure",level:3},{value:"Configuration",id:"configuration",level:3},{value:"Store Configuration",id:"store-configuration",level:4},{value:"Key Features",id:"key-features",level:2},{value:"1. BaseApp and other Core SDK components integration",id:"1-baseapp-and-other-core-sdk-components-integration",level:3},{value:"2. Module Registration",id:"2-module-registration",level:3},{value:"3. Service Registration",id:"3-service-registration",level:3},{value:"4. Application Building",id:"4-application-building",level:3},{value:"Best Practices",id:"best-practices",level:2},{value:"Migration Considerations",id:"migration-considerations",level:3}],u={toc:s},c="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"what-is-runtime"},"What is ",(0,r.kt)("inlineCode",{parentName:"h1"},"runtime"),"?"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"runtime")," package in the Cosmos SDK provides a flexible framework for configuring and managing blockchain applications. It serves as the foundation for creating modular blockchain applications using a declarative configuration approach."),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"The runtime package acts as a wrapper around the ",(0,r.kt)("inlineCode",{parentName:"p"},"BaseApp")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"ModuleManager"),", offering a hybrid approach where applications can be configured both declaratively through configuration files and programmatically through traditional methods.\nIt is a layer of abstraction between ",(0,r.kt)("inlineCode",{parentName:"p"},"baseapp")," and the application modules that simplifies the process of building a Cosmos SDK application."),(0,r.kt)("h2",{id:"core-components"},"Core Components"),(0,r.kt)("h3",{id:"app-structure"},"App Structure"),(0,r.kt)("p",null,"The runtime App struct contains several key components:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"type App struct {\n    *baseapp.BaseApp\n    ModuleManager    *module.Manager\n    configurator     module.Configurator\n    config           *runtimev1alpha1.Module\n    storeKeys        []storetypes.StoreKey\n    // ... other fields\n}\n")),(0,r.kt)("p",null,"Cosmos SDK applications should embed the ",(0,r.kt)("inlineCode",{parentName:"p"},"*runtime.App")," struct to leverage the runtime module."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.53.0-rc.2/simapp/app_di.go#L60-L61\n")),(0,r.kt)("h3",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"The runtime module is configured using App Wiring. The main configuration object is the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/blob/v0.53.0-rc.2/proto/cosmos/app/runtime/v1alpha1/module.proto"},(0,r.kt)("inlineCode",{parentName:"a"},"Module")," message"),", which supports the following key settings:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"app_name"),": The name of the application"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"begin_blockers"),": List of module names to call during BeginBlock"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"end_blockers"),": List of module names to call during EndBlock"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"init_genesis"),": Order of module initialization during genesis"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"export_genesis"),": Order for exporting module genesis data"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pre_blockers"),": Modules to execute before block processing")),(0,r.kt)("p",null,"Learn more about wiring ",(0,r.kt)("inlineCode",{parentName:"p"},"runtime")," in the ",(0,r.kt)("a",{parentName:"p",href:"/v0.53/build/building-apps/app-go-di"},"next section"),"."),(0,r.kt)("h4",{id:"store-configuration"},"Store Configuration"),(0,r.kt)("p",null,"By default, the runtime module uses the module name as the store key.\nHowever it provides a flexible store key configuration through:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"override_store_keys"),": Allows customizing module store keys"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"skip_store_keys"),": Specifies store keys to skip during keeper construction")),(0,r.kt)("p",null,"Example configuration:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.53.0-rc.2/simapp/app_config.go#L133-L138\n")),(0,r.kt)("h2",{id:"key-features"},"Key Features"),(0,r.kt)("h3",{id:"1-baseapp-and-other-core-sdk-components-integration"},"1. BaseApp and other Core SDK components integration"),(0,r.kt)("p",null,"The runtime module integrates with the ",(0,r.kt)("inlineCode",{parentName:"p"},"BaseApp")," and other core SDK components to provide a seamless experience for developers."),(0,r.kt)("p",null,"The developer only needs to embed the ",(0,r.kt)("inlineCode",{parentName:"p"},"runtime.App")," struct in their application to leverage the runtime module.\nThe configuration of the module manager and other core components is handled internally via the ",(0,r.kt)("a",{parentName:"p",href:"#4-application-building"},(0,r.kt)("inlineCode",{parentName:"a"},"AppBuilder")),"."),(0,r.kt)("h3",{id:"2-module-registration"},"2. Module Registration"),(0,r.kt)("p",null,"Runtime has built-in support for ",(0,r.kt)("a",{parentName:"p",href:"/v0.53/build/building-modules/depinject"},(0,r.kt)("inlineCode",{parentName:"a"},"depinject"),"-enabled modules"),".\nSuch modules can be registered through the configuration file (often named ",(0,r.kt)("inlineCode",{parentName:"p"},"app_config.go"),"), with no additional code required."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.53.0-rc.2/simapp/app_config.go#L210-L216\n")),(0,r.kt)("p",null,"Additionally, the runtime package facilitates manual module registration through the ",(0,r.kt)("inlineCode",{parentName:"p"},"RegisterModules")," method. This is the primary integration point for modules not registered via configuration."),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"Even when using manual registration, the module should still be configured in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Module")," message in AppConfig.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"func (a *App) RegisterModules(modules ...module.AppModule) error\n")),(0,r.kt)("p",null,"The SDK recommends using the declarative approach with ",(0,r.kt)("inlineCode",{parentName:"p"},"depinject")," for module registration whenever possible."),(0,r.kt)("h3",{id:"3-service-registration"},"3. Service Registration"),(0,r.kt)("p",null,"Runtime registers all ",(0,r.kt)("a",{parentName:"p",href:"https://pkg.go.dev/cosmossdk.io/core"},"core services")," required by modules.\nThese services include ",(0,r.kt)("inlineCode",{parentName:"p"},"store"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"event manager"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"context"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"logger"),".\nRuntime ensures that services are scoped to their respective modules during the wiring process."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.53.0-rc.2/runtime/module.go#L201-L235\n")),(0,r.kt)("p",null,"Additionally, runtime provides automatic registration of other essential (i.e., gRPC routes) services available to the App:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"AutoCLI Query Service"),(0,r.kt)("li",{parentName:"ul"},"Reflection Service"),(0,r.kt)("li",{parentName:"ul"},"Custom module services")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.53.0-rc.2/runtime/builder.go#L52-L54\n")),(0,r.kt)("h3",{id:"4-application-building"},"4. Application Building"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"AppBuilder")," type provides a structured way to build applications:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.53.0-rc.2/runtime/builder.go#L14-L19\n")),(0,r.kt)("p",null,"Key building steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Configuration loading"),(0,r.kt)("li",{parentName:"ol"},"Module registration"),(0,r.kt)("li",{parentName:"ol"},"Service setup"),(0,r.kt)("li",{parentName:"ol"},"Store mounting"),(0,r.kt)("li",{parentName:"ol"},"Router configuration")),(0,r.kt)("p",null,"An application only needs to call ",(0,r.kt)("inlineCode",{parentName:"p"},"AppBuilder.Build")," to create a fully configured application (",(0,r.kt)("inlineCode",{parentName:"p"},"runtime.App"),")."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.53.0-rc.2/runtime/builder.go#L26-L57\n")),(0,r.kt)("p",null,"More information on building applications can be found in the ",(0,r.kt)("a",{parentName:"p",href:"./02-app-building.md"},"next section"),"."),(0,r.kt)("h2",{id:"best-practices"},"Best Practices"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Module Order"),": Carefully consider the order of modules in begin_blockers, end_blockers, and pre_blockers."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Store Keys"),": Use override_store_keys only when necessary to maintain clarity"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Genesis Order"),": Maintain correct initialization order in init_genesis"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Migration Management"),": Use order_migrations to control upgrade paths")),(0,r.kt)("h3",{id:"migration-considerations"},"Migration Considerations"),(0,r.kt)("p",null,"When upgrading between versions:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Review the migration order specified in ",(0,r.kt)("inlineCode",{parentName:"li"},"order_migrations")),(0,r.kt)("li",{parentName:"ol"},"Ensure all required modules are included in the configuration"),(0,r.kt)("li",{parentName:"ol"},"Validate store key configurations"),(0,r.kt)("li",{parentName:"ol"},"Test the upgrade path thoroughly")))}d.isMDXComponent=!0}}]);