"use strict";(self.webpackChunkeverscale_docs_website=self.webpackChunkeverscale_docs_website||[]).push([[857],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(r),f=a,m=u["".concat(l,".").concat(f)]||u[f]||p[f]||o;return r?n.createElement(m,i(i({ref:t},d),{},{components:r})):n.createElement(m,i({ref:t},d))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},3266:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={title:"Core description",sidebar_position:0,slug:"/standard/TIP-3"},i="Fungible Token",s={unversionedId:"standard/TIP-3/core-description",id:"standard/TIP-3/core-description",title:"Core description",description:"Abstract",source:"@site/../../src/standard/TIP-3/core-description.md",sourceDirName:"standard/TIP-3",slug:"/standard/TIP-3",permalink:"/standard/TIP-3",draft:!1,editUrl:"https://github.com/everscale-org/docs/edit/main/.build/website/../../src/standard/TIP-3/core-description.md",tags:[],version:"current",lastUpdatedAt:1684349049,formattedLastUpdatedAt:"May 17, 2023",sidebarPosition:0,frontMatter:{title:"Core description",sidebar_position:0,slug:"/standard/TIP-3"},sidebar:"tutorialSidebar",previous:{title:"1.2 MYCODE",permalink:"/standard/TIP-1/2"},next:{title:"1. Fungible token",permalink:"/standard/TIP-3.1"}},l={},c=[{value:"Abstract",id:"abstract",level:2},{value:"Motivation",id:"motivation",level:2},{value:"Architecture",id:"architecture",level:2},{value:"Token root",id:"token-root",level:3},{value:"Token wallet",id:"token-wallet",level:3},{value:"References",id:"references",level:2}],d={toc:c},u="wrapper";function p(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"fungible-token"},"Fungible Token"),(0,a.kt)("h2",{id:"abstract"},"Abstract"),(0,a.kt)("p",null,"The following standard describes the basic idea about distributed fungible token architecture."),(0,a.kt)("h2",{id:"motivation"},"Motivation"),(0,a.kt)("p",null,"The suggested standard differs considerably from Ethereum ERC20 and other smart contract token standards with single registry due to its distributed nature related to Everscale blockchain particularities. Given that Everscale has a storage fee, using an existing ERC20 standard design would cause excessive maintenance costs. Also, ERC20 is somewhat incompatible with the sharding architecture. Therefore, a Distributed Token standard is preferable."),(0,a.kt)("p",null,"The ERC20 sharding implementation (with an idea to simply shard its registry) has drawbacks mainly related to complicated and expansive management. TIP-3 is fully distributed and implies separate storage of each user\u2019s balance."),(0,a.kt)("h2",{id:"architecture"},"Architecture"),(0,a.kt)("p",null,"General information about token is stored in the ",(0,a.kt)("a",{parentName:"p",href:"#token-root"},"token root")," contract. Each token holder has its own instance of ",(0,a.kt)("a",{parentName:"p",href:"#token-wallet"},"token wallet")," contract. Token transfers SHOULD be implemented in P2P fashion, between sender and receiver token wallets."),(0,a.kt)("h3",{id:"token-root"},"Token root"),(0,a.kt)("p",null,"Token root contract stores the general information about the token, e.g. name, symbol, decimals, token wallet code and so on."),(0,a.kt)("h3",{id:"token-wallet"},"Token wallet"),(0,a.kt)("p",null,"Each token holder has its own instance of token wallet contract. Transfer happens in a decentralized fashion - sender token wallet SHOULD send the specific message to the receiver token wallet. Since token wallets have the same code, it's easy for receiver token wallet to check the correctness of sender token wallet."),(0,a.kt)("h2",{id:"references"},"References"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://eips.ethereum.org/EIPS/eip-20"},"EIP-20: Token Standard")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://forum.freeton.org/t/tip-3-distributed-token-or-ton-cash/64"},"Everscale Forum - TIP3")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/broxus/ton-eth-bridge-token-contracts"},"Reference implementation by Broxus"))))}p.isMDXComponent=!0}}]);