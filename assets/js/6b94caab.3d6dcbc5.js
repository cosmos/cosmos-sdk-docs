"use strict";(self.webpackChunkcosmos_sdk_docs=self.webpackChunkcosmos_sdk_docs||[]).push([[55390],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=p(a),c=r,h=u["".concat(l,".").concat(c)]||u[c]||d[c]||s;return a?n.createElement(h,i(i({ref:t},m),{},{components:a})):n.createElement(h,i({ref:t},m))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,i=new Array(s);i[0]=c;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<s;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},45365:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const s={},i="ADR 046: Module Params",o={unversionedId:"build/architecture/adr-046-module-params",id:"version-0.53/build/architecture/adr-046-module-params",title:"ADR 046: Module Params",description:"Changelog",source:"@site/versioned_docs/version-0.53/build/architecture/adr-046-module-params.md",sourceDirName:"build/architecture",slug:"/build/architecture/adr-046-module-params",permalink:"/v0.53/build/architecture/adr-046-module-params",draft:!1,tags:[],version:"0.53",frontMatter:{},sidebar:"buildSidebar",previous:{title:"ADR 045: BaseApp {Check,Deliver}Tx as Middlewares",permalink:"/v0.53/build/architecture/adr-045-check-delivertx-middlewares"},next:{title:"ADR 047: Extend Upgrade Plan",permalink:"/v0.53/build/architecture/adr-047-extend-upgrade-plan"}},l={},p=[{value:"Changelog",id:"changelog",level:2},{value:"Status",id:"status",level:2},{value:"Abstract",id:"abstract",level:2},{value:"Context",id:"context",level:2},{value:"Decision",id:"decision",level:2},{value:"Consequences",id:"consequences",level:2},{value:"Backwards Compatibility",id:"backwards-compatibility",level:3},{value:"Positive",id:"positive",level:3},{value:"Negative",id:"negative",level:3},{value:"Neutral",id:"neutral",level:3},{value:"References",id:"references",level:2}],m={toc:p},u="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"adr-046-module-params"},"ADR 046: Module Params"),(0,r.kt)("h2",{id:"changelog"},"Changelog"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Sep 22, 2021: Initial Draft")),(0,r.kt)("h2",{id:"status"},"Status"),(0,r.kt)("p",null,"Proposed"),(0,r.kt)("h2",{id:"abstract"},"Abstract"),(0,r.kt)("p",null,"This ADR describes an alternative approach to how Cosmos SDK modules use, interact,\nand store their respective parameters."),(0,r.kt)("h2",{id:"context"},"Context"),(0,r.kt)("p",null,"Currently, in the Cosmos SDK, modules that require the use of parameters use the\n",(0,r.kt)("inlineCode",{parentName:"p"},"x/params")," module. The ",(0,r.kt)("inlineCode",{parentName:"p"},"x/params")," works by having modules define parameters,\ntypically via a simple ",(0,r.kt)("inlineCode",{parentName:"p"},"Params")," structure, and registering that structure in\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"x/params")," module via a unique ",(0,r.kt)("inlineCode",{parentName:"p"},"Subspace")," that belongs to the respective\nregistering module. The registering module then has unique access to its respective\n",(0,r.kt)("inlineCode",{parentName:"p"},"Subspace"),". Through this ",(0,r.kt)("inlineCode",{parentName:"p"},"Subspace"),", the module can get and set its ",(0,r.kt)("inlineCode",{parentName:"p"},"Params"),"\nstructure."),(0,r.kt)("p",null,"In addition, the Cosmos SDK's ",(0,r.kt)("inlineCode",{parentName:"p"},"x/gov")," module has direct support for changing\nparameters on-chain via a ",(0,r.kt)("inlineCode",{parentName:"p"},"ParamChangeProposal")," governance proposal type, where\nstakeholders can vote on suggested parameter changes."),(0,r.kt)("p",null,"There are various tradeoffs to using the ",(0,r.kt)("inlineCode",{parentName:"p"},"x/params"),' module to manage individual\nmodule parameters. Namely, managing parameters essentially comes for "free" in\nthat developers only need to define the ',(0,r.kt)("inlineCode",{parentName:"p"},"Params")," struct, the ",(0,r.kt)("inlineCode",{parentName:"p"},"Subspace"),", and the\nvarious auxiliary functions, e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"ParamSetPairs"),", on the ",(0,r.kt)("inlineCode",{parentName:"p"},"Params")," type. However,\nthere are some notable drawbacks. These drawbacks include the fact that parameters\nare serialized in state via JSON which is extremely slow. In addition, parameter\nchanges via ",(0,r.kt)("inlineCode",{parentName:"p"},"ParamChangeProposal")," governance proposals have no way of reading from\nor writing to state. In other words, it is currently not possible to have any\nstate transitions in the application during an attempt to change param(s)."),(0,r.kt)("h2",{id:"decision"},"Decision"),(0,r.kt)("p",null,"We will build off of the alignment of ",(0,r.kt)("inlineCode",{parentName:"p"},"x/gov")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"x/authz")," work per\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/pull/9810"},"#9810"),". Namely, module developers\nwill create one or more unique parameter data structures that must be serialized\nto state. The Param data structures must implement ",(0,r.kt)("inlineCode",{parentName:"p"},"sdk.Msg")," interface with respective\nProtobuf Msg service method which will validate and update the parameters with all\nnecessary changes. The ",(0,r.kt)("inlineCode",{parentName:"p"},"x/gov")," module via the work done in\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/pull/9810"},"#9810"),", will dispatch Param\nmessages, which will be handled by Protobuf Msg services."),(0,r.kt)("p",null,"Note, it is up to developers to decide how to structure their parameters and\nthe respective ",(0,r.kt)("inlineCode",{parentName:"p"},"sdk.Msg")," messages. Consider the parameters currently defined in\n",(0,r.kt)("inlineCode",{parentName:"p"},"x/auth")," using the ",(0,r.kt)("inlineCode",{parentName:"p"},"x/params")," module for parameter management:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-protobuf"},"message Params {\n  uint64 max_memo_characters       = 1;\n  uint64 tx_sig_limit              = 2;\n  uint64 tx_size_cost_per_byte     = 3;\n  uint64 sig_verify_cost_ed25519   = 4;\n  uint64 sig_verify_cost_secp256k1 = 5;\n}\n")),(0,r.kt)("p",null,"Developers can choose to either create a unique data structure for every field in\n",(0,r.kt)("inlineCode",{parentName:"p"},"Params")," or they can create a single ",(0,r.kt)("inlineCode",{parentName:"p"},"Params")," structure as outlined above in the\ncase of ",(0,r.kt)("inlineCode",{parentName:"p"},"x/auth"),"."),(0,r.kt)("p",null,"In the former, ",(0,r.kt)("inlineCode",{parentName:"p"},"x/params"),", approach, a ",(0,r.kt)("inlineCode",{parentName:"p"},"sdk.Msg")," would need to be created for every single\nfield along with a handler. This can become burdensome if there are a lot of\nparameter fields. In the latter case, there is only a single data structure and\nthus only a single message handler, however, the message handler might have to be\nmore sophisticated in that it might need to understand what parameters are being\nchanged vs what parameters are untouched."),(0,r.kt)("p",null,"Params change proposals are made using the ",(0,r.kt)("inlineCode",{parentName:"p"},"x/gov")," module. Execution is done through\n",(0,r.kt)("inlineCode",{parentName:"p"},"x/authz")," authorization to the root ",(0,r.kt)("inlineCode",{parentName:"p"},"x/gov")," module's account."),(0,r.kt)("p",null,"Continuing to use ",(0,r.kt)("inlineCode",{parentName:"p"},"x/auth"),", we demonstrate a more complete example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"type Params struct {\n    MaxMemoCharacters      uint64\n    TxSigLimit             uint64\n    TxSizeCostPerByte      uint64\n    SigVerifyCostED25519   uint64\n    SigVerifyCostSecp256k1 uint64\n}\n\ntype MsgUpdateParams struct {\n    MaxMemoCharacters      uint64\n    TxSigLimit             uint64\n    TxSizeCostPerByte      uint64\n    SigVerifyCostED25519   uint64\n    SigVerifyCostSecp256k1 uint64\n}\n\ntype MsgUpdateParamsResponse struct {}\n\nfunc (ms msgServer) UpdateParams(goCtx context.Context, msg *types.MsgUpdateParams) (*types.MsgUpdateParamsResponse, error) {\n  ctx := sdk.UnwrapSDKContext(goCtx)\n\n  // verification logic...\n\n  // persist params\n  params := ParamsFromMsg(msg)\n  ms.SaveParams(ctx, params)\n\n  return &types.MsgUpdateParamsResponse{}, nil\n}\n\nfunc ParamsFromMsg(msg *types.MsgUpdateParams) Params {\n  // ...\n}\n")),(0,r.kt)("p",null,"A gRPC ",(0,r.kt)("inlineCode",{parentName:"p"},"Service")," query should also be provided, for example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-protobuf"},'service Query {\n  // ...\n  \n  rpc Params(QueryParamsRequest) returns (QueryParamsResponse) {\n    option (google.api.http).get = "/cosmos/<module>/v1beta1/params";\n  }\n}\n\nmessage QueryParamsResponse {\n  Params params = 1 [(gogoproto.nullable) = false];\n}\n')),(0,r.kt)("h2",{id:"consequences"},"Consequences"),(0,r.kt)("p",null,"As a result of implementing the module parameter methodology, we gain the ability\nfor module parameter changes to be stateful and extensible to fit nearly every\napplication's use case. We will be able to emit events (and trigger hooks registered\nto that events using the work proposed in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/discussions/9656"},"event hooks"),"),\ncall other Msg service methods or perform migration.\nIn addition, there will be significant gains in performance when it comes to reading\nand writing parameters from and to state, especially if a specific set of parameters\nare read on a consistent basis."),(0,r.kt)("p",null,"However, this methodology will require developers to implement more types and\nMsg service metohds which can become burdensome if many parameters exist. In addition,\ndevelopers are required to implement persistance logics of module parameters.\nHowever, this should be trivial."),(0,r.kt)("h3",{id:"backwards-compatibility"},"Backwards Compatibility"),(0,r.kt)("p",null,"The new method for working with module parameters is naturally not backwards\ncompatible with the existing ",(0,r.kt)("inlineCode",{parentName:"p"},"x/params")," module. However, the ",(0,r.kt)("inlineCode",{parentName:"p"},"x/params")," will\nremain in the Cosmos SDK and will be marked as deprecated with no additional\nfunctionality being added apart from potential bug fixes. Note, the ",(0,r.kt)("inlineCode",{parentName:"p"},"x/params"),"\nmodule may be removed entirely in a future release."),(0,r.kt)("h3",{id:"positive"},"Positive"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Module parameters are serialized more efficiently"),(0,r.kt)("li",{parentName:"ul"},"Modules are able to react on parameters changes and perform additional actions."),(0,r.kt)("li",{parentName:"ul"},"Special events can be emitted, allowing hooks to be triggered.")),(0,r.kt)("h3",{id:"negative"},"Negative"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Module parameters becomes slightly more burdensome for module developers:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Modules are now responsible for persisting and retrieving parameter state"),(0,r.kt)("li",{parentName:"ul"},"Modules are now required to have unique message handlers to handle parameter\nchanges per unique parameter data structure.")))),(0,r.kt)("h3",{id:"neutral"},"Neutral"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Requires ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/cosmos/cosmos-sdk/pull/9810"},"#9810")," to be reviewed\nand merged.")),(0,r.kt)("h2",{id:"references"},"References"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/cosmos/cosmos-sdk/pull/9810"},"https://github.com/cosmos/cosmos-sdk/pull/9810")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/cosmos/cosmos-sdk/issues/9438"},"https://github.com/cosmos/cosmos-sdk/issues/9438")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/cosmos/cosmos-sdk/discussions/9913"},"https://github.com/cosmos/cosmos-sdk/discussions/9913"))))}d.isMDXComponent=!0}}]);