"use strict";(self.webpackChunkeverscale_docs_website=self.webpackChunkeverscale_docs_website||[]).push([[6247],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var a=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=a.createContext({}),d=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=d(e.components);return a.createElement(s.Provider,{value:n},e.children)},c="mdxType",k={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=d(t),u=l,m=c["".concat(s,".").concat(u)]||c[u]||k[u]||r;return t?a.createElement(m,o(o({ref:n},p),{},{components:t})):a.createElement(m,o({ref:n},p))}));function m(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,o=new Array(r);o[0]=u;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[c]="string"==typeof e?e:l,o[1]=i;for(var d=2;d<r;d++)o[d]=t[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},815:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>k,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var a=t(7462),l=(t(7294),t(3905));const r={title:"2. Internally-owned Fungible Token Interface",sidebar_position:1,slug:"/standard/TIP-3.2"},o="Internally-owned fungible Token Interface (TIP-3.2)",i={unversionedId:"standard/TIP-3/2",id:"standard/TIP-3/2",title:"2. Internally-owned Fungible Token Interface",description:"Requires: TIP-3.1",source:"@site/../../src/standard/TIP-3/2.md",sourceDirName:"standard/TIP-3",slug:"/standard/TIP-3.2",permalink:"/standard/TIP-3.2",draft:!1,editUrl:"https://github.com/everscale-org/docs/edit/main/.build/website/../../src/standard/TIP-3/2.md",tags:[],version:"current",lastUpdatedAt:1693835149,formattedLastUpdatedAt:"Sep 4, 2023",sidebarPosition:1,frontMatter:{title:"2. Internally-owned Fungible Token Interface",sidebar_position:1,slug:"/standard/TIP-3.2"},sidebar:"tutorialSidebar",previous:{title:"1. Fungible token",permalink:"/standard/TIP-3.1"},next:{title:"Core description",permalink:"/standard/TIP-4"}},s={},d=[{value:"Abstract",id:"abstract",level:2},{value:"Motivation",id:"motivation",level:2},{value:"Specification",id:"specification",level:2},{value:"Notes",id:"notes",level:3},{value:"Token root",id:"token-root",level:3},{value:"Token wallet address",id:"token-wallet-address",level:4},{value:"Deploy token wallet",id:"deploy-token-wallet",level:4},{value:"Mint tokens",id:"mint-tokens",level:4},{value:"Accept burn",id:"accept-burn",level:4},{value:"Callbacks",id:"callbacks",level:4},{value:"Burn callback",id:"burn-callback",level:5},{value:"Token wallet",id:"token-wallet",level:3},{value:"Owner",id:"owner",level:4},{value:"Balance",id:"balance",level:4},{value:"Transfer tokens to the recipient",id:"transfer-tokens-to-the-recipient",level:4},{value:"Transfer tokens to the token wallet",id:"transfer-tokens-to-the-token-wallet",level:4},{value:"Burn tokens by token wallet owner",id:"burn-tokens-by-token-wallet-owner",level:4},{value:"Burn token by token root",id:"burn-token-by-token-root",level:4},{value:"Accept mint",id:"accept-mint",level:4},{value:"Accept transfer",id:"accept-transfer",level:4},{value:"Callbacks",id:"callbacks-1",level:4},{value:"Incoming transfer callback",id:"incoming-transfer-callback",level:5},{value:"Mint callback",id:"mint-callback",level:5},{value:"Bounced transfer callback",id:"bounced-transfer-callback",level:5},{value:"Bounced burn callback",id:"bounced-burn-callback",level:5},{value:"Implementation",id:"implementation",level:2}],p={toc:d},c="wrapper";function k(e){let{components:n,...t}=e;return(0,l.kt)(c,(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"internally-owned-fungible-token-interface-tip-32"},"Internally-owned fungible Token Interface (TIP-3.2)"),(0,l.kt)("p",null,"Requires: ",(0,l.kt)("a",{parentName:"p",href:"/standard/TIP-3.1"},"TIP-3.1")),(0,l.kt)("h2",{id:"abstract"},"Abstract"),(0,l.kt)("p",null,"The following standard describes token, where token wallets are owned internally by any Everscale contract (e.g. multisignature wallet). Any operation, such as burn or transfer, can be initiated with the internal message from the owner contract."),(0,l.kt)("h2",{id:"motivation"},"Motivation"),(0,l.kt)("p",null,"The ",(0,l.kt)("a",{parentName:"p",href:"/standard/TIP-3.1"},"TIP-3.1")," standard describes the key architecture principles and some common methods for token contracts in the Everscale network. While it does not answer the following questions:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"How to create token wallet"),(0,l.kt)("li",{parentName:"ul"},"How token wallets are owned"),(0,l.kt)("li",{parentName:"ul"},"How to transfer, mint or burn tokens"),(0,l.kt)("li",{parentName:"ul"},"How the tokens recipient can handle the incoming transfer, etc")),(0,l.kt)("h2",{id:"specification"},"Specification"),(0,l.kt)("p",null,"The keywords \u201cMUST\u201d, \u201cMUST NOT\u201d, \u201cREQUIRED\u201d, \u201cSHALL\u201d, \u201cSHALL NOT\u201d, \u201cSHOULD\u201d, \u201cSHOULD NOT\u201d, \u201cRECOMMENDED\u201d, \u201cMAY\u201d, and \u201cOPTIONAL\u201d in this document are to be interpreted as described in RFC 2119."),(0,l.kt)("h3",{id:"notes"},"Notes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Zero address is ",(0,l.kt)("inlineCode",{parentName:"li"},"0:0000000000000000000000000000000000000000000000000000000000000000"))),(0,l.kt)("h3",{id:"token-root"},"Token root"),(0,l.kt)("h4",{id:"token-wallet-address"},"Token wallet address"),(0,l.kt)("p",null,"Returns token wallet address, owned by ",(0,l.kt)("inlineCode",{parentName:"p"},"owner"),". MUST NOT deploy token wallet."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function walletOf(address owner) external view responsible returns (address);\n")),(0,l.kt)("h4",{id:"deploy-token-wallet"},"Deploy token wallet"),(0,l.kt)("p",null,"Deploys token wallet, owned by ",(0,l.kt)("inlineCode",{parentName:"p"},"owner"),". Returns token wallet address."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function deployWallet(\n    address owner,\n    uint128 deployWalletValue\n) external responsible returns (address);\n")),(0,l.kt)("h4",{id:"mint-tokens"},"Mint tokens"),(0,l.kt)("p",null,"Mints ",(0,l.kt)("inlineCode",{parentName:"p"},"amount")," amount of tokens to the token wallet, owned by ",(0,l.kt)("inlineCode",{parentName:"p"},"recipient"),"."),(0,l.kt)("p",null,"If ",(0,l.kt)("inlineCode",{parentName:"p"},"deployWalletValue")," is greater than 0, token root MUST deploy token wallet for ",(0,l.kt)("inlineCode",{parentName:"p"},"recipient"),". Otherwise, it mints tokens without deploying token wallet, which may lead to failed minting."),(0,l.kt)("p",null,"Calls the ",(0,l.kt)("inlineCode",{parentName:"p"},"acceptMint")," method on the recipient token wallet. If ",(0,l.kt)("inlineCode",{parentName:"p"},"notify")," is ",(0,l.kt)("inlineCode",{parentName:"p"},"true"),", than the ",(0,l.kt)("inlineCode",{parentName:"p"},"onAcceptTokensMint")," callback message will be sent to the ",(0,l.kt)("inlineCode",{parentName:"p"},"recipient"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function mint(\n    uint128 amount,\n    address recipient,\n    uint128 deployWalletValue,\n    address remainingGasTo,\n    bool notify,\n    TvmCell payload\n) external;\n")),(0,l.kt)("h4",{id:"accept-burn"},"Accept burn"),(0,l.kt)("p",null,"Accepts burning ",(0,l.kt)("inlineCode",{parentName:"p"},"amount")," amount of tokens from the token wallet, owned by ",(0,l.kt)("inlineCode",{parentName:"p"},"walletOwner"),"."),(0,l.kt)("p",null,"If ",(0,l.kt)("inlineCode",{parentName:"p"},"callbackTo")," is zero address, than all the remaining gas is transferred to the ",(0,l.kt)("inlineCode",{parentName:"p"},"remainingGasTo"),". Otherwise, message with ",(0,l.kt)("inlineCode",{parentName:"p"},"onAcceptTokensBurn")," callback is sent to the ",(0,l.kt)("inlineCode",{parentName:"p"},"callbackTo")," address."),(0,l.kt)("p",null,"Decreases the ",(0,l.kt)("inlineCode",{parentName:"p"},"totalSupply")," by ",(0,l.kt)("inlineCode",{parentName:"p"},"amount"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function acceptBurn(\n    uint128 amount,\n    address walletOwner,\n    address remainingGasTo,\n    address callbackTo,\n    TvmCell payload\n) external functionID(0x192B51B1);\n")),(0,l.kt)("h4",{id:"callbacks"},"Callbacks"),(0,l.kt)("h5",{id:"burn-callback"},"Burn callback"),(0,l.kt)("p",null,"Notifies the contract that the burn was accepted. MUST BE called from the token root."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function onAcceptTokensBurn(\n    uint128 amount,\n    address walletOwner,\n    address wallet,\n    address remainingGasTo,\n    TvmCell payload\n) external;\n")),(0,l.kt)("h3",{id:"token-wallet"},"Token wallet"),(0,l.kt)("h4",{id:"owner"},"Owner"),(0,l.kt)("p",null,"Returns the owner of the token wallet."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function owner() external view responsible returns (address);\n")),(0,l.kt)("h4",{id:"balance"},"Balance"),(0,l.kt)("p",null,"Returns the token balance of the token wallet."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function balance() external view responsible returns (uint128);\n")),(0,l.kt)("h4",{id:"transfer-tokens-to-the-recipient"},"Transfer tokens to the recipient"),(0,l.kt)("p",null,"Transfers ",(0,l.kt)("inlineCode",{parentName:"p"},"amount")," amount of tokens to the token wallet, owned by ",(0,l.kt)("inlineCode",{parentName:"p"},"recipient"),". Token wallet address is derived automatically."),(0,l.kt)("p",null,"If ",(0,l.kt)("inlineCode",{parentName:"p"},"deployWalletValue")," is greater than 0, token wallet MUST deploy token wallet for ",(0,l.kt)("inlineCode",{parentName:"p"},"recipient"),"."),(0,l.kt)("p",null,"Calls the ",(0,l.kt)("inlineCode",{parentName:"p"},"acceptTransfer")," on the recipient token wallet.  If ",(0,l.kt)("inlineCode",{parentName:"p"},"notify")," is ",(0,l.kt)("inlineCode",{parentName:"p"},"true"),", than the ",(0,l.kt)("inlineCode",{parentName:"p"},"onAcceptTokensTransfer")," callback message will be sent to the ",(0,l.kt)("inlineCode",{parentName:"p"},"recipient"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function transfer(\n    uint128 amount,\n    address recipient,\n    uint128 deployWalletValue,\n    address remainingGasTo,\n    bool notify,\n    TvmCell payload\n) external;\n")),(0,l.kt)("h4",{id:"transfer-tokens-to-the-token-wallet"},"Transfer tokens to the token wallet"),(0,l.kt)("p",null,"Transfers ",(0,l.kt)("inlineCode",{parentName:"p"},"amount")," amount of tokens to the ",(0,l.kt)("inlineCode",{parentName:"p"},"recipientTokenWallet"),"."),(0,l.kt)("p",null,"Calls the ",(0,l.kt)("inlineCode",{parentName:"p"},"acceptTransfer")," on the ",(0,l.kt)("inlineCode",{parentName:"p"},"recipientTokenWallet"),"."),(0,l.kt)("p",null,"Decreases the token wallet ",(0,l.kt)("inlineCode",{parentName:"p"},"balance")," by ",(0,l.kt)("inlineCode",{parentName:"p"},"amount"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function transferToWallet(\n    uint128 amount,\n    address recipientTokenWallet,\n    address remainingGasTo,\n    bool notify,\n    TvmCell payload\n) external;\n")),(0,l.kt)("h4",{id:"burn-tokens-by-token-wallet-owner"},"Burn tokens by token wallet owner"),(0,l.kt)("p",null,"Decreases the token wallet ",(0,l.kt)("inlineCode",{parentName:"p"},"balance")," by ",(0,l.kt)("inlineCode",{parentName:"p"},"amount"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function burn(\n    uint128 amount,\n    address remainingGasTo,\n    address callbackTo,\n    TvmCell payload\n) external;\n")),(0,l.kt)("h4",{id:"burn-token-by-token-root"},"Burn token by token root"),(0,l.kt)("p",null,"Decreases the token wallet ",(0,l.kt)("inlineCode",{parentName:"p"},"balance")," by ",(0,l.kt)("inlineCode",{parentName:"p"},"amount"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function burnByRoot(\n    uint128 amount,\n    address remainingGasTo,\n    address callbackTo,\n    TvmCell payload\n) external;\n")),(0,l.kt)("h4",{id:"accept-mint"},"Accept mint"),(0,l.kt)("p",null,"Accepts incoming mint for ",(0,l.kt)("inlineCode",{parentName:"p"},"amount")," amount of tokens. MUST be reverted if ",(0,l.kt)("inlineCode",{parentName:"p"},"msg.sender")," is not ",(0,l.kt)("inlineCode",{parentName:"p"},"root"),"."),(0,l.kt)("p",null,"Increases the token wallet ",(0,l.kt)("inlineCode",{parentName:"p"},"balance")," by ",(0,l.kt)("inlineCode",{parentName:"p"},"amount"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function acceptMint(\n    uint128 amount,\n    address remainingGasTo,\n    bool notify,\n    TvmCell payload\n) external functionID(0x4384F298);\n")),(0,l.kt)("h4",{id:"accept-transfer"},"Accept transfer"),(0,l.kt)("p",null,"Accepts incoming transfer for ",(0,l.kt)("inlineCode",{parentName:"p"},"amount")," amount of tokens from token wallet, owned ",(0,l.kt)("inlineCode",{parentName:"p"},"sender"),"."),(0,l.kt)("p",null,"If ",(0,l.kt)("inlineCode",{parentName:"p"},"notify")," is ",(0,l.kt)("inlineCode",{parentName:"p"},"false"),", than the remaining gas MUST be sent to the ",(0,l.kt)("inlineCode",{parentName:"p"},"remainingGasTo"),". Otherwise, the ",(0,l.kt)("inlineCode",{parentName:"p"},"onAcceptTokensTransfer")," callback MUST be sent to the token wallet ",(0,l.kt)("inlineCode",{parentName:"p"},"owner")," with the same ",(0,l.kt)("inlineCode",{parentName:"p"},"remainingGasTo")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"payload"),"."),(0,l.kt)("p",null,"Increases the token wallet ",(0,l.kt)("inlineCode",{parentName:"p"},"balance")," by ",(0,l.kt)("inlineCode",{parentName:"p"},"amount"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function acceptTransfer(\n    uint128 amount,\n    address sender,\n    address remainingGasTo,\n    bool notify,\n    TvmCell payload\n) external functionID(0x67A0B95F);\n")),(0,l.kt)("h4",{id:"callbacks-1"},"Callbacks"),(0,l.kt)("h5",{id:"incoming-transfer-callback"},"Incoming transfer callback"),(0,l.kt)("p",null,"Notifies token wallet's ",(0,l.kt)("inlineCode",{parentName:"p"},"owner")," that an incoming transfer was accepted."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function onAcceptTokensTransfer(\n    address tokenRoot,\n    uint128 amount,\n    address sender,\n    address senderWallet,\n    address remainingGasTo,\n    TvmCell payload\n) external;\n")),(0,l.kt)("h5",{id:"mint-callback"},"Mint callback"),(0,l.kt)("p",null,"Notifies token wallet's ",(0,l.kt)("inlineCode",{parentName:"p"},"owner")," that mint was accepted."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function onAcceptTokensMint(\n    address tokenRoot,\n    uint128 amount,\n    address remainingGasTo,\n    TvmCell payload\n) external;\n")),(0,l.kt)("h5",{id:"bounced-transfer-callback"},"Bounced transfer callback"),(0,l.kt)("p",null,"Notifies token wallet's ",(0,l.kt)("inlineCode",{parentName:"p"},"owner")," that token transfer was bounced."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function onBounceTokensTransfer(\n    address tokenRoot,\n    uint128 amount,\n    address revertedFrom\n) external;\n")),(0,l.kt)("h5",{id:"bounced-burn-callback"},"Bounced burn callback"),(0,l.kt)("p",null,"Notifies token wallet's ",(0,l.kt)("inlineCode",{parentName:"p"},"owner")," that burn was bounced."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function onBounceTokensBurn(\n    address tokenRoot,\n    uint128 amount\n) external;\n")),(0,l.kt)("h2",{id:"implementation"},"Implementation"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/broxus/tip3"},"TIP-3.2 implementation by Broxus"),". Upgradable version is also available.")))}k.isMDXComponent=!0}}]);