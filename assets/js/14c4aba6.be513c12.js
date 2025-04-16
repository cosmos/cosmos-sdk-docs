"use strict";(self.webpackChunkcosmos_sdk_docs=self.webpackChunkcosmos_sdk_docs||[]).push([[56060],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),f=o,h=p["".concat(s,".").concat(f)]||p[f]||u[f]||i;return n?a.createElement(h,r(r({ref:t},d),{},{components:n})):a.createElement(h,r({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,r[1]=l;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},16409:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(87462),o=(n(67294),n(3905));const i={},r="RFC 001: Transaction Validation",l={unversionedId:"build/rfc/rfc-001-tx-validation",id:"version-0.53/build/rfc/rfc-001-tx-validation",title:"RFC 001: Transaction Validation",description:"Changelog",source:"@site/versioned_docs/version-0.53/build/rfc/rfc-001-tx-validation.md",sourceDirName:"build/rfc",slug:"/build/rfc/rfc-001-tx-validation",permalink:"/v0.53/build/rfc/rfc-001-tx-validation",draft:!1,tags:[],version:"0.53",frontMatter:{},sidebar:"buildSidebar",previous:{title:"RFC Creation Process",permalink:"/v0.53/build/rfc/PROCESS"},next:{title:"RFC {RFC-NUMBER}:",permalink:"/v0.53/build/rfc/rfc-template"}},s={},c=[{value:"Changelog",id:"changelog",level:2},{value:"Background",id:"background",level:2},{value:"Proposal",id:"proposal",level:2},{value:"Consequences",id:"consequences",level:3}],d={toc:c},p="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"rfc-001-transaction-validation"},"RFC 001: Transaction Validation"),(0,o.kt)("h2",{id:"changelog"},"Changelog"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"2023-03-12: Proposed")),(0,o.kt)("h2",{id:"background"},"Background"),(0,o.kt)("p",null,"Transation Validation is crucial to a functioning state machine. Within the Cosmos SDK there are two validation flows, one is outside the message server and the other within. The flow outside of the message server is the ",(0,o.kt)("inlineCode",{parentName:"p"},"ValidateBasic")," function. It is called in the antehandler on both ",(0,o.kt)("inlineCode",{parentName:"p"},"CheckTx")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"DeliverTx"),". There is an overhead and sometimes duplication of validation within these two flows. This extra validation provides an additional check before entering the mempool."),(0,o.kt)("p",null,"With the deprecation of ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/issues/11275"},(0,o.kt)("inlineCode",{parentName:"a"},"GetSigners"))," we have the optionality to remove ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/blob/16a5404f8e00ddcf8857c8a55dca2f7c109c29bc/types/tx_msg.go#L16"},"sdk.Msg")," and the ",(0,o.kt)("inlineCode",{parentName:"p"},"ValidateBasic")," function. "),(0,o.kt)("p",null,"With the separation of CometBFT and Cosmos-SDK, there is a lack of control of what transactions get broadcasted and included in a block. This extra validation in the antehandler is meant to help in this case. In most cases the transaction is or should be simulated against a node for validation. With this flow transactions will be treated the same. "),(0,o.kt)("h2",{id:"proposal"},"Proposal"),(0,o.kt)("p",null,"The acceptance of this RFC would move validation within ",(0,o.kt)("inlineCode",{parentName:"p"},"ValidateBasic")," to the message server in modules, update tutorials and docs to remove mention of using ",(0,o.kt)("inlineCode",{parentName:"p"},"ValidateBasic")," in favour of handling all validation for a message where it is executed."),(0,o.kt)("p",null,"We can and will still support the ",(0,o.kt)("inlineCode",{parentName:"p"},"Validatebasic")," function for users and provide an extension interface of the function once ",(0,o.kt)("inlineCode",{parentName:"p"},"sdk.Msg")," is depreacted. "),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: This is how messages are handled in VMs like Ethereum and CosmWasm. ")),(0,o.kt)("h3",{id:"consequences"},"Consequences"),(0,o.kt)("p",null,"The consequence of updating the transaction flow is that transaction that may have failed before with the ",(0,o.kt)("inlineCode",{parentName:"p"},"ValidateBasic")," flow will now be included in a block and fees charged."))}u.isMDXComponent=!0}}]);