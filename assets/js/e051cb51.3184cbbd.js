"use strict";(self.webpackChunkeverscale_docs_website=self.webpackChunkeverscale_docs_website||[]).push([[9082],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return g}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),d=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=d(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=d(t),g=a,m=u["".concat(l,".").concat(g)]||u[g]||p[g]||i;return t?r.createElement(m,s(s({ref:n},c),{},{components:t})):r.createElement(m,s({ref:n},c))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,s=new Array(i);s[0]=u;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var d=2;d<i;d++)s[d]=t[d];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},7016:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return p}});var r=t(7462),a=t(3366),i=(t(7294),t(3905)),s=["components"],o={sidebar_position:6},l="Signer Tool",d={unversionedId:"develop/api-tools/everdev/command-line-interface/signer-tool",id:"develop/api-tools/everdev/command-line-interface/signer-tool",title:"Signer Tool",description:"Signer registry is a centralized place where you can store your development keys.",source:"@site/../../src/develop/api-tools/everdev/command-line-interface/signer-tool.md",sourceDirName:"develop/api-tools/everdev/command-line-interface",slug:"/develop/api-tools/everdev/command-line-interface/signer-tool",permalink:"/develop/api-tools/everdev/command-line-interface/signer-tool",draft:!1,editUrl:"https://github.com/everscale-org/docs/edit/main/.build/website/../../src/develop/api-tools/everdev/command-line-interface/signer-tool.md",tags:[],version:"current",lastUpdatedAt:1657560907,formattedLastUpdatedAt:"7/11/2022",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"TestSuite4",permalink:"/develop/api-tools/everdev/command-line-interface/testsuite4"},next:{title:"Network Tool",permalink:"/develop/api-tools/everdev/command-line-interface/network-tool"}},c={},p=[{value:"Add a signer with randomly generated keys",id:"add-a-signer-with-randomly-generated-keys",level:2},{value:"Add a signer with specific keys",id:"add-a-signer-with-specific-keys",level:2},{value:"List registered signers",id:"list-registered-signers",level:2},{value:"Get signer details",id:"get-signer-details",level:2},{value:"Set default signer",id:"set-default-signer",level:2},{value:"Delete a signer",id:"delete-a-signer",level:2}],u={toc:p};function g(e){var n=e.components,t=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"signer-tool"},"Signer Tool"),(0,i.kt)("p",null,"Signer registry is a centralized place where you can store your development keys."),(0,i.kt)("p",null,"Each signer in registry has an unique user defined name. All everdev commands\nthat require signing or encryption refer to the signer by name."),(0,i.kt)("p",null,"You can mark one of the signers as a default.\nIt can be used in signing commands without providing signer option."),(0,i.kt)("p",null,"Signer repository management in everdev is accessible through the ",(0,i.kt)("inlineCode",{parentName:"p"},"signer")," tool."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note:")," If you need to generate an unsigned message, you may use the option ",(0,i.kt)("inlineCode",{parentName:"p"},"--signer none")," in any relevant commands in other controllers. Omitting the signer option altogether always means using the default signer."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note:")," Keys in the repository are stored unencrypted."),(0,i.kt)("h2",{id:"add-a-signer-with-randomly-generated-keys"},"Add a signer with randomly generated keys"),(0,i.kt)("p",null,"This command adds a signer with randomly generated keys."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"everdev signer generate signer_name\n")),(0,i.kt)("p",null,"See other available generation options with help command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"everdev signer generate -h\nEverDev Version: 0.5.0\nUse: everdev signer generate name [options]\nArgs:\n    name  Signer name\nOptions:\n    --help, -h        Show command usage\n    --mnemonic, -m    Use mnemonic phrase\n    --dictionary, -d  Mnemonic dictionary\n                      0  TON\n                      1  English\n                      2  Chinese Simplified\n                      3  Chinese Traditional\n                      4  French\n                      5  Italian\n                      6  Japanese\n                      7  Korean\n                      8  Spanish\n    --words, -w       Number of mnemonic words\n    --force, -f       Overwrite signer if already exists\n")),(0,i.kt)("h2",{id:"add-a-signer-with-specific-keys"},"Add a signer with specific keys"),(0,i.kt)("p",null,"This command adds a signer with previously generated (e.g. with tonos-cli) keys."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"everdev signer add signer_name signer_secret_key_or_seed_phrase_in_quotes\n")),(0,i.kt)("p",null,"See other available signer addition options with help command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"everdev signer add -h\nEverDev Version: 0.5.0\nUse: everdev signer add name secret [options]\nArgs:\n    name    Signer name\n    secret  Secret key or seed phrase\nOptions:\n    --help, -h        Show command usage\n    --dictionary, -d  Mnemonic dictionary\n                      0  TON\n                      1  English\n                      2  Chinese Simplified\n                      3  Chinese Traditional\n                      4  French\n                      5  Italian\n                      6  Japanese\n                      7  Korean\n                      8  Spanish\n    --force, -f       Overwrite signer if already exists\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note:")," By default the dictionary is set to english, which allows using seed phrases generated by other TONOS tools, such as tonos-cli."),(0,i.kt)("h2",{id:"list-registered-signers"},"List registered signers"),(0,i.kt)("p",null,"This command lists all registered signers with their public keys."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"everdev signer list\n")),(0,i.kt)("p",null,"Result:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ everdev signer list\n\nSigner           Public Key\n---------------  ----------------------------------------------------------------\nsign1 (Default)  cffd3a2f1d241807b2205220a7d6df980e67a3cc7c47eba2766cdc1bbddfc0e3\nsign2            0fc4e781720d80f76257db333c6b6934090562418652cf30352878c87707aa94\n")),(0,i.kt)("h2",{id:"get-signer-details"},"Get signer details"),(0,i.kt)("p",null,"This command lists all information (including secret data) for a specified signer."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"everdev signer info signer_name\n")),(0,i.kt)("p",null,"Result:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'$ everdev signer info sign2\n{\n    "name": "sign2",\n    "description": "",\n    "keys": {\n        "public": "760d69964d038997d891fca0a0407c2ffefb701e7cb2f9ff0a87fbbf1e8098f2",\n        "secret": "72571b5a9392e6bb215b460ca3c0545c34d790e185f66f5b2e7564329ffea86c"\n    }\n}\n')),(0,i.kt)("h2",{id:"set-default-signer"},"Set default signer"),(0,i.kt)("p",null,"This command sets a previously added signer as default (initially the first added signer is used by default)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"everdev signer default signer_name\n")),(0,i.kt)("h2",{id:"delete-a-signer"},"Delete a signer"),(0,i.kt)("p",null,"This command deletes a previously added signer from signer registry."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"everdev signer delete signer_name\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"}," The documentation in Everscale repository is a community effort. Therefore, everyone can contribute with proposals for new topics, suggest new content elements, participate in editing, and provide ideas that will be of great help for network development.\nPlease be informed that our documentation can be ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/everscale-org/docs/issues"},"edited via GitHub"),".",(0,i.kt)("br",{parentName:"p"}),"\n","Also please make sure to consult our rules and rewards policy via ",(0,i.kt)("a",{parentName:"p",href:"https://docs.everscale.network/contribute/hot-streams/documentations"},"this link"),".",(0,i.kt)("br",{parentName:"p"}),"\n","Feel free to join ",(0,i.kt)("a",{parentName:"p",href:"https://t.me/+C2IpQXWZtCwxYzEy"},"Everscale Documentation Development Telegram chat")," and ",(0,i.kt)("a",{parentName:"p",href:"https://t.me/+Vca1Gs6uPzIyNWVi"},"Everscale Developers Onboarding Telegram chat"),"!")))}g.isMDXComponent=!0}}]);