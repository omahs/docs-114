"use strict";(self.webpackChunkeverscale_docs_website=self.webpackChunkeverscale_docs_website||[]).push([[9950],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(r),m=a,h=p["".concat(s,".").concat(m)]||p[m]||u[m]||o;return r?n.createElement(h,i(i({ref:t},d),{},{components:r})):n.createElement(h,i({ref:t},d))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},8726:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var n=r(3117),a=r(102),o=(r(7294),r(3905)),i=["components"],l={title:"Magic and overheads",description:"Magic and overheads of Solidity compilers",sidebar_position:4},s="Magic and overheads of Solidity compilers",c={unversionedId:"develop/smart-contracts/solidity-compiler-overheads",id:"develop/smart-contracts/solidity-compiler-overheads",title:"Magic and overheads",description:"Magic and overheads of Solidity compilers",source:"@site/../../src/develop/smart-contracts/40-solidity-compiler-overheads.md",sourceDirName:"develop/smart-contracts",slug:"/develop/smart-contracts/solidity-compiler-overheads",permalink:"/develop/smart-contracts/solidity-compiler-overheads",draft:!1,editUrl:"https://github.com/everscale-org/docs/edit/main/.build/website/../../src/develop/smart-contracts/40-solidity-compiler-overheads.md",tags:[],version:"current",lastUpdatedAt:1667136257,formattedLastUpdatedAt:"Oct 30, 2022",sidebarPosition:4,frontMatter:{title:"Magic and overheads",description:"Magic and overheads of Solidity compilers",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Data structures",permalink:"/develop/smart-contracts/data-structures"},next:{title:"Transaction execution",permalink:"/develop/smart-contracts/phases-of-transaction-execution"}},d={},u=[],p={toc:u};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"magic-and-overheads-of-solidity-compilers"},"Magic and overheads of Solidity compilers"),(0,o.kt)("p",null,"There are some nuances to the TON Solidity compiler."),(0,o.kt)("p",null,"How does responsible work? Under the hood, one more variable has to be added, which points to the id of the function that should be called in the return message. You need to understand that when you receive a response to responsible, there is no magic check that will verify that you really called responsible. You yourself need to check everything here (that you really made this call and that the answer came from the correct contract)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"function owner() override external responsible returns (address) {\n    return { value: 0, flag: 64, bounce: false }owner_;\n}\n\n// This will be compiled in something like this:\nfunction owner(uint32 asnwerID) override external returns (address) {\n    msg.sender.call({\n        value: 0,\n        flag: 64\n        bounce: false,\n        functionToCall: asnwerID,\n        values: owner_\n    });\n}\n")),(0,o.kt)("p",null,"There are three utility variables solidity compiler add under the hood:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"_pubkey")," \u2014 this is just a static variable taken out separately, and it serves for the ",(0,o.kt)("inlineCode",{parentName:"li"},"tvm.pubkey()")," and verification of the signature of the incoming external message;"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"_constructorFlag")," \u2014 this is a constructor call flag. In general, due to the peculiarities of the blockchain, the internal work constructor in TON Solidity was implemented in a tricky way. When we deploy a contract, we can specify one function that we want to call after the deployment of the contract and its arguments. If we call the constructor, then, if its execution was successful, at the end the ",(0,o.kt)("inlineCode",{parentName:"li"},"_constructorFlag")," will be set to true. All other functions check before their execution that the constructor has been called, if not, an error will occur. But since we can deploy a contract and not call the constructor, it is possible that the contract will get deployed, but its constructor will not be called. We must keep this in mind;"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"_timestamp")," \u2014 this is the time of the last external call, used in the ",(0,o.kt)("a",{parentName:"li",href:"/develop/smart-contracts/replay-attacks-protection"},"protection against replay attacks described above"),".")),(0,o.kt)("p",null,"There is also an interesting feature with state variables. At compilation time, Solidity will allocate all state variables to cells in the contract storage, like this:"),(0,o.kt)("img",{src:"https://www.plantuml.com/plantuml/png/LSuz3i8m343XtQVmxAa2YO4kbRfm3RSn9CB4LHmQk3q_0YJM9ttI6xnogMroy7FA2nU-e4SErb8-uP7L1Nnc5Tnr7ROKQWGW91f5bGYBMGMY_JU0iX_OetZ_ojUKwtQ3gnHFbe53AEB-LlqVcrWvpn_rgqknstsq83t083ayFny0",alt:null}),(0,o.kt)("p",null,"Storage for contracts in TVM is register ",(0,o.kt)("inlineCode",{parentName:"p"},"c4"),", this is a ",(0,o.kt)("inlineCode",{parentName:"p"},"BoC"),". There is a service register for temporary data ",(0,o.kt)("inlineCode",{parentName:"p"},"c7")," - but this is a tuple and it is always cleared at the end of a transaction. So, every time a transaction begins processing, Solidity unpacks variables from ",(0,o.kt)("inlineCode",{parentName:"p"},"c4")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"c7"),", so that it is easier to work with them in the code by register indexes, and at the end of the work it repacks them back to ",(0,o.kt)("inlineCode",{parentName:"p"},"c4"),". You can draw your own conclusions, but it is undeniable that the more variables you have, the greater the overhead for unpacking/packing."))}m.isMDXComponent=!0}}]);