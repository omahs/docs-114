"use strict";(self.webpackChunkeverscale_docs_website=self.webpackChunkeverscale_docs_website||[]).push([[975],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(a),d=r,h=u["".concat(l,".").concat(d)]||u[d]||m[d]||s;return a?n.createElement(h,i(i({ref:t},p),{},{components:a})):n.createElement(h,i({ref:t},p))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,i=new Array(s);i[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:r,i[1]=o;for(var c=2;c<s;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},8509:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const s={title:"Security",description:"External messages pose threats",sidebar_position:9},i="Smart Contract Security",o={unversionedId:"arch/security",id:"arch/security",title:"Security",description:"External messages pose threats",source:"@site/../../src/arch/90-security.md",sourceDirName:"arch",slug:"/arch/security",permalink:"/arch/security",draft:!1,editUrl:"https://github.com/everscale-org/docs/edit/main/.build/website/../../src/arch/90-security.md",tags:[],version:"current",lastUpdatedAt:1679528395,formattedLastUpdatedAt:"Mar 22, 2023",sidebarPosition:9,frontMatter:{title:"Security",description:"External messages pose threats",sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Message",permalink:"/arch/message"},next:{title:"ABI",permalink:"/arch/abi"}},l={},c=[{value:"Replay Attack Protection",id:"replay-attack-protection",level:2},{value:"Implementation Options",id:"implementation-options",level:2},{value:"Sequence number",id:"sequence-number",level:2},{value:"Timestamp",id:"timestamp",level:2},{value:"Set of accepted messages",id:"set-of-accepted-messages",level:2},{value:"Sessions",id:"sessions",level:2},{value:"Conclusion",id:"conclusion",level:2}],p={toc:c},u="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"smart-contract-security"},"Smart Contract Security"),(0,r.kt)("h2",{id:"replay-attack-protection"},"Replay Attack Protection"),(0,r.kt)("p",null,"All external messages must be protected against replay attacks. Otherwise, a malicious party can resend an external message obtained from blockchain and repeat a transaction for a smart contract. For example, a hacker can repeat a Token transfer and bring an account balance to zero. For internal messages the risk of replay attacks is irrelevant, as they only can be generated inside blockchain by other contracts."),(0,r.kt)("h2",{id:"implementation-options"},"Implementation Options"),(0,r.kt)("p",null,"Different approaches to implementing replay attack protection exist. None of them is a silver bullet, but there are several indicators applied to compare and evaluate them:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Gas consumption"),(0,r.kt)("li",{parentName:"ul"},"Storage fees"),(0,r.kt)("li",{parentName:"ul"},"Race condition"),(0,r.kt)("li",{parentName:"ul"},"Usability")),(0,r.kt)("h2",{id:"sequence-number"},"Sequence number"),(0,r.kt)("p",null,"This is a very simple protection option. It implies that each protected contract stores a counter (i.e. 32bit integer) that is initially set to zero. An external message is then accepted by the contract only under condition that it contains a number equal to the current contract counter value. Each time a new message is accepted, the contract counter value is incremented by one."),(0,r.kt)("p",null,"Pros:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"simple implementation in contracts"),(0,r.kt)("li",{parentName:"ul"},"low gas and storage fees")),(0,r.kt)("p",null,"Cons:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"To get the right sequence number off-chain, a client must request the contract state from blockchain before sending an external message. If the state is large, it can cause a network traffic overhead"),(0,r.kt)("li",{parentName:"ul"},"Race condition issue that arises when there are multiple contract owners who can simultaneously call it. One owner can increment the contract counter value before this counter becomes available to the next owner"),(0,r.kt)("li",{parentName:"ul"},"Less sensitive issue of a potential counter overflow in the future. In this case the TVM will throw an exception causing the owner to lose access to the contract")),(0,r.kt)("h2",{id:"timestamp"},"Timestamp"),(0,r.kt)("p",null,"Another simple protection option is adding a timestamp to every external message. It can be a 64-bit value in unixtime format. The contract must store the timestamp of the last accepted external message. When a new external message comes, the contract verifies the message timestamp. It must to be bigger than the previous message timestamp and less then ",(0,r.kt)("inlineCode",{parentName:"p"},"now + interval"),". The ",(0,r.kt)("inlineCode",{parentName:"p"},"interval")," value is necessary, because now does not stand for the current time, but indicates creation time of the relevant block. The interval can be equal the block generation period or bigger."),(0,r.kt)("p",null,"Pros:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Very simple implementation"),(0,r.kt)("li",{parentName:"ul"},"No need to request account state before sending external messages")),(0,r.kt)("p",null,"Cons:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Race condition issues remains unresolved as in case of sequence number implementation"),(0,r.kt)("li",{parentName:"ul"},"Client time must be synchronized with blockchain time")),(0,r.kt)("h2",{id:"set-of-accepted-messages"},"Set of accepted messages"),(0,r.kt)("p",null,"Dictionary of randoms"),(0,r.kt)("p",null,"This option implies that every external message contains a random value, for example, a 32bit integer. A protected contract, in turn, stores previously used randoms in a dictionary, compares message randoms with it and rejects a message if there is a match detected."),(0,r.kt)("p",null,"Pros:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"No need to request account state before sending an external message"),(0,r.kt)("li",{parentName:"ul"},"No race condition; simultaneous access to contract of multiple parties is supported. Collisions are still possible when multiple clients have the same random, but chances can be minimized.")),(0,r.kt)("p",null,"Cons:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Consumes a lot of gas for dictionary write/read operations. Note that the gas fee will increase in the future"),(0,r.kt)("li",{parentName:"ul"},"High storage fees for storing dictionary")),(0,r.kt)("p",null,"Dictionary of messages with garbage collection\nThis option implies that every external message contains an ",(0,r.kt)("inlineCode",{parentName:"p"},"expire-at")," integer that defines the time when the message becomes invalid (i.e. expires). The contract, in turn, must store a dictionary with all recently accepted and not expired external messages. The key is a message hash, the value is the relevant ",(0,r.kt)("inlineCode",{parentName:"p"},"expire-at")," integer."),(0,r.kt)("p",null,"The contract then rejects all messages that are already present in its dictionary. To avoid persistent data increase, a protected contract can delete messages with the ",(0,r.kt)("inlineCode",{parentName:"p"},"expire-at")," value less than ",(0,r.kt)("inlineCode",{parentName:"p"},"now")," from its dictionary."),(0,r.kt)("p",null,"Pros:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"No need to request the account state before sending an external message"),(0,r.kt)("li",{parentName:"ul"},"No race condition issues")),(0,r.kt)("p",null,"Cons:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Harder to implement compared to the above option with a dictionary of randoms"),(0,r.kt)("li",{parentName:"ul"},"High gas fees caused by the need to access a dictionary"),(0,r.kt)("li",{parentName:"ul"},"High storage fees, yet these can be reduced by deleting expired messages from the dictionary"),(0,r.kt)("li",{parentName:"ul"},"Garbage collecting also involves some gas costs")),(0,r.kt)("h2",{id:"sessions"},"Sessions"),(0,r.kt)("p",null,"Before sending requests to contract, a user creates a session with a contract by sending a ",(0,r.kt)("inlineCode",{parentName:"p"},"create_session")," external message. The message contains a new session ID, its expired-at time and a starting sequence number. The contract stores a session dictionary."),(0,r.kt)("p",null,"After a session is created, the user adds the ",(0,r.kt)("inlineCode",{parentName:"p"},"session_id")," and the next session sequence number to every external message. For every external message (not ",(0,r.kt)("inlineCode",{parentName:"p"},"create_session"),") the contract checks that:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The message session ID exists in dictionary")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The message sequence number is equal to the stored session number, and")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"now")," value is less then the ",(0,r.kt)("inlineCode",{parentName:"p"},"expired-at")," value for session")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If all checks are passed successfully, the contract increments the stored sequence number for the session. In case of failure, the message is rejected."))),(0,r.kt)("p",null,"Also, expired sessions require some garbage collection."),(0,r.kt)("p",null,"Pros:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"No need to request the account state before sending an external message"),(0,r.kt)("li",{parentName:"ul"},"No race condition issues"),(0,r.kt)("li",{parentName:"ul"},"No collisions")),(0,r.kt)("p",null,"Cons:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Harder to implement compared to all the options covered above"),(0,r.kt)("li",{parentName:"ul"},"High gas fees"),(0,r.kt)("li",{parentName:"ul"},"High storage fees"),(0,r.kt)("li",{parentName:"ul"},"Need to use garbage collecting"),(0,r.kt)("li",{parentName:"ul"},"Unsuitable for simple single-user contracts")),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"In EverX, we selected a lightweight and simple replay protection option, it will be implemented in the compiler by default and based on the ",(0,r.kt)("inlineCode",{parentName:"p"},"timestamp")," approach. It is supposed to work well for single-user contracts, as well as for contracts without heavy race conditions. It is easy to use given that EverX SDK enables inserting a timestamp automatically on the client side. Also, there will be an option to redefine the default protection method by overloading a special contract function. This is how contract developers will be able to implement any protection option they seem fit."))}m.isMDXComponent=!0}}]);