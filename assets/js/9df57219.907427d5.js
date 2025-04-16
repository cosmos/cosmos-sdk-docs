"use strict";(self.webpackChunkcosmos_sdk_docs=self.webpackChunkcosmos_sdk_docs||[]).push([[56825],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(r),d=o,f=p["".concat(l,".").concat(d)]||p[d]||m[d]||i;return r?n.createElement(f,a(a({ref:t},c),{},{components:r})):n.createElement(f,a({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},99930:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var n=r(87462),o=(r(67294),r(3905));const i={sidebar_position:1},a="SDK Migrations",s={unversionedId:"build/migrations/intro",id:"version-0.5/build/migrations/intro",title:"SDK Migrations",description:"To smoothen the update to the latest stable release, the SDK includes a CLI command for hard-fork migrations (under the  genesis migrate subcommand).",source:"@site/versioned_docs/version-0.5/build/migrations/01-intro.md",sourceDirName:"build/migrations",slug:"/build/migrations/intro",permalink:"/v0.50/build/migrations/intro",draft:!1,tags:[],version:"0.5",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"buildSidebar",previous:{title:"x/genutil",permalink:"/v0.50/build/modules/genutil/"},next:{title:"Upgrade Reference",permalink:"/v0.50/build/migrations/upgrade-reference"}},l={},u=[],c={toc:u},p="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"sdk-migrations"},"SDK Migrations"),(0,o.kt)("p",null,"To smoothen the update to the latest stable release, the SDK includes a CLI command for hard-fork migrations (under the ",(0,o.kt)("inlineCode",{parentName:"p"},"<appd> genesis migrate")," subcommand).\nAdditionally, the SDK includes in-place migrations for its core modules. These in-place migrations are useful to migrate between major releases."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Hard-fork migrations are supported from the last major release to the current one."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.cosmos.network/main/core/upgrade#overwriting-genesis-functions"},"In-place module migrations")," are supported from the last two major releases to the current one.")),(0,o.kt)("p",null,"Migration from a version older than the last two major releases is not supported."),(0,o.kt)("p",null,"When migrating from a previous version, refer to the ",(0,o.kt)("a",{parentName:"p",href:"/v0.50/build/migrations/upgrading"},(0,o.kt)("inlineCode",{parentName:"a"},"UPGRADING.md"))," and the ",(0,o.kt)("inlineCode",{parentName:"p"},"CHANGELOG.md")," of the version you are migrating to."))}m.isMDXComponent=!0}}]);