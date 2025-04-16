"use strict";(self.webpackChunkcosmos_sdk_docs=self.webpackChunkcosmos_sdk_docs||[]).push([[29779],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>h});var i=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=i.createContext({}),d=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=d(e.components);return i.createElement(l.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(t),m=a,h=u["".concat(l,".").concat(m)]||u[m]||p[m]||o;return t?i.createElement(h,r(r({ref:n},c),{},{components:t})):i.createElement(h,r({ref:n},c))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,r=new Array(o);r[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[u]="string"==typeof e?e:a,r[1]=s;for(var d=2;d<o;d++)r[d]=t[d];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},78441:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var i=t(87462),a=(t(67294),t(3905));const o={},r="ADR 020: Protocol Buffer Transaction Encoding",s={unversionedId:"build/architecture/adr-020-protobuf-transaction-encoding",id:"build/architecture/adr-020-protobuf-transaction-encoding",title:"ADR 020: Protocol Buffer Transaction Encoding",description:"Changelog",source:"@site/docs/build/architecture/adr-020-protobuf-transaction-encoding.md",sourceDirName:"build/architecture",slug:"/build/architecture/adr-020-protobuf-transaction-encoding",permalink:"/main/build/architecture/adr-020-protobuf-transaction-encoding",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"buildSidebar",previous:{title:"ADR 019: Protocol Buffer State Encoding",permalink:"/main/build/architecture/adr-019-protobuf-state-encoding"},next:{title:"ADR 021: Protocol Buffer Query Encoding",permalink:"/main/build/architecture/adr-021-protobuf-query-encoding"}},l={},d=[{value:"Changelog",id:"changelog",level:2},{value:"Status",id:"status",level:2},{value:"Context",id:"context",level:2},{value:"Decision",id:"decision",level:2},{value:"Transactions",id:"transactions",level:3},{value:"Signing",id:"signing",level:3},{value:"<code>SIGN_MODE_DIRECT</code>",id:"sign_mode_direct",level:4},{value:"<code>SIGN_MODE_LEGACY_AMINO</code>",id:"sign_mode_legacy_amino",level:4},{value:"<code>SIGN_MODE_TEXTUAL</code>",id:"sign_mode_textual",level:4},{value:"Unknown Field Filtering",id:"unknown-field-filtering",level:3},{value:"Public Key Encoding",id:"public-key-encoding",level:3},{value:"CLI &amp; REST",id:"cli--rest",level:3},{value:"Future Improvements",id:"future-improvements",level:2},{value:"<code>SIGN_MODE_TEXTUAL</code> specification",id:"sign_mode_textual-specification",level:3},{value:"<code>SIGN_MODE_DIRECT_AUX</code>",id:"sign_mode_direct_aux",level:3},{value:"<code>SIGN_MODE_DIRECT_RELAXED</code>",id:"sign_mode_direct_relaxed",level:3},{value:"Consequences",id:"consequences",level:2},{value:"Positive",id:"positive",level:3},{value:"Negative",id:"negative",level:3},{value:"Neutral",id:"neutral",level:3},{value:"References",id:"references",level:2}],c={toc:d},u="wrapper";function p(e){let{components:n,...t}=e;return(0,a.kt)(u,(0,i.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"adr-020-protocol-buffer-transaction-encoding"},"ADR 020: Protocol Buffer Transaction Encoding"),(0,a.kt)("h2",{id:"changelog"},"Changelog"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"2020 March 06: Initial Draft"),(0,a.kt)("li",{parentName:"ul"},"2020 March 12: API Updates"),(0,a.kt)("li",{parentName:"ul"},"2020 April 13: Added details on interface ",(0,a.kt)("inlineCode",{parentName:"li"},"oneof")," handling"),(0,a.kt)("li",{parentName:"ul"},"2020 April 30: Switch to ",(0,a.kt)("inlineCode",{parentName:"li"},"Any")),(0,a.kt)("li",{parentName:"ul"},"2020 May 14: Describe public key encoding"),(0,a.kt)("li",{parentName:"ul"},"2020 June 08: Store ",(0,a.kt)("inlineCode",{parentName:"li"},"TxBody")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"AuthInfo")," as bytes in ",(0,a.kt)("inlineCode",{parentName:"li"},"SignDoc"),"; Document ",(0,a.kt)("inlineCode",{parentName:"li"},"TxRaw")," as broadcast and storage type."),(0,a.kt)("li",{parentName:"ul"},"2020 August 07: Use ADR 027 for serializing ",(0,a.kt)("inlineCode",{parentName:"li"},"SignDoc"),"."),(0,a.kt)("li",{parentName:"ul"},"2020 August 19: Move sequence field from ",(0,a.kt)("inlineCode",{parentName:"li"},"SignDoc")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"SignerInfo"),", as discussed in ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/cosmos/cosmos-sdk/issues/6966"},"#6966"),"."),(0,a.kt)("li",{parentName:"ul"},"2020 September 25: Remove ",(0,a.kt)("inlineCode",{parentName:"li"},"PublicKey")," type in favor of ",(0,a.kt)("inlineCode",{parentName:"li"},"secp256k1.PubKey"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"ed25519.PubKey")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"multisig.LegacyAminoPubKey"),"."),(0,a.kt)("li",{parentName:"ul"},"2020 October 15: Add ",(0,a.kt)("inlineCode",{parentName:"li"},"GetAccount")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"GetAccountWithHeight")," methods to the ",(0,a.kt)("inlineCode",{parentName:"li"},"AccountRetriever")," interface."),(0,a.kt)("li",{parentName:"ul"},"2021 Feb 24: The Cosmos SDK does not use Tendermint's ",(0,a.kt)("inlineCode",{parentName:"li"},"PubKey")," interface anymore, but its own ",(0,a.kt)("inlineCode",{parentName:"li"},"cryptotypes.PubKey"),". Updates to reflect this."),(0,a.kt)("li",{parentName:"ul"},"2021 May 3: Rename ",(0,a.kt)("inlineCode",{parentName:"li"},"clientCtx.JSONMarshaler")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"clientCtx.JSONCodec"),"."),(0,a.kt)("li",{parentName:"ul"},"2021 June 10: Add ",(0,a.kt)("inlineCode",{parentName:"li"},"clientCtx.Codec: codec.Codec"),".")),(0,a.kt)("h2",{id:"status"},"Status"),(0,a.kt)("p",null,"Accepted"),(0,a.kt)("h2",{id:"context"},"Context"),(0,a.kt)("p",null,"This ADR is a continuation of the motivation, design, and context established in\n",(0,a.kt)("a",{parentName:"p",href:"/main/build/architecture/adr-019-protobuf-state-encoding"},"ADR 019"),", namely, we aim to design the\nProtocol Buffer migration path for the client-side of the Cosmos SDK."),(0,a.kt)("p",null,"Specifically, the client-side migration path primarily includes tx generation and\nsigning, message construction and routing, in addition to CLI & REST handlers and\nbusiness logic (i.e. queriers)."),(0,a.kt)("p",null,"With this in mind, we will tackle the migration path via two main areas, txs and\nquerying. However, this ADR solely focuses on transactions. Querying should be\naddressed in a future ADR, but it should build off of these proposals."),(0,a.kt)("p",null,"Based on detailed discussions (",(0,a.kt)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/issues/6030"},"#","6030"),"\nand ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/issues/6078"},"#","6078"),"), the original\ndesign for transactions was changed substantially from an ",(0,a.kt)("inlineCode",{parentName:"p"},"oneof")," /JSON-signing\napproach to the approach described below."),(0,a.kt)("h2",{id:"decision"},"Decision"),(0,a.kt)("h3",{id:"transactions"},"Transactions"),(0,a.kt)("p",null,"Since interface values are encoded with ",(0,a.kt)("inlineCode",{parentName:"p"},"google.protobuf.Any")," in state (see ",(0,a.kt)("a",{parentName:"p",href:"/main/build/architecture/adr-019-protobuf-state-encoding"},"ADR 019"),"),\n",(0,a.kt)("inlineCode",{parentName:"p"},"sdk.Msg"),"s are encoding with ",(0,a.kt)("inlineCode",{parentName:"p"},"Any")," in transactions."),(0,a.kt)("p",null,"One of the main goals of using ",(0,a.kt)("inlineCode",{parentName:"p"},"Any")," to encode interface values is to have a\ncore set of types which is reused by apps so that\nclients can safely be compatible with as many chains as possible."),(0,a.kt)("p",null,"It is one of the goals of this specification to provide a flexible cross-chain transaction\nformat that can serve a wide variety of use cases without breaking client\ncompatibility."),(0,a.kt)("p",null,"In order to facilitate signing, transactions are separated into ",(0,a.kt)("inlineCode",{parentName:"p"},"TxBody"),",\nwhich will be re-used by ",(0,a.kt)("inlineCode",{parentName:"p"},"SignDoc")," below, and ",(0,a.kt)("inlineCode",{parentName:"p"},"signatures"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-protobuf"},"// types/types.proto\npackage cosmos_sdk.v1;\n\nmessage Tx {\n    TxBody body = 1;\n    AuthInfo auth_info = 2;\n    // A list of signatures that matches the length and order of AuthInfo's signer_infos to\n    // allow connecting signature meta information like public key and signing mode by position.\n    repeated bytes signatures = 3;\n}\n\n// A variant of Tx that pins the signer's exact binary represenation of body and\n// auth_info. This is used for signing, broadcasting and verification. The binary\n// `serialize(tx: TxRaw)` is stored in Tendermint and the hash `sha256(serialize(tx: TxRaw))`\n// becomes the \"txhash\", commonly used as the transaction ID.\nmessage TxRaw {\n    // A protobuf serialization of a TxBody that matches the representation in SignDoc.\n    bytes body = 1;\n    // A protobuf serialization of an AuthInfo that matches the representation in SignDoc.\n    bytes auth_info = 2;\n    // A list of signatures that matches the length and order of AuthInfo's signer_infos to\n    // allow connecting signature meta information like public key and signing mode by position.\n    repeated bytes signatures = 3;\n}\n\nmessage TxBody {\n    // A list of messages to be executed. The required signers of those messages define\n    // the number and order of elements in AuthInfo's signer_infos and Tx's signatures.\n    // Each required signer address is added to the list only the first time it occurs.\n    //\n    // By convention, the first required signer (usually from the first message) is referred\n    // to as the primary signer and pays the fee for the whole transaction.\n    repeated google.protobuf.Any messages = 1;\n    string memo = 2;\n    int64 timeout_height = 3;\n    repeated google.protobuf.Any extension_options = 1023;\n}\n\nmessage AuthInfo {\n    // This list defines the signing modes for the required signers. The number\n    // and order of elements must match the required signers from TxBody's messages.\n    // The first element is the primary signer and the one which pays the fee.\n    repeated SignerInfo signer_infos = 1;\n    // The fee can be calculated based on the cost of evaluating the body and doing signature verification of the signers. This can be estimated via simulation.\n    Fee fee = 2;\n}\n\nmessage SignerInfo {\n    // The public key is optional for accounts that already exist in state. If unset, the\n    // verifier can use the required signer address for this position and lookup the public key.\n    google.protobuf.Any public_key = 1;\n    // ModeInfo describes the signing mode of the signer and is a nested\n    // structure to support nested multisig pubkey's\n    ModeInfo mode_info = 2;\n    // sequence is the sequence of the account, which describes the\n    // number of committed transactions signed by a given address. It is used to prevent\n    // replay attacks.\n    uint64 sequence = 3;\n}\n\nmessage ModeInfo {\n    oneof sum {\n        Single single = 1;\n        Multi multi = 2;\n    }\n\n    // Single is the mode info for a single signer. It is structured as a message\n    // to allow for additional fields such as locale for SIGN_MODE_TEXTUAL in the future\n    message Single {\n        SignMode mode = 1;\n    }\n\n    // Multi is the mode info for a multisig public key\n    message Multi {\n        // bitarray specifies which keys within the multisig are signing\n        CompactBitArray bitarray = 1;\n        // mode_infos is the corresponding modes of the signers of the multisig\n        // which could include nested multisig public keys\n        repeated ModeInfo mode_infos = 2;\n    }\n}\n\nenum SignMode {\n    SIGN_MODE_UNSPECIFIED = 0;\n\n    SIGN_MODE_DIRECT = 1;\n\n    SIGN_MODE_TEXTUAL = 2;\n\n    SIGN_MODE_LEGACY_AMINO_JSON = 127;\n}\n")),(0,a.kt)("p",null,"As will be discussed below, in order to include as much of the ",(0,a.kt)("inlineCode",{parentName:"p"},"Tx")," as possible\nin the ",(0,a.kt)("inlineCode",{parentName:"p"},"SignDoc"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"SignerInfo")," is separated from signatures so that only the\nraw signatures themselves live outside of what is signed over."),(0,a.kt)("p",null,"Because we are aiming for a flexible, extensible cross-chain transaction\nformat, new transaction processing options should be added to ",(0,a.kt)("inlineCode",{parentName:"p"},"TxBody")," as soon\nthose use cases are discovered, even if they can't be implemented yet."),(0,a.kt)("p",null,"Because there is coordination overhead in this, ",(0,a.kt)("inlineCode",{parentName:"p"},"TxBody")," includes an\n",(0,a.kt)("inlineCode",{parentName:"p"},"extension_options")," field which can be used for any transaction processing\noptions that are not already covered. App developers should, nevertheless,\nattempt to upstream important improvements to ",(0,a.kt)("inlineCode",{parentName:"p"},"Tx"),"."),(0,a.kt)("h3",{id:"signing"},"Signing"),(0,a.kt)("p",null,"All of the signing modes below aim to provide the following guarantees:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"No Malleability"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"TxBody")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"AuthInfo")," cannot change once the transaction\nis signed"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Predictable Gas"),": if I am signing a transaction where I am paying a fee,\nthe final gas is fully dependent on what I am signing")),(0,a.kt)("p",null,"These guarantees give the maximum amount confidence to message signers that\nmanipulation of ",(0,a.kt)("inlineCode",{parentName:"p"},"Tx"),"s by intermediaries can't result in any meaningful changes."),(0,a.kt)("h4",{id:"sign_mode_direct"},(0,a.kt)("inlineCode",{parentName:"h4"},"SIGN_MODE_DIRECT")),(0,a.kt)("p",null,'The "direct" signing behavior is to sign the raw ',(0,a.kt)("inlineCode",{parentName:"p"},"TxBody")," bytes as broadcast over\nthe wire. This has the advantages of:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"requiring the minimum additional client capabilities beyond a standard protocol\nbuffers implementation"),(0,a.kt)("li",{parentName:"ul"},"leaving effectively zero holes for transaction malleability (i.e. there are no\nsubtle differences between the signing and encoding formats which could\npotentially be exploited by an attacker)")),(0,a.kt)("p",null,"Signatures are structured using the ",(0,a.kt)("inlineCode",{parentName:"p"},"SignDoc")," below which reuses the serialization of\n",(0,a.kt)("inlineCode",{parentName:"p"},"TxBody")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"AuthInfo")," and only adds the fields which are needed for signatures:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-protobuf"},"// types/types.proto\nmessage SignDoc {\n    // A protobuf serialization of a TxBody that matches the representation in TxRaw.\n    bytes body = 1;\n    // A protobuf serialization of an AuthInfo that matches the representation in TxRaw.\n    bytes auth_info = 2;\n    string chain_id = 3;\n    uint64 account_number = 4;\n}\n")),(0,a.kt)("p",null,"In order to sign in the default mode, clients take the following steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Serialize ",(0,a.kt)("inlineCode",{parentName:"li"},"TxBody")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"AuthInfo")," using any valid protobuf implementation."),(0,a.kt)("li",{parentName:"ol"},"Create a ",(0,a.kt)("inlineCode",{parentName:"li"},"SignDoc")," and serialize it using ",(0,a.kt)("a",{parentName:"li",href:"/main/build/architecture/adr-027-deterministic-protobuf-serialization"},"ADR 027"),"."),(0,a.kt)("li",{parentName:"ol"},"Sign the encoded ",(0,a.kt)("inlineCode",{parentName:"li"},"SignDoc")," bytes."),(0,a.kt)("li",{parentName:"ol"},"Build a ",(0,a.kt)("inlineCode",{parentName:"li"},"TxRaw")," and serialize it for broadcasting.")),(0,a.kt)("p",null,"Signature verification is based on comparing the raw ",(0,a.kt)("inlineCode",{parentName:"p"},"TxBody")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"AuthInfo"),"\nbytes encoded in ",(0,a.kt)("inlineCode",{parentName:"p"},"TxRaw")," not based on any ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/regen-network/canonical-proto3"},'"canonicalization"'),"\nalgorithm which creates added complexity for clients in addition to preventing\nsome forms of upgradeability (to be addressed later in this document)."),(0,a.kt)("p",null,"Signature verifiers do:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Deserialize a ",(0,a.kt)("inlineCode",{parentName:"li"},"TxRaw")," and pull out ",(0,a.kt)("inlineCode",{parentName:"li"},"body")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"auth_info"),"."),(0,a.kt)("li",{parentName:"ol"},"Create a list of required signer addresses from the messages."),(0,a.kt)("li",{parentName:"ol"},"For each required signer:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Pull account number and sequence from the state."),(0,a.kt)("li",{parentName:"ul"},"Obtain the public key either from state or ",(0,a.kt)("inlineCode",{parentName:"li"},"AuthInfo"),"'s ",(0,a.kt)("inlineCode",{parentName:"li"},"signer_infos"),"."),(0,a.kt)("li",{parentName:"ul"},"Create a ",(0,a.kt)("inlineCode",{parentName:"li"},"SignDoc")," and serialize it using ",(0,a.kt)("a",{parentName:"li",href:"/main/build/architecture/adr-027-deterministic-protobuf-serialization"},"ADR 027"),"."),(0,a.kt)("li",{parentName:"ul"},"Verify the signature at the same list position against the serialized ",(0,a.kt)("inlineCode",{parentName:"li"},"SignDoc"),".")))),(0,a.kt)("h4",{id:"sign_mode_legacy_amino"},(0,a.kt)("inlineCode",{parentName:"h4"},"SIGN_MODE_LEGACY_AMINO")),(0,a.kt)("p",null,"In order to support legacy wallets and exchanges, Amino JSON will be temporarily\nsupported transaction signing. Once wallets and exchanges have had a\nchance to upgrade to protobuf based signing, this option will be disabled. In\nthe meantime, it is foreseen that disabling the current Amino signing would cause\ntoo much breakage to be feasible. Note that this is mainly a requirement of the\nCosmos Hub and other chains may choose to disable Amino signing immediately."),(0,a.kt)("p",null,"Legacy clients will be able to sign a transaction using the current Amino\nJSON format and have it encoded to protobuf using the REST ",(0,a.kt)("inlineCode",{parentName:"p"},"/tx/encode"),"\nendpoint before broadcasting."),(0,a.kt)("h4",{id:"sign_mode_textual"},(0,a.kt)("inlineCode",{parentName:"h4"},"SIGN_MODE_TEXTUAL")),(0,a.kt)("p",null,"As was discussed extensively in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/issues/6078"},"#","6078"),",\nthere is a desire for a human-readable signing encoding, especially for hardware\nwallets like the ",(0,a.kt)("a",{parentName:"p",href:"https://www.ledger.com"},"Ledger")," which display\ntransaction contents to users before signing. JSON was an attempt at this but\nfalls short of the ideal."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"SIGN_MODE_TEXTUAL")," is intended as a placeholder for a human-readable\nencoding which will replace Amino JSON. This new encoding should be even more\nfocused on readability than JSON, possibly based on formatting strings like\n",(0,a.kt)("a",{parentName:"p",href:"http://userguide.icu-project.org/formatparse/messages"},"MessageFormat"),"."),(0,a.kt)("p",null,"In order to ensure that the new human-readable format does not suffer from\ntransaction malleability issues, ",(0,a.kt)("inlineCode",{parentName:"p"},"SIGN_MODE_TEXTUAL"),"\nrequires that the ",(0,a.kt)("em",{parentName:"p"},"human-readable bytes are concatenated with the raw ",(0,a.kt)("inlineCode",{parentName:"em"},"SignDoc")),"\nto generate sign bytes."),(0,a.kt)("p",null,"Multiple human-readable formats (maybe even localized messages) may be supported\nby ",(0,a.kt)("inlineCode",{parentName:"p"},"SIGN_MODE_TEXTUAL")," when it is implemented."),(0,a.kt)("h3",{id:"unknown-field-filtering"},"Unknown Field Filtering"),(0,a.kt)("p",null,"Unknown fields in protobuf messages should generally be rejected by transaction\nprocessors because:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"important data may be present in the unknown fields, that if ignored, will\ncause unexpected behavior for clients"),(0,a.kt)("li",{parentName:"ul"},"they present a malleability vulnerability where attackers can bloat tx size\nby adding random uninterpreted data to unsigned content (i.e. the master ",(0,a.kt)("inlineCode",{parentName:"li"},"Tx"),",\nnot ",(0,a.kt)("inlineCode",{parentName:"li"},"TxBody"),")")),(0,a.kt)("p",null,"There are also scenarios where we may choose to safely ignore unknown fields\n(",(0,a.kt)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/issues/6078#issuecomment-624400188"},"https://github.com/cosmos/cosmos-sdk/issues/6078#issuecomment-624400188"),") to\nprovide graceful forwards compatibility with newer clients."),(0,a.kt)("p",null,"We propose that field numbers with bit 11 set (for most use cases this is\nthe range of 1024-2047) be considered non-critical fields that can safely be\nignored if unknown."),(0,a.kt)("p",null,"To handle this we will need an unknown field filter that:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"always rejects unknown fields in unsigned content (i.e. top-level ",(0,a.kt)("inlineCode",{parentName:"li"},"Tx")," and\nunsigned parts of ",(0,a.kt)("inlineCode",{parentName:"li"},"AuthInfo")," if present based on the signing mode)"),(0,a.kt)("li",{parentName:"ul"},"rejects unknown fields in all messages (including nested ",(0,a.kt)("inlineCode",{parentName:"li"},"Any"),"s) other than\nfields with bit 11 set")),(0,a.kt)("p",null,"This will likely need to be a custom protobuf parser pass that takes message bytes\nand ",(0,a.kt)("inlineCode",{parentName:"p"},"FileDescriptor"),"s and returns a boolean result."),(0,a.kt)("h3",{id:"public-key-encoding"},"Public Key Encoding"),(0,a.kt)("p",null,"Public keys in the Cosmos SDK implement the ",(0,a.kt)("inlineCode",{parentName:"p"},"cryptotypes.PubKey")," interface.\nWe propose to use ",(0,a.kt)("inlineCode",{parentName:"p"},"Any")," for protobuf encoding as we are doing with other interfaces (for example, in ",(0,a.kt)("inlineCode",{parentName:"p"},"BaseAccount.PubKey")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"SignerInfo.PublicKey"),").\nThe following public keys are implemented: secp256k1, secp256r1, ed25519 and legacy-multisignature."),(0,a.kt)("p",null,"Ex:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-protobuf"},"message PubKey {\n    bytes key = 1;\n}\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"multisig.LegacyAminoPubKey")," has an array of ",(0,a.kt)("inlineCode",{parentName:"p"},"Any"),"'s member to support any\nprotobuf public key type."),(0,a.kt)("p",null,"Apps should only attempt to handle a registered set of public keys that they\nhave tested. The provided signature verification ante handler decorators will\nenforce this."),(0,a.kt)("h3",{id:"cli--rest"},"CLI & REST"),(0,a.kt)("p",null,"Currently, the REST and CLI handlers encode and decode types and txs via Amino\nJSON encoding using a concrete Amino codec. Being that some of the types dealt with\nin the client can be interfaces, similar to how we described in ",(0,a.kt)("a",{parentName:"p",href:"/main/build/architecture/adr-019-protobuf-state-encoding"},"ADR 019"),",\nthe client logic will now need to take a codec interface that knows not only how\nto handle all the types, but also knows how to generate transactions, signatures,\nand messages."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"type AccountRetriever interface {\n  GetAccount(clientCtx Context, addr sdk.AccAddress) (client.Account, error)\n  GetAccountWithHeight(clientCtx Context, addr sdk.AccAddress) (client.Account, int64, error)\n  EnsureExists(clientCtx client.Context, addr sdk.AccAddress) error\n  GetAccountNumberSequence(clientCtx client.Context, addr sdk.AccAddress) (uint64, uint64, error)\n}\n\ntype Generator interface {\n  NewTx() TxBuilder\n  NewFee() ClientFee\n  NewSignature() ClientSignature\n  MarshalTx(tx types.Tx) ([]byte, error)\n}\n\ntype TxBuilder interface {\n  GetTx() sdk.Tx\n\n  SetMsgs(...sdk.Msg) error\n  GetSignatures() []sdk.Signature\n  SetSignatures(...sdk.Signature)\n  GetFee() sdk.Fee\n  SetFee(sdk.Fee)\n  GetMemo() string\n  SetMemo(string)\n}\n")),(0,a.kt)("p",null,"We then update ",(0,a.kt)("inlineCode",{parentName:"p"},"Context")," to have new fields: ",(0,a.kt)("inlineCode",{parentName:"p"},"Codec"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"TxGenerator"),",\nand ",(0,a.kt)("inlineCode",{parentName:"p"},"AccountRetriever"),", and we update ",(0,a.kt)("inlineCode",{parentName:"p"},"AppModuleBasic.GetTxCmd")," to take\na ",(0,a.kt)("inlineCode",{parentName:"p"},"Context")," which should have all of these fields pre-populated."),(0,a.kt)("p",null,"Each client method should then use one of the ",(0,a.kt)("inlineCode",{parentName:"p"},"Init")," methods to re-initialize\nthe pre-populated ",(0,a.kt)("inlineCode",{parentName:"p"},"Context"),". ",(0,a.kt)("inlineCode",{parentName:"p"},"tx.GenerateOrBroadcastTx")," can be used to\ngenerate or broadcast a transaction. For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'import "github.com/spf13/cobra"\nimport "github.com/cosmos/cosmos-sdk/client"\nimport "github.com/cosmos/cosmos-sdk/client/tx"\n\nfunc NewCmdDoSomething(clientCtx client.Context) *cobra.Command {\n    return &cobra.Command{\n        RunE: func(cmd *cobra.Command, args []string) error {\n            clientCtx := ctx.InitWithInput(cmd.InOrStdin())\n            msg := NewSomeMsg{...}\n            tx.GenerateOrBroadcastTx(clientCtx, msg)\n        },\n    }\n}\n')),(0,a.kt)("h2",{id:"future-improvements"},"Future Improvements"),(0,a.kt)("h3",{id:"sign_mode_textual-specification"},(0,a.kt)("inlineCode",{parentName:"h3"},"SIGN_MODE_TEXTUAL")," specification"),(0,a.kt)("p",null,"A concrete specification and implementation of ",(0,a.kt)("inlineCode",{parentName:"p"},"SIGN_MODE_TEXTUAL")," is intended\nas a near-term future improvement so that the ledger app and other wallets\ncan gracefully transition away from Amino JSON."),(0,a.kt)("h3",{id:"sign_mode_direct_aux"},(0,a.kt)("inlineCode",{parentName:"h3"},"SIGN_MODE_DIRECT_AUX")),(0,a.kt)("p",null,"(","*","Documented as option (3) in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/issues/6078#issuecomment-628026933"},"https://github.com/cosmos/cosmos-sdk/issues/6078#issuecomment-628026933"),")"),(0,a.kt)("p",null,"We could add a mode ",(0,a.kt)("inlineCode",{parentName:"p"},"SIGN_MODE_DIRECT_AUX"),"\nto support scenarios where multiple signatures\nare being gathered into a single transaction but the message composer does not\nyet know which signatures will be included in the final transaction. For instance,\nI may have a 3/5 multisig wallet and want to send a ",(0,a.kt)("inlineCode",{parentName:"p"},"TxBody")," to all 5\nsigners to see who signs first. As soon as I have 3 signatures then I will go\nahead and build the full transaction."),(0,a.kt)("p",null,"With ",(0,a.kt)("inlineCode",{parentName:"p"},"SIGN_MODE_DIRECT"),", each signer needs\nto sign the full ",(0,a.kt)("inlineCode",{parentName:"p"},"AuthInfo")," which includes the full list of all signers and\ntheir signing modes, making the above scenario very hard."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"SIGN_MODE_DIRECT_AUX"),' would allow "auxiliary" signers to create their signature\nusing only ',(0,a.kt)("inlineCode",{parentName:"p"},"TxBody")," and their own ",(0,a.kt)("inlineCode",{parentName:"p"},"PublicKey"),". This allows the full list of\nsigners in ",(0,a.kt)("inlineCode",{parentName:"p"},"AuthInfo")," to be delayed until signatures have been collected."),(0,a.kt)("p",null,'An "auxiliary" signer is any signer besides the primary signer who is paying\nthe fee. For the primary signer, the full ',(0,a.kt)("inlineCode",{parentName:"p"},"AuthInfo")," is actually needed to calculate gas and fees\nbecause that is dependent on how many signers and which key types and signing\nmodes they are using. Auxiliary signers, however, do not need to worry about\nfees or gas and thus can just sign ",(0,a.kt)("inlineCode",{parentName:"p"},"TxBody"),"."),(0,a.kt)("p",null,"To generate a signature in ",(0,a.kt)("inlineCode",{parentName:"p"},"SIGN_MODE_DIRECT_AUX")," these steps would be followed:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Encode ",(0,a.kt)("inlineCode",{parentName:"p"},"SignDocAux")," (with the same requirement that fields must be serialized\nin order):"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-protobuf"},"// types/types.proto\nmessage SignDocAux {\n    bytes body_bytes = 1;\n    // PublicKey is included in SignDocAux :\n    // 1. as a special case for multisig public keys. For multisig public keys,\n    // the signer should use the top-level multisig public key they are signing\n    // against, not their own public key. This is to prevent against a form\n    // of malleability where a signature could be taken out of context of the\n    // multisig key that was intended to be signed for\n    // 2. to guard against scenario where configuration information is encoded\n    // in public keys (it has been proposed) such that two keys can generate\n    // the same signature but have different security properties\n    //\n    // By including it here, the composer of AuthInfo cannot reference the\n    // a public key variant the signer did not intend to use\n    PublicKey public_key = 2;\n    string chain_id = 3;\n    uint64 account_number = 4;\n}\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Sign the encoded ",(0,a.kt)("inlineCode",{parentName:"p"},"SignDocAux")," bytes")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Send their signature and ",(0,a.kt)("inlineCode",{parentName:"p"},"SignerInfo")," to primary signer who will then\nsign and broadcast the final transaction (with ",(0,a.kt)("inlineCode",{parentName:"p"},"SIGN_MODE_DIRECT")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"AuthInfo"),"\nadded) once enough signatures have been collected"))),(0,a.kt)("h3",{id:"sign_mode_direct_relaxed"},(0,a.kt)("inlineCode",{parentName:"h3"},"SIGN_MODE_DIRECT_RELAXED")),(0,a.kt)("p",null,"(",(0,a.kt)("em",{parentName:"p"},"Documented as option (1)(a) in ",(0,a.kt)("a",{parentName:"em",href:"https://github.com/cosmos/cosmos-sdk/issues/6078#issuecomment-628026933"},"https://github.com/cosmos/cosmos-sdk/issues/6078#issuecomment-628026933")),")"),(0,a.kt)("p",null,"This is a variation of ",(0,a.kt)("inlineCode",{parentName:"p"},"SIGN_MODE_DIRECT")," where multiple signers wouldn't need to\ncoordinate public keys and signing modes in advance. It would involve an alternate\n",(0,a.kt)("inlineCode",{parentName:"p"},"SignDoc")," similar to ",(0,a.kt)("inlineCode",{parentName:"p"},"SignDocAux")," above with fee. This could be added in the future\nif client developers found the burden of collecting public keys and modes in advance\ntoo burdensome."),(0,a.kt)("h2",{id:"consequences"},"Consequences"),(0,a.kt)("h3",{id:"positive"},"Positive"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Significant performance gains."),(0,a.kt)("li",{parentName:"ul"},"Supports backward and forward type compatibility."),(0,a.kt)("li",{parentName:"ul"},"Better support for cross-language clients."),(0,a.kt)("li",{parentName:"ul"},"Multiple signing modes allow for greater protocol evolution")),(0,a.kt)("h3",{id:"negative"},"Negative"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"google.protobuf.Any")," type URLs increase transaction size although the effect\nmay be negligible or compression may be able to mitigate it.")),(0,a.kt)("h3",{id:"neutral"},"Neutral"),(0,a.kt)("h2",{id:"references"},"References"))}p.isMDXComponent=!0}}]);