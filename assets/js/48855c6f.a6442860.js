"use strict";(self.webpackChunkeverscale_docs_website=self.webpackChunkeverscale_docs_website||[]).push([[1290],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(a),u=o,m=p["".concat(l,".").concat(u)]||p[u]||h[u]||r;return a?n.createElement(m,i(i({ref:t},d),{},{components:a})):n.createElement(m,i({ref:t},d))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},4501:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var n=a(7462),o=(a(7294),a(3905));const r={sidebar_position:0},i="Intro",s={unversionedId:"develop/intro",id:"develop/intro",title:"Intro",description:"To start your developer journey with Everscale, some important concepts should be understood first.",source:"@site/../../src/develop/intro.md",sourceDirName:"develop",slug:"/develop/intro",permalink:"/develop/intro",draft:!1,editUrl:"https://github.com/everscale-org/docs/edit/main/.build/website/../../src/develop/intro.md",tags:[],version:"current",lastUpdatedAt:1686822547,formattedLastUpdatedAt:"Jun 15, 2023",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Build",permalink:"/develop"},next:{title:"Developer Tools Overview",permalink:"/develop/tools-overview"}},l={},c=[{value:"Distributed Programming approach",id:"distributed-programming-approach",level:2},{value:"Contract Deployment",id:"contract-deployment",level:2}],d={toc:c},p="wrapper";function h(e){let{components:t,...a}=e;return(0,o.kt)(p,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"intro"},"Intro"),(0,o.kt)("p",null,"To start your developer journey with Everscale, some important concepts should be understood first."),(0,o.kt)("p",null,"The first one is the mechanism of Dynamic Multithreading, which allows the network to scale as the load increase. "),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The Dynamic Multithreading is part of Everscale's approach to ",(0,o.kt)("strong",{parentName:"p"},"Infinite Scalability"),". Please follow ",(0,o.kt)("a",{parentName:"p",href:"/overview/infinite-scalability"},"here")," to dive deeper.")),(0,o.kt)("p",null,"Shortly speaking, a single workchain can split to shardchains dynamically, and a different subsets of accounts are assigned to different threads, running in parallel. "),(0,o.kt)("p",null,"To take advantage from that in your Smart Contracts, you can't simply use the same approach as in Ethereum development (where we allow a single smart contract to store lot of data)."),(0,o.kt)("p",null,"This leads us to the Distributed Programming approach."),(0,o.kt)("h2",{id:"distributed-programming-approach"},"Distributed Programming approach"),(0,o.kt)("p",null,"Instead of writing contracts in which the state can continuously grow, we write distributed systems of smart contracts. For example TIP-3 token standard is designed as a system of main ",(0,o.kt)("inlineCode",{parentName:"p"},"TokenRoot")," contract, which stores metadata, and has a function to deploy a separate smart-contract called ",(0,o.kt)("inlineCode",{parentName:"p"},"TokenWallet")," for each token owner (that is what a wallet is) and can send tokens directly among contracts without a central hub."),(0,o.kt)("admonition",{title:"Important concept",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"In Everscale, each contract address is a uniquely computed value. A contract address is a hash of the contract code and initial data (initial data is a value of static variables, and not what you pass to the constructor, since in Everscale the constructor is a function that you call after the deployment of the contract in one transaction)."),(0,o.kt)("p",{parentName:"admonition"},"This is a very important pattern of distributed programming (as it is understood in Everscale). Knowing the code of a contract, and its initial data you can make sure that you are being called by a contract with the same parents as your own. Or, knowing the contract code and its initial data, you can compute the address of a contract on the fly and send messages to it.")),(0,o.kt)("p",null,"By creating small contracts for a single system (like in TIP-3 token) we solve a number of issues:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"All contracts end up in different shards which distributes the load evenly throughout the network."),(0,o.kt)("li",{parentName:"ul"},"Contract states are very small. Validators can load them very quickly from a disk."),(0,o.kt)("li",{parentName:"ul"},"Storage fee. If we had one contract with a huge hash map, then it would have to pay a large fee for its storage, and it is not clear who should pay and how for this storage. If there are many accounts with small balances that their owners no longer need, then naturally they will not pay for its storage, and the rest of the holders of this token will have to pay for all of the \u201cremainders.\u201d So that smart contract programmers do not have to think about how to force users to pay for storage or clean up old data inside the contract, Everscale has allowed each user to deploy their own contract. Each user determines how long they will pay for storage and can always adjust these parameters.")),(0,o.kt)("h2",{id:"contract-deployment"},"Contract Deployment"),(0,o.kt)("p",null,"The concept about deterministic address calculations, described above, is also tied to how contracts are deployed in Everscale. The contract can naturally be deployed by another contract. But what should we do if we want to deploy a contract from outside?"),(0,o.kt)("p",null,"To do this, we have to take the contract code and its initial data, and compute its future address."),(0,o.kt)("p",null,"After that, we simply send money there, with a bounce flag = false. And the money just stays on the address, which has no initialized code."),(0,o.kt)("p",null,"Then we send a special external message to this address with the code and initial data, and we say \u201cLook, here we have the code and initial data, the hash of which gives us this address, initialize it please\u201d and the network initializes the contract."))}h.isMDXComponent=!0}}]);