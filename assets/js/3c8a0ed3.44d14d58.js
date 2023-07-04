"use strict";(self.webpackChunkeverscale_docs_website=self.webpackChunkeverscale_docs_website||[]).push([[103],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(t),m=r,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||s;return t?a.createElement(f,o(o({ref:n},u),{},{components:t})):a.createElement(f,o({ref:n},u))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,o=new Array(s);o[0]=m;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[d]="string"==typeof e?e:r,o[1]=i;for(var c=2;c<s;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5162:(e,n,t)=>{t.d(n,{Z:()=>o});var a=t(7294),r=t(6010);const s={tabItem:"tabItem_Ymn6"};function o(e){let{children:n,hidden:t,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(s.tabItem,o),hidden:t},n)}},4866:(e,n,t)=>{t.d(n,{Z:()=>w});var a=t(7462),r=t(7294),s=t(6010),o=t(2466),i=t(6550),l=t(1980),c=t(7392),u=t(12);function d(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}function p(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??d(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:t}=e;const a=(0,i.k6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l._X)(s),(0,r.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(a.location.search);n.set(s,e),a.replace({...a.location,search:n.toString()})}),[s,a])]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,s=p(e),[o,i]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:s}))),[l,c]=f({queryString:t,groupId:a}),[d,g]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,s]=(0,u.Nk)(t);return[a,(0,r.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:a}),b=(()=>{const e=l??d;return m({value:e,tabValues:s})?e:null})();(0,r.useLayoutEffect)((()=>{b&&i(b)}),[b]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),g(e)}),[c,g,s]),tabValues:s}}var b=t(2389);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:n,block:t,selectedValue:i,selectValue:l,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.o5)(),p=e=>{const n=e.currentTarget,t=u.indexOf(n),a=c[t].value;a!==i&&(d(n),l(a))},m=e=>{let n=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;n=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;n=u[t]??u[u.length-1];break}}n?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":t},n)},c.map((e=>{let{value:n,label:t,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,key:n,ref:e=>u.push(e),onKeyDown:m,onClick:p},o,{className:(0,s.Z)("tabs__item",h.tabItem,o?.className,{"tabs__item--active":i===n})}),t??n)})))}function k(e){let{lazy:n,children:t,selectedValue:a}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},s.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a}))))}function y(e){const n=g(e);return r.createElement("div",{className:(0,s.Z)("tabs-container",h.tabList)},r.createElement(v,(0,a.Z)({},e,n)),r.createElement(k,(0,a.Z)({},e,n)))}function w(e){const n=(0,b.Z)();return r.createElement(y,(0,a.Z)({key:String(n)},e))}},1355:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var a=t(7462),r=(t(7294),t(3905)),s=t(4866),o=t(5162);const i={sidebar_position:3},l="Advanced usage of Surf Keeper",c={unversionedId:"develop/recipes/surf-wallet-advanced",id:"develop/recipes/surf-wallet-advanced",title:"Advanced usage of Surf Keeper",description:"After you connected a page to the extension you can interact with your Everscale account.",source:"@site/../../src/develop/recipes/surf-wallet-advanced.md",sourceDirName:"develop/recipes",slug:"/develop/recipes/surf-wallet-advanced",permalink:"/develop/recipes/surf-wallet-advanced",draft:!1,editUrl:"https://github.com/everscale-org/docs/edit/main/.build/website/../../src/develop/recipes/surf-wallet-advanced.md",tags:[],version:"current",lastUpdatedAt:1688495820,formattedLastUpdatedAt:"Jul 4, 2023",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Connect Wallet",permalink:"/develop/recipes/connect-wallet"},next:{title:"Add EVER to your backend",permalink:"/develop/recipes/backend-integration"}},u={},d=[{value:"Surf Extension methods",id:"surf-extension-methods",level:3},{value:"<strong>connect</strong>",id:"connect",level:4},{value:"<strong>connectStatus</strong>",id:"connectstatus",level:4},{value:"<strong>disconnect</strong>",id:"disconnect",level:4},{value:"<strong>sendMessage</strong>",id:"sendmessage",level:4},{value:"<strong>sendTransaction</strong>",id:"sendtransaction",level:4},{value:"<strong>signData</strong>",id:"signdata",level:4},{value:"<strong>subscribe</strong>",id:"subscribe",level:4},{value:"Frameworks usage",id:"frameworks-usage",level:3}],p={toc:d},m="wrapper";function f(e){let{components:n,...t}=e;return(0,r.kt)(m,(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"advanced-usage-of-surf-keeper"},"Advanced usage of Surf Keeper"),(0,r.kt)("p",null,"After you connected a page to the extension you can interact with your Everscale account."),(0,r.kt)("h3",{id:"surf-extension-methods"},"Surf Extension methods"),(0,r.kt)("h4",{id:"connect"},(0,r.kt)("strong",{parentName:"h4"},"connect")),(0,r.kt)("p",null,"  Requests new permissions for current origin.\nShows an approval window to the user."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"input: {};\noutput: {\n    isConnected: boolean; // Flag shows connection status for the current origin\n    address?: string; // Address of extension wallet\n    publicKey?: string; // Hex encoded public key\n};\n")),(0,r.kt)("p",null,"  Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"const result = await rpc.connect();\n")),(0,r.kt)("h4",{id:"connectstatus"},(0,r.kt)("strong",{parentName:"h4"},"connectStatus")),(0,r.kt)("p",null,"  Returns the current connection status."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"input: {};\noutput: {\n    isConnected: boolean; // Flag shows connection status for the current origin\n    address?: string; // Address of extension wallet\n    publicKey?: string; // Hex encoded public key\n};\n")),(0,r.kt)("p",null,"  Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"const result = await rpc.connectStatus();\n")),(0,r.kt)("h4",{id:"disconnect"},(0,r.kt)("strong",{parentName:"h4"},"disconnect")),(0,r.kt)("p",null,"  Removes all permissions for current origin."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"input: {\n}\noutput: {\n  isConnected: boolean; //  Flag shows connection status for the current origin; should return `false` as disconnect method execution result\n}\n")),(0,r.kt)("p",null,"  Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"const result = await rpc.disconnect();\n")),(0,r.kt)("h4",{id:"sendmessage"},(0,r.kt)("strong",{parentName:"h4"},"sendMessage")),(0,r.kt)("p",null,"  Sends an internal message from the user account.\nShows an approval window to the user."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"input: {\n    abi: string; // Contract abi\n    address: string; // Address string\n    net: EverscaleNetNameKey; // Name of network to send message in, i.e. 'mainnet' | 'devnet'\n    callSet: {\n        functionName: string; // Name of contract function to be sent to the contract\n        input: Record<string, any>; // Input for the contract function\n        header?: FunctionHeader;\n    };\n    bounce: boolean; // Whether to bounce message back on error\n    amount: string; // Amount of nano EVER to send\n    action?: string; // Name of action to be performed by message send\n};\noutput: {\n  // Result of send message\n  result?: {\n    shard_block_id: string; // The last generated shard block of the message destination account before the message was sent\n    sending_endpoints: string[]; // The list of endpoints to which the message was sent\n  };\n  error?: string; // String with some error details\n};\n")),(0,r.kt)("p",null,"  Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"const response = await rpc.sendMessage({\n  amount: '2000000000', // in nano-tokens, i.e. 2 tokens\n  bounce: true,\n  callSet: {\n    functionName: 'addComment',\n    input: {\n      comment: 'Test comment',\n    },\n  },\n  net: 'mainnet',\n  action: 'Create comment',\n  address: '0:8959ea111cc0c85d996df0d16e530d584d5366618cfed9ab6a1754828bb78479',\n  abi: '{\"ABI version\":2,\"version\":\"2.3\",\"header\":[\"pubkey\",\"time\",\"expire\"]...',\n});\n")),(0,r.kt)("h4",{id:"sendtransaction"},(0,r.kt)("strong",{parentName:"h4"},"sendTransaction")),(0,r.kt)("p",null,"  Sends transaction with provided params."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"input: {\n  amount: string; // Amount of nano EVER to send\n  bounce: boolean; // Whether to bounce message back on error\n  comment: string; // Comment for the transaction to send it in payload\n  net: EverscaleNetNameKey; // Name of network to send transaction in, i.e. 'mainnet' | 'devnet'\n  to: string; // Address to send transaction to\n}\noutput: {\n  // Result of send transaction message\n  result?: {\n    shard_block_id: string; // The last generated shard block of the message destination account before the message was sent\n    sending_endpoints: string[]; // The list of endpoints to which the message was sent\n  };\n  error?: string; // String with some error details\n};\n")),(0,r.kt)("p",null,"  Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"const response = await rpc.sendTransaction({\n  amount: '10000000000', // in nano-tokens, i.e. 10 tokens\n  bounce: true,\n  comment: 'check it out!',\n  net: 'devnet',\n  to: '0:b76b532fbe72307bff243b401d6792d5d01332ea294a0310c0ffdf874026f2b9',\n});\n")),(0,r.kt)("h4",{id:"signdata"},(0,r.kt)("strong",{parentName:"h4"},"signData")),(0,r.kt)("p",null,"  Signs arbitrary data."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"input: {\n  data: string; // Base64 encoded arbitrary bytes\n}\noutput: {\n  signature?: string; // Base64 encoded signature bytes (data is guaranteed to be 64 bytes long)\n  error?: string; // String with error details\n};\n")),(0,r.kt)("p",null,"  Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"const response = await rpc.signData({\n  data: 'te6ccgEBAQEAKAAASw4E0p6AD5fz9JsGWfbBhP0Bwq9+jk0X3za9rhuI7A1H3DxC0QBw',\n});\n")),(0,r.kt)("h4",{id:"subscribe"},(0,r.kt)("strong",{parentName:"h4"},"subscribe")),(0,r.kt)("p",null,"  Subscribes to data updates."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'input: {\n    type: string; // Subscription type, for now only "balance" is available\n    address: string; // Target address\n    listener: (value: string) => void; // Subscription data update handler\n};\noutput: {\n    remove: () => void; // Base64 encoded signature bytes (data is guaranteed to be 64 bytes long)\n};\n')),(0,r.kt)("p",null,"  Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"const response = rpc.subscribe({\n  type: 'balance',\n  address: '0x000000..000',\n  listener: val => console.log('Balance uodated: ', val),\n});\n")),(0,r.kt)("h3",{id:"frameworks-usage"},"Frameworks usage"),(0,r.kt)("p",null,"Here we gathered the most common patterns of ",(0,r.kt)("inlineCode",{parentName:"p"},"@eversurf/surfkeeper-provider")," usage:"),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"react",label:"React",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'import { useEffect, useMemo, useState } from \'react\';\nimport {\n  Address,\n  ConnectResponse,\n  ProviderRpcClient,\n  hasSurfKeeperProvider\n} from \'@eversurf/surfkeeper-provider\';\n\nexport type ExtensionState = {\n  hasProvider: boolean;\n  isConnecting: boolean;\n  isConnected: boolean;\n  isContractUpdating: boolean;\n  isDisconnecting: boolean;\n  isInitialized: boolean;\n  isInitializing: boolean;\n}\nexport type ExtensionData = {\n  address: Address | undefined;\n  publicKey: string | undefined;\n}\nconst DEFAULT_EXTENSION_STATE: ExtensionState = {\n  hasProvider: false,\n  isConnecting: false,\n  isConnected: false,\n  isContractUpdating: false,\n  isDisconnecting: false,\n  isInitialized: false,\n  isInitializing: false,\n}\nconst DEFAULT_EXTENSION_DATA: ExtensionData = {\n  address: undefined,\n  publicKey: undefined\n}\n\nexport interface IUseSurfKeeper {\n  rpc: ProviderRpcClient,\n  connect: () => Promise<void>,\n  extensionState: ExtensionState,\n  extensionData: ExtensionData\n}\n\nexport const rpc = new ProviderRpcClient();\n\nexport const useSurfKeeper = (): IUseSurfKeeper => {\n  const [extensionState, setExtensionState] = useState<ExtensionState>(DEFAULT_EXTENSION_STATE);\n  const [extensionData, setExtensionData] = useState<ExtensionData>(DEFAULT_EXTENSION_DATA);\n\n  const init = async () => {\n      setExtensionState({\n          ...extensionState,\n          isInitializing: true\n      });\n\n      let hasProvider = false;\n\n      try {\n          hasProvider = await hasSurfKeeperProvider();\n      }\n      catch (e) {\n          console.log("hasSurfKeeperProvider error");\n      }\n\n      if (!hasProvider) {\n          setExtensionState({\n              ...extensionState,\n              hasProvider: false,\n              isInitializing: false\n          });\n          console.warn("Surf Keeper is not installed");\n      }\n\n      const connectResponse = await rpc.connectStatus();\n\n      if (connectResponse!.isConnected) {\n          setExtensionState({\n              ...extensionState,\n              isConnected: true,\n              hasProvider: hasProvider,\n              isConnecting: false,\n              isInitialized: true,\n              isInitializing: false,\n          });\n          setExtensionData({\n              address: (connectResponse as unknown as ConnectResponse).address,\n              publicKey: (connectResponse as unknown as ConnectResponse).publicKey\n          });\n      } else {\n          setExtensionState({\n              ...extensionState,\n              isConnected: false,\n              hasProvider: hasProvider,\n              isConnecting: false,\n              isInitialized: true,\n              isInitializing: false,\n          });\n          console.warn("Surf Keeper is not connected");\n      }\n  }\n\n  const connect = async () => {\n      const connectResponse = await rpc.connect();\n\n      if (connectResponse!.isConnected) {\n          setExtensionState({\n              ...extensionState,\n              isConnecting: false,\n              isConnected: true,\n              isInitialized: true,\n              isInitializing: false,\n          });\n          setExtensionData({\n              address: (connectResponse as unknown as ConnectResponse).address,\n              publicKey: (connectResponse as unknown as ConnectResponse).publicKey\n          });\n          return Promise.resolve();\n      } else {\n          return Promise.reject();\n      }\n  };\n\n  useEffect(() => {\n      setExtensionState({\n          ...extensionState,\n          isInitializing: true\n      });\n      init();\n  }, []);\n\n  return useMemo(\n    () => ({\n      rpc: rpc,\n      connect: connect,\n      extensionState: extensionState,\n      extensionData: extensionData\n    }),\n    [extensionState, extensionData],\n  );\n};\n\nexport default useSurfKeeper;\n\n')))))}f.isMDXComponent=!0}}]);