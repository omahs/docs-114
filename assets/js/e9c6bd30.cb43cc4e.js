"use strict";(self.webpackChunkeverscale_docs_website=self.webpackChunkeverscale_docs_website||[]).push([[3417],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return f}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(r),f=n,h=p["".concat(s,".").concat(f)]||p[f]||u[f]||o;return r?a.createElement(h,i(i({ref:t},d),{},{components:r})):a.createElement(h,i({ref:t},d))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},9981:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var a=r(7462),n=r(3366),o=(r(7294),r(3905)),i=["components"],l={},s="Getting started",c={unversionedId:"validate/tutorial/getting-started",id:"validate/tutorial/getting-started",title:"Getting started",description:"Before we start",source:"@site/../../src/validate/tutorial/getting-started.md",sourceDirName:"validate/tutorial",slug:"/validate/tutorial/getting-started",permalink:"/validate/tutorial/getting-started",draft:!1,editUrl:"https://github.com/everscale-org/docs/edit/main/.build/website/../../src/validate/tutorial/getting-started.md",tags:[],version:"current",lastUpdatedAt:1657560907,formattedLastUpdatedAt:"7/11/2022",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Tutorials",permalink:"/validate/tutorial"},next:{title:"Run Validator",permalink:"/validate/run-validator"}},d={},u=[{value:"Before we start",id:"before-we-start",level:2},{value:"Overview",id:"overview",level:2},{value:"Let\u2019s get started",id:"lets-get-started",level:2},{value:"Help and News",id:"help-and-news",level:2}],p={toc:u};function f(e){var t=e.components,r=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"getting-started"},"Getting started"),(0,o.kt)("h2",{id:"before-we-start"},"Before we start"),(0,o.kt)("p",null,"Before proceeding with the material explaining what it means to be a validator of Everscale, firstly consult with ",(0,o.kt)("a",{parentName:"p",href:"/learn/everscale-overview/overview"},"Everscale overview page"),", in order to get familiar with Everscale blockchain essentials."),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"A validator on the Everscale network is basically a server tasked with confirmation of new blocks generated in the blockchain. "),(0,o.kt)("p",null,"In order for a new block to be confirmed, it has to be signed by several validators (or nodes). This way, a consensus in the network is reached, which is needed to ensure its reliability. Practically, this mechanism secures resistance to failures of individual nodes and protects the network from deliberate attacks."),(0,o.kt)("p",null,"To become a validator on the Everscale network, a stake (deposit) is required. It allows the participation in the election of validators and subsequent validation of the Proof-of-Stake consensus algorithm. Right now, the stake required amounts to 350 000 Ever."),(0,o.kt)("p",null,"For their work, validators receive  remuneration at the end of each validation cycle, consisting of two parts: "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Processing fees - 1,7 EVER for a new block on the masterchain, and 1 EVER for a new block on the shardchain. "),(0,o.kt)("li",{parentName:"ol"},"Fees from the emission of new tokens distributed to validators, which is currently fixed in the network at the level of ~0.5% per year.")),(0,o.kt)("p",null,"Based on the current network configuration, validator elections take place every 18 hours. Each period consists of 3 phases:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The election is open, the elector's smart contract accepts new stakes, and previous validators can return their stakes from the elector's smart contract;"),(0,o.kt)("li",{parentName:"ol"},"The election is over and the smart contract determines the group of validators for the next phase;"),(0,o.kt)("li",{parentName:"ol"},"A new group of validators starts working. The stakes of the former group of validators are temporarily frozen.")),(0,o.kt)("p",null,"Check out the ",(0,o.kt)("a",{parentName:"p",href:"/validate/run-validator/validator-elections"},"validator elections page")," to get better understanding the elections mechanism."),(0,o.kt)("p",null,"To accomodate participants with stakes lower than those required, as mentioned above, DePool smart contracts are designed. They permit any validator, irrespective of the stake size, to participate in staking and receive their part of the reward. DePool smart contracts guarantee that the validator cannot use the participants' funds in any other way, thereby guaranteeing the security of their funds from the validator's dishonesty. "),(0,o.kt)("h2",{id:"lets-get-started"},"Let\u2019s get started"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"../run-validator/"},(0,o.kt)("strong",{parentName:"a"},"Run Validator"))," - here you can find information explaining how to launch a validation node in prod or testnet, as well as learn all additional information regarding this topic."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"../depools/"},(0,o.kt)("strong",{parentName:"a"},"Depools"))," - in this section you can find information on interaction with DePools. More on this, you can read in the ",(0,o.kt)("a",{parentName:"p",href:"../../learn/"},"Learn section"),"."),(0,o.kt)("h2",{id:"help-and-news"},"Help and News"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://t.me/freetonvalidators"},"Everscale validator's Telegram chat")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://t.me/ever_validators"},"Everscale validator's Telegram group")))}f.isMDXComponent=!0}}]);