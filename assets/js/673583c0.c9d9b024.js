"use strict";(self.webpackChunkcosmos_sdk_docs=self.webpackChunkcosmos_sdk_docs||[]).push([[74663],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(t),g=r,m=u["".concat(l,".").concat(g)]||u[g]||d[g]||o;return t?a.createElement(m,s(s({ref:n},p),{},{components:t})):a.createElement(m,s({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,s=new Array(o);s[0]=g;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[u]="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=t[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},65994:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=t(87462),r=(t(67294),t(3905));const o={sidebar_position:1},s="Interacting with the Node",i={unversionedId:"user/run-node/interact-node",id:"version-0.53/user/run-node/interact-node",title:"Interacting with the Node",description:"There are multiple ways to interact with a node: using the CLI, using gRPC or using the REST endpoints.",source:"@site/versioned_docs/version-0.53/user/run-node/02-interact-node.md",sourceDirName:"user/run-node",slug:"/user/run-node/interact-node",permalink:"/v0.53/user/run-node/interact-node",draft:!1,tags:[],version:"0.53",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"userSidebar",previous:{title:"Running a Node",permalink:"/v0.53/user/run-node/run-node"},next:{title:"Generating, Signing and Broadcasting Transactions",permalink:"/v0.53/user/run-node/txs"}},l={},c=[{value:"Using the CLI",id:"using-the-cli",level:2},{value:"Using gRPC",id:"using-grpc",level:2},{value:"grpcurl",id:"grpcurl",level:3},{value:"Query for historical state using grpcurl",id:"query-for-historical-state-using-grpcurl",level:4},{value:"Programmatically via Go",id:"programmatically-via-go",level:3},{value:"Install Cosmos SDK",id:"install-cosmos-sdk",level:4},{value:"Query for historical state using Go",id:"query-for-historical-state-using-go",level:4},{value:"CosmJS",id:"cosmjs",level:3},{value:"Using the REST Endpoints",id:"using-the-rest-endpoints",level:2},{value:"Query for historical state using REST",id:"query-for-historical-state-using-rest",level:3},{value:"Cross-Origin Resource Sharing (CORS)",id:"cross-origin-resource-sharing-cors",level:3}],p={toc:c},u="wrapper";function d(e){let{components:n,...t}=e;return(0,r.kt)(u,(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"interacting-with-the-node"},"Interacting with the Node"),(0,r.kt)("admonition",{title:"Synopsis",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"There are multiple ways to interact with a node: using the CLI, using gRPC or using the REST endpoints.")),(0,r.kt)("admonition",{title:"Pre-requisite Readings",type:"note"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/v0.53/learn/advanced/grpc_rest"},"gRPC, REST and CometBFT Endpoints")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/v0.53/user/run-node/run-node"},"Running a Node")))),(0,r.kt)("h2",{id:"using-the-cli"},"Using the CLI"),(0,r.kt)("p",null,"Now that your chain is running, it is time to try sending tokens from the first account you created to a second account. In a new terminal window, start by running the following query command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"simd query bank balances $MY_VALIDATOR_ADDRESS\n")),(0,r.kt)("p",null,"You should see the current balance of the account you created, equal to the original balance of ",(0,r.kt)("inlineCode",{parentName:"p"},"stake")," you granted it minus the amount you delegated via the ",(0,r.kt)("inlineCode",{parentName:"p"},"gentx"),". Now, create a second account:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"simd keys add recipient --keyring-backend test\n\n# Put the generated address in a variable for later use.\nRECIPIENT=$(simd keys show recipient -a --keyring-backend test)\n")),(0,r.kt)("p",null,"The command above creates a local key-pair that is not yet registered on the chain. An account is created the first time it receives tokens from another account. Now, run the following command to send tokens to the ",(0,r.kt)("inlineCode",{parentName:"p"},"recipient")," account:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"simd tx bank send $MY_VALIDATOR_ADDRESS $RECIPIENT 1000000stake --chain-id my-test-chain --keyring-backend test\n\n# Check that the recipient account did receive the tokens.\nsimd query bank balances $RECIPIENT\n")),(0,r.kt)("p",null,"Finally, delegate some of the stake tokens sent to the ",(0,r.kt)("inlineCode",{parentName:"p"},"recipient")," account to the validator:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"simd tx staking delegate $(simd keys show my_validator --bech val -a --keyring-backend test) 500stake --from recipient --chain-id my-test-chain --keyring-backend test\n\n# Query the total delegations to `validator`.\nsimd query staking delegations-to $(simd keys show my_validator --bech val -a --keyring-backend test)\n")),(0,r.kt)("p",null,"You should see two delegations, the first one made from the ",(0,r.kt)("inlineCode",{parentName:"p"},"gentx"),", and the second one you just performed from the ",(0,r.kt)("inlineCode",{parentName:"p"},"recipient")," account."),(0,r.kt)("h2",{id:"using-grpc"},"Using gRPC"),(0,r.kt)("p",null,"The Protobuf ecosystem developed tools for different use cases, including code-generation from ",(0,r.kt)("inlineCode",{parentName:"p"},"*.proto")," files into various languages. These tools allow the building of clients easily. Often, the client connection (i.e. the transport) can be plugged and replaced very easily. Let's explore one of the most popular transport: ",(0,r.kt)("a",{parentName:"p",href:"/v0.53/learn/advanced/grpc_rest"},"gRPC"),"."),(0,r.kt)("p",null,"Since the code generation library largely depends on your own tech stack, we will only present three alternatives:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"grpcurl")," for generic debugging and testing,"),(0,r.kt)("li",{parentName:"ul"},"programmatically via Go,"),(0,r.kt)("li",{parentName:"ul"},"CosmJS for JavaScript/TypeScript developers.")),(0,r.kt)("h3",{id:"grpcurl"},"grpcurl"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/fullstorydev/grpcurl"},"grpcurl")," is like ",(0,r.kt)("inlineCode",{parentName:"p"},"curl")," but for gRPC. It is also available as a Go library, but we will use it only as a CLI command for debugging and testing purposes. Follow the instructions in the previous link to install it."),(0,r.kt)("p",null,"Assuming you have a local node running (either a localnet, or connected a live network), you should be able to run the following command to list the Protobuf services available (you can replace ",(0,r.kt)("inlineCode",{parentName:"p"},"localhost:9000")," by the gRPC server endpoint of another node, which is configured under the ",(0,r.kt)("inlineCode",{parentName:"p"},"grpc.address")," field inside ",(0,r.kt)("a",{parentName:"p",href:"/v0.53/user/run-node/run-node#configuring-the-node-using-apptoml-and-configtoml"},(0,r.kt)("inlineCode",{parentName:"a"},"app.toml")),"):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"grpcurl -plaintext localhost:9090 list\n")),(0,r.kt)("p",null,"You should see a list of gRPC services, like ",(0,r.kt)("inlineCode",{parentName:"p"},"cosmos.bank.v1beta1.Query"),". This is called reflection, which is a Protobuf endpoint returning a description of all available endpoints. Each of these represents a different Protobuf service, and each service exposes multiple RPC methods you can query against."),(0,r.kt)("p",null,"In order to get a description of the service you can run the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"grpcurl -plaintext \\\n    localhost:9090 \\\n    describe cosmos.bank.v1beta1.Query                  # Service we want to inspect\n")),(0,r.kt)("p",null,"It's also possible to execute an RPC call to query the node for information:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'grpcurl \\\n    -plaintext \\\n    -d "{\\"address\\":\\"$MY_VALIDATOR_ADDRESS\\"}" \\\n    localhost:9090 \\\n    cosmos.bank.v1beta1.Query/AllBalances\n')),(0,r.kt)("p",null,"The list of all available gRPC query endpoints is ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/issues/7786"},"coming soon"),"."),(0,r.kt)("h4",{id:"query-for-historical-state-using-grpcurl"},"Query for historical state using grpcurl"),(0,r.kt)("p",null,"You may also query for historical data by passing some ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/grpc/grpc-go/blob/master/Documentation/grpc-metadata.md"},"gRPC metadata")," to the query: the ",(0,r.kt)("inlineCode",{parentName:"p"},"x-cosmos-block-height")," metadata should contain the block to query. Using grpcurl as above, the command looks like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'grpcurl \\\n    -plaintext \\\n    -H "x-cosmos-block-height: 123" \\\n    -d "{\\"address\\":\\"$MY_VALIDATOR_ADDRESS\\"}" \\\n    localhost:9090 \\\n    cosmos.bank.v1beta1.Query/AllBalances\n')),(0,r.kt)("p",null,"Assuming the state at that block has not yet been pruned by the node, this query should return a non-empty response."),(0,r.kt)("h3",{id:"programmatically-via-go"},"Programmatically via Go"),(0,r.kt)("p",null,"The following snippet shows how to query the state using gRPC inside a Go program. The idea is to create a gRPC connection, and use the Protobuf-generated client code to query the gRPC server."),(0,r.kt)("h4",{id:"install-cosmos-sdk"},"Install Cosmos SDK"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"go get github.com/cosmos/cosmos-sdk@main\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "context"\n    "fmt"\n\n    "google.golang.org/grpc"\n\n    "github.com/cosmos/cosmos-sdk/codec"\n    sdk "github.com/cosmos/cosmos-sdk/types"\n    banktypes "github.com/cosmos/cosmos-sdk/x/bank/types"\n)\n\nfunc queryState() error {\n    myAddress, err := sdk.AccAddressFromBech32("cosmos1...") // the my_validator or recipient address.\n    if err != nil {\n        return err\n    }\n\n    // Create a connection to the gRPC server.\n    grpcConn, err := grpc.Dial(\n        "127.0.0.1:9090", // your gRPC server address.\n        grpc.WithInsecure(), // The Cosmos SDK doesn\'t support any transport security mechanism. \n        // This instantiates a general gRPC codec which handles proto bytes. We pass in a nil interface registry\n        // if the request/response types contain interface instead of \'nil\' you should pass the application specific codec.\n        grpc.WithDefaultCallOptions(grpc.ForceCodec(codec.NewProtoCodec(nil).GRPCCodec())),\n    )\n    if err != nil {\n        return err\n    }\n    defer grpcConn.Close()\n\n    // This creates a gRPC client to query the x/bank service.\n    bankClient := banktypes.NewQueryClient(grpcConn)\n    bankRes, err := bankClient.Balance(\n        context.Background(),\n        &banktypes.QueryBalanceRequest{Address: myAddress.String(), Denom: "stake"},\n    )\n    if err != nil {\n        return err\n    }\n\n    fmt.Println(bankRes.GetBalance()) // Prints the account balance\n\n    return nil\n}\n\nfunc main() {\n    if err := queryState(); err != nil {\n        panic(err)\n    }\n}\n')),(0,r.kt)("p",null,"You can replace the query client (here we are using ",(0,r.kt)("inlineCode",{parentName:"p"},"x/bank"),"'s) with one generated from any other Protobuf service. The list of all available gRPC query endpoints is ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/issues/7786"},"coming soon"),"."),(0,r.kt)("h4",{id:"query-for-historical-state-using-go"},"Query for historical state using Go"),(0,r.kt)("p",null,"Querying for historical blocks is done by adding the block height metadata in the gRPC request."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "context"\n    "fmt"\n\n    "google.golang.org/grpc"\n    "google.golang.org/grpc/metadata"\n\n    "github.com/cosmos/cosmos-sdk/codec"\n    sdk "github.com/cosmos/cosmos-sdk/types"\n    grpctypes "github.com/cosmos/cosmos-sdk/types/grpc"\n    banktypes "github.com/cosmos/cosmos-sdk/x/bank/types"\n)\n\nfunc queryState() error {\n    myAddress, err := sdk.AccAddressFromBech32("cosmos1yerherx4d43gj5wa3zl5vflj9d4pln42n7kuzu") // the my_validator or recipient address.\n    if err != nil {\n        return err\n    }\n\n    // Create a connection to the gRPC server.\n    grpcConn, err := grpc.Dial(\n        "127.0.0.1:9090",    // your gRPC server address.\n        grpc.WithInsecure(), // The Cosmos SDK doesn\'t support any transport security mechanism.\n        // This instantiates a general gRPC codec which handles proto bytes. We pass in a nil interface registry\n        // if the request/response types contain interface instead of \'nil\' you should pass the application specific codec.\n        grpc.WithDefaultCallOptions(grpc.ForceCodec(codec.NewProtoCodec(nil).GRPCCodec())),\n    )\n    if err != nil {\n        return err\n    }\n    defer grpcConn.Close()\n\n    // This creates a gRPC client to query the x/bank service.\n    bankClient := banktypes.NewQueryClient(grpcConn)\n\n    var header metadata.MD\n    _, err = bankClient.Balance(\n        metadata.AppendToOutgoingContext(context.Background(), grpctypes.GRPCBlockHeightHeader, "12"), // Add metadata to request\n        &banktypes.QueryBalanceRequest{Address: myAddress.String(), Denom: "stake"},\n        grpc.Header(&header), // Retrieve header from response\n    )\n    if err != nil {\n        return err\n    }\n    blockHeight := header.Get(grpctypes.GRPCBlockHeightHeader)\n\n    fmt.Println(blockHeight) // Prints the block height (12)\n\n    return nil\n}\n\nfunc main() {\n    if err := queryState(); err != nil {\n        panic(err)\n    }\n}\n')),(0,r.kt)("h3",{id:"cosmjs"},"CosmJS"),(0,r.kt)("p",null,"CosmJS documentation can be found at ",(0,r.kt)("a",{parentName:"p",href:"https://cosmos.github.io/cosmjs"},"https://cosmos.github.io/cosmjs"),". As of January 2021, CosmJS documentation is still work in progress."),(0,r.kt)("h2",{id:"using-the-rest-endpoints"},"Using the REST Endpoints"),(0,r.kt)("p",null,"As described in the ",(0,r.kt)("a",{parentName:"p",href:"/v0.53/learn/advanced/grpc_rest"},"gRPC guide"),", all gRPC services on the Cosmos SDK are made available for more convenient REST-based queries through gRPC-gateway. The format of the URL path is based on the Protobuf service method's full-qualified name, but may contain small customizations so that final URLs look more idiomatic. For example, the REST endpoint for the ",(0,r.kt)("inlineCode",{parentName:"p"},"cosmos.bank.v1beta1.Query/AllBalances")," method is ",(0,r.kt)("inlineCode",{parentName:"p"},"GET /cosmos/bank/v1beta1/balances/{address}"),". Request arguments are passed as query parameters."),(0,r.kt)("p",null,"Note that the REST endpoints are not enabled by default. To enable them, edit the ",(0,r.kt)("inlineCode",{parentName:"p"},"api")," section of your  ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.simapp/config/app.toml")," file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-toml"},"# Enable defines if the API server should be enabled.\nenable = true\n")),(0,r.kt)("p",null,"As a concrete example, the ",(0,r.kt)("inlineCode",{parentName:"p"},"curl")," command to make balances request is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl \\\n    -X GET \\\n    -H "Content-Type: application/json" \\\n    http://localhost:1317/cosmos/bank/v1beta1/balances/$MY_VALIDATOR_ADDRESS\n')),(0,r.kt)("p",null,"Make sure to replace ",(0,r.kt)("inlineCode",{parentName:"p"},"localhost:1317")," with the REST endpoint of your node, configured under the ",(0,r.kt)("inlineCode",{parentName:"p"},"api.address")," field."),(0,r.kt)("p",null,"The list of all available REST endpoints is available as a Swagger specification file, it can be viewed at ",(0,r.kt)("inlineCode",{parentName:"p"},"localhost:1317/swagger"),". Make sure that the ",(0,r.kt)("inlineCode",{parentName:"p"},"api.swagger")," field is set to true in your ",(0,r.kt)("a",{parentName:"p",href:"/v0.53/user/run-node/run-node#configuring-the-node-using-apptoml-and-configtoml"},(0,r.kt)("inlineCode",{parentName:"a"},"app.toml"))," file."),(0,r.kt)("h3",{id:"query-for-historical-state-using-rest"},"Query for historical state using REST"),(0,r.kt)("p",null,"Querying for historical state is done using the HTTP header ",(0,r.kt)("inlineCode",{parentName:"p"},"x-cosmos-block-height"),". For example, a curl command would look like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl \\\n    -X GET \\\n    -H "Content-Type: application/json" \\\n    -H "x-cosmos-block-height: 123" \\\n    http://localhost:1317/cosmos/bank/v1beta1/balances/$MY_VALIDATOR_ADDRESS\n')),(0,r.kt)("p",null,"Assuming the state at that block has not yet been pruned by the node, this query should return a non-empty response."),(0,r.kt)("h3",{id:"cross-origin-resource-sharing-cors"},"Cross-Origin Resource Sharing (CORS)"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS"},"CORS policies")," are not enabled by default to help with security. If you would like to use the rest-server in a public environment we recommend you provide a reverse proxy, this can be done with ",(0,r.kt)("a",{parentName:"p",href:"https://www.nginx.com/"},"nginx"),". For testing and development purposes there is an ",(0,r.kt)("inlineCode",{parentName:"p"},"enabled-unsafe-cors")," field inside ",(0,r.kt)("a",{parentName:"p",href:"/v0.53/user/run-node/run-node#configuring-the-node-using-apptoml-and-configtoml"},(0,r.kt)("inlineCode",{parentName:"a"},"app.toml")),"."))}d.isMDXComponent=!0}}]);