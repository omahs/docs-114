"use strict";(self.webpackChunkeverscale_docs_website=self.webpackChunkeverscale_docs_website||[]).push([[6724],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var n=a(7294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=c(a),p=s,h=m["".concat(l,".").concat(p)]||m[p]||u[p]||r;return a?n.createElement(h,o(o({ref:t},d),{},{components:a})):n.createElement(h,o({ref:t},d))}));function h(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=a.length,o=new Array(r);o[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[m]="string"==typeof e?e:s,o[1]=i;for(var c=2;c<r;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},8712:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var n=a(7462),s=(a(7294),a(3905));const r={sidebar_position:6,title:"REMP"},o="Reliable External Messaging Protocol",i={unversionedId:"arch/networking/remp",id:"arch/networking/remp",title:"REMP",description:"Introduction",source:"@site/../../src/arch/networking/remp.md",sourceDirName:"arch/networking",slug:"/arch/networking/remp",permalink:"/arch/networking/remp",draft:!1,editUrl:"https://github.com/everscale-org/docs/edit/main/.build/website/../../src/arch/networking/remp.md",tags:[],version:"current",lastUpdatedAt:1684349049,formattedLastUpdatedAt:"May 17, 2023",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"REMP"},sidebar:"tutorialSidebar",previous:{title:"Overlay",permalink:"/arch/networking/overlay"},next:{title:"Consensus",permalink:"/arch/consensus"}},l={},c=[{value:"Introduction",id:"introduction",level:2},{value:"General description",id:"general-description",level:2},{value:"REMP Catchain",id:"remp-catchain",level:3},{value:"REMP Client",id:"remp-client",level:3},{value:"Message life cycle",id:"message-life-cycle",level:3},{value:"Replay protection in more detail",id:"replay-protection-in-more-detail",level:3},{value:"Message statuses",id:"message-statuses",level:3},{value:"Performance",id:"performance",level:3},{value:"Data structures &amp; REMP-SDK interop",id:"data-structures--remp-sdk-interop",level:2},{value:"Send REMP message",id:"send-remp-message",level:3},{value:"Receive message status",id:"receive-message-status",level:3},{value:"Other statuses",id:"other-statuses",level:3},{value:"Statuses - general picture",id:"statuses---general-picture",level:3},{value:"The main sequence - the message is sent and accepted",id:"the-main-sequence---the-message-is-sent-and-accepted",level:3},{value:"Rejection sequences",id:"rejection-sequences",level:3},{value:"Possible flow variations",id:"possible-flow-variations",level:3},{value:"Message statuses in kafka",id:"message-statuses-in-kafka",level:3},{value:"Checking the signature of the status",id:"checking-the-signature-of-the-status",level:3}],d={toc:c},m="wrapper";function u(e){let{components:t,...r}=e;return(0,s.kt)(m,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"reliable-external-messaging-protocol"},"Reliable External Messaging Protocol"),(0,s.kt)("h2",{id:"introduction"},"Introduction"),(0,s.kt)("p",null,"Reliable External Messaging Protocol (REMP) is a protocol that adds some additional guarantees/features for external messages processing:"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"1. Replay protection")),(0,s.kt)("p",null,"   If a message is processed and added into an accepted block, then the same message ",(0,s.kt)("strong",{parentName:"p"},"(that is, the message with the same hash)")," will not be collated for some time period. If the message has some expiration time (corresponding to the time period), then this effectively makes efficient replay protection."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"2. No messages are lost")),(0,s.kt)("p",null,"You only need to send the message once. If there will be a possibility to accept it and add it to a block, then it will be done. Message loss may occur only for blockchain overloading reasons."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"3. One can trace the message processing.")),(0,s.kt)("p",null,"There are several checkpoints on the message processing path (when validators received the message, when message was added to a block, when the block was finalized, etc). Upon reaching certain checkpoints one can predict that the message will be successfully processed with a high accuracy - most messages can be considered to be processed when validators acknowledge that they were received (this happens in 100-200 ms; after that it\u2019s highly unlikely that the message is declined). Thus, depending on the message importance one may trade efficiency for reliability in the software, choosing not to trace further processing results. On the other hand, if a transaction is really important, then you can wait till the block with the transaction result is issued."),(0,s.kt)("h2",{id:"general-description"},"General description"),(0,s.kt)("p",null,"REMP is a set of protocols and data structures that are designed to keep trace of incoming external messages. Message flow in REMP can be seen on the following diagram:"),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(6749).Z,width:"1607",height:"1080"})),(0,s.kt)("p",null,"A message from the user application is sent to a REMP Client (e.g., it could be some Full Node; also the user application may implement the necessary protocol by itself). The client in turn sends the message to its shard validators. The validators, aside from processing the message, gather info about message validation status and send it back to the REMP Client and then further to the user (such messages are called \u201creceipts\u201d)."),(0,s.kt)("h3",{id:"remp-catchain"},"REMP Catchain"),(0,s.kt)("p",null,"The validators exchange info between them using a special REMP Catchain protocol. Each validator Catchain session (protocol/data structures used for controlling consensus on block candidates) is accompanied by a REMP Catchain session (Reliable Message Queue, RMQ), which is used to store incoming messages. When validator Catchain sessions are started/stopped/split/merged/etc, the same happens with related REMP Catchain session. When the validator session expires, all messages being processed are transferred to the next REMP Catchain session. "),(0,s.kt)("p",null,"There is some significant difference between validation and REMP Catchain sessions. Validator Catchain session is shared among validators that are currently validating the given shard. REMP Catchain session is shared among validators that are currently validating the given shard and validators that validated this shard in the previous session. So number of participants in REMP Catchain session is about two times bigger than in validator Catchain session. The reason for this is the necessity to pass RMQ data between sessions with respect to practical network bandwidth. So each newly created REMP Catchain session will contain validators from previous validator Catchain session that will provide reliable RMQ data handover for validators from current validator Catchain session."),(0,s.kt)("h3",{id:"remp-client"},"REMP Client"),(0,s.kt)("p",null,"Besides the REMP Catchain protocol, there is a communication between outer world of blockchain and shard validators that is provided by REMP Client protocol. REMP Client can be run as a part of some blockchain node and provides following:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"reception of external messages from outer world"),(0,s.kt)("li",{parentName:"ul"},"pre-evaluation of received message against current state of destination shard (to filter out invalid messages)"),(0,s.kt)("li",{parentName:"ul"},"transfer of messages to each current validator of given shard to include it into their REMP Catchain"),(0,s.kt)("li",{parentName:"ul"},"reception of status updates from shard validators for all previously transferred messages"),(0,s.kt)("li",{parentName:"ul"},"report of messages status to outer world")),(0,s.kt)("p",null,"If at least 1/3 + 1 of validators receive the message via REMP Client protocol, then at least one \u201cgood\u201d validator processes it \u2014 and resends it to all other validators via REMP Catchain session. Thus it is not necessary to send the message to all validators in shard."),(0,s.kt)("h3",{id:"message-life-cycle"},"Message life cycle"),(0,s.kt)("p",null,"The message lifetime is counted according to master catchain sequence numbers: if a message is received when master catchain N was in action, then it becomes obsolete at master catchain N+2. Such message is not copied to new catchains anymore."),(0,s.kt)("p",null,"Each validator tries to collate the message until its collator rejects the attempt. "),(0,s.kt)("p",null,"So, the message processing may result in three outcomes:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"accepted by collator")," - and then validated - and included into shard block - and the block is included into masterchain (accept, finalized)"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"rejected by fullnode before processing")," - or by all collators (reject)"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"timeout")," - its collation/validation attempts were fruitless, and the message became obsolete.")),(0,s.kt)("p",null,"This gives hard replay protection guarantees (if message has expiration mechanism included \u2014 making the message obsolete before two catchains are switched), and soft processing guarantees (message collation/validation attempts may be fruitless if the message is wrong, or if the blockchain is overloaded)."),(0,s.kt)("h3",{id:"replay-protection-in-more-detail"},"Replay protection in more detail"),(0,s.kt)("p",null,"Traditional approaches to replay protection in Everscale usually require some mutable structures in the contract: sequence counter (updated each time the message is sent), previous messages\u2019 hash table, or something similar. REMP keeps track of all messages accepted by the Blockchain and avoids repeated collation, even if the message is sent several times \u2014 thus REMP replay protection mechanism is similar to hash table method, although it is transparent for user and does not consume any gas. "),(0,s.kt)("p",null,"A bit more detail about the mechanism."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"All messages from accepted blocks are parsed and their id\u2019s are kept in Message Cache on each node (think of this as about some extended Shard State)."),(0,s.kt)("li",{parentName:"ul"},"Collator requests the Cache for each message proposed for collation (and, of course, messages\u2019 collation is refused if they were already included into some accepted block)."),(0,s.kt)("li",{parentName:"ul"},"After each session all old messages (that is, messages which were added two master sessions earlier or more) are removed from the Cache.")),(0,s.kt)("p",null,"Thus, expiration time must be specified in messages, so that the messages removed from the Cache should be already invalid by that moment."),(0,s.kt)("p",null,"And a bit more about expiration time fine-tuning."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"The session lifetime is specified in Blockchain config parameter 28 (field ",(0,s.kt)("inlineCode",{parentName:"li"},"mc_catchain_lifetime"),"), traditional value for this config is 250 seconds, current value should be checked in network configuration."),(0,s.kt)("li",{parentName:"ul"},"The message is tracked by Remp during two consecutive master sessions \u2014 the session the message arrived, and the next one (exception: when master sessions are shorter than specified in config, then the message is remembered longer, until total session lifetime exceeds twice of ",(0,s.kt)("inlineCode",{parentName:"li"},"mc_catchain_lifetime"),"; such shorter sessions can happen, for example, when a keyblock is issued)."),(0,s.kt)("li",{parentName:"ul"},"Sessions switch according to their own schedule. So, it is quite possible that the message arrives just seconds before the first session ends.","  ",(0,s.kt)("img",{src:a(9681).Z,width:"1920",height:"884"}),"  As shown on the diagram above, Message 1 arrives in the beginning of the first session, and Message 3 arrives just moments before session switching. So, actual time of message tracking in Remp is between ",(0,s.kt)("inlineCode",{parentName:"li"},"mc_catchain_lifetime")," and ",(0,s.kt)("inlineCode",{parentName:"li"},"mc_catchain_lifteme*2"),", and expiration time should not exceed ",(0,s.kt)("inlineCode",{parentName:"li"},"mc_catchain_lifetime")),(0,s.kt)("li",{parentName:"ul"},"On another hand, according to testing on real networks, it is unreasonable to have expiration time smaller than 40 seconds (or a minute), since a message may expire too soon, before it receives a second chance for collation. The message can easily miss its first collation due to blockchain overfilling, session switching, etc.")),(0,s.kt)("h3",{id:"message-statuses"},"Message statuses"),(0,s.kt)("p",null,"During validation, a message processing passes through several stages (that is, changes some statuses), and validator sends receipts about that. Some of them are given on the diagram below (as inscriptions near arrows). The statuses that are \u201cfinal\u201d (that is, nothing is happening after it) are shown in blue. "),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(4546).Z,width:"1920",height:"1080"})),(0,s.kt)("p",null,"Since message is validated by several validators simultaneously, the statuses are reported by the validators separately, so some of them can be reported several times. E.g., one validator may decide that the message should be rejected, but other validators may decide just the opposite \u2014 so the user may receive \u201cRejected\u201d and then \u201cFinalized\u201d for its message."),(0,s.kt)("h3",{id:"performance"},"Performance"),(0,s.kt)("p",null,"REMP performance toll may be split into network and processor performance toll."),(0,s.kt)("p",null,"Processor performance influence is very limited (and may even reduce processor overloading), since a message is not processed by REMP, it only keeps track of messages. Moreover, replay protection may even reduce processor load, since messages are rejected before collation if they are processed already (thus removing necessity to execute replay protection code in contracts)"),(0,s.kt)("p",null,"Network performance, on another hand, is burdened by Catchains (remember, each Catchain is doubled), which can be expensive from network load perspective. The real performance toll depends on the contracts\u2019 details, and needs measurement in real-life conditions."),(0,s.kt)("h2",{id:"data-structures--remp-sdk-interop"},"Data structures & REMP-SDK interop"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"REMP message flow")),(0,s.kt)("h3",{id:"send-remp-message"},"Send REMP message"),(0,s.kt)("p",null,"External messages are sent the same way, as before. Use GraphQL API's postRequests mutation for it. See ",(0,s.kt)("a",{parentName:"p",href:"https://docs.evercloud.dev/samples/graphql-samples/send-message"},"this guide")," for more info "),(0,s.kt)("h3",{id:"receive-message-status"},"Receive message status"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"REMP message statuses")),(0,s.kt)("p",null,"While REMP message is being processed, it passes through multiple phases (that is, REMP messages have different statuses). Message can be in some statuses multiple times. Possible statuses:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"SentToValidators")," - message was read from kafka and successfully sent to validators"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"RejectedByNode")," - message was rejected by full node before sending to validators; it\u2019s a final decision, message will not be resent again."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"PutIntoQueue")," - message was received by validator and included into special REMP catchain \u2014 waiting for collation"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"RejectedByCollator")," - message was rejected by collator, and will not be tried again by this particular validator. All validators must reject the message before it is finally rejected. A message, rejected by one node, may be successfully included into a block by another node later (reasons: bugs in software, change of state \u2014 e.g. money suddenly arrived to the account, etc)"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"IncludedIntoBlock")," - message was successfully included into block candidate."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"IncludedIntoAcceptedBlock -")," the block candidate was accepted by shard's validators."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Finalized")," -  ****the block candidate's hash (or its descendant) was committed into master chain.")),(0,s.kt)("p",null,"Each stage contains"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"message_id -")," root hash of message boc"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"timestamp -")," unix time in milliseconds"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"source id")," - who generated information about stage (for example it is full node for SentToValidators stage, or collator for RejectedByCollator stage)"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"signature -")," record about the stage is signed by source"),(0,s.kt)("li",{parentName:"ul"},"special fields (see below)")),(0,s.kt)("p",null,"All possible REMP massage stages with all data fields:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n    {\n        "kind": "SentToValidators",\n                "message_id": "16923245c4bd57762330e454926a81dcb45626b433121c51804075b3cc26984e", // 32 bytes hex\n        "timestamp": 1632750383000, // 64 bits, unix time in milliseconds\n        "source_id": "1692345dc4bd57762330e454926a81dcb45626b433121c51804075b3cc26984e", // 32 bytes hex\n        "signature": "1692345dc4bd57762330e454926a81dcb45626b433121c51804075b3cc26984e", // 32 bytes hex,\n        \n        "sent_to": 4, // number of validators message was successfully sent to\n        "total_validators": 5\n    },\n    {\n        "kind": "RejectedByFullnode",\n                "message_id": "16923245c4bd57762330e454926a81dcb45626b433121c51804075b3cc26984e",\n        "timestamp": 1632750383000,\n        "source_id": "1692345dc4bd57762330e454926a81dcb45626b433121c51804075b3cc26984e", \n        "signature": "1692345dc4bd57762330e454926a81dcb45626b433121c51804075b3cc26984e",\n        \n        "error": "Can\'t deserialize message"\n\n    },\n    {\n        "kind": "PutIntoQueue",\n                "message_id": "16923245c4bd57762330e454926a81dcb45626b433121c51804075b3cc26984e",\n        "timestamp": 1632750383000,\n        "source_id": "1692345dc4bd57762330e454926a81dcb45626b433121c51804075b3cc26984e",\n        "signature": "1692345dc4bd57762330e454926a81dcb45626b433121c51804075b3cc26984e",\n    },\n    {\n        "kind": "RejectedByCollator",\n                "message_id": "16923245c4bd57762330e454926a81dcb45626b433121c51804075b3cc26984e",\n        "timestamp": 1632750383000,\n        "source_id": "1692345dc4bd57762330e454926a81dcb45626b433121c51804075b3cc26984e",\n        "signature": "1692345dc4bd57762330e454926a81dcb45626b433121c51804075b3cc26984e",\n        \n        "error": "Contract rejected message with error code 52"\n    },\n    {\n        "kind": "IncludedIntoBlock",\n                "message_id": "16923245c4bd57762330e454926a81dcb45626b433121c51804075b3cc26984e",\n        "timestamp": 1632750383000,\n        "source_id": "1692345dc4bd57762330e454926a81dcb45626b433121c51804075b3cc26984e",\n        "signature": "1692345dc4bd57762330e454926a81dcb45626b433121c51804075b3cc26984e",\n\n                // shard block the message was included to\n        "block_id": "1692345dc4bd57762330e454926a81dcb45626b433121c51804075b3cc26984e",\n                "block_file_hash": "00a2345dc4bd57762330e454926a81dcb45626b433121c51804075b3cc26984e",\n        "block_seqno": 123,\n        "shard": "3800000000000000",\n        "wc": 0,\n    },\n    {\n        "kind": "IncludedIntoAcceptedBlock",\n                "message_id": "16923245c4bd57762330e454926a81dcb45626b433121c51804075b3cc26984e",\n        "timestamp": 1632750383000,\n        "source_id": "1692345dc4bd57762330e454926a81dcb45626b433121c51804075b3cc26984e",\n        "signature": "1692345dc4bd57762330e454926a81dcb45626b433121c51804075b3cc26984e",\n        \n                // shard block the message was included to\n        "block_id": "1692345dc4bd57762330e454926a81dcb45626b433121c51804075b3cc26984e",\n                "block_file_hash": "00a2345dc4bd57762330e454926a81dcb45626b433121c51804075b3cc26984e",\n        "block_seqno": 123,\n        "shard": "3800000000000000",\n        "wc": 0,\n    },\n    {\n        "kind": "Finalized",\n                "message_id": "16923245c4bd57762330e454926a81dcb45626b433121c51804075b3cc26984e",\n        "timestamp": 1632750383000, // 64 bits\n        "source_id": "1692345dc4bd57762330e454926a81dcb45626b433121c51804075b3cc26984e",\n        "signature": "1692345dc4bd57762330e454926a81dcb45626b433121c51804075b3cc26984e",\n        \n        // master block where shard block with the message is commited to\n        "mc_block_id": "1692345dc4bd57762330e454926a81dcb45626b433121c51804075b3cc26984e",\n        "block_file_hash": "33b2345dc4bd57762330e454926a81dcb45626b433121c51804075b3cc269800",\n        "mc_block_seqno": 234,\n        \n                // shard block the message was included to\n        "block_id": "1692345dc4bd57762330e454926a81dcb45626b433121c51804075b3cc26984e",\n                "block_file_hash": "00a2345dc4bd57762330e454926a81dcb45626b433121c51804075b3cc26984e",\n        "block_seqno": 123,\n        "shard": "3800000000000000",\n        "wc": 0,\n    }\n}\n')),(0,s.kt)("p",null,"You can receive REMP receipts via rempReceipts GraphQL subscription."),(0,s.kt)("p",null,"See ",(0,s.kt)("a",{parentName:"p",href:"https://docs.evercloud.dev/samples/graphql-samples/subscribe-for-remp-receipts"},"REMP subscription guide")," for more info."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'subscription{\n  rempReceipts(messageId: "082a5c2ab5b68b0ef9b8ced4fa865933ab19603f5171ec1190f3f45943214de0"){\n    messageId\n    timestamp\n    json\n    kind\n  }\n}\n')),(0,s.kt)("h3",{id:"other-statuses"},"Other statuses"),(0,s.kt)("p",null,"The statuses listed above are the most common. However, in REMP, core statuses are pairs of two parameters: \u201d",(0,s.kt)("strong",{parentName:"p"},"level"),"\u201d - the node component that processed the message and \u201c",(0,s.kt)("strong",{parentName:"p"},"status"),"\u201d - the outcome of the message processing. There are also some out-of-the-order statuses. In JSON, both level and status are combined into a \u201c",(0,s.kt)("strong",{parentName:"p"},"kind"),"\u201d field. The table below shows how each level and status mixes are called in JSON. The main statuses listed above are marked ",(0,s.kt)("font",{color:"green"},"green"),", while the statuses you can get in special situations are marked ",(0,s.kt)("font",{color:"orange"},"orange"),". The ",(0,s.kt)("strong",{parentName:"p"},"empty cell")," means you will never get such a mix of parameters. "),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"center"},"\u2193 status ","|"," level \u2192"),(0,s.kt)("th",{parentName:"tr",align:null},"Full node"),(0,s.kt)("th",{parentName:"tr",align:null},"Quenue"),(0,s.kt)("th",{parentName:"tr",align:null},"Collator"),(0,s.kt)("th",{parentName:"tr",align:null},"Shard chain"),(0,s.kt)("th",{parentName:"tr",align:null},"Master chain"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"center"},"Accepted"),(0,s.kt)("td",{parentName:"tr",align:null}),(0,s.kt)("td",{parentName:"tr",align:null}),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("font",{color:"green"},"IncludedIntoBlock(optimistic finality)"),"."),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("font",{color:"green"},"IncludedIntoAcceptedBlock")),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("font",{color:"blue"},"Finalized !!! +5-25s"))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"center"},"Ignored"),(0,s.kt)("td",{parentName:"tr",align:null}),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("font",{color:"orange"},"IgnoredByQueue")),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("font",{color:"orange"},"IgnoredByCollator")),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("font",{color:"orange"},"IgnoredByShardchain")),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("font",{color:"orange"},"IgnoredByMasterchain"))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"center"},"Rejected"),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("font",{color:"red"},"RejectedByFullnode +0s")),(0,s.kt)("td",{parentName:"tr",align:null}),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("font",{color:"orange"},"RejectedByCollator")),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("font",{color:"red"},"RejectedbyShardchain")),(0,s.kt)("td",{parentName:"tr",align:null})),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"center"},"SentToValidators"),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("font",{color:"green"},"SentToValidators")),(0,s.kt)("td",{parentName:"tr",align:null}),(0,s.kt)("td",{parentName:"tr",align:null}),(0,s.kt)("td",{parentName:"tr",align:null}),(0,s.kt)("td",{parentName:"tr",align:null})),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"center"},"New"),(0,s.kt)("td",{parentName:"tr",align:null}),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("font",{color:"green"},"PutIntoQueue")),(0,s.kt)("td",{parentName:"tr",align:null}),(0,s.kt)("td",{parentName:"tr",align:null}),(0,s.kt)("td",{parentName:"tr",align:null})),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"center"},"Duplicate"),(0,s.kt)("td",{parentName:"tr",align:null}),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("font",{color:"orange"},"Duplicate")),(0,s.kt)("td",{parentName:"tr",align:null}),(0,s.kt)("td",{parentName:"tr",align:null}),(0,s.kt)("td",{parentName:"tr",align:null})),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"center"},"Timeout"),(0,s.kt)("td",{parentName:"tr",align:null}),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("font",{color:"red"},"Timeout + 4 min")),(0,s.kt)("td",{parentName:"tr",align:null}),(0,s.kt)("td",{parentName:"tr",align:null}),(0,s.kt)("td",{parentName:"tr",align:null})),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"center"}),(0,s.kt)("td",{parentName:"tr",align:null}),(0,s.kt)("td",{parentName:"tr",align:null}),(0,s.kt)("td",{parentName:"tr",align:null}),(0,s.kt)("td",{parentName:"tr",align:null}),(0,s.kt)("td",{parentName:"tr",align:null})))),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("font",{color:"green"},"green")," status means right sequence of events"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("font",{color:"orange"},"orange")," status means non critical errors or warnings"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("font",{color:"red"},"red")," status means critical error - the message will never be included into blockchain"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("font",{color:"blue"},"blue")," status means successful - the message was included into blockchain"),(0,s.kt)("li",{parentName:"ul"},"Optimistic finality is ",(0,s.kt)("font",{color:"green"},"IncludedIntoBlock"),".")),(0,s.kt)("p",null,"When a message is sent via REMP, it passes through several software components, operating on different computers. Each component has a name (a level of message processing), each level has a number assigned."),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("strong",{parentName:"li"},"Full node - level 0")," - messages are accepted by the full node and checked there."),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("strong",{parentName:"li"},"Queue - level 1")," - messages are sent to validator nodes. Seven or more validator nodes per thread, depending on the blockchain config. Accepted by the Queue."),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("strong",{parentName:"li"},"Collator - level 2")," - messages are added to block candidates - collated. Each validator node has its own collator component. Accepted by the collator."),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("strong",{parentName:"li"},"Shardchain - level 3")," - block candidates are validated. A node collated a block candidate and reports about its success. A successfully validated candidate becomes a shardblock."),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("strong",{parentName:"li"},"Masterchain - level 4")," - the shard blocks are added to the masterchain. ")),(0,s.kt)("p",null,"Due to byzantine nature of the blockchain algorithms, Queue, Collator and Shardchain stages are executed in parallel on each validator node separately, and each validator node reports about its message copy success on its own. That is, some statuses (from Fullnode level and Masterchain level) are returned once, and all other statuses (from Queue, Collator and Shardchain levels) are returned in many (7 or more, depending on the blockchain config) copies."),(0,s.kt)("p",null,"Unless a message is failed on all its parallel ways, one cannot consider that the message is failed."),(0,s.kt)("h3",{id:"statuses---general-picture"},"Statuses - general picture"),(0,s.kt)("p",null,"Almost all statuses may be separated into three categories: Accepted, Rejected and Ignored.\nEach \u201c",(0,s.kt)("strong",{parentName:"p"},"Accepted"),"\u201d means that the message is processed and transferred to the next component. It adds 1 to the level.",(0,s.kt)("br",{parentName:"p"}),"\n","Each \u201c",(0,s.kt)("strong",{parentName:"p"},"Ignored"),"\u201d means that the message was lost (didn\u2019t fit into the block, etc), so it returns the message to the Queue level.",(0,s.kt)("br",{parentName:"p"}),"\n","Each \u201d",(0,s.kt)("strong",{parentName:"p"},"Rejected"),"\u201d means that the message will not be processed further by the particular node."),(0,s.kt)("p",null,"Also, there are some additional statuses not fitting into the general scheme:"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"\u201cDuplicate\u201d")," returns/keeps the message at the Queue level.",(0,s.kt)("br",{parentName:"p"}),"\n",(0,s.kt)("strong",{parentName:"p"},"\u201cNew\u201d")," (\u201dPutIntoQueue\u201d) is sent when the message first enters the Queue level. \u201cSentToValidators\u201d may be thought of as Accepted for level 0."),(0,s.kt)("p",null,"Full node level and Finalized status originated from Full node (one instance). All other statuses are multithread. One thread per thread validator, usually seven instances. Each \u201cNew\u201d status will be followed by a series of other statuses, with ",(0,s.kt)("strong",{parentName:"p"},"\u201cReject\u201d/\u201dTimeout\u201d")," at the end in case of failure."),(0,s.kt)("h3",{id:"the-main-sequence---the-message-is-sent-and-accepted"},"The main sequence - the message is sent and accepted"),(0,s.kt)("p",null,"The message is accepted at all levels: Full node, Queue, Collator, Shardchain, and Masterchain."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"\u201cSentToValidators\u201d")," (Accepted by the Full node) \u2192 \u201cPutIntoQueue\u201d (New) \u2192 (Accepted by the Queue \u2014 internal status, not sent from the full nodes ) \u2192 ",(0,s.kt)("strong",{parentName:"p"},"\u201cIncludedIntoBlock\u201d")," (Accepted by a Collator) \u2192 ",(0,s.kt)("strong",{parentName:"p"},"\u201cIncudedIntoAcceptedBlock\u201d")," (Accepted by Shardchain) \u2192 ",(0,s.kt)("strong",{parentName:"p"},"\u201cFinalized\u201d")," (Accepted by the Masterchain)."),(0,s.kt)("h3",{id:"rejection-sequences"},"Rejection sequences"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"A message may be rejected by the full node before processing. For instance, when it\u2019s incompatible with its current state.",(0,s.kt)("br",{parentName:"li"}),(0,s.kt)("strong",{parentName:"li"},"\u201cRejectedByFullnode\u201d"),(0,s.kt)("br",{parentName:"li"}),"No more messages from that full node will follow. It\u2019s a final state."),(0,s.kt)("li",{parentName:"ol"},"A message may be rejected by a collator. For instance, in case the message becomes incompatible with the new state.",(0,s.kt)("br",{parentName:"li"}),(0,s.kt)("strong",{parentName:"li"},"\u201cRejectedByCollator\u201d"),(0,s.kt)("br",{parentName:"li"}),"It\u2019s a final state for each validator from the validator set. However, other validators may validate the message. One should wait for 2/3 rejects for a highly probable reject and for all rejects for a guaranteed reject. After that, nobody will try to collate the message."),(0,s.kt)("li",{parentName:"ol"},"Messages may be repeatedly ignored until a timeout happens (after 4 mins)",(0,s.kt)("br",{parentName:"li"}),(0,s.kt)("strong",{parentName:"li"},"\u201cTimeout\u201d"),(0,s.kt)("br",{parentName:"li"}),"It\u2019s a final state for each validator from the validator set. However, other validators may manage to successfully include the message in the block. One should wait for all timeouts. All validators must reply with timeout.")),(0,s.kt)("p",null,"In 2 and 3 cases ",(0,s.kt)("strong",{parentName:"p"},"(rejects/timeouts)"),", one should consider that all ",(0,s.kt)("strong",{parentName:"p"},"\u201cNew\u201d")," messages must be answered with a corresponding ",(0,s.kt)("strong",{parentName:"p"},"\u201cReject\u201d")," or ",(0,s.kt)("strong",{parentName:"p"},"\u201cTimeout\u201d"),". Unless you have a pair for each \u201cNew\u201d message, you cannot be sure that the message is finally declined."),(0,s.kt)("h3",{id:"possible-flow-variations"},"Possible flow variations"),(0,s.kt)("p",null,"A message may be ignored by a Collator, Shardchain or Masterchain. This means that the message didn\u2019t fit into the block, the block didn\u2019t fit into the masterchain, etc. The message will then return to the collator queue and will be included into the next available block candidate."),(0,s.kt)("p",null,"A message may be switched between Collator and Queue levels several times: SentToValidators, New, PutIntoQueue, IncludedIntoBlock, PutIntoQueue, IncludedIntoBlock, IncudedIntoAcceptedBlock, Finalized. It also may be switched in more elaborate ways, returning to Queue level several times \u2014 and finally either Finalizing or falling into Timeout/Reject."),(0,s.kt)("h3",{id:"message-statuses-in-kafka"},"Message statuses in kafka"),(0,s.kt)("p",null,"Each status is produced into a kafka topic. The ",(0,s.kt)("strong",{parentName:"p"},"key")," is a message ID while ",(0,s.kt)("strong",{parentName:"p"},"value")," is a json with one status."),(0,s.kt)("h3",{id:"checking-the-signature-of-the-status"},"Checking the signature of the status"),(0,s.kt)("p",null,"To check a signature status, you need to convert it into binary format and then check your signature using a key you can get from the validator set. The full node\u2019s key will go another way ",(0,s.kt)("strong",{parentName:"p"},"(it will be described later).")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},'// parse json\nlet json: serde_json::Value = serde_json::from_slice(receipt)?;\n\n// convert json -> binary struct\nlet (receipt, signature) = ton_block_json::parse_remp_status(\n    json.as_object().ok_or_else(|| error!("Can\'t parse remp status json as a map"))?\n)?;\n\n// serialize binary struct\nlet receipt_bytes = adnl::common::serialize(&receipt)?;\n\n// find pub key in validator set\n// validator_set: ton_block::ValidatorSet\nlet mut pub_key = None;\nfor v in validator_set.list() {\n    let k = adnl::common::KeyOption::from_type_and_public_key(\n        KeyOption::KEY_ED25519, v.public_key.key_bytes());\n    if k.id().data() == receipt.source_id().as_slice() {\n        pub_key = Some(k);\n        break;\n    }\n}\n\n// check signature\nif let Some(pub_key) = pub_key {\n    pub_key.verify(&receipt_bytes, &signature)?;\n}\n')))}u.isMDXComponent=!0},6749:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/remp1-37d22371f5ec55f0789b3dfaabfea258.svg"},9681:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/remp2-8630430017ae38e3882c3b8b1b4564b8.svg"},4546:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/remp3-1ce4729fcef21456214314e3db2660f6.svg"}}]);