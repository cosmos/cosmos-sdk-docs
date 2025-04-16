"use strict";(self.webpackChunkcosmos_sdk_docs=self.webpackChunkcosmos_sdk_docs||[]).push([[57120],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},g=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(n),g=r,d=u["".concat(l,".").concat(g)]||u[g]||m[g]||a;return n?i.createElement(d,s(s({ref:t},c),{},{components:n})):i.createElement(d,s({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=g;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:r,s[1]=o;for(var p=2;p<a;p++)s[p]=n[p];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}g.displayName="MDXCreateElement"},8577:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var i=n(87462),r=(n(67294),n(3905));const a={},s="ADR 038: KVStore state listening",o={unversionedId:"build/architecture/adr-038-state-listening",id:"build/architecture/adr-038-state-listening",title:"ADR 038: KVStore state listening",description:"Changelog",source:"@site/docs/build/architecture/adr-038-state-listening.md",sourceDirName:"build/architecture",slug:"/build/architecture/adr-038-state-listening",permalink:"/main/build/architecture/adr-038-state-listening",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"buildSidebar",previous:{title:"ADR 037: Governance split votes",permalink:"/main/build/architecture/adr-037-gov-split-vote"},next:{title:"ADR 039: Epoched Staking",permalink:"/main/build/architecture/adr-039-epoched-staking"}},l={},p=[{value:"Changelog",id:"changelog",level:2},{value:"Status",id:"status",level:2},{value:"Abstract",id:"abstract",level:2},{value:"Context",id:"context",level:2},{value:"Decision",id:"decision",level:2},{value:"Listening",id:"listening",level:3},{value:"ListenKVStore",id:"listenkvstore",level:3},{value:"MultiStore interface updates",id:"multistore-interface-updates",level:3},{value:"MultiStore implementation updates",id:"multistore-implementation-updates",level:3},{value:"Exposing the data",id:"exposing-the-data",level:3},{value:"Streaming Service",id:"streaming-service",level:4},{value:"BaseApp Registration",id:"baseapp-registration",level:4},{value:"ABCI Event Hooks",id:"abci-event-hooks",level:4},{value:"Go Plugin System",id:"go-plugin-system",level:4},{value:"Configuration",id:"configuration",level:4},{value:"Encoding and decoding streams",id:"encoding-and-decoding-streams",level:4},{value:"Consequences",id:"consequences",level:2},{value:"Backwards Compatibility",id:"backwards-compatibility",level:3},{value:"Positive",id:"positive",level:3},{value:"Negative",id:"negative",level:3},{value:"Neutral",id:"neutral",level:3}],c={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"adr-038-kvstore-state-listening"},"ADR 038: KVStore state listening"),(0,r.kt)("h2",{id:"changelog"},"Changelog"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"11/23/2020: Initial draft"),(0,r.kt)("li",{parentName:"ul"},"10/06/2022: Introduce plugin system based on hashicorp/go-plugin"),(0,r.kt)("li",{parentName:"ul"},"10/14/2022:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Add ",(0,r.kt)("inlineCode",{parentName:"li"},"ListenCommit"),", flatten the state writes in a block to a single batch."),(0,r.kt)("li",{parentName:"ul"},"Remove listeners from cache stores, should only listen to ",(0,r.kt)("inlineCode",{parentName:"li"},"rootmulti.Store"),"."),(0,r.kt)("li",{parentName:"ul"},"Remove ",(0,r.kt)("inlineCode",{parentName:"li"},"HaltAppOnDeliveryError()"),", the errors are propagated by default, the implementations should return nil if don't want to propogate errors."))),(0,r.kt)("li",{parentName:"ul"},"26/05/2023: Update with ABCI 2.0")),(0,r.kt)("h2",{id:"status"},"Status"),(0,r.kt)("p",null,"Proposed"),(0,r.kt)("h2",{id:"abstract"},"Abstract"),(0,r.kt)("p",null,"This ADR defines a set of changes to enable listening to state changes of individual KVStores and exposing these data to consumers."),(0,r.kt)("h2",{id:"context"},"Context"),(0,r.kt)("p",null,"Currently, KVStore data can be remotely accessed through ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/blob/master/docs/building-modules/messages-and-queries.md#queries"},"Queries"),"\nwhich proceed either through Tendermint and the ABCI, or through the gRPC server.\nIn addition to these request/response queries, it would be beneficial to have a means of listening to state changes as they occur in real time."),(0,r.kt)("h2",{id:"decision"},"Decision"),(0,r.kt)("p",null,"We will modify the ",(0,r.kt)("inlineCode",{parentName:"p"},"CommitMultiStore")," interface and its concrete (",(0,r.kt)("inlineCode",{parentName:"p"},"rootmulti"),") implementations and introduce a new ",(0,r.kt)("inlineCode",{parentName:"p"},"listenkv.Store")," to allow listening to state changes in underlying KVStores. We don't need to listen to cache stores, because we can't be sure that the writes will be committed eventually, and the writes are duplicated in ",(0,r.kt)("inlineCode",{parentName:"p"},"rootmulti.Store")," eventually, so we should only listen to ",(0,r.kt)("inlineCode",{parentName:"p"},"rootmulti.Store"),".\nWe will introduce a plugin system for configuring and running streaming services that write these state changes and their surrounding ABCI message context to different destinations."),(0,r.kt)("h3",{id:"listening"},"Listening"),(0,r.kt)("p",null,"In a new file, ",(0,r.kt)("inlineCode",{parentName:"p"},"store/types/listening.go"),", we will create a ",(0,r.kt)("inlineCode",{parentName:"p"},"MemoryListener")," struct for streaming out protobuf encoded KV pairs state changes from a KVStore.\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},"MemoryListener")," will be used internally by the concrete ",(0,r.kt)("inlineCode",{parentName:"p"},"rootmulti")," implementation to collect state changes from KVStores."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"// MemoryListener listens to the state writes and accumulate the records in memory.\ntype MemoryListener struct {\n    stateCache []StoreKVPair\n}\n\n// NewMemoryListener creates a listener that accumulate the state writes in memory.\nfunc NewMemoryListener() *MemoryListener {\n    return &MemoryListener{}\n}\n\n// OnWrite writes state change events to the internal cache\nfunc (fl *MemoryListener) OnWrite(storeKey StoreKey, key []byte, value []byte, delete bool) {\n    fl.stateCache = append(fl.stateCache, StoreKVPair{\n        StoreKey: storeKey.Name(),\n        Delete:   delete,\n        Key:      key,\n        Value:    value,\n    })\n}\n\n// PopStateCache returns the current state caches and set to nil\nfunc (fl *MemoryListener) PopStateCache() []StoreKVPair {\n    res := fl.stateCache\n    fl.stateCache = nil\n    return res\n}\n")),(0,r.kt)("p",null,"We will also define a protobuf type for the KV pairs. In addition to the key and value fields this message\nwill include the StoreKey for the originating KVStore so that we can collect information from separate KVStores and determine the source of each KV pair."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-protobuf"},"message StoreKVPair {\n  optional string store_key = 1; // the store key for the KVStore this pair originates from\n  required bool set = 2; // true indicates a set operation, false indicates a delete operation\n  required bytes key = 3;\n  required bytes value = 4;\n}\n")),(0,r.kt)("h3",{id:"listenkvstore"},"ListenKVStore"),(0,r.kt)("p",null,"We will create a new ",(0,r.kt)("inlineCode",{parentName:"p"},"Store")," type ",(0,r.kt)("inlineCode",{parentName:"p"},"listenkv.Store")," that the ",(0,r.kt)("inlineCode",{parentName:"p"},"rootmulti")," store will use to wrap a ",(0,r.kt)("inlineCode",{parentName:"p"},"KVStore")," to enable state listening.\nWe will configure the ",(0,r.kt)("inlineCode",{parentName:"p"},"Store")," with a ",(0,r.kt)("inlineCode",{parentName:"p"},"MemoryListener")," which will collect state changes for output to specific destinations."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"// Store implements the KVStore interface with listening enabled.\n// Operations are traced on each core KVStore call and written to any of the\n// underlying listeners with the proper key and operation permissions\ntype Store struct {\n    parent    types.KVStore\n    listener  *types.MemoryListener\n    parentStoreKey types.StoreKey\n}\n\n// NewStore returns a reference to a new traceKVStore given a parent\n// KVStore implementation and a buffered writer.\nfunc NewStore(parent types.KVStore, psk types.StoreKey, listener *types.MemoryListener) *Store {\n    return &Store{parent: parent, listener: listener, parentStoreKey: psk}\n}\n\n// Set implements the KVStore interface. It traces a write operation and\n// delegates the Set call to the parent KVStore.\nfunc (s *Store) Set(key []byte, value []byte) {\n    types.AssertValidKey(key)\n    s.parent.Set(key, value)\n    s.listener.OnWrite(s.parentStoreKey, key, value, false)\n}\n\n// Delete implements the KVStore interface. It traces a write operation and\n// delegates the Delete call to the parent KVStore.\nfunc (s *Store) Delete(key []byte) {\n    s.parent.Delete(key)\n    s.listener.OnWrite(s.parentStoreKey, key, nil, true)\n}\n")),(0,r.kt)("h3",{id:"multistore-interface-updates"},"MultiStore interface updates"),(0,r.kt)("p",null,"We will update the ",(0,r.kt)("inlineCode",{parentName:"p"},"CommitMultiStore")," interface to allow us to wrap a ",(0,r.kt)("inlineCode",{parentName:"p"},"Memorylistener")," to a specific ",(0,r.kt)("inlineCode",{parentName:"p"},"KVStore"),".\nNote that the ",(0,r.kt)("inlineCode",{parentName:"p"},"MemoryListener")," will be attached internally by the concrete ",(0,r.kt)("inlineCode",{parentName:"p"},"rootmulti")," implementation."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"type CommitMultiStore interface {\n    ...\n\n    // AddListeners adds a listener for the KVStore belonging to the provided StoreKey\n    AddListeners(keys []StoreKey)\n\n    // PopStateCache returns the accumulated state change messages from MemoryListener\n    PopStateCache() []StoreKVPair\n}\n")),(0,r.kt)("h3",{id:"multistore-implementation-updates"},"MultiStore implementation updates"),(0,r.kt)("p",null,"We will adjust the ",(0,r.kt)("inlineCode",{parentName:"p"},"rootmulti")," ",(0,r.kt)("inlineCode",{parentName:"p"},"GetKVStore")," method to wrap the returned ",(0,r.kt)("inlineCode",{parentName:"p"},"KVStore")," with a ",(0,r.kt)("inlineCode",{parentName:"p"},"listenkv.Store")," if listening is turned on for that ",(0,r.kt)("inlineCode",{parentName:"p"},"Store"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"func (rs *Store) GetKVStore(key types.StoreKey) types.KVStore {\n    store := rs.stores[key].(types.KVStore)\n\n    if rs.TracingEnabled() {\n        store = tracekv.NewStore(store, rs.traceWriter, rs.traceContext)\n    }\n    if rs.ListeningEnabled(key) {\n        store = listenkv.NewStore(store, key, rs.listeners[key])\n    }\n\n    return store\n}\n")),(0,r.kt)("p",null,"We will implement ",(0,r.kt)("inlineCode",{parentName:"p"},"AddListeners")," to manage KVStore listeners internally and implement ",(0,r.kt)("inlineCode",{parentName:"p"},"PopStateCache"),"\nfor a means of retrieving the current state."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"// AddListeners adds state change listener for a specific KVStore\nfunc (rs *Store) AddListeners(keys []types.StoreKey) {\n    listener := types.NewMemoryListener()\n    for i := range keys {\n        rs.listeners[keys[i]] = listener\n    }\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"func (rs *Store) PopStateCache() []types.StoreKVPair {\n    var cache []types.StoreKVPair\n    for _, ls := range rs.listeners {\n        cache = append(cache, ls.PopStateCache()...)\n    }\n    sort.SliceStable(cache, func(i, j int) bool {\n        return cache[i].StoreKey < cache[j].StoreKey\n    })\n    return cache\n}\n")),(0,r.kt)("p",null,"We will also adjust the ",(0,r.kt)("inlineCode",{parentName:"p"},"rootmulti")," ",(0,r.kt)("inlineCode",{parentName:"p"},"CacheMultiStore")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"CacheMultiStoreWithVersion")," methods to enable listening in\nthe cache layer."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"func (rs *Store) CacheMultiStore() types.CacheMultiStore {\n    stores := make(map[types.StoreKey]types.CacheWrapper)\n    for k, v := range rs.stores {\n        store := v.(types.KVStore)\n        // Wire the listenkv.Store to allow listeners to observe the writes from the cache store,\n        // set same listeners on cache store will observe duplicated writes.\n        if rs.ListeningEnabled(k) {\n            store = listenkv.NewStore(store, k, rs.listeners[k])\n        }\n        stores[k] = store\n    }\n    return cachemulti.NewStore(rs.db, stores, rs.keysByName, rs.traceWriter, rs.getTracingContext())\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"func (rs *Store) CacheMultiStoreWithVersion(version int64) (types.CacheMultiStore, error) {\n // ...\n\n        // Wire the listenkv.Store to allow listeners to observe the writes from the cache store,\n        // set same listeners on cache store will observe duplicated writes.\n        if rs.ListeningEnabled(key) {\n            cacheStore = listenkv.NewStore(cacheStore, key, rs.listeners[key])\n        }\n\n        cachedStores[key] = cacheStore\n    }\n\n    return cachemulti.NewStore(rs.db, cachedStores, rs.keysByName, rs.traceWriter, rs.getTracingContext()), nil\n}\n")),(0,r.kt)("h3",{id:"exposing-the-data"},"Exposing the data"),(0,r.kt)("h4",{id:"streaming-service"},"Streaming Service"),(0,r.kt)("p",null,"We will introduce a new ",(0,r.kt)("inlineCode",{parentName:"p"},"ABCIListener")," interface that plugs into the BaseApp and relays ABCI requests and responses\nso that the service can group the state changes with the ABCI requests."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"// baseapp/streaming.go\n\n// ABCIListener is the interface that we're exposing as a streaming service.\ntype ABCIListener interface {\n    // ListenFinalizeBlock updates the streaming service with the latest FinalizeBlock messages\n    ListenFinalizeBlock(ctx context.Context, req abci.RequestFinalizeBlock, res abci.ResponseFinalizeBlock) error\n    // ListenCommit updates the steaming service with the latest Commit messages and state changes\n    ListenCommit(ctx context.Context, res abci.ResponseCommit, changeSet []*StoreKVPair) error\n}\n")),(0,r.kt)("h4",{id:"baseapp-registration"},"BaseApp Registration"),(0,r.kt)("p",null,"We will add a new method to the ",(0,r.kt)("inlineCode",{parentName:"p"},"BaseApp")," to enable the registration of ",(0,r.kt)("inlineCode",{parentName:"p"},"StreamingService"),"s:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"// SetStreamingService is used to set a streaming service into the BaseApp hooks and load the listeners into the multistore\nfunc (app *BaseApp) SetStreamingService(s ABCIListener) {\n   // register the StreamingService within the BaseApp\n   // BaseApp will pass BeginBlock, DeliverTx, and EndBlock requests and responses to the streaming services to update their ABCI context\n   app.abciListeners = append(app.abciListeners, s)\n}\n")),(0,r.kt)("p",null,"We will add two new fields to the ",(0,r.kt)("inlineCode",{parentName:"p"},"BaseApp")," struct:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"type BaseApp struct {\n\n    ...\n\n    // abciListenersAsync for determining if abciListeners will run asynchronously.\n    // When abciListenersAsync=false and stopNodeOnABCIListenerErr=false listeners will run synchronized but will not stop the node.\n    // When abciListenersAsync=true stopNodeOnABCIListenerErr will be ignored.\n    abciListenersAsync bool\n\n    // stopNodeOnABCIListenerErr halts the node when ABCI streaming service listening results in an error.\n    // stopNodeOnABCIListenerErr=true must be paired with abciListenersAsync=false.\n    stopNodeOnABCIListenerErr bool\n}\n")),(0,r.kt)("h4",{id:"abci-event-hooks"},"ABCI Event Hooks"),(0,r.kt)("p",null,"We will modify the ",(0,r.kt)("inlineCode",{parentName:"p"},"FinalizeBlock")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Commit")," methods to pass ABCI requests and responses\nto any streaming service hooks registered with the ",(0,r.kt)("inlineCode",{parentName:"p"},"BaseApp"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'func (app *BaseApp) FinalizeBlock(req abci.RequestFinalizeBlock) abci.ResponseFinalizeBlock {\n\n    var abciRes abci.ResponseFinalizeBlock\n    defer func() {\n        // call the streaming service hook with the FinalizeBlock messages\n        for _, abciListener := range app.abciListeners {\n            ctx := app.finalizeState.ctx\n            blockHeight := ctx.BlockHeight()\n            if app.abciListenersAsync {\n                go func(req abci.RequestFinalizeBlock, res abci.ResponseFinalizeBlock) {\n                    if err := app.abciListener.FinalizeBlock(blockHeight, req, res); err != nil {\n                        app.logger.Error("FinalizeBlock listening hook failed", "height", blockHeight, "err", err)\n                    }\n                }(req, abciRes)\n            } else {\n                if err := app.abciListener.ListenFinalizeBlock(blockHeight, req, res); err != nil {\n                    app.logger.Error("FinalizeBlock listening hook failed", "height", blockHeight, "err", err)\n                    if app.stopNodeOnABCIListenerErr {\n                        os.Exit(1)\n                    }\n                }\n            }\n        }\n    }()\n\n    ...\n\n    return abciRes\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'func (app *BaseApp) Commit() abci.ResponseCommit {\n\n    ...\n\n    res := abci.ResponseCommit{\n        Data:         commitID.Hash,\n        RetainHeight: retainHeight,\n    }\n\n    // call the streaming service hook with the Commit messages\n    for _, abciListener := range app.abciListeners {\n        ctx := app.deliverState.ctx\n        blockHeight := ctx.BlockHeight()\n        changeSet := app.cms.PopStateCache()\n        if app.abciListenersAsync {\n            go func(res abci.ResponseCommit, changeSet []store.StoreKVPair) {\n                if err := app.abciListener.ListenCommit(ctx, res, changeSet); err != nil {\n                    app.logger.Error("ListenCommit listening hook failed", "height", blockHeight, "err", err)\n                }\n            }(res, changeSet)\n        } else {\n            if err := app.abciListener.ListenCommit(ctx, res, changeSet); err != nil {\n                app.logger.Error("ListenCommit listening hook failed", "height", blockHeight, "err", err)\n                if app.stopNodeOnABCIListenerErr {\n                    os.Exit(1)\n                }\n            }\n        }\n    }\n\n    ...\n\n    return res\n}\n')),(0,r.kt)("h4",{id:"go-plugin-system"},"Go Plugin System"),(0,r.kt)("p",null,"We propose a plugin architecture to load and run ",(0,r.kt)("inlineCode",{parentName:"p"},"Streaming")," plugins and other types of implementations. We will introduce a plugin\nsystem over gRPC that is used to load and run Cosmos-SDK plugins. The plugin system uses ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/hashicorp/go-plugin"},"hashicorp/go-plugin"),".\nEach plugin must have a struct that implements the ",(0,r.kt)("inlineCode",{parentName:"p"},"plugin.Plugin")," interface and an ",(0,r.kt)("inlineCode",{parentName:"p"},"Impl")," interface for processing messages over gRPC.\nEach plugin must also have a message protocol defined for the gRPC service:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'// streaming/plugins/abci/{plugin_version}/interface.go\n\n// Handshake is a common handshake that is shared by streaming and host.\n// This prevents users from executing bad plugins or executing a plugin\n// directory. It is a UX feature, not a security feature.\nvar Handshake = plugin.HandshakeConfig{\n    ProtocolVersion:  1,\n    MagicCookieKey:   "ABCI_LISTENER_PLUGIN",\n    MagicCookieValue: "ef78114d-7bdf-411c-868f-347c99a78345",\n}\n\n// ListenerPlugin is the base struc for all kinds of go-plugin implementations\n// It will be included in interfaces of different Plugins\ntype ABCIListenerPlugin struct {\n    // GRPCPlugin must still implement the Plugin interface\n    plugin.Plugin\n    // Concrete implementation, written in Go. This is only used for plugins\n    // that are written in Go.\n    Impl baseapp.ABCIListener\n}\n\nfunc (p *ListenerGRPCPlugin) GRPCServer(_ *plugin.GRPCBroker, s *grpc.Server) error {\n    RegisterABCIListenerServiceServer(s, &GRPCServer{Impl: p.Impl})\n    return nil\n}\n\nfunc (p *ListenerGRPCPlugin) GRPCClient(\n    _ context.Context,\n    _ *plugin.GRPCBroker,\n    c *grpc.ClientConn,\n) (interface{}, error) {\n    return &GRPCClient{client: NewABCIListenerServiceClient(c)}, nil\n}\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"plugin.Plugin")," interface has two methods ",(0,r.kt)("inlineCode",{parentName:"p"},"Client")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Server"),". For our GRPC service these are ",(0,r.kt)("inlineCode",{parentName:"p"},"GRPCClient")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"GRPCServer"),"\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},"Impl")," field holds the concrete implementation of our ",(0,r.kt)("inlineCode",{parentName:"p"},"baseapp.ABCIListener")," interface written in Go.\nNote: this is only used for plugin implementations written in Go."),(0,r.kt)("p",null,"The advantage of having such a plugin system is that within each plugin authors can define the message protocol in a way that fits their use case.\nFor example, when state change listening is desired, the ",(0,r.kt)("inlineCode",{parentName:"p"},"ABCIListener")," message protocol can be defined as below (",(0,r.kt)("em",{parentName:"p"},"for illustrative purposes only"),").\nWhen state change listening is not desired than ",(0,r.kt)("inlineCode",{parentName:"p"},"ListenCommit")," can be omitted from the protocol."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-protobuf"},'syntax = "proto3";\n\n...\n\nmessage Empty {}\n\nmessage ListenFinalizeBlockRequest {\n  RequestFinalizeBlock  req = 1;\n  ResponseFinalizeBlock res = 2;\n}\nmessage ListenCommitRequest {\n  int64                block_height = 1;\n  ResponseCommit       res          = 2;\n  repeated StoreKVPair changeSet    = 3;\n}\n\n// plugin that listens to state changes\nservice ABCIListenerService {\n  rpc ListenFinalizeBlock(ListenFinalizeBlockRequest) returns (Empty);\n  rpc ListenCommit(ListenCommitRequest) returns (Empty);\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-protobuf"},"...\n// plugin that doesn't listen to state changes\nservice ABCIListenerService {\n  rpc ListenFinalizeBlock(ListenFinalizeBlockRequest) returns (Empty);\n  rpc ListenCommit(ListenCommitRequest) returns (Empty);\n}\n")),(0,r.kt)("p",null,"Implementing the service above:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"// streaming/plugins/abci/{plugin_version}/grpc.go\n\nvar (\n    _ baseapp.ABCIListener = (*GRPCClient)(nil)\n)\n\n// GRPCClient is an implementation of the ABCIListener and ABCIListenerPlugin interfaces that talks over RPC.\ntype GRPCClient struct {\n    client ABCIListenerServiceClient\n}\n\nfunc (m *GRPCClient) ListenFinalizeBlock(goCtx context.Context, req abci.RequestFinalizeBlock, res abci.ResponseFinalizeBlock) error {\n    ctx := sdk.UnwrapSDKContext(goCtx)\n    _, err := m.client.ListenDeliverTx(ctx, &ListenDeliverTxRequest{BlockHeight: ctx.BlockHeight(), Req: req, Res: res})\n    return err\n}\n\nfunc (m *GRPCClient) ListenCommit(goCtx context.Context, res abci.ResponseCommit, changeSet []store.StoreKVPair) error {\n    ctx := sdk.UnwrapSDKContext(goCtx)\n    _, err := m.client.ListenCommit(ctx, &ListenCommitRequest{BlockHeight: ctx.BlockHeight(), Res: res, ChangeSet: changeSet})\n    return err\n}\n\n// GRPCServer is the gRPC server that GRPCClient talks to.\ntype GRPCServer struct {\n    // This is the real implementation\n    Impl baseapp.ABCIListener\n}\n\nfunc (m *GRPCServer) ListenFinalizeBlock(ctx context.Context, req *ListenFinalizeBlockRequest) (*Empty, error) {\n    return &Empty{}, m.Impl.ListenFinalizeBlock(ctx, req.Req, req.Res)\n}\n\nfunc (m *GRPCServer) ListenCommit(ctx context.Context, req *ListenCommitRequest) (*Empty, error) {\n    return &Empty{}, m.Impl.ListenCommit(ctx, req.Res, req.ChangeSet)\n}\n\n")),(0,r.kt)("p",null,"And the pre-compiled Go plugin ",(0,r.kt)("inlineCode",{parentName:"p"},"Impl"),"(",(0,r.kt)("em",{parentName:"p"},"this is only used for plugins that are written in Go"),"):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'// streaming/plugins/abci/{plugin_version}/impl/plugin.go\n\n// Plugins are pre-compiled and loaded by the plugin system\n\n// ABCIListener is the implementation of the baseapp.ABCIListener interface\ntype ABCIListener struct{}\n\nfunc (m *ABCIListenerPlugin) ListenFinalizeBlock(ctx context.Context, req abci.RequestFinalizeBlock, res abci.ResponseFinalizeBlock) error {\n    // send data to external system\n}\n\nfunc (m *ABCIListenerPlugin) ListenCommit(ctx context.Context, res abci.ResponseCommit, changeSet []store.StoreKVPair) error {\n    // send data to external system\n}\n\nfunc main() {\n    plugin.Serve(&plugin.ServeConfig{\n        HandshakeConfig: grpc_abci_v1.Handshake,\n        Plugins: map[string]plugin.Plugin{\n           "grpc_plugin_v1": &grpc_abci_v1.ABCIListenerGRPCPlugin{Impl: &ABCIListenerPlugin{}},\n        },\n\n        // A non-nil value here enables gRPC serving for this streaming...\n        GRPCServer: plugin.DefaultGRPCServer,\n    })\n}\n')),(0,r.kt)("p",null,"We will introduce a plugin loading system that will return ",(0,r.kt)("inlineCode",{parentName:"p"},"(interface{}, error)"),".\nThis provides the advantage of using versioned plugins where the plugin interface and gRPC protocol change over time.\nIn addition, it allows for building independent plugin that can expose different parts of the system over gRPC."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'func NewStreamingPlugin(name string, logLevel string) (interface{}, error) {\n    logger := hclog.New(&hclog.LoggerOptions{\n       Output: hclog.DefaultOutput,\n       Level:  toHclogLevel(logLevel),\n       Name:   fmt.Sprintf("plugin.%s", name),\n    })\n\n    // We\'re a host. Start by launching the streaming process.\n    env := os.Getenv(GetPluginEnvKey(name))\n    client := plugin.NewClient(&plugin.ClientConfig{\n       HandshakeConfig: HandshakeMap[name],\n       Plugins:         PluginMap,\n       Cmd:             exec.Command("sh", "-c", env),\n       Logger:          logger,\n       AllowedProtocols: []plugin.Protocol{\n           plugin.ProtocolNetRPC, plugin.ProtocolGRPC},\n    })\n\n    // Connect via RPC\n    rpcClient, err := client.Client()\n    if err != nil {\n       return nil, err\n    }\n\n    // Request streaming plugin\n    return rpcClient.Dispense(name)\n}\n\n')),(0,r.kt)("p",null,"We propose a ",(0,r.kt)("inlineCode",{parentName:"p"},"RegisterStreamingPlugin")," function for the App to register ",(0,r.kt)("inlineCode",{parentName:"p"},"NewStreamingPlugin"),"s with the App's BaseApp.\nStreaming plugins can be of ",(0,r.kt)("inlineCode",{parentName:"p"},"Any")," type; therefore, the function takes in an interface vs a concrete type.\nFor example, we could have plugins of ",(0,r.kt)("inlineCode",{parentName:"p"},"ABCIListener"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"WasmListener")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"IBCListener"),". Note that ",(0,r.kt)("inlineCode",{parentName:"p"},"RegisterStreamingPluing")," function\nis helper function and not a requirement. Plugin registration can easily be moved from the App to the BaseApp directly."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'// baseapp/streaming.go\n\n// RegisterStreamingPlugin registers streaming plugins with the App.\n// This method returns an error if a plugin is not supported.\nfunc RegisterStreamingPlugin(\n    bApp *BaseApp,\n    appOpts servertypes.AppOptions,\n    keys map[string]*types.KVStoreKey,\n    streamingPlugin interface{},\n) error {\n    switch t := streamingPlugin.(type) {\n    case ABCIListener:\n        registerABCIListenerPlugin(bApp, appOpts, keys, t)\n    default:\n        return fmt.Errorf("unexpected plugin type %T", t)\n    }\n    return nil\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'func registerABCIListenerPlugin(\n    bApp *BaseApp,\n    appOpts servertypes.AppOptions,\n    keys map[string]*store.KVStoreKey,\n    abciListener ABCIListener,\n) {\n    asyncKey := fmt.Sprintf("%s.%s.%s", StreamingTomlKey, StreamingABCITomlKey, StreamingABCIAsync)\n    async := cast.ToBool(appOpts.Get(asyncKey))\n    stopNodeOnErrKey := fmt.Sprintf("%s.%s.%s", StreamingTomlKey, StreamingABCITomlKey, StreamingABCIStopNodeOnErrTomlKey)\n    stopNodeOnErr := cast.ToBool(appOpts.Get(stopNodeOnErrKey))\n    keysKey := fmt.Sprintf("%s.%s.%s", StreamingTomlKey, StreamingABCITomlKey, StreamingABCIKeysTomlKey)\n    exposeKeysStr := cast.ToStringSlice(appOpts.Get(keysKey))\n    exposedKeys := exposeStoreKeysSorted(exposeKeysStr, keys)\n    bApp.cms.AddListeners(exposedKeys)\n    app.SetStreamingManager(\n        storetypes.StreamingManager{\n            ABCIListeners: []storetypes.ABCIListener{abciListener},\n            StopNodeOnErr: stopNodeOnErr,\n        },\n    )\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'func exposeAll(list []string) bool {\n    for _, ele := range list {\n        if ele == "*" {\n            return true\n        }\n    }\n    return false\n}\n\nfunc exposeStoreKeys(keysStr []string, keys map[string]*types.KVStoreKey) []types.StoreKey {\n    var exposeStoreKeys []types.StoreKey\n    if exposeAll(keysStr) {\n        exposeStoreKeys = make([]types.StoreKey, 0, len(keys))\n        for _, storeKey := range keys {\n            exposeStoreKeys = append(exposeStoreKeys, storeKey)\n        }\n    } else {\n        exposeStoreKeys = make([]types.StoreKey, 0, len(keysStr))\n        for _, keyStr := range keysStr {\n            if storeKey, ok := keys[keyStr]; ok {\n                exposeStoreKeys = append(exposeStoreKeys, storeKey)\n            }\n        }\n    }\n    // sort storeKeys for deterministic output\n    sort.SliceStable(exposeStoreKeys, func(i, j int) bool {\n        return exposeStoreKeys[i].Name() < exposeStoreKeys[j].Name()\n    })\n\n    return exposeStoreKeys\n}\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"NewStreamingPlugin")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"RegisterStreamingPlugin")," functions are used to register a plugin with the App's BaseApp."),(0,r.kt)("p",null,"e.g. in ",(0,r.kt)("inlineCode",{parentName:"p"},"NewSimApp"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'func NewSimApp(\n    logger log.Logger,\n    db dbm.DB,\n    traceStore io.Writer,\n    loadLatest bool,\n    appOpts servertypes.AppOptions,\n    baseAppOptions ...func(*baseapp.BaseApp),\n) *SimApp {\n\n    ...\n\n    keys := sdk.NewKVStoreKeys(\n       authtypes.StoreKey, banktypes.StoreKey, stakingtypes.StoreKey,\n       minttypes.StoreKey, distrtypes.StoreKey, slashingtypes.StoreKey,\n       govtypes.StoreKey, paramstypes.StoreKey, ibchost.StoreKey, upgradetypes.StoreKey,\n       evidencetypes.StoreKey, ibctransfertypes.StoreKey, capabilitytypes.StoreKey,\n    )\n\n    ...\n\n    // register streaming services\n    streamingCfg := cast.ToStringMap(appOpts.Get(baseapp.StreamingTomlKey))\n    for service := range streamingCfg {\n        pluginKey := fmt.Sprintf("%s.%s.%s", baseapp.StreamingTomlKey, service, baseapp.StreamingPluginTomlKey)\n        pluginName := strings.TrimSpace(cast.ToString(appOpts.Get(pluginKey)))\n        if len(pluginName) > 0 {\n            logLevel := cast.ToString(appOpts.Get(flags.FlagLogLevel))\n            plugin, err := streaming.NewStreamingPlugin(pluginName, logLevel)\n            if err != nil {\n                tmos.Exit(err.Error())\n            }\n            if err := baseapp.RegisterStreamingPlugin(bApp, appOpts, keys, plugin); err != nil {\n                tmos.Exit(err.Error())\n            }\n        }\n    }\n\n    return app\n')),(0,r.kt)("h4",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"The plugin system will be configured within an App's TOML configuration files."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-toml"},'# gRPC streaming\n[streaming]\n\n# ABCI streaming service\n[streaming.abci]\n\n# The plugin version to use for ABCI listening\nplugin = "abci_v1"\n\n# List of kv store keys to listen to for state changes.\n# Set to ["*"] to expose all keys.\nkeys = ["*"]\n\n# Enable abciListeners to run asynchronously.\n# When abciListenersAsync=false and stopNodeOnABCIListenerErr=false listeners will run synchronized but will not stop the node.\n# When abciListenersAsync=true stopNodeOnABCIListenerErr will be ignored.\nasync = false\n\n# Whether to stop the node on message deliver error.\nstop-node-on-err = true\n')),(0,r.kt)("p",null,"There will be four parameters for configuring ",(0,r.kt)("inlineCode",{parentName:"p"},"ABCIListener")," plugin: ",(0,r.kt)("inlineCode",{parentName:"p"},"streaming.abci.plugin"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"streaming.abci.keys"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"streaming.abci.async")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"streaming.abci.stop-node-on-err"),".\n",(0,r.kt)("inlineCode",{parentName:"p"},"streaming.abci.plugin")," is the name of the plugin we want to use for streaming, ",(0,r.kt)("inlineCode",{parentName:"p"},"streaming.abci.keys")," is a set of store keys for stores it listens to,\n",(0,r.kt)("inlineCode",{parentName:"p"},"streaming.abci.async")," is bool enabling asynchronous listening and ",(0,r.kt)("inlineCode",{parentName:"p"},"streaming.abci.stop-node-on-err")," is a bool that stops the node when true and when operating\non synchronized mode ",(0,r.kt)("inlineCode",{parentName:"p"},"streaming.abci.async=false"),". Note that ",(0,r.kt)("inlineCode",{parentName:"p"},"streaming.abci.stop-node-on-err=true")," will be ignored if ",(0,r.kt)("inlineCode",{parentName:"p"},"streaming.abci.async=true"),"."),(0,r.kt)("p",null,"The configuration above support additional streaming plugins by adding the plugin to the ",(0,r.kt)("inlineCode",{parentName:"p"},"[streaming]")," configuration section\nand registering the plugin with ",(0,r.kt)("inlineCode",{parentName:"p"},"RegisterStreamingPlugin")," helper function."),(0,r.kt)("p",null,"Note the that each plugin must include ",(0,r.kt)("inlineCode",{parentName:"p"},"streaming.{service}.plugin")," property as it is a requirement for doing the lookup and registration of the plugin\nwith the App. All other properties are unique to the individual services."),(0,r.kt)("h4",{id:"encoding-and-decoding-streams"},"Encoding and decoding streams"),(0,r.kt)("p",null,"ADR-038 introduces the interfaces and types for streaming state changes out from KVStores, associating this\ndata with their related ABCI requests and responses, and registering a service for consuming this data and streaming it to some destination in a final format.\nInstead of prescribing a final data format in this ADR, it is left to a specific plugin implementation to define and document this format.\nWe take this approach because flexibility in the final format is necessary to support a wide range of streaming service plugins. For example,\nthe data format for a streaming service that writes the data out to a set of files will differ from the data format that is written to a Kafka topic."),(0,r.kt)("h2",{id:"consequences"},"Consequences"),(0,r.kt)("p",null,"These changes will provide a means of subscribing to KVStore state changes in real time."),(0,r.kt)("h3",{id:"backwards-compatibility"},"Backwards Compatibility"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"This ADR changes the ",(0,r.kt)("inlineCode",{parentName:"li"},"CommitMultiStore")," interface, implementations supporting the previous version of this interface will not support the new one")),(0,r.kt)("h3",{id:"positive"},"Positive"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Ability to listen to KVStore state changes in real time and expose these events to external consumers")),(0,r.kt)("h3",{id:"negative"},"Negative"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Changes ",(0,r.kt)("inlineCode",{parentName:"li"},"CommitMultiStore")," interface and its implementations")),(0,r.kt)("h3",{id:"neutral"},"Neutral"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Introduces additional- but optional- complexity to configuring and running a cosmos application"),(0,r.kt)("li",{parentName:"ul"},"If an application developer opts to use these features to expose data, they need to be aware of the ramifications/risks of that data exposure as it pertains to the specifics of their application")))}m.isMDXComponent=!0}}]);