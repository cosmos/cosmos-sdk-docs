"use strict";(self.webpackChunkcosmos_sdk_docs=self.webpackChunkcosmos_sdk_docs||[]).push([[48811],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),d=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=d(e.components);return i.createElement(l.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=d(n),m=r,h=p["".concat(l,".").concat(m)]||p[m]||c[m]||a;return n?i.createElement(h,o(o({ref:t},u),{},{components:n})):i.createElement(h,o({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,o[1]=s;for(var d=2;d<a;d++)o[d]=n[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4635:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var i=n(87462),r=(n(67294),n(3905));const a={sidebar_position:1},o="Running a Testnet",s={unversionedId:"user/run-node/run-testnet",id:"version-0.47/user/run-node/run-testnet",title:"Running a Testnet",description:"The simd testnet subcommand makes it easy to initialize and start a simulated test network for testing purposes.",source:"@site/versioned_docs/version-0.47/user/run-node/05-run-testnet.md",sourceDirName:"user/run-node",slug:"/user/run-node/run-testnet",permalink:"/v0.47/user/run-node/run-testnet",draft:!1,tags:[],version:"0.47",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"userSidebar",previous:{title:"Rosetta",permalink:"/v0.47/user/run-node/rosetta"},next:{title:"Running in Production",permalink:"/v0.47/user/run-node/run-production"}},l={},d=[{value:"Initialize Files",id:"initialize-files",level:2},{value:"gentxs",id:"gentxs",level:3},{value:"nodes",id:"nodes",level:3},{value:"Start Testnet",id:"start-testnet",level:2},{value:"Testnet Options",id:"testnet-options",level:2}],u={toc:d},p="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"running-a-testnet"},"Running a Testnet"),(0,r.kt)("admonition",{title:"Synopsis",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"simd testnet")," subcommand makes it easy to initialize and start a simulated test network for testing purposes.")),(0,r.kt)("p",null,"In addition to the commands for ",(0,r.kt)("a",{parentName:"p",href:"/v0.47/user/run-node/run-node"},"running a node"),", the ",(0,r.kt)("inlineCode",{parentName:"p"},"simd")," binary also includes a ",(0,r.kt)("inlineCode",{parentName:"p"},"testnet")," command that allows you to start a simulated test network in-process or to initialize files for a simulated test network that runs in a separate process."),(0,r.kt)("h2",{id:"initialize-files"},"Initialize Files"),(0,r.kt)("p",null,"First, let's take a look at the ",(0,r.kt)("inlineCode",{parentName:"p"},"init-files")," subcommand."),(0,r.kt)("p",null,"This is similar to the ",(0,r.kt)("inlineCode",{parentName:"p"},"init")," command when initializing a single node, but in this case we are initializing multiple nodes, generating the genesis transactions for each node, and then collecting those transactions."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"init-files")," subcommand initializes the necessary files to run a test network in a separate process (i.e. using a Docker container). Running this command is not a prerequisite for the ",(0,r.kt)("inlineCode",{parentName:"p"},"start")," subcommand (",(0,r.kt)("a",{parentName:"p",href:"#start-testnet"},"see below"),")."),(0,r.kt)("p",null,"In order to initialize the files for a test network, run the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"simd testnet init-files\n")),(0,r.kt)("p",null,"You should see the following output in your terminal:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Successfully initialized 4 node directories\n")),(0,r.kt)("p",null,"The default output directory is a relative ",(0,r.kt)("inlineCode",{parentName:"p"},".testnets")," directory. Let's take a look at the files created within the ",(0,r.kt)("inlineCode",{parentName:"p"},".testnets")," directory."),(0,r.kt)("h3",{id:"gentxs"},"gentxs"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"gentxs")," directory includes a genesis transaction for each validator node. Each file includes a JSON encoded genesis transaction used to register a validator node at the time of genesis. The genesis transactions are added to the ",(0,r.kt)("inlineCode",{parentName:"p"},"genesis.json")," file within each node directory during the initilization process."),(0,r.kt)("h3",{id:"nodes"},"nodes"),(0,r.kt)("p",null,"A node directory is created for each validator node. Within each node directory is a ",(0,r.kt)("inlineCode",{parentName:"p"},"simd")," directory. The ",(0,r.kt)("inlineCode",{parentName:"p"},"simd")," directory is the home directory for each node, which includes the configuration and data files for that node (i.e. the same files included in the default ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.simapp")," directory when running a single node)."),(0,r.kt)("h2",{id:"start-testnet"},"Start Testnet"),(0,r.kt)("p",null,"Now, let's take a look at the ",(0,r.kt)("inlineCode",{parentName:"p"},"start")," subcommand."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"start")," subcommand both initializes and starts an in-process test network. This is the fastest way to spin up a local test network for testing purposes."),(0,r.kt)("p",null,"You can start the local test network by running the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"simd testnet start\n")),(0,r.kt)("p",null,"You should see something similar to the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'acquiring test network lock\npreparing test network with chain-id "chain-mtoD9v"\n\n\n+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++\n++       THIS MNEMONIC IS FOR TESTING PURPOSES ONLY        ++\n++                DO NOT USE IN PRODUCTION                 ++\n++                                                         ++\n++  sustain know debris minute gate hybrid stereo custom   ++\n++  divorce cross spoon machine latin vibrant term oblige  ++\n++   moment beauty laundry repeat grab game bronze truly   ++\n+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++\n\n\nstarting test network...\nstarted test network\npress the Enter Key to terminate\n')),(0,r.kt)("p",null,"The first validator node is now running in-process, which means the test network will terminate once you either close the terminal window or you press the Enter key. In the output, the mnemonic phrase for the first validator node is provided for testing purposes. The validator node is using the same default addresses being used when initializing and starting a single node (no need to provide a ",(0,r.kt)("inlineCode",{parentName:"p"},"--node")," flag)."),(0,r.kt)("p",null,"Check the status of the first validator node:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"simd status\n")),(0,r.kt)("p",null,"Import the key from the provided mnemonic:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"simd keys add test --recover --keyring-backend test\n")),(0,r.kt)("p",null,"Check the balance of the account address:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"simd q bank balances [address]\n")),(0,r.kt)("p",null,"Use this test account to manually test against the test network."),(0,r.kt)("h2",{id:"testnet-options"},"Testnet Options"),(0,r.kt)("p",null,"You can customize the configuration of the test network with flags. In order to see all flag options, append the ",(0,r.kt)("inlineCode",{parentName:"p"},"--help")," flag to each command."))}c.isMDXComponent=!0}}]);