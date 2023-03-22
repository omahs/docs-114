"use strict";(self.webpackChunkeverscale_docs_website=self.webpackChunkeverscale_docs_website||[]).push([[5756],{3905:(e,n,a)=>{a.d(n,{Zo:()=>c,kt:()=>g});var t=a(7294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function l(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function s(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function i(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=t.createContext({}),o=function(e){var n=t.useContext(d),a=n;return e&&(a="function"==typeof e?e(n):s(s({},n),e)),a},c=function(e){var n=o(e.components);return t.createElement(d.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=o(a),u=r,g=p["".concat(d,".").concat(u)]||p[u]||m[u]||l;return a?t.createElement(g,s(s({ref:n},c),{},{components:a})):t.createElement(g,s({ref:n},c))}));function g(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=a.length,s=new Array(l);s[0]=u;var i={};for(var d in n)hasOwnProperty.call(n,d)&&(i[d]=n[d]);i.originalType=e,i[p]="string"==typeof e?e:r,s[1]=i;for(var o=2;o<l;o++)s[o]=a[o];return t.createElement.apply(null,s)}return t.createElement.apply(null,a)}u.displayName="MDXCreateElement"},5227:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>o});var t=a(7462),r=(a(7294),a(3905));const l={title:"4.1. Non-Fungible Token",sidebar_position:1,slug:"/standard/TIP-4.1"},s="Non-Fungible Token (TIP-4.1)",i={unversionedId:"standard/TIP-4/1",id:"standard/TIP-4/1",title:"4.1. Non-Fungible Token",description:"Requires: TIP-6.1",source:"@site/../../src/standard/TIP-4/1.md",sourceDirName:"standard/TIP-4",slug:"/standard/TIP-4.1",permalink:"/standard/TIP-4.1",draft:!1,editUrl:"https://github.com/everscale-org/docs/edit/main/.build/website/../../src/standard/TIP-4/1.md",tags:[],version:"current",lastUpdatedAt:1679528395,formattedLastUpdatedAt:"Mar 22, 2023",sidebarPosition:1,frontMatter:{title:"4.1. Non-Fungible Token",sidebar_position:1,slug:"/standard/TIP-4.1"},sidebar:"tutorialSidebar",previous:{title:"Core description",permalink:"/standard/TIP-4"},next:{title:"4.2. JSON Metadata",permalink:"/standard/TIP-4.2"}},d={},o=[{value:"Abstract",id:"abstract",level:2},{value:"Motivation",id:"motivation",level:2},{value:"Specification",id:"specification",level:2},{value:"Collection",id:"collection",level:2},{value:"TIP4_1Collection.totalSupply()",id:"tip4_1collectiontotalsupply",level:3},{value:"TIP4_1Collection.nftCode()",id:"tip4_1collectionnftcode",level:3},{value:"TIP4_1Collection.nftCodeHash()",id:"tip4_1collectionnftcodehash",level:3},{value:"TIP4_1Collection.nftAddress()",id:"tip4_1collectionnftaddress",level:3},{value:"Events",id:"events",level:3},{value:"Mint and burn NFT",id:"mint-and-burn-nft",level:3},{value:"NFT",id:"nft",level:2},{value:"TIP4_1NFT.getInfo()",id:"tip4_1nftgetinfo",level:3},{value:"TIP4_1NFT.changeOwner()",id:"tip4_1nftchangeowner",level:3},{value:"TIP4_1NFT.changeManager()",id:"tip4_1nftchangemanager",level:3},{value:"TIP4_1NFT.transfer()",id:"tip4_1nfttransfer",level:3},{value:"NFT events",id:"nft-events",level:3},{value:"Mint NFT",id:"mint-nft",level:3},{value:"Burn NFT",id:"burn-nft",level:3},{value:"ChangeOwner callback processing",id:"changeowner-callback-processing",level:3},{value:"ChangeManager callback processing",id:"changemanager-callback-processing",level:3},{value:"Transfer callback processing",id:"transfer-callback-processing",level:3},{value:"Visualization",id:"visualization",level:2},{value:"Legend",id:"legend",level:3},{value:"<code>Collection</code> deployment",id:"collection-deployment",level:3},{value:"Minting",id:"minting",level:3},{value:"Burning",id:"burning",level:3},{value:"Change owner",id:"change-owner",level:3},{value:"Change manager",id:"change-manager",level:3},{value:"Example how to use NFT. Put on sell using <code>changeManager()</code>",id:"example-how-to-use-nft-put-on-sell-using-changemanager",level:3},{value:"Example how to use NFT. Buy using <code>changeOwner()</code>",id:"example-how-to-use-nft-buy-using-changeowner",level:3},{value:"Example how to use NFT. Put on sell by TIP-3.1 tokens",id:"example-how-to-use-nft-put-on-sell-by-tip-31-tokens",level:3},{value:"Example how to use NFT. Buy for TIP-3.1 tokens",id:"example-how-to-use-nft-buy-for-tip-31-tokens",level:3},{value:"References",id:"references",level:2}],c={toc:o},p="wrapper";function m(e){let{components:n,...l}=e;return(0,r.kt)(p,(0,t.Z)({},c,l,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"non-fungible-token-tip-41"},"Non-Fungible Token (TIP-4.1)"),(0,r.kt)("p",null,"Requires: ",(0,r.kt)("a",{parentName:"p",href:"/standard/TIP-6.1"},"TIP-6.1")),(0,r.kt)("h2",{id:"abstract"},"Abstract"),(0,r.kt)("p",null,"The following standard allows for implementing a standard API for NFTs within smart contracts. General information about NFT collection is stored in the NFT collection contract. Each NFT deployed in separate smart contracts and links to NFT collection contract."),(0,r.kt)("p",null,"This standard provides basic functionality to create, track and transfer NFTs."),(0,r.kt)("h2",{id:"motivation"},"Motivation"),(0,r.kt)("p",null,"A standard interface allows any NFT to be re-used by other applications: wallets, explorers, marketplaces, etc."),(0,r.kt)("h2",{id:"specification"},"Specification"),(0,r.kt)("p",null,"The keywords \u201cMUST\u201d, \u201cMUST NOT\u201d, \u201cREQUIRED\u201d, \u201cSHALL\u201d, \u201cSHALL NOT\u201d, \u201cSHOULD\u201d, \u201cSHOULD NOT\u201d, \u201cRECOMMENDED\u201d, \u201cMAY\u201d, and \u201cOPTIONAL\u201d in this document are to be interpreted as described in ",(0,r.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc2119"},"RFC 2119"),"."),(0,r.kt)("h2",{id:"collection"},"Collection"),(0,r.kt)("p",null,"The contract represents shared information about NFT collection and logic for creation of NFTs and burn of NFTs."),(0,r.kt)("p",null,"Every TIP4.1 compliant collection contract must implement the ",(0,r.kt)("inlineCode",{parentName:"p"},"TIP4_1Collection")," interface and ",(0,r.kt)("a",{parentName:"p",href:"/standard/TIP-6.1"},"TIP-6.1")," interfaces"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"pragma ton-solidity >= 0.58.0;\n\ninterface TIP4_1Collection {\n\n    /// @notice This event emits when NFTs are created\n    /// @param id Unique NFT id\n    /// @param nft Address NFT contact\n    /// @param owner Address of NFT owner\n    /// @param manager Address of NFT manager\n    /// @param creator Address of creator that initialize mint NFT\n    event NftCreated(uint256 id, address nft, address owner, address manager, address creator);\n\n    /// @notice This event emits when NFTs are burned\n    /// @param id Unique NFT id\n    /// @param nft Address NFT contact\n    /// @param owner Address of NFT owner when it burned\n    /// @param manager Address of NFT manager when it burned\n    event NftBurned(uint256 id, address nft, address owner, address manager);\n\n\n    /// @notice Count active NFTs for this collection\n    /// @return count A count of active NFTs minted by this contract except for burned NFTs\n    function totalSupply() external view responsible returns (uint128 count);\n\n    /// @notice Returns the NFT code\n    /// @return code Returns the NFT code as TvmCell\n    function nftCode() external view responsible returns (TvmCell code);\n\n    /// @notice Returns the NFT code hash\n    /// @return codeHash Returns the NFT code hash\n    function nftCodeHash() external view responsible returns (uint256 codeHash);\n\n    /// @notice Computes NFT address by unique NFT id\n    /// @dev Return unique address for all Ids. You find nothing by address for not a valid NFT\n    /// @param id Unique NFT id\n    /// @return nft Returns address of NFT contract\n    function nftAddress(uint256 id) external view responsible returns (address nft);\n}\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"NOTE")," The ",(0,r.kt)("a",{parentName:"p",href:"/standard/TIP-6.1"},"TIP-6.1")," identifier for this interface is ",(0,r.kt)("inlineCode",{parentName:"p"},"0x1217AAAB"),"."),(0,r.kt)("h3",{id:"tip4_1collectiontotalsupply"},"TIP4_1Collection.totalSupply()"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"function totalSupply() public view responsible returns (uint128 count);\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"count")," (",(0,r.kt)("inlineCode",{parentName:"li"},"uint128"),") -  A count of active NFTs")),(0,r.kt)("p",null,"The function return count of active NFTs. Value increased by one when NFT minted and decreased by one when NFT burned."),(0,r.kt)("h3",{id:"tip4_1collectionnftcode"},"TIP4_1Collection.nftCode()"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"function nftCode() public view responsible returns (TvmCell code);\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"code")," (",(0,r.kt)("inlineCode",{parentName:"li"},"TvmCell"),") - NFT code")),(0,r.kt)("p",null,"NFTs is a smart contract deployed from ",(0,r.kt)("inlineCode",{parentName:"p"},"collection")," smart contract use nftCode and id."),(0,r.kt)("h3",{id:"tip4_1collectionnftcodehash"},"TIP4_1Collection.nftCodeHash()"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"function nftCodeHash() public view responsible returns (uint256 codeHash);\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"codeHash")," (",(0,r.kt)("inlineCode",{parentName:"li"},"uint256"),") - NFT codeHash")),(0,r.kt)("p",null,"A codeHash allows search all smart contracts using base ",(0,r.kt)("a",{parentName:"p",href:"https://main.ton.dev/graphql"},"dApp")," functionality."),(0,r.kt)("h3",{id:"tip4_1collectionnftaddress"},"TIP4_1Collection.nftAddress()"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"function nftAddress(uint256 id) public view responsible returns (address nft);\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"id")," (",(0,r.kt)("inlineCode",{parentName:"li"},"uint256"),") - Unique NFT id"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"nft")," (",(0,r.kt)("inlineCode",{parentName:"li"},"address"),") - The NFT address")),(0,r.kt)("p",null,"Computes NFT address by unique NFT id. You can check the NFT for availability using base ",(0,r.kt)("a",{parentName:"p",href:"https://main.ton.dev/graphql"},"dApp")," functionality."),(0,r.kt)("h3",{id:"events"},"Events"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"event NftCreated(uint256 id, address nft, address owner, address manager, address creator);\nevent NftBurned(uint256 id, address nft, address owner, address manager);\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"id")," (",(0,r.kt)("inlineCode",{parentName:"li"},"uint256"),") - Unique NFT id"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"nft")," (",(0,r.kt)("inlineCode",{parentName:"li"},"address"),") - The NFT address"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"owner")," (",(0,r.kt)("inlineCode",{parentName:"li"},"address"),") - The initial\\last owner of the NFT"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"manager")," (",(0,r.kt)("inlineCode",{parentName:"li"},"address"),") - The initial\\last manager of the NFT"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"creator")," (",(0,r.kt)("inlineCode",{parentName:"li"},"address"),") - The initial address who initiate NFT deploy")),(0,r.kt)("p",null,"You must emit ",(0,r.kt)("inlineCode",{parentName:"p"},"NftCreated")," event when NFT minted."),(0,r.kt)("p",null,"You must emit ",(0,r.kt)("inlineCode",{parentName:"p"},"NftBurned")," event when NFT burned."),(0,r.kt)("h3",{id:"mint-and-burn-nft"},"Mint and burn NFT"),(0,r.kt)("p",null,"A function's signature is not included in the specification."),(0,r.kt)("p",null,"See the ",(0,r.kt)("a",{parentName:"p",href:"#Events"},"Events")," for your responsibilities when creating or burning NFTs."),(0,r.kt)("h2",{id:"nft"},"NFT"),(0,r.kt)("p",null,"The contract represents information about current NFT and control logic. Each NFT contains two roles:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"owner logic"),(0,r.kt)("li",{parentName:"ul"},"manager logic")),(0,r.kt)("p",null,"The owner\u2019s address is the address that owns this NFT. The owner can see NFT in wallets, marketplaces, apps. The owner can use the NFT for authorization, for proof in games etc."),(0,r.kt)("p",null,"Manager address is the address that controls this NFT. Manager can burn NFT, can change the owner or change the manager (transfer the manager role)."),(0,r.kt)("p",null,"Owner address and manager address can be same usually. When an NFT is put up for sale, it means that the manager's address is the address of the smart contract with the sell logic. It's same for farming logic or custom logic for use NFT."),(0,r.kt)("p",null,"Good practice is to set a manager address to a new owner address when owner changed."),(0,r.kt)("p",null,"Every TIP4.1 compliant NFT contract must implement the ",(0,r.kt)("inlineCode",{parentName:"p"},"TIP4_1NFT")," interface and ",(0,r.kt)("a",{parentName:"p",href:"/standard/TIP-6.1"},"TIP-6.1")," interfaces."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"pragma ton-solidity >= 0.58.0;\n\ninterface TIP4_1NFT {\n\n    struct CallbackParams {\n        uint128 value;      // ever value will be sent to address\n        TvmCell payload;    // custom payload will be proxied to address\n    }\n\n    /// @notice The event emits when NFT is created\n    /// @dev Emit the event when NFT is ready to use\n    /// @param id Unique NFT id\n    /// @param owner Address of NFT owner\n    /// @param manager Address of NFT manager\n    /// @param collection Address of collection smart contract that mint the NFT\n    event NftCreated(uint256 id, address owner, address manager, address collection);\n\n    /// @notice The event emits when NFT owner changed\n    /// @param oldOwner Address of NFT owner before owner changed\n    /// @param newOwner Address of new NFT owner\n    event OwnerChanged(address oldOwner, address newOwner);\n\n    /// @notice The event emits when NFT manager changed\n    /// @param oldManager Address of NFT manager before manager changed\n    /// @param newManager Address of new NFT manager\n    event ManagerChanged(address oldManager, address newManager);\n\n    /// @param id Unique NFT id\n    /// @param owner Address of NFT owner\n    /// @param manager Address of NFT manager\n    /// @param collection Address of collection smart contract, that mint the NFT\n    event NftBurned(uint256 id, address owner, address manager, address collection);\n\n    /// @notice NFT info\n    /// @return id Unique NFT id\n    /// @return owner Address of NFT owner\n    /// @return manager Address of NFT manager\n    /// @return collection Address of collection smart contract\n    function getInfo() external view responsible returns(uint256 id, address owner, address manager, address collection);\n\n    /// @notice Change NFT owner\n    /// @dev Invoked from manager address only\n    /// @dev Emit OwnerChanged\n    /// @param newOwner New owner of NFT\n    /// @param sendGasTo Address to send remaining gas\n    /// @param callbacks Callbacks array to send by addresses. It can be empty\n    function changeOwner(address newOwner, address sendGasTo, mapping(address => CallbackParams) callbacks) external;\n\n    /// @notice Change NFT manager\n    /// @dev Invoked from manager address only\n    /// @dev Emit ManagerChanged\n    /// @param newManager New manager of NFT\n    /// @param sendGasTo Address to send remaining gas\n    /// @param callbacks Callbacks array to send by addresses. It can be empty\n    function changeManager(address newManager, address sendGasTo, mapping(address => CallbackParams) callbacks) external;\n\n    /// @notice Change NFT owner and manager\n    /// @dev Invoked from manager address only\n    /// @dev Emit OwnerChanged\n    /// @dev Emit ManagerChanged\n    /// @param to New NFT owner and manager\n    /// @param sendGasTo Address to send remaining gas\n    /// @param callbacks Callbacks array to send by addresses. It can be empty\n    function transfer(address to, address sendGasTo, mapping(address => CallbackParams) callbacks) external;\n}\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"NOTE")," The ",(0,r.kt)("a",{parentName:"p",href:"/standard/TIP-6.1"},"TIP-6.1")," identifier for this interface is ",(0,r.kt)("inlineCode",{parentName:"p"},"0x78084F7E"),"."),(0,r.kt)("h3",{id:"tip4_1nftgetinfo"},"TIP4_1NFT.getInfo()"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"function getInfo() public view responsible returns(uint256 id, address owner, address manager, address collection);\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"id")," (",(0,r.kt)("inlineCode",{parentName:"li"},"uint256"),") -  Unique NFT id"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"owner")," (",(0,r.kt)("inlineCode",{parentName:"li"},"address"),") - The owner of the NFT"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"manager")," (",(0,r.kt)("inlineCode",{parentName:"li"},"address"),") - The manager of the NFT"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"collection")," (",(0,r.kt)("inlineCode",{parentName:"li"},"address"),") - The NFT collection address")),(0,r.kt)("h3",{id:"tip4_1nftchangeowner"},"TIP4_1NFT.changeOwner()"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"function changeOwner(address newOwner, address sendGasTo, mapping(address => CallbackParams) callbacks) external;\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"newOwner")," (",(0,r.kt)("inlineCode",{parentName:"li"},"address"),") -  New owner of NFT"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sendGasTo")," (",(0,r.kt)("inlineCode",{parentName:"li"},"address"),") - Address to send remaining gas. It sent to all callback addresses, too"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"callbacks")," (",(0,r.kt)("inlineCode",{parentName:"li"},"mapping(address => CallbackParams)"),") - Callbacks uses for asynchronous calls to another addresses")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"CallbackParams:")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field name"),(0,r.kt)("th",{parentName:"tr",align:null},"type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"value")),(0,r.kt)("td",{parentName:"tr",align:null},"uint128"),(0,r.kt)("td",{parentName:"tr",align:null},"Ever values that send with callback")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"payload")),(0,r.kt)("td",{parentName:"tr",align:null},"TvmCell"),(0,r.kt)("td",{parentName:"tr",align:null},"Custom payload will send to address")))),(0,r.kt)("p",null,"Change NFT owner. You must emit ",(0,r.kt)("inlineCode",{parentName:"p"},"OwnerChanged")," event when NFT owner changed. The NFT sends callbacks if ",(0,r.kt)("inlineCode",{parentName:"p"},"callbacks")," not empty."),(0,r.kt)("h3",{id:"tip4_1nftchangemanager"},"TIP4_1NFT.changeManager()"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"function changeManager(address newManager, address sendGasTo, mapping(address => CallbackParams) callbacks) external;\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"newManager")," (",(0,r.kt)("inlineCode",{parentName:"li"},"address"),") - New manager of NFT"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sendGasTo")," (",(0,r.kt)("inlineCode",{parentName:"li"},"address"),") - Address to send remaining gas. It sent to all callback addresses too"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"callbacks")," (",(0,r.kt)("inlineCode",{parentName:"li"},"mapping(address => CallbackParams)"),") - Callbacks uses for asynchronous calls to another addresses")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"CallbackParams:")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field name"),(0,r.kt)("th",{parentName:"tr",align:null},"type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"value")),(0,r.kt)("td",{parentName:"tr",align:null},"uint128"),(0,r.kt)("td",{parentName:"tr",align:null},"Ever values that send with callback")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"payload")),(0,r.kt)("td",{parentName:"tr",align:null},"TvmCell"),(0,r.kt)("td",{parentName:"tr",align:null},"Custom payload will send to address")))),(0,r.kt)("p",null,"Change NFT manager. You must emit ",(0,r.kt)("inlineCode",{parentName:"p"},"ManagerChanged")," event when NFT owner changed. The NFT sends callbacks if ",(0,r.kt)("inlineCode",{parentName:"p"},"callbacks")," not empty."),(0,r.kt)("h3",{id:"tip4_1nfttransfer"},"TIP4_1NFT.transfer()"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"function transfer(address to, address sendGasTo, mapping(address => CallbackParams) callbacks) external;\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"to")," (",(0,r.kt)("inlineCode",{parentName:"li"},"address"),") - New NFT owner and manager"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sendGasTo")," (",(0,r.kt)("inlineCode",{parentName:"li"},"address"),") - Address to send remaining gas. It sent to all callback addresses too"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"callbacks")," (",(0,r.kt)("inlineCode",{parentName:"li"},"mapping(address => CallbackParams)"),") - Callbacks uses for asynchronous calls to another addresses")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"CallbackParams:")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field name"),(0,r.kt)("th",{parentName:"tr",align:null},"type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"value")),(0,r.kt)("td",{parentName:"tr",align:null},"uint128"),(0,r.kt)("td",{parentName:"tr",align:null},"Ever values that send with callback")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"payload")),(0,r.kt)("td",{parentName:"tr",align:null},"TvmCell"),(0,r.kt)("td",{parentName:"tr",align:null},"Custom payload will send to address")))),(0,r.kt)("p",null,"Change NFT manager. You must emit ",(0,r.kt)("inlineCode",{parentName:"p"},"OwnerChanged")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"ManagerChanged")," events when NFT owner changed. The NFT sends callbacks if ",(0,r.kt)("inlineCode",{parentName:"p"},"callbacks")," not empty."),(0,r.kt)("h3",{id:"nft-events"},"NFT events"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"event NftCreated(uint256 id, address owner, address manager, address collection);\nevent OwnerChanged(address oldOwner, address newOwner);\nevent ManagerChanged(address oldManager, address newManager);\nevent NftBurned(uint256 id, address owner, address manager, address collection);\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"id")," (",(0,r.kt)("inlineCode",{parentName:"li"},"uint256"),") - Unique NFT id"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"owner")," (",(0,r.kt)("inlineCode",{parentName:"li"},"address"),") - The initial\\last owner of the NFT"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"manager")," (",(0,r.kt)("inlineCode",{parentName:"li"},"address"),") - The initial\\last manager of the NFT"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"collection")," (",(0,r.kt)("inlineCode",{parentName:"li"},"address"),") - The collection address who initiate NFT deploy")),(0,r.kt)("p",null,"You must emit ",(0,r.kt)("inlineCode",{parentName:"p"},"NftCreated")," event, when NFT created, initialized and ready to use."),(0,r.kt)("p",null,"You must emit ",(0,r.kt)("inlineCode",{parentName:"p"},"OwnerChanged")," event every time when owner address changed."),(0,r.kt)("p",null,"You must emit ",(0,r.kt)("inlineCode",{parentName:"p"},"ManagerChanged")," event every time when manager address changed."),(0,r.kt)("p",null,"You must emit ",(0,r.kt)("inlineCode",{parentName:"p"},"NftBurned")," event when NFT burned."),(0,r.kt)("p",null,"Events emit when NFTs are created, burned or moved to a new owner\\manager."),(0,r.kt)("h3",{id:"mint-nft"},"Mint NFT"),(0,r.kt)("p",null,"A function and constructor signature is not included in the specification."),(0,r.kt)("p",null,"The NFT must deploy from collection smart contract."),(0,r.kt)("p",null,"The NFT must emit ",(0,r.kt)("inlineCode",{parentName:"p"},"NftCreated")," event after NFT deployed and ready to use."),(0,r.kt)("p",null,"See the ","[NFT events]","(#NFT events) for your responsibilities when creating NFT."),(0,r.kt)("h3",{id:"burn-nft"},"Burn NFT"),(0,r.kt)("p",null,"A function signature is not included in the specification."),(0,r.kt)("p",null,"The NFT must emit ",(0,r.kt)("inlineCode",{parentName:"p"},"NftBurned")," event before NFT burned."),(0,r.kt)("p",null,"The NFT must send an internal message to collection contract before NFT burned."),(0,r.kt)("p",null,"See the ",(0,r.kt)("a",{parentName:"p",href:"#Events"},"Events")," for your responsibilities when burning NFT."),(0,r.kt)("h3",{id:"changeowner-callback-processing"},"ChangeOwner callback processing"),(0,r.kt)("p",null,"Smart contract that processing callback message must implement."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"interface INftChangeOwner {\n\n    struct CallbackParams {\n        uint128 value;      // ever value will send to address\n        TvmCell payload;    // custom payload will be proxied to address\n    }\n\n    /// @notice change owner callback processing\n    /// @param id Unique NFT id\n    /// @param manager Address of NFT manager\n    /// @param oldOwner Address of NFT owner before owner changed\n    /// @param newOwner Address of new NFT owner\n    /// @param collection Address of collection smart contract, that mint the NFT\n    /// @param sendGasTo Address to send remaining gas\n    /// @param payload Custom payload\n    function onNftChangeOwner(\n        uint256 id,\n        address manager,\n        address oldOwner,\n        address newOwner,\n        address collection,\n        address sendGasTo,\n        TvmCell payload\n    ) external;\n}\n")),(0,r.kt)("h3",{id:"changemanager-callback-processing"},"ChangeManager callback processing"),(0,r.kt)("p",null,"Smart contract that processing callback message must implement."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"interface INftChangeManager {\n    struct CallbackParams {\n        uint128 value;      // ever value will send to address\n        TvmCell payload;    // custom payload will proxying to address\n    }\n\n    /// @notice change owner callback processing\n    /// @param id Unique NFT id\n    /// @param owner Address of NFT owner\n    /// @param oldManager Address of NFT manager before manager changed\n    /// @param newManager Address of new NFT manager\n    /// @param collection Address of collection smart contract that mint the NFT\n    /// @param sendGasTo - Address to send remaining gas\n    /// @param payload - Custom payload\n    function onNftChangeManager(\n        uint256 id,\n        address owner,\n        address oldManager,\n        address newManager,\n        address collection,\n        address sendGasTo,\n        TvmCell payload\n    ) external;\n}\n")),(0,r.kt)("h3",{id:"transfer-callback-processing"},"Transfer callback processing"),(0,r.kt)("p",null,"Smart contract that processing callback message must implement."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"interface INftTransfer {\n\n    struct CallbackParams {\n        uint128 value;      // ever value will send to address\n        TvmCell payload;    // custom payload will proxying to address\n    }\n\n    /// @notice change owner callback processing\n    /// @param id Unique NFT id\n    /// @param oldOwner Address of NFT owner before transfer\n    /// @param newOwner Address of new NFT owner\n    /// @param oldManager Address of NFT manager before transfer\n    /// @param newManager Address of new NFT manager\n    /// @param collection Address of collection smart contract that mint the NFT\n    /// @param sendGasTo Address to send remaining gas\n    /// @param payload Custom payload\n    function onNftTransfer(\n        uint256 id,\n        address oldOwner,\n        address newOwner,\n        address oldManager,\n        address newManager,\n        address collection,\n        address sendGasTo,\n        TvmCell payload\n    ) external;\n}\n")),(0,r.kt)("h2",{id:"visualization"},"Visualization"),(0,r.kt)("h3",{id:"legend"},"Legend"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Legend",src:a(841).Z,width:"356",height:"524"})),(0,r.kt)("h3",{id:"collection-deployment"},(0,r.kt)("inlineCode",{parentName:"h3"},"Collection")," deployment"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Collection",src:a(5644).Z,width:"841",height:"584"})),(0,r.kt)("h3",{id:"minting"},"Minting"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Minting",src:a(5862).Z,width:"841",height:"711"})),(0,r.kt)("h3",{id:"burning"},"Burning"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Burning",src:a(1044).Z,width:"841",height:"583"})),(0,r.kt)("h3",{id:"change-owner"},"Change owner"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Change owner",src:a(869).Z,width:"841",height:"565"})),(0,r.kt)("h3",{id:"change-manager"},"Change manager"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Change manager",src:a(7121).Z,width:"841",height:"565"})),(0,r.kt)("h3",{id:"example-how-to-use-nft-put-on-sell-using-changemanager"},"Example how to use NFT. Put on sell using ",(0,r.kt)("inlineCode",{parentName:"h3"},"changeManager()")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Sell",src:a(1437).Z,width:"509",height:"524"})),(0,r.kt)("h3",{id:"example-how-to-use-nft-buy-using-changeowner"},"Example how to use NFT. Buy using ",(0,r.kt)("inlineCode",{parentName:"h3"},"changeOwner()")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Buy",src:a(9645).Z,width:"420",height:"524"})),(0,r.kt)("h3",{id:"example-how-to-use-nft-put-on-sell-by-tip-31-tokens"},"Example how to use NFT. Put on sell by ",(0,r.kt)("a",{parentName:"h3",href:"/standard/TIP-3.1"},"TIP-3.1")," tokens"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"TIP3 sell",src:a(1914).Z,width:"841",height:"828"})),(0,r.kt)("h3",{id:"example-how-to-use-nft-buy-for-tip-31-tokens"},"Example how to use NFT. Buy for ",(0,r.kt)("a",{parentName:"h3",href:"/standard/TIP-3.1"},"TIP-3.1")," tokens"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"TIP3 buy",src:a(5994).Z,width:"841",height:"548"})),(0,r.kt)("h2",{id:"references"},"References"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://eips.ethereum.org/EIPS/eip-721"},"Ethereum EIP-721")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.metaplex.com/token-metadata/specification"},"Solana v1.2.0")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/ton-blockchain/TIPs/issues/62"},"TON NFT"),", ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ton-blockchain/TIPs/issues/64"},"TON DATA")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://gitlab.com/tezos/tzip/-/blob/master/proposals/tzip-12/tzip-12.md"},"Tezos TZIP12"))))}m.isMDXComponent=!0},1044:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"assets/images/burn-8f70b736a356c382984c7badf5d5544f.svg"},9645:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"assets/images/buy-bf982995b1a10a69e3b1ed779fa70de8.svg"},7121:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"assets/images/changeManager-17c05a3c5a1b1185bbd32be25d28bc4d.svg"},869:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"assets/images/changeOwner-01e4586fd2bae16744cb05d73d4486d9.svg"},5644:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"assets/images/collection-1db764b896e255067f0dcdd7bd4aa471.svg"},841:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"assets/images/legend1-3de5d1dd03117f26abf5cb7f454c8d39.svg"},5862:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"assets/images/mint-69503ef4ee4ee089e63cdde248cd2a86.svg"},1437:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"assets/images/sell-829236af6b19a0cd192f09187a0908bc.svg"},5994:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"assets/images/tip3buy-583f9627524acd0a6176941ea5ad50b2.svg"},1914:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"assets/images/tip3sell-f90dcbbf46a1a51989e591add8eb01f9.svg"}}]);