"use strict";(self.webpackChunkcosmos_sdk_docs=self.webpackChunkcosmos_sdk_docs||[]).push([[44475],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||r;return n?o.createElement(h,i(i({ref:t},p),{},{components:n})):o.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85265:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var o=n(87462),a=(n(67294),n(3905));const r={},i="Demo of Mitigating Front-Running with Vote Extensions",s={unversionedId:"tutorials/vote-extensions/auction-frontrunning/demo-of-mitigating-front-running",id:"version-0.53/tutorials/vote-extensions/auction-frontrunning/demo-of-mitigating-front-running",title:"Demo of Mitigating Front-Running with Vote Extensions",description:"The purpose of this demo is to test the implementation of the VoteExtensionHandler and PrepareProposalHandler that we have just added to the codebase. These handlers are designed to mitigate front-running by ensuring that all validators have a consistent view of the mempool when preparing proposals.",source:"@site/versioned_docs/version-0.53/tutorials/vote-extensions/auction-frontrunning/03-demo-of-mitigating-front-running.md",sourceDirName:"tutorials/vote-extensions/auction-frontrunning",slug:"/tutorials/vote-extensions/auction-frontrunning/demo-of-mitigating-front-running",permalink:"/v0.53/tutorials/vote-extensions/auction-frontrunning/demo-of-mitigating-front-running",draft:!1,tags:[],version:"0.53",sidebarPosition:3,frontMatter:{},sidebar:"tutorialsSidebar",previous:{title:"Mitigating Front-running with Vote Extensions",permalink:"/v0.53/tutorials/vote-extensions/auction-frontrunning/mitigating-front-running-with-vote-extesions"},next:{title:"Getting Started",permalink:"/v0.53/tutorials/vote-extensions/oracle/getting-started"}},l={},c=[{value:"Conclusion",id:"conclusion",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"demo-of-mitigating-front-running-with-vote-extensions"},"Demo of Mitigating Front-Running with Vote Extensions"),(0,a.kt)("p",null,"The purpose of this demo is to test the implementation of the ",(0,a.kt)("inlineCode",{parentName:"p"},"VoteExtensionHandler")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"PrepareProposalHandler")," that we have just added to the codebase. These handlers are designed to mitigate front-running by ensuring that all validators have a consistent view of the mempool when preparing proposals."),(0,a.kt)("p",null,"In this demo, we are using a 3 validator network. The Beacon validator is special because it has a custom transaction provider enabled. This means that it can potentially manipulate the order of transactions in a proposal to its advantage (i.e., front-running)."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Bootstrap the validator network: This sets up a network with 3 validators. The script `./scripts/configure.sh is used to configure the network and the validators.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"cd scripts\nconfigure.sh\n")),(0,a.kt)("p",null,"If this doesn't work please ensure you have run ",(0,a.kt)("inlineCode",{parentName:"p"},"make build")," in the ",(0,a.kt)("inlineCode",{parentName:"p"},"tutorials/nameservice/base")," directory."),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Have alice attempt to reserve ",(0,a.kt)("inlineCode",{parentName:"li"},"bob.cosmos"),": This is a normal transaction that alice wants to execute. The script `",(0,a.kt)("inlineCode",{parentName:"li"},'./scripts/reserve.sh "bob.cosmos"')," is used to send this transaction.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'reserve.sh "bob.cosmos"\n')),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Query to verify the name has been reserved: This is to check the result of the transaction. The script ",(0,a.kt)("inlineCode",{parentName:"li"},'./scripts/whois.sh "bob.cosmos"')," is used to query the state of the blockchain.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'whois.sh "bob.cosmos"\n')),(0,a.kt)("p",null,"It should return:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-{"},'  "name":  {\n    "name":  "bob.cosmos",\n    "owner":  "cosmos1nq9wuvuju4jdmpmzvxmg8zhhu2ma2y2l2pnu6w",\n    "resolve_address":  "cosmos1h6zy2kn9efxtw5z22rc5k9qu7twl70z24kr3ht",\n    "amount":  [\n      {\n        "denom":  "uatom",\n        "amount":  "1000"\n      }\n    ]\n  }\n}\n')),(0,a.kt)("p",null,"To detect front-running attempts by the beacon, scrutinise the logs during the ",(0,a.kt)("inlineCode",{parentName:"p"},"ProcessProposal")," stage. Open the logs for each validator, including the beacon, ",(0,a.kt)("inlineCode",{parentName:"p"},"val1"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"val2"),", to observe the following behavior. Open the log file of the validator node. The location of this file can vary depending on your setup, but it's typically located in a directory like ",(0,a.kt)("inlineCode",{parentName:"p"},"$HOME/cosmos/nodes/#{validator}/logs"),". The directory in this case will be under the validator so, ",(0,a.kt)("inlineCode",{parentName:"p"},"beacon")," ",(0,a.kt)("inlineCode",{parentName:"p"},"val1")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"val2"),". Run the following to tail the logs of the validator or beacon:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"tail -f $HOME/cosmos/nodes/#{validator}/logs\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'2:47PM ERR \u274c\ufe0f:: Detected invalid proposal bid :: name:"bob.cosmos" resolveAddress:"cosmos1wmuwv38pdur63zw04t0c78r2a8dyt08hf9tpvd" owner:"cosmos1wmuwv38pdur63zw04t0c78r2a8dyt08hf9tpvd" amount:<denom:"uatom" amount:"2000" >  module=server\n2:47PM ERR \u274c\ufe0f:: Unable to validate bids in Process Proposal :: <nil> module=server\n2:47PM ERR prevote step: state machine rejected a proposed block; this should not happen:the proposer may be misbehaving; prevoting nil err=null height=142 module=consensus round=0\n')),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"List the Beacon's keys: This is to verify the addresses of the validators. The script ",(0,a.kt)("inlineCode",{parentName:"li"},"./scripts/list-beacon-keys.sh")," is used to list the keys.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"list-beacon-keys.sh\n")),(0,a.kt)("p",null,"We should receive something similar to the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'[\n  {\n    "name": "alice",\n    "type": "local",\n    "address": "cosmos1h6zy2kn9efxtw5z22rc5k9qu7twl70z24kr3ht",\n    "pubkey": "{\\"@type\\":\\"/cosmos.crypto.secp256k1.PubKey\\",\\"key\\":\\"A32cvBUkNJz+h2vld4A5BxvU5Rd+HyqpR3aGtvEhlm4C\\"}"\n  },\n  {\n    "name": "barbara",\n    "type": "local",\n    "address": "cosmos1nq9wuvuju4jdmpmzvxmg8zhhu2ma2y2l2pnu6w",\n    "pubkey": "{\\"@type\\":\\"/cosmos.crypto.secp256k1.PubKey\\",\\"key\\":\\"Ag9PFsNyTQPoJdbyCWia5rZH9CrvSrjMsk7Oz4L3rXQ5\\"}"\n  },\n  {\n    "name": "beacon-key",\n    "type": "local",\n    "address": "cosmos1ez9a6x7lz4gvn27zr368muw8jeyas7sv84lfup",\n    "pubkey": "{\\"@type\\":\\"/cosmos.crypto.secp256k1.PubKey\\",\\"key\\":\\"AlzJZMWyN7lass710TnAhyuFKAFIaANJyw5ad5P2kpcH\\"}"\n  },\n  {\n    "name": "cindy",\n    "type": "local",\n    "address": "cosmos1m5j6za9w4qc2c5ljzxmm2v7a63mhjeag34pa3g",\n    "pubkey": "{\\"@type\\":\\"/cosmos.crypto.secp256k1.PubKey\\",\\"key\\":\\"A6F1/3yot5OpyXoSkBbkyl+3rqBkxzRVSJfvSpm/AvW5\\"}"\n  }\n]\n')),(0,a.kt)("p",null,"This allows us to match up the addresses and see that the bid was not front run by the beacon due as the resolve address is Alice's address and not the beacons address."),(0,a.kt)("p",null,"By running this demo, we can verify that the ",(0,a.kt)("inlineCode",{parentName:"p"},"VoteExtensionHandler")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"PrepareProposalHandler")," are working as expected and that they are able to prevent front-running."),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"In this tutorial, we've tackled front-running and MEV, focusing on nameservice auctions' vulnerability to these issues. We've explored vote extensions, a key feature of ABCI 2.0, and integrated them into a Cosmos SDK application."),(0,a.kt)("p",null,"Through practical exercises, you've implemented vote extensions, and tested their effectiveness in creating a fair auction system. You've gained practical insights by configuring a validator network and analysing blockchain logs."),(0,a.kt)("p",null,"Keep experimenting with these concepts, engage with the community, and stay updated on new advancements. The knowledge you've acquired here is crucial for developing secure and fair blockchain applications."))}d.isMDXComponent=!0}}]);