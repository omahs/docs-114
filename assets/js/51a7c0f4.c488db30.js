"use strict";(self.webpackChunkeverscale_docs_website=self.webpackChunkeverscale_docs_website||[]).push([[9437],{3905:function(e,t,o){o.d(t,{Zo:function(){return u},kt:function(){return m}});var n=o(7294);function l(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){l(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,l=function(e,t){if(null==e)return{};var o,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(l[o]=e[o]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(l[o]=e[o])}return l}var s=n.createContext({}),p=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var o=e.components,l=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(o),m=l,b=c["".concat(s,".").concat(m)]||c[m]||d[m]||a;return o?n.createElement(b,r(r({ref:t},u),{},{components:o})):n.createElement(b,r({ref:t},u))}));function m(e,t){var o=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=o.length,r=new Array(a);r[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,r[1]=i;for(var p=2;p<a;p++)r[p]=o[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,o)}c.displayName="MDXCreateElement"},2705:function(e,t,o){o.r(t),o.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return d}});var n=o(7462),l=o(3366),a=(o(7294),o(3905)),r=["components"],i={sidebar_position:2},s="Samples",p={unversionedId:"develop/smart-contract/debots/samples",id:"develop/smart-contract/debots/samples",title:"Samples",description:"Simple DeBot application",source:"@site/../../src/develop/smart-contract/debots/samples.md",sourceDirName:"develop/smart-contract/debots",slug:"/develop/smart-contract/debots/samples",permalink:"/develop/smart-contract/debots/samples",draft:!1,editUrl:"https://github.com/everscale-org/docs/edit/main/.build/website/../../src/develop/smart-contract/debots/samples.md",tags:[],version:"current",lastUpdatedAt:1657560907,formattedLastUpdatedAt:"7/11/2022",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"DInterfaces",permalink:"/develop/smart-contract/debots/deinterfaces"},next:{title:"Multisignature Wallet",permalink:"/develop/smart-contract/multisignature-wallet"}},u={},d=[{value:"Simple DeBot application",id:"simple-debot-application",level:2},{value:"How to try DeBot in the Surf",id:"how-to-try-debot-in-the-surf",level:3},{value:"Devnet",id:"devnet",level:5},{value:"Mainnet",id:"mainnet",level:5},{value:"How to build",id:"how-to-build",level:3},{value:"Prerequisites",id:"prerequisites",level:5},{value:"Compile",id:"compile",level:5},{value:"How to deploy",id:"how-to-deploy",level:3},{value:"Run DeBot",id:"run-debot",level:3},{value:"TODO",id:"todo",level:3},{value:"Hello World DeBot",id:"hello-world-debot",level:2},{value:"How to build",id:"how-to-build-1",level:3},{value:"How to deploy to TON OS SE",id:"how-to-deploy-to-ton-os-se",level:3},{value:"How to run in TON OS SE",id:"how-to-run-in-ton-os-se",level:3},{value:"Multisig Debot",id:"multisig-debot",level:2},{value:"Supported Wallets",id:"supported-wallets",level:3},{value:"How to build",id:"how-to-build-2",level:3},{value:"How to deploy to TON OS SE",id:"how-to-deploy-to-ton-os-se-1",level:3},{value:"How to run in TON OS SE",id:"how-to-run-in-ton-os-se-1",level:3},{value:"Run Multisig DeBot in mainnet",id:"run-multisig-debot-in-mainnet",level:3},{value:"using tonos-cli",id:"using-tonos-cli",level:4},{value:"How to create invoke message for Msig DeBot",id:"how-to-create-invoke-message-for-msig-debot",level:4},{value:"Surf Auth DeBot",id:"surf-auth-debot",level:2},{value:"Disclaimer",id:"disclaimer",level:3},{value:"Workflow",id:"workflow",level:3},{value:"Prerequisites",id:"prerequisites-1",level:3},{value:"The quickest start (if you want to use DeBot  already deployed in net.ton.dev)",id:"the-quickest-start-if-you-want-to-use-debot--already-deployed-in-nettondev",level:3},{value:"If you want to deploy DeBot by yourself",id:"if-you-want-to-deploy-debot-by-yourself",level:3}],c={toc:d};function m(e){var t=e.components,o=(0,l.Z)(e,r);return(0,a.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"samples"},"Samples"),(0,a.kt)("h2",{id:"simple-debot-application"},"Simple DeBot application"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Referenced page:",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/tonlabs/debots/blob/main/simple-todo-app/README.md"},"https://github.com/tonlabs/debots/blob/main/simple-todo-app/README.md"))),(0,a.kt)("p",null,"This is an example of a simple TODO application. The application consists of two contracts:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"todoDebot.sol, contract of DeBot"),(0,a.kt)("li",{parentName:"ul"},"todo.sol, smart contract containing TODO list")),(0,a.kt)("h3",{id:"how-to-try-debot-in-the-surf"},"How to try DeBot in the Surf"),(0,a.kt)("p",null,"This DeBot is already deployed on blockchain"),(0,a.kt)("h5",{id:"devnet"},(0,a.kt)("a",{parentName:"h5",href:"https://net.ever.live/"},"Devnet")),(0,a.kt)("p",null,"DeBot address: 0:20c3279225a285dfef71efe97f67e823513068b36e79d5fc669899389f89382f"),(0,a.kt)("p",null,"Open the link: ",(0,a.kt)("a",{parentName:"p",href:"https://uri.ever.surf/debot/0:20c3279225a285dfef71efe97f67e823513068b36e79d5fc669899389f89382f?net=devnet"},"https://uri.ever.surf/debot/0:20c3279225a285dfef71efe97f67e823513068b36e79d5fc669899389f89382f?net=devnet")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://github.com/tonlabs/debots/raw/main/assets/net.everos.dev.png",alt:null})),(0,a.kt)("h5",{id:"mainnet"},(0,a.kt)("a",{parentName:"h5",href:"https://ever.live"},"Mainnet")),(0,a.kt)("p",null,"DeBot address: 0:73a7ba235ac26029574f0e053b3f25ba4d536b8ba2c8dd5d10fb266c9035bc36"),(0,a.kt)("p",null,"Open the link: ",(0,a.kt)("a",{parentName:"p",href:"https://uri.ever.surf/debot/0:73a7ba235ac26029574f0e053b3f25ba4d536b8ba2c8dd5d10fb266c9035bc36"},"https://uri.ever.surf/debot/0:73a7ba235ac26029574f0e053b3f25ba4d536b8ba2c8dd5d10fb266c9035bc36")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://github.com/tonlabs/debots/raw/main/assets/main.ton.dev.svg",alt:null})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"On the first launch DeBot deploys TODO contract with initial balance = 0.2 ever tokens, so you need to have a Surf wallet with positive balance.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"DeBot will ask for your public key every time you launch it. It's inconvenient, but inevitable for now."))),(0,a.kt)("h3",{id:"how-to-build"},"How to build"),(0,a.kt)("h5",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"npm, node.js ver>=14"),(0,a.kt)("p",null,"Install everdev globally"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ npm i everdev -g\n$ everdev tonos-cli install\n")),(0,a.kt)("h5",{id:"compile"},"Compile"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ everdev sol compile todo.sol\n$ everdev sol compile todoDebot.sol\n")),(0,a.kt)("h3",{id:"how-to-deploy"},"How to deploy"),(0,a.kt)("p",null,"if you use Evernode SE:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ everdev se start\n$ ./deploy_debot.sh todoDebot.tvc\n")),(0,a.kt)("p",null,"if you use net.everos.dev:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"set ",(0,a.kt)("inlineCode",{parentName:"li"},"GIVER_ADDRESS")," variable in ",(0,a.kt)("inlineCode",{parentName:"li"},"deploy_debot.sh")),(0,a.kt)("li",{parentName:"ul"},"edit ",(0,a.kt)("inlineCode",{parentName:"li"},"../giver.keys.json")," respectively")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ ./deploy_debot.sh todoDebot.tvc https://net.ton.dev\n")),(0,a.kt)("h3",{id:"run-debot"},"Run DeBot"),(0,a.kt)("p",null,"Find instructions here: ",(0,a.kt)("a",{parentName:"p",href:"/develop/smart-contract/debots/getting-started/###how-to-try-debot"},"How to try-DeBot")),(0,a.kt)("h3",{id:"todo"},"TODO"),(0,a.kt)("p",null,"Encrypt data before saving to contract"),(0,a.kt)("h2",{id:"hello-world-debot"},"Hello World DeBot"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Referenced page:",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/tonlabs/debots/blob/main/helloworld/README.md"},"https://github.com/tonlabs/debots/blob/main/helloworld/README.md"))),(0,a.kt)("p",null,"Can be used as a template for new DeBots."),(0,a.kt)("h3",{id:"how-to-build-1"},"How to build"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"everdev sol compile helloDebot.sol\n")),(0,a.kt)("h3",{id:"how-to-deploy-to-ton-os-se"},"How to deploy to TON OS SE"),(0,a.kt)("p",null,"Start TON OS SE"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"everdev se start\n")),(0,a.kt)("p",null,"Deploy debot"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"./deploy_debot.sh\n")),(0,a.kt)("h3",{id:"how-to-run-in-ton-os-se"},"How to run in TON OS SE"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"./tonos-cli --url http://127.0.0.1 debot fetch <address>\n")),(0,a.kt)("h2",{id:"multisig-debot"},"Multisig Debot"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Referenced page:",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/tonlabs/debots/tree/main/multisig"},"https://github.com/tonlabs/debots/tree/main/multisig"))),(0,a.kt)("p",null,"Allows to manage wallet with multiple custodians."),(0,a.kt)("h3",{id:"supported-wallets"},"Supported Wallets"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/tonlabs/ton-labs-contracts/blob/master/solidity/safemultisig/SafeMultisigWallet.tvc"},"SafeMultisigWallet")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/tonlabs/ton-labs-contracts/blob/master/solidity/setcodemultisig/SetcodeMultisigWallet.tvc"},"SetcodeMultisigWallet"))),(0,a.kt)("h3",{id:"how-to-build-2"},"How to build"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"everdev sol compile msigDebotv1.sol\n")),(0,a.kt)("h3",{id:"how-to-deploy-to-ton-os-se-1"},"How to deploy to TON OS SE"),(0,a.kt)("p",null,"Start TON OS SE"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"everdev se start\n")),(0,a.kt)("p",null,"Run script"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"./deploy_debot.sh\n")),(0,a.kt)("h3",{id:"how-to-run-in-ton-os-se-1"},"How to run in TON OS SE"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"./tonos-cli --url http://127.0.0.1 debot fetch <address>\n")),(0,a.kt)("h3",{id:"run-multisig-debot-in-mainnet"},"Run Multisig DeBot in mainnet"),(0,a.kt)("h4",{id:"using-tonos-cli"},"using tonos-cli"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"./tonos-cli --url main.ton.dev debot fetch 0:09403116d2d04f3d86ab2de138b390f6ec1b0bc02363dbf006953946e807051e\n")),(0,a.kt)("h4",{id:"how-to-create-invoke-message-for-msig-debot"},"How to create invoke message for Msig DeBot"),(0,a.kt)("p",null,"Run script ",(0,a.kt)("inlineCode",{parentName:"p"},".invoke_msg.sh")," with debot arguments."),(0,a.kt)("p",null,"Run script ",(0,a.kt)("inlineCode",{parentName:"p"},".invoke_msg.sh")," without arguments for help."),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"./invoke_msg.sh 0:606545c3b681489f2c217782e2da2399b0aed8640ccbcf9884f75648304dbc77 1000000000 true\n")),(0,a.kt)("h2",{id:"surf-auth-debot"},"Surf Auth DeBot"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Referenced page:",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/tonlabs/debots/tree/main/auth"},"https://github.com/tonlabs/debots/tree/main/auth"))),(0,a.kt)("p",null,'This DeBot can be used in "Sign Up" / "Sign In" flows as well as in the case when an already registered user wants to link his Surf account.'),(0,a.kt)("h3",{id:"disclaimer"},"Disclaimer"),(0,a.kt)("p",null,"This code is still experimental, do not use it in production."),(0,a.kt)("h3",{id:"workflow"},"Workflow"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Web server generates:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"one time password (OTP)"),(0,a.kt)("li",{parentName:"ul"},"PIN (optionally)"),(0,a.kt)("li",{parentName:"ul"},"callback_url"),(0,a.kt)("li",{parentName:"ul"},"warning_text"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Web server:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"generates QR-code with a deeplink to the Surf containing all this data ",(0,a.kt)("strong",{parentName:"li"},"except for the PIN"),"."),(0,a.kt)("li",{parentName:"ul"},"shows PIN and QR-code to the user"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The user "),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"scans a QR code or click deeplink, and is redirected to the Surf"),(0,a.kt)("li",{parentName:"ul"},'Sees warning text, e.g. "Attention! You authorize access to ABC site"'),(0,a.kt)("li",{parentName:"ul"},"Enters OTP"),(0,a.kt)("li",{parentName:"ul"},"Signs OTP + PIN + callback_url + warning_text, and returns his signature and ",(0,a.kt)("strong",{parentName:"li"},"his public key")," to the server"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"If the signature is correct, the server knows that this user is the real owner of this public key."))),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://github.com/tonlabs/debots/blob/main/auth/example-webserver-nodejs/public/pic1.png",alt:"Sequence diagram"})),(0,a.kt)("h3",{id:"prerequisites-1"},"Prerequisites"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"npm, node.js ver>=14, everdev\n")),(0,a.kt)("h3",{id:"the-quickest-start-if-you-want-to-use-debot--already-deployed-in-nettondev"},"The quickest start (if you want to use DeBot  already deployed in net.ton.dev)"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Run local webserver")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ cd example-webserver-nodejs/\n$ npm i\n$ npm start\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Open http://localhost:8080/surfauth.html?pin=true in a browser ")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click on the link shown to open Surf on your local computer. ",(0,a.kt)("strong",{parentName:"p"},"Do not scan")," the QR code with your mobile phone, because the test web server is running on your local computer!"))),(0,a.kt)("h3",{id:"if-you-want-to-deploy-debot-by-yourself"},"If you want to deploy DeBot by yourself"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Deploy DeBot")),(0,a.kt)("p",null,"Set ",(0,a.kt)("inlineCode",{parentName:"p"},"GIVER_KEYS")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"GIVER_ADDRESS")," variables in ",(0,a.kt)("inlineCode",{parentName:"p"},"deploy_debot.sh")," file, then run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ ./compile_and_deploy.sh \n")),(0,a.kt)("p",null,"Remember debot_adress"),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Run local webserver")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ cd example-webserver-nodejs/\n$ npm i\n$ node src/main <debot_address>\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Open http://localhost:8080/surfauth.html?pin=true in a browser ")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"}," The documentation in Everscale repository is a community effort.",(0,a.kt)("br",{parentName:"p"}),"\n","Therefore, everyone can contribute with proposals for new topics, suggest new content elements, participate in editing, and provide ideas that will be of great help for network development.",(0,a.kt)("br",{parentName:"p"}),"\n","Please be informed that our documentation can be ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/everscale-org/docs/issues"},"edited via GitHub"),".",(0,a.kt)("br",{parentName:"p"}),"\n","Also please make sure to consult our rules and rewards policy via ",(0,a.kt)("a",{parentName:"p",href:"https://docs.everscale.network/contribute/hot-streams/documentations"},"this link"),".",(0,a.kt)("br",{parentName:"p"}),"\n","Feel free to join ",(0,a.kt)("a",{parentName:"p",href:"https://t.me/+C2IpQXWZtCwxYzEy"},"Everscale Documentation Development Telegram chat")," and ",(0,a.kt)("a",{parentName:"p",href:"https://t.me/+Vca1Gs6uPzIyNWVi"},"Everscale Developers Onboarding Telegram chat"),"!")))}m.isMDXComponent=!0}}]);