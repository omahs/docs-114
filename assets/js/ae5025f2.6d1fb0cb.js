"use strict";(self.webpackChunkeverscale_docs_website=self.webpackChunkeverscale_docs_website||[]).push([[1880],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),u=a,k=p["".concat(s,".").concat(u)]||p[u]||m[u]||r;return n?i.createElement(k,o(o({ref:t},d),{},{components:n})):i.createElement(k,o({ref:t},d))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6557:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var i=n(7462),a=(n(7294),n(3905));const r={title:"Network Changelog"},o="Everscale Network Changelog",l={unversionedId:"changelog",id:"changelog",title:"Network Changelog",description:"block version 24 and before",source:"@site/../../src/changelog.md",sourceDirName:".",slug:"/changelog",permalink:"/changelog",draft:!1,editUrl:"https://github.com/everscale-org/docs/edit/main/.build/website/../../src/changelog.md",tags:[],version:"current",lastUpdatedAt:1679528395,formattedLastUpdatedAt:"Mar 22, 2023",frontMatter:{title:"Network Changelog"},sidebar:"tutorialSidebar",previous:{title:"Community",permalink:"/ecosystem/community"}},s={},c=[{value:"block version 24 and before",id:"block-version-24-and-before",level:2},{value:"<code>Activated</code> in the mainnet",id:"activated-in-the-mainnet",level:3},{value:"Config Change 30.05.22",id:"config-change-300522",level:2},{value:"<code>Activated</code> in the mainnet",id:"activated-in-the-mainnet-1",level:3},{value:"block version 28",id:"block-version-28",level:2},{value:"<code>Activated</code> in the mainnet",id:"activated-in-the-mainnet-2",level:3},{value:"In devnet not in mainnet",id:"in-devnet-not-in-mainnet",level:3}],d={toc:c},p="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"everscale-network-changelog"},"Everscale Network Changelog"),(0,a.kt)("h2",{id:"block-version-24-and-before"},"block version 24 and before"),(0,a.kt)("h3",{id:"activated-in-the-mainnet"},(0,a.kt)("inlineCode",{parentName:"h3"},"Activated")," in the mainnet"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"New ",(0,a.kt)("inlineCode",{parentName:"li"},"ZEROROTRIF")," instruction\n",(0,a.kt)("inlineCode",{parentName:"li"},"ZEROROTRIF (x y \u2013 x y or 0 x y)"),", pushes a Zero under the second stack entry from the top, but only if the topmost ",(0,a.kt)("inlineCode",{parentName:"li"},"Integer y")," is non-zero."),(0,a.kt)("li",{parentName:"ul"},"New ",(0,a.kt)("inlineCode",{parentName:"li"},"ZEROROTRIF2")," instruction\n",(0,a.kt)("inlineCode",{parentName:"li"},"ZEROROTRIF2 (x y \u2013 x y or 0 0 x y)"),", pushes two Zeros under the second stack entry from the top, but only if the topmost ",(0,a.kt)("inlineCode",{parentName:"li"},"Integer y")," is non-zero. Equivalent to ",(0,a.kt)("inlineCode",{parentName:"li"},"ZEROROTRIF"),"; ",(0,a.kt)("inlineCode",{parentName:"li"},"ZEROROTRIF"),"."),(0,a.kt)("li",{parentName:"ul"},"New ",(0,a.kt)("inlineCode",{parentName:"li"},"ZEROROTRIFNOT")," instruction\n",(0,a.kt)("inlineCode",{parentName:"li"},"ZEROROTRIFNOT (x y \u2013 x y or 0 x y)"),", pushes a Zero under the second stack entry from the top, but only if the topmost ",(0,a.kt)("inlineCode",{parentName:"li"},"Integer y")," is zero."),(0,a.kt)("li",{parentName:"ul"},"New ",(0,a.kt)("inlineCode",{parentName:"li"},"ZEROROTRIFNOT2")," instruction\n",(0,a.kt)("inlineCode",{parentName:"li"},"ZEROSWAPIFNOT2 (x \u2013 x or 0 0 x)"),", pushes two Zeros under the topmost Integer x, but only if ",(0,a.kt)("inlineCode",{parentName:"li"},"x = 0"),". Equivalent to ",(0,a.kt)("inlineCode",{parentName:"li"},"ZEROSWAPIFNOT"),"; ",(0,a.kt)("inlineCode",{parentName:"li"},"ZEROSWAPIFNOT"),"."),(0,a.kt)("li",{parentName:"ul"},"New ",(0,a.kt)("inlineCode",{parentName:"li"},"ZEROSWAPIF")," instruction\n",(0,a.kt)("inlineCode",{parentName:"li"},"ZEROSWAPIF (x \u2013 x or 0 x)"),", pushes a Zero under the topmost ",(0,a.kt)("inlineCode",{parentName:"li"},"Integer x"),", but only if ",(0,a.kt)("inlineCode",{parentName:"li"},"x <> 0"),"."),(0,a.kt)("li",{parentName:"ul"},"New ",(0,a.kt)("inlineCode",{parentName:"li"},"ZEROSWAPIF2")," instruction\n",(0,a.kt)("inlineCode",{parentName:"li"},"ZEROSWAPIF2 (x \u2013 x or 0 0 x)"),", pushes two Zeros under the topmost ",(0,a.kt)("inlineCode",{parentName:"li"},"Integer x"),", but only if ",(0,a.kt)("inlineCode",{parentName:"li"},"x <> 0"),". Equivalent to ",(0,a.kt)("inlineCode",{parentName:"li"},"ZEROSWAPIF"),"; ",(0,a.kt)("inlineCode",{parentName:"li"},"ZEROSWAPIF"),"."),(0,a.kt)("li",{parentName:"ul"},"New ",(0,a.kt)("inlineCode",{parentName:"li"},"ZEROSWAPIFNOT")," instruction\n",(0,a.kt)("inlineCode",{parentName:"li"},"ZEROSWAPIFNOT (x \u2013 x or 0 x)"),", pushes a Zero under the topmost ",(0,a.kt)("inlineCode",{parentName:"li"},"Integer x"),", but only if ",(0,a.kt)("inlineCode",{parentName:"li"},"x = 0"),"."),(0,a.kt)("li",{parentName:"ul"},"New ",(0,a.kt)("inlineCode",{parentName:"li"},"ZEROSWAPIFNOT2")," instruction\n",(0,a.kt)("inlineCode",{parentName:"li"},"ZEROSWAPIFNOT2 (x \u2013 x or 0 0 x)"),", pushes two Zeros under the topmost ",(0,a.kt)("inlineCode",{parentName:"li"},"Integer x"),", but only if ",(0,a.kt)("inlineCode",{parentName:"li"},"x = 0"),". Equivalent to ",(0,a.kt)("inlineCode",{parentName:"li"},"ZEROSWAPIFNOT"),"; ",(0,a.kt)("inlineCode",{parentName:"li"},"ZEROSWAPIFNOT"),"."),(0,a.kt)("li",{parentName:"ul"},"Disabled setlibcode, changelibcode instruction"),(0,a.kt)("li",{parentName:"ul"},"Validator not validating in some cases fix"),(0,a.kt)("li",{parentName:"ul"},"Security fix for ",(0,a.kt)("inlineCode",{parentName:"li"},"ADNL")," packet signature"),(0,a.kt)("li",{parentName:"ul"},"Improved ",(0,a.kt)("inlineCode",{parentName:"li"},"DB")," restoration"),(0,a.kt)("li",{parentName:"ul"},"Fixed several bugs (storage fee calculation, storing last state of validator)")),(0,a.kt)("h2",{id:"config-change-300522"},"Config Change 30.05.22"),(0,a.kt)("h3",{id:"activated-in-the-mainnet-1"},(0,a.kt)("inlineCode",{parentName:"h3"},"Activated")," in the mainnet"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Prohibit to send anycast messages"),(0,a.kt)("li",{parentName:"ul"},"New ",(0,a.kt)("inlineCode",{parentName:"li"},"MYCODE")," instruction\n",(0,a.kt)("inlineCode",{parentName:"li"},"MYCODE (- s)")," \u2014 returns the Cell with the current code of the smart-contract. Equivalent to ",(0,a.kt)("inlineCode",{parentName:"li"},"GETPARAM 10"),". Smart-contract has own code which cell representation can be obtained by this instruction see ",(0,a.kt)("a",{parentName:"li",href:"/standard/TIP-1.2"},"TIP-1.2"),".")),(0,a.kt)("h2",{id:"block-version-28"},"block version 28"),(0,a.kt)("h3",{id:"activated-in-the-mainnet-2"},(0,a.kt)("inlineCode",{parentName:"h3"},"Activated")," in the mainnet"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Prohibit to send anycast messages"),(0,a.kt)("li",{parentName:"ul"},"New ",(0,a.kt)("inlineCode",{parentName:"li"},"MYCODE")," instruction\n",(0,a.kt)("inlineCode",{parentName:"li"},"MYCODE (- s)")," \u2014 returns the Cell with the current code of the smartcontract. Equivalent to ",(0,a.kt)("inlineCode",{parentName:"li"},"GETPARAM 10"),". Smartcontract has own code which cell representation can be obtained by this instruction see ",(0,a.kt)("a",{parentName:"li",href:"/standard/TIP-1.2"},"TIP-1.2"),".")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"In the mainnet, not activated yet (using blockchain capabilities):")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"New ",(0,a.kt)("inlineCode",{parentName:"li"},"INITCODEHASH")," Instruction\n",(0,a.kt)("inlineCode",{parentName:"li"},"INITCODEHASH (- x)")," \u2014 returns the integer represented ",(0,a.kt)("inlineCode",{parentName:"li"},"256bit")," hash of code cell with contract was deployed. Equivalent to ",(0,a.kt)("inlineCode",{parentName:"li"},"GETPARAM 11")," see ",(0,a.kt)("a",{parentName:"li",href:"/standard/TIP-1.2"},"TIP-1.2"),"."),(0,a.kt)("li",{parentName:"ul"},"Changed account format"),(0,a.kt)("li",{parentName:"ul"},"Changed the ",(0,a.kt)("inlineCode",{parentName:"li"},"TLB")," scheme for Account data to reflect new functionality (hash value of the initial account code). Accounts updated recently cannot be deserialized with old software for this reason, update is mandatory."),(0,a.kt)("li",{parentName:"ul"},"Increased storage fee calculation performance for accounts with large data size"),(0,a.kt)("li",{parentName:"ul"},"Traffic compression")),(0,a.kt)("h3",{id:"in-devnet-not-in-mainnet"},"In devnet not in mainnet"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Optimization and refactoring of operations with cells"),(0,a.kt)("li",{parentName:"ul"},"Automated ",(0,a.kt)("inlineCode",{parentName:"li"},"DB")," versioning and update"),(0,a.kt)("li",{parentName:"ul"},"Fixed a bug with persistent zerostate deletion during ",(0,a.kt)("inlineCode",{parentName:"li"},"GC")," process"),(0,a.kt)("li",{parentName:"ul"},"Fixed security issues found (in data deserialization and states/archives requests)"),(0,a.kt)("li",{parentName:"ul"},"New ",(0,a.kt)("inlineCode",{parentName:"li"},"COPYLEFT")," instrustion\n",(0,a.kt)("inlineCode",{parentName:"li"},"COPYLEFT (s, n - )")," \u2014 where s \u2014 is slice of ",(0,a.kt)("inlineCode",{parentName:"li"},"256bit")," ",(0,a.kt)("inlineCode",{parentName:"li"},"AccountId")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"n")," \u2014 is type of license. Add license payment to code creator. The license payment calculates from ",(0,a.kt)("inlineCode",{parentName:"li"},"compute_phase_fees")," taking the appropriate percentage. If summary payment is less than ",(0,a.kt)("inlineCode",{parentName:"li"},"license_payment_threshold"),", then value saves in ",(0,a.kt)("inlineCode",{parentName:"li"},"unsplit_shard_state")," of masterblock. If summary payment in ",(0,a.kt)("inlineCode",{parentName:"li"},"unsplit_shard_state")," is more than ",(0,a.kt)("inlineCode",{parentName:"li"},"license_payment_threshold")," then node sends internal message to account address in masterchain, specified in slice ",(0,a.kt)("inlineCode",{parentName:"li"},"s"),"  see ",(0,a.kt)("a",{parentName:"li",href:"/standard/TIP-1.1"},"TIP-1.1"),"."),(0,a.kt)("li",{parentName:"ul"},"New ",(0,a.kt)("inlineCode",{parentName:"li"},"STORAGEFEE")," instruction\n",(0,a.kt)("inlineCode",{parentName:"li"},"STORAGEFEE ( -- x)"),", returns the ",(0,a.kt)("inlineCode",{parentName:"li"},"Integer~x")," with collected storage fee from account in this transaction. Equivalent to ",(0,a.kt)("inlineCode",{parentName:"li"},"GETPARAM 12")),(0,a.kt)("li",{parentName:"ul"},"Full bounce: bounced message will contain ",(0,a.kt)("inlineCode",{parentName:"li"},"init_state")," and full body of original message in first reference of the body"),(0,a.kt)("li",{parentName:"ul"},"Changes in ",(0,a.kt)("inlineCode",{parentName:"li"},"currency_collections"),":",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Changed calculation of bounced message fee if bounced message consists ",(0,a.kt)("inlineCode",{parentName:"li"},"currency_collections")),(0,a.kt)("li",{parentName:"ul"},"Changed some error codes in ",(0,a.kt)("inlineCode",{parentName:"li"},"currency_collections")," operations"),(0,a.kt)("li",{parentName:"ul"},"Now you can create account with zero grams and non-zero ",(0,a.kt)("inlineCode",{parentName:"li"},"extra_currencies")),(0,a.kt)("li",{parentName:"ul"},"Changed error in value with deleted and immediately created account with ",(0,a.kt)("inlineCode",{parentName:"li"},"currency_collections"))))))}m.isMDXComponent=!0}}]);