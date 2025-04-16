"use strict";(self.webpackChunkcosmos_sdk_docs=self.webpackChunkcosmos_sdk_docs||[]).push([[13212],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>f});var o=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=o.createContext({}),u=function(e){var t=o.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=u(a),p=n,f=d["".concat(s,".").concat(p)]||d[p]||c[p]||r;return a?o.createElement(f,i(i({ref:t},m),{},{components:a})):o.createElement(f,i({ref:t},m))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:n,i[1]=l;for(var u=2;u<r;u++)i[u]=a[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}p.displayName="MDXCreateElement"},42591:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var o=a(87462),n=(a(67294),a(3905));const r={sidebar_position:0},i="List of Modules",l={unversionedId:"build/modules/README",id:"version-0.5/build/modules/README",title:"List of Modules",description:"Here are some production-grade modules that can be used in Cosmos SDK applications, along with their respective documentation:",source:"@site/versioned_docs/version-0.5/build/modules/README.md",sourceDirName:"build/modules",slug:"/build/modules/",permalink:"/v0.50/build/modules/",draft:!1,tags:[],version:"0.5",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"buildSidebar",previous:{title:"Vote Extensions",permalink:"/v0.50/build/abci/vote-extensions"},next:{title:"x/auth",permalink:"/v0.50/build/modules/auth/"}},s={},u=[{value:"Essential Modules",id:"essential-modules",level:2},{value:"Supplementary Modules",id:"supplementary-modules",level:2},{value:"Deprecated Modules",id:"deprecated-modules",level:2},{value:"IBC",id:"ibc",level:2},{value:"CosmWasm",id:"cosmwasm",level:2},{value:"EVM",id:"evm",level:2}],m={toc:u},d="wrapper";function c(e){let{components:t,...a}=e;return(0,n.kt)(d,(0,o.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"list-of-modules"},"List of Modules"),(0,n.kt)("p",null,"Here are some production-grade modules that can be used in Cosmos SDK applications, along with their respective documentation:"),(0,n.kt)("h2",{id:"essential-modules"},"Essential Modules"),(0,n.kt)("p",null,"Essential modules include functionality that ",(0,n.kt)("em",{parentName:"p"},"must")," be included in your Cosmos SDK blockchain.\nThese modules provide the core behaviors that are needed for users and operators such as balance tracking,\nproof-of-stake capabilities and governance."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/v0.50/build/modules/auth/"},"Auth")," - Authentication of accounts and transactions for Cosmos SDK applications."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/v0.50/build/modules/bank/"},"Bank")," - Token transfer functionalities."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/v0.50/build/modules/circuit/"},"Circuit")," - Circuit breaker module for pausing messages."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/v0.50/build/modules/consensus/"},"Consensus")," - Consensus module for modifying CometBFT's ABCI consensus params."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/v0.50/build/modules/distribution/"},"Distribution")," - Fee distribution, and staking token provision distribution."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/v0.50/build/modules/evidence/"},"Evidence")," - Evidence handling for double signing, misbehaviour, etc."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/v0.50/build/modules/gov/"},"Governance")," - On-chain proposals and voting."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/v0.50/build/modules/genutil/"},"Genutil")," - Genesis utilities for the Cosmos SDK."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/v0.50/build/modules/mint/"},"Mint")," - Creation of new units of staking token."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/v0.50/build/modules/slashing/"},"Slashing")," - Validator punishment mechanisms."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/v0.50/build/modules/staking/"},"Staking")," - Proof-of-Stake layer for public blockchains."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/v0.50/build/modules/upgrade/"},"Upgrade")," - Software upgrades handling and coordination.")),(0,n.kt)("h2",{id:"supplementary-modules"},"Supplementary Modules"),(0,n.kt)("p",null,"Supplementary modules are modules that are maintained in the Cosmos SDK but are not necessary for\nthe core functionality of your blockchain.  They can be thought of as ways to extend the\ncapabilities of your blockchain or further specialize it."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/v0.50/build/modules/authz/"},"Authz")," - Authorization for accounts to perform actions on behalf of other accounts."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/v0.50/build/modules/epochs/"},"Epochs")," - Registration so SDK modules can have logic to be executed at the timed tickers."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/v0.50/build/modules/feegrant/"},"Feegrant")," - Grant fee allowances for executing transactions."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/v0.50/build/modules/group/"},"Group")," - Allows for the creation and management of on-chain multisig accounts."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/v0.50/build/modules/nft/"},"NFT")," - NFT module implemented based on ",(0,n.kt)("a",{parentName:"li",href:"https://docs.cosmos.network/main/architecture/adr-043-nft-module.html"},"ADR43"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/v0.50/build/modules/protocolpool/"},"ProtocolPool")," - Extended management of community pool functionality.")),(0,n.kt)("h2",{id:"deprecated-modules"},"Deprecated Modules"),(0,n.kt)("p",null,"The following modules are deprecated.  They will no longer be maintained and eventually will be removed\nin an upcoming release of the Cosmos SDK per our ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/blob/main/RELEASE_PROCESS.md"},"release process"),"."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/v0.50/build/modules/crisis/"},"Crisis")," - ",(0,n.kt)("em",{parentName:"li"},"Deprecated")," halting the blockchain under certain circumstances (e.g. if an invariant is broken)."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/v0.50/build/modules/params/"},"Params")," - ",(0,n.kt)("em",{parentName:"li"},"Deprecated")," Globally available parameter store.")),(0,n.kt)("p",null,"To learn more about the process of building modules, visit the ",(0,n.kt)("a",{parentName:"p",href:"https://docs.cosmos.network/main/building-modules/intro"},"building modules reference documentation"),"."),(0,n.kt)("h2",{id:"ibc"},"IBC"),(0,n.kt)("p",null,"The IBC module for the SDK is maintained by the IBC Go team in its ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go"},"own repository"),"."),(0,n.kt)("p",null,"Additionally, the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/tree/fdd664698d79864f1e00e147f9879e58497b5ef1/modules/capability"},"capability module")," is from v0.50+ maintained by the IBC Go team in its ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/tree/fdd664698d79864f1e00e147f9879e58497b5ef1/modules/capability"},"own repository"),"."),(0,n.kt)("h2",{id:"cosmwasm"},"CosmWasm"),(0,n.kt)("p",null,"The CosmWasm module enables smart contracts, learn more by going to their ",(0,n.kt)("a",{parentName:"p",href:"https://book.cosmwasm.com/"},"documentation site"),", or visit ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/cosmwasm"},"the repository"),"."),(0,n.kt)("h2",{id:"evm"},"EVM"),(0,n.kt)("p",null,"Read more about writing smart contracts with solidity at the official ",(0,n.kt)("a",{parentName:"p",href:"https://docs.evmos.org/modules/evm/"},(0,n.kt)("inlineCode",{parentName:"a"},"evm")," documentation page"),"."))}c.isMDXComponent=!0}}]);