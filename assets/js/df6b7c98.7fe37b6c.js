"use strict";(self.webpackChunkcosmos_sdk_docs=self.webpackChunkcosmos_sdk_docs||[]).push([[53843],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(n),f=a,m=u["".concat(l,".").concat(f)]||u[f]||d[f]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},12723:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={sidebar_position:1},i="Configuration",c={unversionedId:"learn/advanced/config",id:"version-0.53/learn/advanced/config",title:"Configuration",description:"This documentation refers to the app.toml, if you'd like to read about the config.toml please visit CometBFT docs.",source:"@site/versioned_docs/version-0.53/learn/advanced/16-config.md",sourceDirName:"learn/advanced",slug:"/learn/advanced/config",permalink:"/v0.53/learn/advanced/config",draft:!1,tags:[],version:"0.53",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"learnSidebar",previous:{title:"In-Place Store Migrations",permalink:"/v0.53/learn/advanced/upgrade"},next:{title:"AutoCLI",permalink:"/v0.53/learn/advanced/autocli"}},l={},s=[{value:"inter-block-cache",id:"inter-block-cache",level:2},{value:"iavl-cache-size",id:"iavl-cache-size",level:2},{value:"iavl-lazy-loading",id:"iavl-lazy-loading",level:2}],p={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"This documentation refers to the app.toml, if you'd like to read about the config.toml please visit ",(0,a.kt)("a",{parentName:"p",href:"https://docs.cometbft.com/v0.37/"},"CometBFT docs"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/main/tools/confix/data/v0.47-app.toml \n")),(0,a.kt)("h2",{id:"inter-block-cache"},"inter-block-cache"),(0,a.kt)("p",null,"This feature will consume more ram than a normal node, if enabled."),(0,a.kt)("h2",{id:"iavl-cache-size"},"iavl-cache-size"),(0,a.kt)("p",null,"Using this feature will increase ram consumption"),(0,a.kt)("h2",{id:"iavl-lazy-loading"},"iavl-lazy-loading"),(0,a.kt)("p",null,"This feature is to be used for archive nodes, allowing them to have a faster start up time."))}d.isMDXComponent=!0}}]);