"use strict";(self.webpackChunkeverscale_docs_website=self.webpackChunkeverscale_docs_website||[]).push([[1243],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(n),h=r,m=d["".concat(s,".").concat(h)]||d[h]||p[h]||l;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},9916:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const l={title:"Working with Value",description:"Carefully working with value when creating messages",sidebar_position:6},i="Carefully working with value when creating messages",o={unversionedId:"develop/smart-contracts/carefully-working-with-value",id:"develop/smart-contracts/carefully-working-with-value",title:"Working with Value",description:"Carefully working with value when creating messages",source:"@site/../../src/develop/smart-contracts/20-carefully-working-with-value.md",sourceDirName:"develop/smart-contracts",slug:"/develop/smart-contracts/carefully-working-with-value",permalink:"/develop/smart-contracts/carefully-working-with-value",draft:!1,editUrl:"https://github.com/everscale-org/docs/edit/main/.build/website/../../src/develop/smart-contracts/20-carefully-working-with-value.md",tags:[],version:"current",lastUpdatedAt:1679528395,formattedLastUpdatedAt:"Mar 22, 2023",sidebarPosition:6,frontMatter:{title:"Working with Value",description:"Carefully working with value when creating messages",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Transaction execution",permalink:"/develop/smart-contracts/phases-of-transaction-execution"},next:{title:"Gas limits",permalink:"/develop/smart-contracts/gas-and-messages-limits"}},s={},c=[],u={toc:c},d="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"carefully-working-with-value-when-creating-messages"},"Carefully working with ",(0,r.kt)("inlineCode",{parentName:"h1"},"value")," when creating messages"),(0,r.kt)("p",null,"In general, whenever you create outgoing messages while processing incoming internal messages, you must be very careful with the value that you attach to messages."),(0,r.kt)("p",null,"The subtlety here is that if you create outgoing messages while processing an incoming message, then value can be deducted from your contract account, even if there is not enough money to pay for this value in the incoming message and you did not call ",(0,r.kt)("inlineCode",{parentName:"p"},"tvm.accept()"),"."),(0,r.kt)("p",null,"Here is an example of a function that can spend money from a contract account."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"function deployWallet(\n    uint256 _wallet_public_key,\n    uint128 _deploy_evers\n) external {\n    TvmCell stateInit = tvm.buildStateInit({\n        contr: TokenWalletContract,\n        varInit: {\n            root_address: address(this),\n            wallet_code: wallet_code\n        },\n        pubkey: _wallet_public_key,\n        code: wallet_code\n    });\n\n    new TokenWalletContract{\n        stateInit: stateInit,\n        value: _deploy_evers,\n        wid: address(this).wid,\n        flag: 0\n    }();\n}\n")),(0,r.kt)("p",null,"Everything seems to look good; the function should deploy the wallet and send the specified amount of EVER there. But due to the separation of phases (read above about phases), the creation of the message is paid from the money in the incoming message, and the message is put into the register of outgoing messages, where it will wait for the action phase. And in the action phase, it is created, and value is deducted from the contract account instead of the message account. And if we attach 1 ever to the message and request to deploy the wallet with 3 ever, then the remaining 2 ever will be deducted from the contract account."),(0,r.kt)("p",null,"Working with flags and value can be very tricky and you need to play around with them to understand the logic of ",(0,r.kt)("inlineCode",{parentName:"p"},"TVM"),"."),(0,r.kt)("p",null,"Here is another example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"function deployWallet(\n    uint256 _wallet_public_key,\n    uint128 _deploy_evers\n) external {\n    require(msg.value - 0.1 ever > _deploy_evers);\n\n    TvmCell stateInit = tvm.buildStateInit({\n        contr: TokenWalletContract,\n        varInit: {\n            root_address: address(this),\n            wallet_code: wallet_code\n        },\n        pubkey: _wallet_public_key,\n        code: wallet_code\n    });\n\n    new TokenWalletContract{\n        stateInit: stateInit,\n        value: _deploy_evers,\n        wid: address(this).wid,\n        flag: 0\n    }();\n\n    msg.sender.transfer({ value: 0, bounce: false, flag: 64 });\n}\n")),(0,r.kt)("p",null,"Here we have the example as above, but now we\u2019ve checked that the ",(0,r.kt)("inlineCode",{parentName:"p"},"msg.value")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"0.1 ever")," greater than the ",(0,r.kt)("inlineCode",{parentName:"p"},"_deploy_evers"),", and we want to return the change back to the sender."),(0,r.kt)("p",null,"But this is also incorrect. For example, we send ",(0,r.kt)("inlineCode",{parentName:"p"},"1 ever")," with the message and request to deploy the wallet with ",(0,r.kt)("inlineCode",{parentName:"p"},"0.5 ever"),"."),(0,r.kt)("p",null,"During the computation phase, ",(0,r.kt)("inlineCode",{parentName:"p"},"TVM")," will queue the wallet creation request with ",(0,r.kt)("inlineCode",{parentName:"p"},"0.5 ever"),", and then the reverse transfer creation intention, with the value of ",(0,r.kt)("inlineCode",{parentName:"p"},"1 ever - gas")," (let\u2019s say the price of gas is ",(0,r.kt)("inlineCode",{parentName:"p"},"0.01 ever"),"), i.e. ",(0,r.kt)("inlineCode",{parentName:"p"},"0.99 ever"),"."),(0,r.kt)("p",null,"As a result, we will have two outgoing messages with ",(0,r.kt)("inlineCode",{parentName:"p"},"0.5")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"0.99 ever"),", and only ",(0,r.kt)("inlineCode",{parentName:"p"},"1 ever")," in the incoming message."),(0,r.kt)("p",null,"The correct way to write this function is as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"function deployWallet(\n    uint256 _wallet_public_key,\n    uint128 _deploy_evers\n) external {\n    tvm.rawReserve(address(this).balance - msg.value, 2);\n\n    TvmCell stateInit = tvm.buildStateInit({\n        contr: TokenWalletContract,\n        varInit: {\n            root_address: address(this),\n            wallet_code: wallet_code\n        },\n        pubkey: _wallet_public_key,\n        code: wallet_code\n    });\n\n    new TokenWalletContract{\n        stateInit: stateInit,\n        value: _deploy_evers,\n        wid: address(this).wid,\n        flag: 0\n    }();\n\n    msg.sender.transfer({ value: 0, bounce: false, flag: 128 });\n}\n")),(0,r.kt)("p",null,"What we actually have to do first it to call ",(0,r.kt)("inlineCode",{parentName:"p"},"tvm.rawReserve"),", which is like sending a message to yourself, with a ",(0,r.kt)("inlineCode",{parentName:"p"},"value")," equal to the initial balance of the contract."),(0,r.kt)("p",null,"Then we deploy the wallet with ",(0,r.kt)("inlineCode",{parentName:"p"},"_deploy_evers"),", and at the end, all the money that is left on the balance after the first two messages is sent back to the caller."),(0,r.kt)("p",null,"This function is guaranteed not to spend the money on the contract. If, in the action phase it does not have enough money to send a message, it will simply be aborted."),(0,r.kt)("p",null,"The most important thing from the chapter above, when processing internal messages, is this:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If you apply a ",(0,r.kt)("inlineCode",{parentName:"li"},"value")," that is not ",(0,r.kt)("inlineCode",{parentName:"li"},"0")," to a message, always call ",(0,r.kt)("inlineCode",{parentName:"li"},"tvm.rawReserve")," first."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Flag 64")," can only be used if your transaction is only sending one outgoing message.")))}p.isMDXComponent=!0}}]);