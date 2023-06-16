"use strict";(self.webpackChunkeverscale_docs_website=self.webpackChunkeverscale_docs_website||[]).push([[3078],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(r),p=o,d=m["".concat(l,".").concat(p)]||m[p]||h[p]||a;return r?n.createElement(d,s(s({ref:t},u),{},{components:r})):n.createElement(d,s({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[m]="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},6111:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const a={},s="Comparison with other solutions",i={unversionedId:"arch/consensus/comparison",id:"arch/consensus/comparison",title:"Comparison with other solutions",description:"In order to better understand the Catchain, the EverX team researched similar blockchain consensus algorithms, as this makes code reverse engineering much simpler.",source:"@site/../../src/arch/consensus/10-comparison.md",sourceDirName:"arch/consensus",slug:"/arch/consensus/comparison",permalink:"/arch/consensus/comparison",draft:!1,editUrl:"https://github.com/everscale-org/docs/edit/main/.build/website/../../src/arch/consensus/10-comparison.md",tags:[],version:"current",lastUpdatedAt:1686822547,formattedLastUpdatedAt:"Jun 15, 2023",sidebarPosition:10,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/arch/consensus/introduction"},next:{title:"Components",permalink:"/arch/consensus/components"}},l={},c=[{value:"PBFT",id:"pbft",level:2},{value:"Tendermint",id:"tendermint",level:2},{value:"Algorand",id:"algorand",level:2},{value:"Ouroboros, CBC Casper",id:"ouroboros-cbc-casper",level:2}],u={toc:c},m="wrapper";function h(e){let{components:t,...r}=e;return(0,o.kt)(m,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"comparison-with-other-solutions"},"Comparison with other solutions"),(0,o.kt)("p",null,"In order to better understand the Catchain, the EverX team researched similar blockchain consensus algorithms, as this makes code reverse engineering much simpler."),(0,o.kt)("p",null,"Everscale consensus overall idea is quite similar to PBFT schemes (PBFT, Tendermint, Algorand). The same three-step phase pattern (Block approval, Voting, Pre-committing) may be found in all of them with slight variations. Let us compare some features of some of these protocols with Catchain:"),(0,o.kt)("h2",{id:"pbft"},"PBFT"),(0,o.kt)("p",null,"Oldest of this family of protocols, first described in 1999 by Miguel Castro and Barbara Liskov ","[4]","."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Slot leader is re-elected only if it does not perform well. In comparison, Catchain changes leader each round in determenistic fashion."),(0,o.kt)("li",{parentName:"ul"},"One round of block voting requires O(n\xb2) messages (where n = number of nodes). Each node sends a message to all other. Catchain uses a special protocol which greatly reduces the number of messages: the outgoing messages are sent to a small number of neighbors (5 is a default number) and then those neighbors resend them further.")),(0,o.kt)("h2",{id:"tendermint"},"Tendermint"),(0,o.kt)("p",null,"The closest algorithm to Catchain of all discussed in this chapter, described in ","[3]","."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"As in Catchain, the proposer node is selected in a round-robin fashion each turn."),(0,o.kt)("li",{parentName:"ul"},"Tendermint requires only local clocks to compute timeouts. This is different from Catchain, which require globally synchronous clocks. This scheme may make Catchain vulnerable to \u201ceclipse\u201d attack: by manipulating NTP messages one may make a node completely out of sync (blockchain will remain correct, but this particular node will not be able to vote and propose its blocks)."),(0,o.kt)("li",{parentName:"ul"},"A gossip message-propagation algorithm is implemented, which allows reducing the number of messages to O(n log n) for each voting. Catchain has Catchain overlay protocol for broadcasting messages, which does a similar thing.")),(0,o.kt)("h2",{id:"algorand"},"Algorand"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A smaller subset of voters is elected at each step (a \u201ccommittee\u201d). These elections are held according to a determined, but secret procedure (only a user knows that she is selected to participate in the committee, but she may prove it to others). Only these committee members participate in voting; thanks to cryptographic measures in place, it does not compromise security."),(0,o.kt)("li",{parentName:"ul"},"Requires no synchronous clocks, only the timeout delay should be equal among the nodes."),(0,o.kt)("li",{parentName:"ul"},"Algorand also uses gossip message-propagation algorithm, like Catchain. The authors claim that each node, participating in voting process, sends exactly one message during each voting stage.")),(0,o.kt)("h2",{id:"ouroboros-cbc-casper"},"Ouroboros, CBC Casper"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"These consensus algorithms ","[5][6]"," are quite different: they prefer to build multiple block chains, and forks are made easily. At any given moment there is a set of valid chains, and the algorithms guarantee that any valid transaction is present in any of these chains after generation of R blocks (where R depends on configuration and may be rather big).")),(0,o.kt)("p",null,"This algorithm type requires a lot fewer synchronization messages, yet it takes more resources to handle multiple parallel chains; also new transactions becomes publicly available much later."))}h.isMDXComponent=!0}}]);