"use strict";(self.webpackChunkcosmos_sdk_docs=self.webpackChunkcosmos_sdk_docs||[]).push([[16450],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=l(n),u=o,b=d["".concat(s,".").concat(u)]||d[u]||m[u]||a;return n?r.createElement(b,p(p({ref:t},c),{},{components:n})):r.createElement(b,p({ref:t},c))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,p=new Array(a);p[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:o,p[1]=i;for(var l=2;l<a;l++)p[l]=n[l];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},65731:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const a={},p="Prepare Proposal",i={unversionedId:"build/abci/prepare-proposal",id:"build/abci/prepare-proposal",title:"Prepare Proposal",description:"PrepareProposal handles construction of the block, meaning that when a proposer",source:"@site/docs/build/abci/01-prepare-proposal.md",sourceDirName:"build/abci",slug:"/build/abci/prepare-proposal",permalink:"/main/build/abci/prepare-proposal",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"buildSidebar",previous:{title:"Introduction",permalink:"/main/build/abci/introduction"},next:{title:"Process Proposal",permalink:"/main/build/abci/process-proposal"}},s={},l=[],c={toc:l},d="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"prepare-proposal"},"Prepare Proposal"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"PrepareProposal")," handles construction of the block, meaning that when a proposer\nis preparing to propose a block, it requests the application to evaluate a\n",(0,o.kt)("inlineCode",{parentName:"p"},"RequestPrepareProposal"),", which contains a series of transactions from CometBFT's\nmempool. At this point, the application has complete control over the proposal.\nIt can modify, delete, and inject transactions from its own app-side mempool into\nthe proposal or even ignore all the transactions altogether. What the application\ndoes with the transactions provided to it by ",(0,o.kt)("inlineCode",{parentName:"p"},"RequestPrepareProposal")," has no\neffect on CometBFT's mempool."),(0,o.kt)("p",null,"Note, that the application defines the semantics of the ",(0,o.kt)("inlineCode",{parentName:"p"},"PrepareProposal")," and it\nMAY be non-deterministic and is only executed by the current block proposer."),(0,o.kt)("p",null,"Now, reading mempool twice in the previous sentence is confusing, lets break it down.\nCometBFT has a mempool that handles gossiping transactions to other nodes\nin the network. The order of these transactions is determined by CometBFT's mempool,\nusing FIFO as the sole ordering mechanism. It's worth noting that the priority mempool\nin Comet was removed or deprecated.\nHowever, since the application is able to fully inspect\nall transactions, it can provide greater control over transaction ordering.\nAllowing the application to handle ordering enables the application to define how\nit would like the block constructed."),(0,o.kt)("p",null,"The Cosmos SDK defines the ",(0,o.kt)("inlineCode",{parentName:"p"},"DefaultProposalHandler")," type, which provides applications with\n",(0,o.kt)("inlineCode",{parentName:"p"},"PrepareProposal")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"ProcessProposal")," handlers. If you decide to implement your\nown ",(0,o.kt)("inlineCode",{parentName:"p"},"PrepareProposal")," handler, you must ensure that the transactions\nselected DO NOT exceed the maximum block gas (if set) and the maximum bytes provided\nby ",(0,o.kt)("inlineCode",{parentName:"p"},"req.MaxBytes"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.53.0-rc.2/baseapp/abci_utils.go\n")),(0,o.kt)("p",null,"This default implementation can be overridden by the application developer in\nfavor of a custom implementation in ",(0,o.kt)("a",{parentName:"p",href:"/main/build/building-apps/app-go-di"},(0,o.kt)("inlineCode",{parentName:"a"},"app_di.go")),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"prepareOpt := func(app *baseapp.BaseApp) {\n    abciPropHandler := baseapp.NewDefaultProposalHandler(mempool, app)\n    app.SetPrepareProposal(abciPropHandler.PrepareProposalHandler())\n}\n\nbaseAppOptions = append(baseAppOptions, prepareOpt)\n")))}m.isMDXComponent=!0}}]);