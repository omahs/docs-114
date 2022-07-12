"use strict";(self.webpackChunkeverscale_docs_website=self.webpackChunkeverscale_docs_website||[]).push([[8825],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),f=o,v=u["".concat(c,".").concat(f)]||u[f]||d[f]||a;return n?r.createElement(v,i(i({ref:t},p),{},{components:n})):r.createElement(v,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8237:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],l={sidebar_position:4,title:"How to view controller info"},c="How to view controller info",s={unversionedId:"develop/api-tools/everdev/guides/controller-info",id:"develop/api-tools/everdev/guides/controller-info",title:"How to view controller info",description:"This command displays a summary of all controller configurations.",source:"@site/../../src/develop/api-tools/everdev/guides/controller-info.md",sourceDirName:"develop/api-tools/everdev/guides",slug:"/develop/api-tools/everdev/guides/controller-info",permalink:"/develop/api-tools/everdev/guides/controller-info",draft:!1,editUrl:"https://github.com/everscale-org/docs/edit/main/.build/website/../../src/develop/api-tools/everdev/guides/controller-info.md",tags:[],version:"current",lastUpdatedAt:1657625428,formattedLastUpdatedAt:"7/12/2022",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"How to view controller info"},sidebar:"tutorialSidebar",previous:{title:"How to create controller",permalink:"/develop/api-tools/everdev/guides/create-controller"},next:{title:"Troubleshooting",permalink:"/develop/api-tools/everdev/troubleshooting"}},p={},d=[],u={toc:d};function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"how-to-view-controller-info"},"How to view controller info"),(0,a.kt)("p",null,"This command displays a summary of all controller configurations."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"everdev info\n")),(0,a.kt)("p",null,"Output example:"),(0,a.kt)("p",null,"$ everdev info"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"C++ compiler\nComponent  Version  Available\n---------  -------  ---------\nclang      7.0.0    7.0.0\nSolidity Compiler\nComponent  Available\n---------  ----------------------------------------------\ncompiler   0.42.0, 0.41.0, 0.40.0, 0.39.0, 0.38.2, 0.38.1\nlinker     0.3.0, 0.1.0\nstdlib     0.42.0, 0.41.0, 0.40.0, 0.39.0, 0.38.2, 0.38.1\nTON OS SE\nInstance  State          Version  GraphQL Port  Docker Container      Docker Image\n--------  -------------  -------  ------------  --------------------  -----------------------\ndefault   not installed  0.27     80            tonlabs-tonos-se-test  tonlabs/local-node:0.27\nNetwork Registry\nNetwork        Endpoints                                        Giver\n-------------  -----------------------------------------------  ------------------------------------------------------------------\nse             http://localhost                                 0:b5e9240fc2d2f1ff8cbb1d1dee7fb7cae155e5f6320e585fcc685698994a19a5\ndev (Default)  net.ton.dev, net1.ton.dev, net5.ton.dev          0:255a3ad9dfa8aa4f3481856aafc7d79f47d50205190bd56147138740e9b177f3\nmain           main.ton.dev, main2.ton.dev, main3.ton.dev, ...\nSigner Registry\nSigner          Public Key\n--------------  ----------------------------------------------------------------\nsurf            8534c46f7a135058773fa1298cb3a299a5ddd40dafe41cb06c64f274da360bfb\ntest (Default)  ad4bf7bd8da244932c52127a943bfa9217b6e215c1b3307272283c4d64f34486\ntest2           5c2e348c5caeb420a863dc5e972f897ebe5ee899a6ef2a8299aac352eca4380a\nTON OS CLI\nComponent  Version  Available\n---------  -------  --------------------------------------------------------------------------------\ntonoscli   0.11.3   0.11.4, 0.11.3, 0.11.2, 0.11.1, 0.11.0, 0.10.1, 0.10.0, 0.9.2, 0.9.1, 0.9.0, ...\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"}," The documentation in Everscale repository is a community effort. Therefore, everyone can contribute with proposals for new topics, suggest new content elements, participate in editing, and provide ideas that will be of great help for network development.\nPlease be informed that our documentation can be ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/everscale-org/docs/issues"},"edited via GitHub"),".",(0,a.kt)("br",{parentName:"p"}),"\n","Also please make sure to consult our rules and rewards policy via ",(0,a.kt)("a",{parentName:"p",href:"https://docs.everscale.network/contribute/hot-streams/documentations"},"this link"),".",(0,a.kt)("br",{parentName:"p"}),"\n","Feel free to join ",(0,a.kt)("a",{parentName:"p",href:"https://t.me/+C2IpQXWZtCwxYzEy"},"Everscale Documentation Development Telegram chat")," and ",(0,a.kt)("a",{parentName:"p",href:"https://t.me/+Vca1Gs6uPzIyNWVi"},"Everscale Developers Onboarding Telegram chat"),"!")))}f.isMDXComponent=!0}}]);