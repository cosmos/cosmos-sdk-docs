"use strict";(self.webpackChunkcosmos_sdk_docs=self.webpackChunkcosmos_sdk_docs||[]).push([[71889],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),f=o,m=p["".concat(c,".").concat(f)]||p[f]||d[f]||i;return r?n.createElement(m,a(a({ref:t},u),{},{components:r})):n.createElement(m,a({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},23355:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const i={sidebar_position:1},a="Requests for Comments",s={unversionedId:"build/rfc/README",id:"version-0.5/build/rfc/README",title:"Requests for Comments",description:"A Request for Comments (RFC) is a record of discussion on an open-ended topic",source:"@site/versioned_docs/version-0.5/build/rfc/README.md",sourceDirName:"build/rfc",slug:"/build/rfc/",permalink:"/v0.50/build/rfc/",draft:!1,tags:[],version:"0.5",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"buildSidebar",previous:{title:"ADR {ADR-NUMBER}:",permalink:"/v0.50/build/architecture/adr-template"},next:{title:"Requests for Comments",permalink:"/v0.50/build/rfc/rfc/"}},c={},l=[{value:"RFC Content",id:"rfc-content",level:2},{value:"Table of Contents",id:"table-of-contents",level:2}],u={toc:l},p="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"requests-for-comments"},"Requests for Comments"),(0,o.kt)("p",null,"A Request for Comments (RFC) is a record of discussion on an open-ended topic\nrelated to the design and implementation of the Cosmos SDK, for which no\nimmediate decision is required."),(0,o.kt)("p",null,"The purpose of an RFC is to serve as a historical record of a high-level\ndiscussion that might otherwise only be recorded in an ad-hoc way (for example,\nvia gists or Google docs) that are difficult to discover for someone after the\nfact. An RFC ",(0,o.kt)("em",{parentName:"p"},"may")," give rise to more specific architectural ",(0,o.kt)("em",{parentName:"p"},"decisions")," for\nthe Cosmos SDK, but those decisions must be recorded separately in\n",(0,o.kt)("a",{parentName:"p",href:"../architecture"},"Architecture Decision Records (ADR)"),"."),(0,o.kt)("p",null,"As a rule of thumb, if you can articulate a specific question that needs to be\nanswered, write an ADR. If you need to explore the topic and get input from\nothers to know what questions need to be answered, an RFC may be appropriate."),(0,o.kt)("h2",{id:"rfc-content"},"RFC Content"),(0,o.kt)("p",null,"An RFC should provide:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A ",(0,o.kt)("strong",{parentName:"li"},"changelog"),", documenting when and how the RFC has changed."),(0,o.kt)("li",{parentName:"ul"},"An ",(0,o.kt)("strong",{parentName:"li"},"abstract"),", briefly summarizing the topic so the reader can quickly tell\nwhether it is relevant to their interest."),(0,o.kt)("li",{parentName:"ul"},"Any ",(0,o.kt)("strong",{parentName:"li"},"background")," a reader will need to understand and participate in the\nsubstance of the discussion (links to other documents are fine here)."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("strong",{parentName:"li"},"discussion"),", the primary content of the document.")),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"/v0.50/build/rfc/rfc-template"},"rfc-template.md")," file includes placeholders for these\nsections."),(0,o.kt)("h2",{id:"table-of-contents"},"Table of Contents"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/v0.50/build/rfc/rfc-001-tx-validation"},"RFC-001: Tx Validation"))))}d.isMDXComponent=!0}}]);