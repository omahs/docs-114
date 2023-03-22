"use strict";(self.webpackChunkeverscale_docs_website=self.webpackChunkeverscale_docs_website||[]).push([[1387],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>v});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(a),m=n,v=p["".concat(s,".").concat(m)]||p[m]||u[m]||l;return a?r.createElement(v,o(o({ref:t},d),{},{components:a})):r.createElement(v,o({ref:t},d))}));function v(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:n,o[1]=i;for(var c=2;c<l;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},774:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=a(7462),n=(a(7294),a(3905));const l={sidebar_position:3,description:"Get started by creating a new DApp using EVER SDK"},o="EVER SDK Quick Start",i={unversionedId:"develop/tutorial/ever-sdk-start",id:"develop/tutorial/ever-sdk-start",title:"EVER SDK Quick Start",description:"Get started by creating a new DApp using EVER SDK",source:"@site/../../src/develop/tutorial/ever-sdk-start.md",sourceDirName:"develop/tutorial",slug:"/develop/tutorial/ever-sdk-start",permalink:"/develop/tutorial/ever-sdk-start",draft:!1,editUrl:"https://github.com/everscale-org/docs/edit/main/.build/website/../../src/develop/tutorial/ever-sdk-start.md",tags:[],version:"current",lastUpdatedAt:1679528395,formattedLastUpdatedAt:"Mar 22, 2023",sidebarPosition:3,frontMatter:{sidebar_position:3,description:"Get started by creating a new DApp using EVER SDK"},sidebar:"tutorialSidebar",previous:{title:"Deploy smart contracts with EverDev",permalink:"/develop/tutorial/everdev-sc"},next:{title:"EVER SDK Guides",permalink:"/develop/tutorial/ever-sdk-guides"}},s={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Prepare development environment",id:"prepare-development-environment",level:2},{value:"Start local node (SE)",id:"start-local-node-se",level:2},{value:"Install demo application",id:"install-demo-application",level:2},{value:"Run it!",id:"run-it",level:2},{value:"Explore Core API",id:"explore-core-api",level:3},{value:"Explore Appkit API",id:"explore-appkit-api",level:3},{value:"Explanations",id:"explanations",level:2},{value:"Source code",id:"source-code",level:2},{value:"Full docs",id:"full-docs",level:2}],d={toc:c},p="wrapper";function u(e){let{components:t,...a}=e;return(0,n.kt)(p,(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"ever-sdk-quick-start"},"EVER SDK Quick Start"),(0,n.kt)("p",null,"This is a guide that will help you quickly familiarize yourself with the main toold and features of EVER SDK. You will create your first DApp and run it on local blockchain"),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("p",null,"Node.js latest version installed ",(0,n.kt)("a",{parentName:"p",href:"https://www.docker.com/get-started"},"Docker")," latest version installed"),(0,n.kt)("h2",{id:"prepare-development-environment"},"Prepare development environment"),(0,n.kt)("p",null,"Install ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/tonlabs/everdev"},"EVERDEV CLI")," that will help you easily start local node, compile your contracts, install demo projects and create new empty projects."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"$ npm install -g everdev\n")),(0,n.kt)("h2",{id:"start-local-node-se"},"Start local node (SE)"),(0,n.kt)("p",null,"We will run our test on local blockchain for testing (",(0,n.kt)("a",{parentName:"p",href:"https://github.com/tonlabs/evernode-se"},"Evernode SE"),", start it with this command (docker should be launched)."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"$ everdev se start\n")),(0,n.kt)("h2",{id:"install-demo-application"},"Install demo application"),(0,n.kt)("p",null,"Create a working folder. Then create a node.js demo project with EVERDEV"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"$ everdev js demo hello-wallet\n$ cd hello-wallet\n$ npm i\n")),(0,n.kt)("h2",{id:"run-it"},"Run it!"),(0,n.kt)("h3",{id:"explore-core-api"},"Explore Core API"),(0,n.kt)("p",null,"Run:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"$ node core\n")),(0,n.kt)("p",null,"You will see the result of core.js file execution. Core.js file demonstrades core ever-sdk api. It is the same for all ever-sdk bindings."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"node core\nFuture address of Hello wallet contract is: 0:1863addf562c5ab98f3761787458e47406675379a4dc6eb36042ba84bde5cb8d\nTransfering 1000000000 tokens from giver to 0:1863addf562c5ab98f3761787458e47406675379a4dc6eb36042ba84bde5cb8d\nSuccess. Tokens were transfered\n\nDeploying Hello wallet contract\nSuccess. Contract was deployed\n\nHello wallet balance is 986483999\nRun `getTimestamp` get method\n`timestamp` value is {\n  value0: '0x000000000000000000000000000000000000000000000000000000006373fbb4'\n}\nCalling touch function\nSuccess. TransactionId is: 1a34fbfc336ff8212793077c68bff9f49c6c3f270492afa55ca616ef40b22bec\n\nWaiting for account update\nSuccess. Account was updated, it took 0 sec.\n\nRun `getTimestamp` get method\nUpdated `timestamp` value is {\n  value0: '0x000000000000000000000000000000000000000000000000000000006373fbb6'\n}\nSending 100000000 tokens to 0:9f98e8de89e19093145afe134017a783daf8bac5dee04b8810c57a348020764c\nSuccess. Target account will recieve: 99000000 tokens\n\nNormal exit\n")),(0,n.kt)("h3",{id:"explore-appkit-api"},"Explore Appkit API"),(0,n.kt)("p",null,"Run:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"$ node appkit\n")),(0,n.kt)("p",null,"You will see the result of appkit.js file execution. Appkit.js demonstrates high level Appkit package."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Hello localhost!\nFuture address of the contract will be: 0:5aab70b197897e47ee65faca0ebe24244fd1373d31de2ae39aca28029e0f3469\nHello contract was deployed at address: 0:5aab70b197897e47ee65faca0ebe24244fd1373d31de2ae39aca28029e0f3469\ntouch execution transaction is  495d0b02905ac541b54407283e52155fbfcbcc804a82ca40d5da96e433fe2f6b\ngetTimestamp value: {\n  value0: '0x000000000000000000000000000000000000000000000000000000006373fa68'\n}\nThe tokens were sent, but soon they will come back because bounce = true and destination address does not exist\n")),(0,n.kt)("h2",{id:"explanations"},"Explanations"),(0,n.kt)("p",null,"The script implements the following logic:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Links the project with Node.js ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/tonlabs/ever-sdk"},"Ever-SDK")," binary. If you plan to use JS SDK in Web, link it with Wasm binary. Read more ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/tonlabs/ever-sdk-js"},"here"),"."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"TONClient")," instance is created and initialized with ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/tonlabs/evernode-se"},"Evernode SE"),' ("',(0,n.kt)("a",{parentName:"li",href:"http://localhost"},"http://localhost"),'", local blockchain) endpoint. See the list of other available ',(0,n.kt)("a",{parentName:"li",href:"https://docs.everos.dev/ever-platform/reference/graphql-api/networks"},"endpoints"),"."),(0,n.kt)("li",{parentName:"ol"},"Future address is calculated from the code and data of the contract (data includes signing keys)"),(0,n.kt)("li",{parentName:"ol"},"Flag ",(0,n.kt)("inlineCode",{parentName:"li"},"useGiver: true")," allows to sponsor deploy with Evernode SE giver that is hard coded as the default Account giver. ",(0,n.kt)("a",{parentName:"li",href:"https://docs.everos.dev/ever-sdk/guides/work_with_contracts/deploy#transfer-funds-to-the-future-address"},"You can re-assign it to your own giver"),".")),(0,n.kt)("h2",{id:"source-code"},"Source code"),(0,n.kt)("p",null,"You can find source code of this sample here"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/tonlabs/sdk-samples/tree/master/demo/hello-wallet"},"https://github.com/tonlabs/sdk-samples/tree/master/demo/hello-wallet")),(0,n.kt)("h2",{id:"full-docs"},"Full docs"),(0,n.kt)("p",null,"See original guide at ",(0,n.kt)("a",{parentName:"p",href:"https://docs.everos.dev/ever-sdk/quick_start"},"https://docs.everos.dev/ever-sdk/quick_start")),(0,n.kt)("p",null,"Full EVER SDK documenation is available at ",(0,n.kt)("a",{parentName:"p",href:"https://docs.everos.dev/ever-sdk/"},"https://docs.everos.dev/ever-sdk/")))}u.isMDXComponent=!0}}]);