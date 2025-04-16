"use strict";(self.webpackChunkcosmos_sdk_docs=self.webpackChunkcosmos_sdk_docs||[]).push([[22343],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,k=u["".concat(s,".").concat(m)]||u[m]||c[m]||r;return n?o.createElement(k,i(i({ref:t},d),{},{components:n})):o.createElement(k,i({ref:t},d))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},35096:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var o=n(87462),a=(n(67294),n(3905));const r={},i="Upgrade Reference",l={unversionedId:"build/migrations/upgrade-reference",id:"build/migrations/upgrade-reference",title:"Upgrade Reference",description:"This document provides a quick reference for the upgrades from v0.50.x to v0.53.x of Cosmos SDK.",source:"@site/docs/build/migrations/02-upgrade-reference.md",sourceDirName:"build/migrations",slug:"/build/migrations/upgrade-reference",permalink:"/main/build/migrations/upgrade-reference",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"buildSidebar",previous:{title:"SDK Migrations",permalink:"/main/build/migrations/intro"},next:{title:"Upgrade Guide",permalink:"/main/build/migrations/upgrade-guide"}},s={},p=[{value:"TLDR;",id:"tldr",level:3},{value:"Unordered Transactions",id:"unordered-transactions",level:3},{value:"Enabling Unordered Transactions",id:"enabling-unordered-transactions",level:4},{value:"App Wiring Changes",id:"app-wiring-changes",level:3},{value:"New Modules",id:"new-modules",level:3},{value:"Epochs",id:"epochs",level:4},{value:"ProtocolPool",id:"protocolpool",level:4},{value:"Misc Changes",id:"misc-changes",level:3},{value:"Testnet&#39;s init-files Command",id:"testnets-init-files-command",level:4},{value:"Flag Changes",id:"flag-changes",level:5},{value:"Flag Additions",id:"flag-additions",level:5}],d={toc:p},u="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"upgrade-reference"},"Upgrade Reference"),(0,a.kt)("p",null,"This document provides a quick reference for the upgrades from ",(0,a.kt)("inlineCode",{parentName:"p"},"v0.50.x")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"v0.53.x")," of Cosmos SDK."),(0,a.kt)("p",null,"Note, always read the ",(0,a.kt)("strong",{parentName:"p"},"App Wiring Changes")," section for more information on application wiring updates."),(0,a.kt)("p",null,"\ud83d\udea8Upgrading to v0.53.x will require a ",(0,a.kt)("strong",{parentName:"p"},"coordinated")," chain upgrade.\ud83d\udea8"),(0,a.kt)("h3",{id:"tldr"},"TLDR;"),(0,a.kt)("p",null,"Unordered transactions, ",(0,a.kt)("inlineCode",{parentName:"p"},"x/protocolpool"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"x/epoch")," are the major new features added in v0.53.x."),(0,a.kt)("p",null,"We also added the ability to add a ",(0,a.kt)("inlineCode",{parentName:"p"},"CheckTx")," handler and enabled ed25519 signature verification."),(0,a.kt)("p",null,"For a full list of changes, see the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/blob/release/v0.53.x/CHANGELOG.md"},"Changelog"),"."),(0,a.kt)("h3",{id:"unordered-transactions"},"Unordered Transactions"),(0,a.kt)("p",null,"The Cosmos SDK now supports unordered transactions. ",(0,a.kt)("em",{parentName:"p"},"This is an opt-in feature"),"."),(0,a.kt)("p",null,"Clients that use this feature may now submit their transactions in a fire-and-forget manner to chains that enabled unordered transactions."),(0,a.kt)("p",null,"To submit an unordered transaction, clients must set the ",(0,a.kt)("inlineCode",{parentName:"p"},"unordered")," flag to\n",(0,a.kt)("inlineCode",{parentName:"p"},"true")," and ensure a reasonable ",(0,a.kt)("inlineCode",{parentName:"p"},"timeout_timestamp")," is set. The ",(0,a.kt)("inlineCode",{parentName:"p"},"timeout_timestamp")," is\nused as a TTL for the transaction and provides replay protection. Each transaction's ",(0,a.kt)("inlineCode",{parentName:"p"},"timeout_timestamp")," must be\nunique to the account; however, the difference may be as small as a nanosecond. See ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/blob/main/docs/architecture/adr-070-unordered-transactions.md"},"ADR-070")," for more details."),(0,a.kt)("h4",{id:"enabling-unordered-transactions"},"Enabling Unordered Transactions"),(0,a.kt)("p",null,"To enable unordered transactions, set the new ",(0,a.kt)("inlineCode",{parentName:"p"},"UnorderedNonceManager")," field in the ",(0,a.kt)("inlineCode",{parentName:"p"},"x/auth")," ",(0,a.kt)("inlineCode",{parentName:"p"},"ante.HandlerOptions"),"."),(0,a.kt)("p",null,"By default, unordered transactions use a transaction timeout duration of 10 minutes and a default gas charge of 2240 gas.\nTo modify these default values, pass in the corresponding options to the new ",(0,a.kt)("inlineCode",{parentName:"p"},"UnorderedTxOptions")," field in ",(0,a.kt)("inlineCode",{parentName:"p"},"x/auth's")," ",(0,a.kt)("inlineCode",{parentName:"p"},"ante.HandlerOptions"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"options := ante.HandlerOptions{\n    UnorderedNonceManager: app.AccountKeeper,\n    // The following options are set by default.\n    // If you do not want to change these, you may remove the UnorderedTxOptions field entirely.\n    UnorderedTxOptions: []ante.UnorderedTxDecoratorOptions{\n        ante.WithUnorderedTxGasCost(2240),\n        ante.WithTimeoutDuration(10 * time.Minute),\n    },\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"anteDecorators := []sdk.AnteDecorator{\n  ante.NewSetUpContextDecorator(), // outermost AnteDecorator. SetUpContext must be called first\n  circuitante.NewCircuitBreakerDecorator(options.CircuitKeeper),\n  ante.NewExtensionOptionsDecorator(options.ExtensionOptionChecker),\n  ante.NewValidateBasicDecorator(),\n  ante.NewTxTimeoutHeightDecorator(),\n  ante.NewValidateMemoDecorator(options.AccountKeeper),\n  ante.NewConsumeGasForTxSizeDecorator(options.AccountKeeper),\n  ante.NewDeductFeeDecorator(options.AccountKeeper, options.BankKeeper, options.FeegrantKeeper, options.TxFeeChecker),\n  ante.NewSetPubKeyDecorator(options.AccountKeeper), // SetPubKeyDecorator must be called before all signature verification decorators\n  ante.NewValidateSigCountDecorator(options.AccountKeeper),\n  ante.NewSigGasConsumeDecorator(options.AccountKeeper, options.SigGasConsumer),\n  ante.NewSigVerificationDecorator(options.AccountKeeper, options.SignModeHandler),\n  ante.NewIncrementSequenceDecorator(options.AccountKeeper),\n  // NEW !! NEW !! NEW !!\n  ante.NewUnorderedTxDecorator(options.UnorderedNonceManager, options.UnorderedTxOptions...)\n}\n")),(0,a.kt)("h3",{id:"app-wiring-changes"},"App Wiring Changes"),(0,a.kt)("p",null,"In this section, we describe the required app wiring changes to run a v0.53.x Cosmos SDK application."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"These changes are directly applicable to your application wiring.")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"x/auth")," module now contains a ",(0,a.kt)("inlineCode",{parentName:"p"},"PreBlocker")," that ",(0,a.kt)("em",{parentName:"p"},"must")," be set in the module manager's ",(0,a.kt)("inlineCode",{parentName:"p"},"SetOrderPreBlockers")," method."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"app.ModuleManager.SetOrderPreBlockers(\n    upgradetypes.ModuleName,\n    authtypes.ModuleName, // NEW\n)\n")),(0,a.kt)("p",null,"That's it."),(0,a.kt)("h3",{id:"new-modules"},"New Modules"),(0,a.kt)("p",null,"Below are some ",(0,a.kt)("strong",{parentName:"p"},"optional")," new modules you can include in your chain.\nTo see a full example of wiring these modules, please check out the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/blob/release/v0.53.x/simapp/app.go"},"SimApp"),"."),(0,a.kt)("h4",{id:"epochs"},"Epochs"),(0,a.kt)("p",null,"\u26a0\ufe0fAdding this module requires a ",(0,a.kt)("inlineCode",{parentName:"p"},"StoreUpgrade"),"\u26a0\ufe0f"),(0,a.kt)("p",null,"The new, supplemental ",(0,a.kt)("inlineCode",{parentName:"p"},"x/epochs")," module provides Cosmos SDK modules functionality to register and execute custom logic at fixed time-intervals."),(0,a.kt)("p",null,"Required wiring:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Keeper Instantiation"),(0,a.kt)("li",{parentName:"ul"},"StoreKey addition"),(0,a.kt)("li",{parentName:"ul"},"Hooks Registration "),(0,a.kt)("li",{parentName:"ul"},"App Module Registration"),(0,a.kt)("li",{parentName:"ul"},"entry in SetOrderBeginBlockers"),(0,a.kt)("li",{parentName:"ul"},"entry in SetGenesisModuleOrder"),(0,a.kt)("li",{parentName:"ul"},"entry in SetExportModuleOrder")),(0,a.kt)("h4",{id:"protocolpool"},"ProtocolPool"),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"Using ",(0,a.kt)("inlineCode",{parentName:"p"},"protocolpool")," will cause the following ",(0,a.kt)("inlineCode",{parentName:"p"},"x/distribution")," handlers to return an error:"),(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"QueryService")),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"CommunityPool"))),(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"MsgService")),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"CommunityPoolSpend")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"FundCommunityPool"))),(0,a.kt)("p",{parentName:"admonition"},"If you have services that rely on this functionality from ",(0,a.kt)("inlineCode",{parentName:"p"},"x/distribution"),", please update them to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"x/protocolpool")," equivalents.")),(0,a.kt)("p",null,"\u26a0\ufe0fAdding this module requires a ",(0,a.kt)("inlineCode",{parentName:"p"},"StoreUpgrade"),"\u26a0\ufe0f"),(0,a.kt)("p",null,"The new, supplemental ",(0,a.kt)("inlineCode",{parentName:"p"},"x/protocolpool")," module provides extended functionality for managing and distributing block reward revenue."),(0,a.kt)("p",null,"Required wiring:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Module Account Permissions",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"protocolpooltypes.ModuleName (nil)"),(0,a.kt)("li",{parentName:"ul"},"protocolpooltypes.ProtocolPoolEscrowAccount (nil)"))),(0,a.kt)("li",{parentName:"ul"},"Keeper Instantiation"),(0,a.kt)("li",{parentName:"ul"},"StoreKey addition"),(0,a.kt)("li",{parentName:"ul"},"Passing the keeper to the Distribution Keeper",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"distrkeeper.WithExternalCommunityPool(app.ProtocolPoolKeeper)")))),(0,a.kt)("li",{parentName:"ul"},"App Module Registration"),(0,a.kt)("li",{parentName:"ul"},"entry in SetOrderBeginBlockers"),(0,a.kt)("li",{parentName:"ul"},"entry in SetOrderEndBlockers"),(0,a.kt)("li",{parentName:"ul"},"entry in SetGenesisModuleOrder"),(0,a.kt)("li",{parentName:"ul"},"entry in SetExportModuleOrder ",(0,a.kt)("strong",{parentName:"li"},"before ",(0,a.kt)("inlineCode",{parentName:"strong"},"x/bank")))),(0,a.kt)("h3",{id:"misc-changes"},"Misc Changes"),(0,a.kt)("h4",{id:"testnets-init-files-command"},"Testnet's init-files Command"),(0,a.kt)("p",null,"Some changes were made to ",(0,a.kt)("inlineCode",{parentName:"p"},"testnet"),"'s ",(0,a.kt)("inlineCode",{parentName:"p"},"init-files")," command to support our new testing framework, ",(0,a.kt)("inlineCode",{parentName:"p"},"Systemtest"),"."),(0,a.kt)("h5",{id:"flag-changes"},"Flag Changes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The flag for validator count was changed from ",(0,a.kt)("inlineCode",{parentName:"li"},"--v")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"--validator-count"),"(shorthand: ",(0,a.kt)("inlineCode",{parentName:"li"},"-v"),").")),(0,a.kt)("h5",{id:"flag-additions"},"Flag Additions"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--staking-denom")," allows changing the default stake denom, ",(0,a.kt)("inlineCode",{parentName:"li"},"stake"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--commit-timeout")," enables changing the commit timeout of the chain."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--single-host")," enables running a multi-node network on a single host. This bumps each subsequent node's network addresses by 1. For example, node1's gRPC address will be 9090, node2's 9091, etc...")))}c.isMDXComponent=!0}}]);