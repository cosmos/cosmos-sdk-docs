"use strict";(self.webpackChunkcosmos_sdk_docs=self.webpackChunkcosmos_sdk_docs||[]).push([[17680],{3905:(e,o,n)=>{n.d(o,{Zo:()=>d,kt:()=>g});var t=n(67294);function r(e,o,n){return o in e?Object.defineProperty(e,o,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[o]=n,e}function a(e,o){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);o&&(t=t.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),n.push.apply(n,t)}return n}function p(e){for(var o=1;o<arguments.length;o++){var n=null!=arguments[o]?arguments[o]:{};o%2?a(Object(n),!0).forEach((function(o){r(e,o,n[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))}))}return e}function l(e,o){if(null==e)return{};var n,t,r=function(e,o){if(null==e)return{};var n,t,r={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],o.indexOf(n)>=0||(r[n]=e[n]);return r}(e,o);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],o.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=t.createContext({}),s=function(e){var o=t.useContext(i),n=o;return e&&(n="function"==typeof e?e(o):p(p({},o),e)),n},d=function(e){var o=s(e.components);return t.createElement(i.Provider,{value:o},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var o=e.children;return t.createElement(t.Fragment,{},o)}},m=t.forwardRef((function(e,o){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(n),m=r,g=c["".concat(i,".").concat(m)]||c[m]||u[m]||a;return n?t.createElement(g,p(p({ref:o},d),{},{components:n})):t.createElement(g,p({ref:o},d))}));function g(e,o){var n=arguments,r=o&&o.mdxType;if("string"==typeof e||r){var a=n.length,p=new Array(a);p[0]=m;var l={};for(var i in o)hasOwnProperty.call(o,i)&&(l[i]=o[i]);l.originalType=e,l[c]="string"==typeof e?e:r,p[1]=l;for(var s=2;s<a;s++)p[s]=n[s];return t.createElement.apply(null,p)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},12435:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>i,contentTitle:()=>p,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var t=n(87462),r=(n(67294),n(3905));const a={},p="Upgrade Guide",l={unversionedId:"build/migrations/upgrade-guide",id:"version-0.53/build/migrations/upgrade-guide",title:"Upgrade Guide",description:"This document provides a full guide for upgrading a Cosmos SDK chain from v0.50.x to v0.53.x.",source:"@site/versioned_docs/version-0.53/build/migrations/03-upgrade-guide.md",sourceDirName:"build/migrations",slug:"/build/migrations/upgrade-guide",permalink:"/v0.53/build/migrations/upgrade-guide",draft:!1,tags:[],version:"0.53",sidebarPosition:3,frontMatter:{},sidebar:"buildSidebar",previous:{title:"Upgrade Reference",permalink:"/v0.53/build/migrations/upgrade-reference"},next:{title:"Packages",permalink:"/v0.53/build/packages/"}},i={},s=[{value:"Table of Contents",id:"table-of-contents",level:2},{value:"App Wiring Changes <strong>REQUIRED</strong>",id:"app-wiring-changes-required",level:2},{value:"Adding ProtocolPool Module <strong>OPTIONAL</strong>",id:"adding-protocolpool-module-optional",level:2},{value:"ProtocolPool Manual Wiring",id:"protocolpool-manual-wiring",level:3},{value:"ProtocolPool DI Wiring",id:"protocolpool-di-wiring",level:3},{value:"Adding Epochs Module <strong>OPTIONAL</strong>",id:"adding-epochs-module-optional",level:2},{value:"Epochs Manual Wiring",id:"epochs-manual-wiring",level:3},{value:"Epochs DI Wiring",id:"epochs-di-wiring",level:3},{value:"Enable Unordered Transactions <strong>OPTIONAL</strong>",id:"enable-unordered-transactions-optional",level:2},{value:"Upgrade Handler",id:"upgrade-handler",level:2}],d={toc:s},c="wrapper";function u(e){let{components:o,...n}=e;return(0,r.kt)(c,(0,t.Z)({},d,n,{components:o,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"upgrade-guide"},"Upgrade Guide"),(0,r.kt)("p",null,"This document provides a full guide for upgrading a Cosmos SDK chain from ",(0,r.kt)("inlineCode",{parentName:"p"},"v0.50.x")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"v0.53.x"),"."),(0,r.kt)("p",null,"This guide includes one ",(0,r.kt)("strong",{parentName:"p"},"required")," change and three ",(0,r.kt)("strong",{parentName:"p"},"optional")," features."),(0,r.kt)("p",null,"After completing this guide, applications will have:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"x/protocolpool")," module"),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"x/epochs")," module"),(0,r.kt)("li",{parentName:"ul"},"Unordered Transaction support")),(0,r.kt)("h2",{id:"table-of-contents"},"Table of Contents"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#app-wiring-changes-required"},"App Wiring Changes (REQUIRED)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#adding-protocolpool-module-optional"},"Adding ProtocolPool Module (OPTIONAL)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#protocolpool-manual-wiring"},"ProtocolPool Manual Wiring")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#protocolpool-di-wiring"},"ProtocolPool DI Wiring")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#adding-epochs-module-optional"},"Adding Epochs Module (OPTIONAL)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#epochs-manual-wiring"},"Epochs Manual Wiring")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#epochs-di-wiring"},"Epochs DI Wiring")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#enable-unordered-transactions-optional"},"Enable Unordered Transactions (OPTIONAL)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#upgrade-handler"},"Upgrade Handler"))),(0,r.kt)("h2",{id:"app-wiring-changes-required"},"App Wiring Changes ",(0,r.kt)("strong",{parentName:"h2"},"REQUIRED")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"x/auth")," module now contains a ",(0,r.kt)("inlineCode",{parentName:"p"},"PreBlocker")," that ",(0,r.kt)("em",{parentName:"p"},"must")," be set in the module manager's ",(0,r.kt)("inlineCode",{parentName:"p"},"SetOrderPreBlockers")," method."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"app.ModuleManager.SetOrderPreBlockers(\n    upgradetypes.ModuleName,\n    authtypes.ModuleName, // NEW\n)\n")),(0,r.kt)("h2",{id:"adding-protocolpool-module-optional"},"Adding ProtocolPool Module ",(0,r.kt)("strong",{parentName:"h2"},"OPTIONAL")),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"Using an external community pool such as ",(0,r.kt)("inlineCode",{parentName:"p"},"x/protocolpool")," will cause the following ",(0,r.kt)("inlineCode",{parentName:"p"},"x/distribution")," handlers to return an error:"),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"QueryService")),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"CommunityPool"))),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"MsgService")),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"CommunityPoolSpend")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"FundCommunityPool"))),(0,r.kt)("p",{parentName:"admonition"},"If your services depend on this functionality from ",(0,r.kt)("inlineCode",{parentName:"p"},"x/distribution"),", please update them to use either ",(0,r.kt)("inlineCode",{parentName:"p"},"x/protocolpool")," or your custom external community pool alternatives.")),(0,r.kt)("h3",{id:"protocolpool-manual-wiring"},"ProtocolPool Manual Wiring"),(0,r.kt)("p",null,"Import the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    // ...\n    "github.com/cosmos/cosmos-sdk/x/protocolpool"\n    protocolpoolkeeper "github.com/cosmos/cosmos-sdk/x/protocolpool/keeper"\n    protocolpooltypes "github.com/cosmos/cosmos-sdk/x/protocolpool/types"\n)\n')),(0,r.kt)("p",null,"Set the module account permissions."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"maccPerms = map[string][]string{\n    // ...\n    protocolpooltypes.ModuleName:                nil,\n    protocolpooltypes.ProtocolPoolEscrowAccount: nil,\n}\n")),(0,r.kt)("p",null,"Add the protocol pool keeper to your application struct."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"ProtocolPoolKeeper protocolpoolkeeper.Keeper\n")),(0,r.kt)("p",null,"Add the store key:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"keys := storetypes.NewKVStoreKeys(\n    // ...\n    protocolpooltypes.StoreKey,\n)\n")),(0,r.kt)("p",null,"Instantiate the keeper."),(0,r.kt)("p",null,"Make sure to do this before the distribution module instantiation, as you will pass the keeper there next."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"app.ProtocolPoolKeeper = protocolpoolkeeper.NewKeeper(\n    appCodec,\n    runtime.NewKVStoreService(keys[protocolpooltypes.StoreKey]),\n    app.AccountKeeper,\n    app.BankKeeper,\n    authtypes.NewModuleAddress(govtypes.ModuleName).String(),\n)\n")),(0,r.kt)("p",null,"Pass the protocolpool keeper to the distribution keeper:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"app.DistrKeeper = distrkeeper.NewKeeper(\n    appCodec,\n    runtime.NewKVStoreService(keys[distrtypes.StoreKey]),\n    app.AccountKeeper,\n    app.BankKeeper,\n    app.StakingKeeper,\n    authtypes.FeeCollectorName,\n    authtypes.NewModuleAddress(govtypes.ModuleName).String(),\n    distrkeeper.WithExternalCommunityPool(app.ProtocolPoolKeeper), // NEW\n)\n")),(0,r.kt)("p",null,"Add the protocolpool module to the module manager:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"app.ModuleManager = module.NewManager(\n    // ...\n    protocolpool.NewAppModule(appCodec, app.ProtocolPoolKeeper, app.AccountKeeper, app.BankKeeper),\n)\n")),(0,r.kt)("p",null,"Add an entry for SetOrderBeginBlockers, SetOrderEndBlockers, SetOrderInitGenesis, and SetOrderExportGenesis."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"app.ModuleManager.SetOrderBeginBlockers(\n    // must come AFTER distribution.\n    distrtypes.ModuleName,\n    protocolpooltypes.ModuleName,\n)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"app.ModuleManager.SetOrderEndBlockers(\n    // order does not matter.\n    protocolpooltypes.ModuleName,\n)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"app.ModuleManager.SetOrderInitGenesis(\n    // order does not matter.\n    protocolpooltypes.ModuleName,   \n)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"app.ModuleManager.SetOrderInitGenesis(\n    protocolpooltypes.ModuleName, // must be exported before bank.\n    banktypes.ModuleName,\n)\n")),(0,r.kt)("h3",{id:"protocolpool-di-wiring"},"ProtocolPool DI Wiring"),(0,r.kt)("p",null,"First, set up the keeper for the application."),(0,r.kt)("p",null,"Import the protocolpool keeper:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'protocolpoolkeeper "github.com/cosmos/cosmos-sdk/x/protocolpool/keeper"\n')),(0,r.kt)("p",null,"Add the keeper to your application struct:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"ProtocolPoolKeeper protocolpoolkeeper.Keeper\n")),(0,r.kt)("p",null,"Add the keeper to the depinject system:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"depinject.Inject(\n    appConfig,\n    &appBuilder,\n    &app.appCodec,\n    &app.legacyAmino,\n    &app.txConfig,\n    &app.interfaceRegistry,\n    // ... other modules\n    &app.ProtocolPoolKeeper, // NEW MODULE!\n)\n")),(0,r.kt)("p",null,"Next, set up configuration for the module."),(0,r.kt)("p",null,"Import the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    protocolpoolmodulev1 "cosmossdk.io/api/cosmos/protocolpool/module/v1"\n    \n    _ "github.com/cosmos/cosmos-sdk/x/protocolpool" // import for side-effects\n    protocolpooltypes "github.com/cosmos/cosmos-sdk/x/protocolpool/types"\n)\n')),(0,r.kt)("p",null,"The protocolpool module has module accounts that handle funds. Add them to the module account permission configuration:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"moduleAccPerms = []*authmodulev1.ModuleAccountPermission{\n    // ...\n    {Account: protocolpooltypes.ModuleName},\n    {Account: protocolpooltypes.ProtocolPoolEscrowAccount},\n}\n")),(0,r.kt)("p",null,"Next, add an entry for BeginBlockers, EndBlockers, InitGenesis, and ExportGenesis."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"BeginBlockers: []string{\n    // ...\n    // must be AFTER distribution.\n    distrtypes.ModuleName,\n    protocolpooltypes.ModuleName,\n},\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"EndBlockers: []string{\n    // ...\n    // order for protocolpool does not matter.\n    protocolpooltypes.ModuleName,\n},\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"InitGenesis: []string{\n    // ... must be AFTER distribution.\n    distrtypes.ModuleName,\n    protocolpooltypes.ModuleName,\n},\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"ExportGenesis: []string{\n    // ...\n    // Must be exported before x/bank.\n    protocolpooltypes.ModuleName, \n    banktypes.ModuleName,\n},\n")),(0,r.kt)("p",null,"Lastly, add an entry for protocolpool in the ModuleConfig."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"{\n    Name:   protocolpooltypes.ModuleName,\n    Config: appconfig.WrapAny(&protocolpoolmodulev1.Module{}),\n},\n")),(0,r.kt)("h2",{id:"adding-epochs-module-optional"},"Adding Epochs Module ",(0,r.kt)("strong",{parentName:"h2"},"OPTIONAL")),(0,r.kt)("h3",{id:"epochs-manual-wiring"},"Epochs Manual Wiring"),(0,r.kt)("p",null,"Import the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    // ...\n    "github.com/cosmos/cosmos-sdk/x/epochs"\n    epochskeeper "github.com/cosmos/cosmos-sdk/x/epochs/keeper"\n    epochstypes "github.com/cosmos/cosmos-sdk/x/epochs/types"\n)\n')),(0,r.kt)("p",null,"Add the epochs keeper to your application struct:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"EpochsKeeper epochskeeper.Keeper\n")),(0,r.kt)("p",null,"Add the store key:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"keys := storetypes.NewKVStoreKeys(\n    // ...\n    epochstypes.StoreKey,\n)\n")),(0,r.kt)("p",null,"Instantiate the keeper:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"app.EpochsKeeper = epochskeeper.NewKeeper(\n    runtime.NewKVStoreService(keys[epochstypes.StoreKey]),\n    appCodec,\n)\n")),(0,r.kt)("p",null,"Set up hooks for the epochs keeper:"),(0,r.kt)("p",null,"To learn how to write hooks for the epoch keeper, see the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/blob/main/x/epochs/README.md"},"x/epoch README")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"app.EpochsKeeper.SetHooks(\n    epochstypes.NewMultiEpochHooks(\n        // insert epoch hooks receivers here\n        app.SomeOtherModule\n    ),\n)\n")),(0,r.kt)("p",null,"Add the epochs module to the module manager:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"app.ModuleManager = module.NewManager(\n    // ...\n    epochs.NewAppModule(appCodec, app.EpochsKeeper),\n)\n")),(0,r.kt)("p",null,"Add entries for SetOrderBeginBlockers and SetOrderInitGenesis:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"app.ModuleManager.SetOrderBeginBlockers(\n    // ...\n    epochstypes.ModuleName,\n)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"app.ModuleManager.SetOrderInitGenesis(\n    // ...\n    epochstypes.ModuleName,\n)\n")),(0,r.kt)("h3",{id:"epochs-di-wiring"},"Epochs DI Wiring"),(0,r.kt)("p",null,"First, set up the keeper for the application."),(0,r.kt)("p",null,"Import the epochs keeper:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'epochskeeper "github.com/cosmos/cosmos-sdk/x/epochs/keeper"\n')),(0,r.kt)("p",null,"Add the keeper to your application struct:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"EpochsKeeper epochskeeper.Keeper\n")),(0,r.kt)("p",null,"Add the keeper to the depinject system:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"depinject.Inject(\n    appConfig,\n    &appBuilder,\n    &app.appCodec,\n    &app.legacyAmino,\n    &app.txConfig,\n    &app.interfaceRegistry,\n    // ... other modules\n    &app.EpochsKeeper, // NEW MODULE!\n)\n")),(0,r.kt)("p",null,"Next, set up configuration for the module."),(0,r.kt)("p",null,"Import the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    epochsmodulev1 "cosmossdk.io/api/cosmos/epochs/module/v1"\n    \n    _ "github.com/cosmos/cosmos-sdk/x/epochs" // import for side-effects\n    epochstypes "github.com/cosmos/cosmos-sdk/x/epochs/types"\n)\n')),(0,r.kt)("p",null,"Add an entry for BeginBlockers and InitGenesis:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"BeginBlockers: []string{\n    // ...\n    epochstypes.ModuleName,\n},\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"InitGenesis: []string{\n    // ...\n    epochstypes.ModuleName,\n},\n")),(0,r.kt)("p",null,"Lastly, add an entry for epochs in the ModuleConfig:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"{\n    Name:   epochstypes.ModuleName,\n    Config: appconfig.WrapAny(&epochsmodulev1.Module{}),\n},\n")),(0,r.kt)("h2",{id:"enable-unordered-transactions-optional"},"Enable Unordered Transactions ",(0,r.kt)("strong",{parentName:"h2"},"OPTIONAL")),(0,r.kt)("p",null,"To enable unordered transaction support on an application, the ante handler options must be updated."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"options := ante.HandlerOptions{\n    // ...\n    UnorderedNonceManager: app.AccountKeeper,\n    // The following options are set by default.\n    // If you do not want to change these, you may remove the UnorderedTxOptions field entirely.\n    UnorderedTxOptions: []ante.UnorderedTxDecoratorOptions{\n        ante.WithUnorderedTxGasCost(2240),\n        ante.WithTimeoutDuration(10 * time.Minute),\n    },\n}\n\nanteDecorators := []sdk.AnteDecorator{\n    ante.NewSetUpContextDecorator(), // outermost AnteDecorator. SetUpContext must be called first\n    circuitante.NewCircuitBreakerDecorator(options.CircuitKeeper),\n    ante.NewExtensionOptionsDecorator(options.ExtensionOptionChecker),\n    ante.NewValidateBasicDecorator(),\n    ante.NewTxTimeoutHeightDecorator(),\n    ante.NewValidateMemoDecorator(options.AccountKeeper),\n    ante.NewConsumeGasForTxSizeDecorator(options.AccountKeeper),\n    ante.NewDeductFeeDecorator(options.AccountKeeper, options.BankKeeper, options.FeegrantKeeper, options.TxFeeChecker),\n    ante.NewSetPubKeyDecorator(options.AccountKeeper), // SetPubKeyDecorator must be called before all signature verification decorators\n    ante.NewValidateSigCountDecorator(options.AccountKeeper),\n    ante.NewSigGasConsumeDecorator(options.AccountKeeper, options.SigGasConsumer),\n    ante.NewSigVerificationDecorator(options.AccountKeeper, options.SignModeHandler),\n    ante.NewIncrementSequenceDecorator(options.AccountKeeper),\n    // NEW !! NEW !! NEW !!\n    ante.NewUnorderedTxDecorator(options.UnorderedNonceManager, options.UnorderedTxOptions...)\n}\n")),(0,r.kt)("h2",{id:"upgrade-handler"},"Upgrade Handler"),(0,r.kt)("p",null,"The upgrade handler only requires adding the store upgrades for the modules added above.\nIf your application is not adding ",(0,r.kt)("inlineCode",{parentName:"p"},"x/protocolpool")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"x/epochs"),", you do not need to add the store upgrade."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'// UpgradeName defines the on-chain upgrade name for the sample SimApp upgrade\n// from v050 to v053.\n//\n// NOTE: This upgrade defines a reference implementation of what an upgrade\n// could look like when an application is migrating from Cosmos SDK version\n// v0.50.x to v0.53.x.\nconst UpgradeName = "v050-to-v053"\n\nfunc (app SimApp) RegisterUpgradeHandlers() {\n    app.UpgradeKeeper.SetUpgradeHandler(\n        UpgradeName,\n        func(ctx context.Context, _ upgradetypes.Plan, fromVM module.VersionMap) (module.VersionMap, error) {\n            return app.ModuleManager.RunMigrations(ctx, app.Configurator(), fromVM)\n        },\n    )\n\n    upgradeInfo, err := app.UpgradeKeeper.ReadUpgradeInfoFromDisk()\n    if err != nil {\n        panic(err)\n    }\n\n    if upgradeInfo.Name == UpgradeName && !app.UpgradeKeeper.IsSkipHeight(upgradeInfo.Height) {\n        storeUpgrades := storetypes.StoreUpgrades{\n            Added: []string{\n                epochstypes.ModuleName, // if not adding x/epochs to your chain, remove this line.\n                protocolpooltypes.ModuleName, // if not adding x/protocolpool to your chain, remove this line.\n            },\n        }\n\n        // configure store loader that checks if version == upgradeHeight and applies store upgrades\n        app.SetStoreLoader(upgradetypes.UpgradeStoreLoader(upgradeInfo.Height, &storeUpgrades))\n    }\n}\n')))}u.isMDXComponent=!0}}]);