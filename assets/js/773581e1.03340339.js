"use strict";(self.webpackChunkcosmos_sdk_docs=self.webpackChunkcosmos_sdk_docs||[]).push([[804],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>k});var a=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(t),c=l,k=m["".concat(s,".").concat(c)]||m[c]||d[c]||i;return t?a.createElement(k,r(r({ref:n},u),{},{components:t})):a.createElement(k,r({ref:n},u))}));function k(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var i=t.length,r=new Array(i);r[0]=c;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[m]="string"==typeof e?e:l,r[1]=o;for(var p=2;p<i;p++)r[p]=t[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},14157:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=t(87462),l=(t(67294),t(3905));const i={sidebar_position:1},r="x/mint",o={unversionedId:"build/modules/mint/README",id:"version-0.53/build/modules/mint/README",title:"x/mint",description:"Contents",source:"@site/versioned_docs/version-0.53/build/modules/mint/README.md",sourceDirName:"build/modules/mint",slug:"/build/modules/mint/",permalink:"/v0.53/build/modules/mint/",draft:!1,tags:[],version:"0.53",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"buildSidebar",previous:{title:"x/group",permalink:"/v0.53/build/modules/group/"},next:{title:"x/nft",permalink:"/v0.53/build/modules/nft/"}},s={},p=[{value:"Contents",id:"contents",level:2},{value:"Concepts",id:"concepts",level:2},{value:"The Minting Mechanism",id:"the-minting-mechanism",level:3},{value:"State",id:"state",level:2},{value:"Minter",id:"minter",level:3},{value:"Params",id:"params",level:3},{value:"Begin-Block",id:"begin-block",level:2},{value:"Inflation rate calculation",id:"inflation-rate-calculation",level:3},{value:"NextInflationRate",id:"nextinflationrate",level:4},{value:"NextAnnualProvisions",id:"nextannualprovisions",level:3},{value:"BlockProvision",id:"blockprovision",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Events",id:"events",level:2},{value:"BeginBlocker",id:"beginblocker",level:3},{value:"Client",id:"client",level:2},{value:"CLI",id:"cli",level:3},{value:"Query",id:"query",level:4},{value:"annual-provisions",id:"annual-provisions",level:5},{value:"inflation",id:"inflation",level:5},{value:"params",id:"params-1",level:5},{value:"gRPC",id:"grpc",level:3},{value:"AnnualProvisions",id:"annualprovisions",level:4},{value:"Inflation",id:"inflation-1",level:4},{value:"Params",id:"params-2",level:4},{value:"REST",id:"rest",level:3},{value:"annual-provisions",id:"annual-provisions-1",level:4},{value:"inflation",id:"inflation-2",level:4},{value:"params",id:"params-3",level:4}],u={toc:p},m="wrapper";function d(e){let{components:n,...t}=e;return(0,l.kt)(m,(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"xmint"},(0,l.kt)("inlineCode",{parentName:"h1"},"x/mint")),(0,l.kt)("h2",{id:"contents"},"Contents"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#state"},"State"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#minter"},"Minter")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#params"},"Params")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#begin-block"},"Begin-Block"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#nextinflationrate"},"NextInflationRate")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#nextannualprovisions"},"NextAnnualProvisions")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#blockprovision"},"BlockProvision")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#parameters"},"Parameters")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#events"},"Events"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#beginblocker"},"BeginBlocker")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#client"},"Client"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#cli"},"CLI")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#grpc"},"gRPC")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#rest"},"REST"))))),(0,l.kt)("h2",{id:"concepts"},"Concepts"),(0,l.kt)("h3",{id:"the-minting-mechanism"},"The Minting Mechanism"),(0,l.kt)("p",null,"The minting mechanism was designed to:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"allow for a flexible inflation rate determined by market demand targeting a particular bonded-stake ratio"),(0,l.kt)("li",{parentName:"ul"},"effect a balance between market liquidity and staked supply")),(0,l.kt)("p",null,"In order to best determine the appropriate market rate for inflation rewards, a\nmoving change rate is used.  The moving change rate mechanism ensures that if\nthe % bonded is either over or under the goal %-bonded, the inflation rate will\nadjust to further incentivize or disincentivize being bonded, respectively. Setting the goal\n%-bonded at less than 100% encourages the network to maintain some non-staked tokens\nwhich should help provide some liquidity."),(0,l.kt)("p",null,"It can be broken down in the following way:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"If the actual percentage of bonded tokens is below the goal %-bonded the inflation rate will\nincrease until a maximum value is reached"),(0,l.kt)("li",{parentName:"ul"},"If the goal % bonded (67% in Cosmos-Hub) is maintained, then the inflation\nrate will stay constant"),(0,l.kt)("li",{parentName:"ul"},"If the actual percentage of bonded tokens is above the goal %-bonded the inflation rate will\ndecrease until a minimum value is reached")),(0,l.kt)("h2",{id:"state"},"State"),(0,l.kt)("h3",{id:"minter"},"Minter"),(0,l.kt)("p",null,"The minter is a space for holding current inflation information."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Minter: ",(0,l.kt)("inlineCode",{parentName:"li"},"0x00 -> ProtocolBuffer(minter)"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-protobuf",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.47.0-rc1/proto/cosmos/mint/v1beta1/mint.proto#L10-L24\n")),(0,l.kt)("h3",{id:"params"},"Params"),(0,l.kt)("p",null,"The mint module stores its params in state with the prefix of ",(0,l.kt)("inlineCode",{parentName:"p"},"0x01"),",\nit can be updated with governance or the address with authority."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Params: ",(0,l.kt)("inlineCode",{parentName:"li"},"mint/params -> legacy_amino(params)"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-protobuf",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.47.0-rc1/proto/cosmos/mint/v1beta1/mint.proto#L26-L59\n")),(0,l.kt)("h2",{id:"begin-block"},"Begin-Block"),(0,l.kt)("p",null,"Minting parameters are recalculated and inflation paid at the beginning of each block."),(0,l.kt)("h3",{id:"inflation-rate-calculation"},"Inflation rate calculation"),(0,l.kt)("p",null,'Inflation rate is calculated using an "inflation calculation function" that\'s\npassed to the ',(0,l.kt)("inlineCode",{parentName:"p"},"NewAppModule")," function. If no function is passed, then the SDK's\ndefault inflation function will be used (",(0,l.kt)("inlineCode",{parentName:"p"},"NextInflationRate"),"). In case a custom\ninflation calculation logic is needed, this can be achieved by defining and\npassing a function that matches ",(0,l.kt)("inlineCode",{parentName:"p"},"InflationCalculationFn"),"'s signature."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"type InflationCalculationFn func(ctx sdk.Context, minter Minter, params Params, bondedRatio math.LegacyDec) math.LegacyDec\n")),(0,l.kt)("h4",{id:"nextinflationrate"},"NextInflationRate"),(0,l.kt)("p",null,"The target annual inflation rate is recalculated each block.\nThe inflation is also subject to a rate change (positive or negative)\ndepending on the distance from the desired ratio (67%). The maximum rate change\npossible is defined to be 13% per year, however, the annual inflation is capped\nas between 7% and 20%."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"NextInflationRate(params Params, bondedRatio math.LegacyDec) (inflation math.LegacyDec) {\n    inflationRateChangePerYear = (1 - bondedRatio/params.GoalBonded) * params.InflationRateChange\n    inflationRateChange = inflationRateChangePerYear/blocksPerYr\n\n    // increase the new annual inflation for this next block\n    inflation += inflationRateChange\n    if inflation > params.InflationMax {\n        inflation = params.InflationMax\n    }\n    if inflation < params.InflationMin {\n        inflation = params.InflationMin\n    }\n\n    return inflation\n}\n")),(0,l.kt)("h3",{id:"nextannualprovisions"},"NextAnnualProvisions"),(0,l.kt)("p",null,"Calculate the annual provisions based on current total supply and inflation\nrate. This parameter is calculated once per block."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"NextAnnualProvisions(params Params, totalSupply math.LegacyDec) (provisions math.LegacyDec) {\n    return Inflation * totalSupply\n")),(0,l.kt)("h3",{id:"blockprovision"},"BlockProvision"),(0,l.kt)("p",null,"Calculate the provisions generated for each block based on current annual provisions. The provisions are then minted by the ",(0,l.kt)("inlineCode",{parentName:"p"},"mint")," module's ",(0,l.kt)("inlineCode",{parentName:"p"},"ModuleMinterAccount")," and then transferred to the ",(0,l.kt)("inlineCode",{parentName:"p"},"auth"),"'s ",(0,l.kt)("inlineCode",{parentName:"p"},"FeeCollector")," ",(0,l.kt)("inlineCode",{parentName:"p"},"ModuleAccount"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"BlockProvision(params Params) sdk.Coin {\n    provisionAmt = AnnualProvisions/ params.BlocksPerYear\n    return sdk.NewCoin(params.MintDenom, provisionAmt.Truncate())\n")),(0,l.kt)("h2",{id:"parameters"},"Parameters"),(0,l.kt)("p",null,"The minting module contains the following parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Key"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Example"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MintDenom"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},'"uatom"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"InflationRateChange"),(0,l.kt)("td",{parentName:"tr",align:null},"string (dec)"),(0,l.kt)("td",{parentName:"tr",align:null},'"0.130000000000000000"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"InflationMax"),(0,l.kt)("td",{parentName:"tr",align:null},"string (dec)"),(0,l.kt)("td",{parentName:"tr",align:null},'"0.200000000000000000"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"InflationMin"),(0,l.kt)("td",{parentName:"tr",align:null},"string (dec)"),(0,l.kt)("td",{parentName:"tr",align:null},'"0.070000000000000000"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"GoalBonded"),(0,l.kt)("td",{parentName:"tr",align:null},"string (dec)"),(0,l.kt)("td",{parentName:"tr",align:null},'"0.670000000000000000"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"BlocksPerYear"),(0,l.kt)("td",{parentName:"tr",align:null},"string (uint64)"),(0,l.kt)("td",{parentName:"tr",align:null},'"6311520"')))),(0,l.kt)("h2",{id:"events"},"Events"),(0,l.kt)("p",null,"The minting module emits the following events:"),(0,l.kt)("h3",{id:"beginblocker"},"BeginBlocker"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Attribute Key"),(0,l.kt)("th",{parentName:"tr",align:null},"Attribute Value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mint"),(0,l.kt)("td",{parentName:"tr",align:null},"bonded_ratio"),(0,l.kt)("td",{parentName:"tr",align:null},"{bondedRatio}")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mint"),(0,l.kt)("td",{parentName:"tr",align:null},"inflation"),(0,l.kt)("td",{parentName:"tr",align:null},"{inflation}")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mint"),(0,l.kt)("td",{parentName:"tr",align:null},"annual_provisions"),(0,l.kt)("td",{parentName:"tr",align:null},"{annualProvisions}")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mint"),(0,l.kt)("td",{parentName:"tr",align:null},"amount"),(0,l.kt)("td",{parentName:"tr",align:null},"{amount}")))),(0,l.kt)("h2",{id:"client"},"Client"),(0,l.kt)("h3",{id:"cli"},"CLI"),(0,l.kt)("p",null,"A user can query and interact with the ",(0,l.kt)("inlineCode",{parentName:"p"},"mint")," module using the CLI."),(0,l.kt)("h4",{id:"query"},"Query"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"query")," commands allows users to query ",(0,l.kt)("inlineCode",{parentName:"p"},"mint")," state."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"simd query mint --help\n")),(0,l.kt)("h5",{id:"annual-provisions"},"annual-provisions"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"annual-provisions")," command allows users to query the current minting annual provisions value"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"simd query mint annual-provisions [flags]\n")),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"simd query mint annual-provisions\n")),(0,l.kt)("p",null,"Example Output:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"22268504368893.612100895088410693\n")),(0,l.kt)("h5",{id:"inflation"},"inflation"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"inflation")," command allows users to query the current minting inflation value"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"simd query mint inflation [flags]\n")),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"simd query mint inflation\n")),(0,l.kt)("p",null,"Example Output:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"0.199200302563256955\n")),(0,l.kt)("h5",{id:"params-1"},"params"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"params")," command allows users to query the current minting parameters"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"simd query mint params [flags]\n")),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},'blocks_per_year: "4360000"\ngoal_bonded: "0.670000000000000000"\ninflation_max: "0.200000000000000000"\ninflation_min: "0.070000000000000000"\ninflation_rate_change: "0.130000000000000000"\nmint_denom: stake\n')),(0,l.kt)("h3",{id:"grpc"},"gRPC"),(0,l.kt)("p",null,"A user can query the ",(0,l.kt)("inlineCode",{parentName:"p"},"mint")," module using gRPC endpoints."),(0,l.kt)("h4",{id:"annualprovisions"},"AnnualProvisions"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"AnnualProvisions")," endpoint allows users to query the current minting annual provisions value"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"/cosmos.mint.v1beta1.Query/AnnualProvisions\n")),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"grpcurl -plaintext localhost:9090 cosmos.mint.v1beta1.Query/AnnualProvisions\n")),(0,l.kt)("p",null,"Example Output:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "annualProvisions": "1432452520532626265712995618"\n}\n')),(0,l.kt)("h4",{id:"inflation-1"},"Inflation"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"Inflation")," endpoint allows users to query the current minting inflation value"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"/cosmos.mint.v1beta1.Query/Inflation\n")),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"grpcurl -plaintext localhost:9090 cosmos.mint.v1beta1.Query/Inflation\n")),(0,l.kt)("p",null,"Example Output:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "inflation": "130197115720711261"\n}\n')),(0,l.kt)("h4",{id:"params-2"},"Params"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"Params")," endpoint allows users to query the current minting parameters"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"/cosmos.mint.v1beta1.Query/Params\n")),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"grpcurl -plaintext localhost:9090 cosmos.mint.v1beta1.Query/Params\n")),(0,l.kt)("p",null,"Example Output:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "params": {\n    "mintDenom": "stake",\n    "inflationRateChange": "130000000000000000",\n    "inflationMax": "200000000000000000",\n    "inflationMin": "70000000000000000",\n    "goalBonded": "670000000000000000",\n    "blocksPerYear": "6311520"\n  }\n}\n')),(0,l.kt)("h3",{id:"rest"},"REST"),(0,l.kt)("p",null,"A user can query the ",(0,l.kt)("inlineCode",{parentName:"p"},"mint")," module using REST endpoints."),(0,l.kt)("h4",{id:"annual-provisions-1"},"annual-provisions"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"/cosmos/mint/v1beta1/annual_provisions\n")),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl "localhost:1317/cosmos/mint/v1beta1/annual_provisions"\n')),(0,l.kt)("p",null,"Example Output:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "annualProvisions": "1432452520532626265712995618"\n}\n')),(0,l.kt)("h4",{id:"inflation-2"},"inflation"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"/cosmos/mint/v1beta1/inflation\n")),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl "localhost:1317/cosmos/mint/v1beta1/inflation"\n')),(0,l.kt)("p",null,"Example Output:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "inflation": "130197115720711261"\n}\n')),(0,l.kt)("h4",{id:"params-3"},"params"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"/cosmos/mint/v1beta1/params\n")),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl "localhost:1317/cosmos/mint/v1beta1/params"\n')),(0,l.kt)("p",null,"Example Output:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "params": {\n    "mintDenom": "stake",\n    "inflationRateChange": "130000000000000000",\n    "inflationMax": "200000000000000000",\n    "inflationMin": "70000000000000000",\n    "goalBonded": "670000000000000000",\n    "blocksPerYear": "6311520"\n  }\n}\n')))}d.isMDXComponent=!0}}]);