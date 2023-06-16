"use strict";(self.webpackChunkeverscale_docs_website=self.webpackChunkeverscale_docs_website||[]).push([[7315],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>b});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),p=o,b=u["".concat(i,".").concat(p)]||u[p]||m[p]||r;return n?a.createElement(b,l(l({ref:t},d),{},{components:n})):a.createElement(b,l({ref:t},d))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=p;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:o,l[1]=s;for(var c=2;c<r;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2936:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(7462),o=(n(7294),n(3905));const r={sidebar_position:4},l="Tutorial: Voting system",s={unversionedId:"develop/smart-contracts/voting-system",id:"develop/smart-contracts/voting-system",title:"Tutorial: Voting system",description:"Most leading blockchain networks implement decentralized voting systems. Everscale is no exception to this widespread practice.",source:"@site/../../src/develop/smart-contracts/voting-system.md",sourceDirName:"develop/smart-contracts",slug:"/develop/smart-contracts/voting-system",permalink:"/develop/smart-contracts/voting-system",draft:!1,editUrl:"https://github.com/everscale-org/docs/edit/main/.build/website/../../src/develop/smart-contracts/voting-system.md",tags:[],version:"current",lastUpdatedAt:1686822547,formattedLastUpdatedAt:"Jun 15, 2023",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Tutorial: Tokensale",permalink:"/develop/smart-contracts/tokensale"},next:{title:"Frontend and Backend recipes",permalink:"/develop/recipes"}},i={},c=[],d={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"tutorial-voting-system"},"Tutorial: Voting system"),(0,o.kt)("p",null,"Most leading blockchain networks implement decentralized voting systems. Everscale is no exception to this widespread practice. "),(0,o.kt)("p",null,"Let us move directly to an example of how such a system works in practice."),(0,o.kt)("p",null,"We will use a similar TIP-3 mechanic: having a root contract (Vote) and personal Wallets (Ballots). Every participant deploys a ballot for itself that has a ",(0,o.kt)("inlineCode",{parentName:"p"},"vote")," function, which will call the callback of the ",(0,o.kt)("inlineCode",{parentName:"p"},"Vote")," contract and pass the vote result into. Nevertheless, what if we want to provide voting rights only for some specific users? In this case, we will have to add an activate function in our Ballot contract, that will be called externally and only by our vote creator (external calls may be signed). "),(0,o.kt)("p",null,"No further ado. Let's start with familiar command"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npx locklift init --path my-smv\n")),(0,o.kt)("p",null,"As mentioned, we need to implement two smart contracts. There are no external dependencies for this guide. Start with the Vote contract."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity",metastring:'title="Vote.sol" showLineNumbers',title:'"Vote.sol"',showLineNumbers:!0},'pragma ever-solidity >= 0.61.2;\npragma AbiHeader expire;\npragma AbiHeader pubkey;\n\nimport "./Ballot.sol";\n\ncontract Vote {\n    uint16  static _nonce;\n    TvmCell static _ballotCode;\n\n    uint256 _managerPublicKey;\n    uint32  _acceptedCount;\n    uint32  _rejectedCount;\n\n    constructor(\n        uint256 managerPublicKey,\n        address sendRemainingGasTo\n    ) public {\n        tvm.accept();\n        tvm.rawReserve(0.1 ever, 0);\n        _managerPublicKey = managerPublicKey;\n        sendRemainingGasTo.transfer({ value: 0, flag: 128, bounce: false });\n    }\n}\n')),(0,o.kt)("p",null,"Next function we need - ",(0,o.kt)("inlineCode",{parentName:"p"},"deployBallot"),'. It realizes the popular "deploy contract from contract" mechanic well-described ',(0,o.kt)("a",{parentName:"p",href:"https://github.com/tonlabs/TON-Solidity-Compiler/blob/master/API.md#deploy-contract-from-contract"},"here"),". We should just use ",(0,o.kt)("inlineCode",{parentName:"p"},"tvm.buildStateInit")," function, fill ",(0,o.kt)("inlineCode",{parentName:"p"},"varInit")," section with future values of our ",(0,o.kt)("inlineCode",{parentName:"p"},"Ballot")," contract static variables and use the keyword ",(0,o.kt)("inlineCode",{parentName:"p"},"new")," for deploying."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity",metastring:'title="Vote.sol" showLineNumbers',title:'"Vote.sol"',showLineNumbers:!0},"pragma ever-solidity >= 0.61.2;\n...\n\ncontract Vote {\n   ...\n    function deployBallot(address owner, address sendRemainingGasTo) external view {\n        tvm.rawReserve(0.1 ever, 0);\n        TvmCell ballotStateInit = tvm.buildStateInit({\n            contr: Ballot,\n            // varInit section has an affect for target contract address calculation\n            varInit: {\n                _vote: address(this),\n                _managerPublicKey: _managerPublicKey,\n                _owner: owner\n            },\n            code: _ballotCode // we store it in state\n        });\n        new Ballot{\n            stateInit: ballotStateInit,\n            value: 0,\n            flag: 128\n        }(\n            sendRemainingGasTo\n        ); \n    }\n    ...\n}\n")),(0,o.kt)("p",null,"Well, the votes will be stored in our Vote contract. That's why we need a special function, that can be called only by Ballot contract. Ballot contract will call this function and pass a vote (accept or reject). But how we can define a function, that can be called only by contracts with concrete code (by contracts, that were deployed by Vote contract)?"," "),(0,o.kt)("p",null,"It can't be any easier. The address of any contract can be definitely calculated if you know state init variables, a public key and contract code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity",metastring:'title="Vote.sol" showLineNumbers',title:'"Vote.sol"',showLineNumbers:!0},"pragma ever-solidity >= 0.61.2;\n...\n\ncontract Vote {\n    ...\n    // this function will be called by ballots, but how we can know - is calling ballot a fake or not?\n    function onBallotUsed(address owner, address sendRemainingGasTo, bool accept) external {\n        tvm.rawReserve(0.1 ever, 0);\n        // if you know init params of contract you can pretty simple calculate it's address\n        TvmCell ballotStateInit = tvm.buildStateInit({\n            contr: Ballot,\n            varInit: {\n                _vote: address(this),\n                _managerPublicKey: _managerPublicKey,\n                _owner: owner\n            },\n            code: _ballotCode\n        });\n        // so address is a hash from state init\n        address expectedAddress = address(tvm.hash(ballotStateInit));\n        // and now we can just compare msg.sender address with calculated expected address\n        // if its equals - calling ballot has the same code, that Vote stores and deploys\n        if (msg.sender == expectedAddress) {\n            if (accept) {\n                _acceptedCount++;\n            } else {\n                _rejectedCount++;\n            }\n            sendRemainingGasTo.transfer({value: 0, flag: 128, bounce: false});\n        } else {\n            msg.sender.transfer({ value: 0, flag: 128, bounce: false });\n        }\n    }\n    ...\n}\n")),(0,o.kt)("p",null,"That is the way out! ",(0,o.kt)("inlineCode",{parentName:"p"},"TokenWallets")," of ",(0,o.kt)("inlineCode",{parentName:"p"},"TIP-3")," implementation work the same way to transfer tokens (one wallet calls another wallet's ",(0,o.kt)("inlineCode",{parentName:"p"},"acceptTransfer")," function)."),(0,o.kt)("p",null,"The last thing we need is a ",(0,o.kt)("inlineCode",{parentName:"p"},"getDetails")," view function to return the results of our vote"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"function getDetails() external view returns (uint32 accepted, uint32 rejected) {\n    return (_acceptedCount, _rejectedCount);\n}\n")),(0,o.kt)("p",null,"Bring it all together"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity",metastring:'title="Vote.sol" showLineNumbers',title:'"Vote.sol"',showLineNumbers:!0},'pragma ever-solidity >= 0.61.2;\npragma AbiHeader expire;\npragma AbiHeader pubkey;\n\nimport "./Ballot.sol";\n\ncontract Vote {\n    uint16  static _nonce;\n    TvmCell static _ballotCode;\n\n    uint256 _managerPublicKey;\n    uint32  _acceptedCount;\n    uint32  _rejectedCount;\n\n    constructor(\n        uint256 managerPublicKey,\n        address sendRemainingGasTo\n    ) public {\n        tvm.accept();\n        tvm.rawReserve(0.1 ever, 0);\n        _managerPublicKey = managerPublicKey;\n        sendRemainingGasTo.transfer({ value: 0, flag: 128, bounce: false });\n    }\n\n    function deployBallot(address owner, address sendRemainingGasTo) external view {\n        tvm.rawReserve(0.1 ever, 0);\n        TvmCell ballotStateInit = tvm.buildStateInit({\n            contr: Ballot,\n            varInit: {\n                _vote: address(this),\n                _managerPublicKey: _managerPublicKey,\n                _owner: owner\n            },\n            code: _ballotCode\n        });\n        new Ballot{\n            stateInit: ballotStateInit,\n            value: 0,\n            flag: 128\n        }(\n            sendRemainingGasTo\n        ); \n    }\n\n    // this function will be called by ballots, but how we can know - is calling ballot a fake or not?\n    function onBallotUsed(address owner, address sendRemainingGasTo, bool accept) external {\n        tvm.rawReserve(0.1 ever, 0);\n        // if you know init params of contract you can pretty simple calculate it\'s address\n        TvmCell ballotStateInit = tvm.buildStateInit({\n            contr: Ballot,\n            varInit: {\n                _vote: address(this),\n                _managerPublicKey: _managerPublicKey,\n                _owner: owner\n            },\n            code: _ballotCode\n        });\n        // so address is a hash from state init\n        address expectedAddress = address(tvm.hash(ballotStateInit));\n        // and now we can just compare msg.sender address with calculated expected address\n        // if its equals - calling ballot has the same code, that Vote stores and deploys\n        if (msg.sender == expectedAddress) {\n            if (accept) {\n                _acceptedCount++;\n            } else {\n                _rejectedCount++;\n            }\n            sendRemainingGasTo.transfer({value: 0, flag: 128, bounce: false});\n        } else {\n            msg.sender.transfer({ value: 0, flag: 128, bounce: false });\n        }\n    }\n\n    function getDetails() external view returns (uint32 accepted, uint32 rejected) {\n        return (_acceptedCount, _rejectedCount);\n    }\n}\n')),(0,o.kt)("p",null,"Now let's deal with ",(0,o.kt)("inlineCode",{parentName:"p"},"Ballot")," contract. There is no something special in state and constructor:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity",metastring:'title="Ballot.sol" showLineNumbers',title:'"Ballot.sol"',showLineNumbers:!0},'pragma ever-solidity >= 0.61.2;\npragma AbiHeader expire;\npragma AbiHeader pubkey;\n\nimport "./interfaces/IVote.sol";\n\ncontract Ballot {\n    address static _vote;\n    uint256 static _managerPublicKey;\n    // we have a static for owner...so our logic would be like "allow this address to vote"\n    // we can store a static here for ballot number, and our logic would been "allow that ballot to vote"\n    address static _owner;\n\n    bool _activated; // have ballot already been activated\n    bool _used;      // have ballot already been used (vote)\n\n    constructor(address sendRemainingGasTo) public {\n        // we are reserving another 0.1 here for paying for future external call\n        // all another reserves will be on 0.1 only\n        tvm.rawReserve(0.1 ever + 0.1 ever, 0);\n        if (msg.sender != _vote) {\n            selfdestruct(msg.sender);\n        }\n        _activated = false;\n        _used = false;\n    }\n}    \n')),(0,o.kt)("p",null,"Let's talk about the activation mechanic. In constructor, we already reserved little more EVERs. We made it with the purpose, that fee for the external call will be paid from the contract balance. That way of gas management allows us to transfer external calls fee-paying to user responsibility. But activate method shouldn't be called by somebody unauthorized, so we just use ",(0,o.kt)("inlineCode",{parentName:"p"},"require")," keyword by comparing ",(0,o.kt)("inlineCode",{parentName:"p"},"msg.pubkey")," and  ",(0,o.kt)("inlineCode",{parentName:"p"},"_managerPublicKey")," stored in state init. Of course, you need to call ",(0,o.kt)("inlineCode",{parentName:"p"},"tvm.accept()")," function. Simply put, this call allows the contract to use its own balance for executive pay."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity",metastring:'title="Ballot.sol" showLineNumbers',title:'"Ballot.sol"',showLineNumbers:!0},'pragma ever-solidity >= 0.61.2;\n...\n\nimport "./interfaces/IVote.sol";\n\ncontract Ballot {\n    ...\n    // this function will be called by external message, so contract will pay for this call\n    // this mechanic exists for moving commision paying to user responsibility\n    // in consctructor we reserver a little more EVERs, so here we just will use them (with returning remains)\n    // useful mechaninc for your dapp\n    function activate() external {\n        require(msg.pubkey() == _managerPublicKey, 200);\n        tvm.accept(); // allow to use contract balance for paying this function execution\n        _activated = true;\n        tvm.rawReserve(0.1 ever, 0);\n        _owner.transfer({ value: 0, flag: 128, bounce: false });\n    }\n    ...\n}\n')),(0,o.kt)("p",null,"Let's implement the main function of our ",(0,o.kt)("inlineCode",{parentName:"p"},"Ballot")," - ",(0,o.kt)("inlineCode",{parentName:"p"},"vote"),"."),(0,o.kt)("p",null,"Pay attention to imports. We have ",(0,o.kt)("inlineCode",{parentName:"p"},'import "./interfaces/IVote.sol"'),". It's just an interface for calling our ",(0,o.kt)("inlineCode",{parentName:"p"},"Vote")," contract (just like for EVM if you know what I mean)."," "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity",metastring:'title="interfaces/IVote.sol" showLineNumbers',title:'"interfaces/IVote.sol"',showLineNumbers:!0},"pragma ever-solidity >= 0.61.2;\npragma AbiHeader expire;\n\ninterface IVote {\n    function onBallotUsed(address owner, address sendRemainingGasTo, bool accept) external;\n}\n")),(0,o.kt)("p",null,"Let us now return to ",(0,o.kt)("inlineCode",{parentName:"p"},"vote")," function"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity",metastring:'title="Ballot.sol" showLineNumbers',title:'"Ballot.sol"',showLineNumbers:!0},'pragma ever-solidity >= 0.61.2;\n...\n\nimport "./interfaces/IVote.sol";\n\ncontract Ballot {\n    ...\n    function vote(address sendRemainingGasTo, bool accept) external {\n        require(msg.sender == _owner, 201); // remember the library for error codes :)\n        require(_activated && !_used, 202);\n        tvm.rawReserve(0.1 ever, 0);\n        // just call our vote contract\n        IVote(_vote).onBallotUsed{\n            value: 0,\n            flag: 128,\n            bounce: true\n        }(_owner, sendRemainingGasTo, accept);\n        _used = true;\n    }\n    ...\n}\n')),(0,o.kt)("p",null,"That's all. ",(0,o.kt)("inlineCode",{parentName:"p"},"Vote")," contract will check our Ballot address by calculating it, as you remember, and the vote will be accepted. But what if Vote calls will fail because of some reason (low gas attached or yet network problem!)? Our ",(0,o.kt)("inlineCode",{parentName:"p"},"Ballot")," will be marked as used (",(0,o.kt)("inlineCode",{parentName:"p"},"_used")," state variable will be set as true, and we can't call vote once again). To solve this problems, TVM has ",(0,o.kt)("a",{parentName:"p",href:"/arch/transactions#transaction-phases"},"bounce")," messages and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/tonlabs/TON-Solidity-Compiler/blob/master/API.md#onbounce"},(0,o.kt)("inlineCode",{parentName:"a"},"onBounce"))," function for handling them. Let's deal with it by example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity",metastring:'title="Ballot.sol" showLineNumbers',title:'"Ballot.sol"',showLineNumbers:!0},'pragma ever-solidity >= 0.61.2;\n...\n\nimport "./interfaces/IVote.sol";\n\ncontract Ballot {\n    ...\n    // onBounce function!\n    // if our vote contract will reject message, it sends a bounce message to this callback. We should return _used flag to false!\n    onBounce(TvmSlice bounce) external {\n        uint32 functionId = bounce.decode(uint32);\n        // IVote.onBallotUsed send us a bounce message\n        if (functionId == tvm.functionId(IVote.onBallotUsed) && msg.sender == _vote) {\n            tvm.rawReserve(0.1 ever, 0);\n            _used = false; // reset _used flag to false\n        }\n    }\n    ...\n}\n')),(0,o.kt)("p",null,"That's it. Now let's bring it all together."," "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity",metastring:'title="Ballot.sol" showLineNumbers',title:'"Ballot.sol"',showLineNumbers:!0},'pragma ever-solidity >= 0.61.2;\npragma AbiHeader expire;\npragma AbiHeader pubkey;\n\nimport "./interfaces/IVote.sol";\n\ncontract Ballot {\n    address static _vote;\n    uint256 static _managerPublicKey;\n    // we have a static for owner...so our logic would be like "allow this address to vote"\n    // we can store a static here for ballot number, and our logic would been "allow that ballot to vote"\n    address static _owner;\n\n    bool _activated; // have ballot already been activated\n    bool _used;      // have ballot already been used (vote)\n\n    constructor(address sendRemainingGasTo) public {\n        // we are reserving another 0.1 here for paying for future external call\n        // all another reserves will be on 0.1 only\n        tvm.rawReserve(0.1 ever + 0.1 ever, 0);\n        if (msg.sender != _vote) {\n            selfdestruct(msg.sender);\n        }\n        _activated = false;\n        _used = false;\n        sendRemainingGasTo.transfer({ value: 0, flag: 128, bounce: false });\n    }\n\n    // this function will be called by external message, so contract will pay for this call\n    // this mechanic exists for moving commision paying to user responsibility\n    // in consctructor we reserver a little more EVERs, so here we just will use them (with returning remains)\n    // useful mechaninc for your dapp\n    function activate() external {\n        require(msg.pubkey() == _managerPublicKey, 200);\n        tvm.accept(); // allow to use contract balance for paying this function execution\n        _activated = true;\n        tvm.rawReserve(0.1 ever, 0);\n        _owner.transfer({ value: 0, flag: 128, bounce: false });\n    }\n\n    function vote(address sendRemainingGasTo, bool accept) external {\n        require(msg.sender == _owner, 201);\n        require(_activated && !_used, 202);\n        tvm.rawReserve(0.1 ever, 0);\n        // just call our vote contract\n        IVote(_vote).onBallotUsed{\n            value: 0,\n            flag: 128,\n            bounce: true\n        }(_owner, sendRemainingGasTo, accept);\n        _used = true;\n    }\n\n    // onBounce function!\n    // if our vote contract will reject message, it sends a bounce message to this callback. We should return _used flag to false!\n    onBounce(TvmSlice bounce) external {\n        uint32 functionId = bounce.decode(uint32);\n        // IVote.onBallotUsed send us a bounce message\n        if (functionId == tvm.functionId(IVote.onBallotUsed) && msg.sender == _vote) {\n            tvm.rawReserve(0.1 ever, 0);\n            _used = false;\n        }\n    }\n\n}\n')),(0,o.kt)("p",null,"Do not forget about tests and scripts. We won't show any scripts in this guideline just because there is no something special in them. All source code with deploy script and simple test suites are available in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/EVER-blockchain/guides/tree/master/vote-contracts"},"repo"),". The next section will show you some enhancements for this code."))}m.isMDXComponent=!0}}]);