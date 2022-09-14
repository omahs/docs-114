"use strict";(self.webpackChunkeverscale_docs_website=self.webpackChunkeverscale_docs_website||[]).push([[5145],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(r),m=i,b=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(b,a(a({ref:t},s),{},{components:r})):n.createElement(b,a({ref:t},s))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},237:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var n=r(3117),i=r(102),o=(r(7294),r(3905)),a=["components"],l={sidebar_position:1,"//":null},p="TON Solidity Compiler",c={unversionedId:"develop/smart-contract/solidity-developing/compiler",id:"develop/smart-contract/solidity-developing/compiler",title:"TON Solidity Compiler",description:"TON Solidity Compiler is the Solidity smart contract compiler port for the Everscale blockchain.",source:"@site/../../src/develop/smart-contract/solidity-developing/compiler.md",sourceDirName:"develop/smart-contract/solidity-developing",slug:"/develop/smart-contract/solidity-developing/compiler",permalink:"/develop/smart-contract/solidity-developing/compiler",draft:!1,editUrl:"https://github.com/everscale-org/docs/edit/main/.build/website/../../src/develop/smart-contract/solidity-developing/compiler.md",tags:[],version:"current",lastUpdatedAt:1663168799,formattedLastUpdatedAt:"Sep 14, 2022",sidebarPosition:1,frontMatter:{sidebar_position:1,"//":null},sidebar:"tutorialSidebar",previous:{title:"Getting started",permalink:"/develop/smart-contract/solidity-developing/getting-started"},next:{title:"Solidity Contracts Examples",permalink:"/develop/smart-contract/solidity-developing/samples"}},s={},d=[{value:"Prerequisites:",id:"prerequisites",level:2},{value:"Ubuntu Linux",id:"ubuntu-linux",level:2},{value:"Windows",id:"windows",level:2}],u={toc:d};function m(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"ton-solidity-compiler"},"TON Solidity Compiler"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/tonlabs/TON-Solidity-Compiler"},"TON Solidity Compiler")," is the Solidity smart contract compiler port for the Everscale blockchain. "),(0,o.kt)("p",null,"You can read the TON Solidity API documentation at ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/tonlabs/TON-Solidity-Compiler/blob/master/API.md"},"this link"),"."),(0,o.kt)("p",null,"In this section we will tell you how to build and install the Solidity Compiler.",(0,o.kt)("br",{parentName:"p"}),"\n","For more information, see the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/tonlabs/TON-Solidity-Compiler"},"appropriate EverX repository.")),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://git-scm.com/downloads"},"GitBash")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://cmake.org/"},"Cmake"))),(0,o.kt)("h2",{id:"ubuntu-linux"},"Ubuntu Linux"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"git clone git@github.com:tonlabs/TON-Solidity-Compiler.git\ncd TON-Solidity-Compiler\nsh ./compiler/scripts/install_deps.sh\nmkdir build\ncd build\ncmake ../compiler/ -DCMAKE_BUILD_TYPE=Release\ncmake --build . -- -j8\n")),(0,o.kt)("p",null,"Make other Everscale toolchain utilities aware of the language runtime library location via an environment variable: specify path to ",(0,o.kt)("inlineCode",{parentName:"p"},"stdlib_sol.tvm"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sh ./compiler/scripts/install_lib_variable.sh\n")),(0,o.kt)("h2",{id:"windows"},"Windows"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"git clone https://github.com/tonlabs/TON-Solidity-Compiler\ncd TON-Solidity-Compiler\ncmake -P compiler\\scripts\\install_deps.cmake\nmkdir build\ncd build\ncmake ..\\compiler\ncmake --build . --config Release -j 8\n")),(0,o.kt)("p",null,"To facilitate work with other Everscale tools add path to ",(0,o.kt)("inlineCode",{parentName:"p"},"stdlib_sol.tvm")," into environment variable ",(0,o.kt)("inlineCode",{parentName:"p"},"TVM_LINKER_LIB_PATH"),"."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"}," The documentation in Everscale repository is a community effort. Therefore, everyone can contribute with proposals for new topics, suggest new content elements, participate in editing, and provide ideas that will be of great help for network development.\nPlease be informed that our documentation can be ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/everscale-org/docs/issues"},"edited via GitHub"),".",(0,o.kt)("br",{parentName:"p"}),"\n","Also please make sure to consult our rules and rewards policy via ",(0,o.kt)("a",{parentName:"p",href:"https://docs.everscale.network/contribute/hot-streams/documentations"},"this link"),".",(0,o.kt)("br",{parentName:"p"}),"\n","Feel free to join ",(0,o.kt)("a",{parentName:"p",href:"https://t.me/+C2IpQXWZtCwxYzEy"},"Everscale Documentation Development Telegram chat")," and ",(0,o.kt)("a",{parentName:"p",href:"https://t.me/+Vca1Gs6uPzIyNWVi"},"Everscale Developers Onboarding Telegram chat"),"!")))}m.isMDXComponent=!0}}]);