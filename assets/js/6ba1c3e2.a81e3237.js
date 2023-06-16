"use strict";(self.webpackChunkeverscale_docs_website=self.webpackChunkeverscale_docs_website||[]).push([[7020],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>f});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},h=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,h=o(e,["components","mdxType","originalType","parentName"]),d=l(a),u=i,f=d["".concat(c,".").concat(u)]||d[u]||p[u]||r;return a?n.createElement(f,s(s({ref:t},h),{},{components:a})):n.createElement(f,s({ref:t},h))}));function f(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,s=new Array(r);s[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[d]="string"==typeof e?e:i,s[1]=o;for(var l=2;l<r;l++)s[l]=a[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},1902:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var n=a(7462),i=(a(7294),a(3905));const r={sidebar_position:2},s="Infinite scalability",o={unversionedId:"overview/infinite-scalability",id:"overview/infinite-scalability",title:"Infinite scalability",description:"Everscale\u2019s infinite scalability has been envisioned in its architecture since inception. It is achieved by the means of dynamic sharding, described in detail in the technical whitepaper. The reason for scalability was primarily dictated by the blockchain's goal to accommodate a billion or even more users. Consequently, such a large customer base requires a high volume of transaction processing per second.",source:"@site/../../src/overview/infinite-scalability.md",sourceDirName:"overview",slug:"/overview/infinite-scalability",permalink:"/overview/infinite-scalability",draft:!1,editUrl:"https://github.com/everscale-org/docs/edit/main/.build/website/../../src/overview/infinite-scalability.md",tags:[],version:"current",lastUpdatedAt:1686822547,formattedLastUpdatedAt:"Jun 15, 2023",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Documentation overview",permalink:"/overview/contents"},next:{title:"Differences from EVM",permalink:"/overview/differences-from-evm"}},c={},l=[{value:"The Approach to Infinite Scalability",id:"the-approach-to-infinite-scalability",level:2},{value:"Everscale\u2019s threading in a nutshell.",id:"everscales-threading-in-a-nutshell",level:2}],h={toc:l},d="wrapper";function p(e){let{components:t,...r}=e;return(0,i.kt)(d,(0,n.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"infinite-scalability"},"Infinite scalability"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(3086).Z,width:"1600",height:"840"})),(0,i.kt)("p",null,"Everscale\u2019s infinite scalability has been envisioned in its architecture since inception. It is achieved by the means of dynamic sharding, described in detail in the ",(0,i.kt)("a",{parentName:"p",href:"https://everscale.network/docs/everscale-whitepaper.pdf"},"technical whitepaper"),". The reason for scalability was primarily dictated by the blockchain's goal to accommodate a billion or even more users. Consequently, such a large customer base requires a high volume of transaction processing per second."),(0,i.kt)("p",null,"This approach comes in contrast to the one Ethereum took, resorting to scalability just recently. The decision to scale was triggered by capacity limitations and high transaction costs. However, despite strong efforts, Ethereum is not yet successful. There are many solutions being researched and tested, such as rollups and different sharding approaches. The results remain to be seen in practice. "),(0,i.kt)("h2",{id:"the-approach-to-infinite-scalability"},"The Approach to Infinite Scalability"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Everscale scales the network via a combination of both data sharding (workchains) and execution sharding (threads).")),(0,i.kt)("p",null,"The Everscale network is split into data shards called workchains. Each election cycle, the global set of validators rotate and are assigned to a workchain. Validators store data and process transactions only for their assigned workchain. As long as validators download blocks of other workchains and update their state based on the changes that occurred, all workchains can run in conjunction."),(0,i.kt)("p",null,"As of now, Everscale is comprised of two global shards: the ",(0,i.kt)("strong",{parentName:"p"},"masterchain")," and the ",(0,i.kt)("strong",{parentName:"p"},"main workchain"),". Everscale\u2019s architecture can potentially accommodate up to 232 workchains. Each newly created workchain can have its own configuration parameters, virtual machine and native currency,"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(3081).Z,width:"1692",height:"784"})),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"masterchain")," is for the synchronization of messages and transaction execution. That is to say, for a multi-chain network to securely operate, the nodes need to reach consensus. On Everscale, all workchain ",(0,i.kt)("strong",{parentName:"p"},"block proofs")," are posted to the masterchain. The blocks of the masterchain contain the latest block hashes of all other chains in the network. The ",(0,i.kt)("strong",{parentName:"p"},"main workchain"),", on the other hand, consists of smart contracts and is used for transactions. Each workchain, on its part, is split into execution shards called ",(0,i.kt)("strong",{parentName:"p"},"threads"),". Threads contain a chunk of the network\u2019s total number of smart contracts. Validators rotate through the assigned threads and process the transactions only in their thread. The number of threads varies from 1 to 256, depending on the network activity. Such a multithreading approach allows for parallel execution of smart contracts by subgroups of validators that share the same data. "),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(7677).Z,width:"829",height:"384"})),(0,i.kt)("p",null,"The need to resort to such a technical solution was dictated by several constraints. Namely, the first one arises when there is a need to send a lot of messages between servers. At a certain point, the internet connection could run out. Although data sharding solves this issue, it leaves the second problem, the lack of processing power. For this reason, multithreading, in the form of parallel execution, is fundamental for network scalability. "),(0,i.kt)("h2",{id:"everscales-threading-in-a-nutshell"},"Everscale\u2019s threading in a nutshell."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"In case of a significant increase in the network load, some shards can be assigned to the neighboring validators."),(0,i.kt)("li",{parentName:"ul"},"The shards (workchains) offer low transaction fees while at the same time providing the security of Everscale (masterchain)."),(0,i.kt)("li",{parentName:"ul"},"Each election cycle the global set of validators rotate and are assigned to a shard (workchain)."),(0,i.kt)("li",{parentName:"ul"},"In the near future, there will be the possibility to deploy multiple multi-threaded shards (workchains).")),(0,i.kt)("p",null,"At the start of 2023, Everscale is still one of the few infinitely scalable blockchains. It is technically ready to process millions of transactions per second, far outpacing both centralized services, like Visa, and decentralized projects that still research different ways to increase their throughput."))}p.isMDXComponent=!0},7677:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Everscale_s-parallel-smart-contracts-execution_1-50-9f5329f29f6f869a49687ace94b42fea.gif"},3086:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Two_spheres2-3496ac029e9aea6321843d60db298f95.jpg"},3081:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/network-architecture-9a07f1dd043cb1f21306cea954a48bcd.gif"}}]);