"use strict";(self.webpackChunkeverscale_docs_website=self.webpackChunkeverscale_docs_website||[]).push([[1472],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>v});var a=r(7294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,s=function(e,t){if(null==e)return{};var r,a,s={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var d=a.createContext({}),l=function(e){var t=a.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},u=function(e){var t=l(e.components);return a.createElement(d.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var r=e.components,s=e.mdxType,i=e.originalType,d=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=l(r),k=s,v=p["".concat(d,".").concat(k)]||p[k]||c[k]||i;return r?a.createElement(v,n(n({ref:t},u),{},{components:r})):a.createElement(v,n({ref:t},u))}));function v(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=r.length,n=new Array(i);n[0]=k;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[p]="string"==typeof e?e:s,n[1]=o;for(var l=2;l<i;l++)n[l]=r[l];return a.createElement.apply(null,n)}return a.createElement.apply(null,r)}k.displayName="MDXCreateElement"},18:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>n,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var a=r(7462),s=(r(7294),r(3905));const i={sidebar_position:4,description:"Explore guides for EVER SDK"},n="EVER SDK Guides",o={unversionedId:"develop/tutorial/ever-sdk-guides",id:"develop/tutorial/ever-sdk-guides",title:"EVER SDK Guides",description:"Explore guides for EVER SDK",source:"@site/../../src/develop/tutorial/ever-sdk-guides.md",sourceDirName:"develop/tutorial",slug:"/develop/tutorial/ever-sdk-guides",permalink:"/develop/tutorial/ever-sdk-guides",draft:!1,editUrl:"https://github.com/everscale-org/docs/edit/main/.build/website/../../src/develop/tutorial/ever-sdk-guides.md",tags:[],version:"current",lastUpdatedAt:1679528395,formattedLastUpdatedAt:"Mar 22, 2023",sidebarPosition:4,frontMatter:{sidebar_position:4,description:"Explore guides for EVER SDK"},sidebar:"tutorialSidebar",previous:{title:"EVER SDK Quick Start",permalink:"/develop/tutorial/ever-sdk-start"},next:{title:"GraphQL API Quick Start",permalink:"/develop/tutorial/graphql-api-start"}},d={},l=[],u={toc:l},p="wrapper";function c(e){let{components:t,...r}=e;return(0,s.kt)(p,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"ever-sdk-guides"},"EVER SDK Guides"),(0,s.kt)("p",null,"This is a list of detailed guides for EVER SDK"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"EVER SDK Installation",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.everos.dev/ever-sdk/guides/installation/add_sdk_to_your_app"},"Add SDK to your App")))),(0,s.kt)("li",{parentName:"ul"},"EVER SDK Configuration",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.everos.dev/ever-sdk/guides/configuration/endpoint-configuration"},"Endpoint Configuration")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.everos.dev/ever-sdk/guides/configuration/message_expiration"},"Message Expiration")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.everos.dev/ever-sdk/guides/configuration/retry_message"},"Message Retry")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.everos.dev/ever-sdk/guides/configuration/configure_sdk"},"Config Reference")))),(0,s.kt)("li",{parentName:"ul"},"Work with contracts in EVER SDK",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.everos.dev/ever-sdk/guides/work_with_contracts/add_contract_to_your_app"},"Add Contract to your App")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.everos.dev/ever-sdk/guides/work_with_contracts/custom_giver"},"Use your own Giver")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.everos.dev/ever-sdk/guides/work_with_contracts/deploy"},"Deploy Contract")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.everos.dev/ever-sdk/guides/work_with_contracts/run_onchain"},"Run Contract on-chain")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.everos.dev/ever-sdk/guides/work_with_contracts/run_abi_get_method"},"Run ABI Get Method")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.everos.dev/ever-sdk/guides/work_with_contracts/run_fift_get_method"},"Run Fift Get Method")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.everos.dev/ever-sdk/guides/work_with_contracts/work_with_events"},"Query/Subscribe for messages(events)")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.everos.dev/ever-sdk/guides/work_with_contracts/decode_message"},"Decode Messages(Event)")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.everos.dev/ever-sdk/guides/work_with_contracts/external_signing"},"External Signing")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.everos.dev/ever-sdk/guides/work_with_contracts/emulate_transaction"},"Emulate Transaction")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.everos.dev/ever-sdk/guides/work_with_contracts/estimate_fees"},"Estimate Fees")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.everos.dev/ever-sdk/guides/work_with_contracts/validate_address_convert_address"},"Validate address, convert address")))),(0,s.kt)("li",{parentName:"ul"},"Crypto fucntions in EVER SDK",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.everos.dev/ever-sdk/guides/crypto/mnemonics_and_keys"},"Mnemonics and Keys")))),(0,s.kt)("li",{parentName:"ul"},"Queries and subscriptions in EVER SDK",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.everos.dev/ever-sdk/guides/queries_and_subscriptions/use-cases"},"Use-cases")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.everos.dev/ever-sdk/guides/queries_and_subscriptions/how-to-work-with-net-module"},"How to work with net module")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.everos.dev/ever-sdk/guides/queries_and_subscriptions/raw_query"},"net.query syntax")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.everos.dev/ever-sdk/guides/queries_and_subscriptions/data-pagination"},"Data pagination")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.everos.dev/ever-sdk/guides/queries_and_subscriptions/subscribe_to_updates"},"Subscribe to Updates")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.everos.dev/ever-sdk/guides/queries_and_subscriptions/query_collection"},"Query Collection")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.everos.dev/ever-sdk/guides/queries_and_subscriptions/aggregate_collection"},"Aggregate Collection"))))))}c.isMDXComponent=!0}}]);