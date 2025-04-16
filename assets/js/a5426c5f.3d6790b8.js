"use strict";(self.webpackChunkcosmos_sdk_docs=self.webpackChunkcosmos_sdk_docs||[]).push([[28842],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>v});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var d=a.createContext({}),s=function(e){var n=a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=s(e.components);return a.createElement(d.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,d=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=s(t),m=i,v=p["".concat(d,".").concat(m)]||p[m]||u[m]||l;return t?a.createElement(v,r(r({ref:n},c),{},{components:t})):a.createElement(v,r({ref:n},c))}));function v(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,r=new Array(l);r[0]=m;var o={};for(var d in n)hasOwnProperty.call(n,d)&&(o[d]=n[d]);o.originalType=e,o[p]="string"==typeof e?e:i,r[1]=o;for(var s=2;s<l;s++)r[s]=t[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},43251:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=t(87462),i=(t(67294),t(3905));const l={sidebar_position:1},r="x/evidence",o={unversionedId:"build/modules/evidence/README",id:"version-0.5/build/modules/evidence/README",title:"x/evidence",description:"* Concepts",source:"@site/versioned_docs/version-0.5/build/modules/evidence/README.md",sourceDirName:"build/modules/evidence",slug:"/build/modules/evidence/",permalink:"/v0.50/build/modules/evidence/",draft:!1,tags:[],version:"0.5",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"buildSidebar",previous:{title:"x/epochs",permalink:"/v0.50/build/modules/epochs/"},next:{title:"x/feegrant",permalink:"/v0.50/build/modules/feegrant/"}},d={},s=[{value:"Abstract",id:"abstract",level:2},{value:"Concepts",id:"concepts",level:2},{value:"Evidence",id:"evidence",level:3},{value:"Registration &amp; Handling",id:"registration--handling",level:3},{value:"State",id:"state",level:2},{value:"Messages",id:"messages",level:2},{value:"MsgSubmitEvidence",id:"msgsubmitevidence",level:3},{value:"Events",id:"events",level:2},{value:"Handlers",id:"handlers",level:3},{value:"MsgSubmitEvidence",id:"msgsubmitevidence-1",level:4},{value:"Parameters",id:"parameters",level:2},{value:"BeginBlock",id:"beginblock",level:2},{value:"Evidence Handling",id:"evidence-handling",level:3},{value:"Equivocation",id:"equivocation",level:4},{value:"Client",id:"client",level:2},{value:"CLI",id:"cli",level:3},{value:"Query",id:"query",level:4},{value:"evidence",id:"evidence-1",level:4},{value:"REST",id:"rest",level:3},{value:"Evidence",id:"evidence-2",level:4},{value:"All evidence",id:"all-evidence",level:4},{value:"gRPC",id:"grpc",level:3},{value:"Evidence",id:"evidence-3",level:4},{value:"All evidence",id:"all-evidence-1",level:4}],c={toc:s},p="wrapper";function u(e){let{components:n,...t}=e;return(0,i.kt)(p,(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"xevidence"},(0,i.kt)("inlineCode",{parentName:"h1"},"x/evidence")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#concepts"},"Concepts")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#state"},"State")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#messages"},"Messages")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#events"},"Events")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#parameters"},"Parameters")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#beginblock"},"BeginBlock")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#client"},"Client"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#cli"},"CLI")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#rest"},"REST")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#grpc"},"gRPC"))))),(0,i.kt)("h2",{id:"abstract"},"Abstract"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"x/evidence")," is an implementation of a Cosmos SDK module, per ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/blob/main/docs/architecture/adr-009-evidence-module.md"},"ADR 009"),",\nthat allows for the submission and handling of arbitrary evidence of misbehavior such\nas equivocation and counterfactual signing."),(0,i.kt)("p",null,"The evidence module differs from standard evidence handling which typically expects the\nunderlying consensus engine, e.g. CometBFT, to automatically submit evidence when\nit is discovered by allowing clients and foreign chains to submit more complex evidence\ndirectly."),(0,i.kt)("p",null,"All concrete evidence types must implement the ",(0,i.kt)("inlineCode",{parentName:"p"},"Evidence")," interface contract. Submitted\n",(0,i.kt)("inlineCode",{parentName:"p"},"Evidence")," is first routed through the evidence module's ",(0,i.kt)("inlineCode",{parentName:"p"},"Router")," in which it attempts\nto find a corresponding registered ",(0,i.kt)("inlineCode",{parentName:"p"},"Handler")," for that specific ",(0,i.kt)("inlineCode",{parentName:"p"},"Evidence")," type.\nEach ",(0,i.kt)("inlineCode",{parentName:"p"},"Evidence")," type must have a ",(0,i.kt)("inlineCode",{parentName:"p"},"Handler")," registered with the evidence module's\nkeeper in order for it to be successfully routed and executed."),(0,i.kt)("p",null,"Each corresponding handler must also fulfill the ",(0,i.kt)("inlineCode",{parentName:"p"},"Handler")," interface contract. The\n",(0,i.kt)("inlineCode",{parentName:"p"},"Handler")," for a given ",(0,i.kt)("inlineCode",{parentName:"p"},"Evidence")," type can perform any arbitrary state transitions\nsuch as slashing, jailing, and tombstoning."),(0,i.kt)("h2",{id:"concepts"},"Concepts"),(0,i.kt)("h3",{id:"evidence"},"Evidence"),(0,i.kt)("p",null,"Any concrete type of evidence submitted to the ",(0,i.kt)("inlineCode",{parentName:"p"},"x/evidence")," module must fulfill the\n",(0,i.kt)("inlineCode",{parentName:"p"},"Evidence")," contract outlined below. Not all concrete types of evidence will fulfill\nthis contract in the same way and some data may be entirely irrelevant to certain\ntypes of evidence. An additional ",(0,i.kt)("inlineCode",{parentName:"p"},"ValidatorEvidence"),", which extends ",(0,i.kt)("inlineCode",{parentName:"p"},"Evidence"),",\nhas also been created to define a contract for evidence against malicious validators."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"// Evidence defines the contract which concrete evidence types of misbehavior\n// must implement.\ntype Evidence interface {\n    proto.Message\n\n    Route() string\n    String() string\n    Hash() []byte\n    ValidateBasic() error\n\n    // Height at which the infraction occurred\n    GetHeight() int64\n}\n\n// ValidatorEvidence extends Evidence interface to define contract\n// for evidence against malicious validators\ntype ValidatorEvidence interface {\n    Evidence\n\n    // The consensus address of the malicious validator at time of infraction\n    GetConsensusAddress() sdk.ConsAddress\n\n    // The total power of the malicious validator at time of infraction\n    GetValidatorPower() int64\n\n    // The total validator set power at time of infraction\n    GetTotalPower() int64\n}\n")),(0,i.kt)("h3",{id:"registration--handling"},"Registration & Handling"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"x/evidence")," module must first know about all types of evidence it is expected\nto handle. This is accomplished by registering the ",(0,i.kt)("inlineCode",{parentName:"p"},"Route")," method in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Evidence"),"\ncontract with what is known as a ",(0,i.kt)("inlineCode",{parentName:"p"},"Router")," (defined below). The ",(0,i.kt)("inlineCode",{parentName:"p"},"Router")," accepts\n",(0,i.kt)("inlineCode",{parentName:"p"},"Evidence")," and attempts to find the corresponding ",(0,i.kt)("inlineCode",{parentName:"p"},"Handler")," for the ",(0,i.kt)("inlineCode",{parentName:"p"},"Evidence"),"\nvia the ",(0,i.kt)("inlineCode",{parentName:"p"},"Route")," method."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"type Router interface {\n  AddRoute(r string, h Handler) Router\n  HasRoute(r string) bool\n  GetRoute(path string) Handler\n  Seal()\n  Sealed() bool\n}\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Handler")," (defined below) is responsible for executing the entirety of the\nbusiness logic for handling ",(0,i.kt)("inlineCode",{parentName:"p"},"Evidence"),". This typically includes validating the\nevidence, both stateless checks via ",(0,i.kt)("inlineCode",{parentName:"p"},"ValidateBasic")," and stateful checks via any\nkeepers provided to the ",(0,i.kt)("inlineCode",{parentName:"p"},"Handler"),". In addition, the ",(0,i.kt)("inlineCode",{parentName:"p"},"Handler")," may also perform\ncapabilities such as slashing and jailing a validator. All ",(0,i.kt)("inlineCode",{parentName:"p"},"Evidence")," handled\nby the ",(0,i.kt)("inlineCode",{parentName:"p"},"Handler")," should be persisted."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"// Handler defines an agnostic Evidence handler. The handler is responsible\n// for executing all corresponding business logic necessary for verifying the\n// evidence as valid. In addition, the Handler may execute any necessary\n// slashing and potential jailing.\ntype Handler func(context.Context, Evidence) error\n")),(0,i.kt)("h2",{id:"state"},"State"),(0,i.kt)("p",null,"Currently the ",(0,i.kt)("inlineCode",{parentName:"p"},"x/evidence")," module only stores valid submitted ",(0,i.kt)("inlineCode",{parentName:"p"},"Evidence")," in state.\nThe evidence state is also stored and exported in the ",(0,i.kt)("inlineCode",{parentName:"p"},"x/evidence")," module's ",(0,i.kt)("inlineCode",{parentName:"p"},"GenesisState"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-protobuf"},"// GenesisState defines the evidence module's genesis state.\nmessage GenesisState {\n  // evidence defines all the evidence at genesis.\n  repeated google.protobuf.Any evidence = 1;\n}\n\n")),(0,i.kt)("p",null,"All ",(0,i.kt)("inlineCode",{parentName:"p"},"Evidence")," is retrieved and stored via a prefix ",(0,i.kt)("inlineCode",{parentName:"p"},"KVStore")," using prefix ",(0,i.kt)("inlineCode",{parentName:"p"},"0x00")," (",(0,i.kt)("inlineCode",{parentName:"p"},"KeyPrefixEvidence"),")."),(0,i.kt)("h2",{id:"messages"},"Messages"),(0,i.kt)("h3",{id:"msgsubmitevidence"},"MsgSubmitEvidence"),(0,i.kt)("p",null,"Evidence is submitted through a ",(0,i.kt)("inlineCode",{parentName:"p"},"MsgSubmitEvidence")," message:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-protobuf"},"// MsgSubmitEvidence represents a message that supports submitting arbitrary\n// Evidence of misbehavior such as equivocation or counterfactual signing.\nmessage MsgSubmitEvidence {\n  string              submitter = 1;\n  google.protobuf.Any evidence  = 2;\n}\n")),(0,i.kt)("p",null,"Note, the ",(0,i.kt)("inlineCode",{parentName:"p"},"Evidence")," of a ",(0,i.kt)("inlineCode",{parentName:"p"},"MsgSubmitEvidence")," message must have a corresponding\n",(0,i.kt)("inlineCode",{parentName:"p"},"Handler")," registered with the ",(0,i.kt)("inlineCode",{parentName:"p"},"x/evidence")," module's ",(0,i.kt)("inlineCode",{parentName:"p"},"Router")," in order to be processed\nand routed correctly."),(0,i.kt)("p",null,"Given the ",(0,i.kt)("inlineCode",{parentName:"p"},"Evidence")," is registered with a corresponding ",(0,i.kt)("inlineCode",{parentName:"p"},"Handler"),", it is processed\nas follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"func SubmitEvidence(ctx Context, evidence Evidence) error {\n  if _, err := GetEvidence(ctx, evidence.Hash()); err == nil {\n    return errorsmod.Wrap(types.ErrEvidenceExists, strings.ToUpper(hex.EncodeToString(evidence.Hash())))\n  }\n  if !router.HasRoute(evidence.Route()) {\n    return errorsmod.Wrap(types.ErrNoEvidenceHandlerExists, evidence.Route())\n  }\n\n  handler := router.GetRoute(evidence.Route())\n  if err := handler(ctx, evidence); err != nil {\n    return errorsmod.Wrap(types.ErrInvalidEvidence, err.Error())\n  }\n\n  ctx.EventManager().EmitEvent(\n        sdk.NewEvent(\n            types.EventTypeSubmitEvidence,\n            sdk.NewAttribute(types.AttributeKeyEvidenceHash, strings.ToUpper(hex.EncodeToString(evidence.Hash()))),\n        ),\n    )\n\n  SetEvidence(ctx, evidence)\n  return nil\n}\n")),(0,i.kt)("p",null,"First, there must not already exist valid submitted ",(0,i.kt)("inlineCode",{parentName:"p"},"Evidence")," of the exact same\ntype. Secondly, the ",(0,i.kt)("inlineCode",{parentName:"p"},"Evidence")," is routed to the ",(0,i.kt)("inlineCode",{parentName:"p"},"Handler")," and executed. Finally,\nif there is no error in handling the ",(0,i.kt)("inlineCode",{parentName:"p"},"Evidence"),", an event is emitted and it is persisted to state."),(0,i.kt)("h2",{id:"events"},"Events"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"x/evidence")," module emits the following events:"),(0,i.kt)("h3",{id:"handlers"},"Handlers"),(0,i.kt)("h4",{id:"msgsubmitevidence-1"},"MsgSubmitEvidence"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Attribute Key"),(0,i.kt)("th",{parentName:"tr",align:null},"Attribute Value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"submit_evidence"),(0,i.kt)("td",{parentName:"tr",align:null},"evidence_hash"),(0,i.kt)("td",{parentName:"tr",align:null},"{evidenceHash}")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"message"),(0,i.kt)("td",{parentName:"tr",align:null},"module"),(0,i.kt)("td",{parentName:"tr",align:null},"evidence")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"message"),(0,i.kt)("td",{parentName:"tr",align:null},"sender"),(0,i.kt)("td",{parentName:"tr",align:null},"{senderAddress}")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"message"),(0,i.kt)("td",{parentName:"tr",align:null},"action"),(0,i.kt)("td",{parentName:"tr",align:null},"submit_evidence")))),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("p",null,"The evidence module does not contain any parameters."),(0,i.kt)("h2",{id:"beginblock"},"BeginBlock"),(0,i.kt)("h3",{id:"evidence-handling"},"Evidence Handling"),(0,i.kt)("p",null,"CometBFT blocks can include\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/cometbft/cometbft/blob/main/spec/abci/abci%2B%2B_basic_concepts.md#evidence"},"Evidence")," that indicates if a validator committed malicious behavior. The relevant information is forwarded to the application as ABCI Evidence in ",(0,i.kt)("inlineCode",{parentName:"p"},"abci.RequestBeginBlock")," so that the validator can be punished accordingly."),(0,i.kt)("h4",{id:"equivocation"},"Equivocation"),(0,i.kt)("p",null,"The Cosmos SDK handles two types of evidence inside the ABCI ",(0,i.kt)("inlineCode",{parentName:"p"},"BeginBlock"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"DuplicateVoteEvidence"),","),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"LightClientAttackEvidence"),".")),(0,i.kt)("p",null,"The evidence module handles these two evidence types the same way. First, the Cosmos SDK converts the CometBFT concrete evidence type to an SDK ",(0,i.kt)("inlineCode",{parentName:"p"},"Evidence")," interface using ",(0,i.kt)("inlineCode",{parentName:"p"},"Equivocation")," as the concrete type."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-protobuf",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.47.0-rc1/proto/cosmos/evidence/v1beta1/evidence.proto#L12-L32\n")),(0,i.kt)("p",null,"For some ",(0,i.kt)("inlineCode",{parentName:"p"},"Equivocation")," submitted in ",(0,i.kt)("inlineCode",{parentName:"p"},"block")," to be valid, it must satisfy:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Evidence.Timestamp >= block.Timestamp - MaxEvidenceAge")),(0,i.kt)("p",null,"Where:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Evidence.Timestamp")," is the timestamp in the block at height ",(0,i.kt)("inlineCode",{parentName:"li"},"Evidence.Height")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"block.Timestamp")," is the current block timestamp.")),(0,i.kt)("p",null,"If valid ",(0,i.kt)("inlineCode",{parentName:"p"},"Equivocation")," evidence is included in a block, the validator's stake is\nreduced (slashed) by ",(0,i.kt)("inlineCode",{parentName:"p"},"SlashFractionDoubleSign")," as defined by the ",(0,i.kt)("inlineCode",{parentName:"p"},"x/slashing"),' module\nof what their stake was when the infraction occurred, rather than when the evidence was discovered.\nWe want to "follow the stake", i.e., the stake that contributed to the infraction\nshould be slashed, even if it has since been redelegated or started unbonding.'),(0,i.kt)("p",null,"In addition, the validator is permanently jailed and tombstoned to make it impossible for that\nvalidator to ever re-enter the validator set."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Equivocation")," evidence is handled as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.47.0-rc1/x/evidence/keeper/infraction.go#L26-L140\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note:")," The slashing, jailing, and tombstoning calls are delegated through the ",(0,i.kt)("inlineCode",{parentName:"p"},"x/slashing")," module\nthat emits informative events and finally delegates calls to the ",(0,i.kt)("inlineCode",{parentName:"p"},"x/staking")," module. See documentation\non slashing and jailing in ",(0,i.kt)("a",{parentName:"p",href:"/v0.50/build/modules/staking/#state-transitions"},"State Transitions"),"."),(0,i.kt)("h2",{id:"client"},"Client"),(0,i.kt)("h3",{id:"cli"},"CLI"),(0,i.kt)("p",null,"A user can query and interact with the ",(0,i.kt)("inlineCode",{parentName:"p"},"evidence")," module using the CLI."),(0,i.kt)("h4",{id:"query"},"Query"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"query")," commands allows users to query ",(0,i.kt)("inlineCode",{parentName:"p"},"evidence")," state."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"simd query evidence --help\n")),(0,i.kt)("h4",{id:"evidence-1"},"evidence"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"evidence")," command allows users to list all evidence or evidence by hash."),(0,i.kt)("p",null,"Usage:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"simd query evidence evidence [flags]\n")),(0,i.kt)("p",null,"To query evidence by hash"),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'simd query evidence evidence "DF0C23E8634E480F84B9D5674A7CDC9816466DEC28A3358F73260F68D28D7660"\n')),(0,i.kt)("p",null,"Example Output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'evidence:\n  consensus_address: cosmosvalcons1ntk8eualewuprz0gamh8hnvcem2nrcdsgz563h\n  height: 11\n  power: 100\n  time: "2021-10-20T16:08:38.194017624Z"\n')),(0,i.kt)("p",null,"To get all evidence"),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"simd query evidence list\n")),(0,i.kt)("p",null,"Example Output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'evidence:\n  consensus_address: cosmosvalcons1ntk8eualewuprz0gamh8hnvcem2nrcdsgz563h\n  height: 11\n  power: 100\n  time: "2021-10-20T16:08:38.194017624Z"\npagination:\n  next_key: null\n  total: "1"\n')),(0,i.kt)("h3",{id:"rest"},"REST"),(0,i.kt)("p",null,"A user can query the ",(0,i.kt)("inlineCode",{parentName:"p"},"evidence")," module using REST endpoints."),(0,i.kt)("h4",{id:"evidence-2"},"Evidence"),(0,i.kt)("p",null,"Get evidence by hash"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"/cosmos/evidence/v1beta1/evidence/{hash}\n")),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X GET "http://localhost:1317/cosmos/evidence/v1beta1/evidence/DF0C23E8634E480F84B9D5674A7CDC9816466DEC28A3358F73260F68D28D7660"\n')),(0,i.kt)("p",null,"Example Output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'{\n  "evidence": {\n    "consensus_address": "cosmosvalcons1ntk8eualewuprz0gamh8hnvcem2nrcdsgz563h",\n    "height": "11",\n    "power": "100",\n    "time": "2021-10-20T16:08:38.194017624Z"\n  }\n}\n')),(0,i.kt)("h4",{id:"all-evidence"},"All evidence"),(0,i.kt)("p",null,"Get all evidence"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"/cosmos/evidence/v1beta1/evidence\n")),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X GET "http://localhost:1317/cosmos/evidence/v1beta1/evidence"\n')),(0,i.kt)("p",null,"Example Output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'{\n  "evidence": [\n    {\n      "consensus_address": "cosmosvalcons1ntk8eualewuprz0gamh8hnvcem2nrcdsgz563h",\n      "height": "11",\n      "power": "100",\n      "time": "2021-10-20T16:08:38.194017624Z"\n    }\n  ],\n  "pagination": {\n    "total": "1"\n  }\n}\n')),(0,i.kt)("h3",{id:"grpc"},"gRPC"),(0,i.kt)("p",null,"A user can query the ",(0,i.kt)("inlineCode",{parentName:"p"},"evidence")," module using gRPC endpoints."),(0,i.kt)("h4",{id:"evidence-3"},"Evidence"),(0,i.kt)("p",null,"Get evidence by hash"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cosmos.evidence.v1beta1.Query/Evidence\n")),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'grpcurl -plaintext -d \'{"evidence_hash":"DF0C23E8634E480F84B9D5674A7CDC9816466DEC28A3358F73260F68D28D7660"}\' localhost:9090 cosmos.evidence.v1beta1.Query/Evidence\n')),(0,i.kt)("p",null,"Example Output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'{\n  "evidence": {\n    "consensus_address": "cosmosvalcons1ntk8eualewuprz0gamh8hnvcem2nrcdsgz563h",\n    "height": "11",\n    "power": "100",\n    "time": "2021-10-20T16:08:38.194017624Z"\n  }\n}\n')),(0,i.kt)("h4",{id:"all-evidence-1"},"All evidence"),(0,i.kt)("p",null,"Get all evidence"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cosmos.evidence.v1beta1.Query/AllEvidence\n")),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"grpcurl -plaintext localhost:9090 cosmos.evidence.v1beta1.Query/AllEvidence\n")),(0,i.kt)("p",null,"Example Output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'{\n  "evidence": [\n    {\n      "consensus_address": "cosmosvalcons1ntk8eualewuprz0gamh8hnvcem2nrcdsgz563h",\n      "height": "11",\n      "power": "100",\n      "time": "2021-10-20T16:08:38.194017624Z"\n    }\n  ],\n  "pagination": {\n    "total": "1"\n  }\n}\n')))}u.isMDXComponent=!0}}]);