"use strict";(self.webpackChunkeverscale_docs_website=self.webpackChunkeverscale_docs_website||[]).push([[3778],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},h="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),h=c(a),k=i,m=h["".concat(s,".").concat(k)]||h[k]||p[k]||o;return a?n.createElement(m,r(r({ref:t},d),{},{components:a})):n.createElement(m,r({ref:t},d))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=k;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[h]="string"==typeof e?e:i,r[1]=l;for(var c=2;c<o;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},8894:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=a(7462),i=(a(7294),a(3905));const o={},r="Catchain Overview",l={unversionedId:"arch/consensus/overview",id:"arch/consensus/overview",title:"Catchain Overview",description:"Catchain is a communication protocol between validators. It does not execute the consensus algorithm itself but prepares data required for the decision-making of a higher-level component",source:"@site/../../src/arch/consensus/30-overview.md",sourceDirName:"arch/consensus",slug:"/arch/consensus/overview",permalink:"/arch/consensus/overview",draft:!1,editUrl:"https://github.com/everscale-org/docs/edit/main/.build/website/../../src/arch/consensus/30-overview.md",tags:[],version:"current",lastUpdatedAt:1684349049,formattedLastUpdatedAt:"May 17, 2023",sidebarPosition:30,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Components",permalink:"/arch/consensus/components"},next:{title:"Catchain Protocol Messages & Structures",permalink:"/arch/consensus/messages"}},s={},c=[{value:"Node Catchain Initialization",id:"node-catchain-initialization",level:2},{value:"Scheduled Actions",id:"scheduled-actions",level:2},{value:"Blocks Processing",id:"blocks-processing",level:2}],d={toc:c},h="wrapper";function p(e){let{components:t,...o}=e;return(0,i.kt)(h,(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"catchain-overview"},"Catchain Overview"),(0,i.kt)("p",null,"Catchain is a communication protocol between validators. It does not execute the consensus algorithm itself but prepares data required for the decision-making of a higher-level component:\xa0",(0,i.kt)("strong",{parentName:"p"},"validator-session"),". Essential catchain tasks are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"setting up a network overlay on the top of ADNL ensuring communication between validators;"),(0,i.kt)("li",{parentName:"ul"},"setting up and updating a list of neighbor nodes for direct communications inside the overlay;"),(0,i.kt)("li",{parentName:"ul"},"receiving blocks from other validators and sending back decisions of the current validator;"),(0,i.kt)("li",{parentName:"ul"},"controlling blocks dependencies;"),(0,i.kt)("li",{parentName:"ul"},"managing an internal database holding current catchain session results"),(0,i.kt)("li",{parentName:"ul"},"restoring catchain session state after a validator restart;"),(0,i.kt)("li",{parentName:"ul"},"detecting forks and blaming validators;"),(0,i.kt)("li",{parentName:"ul"},"maintaining the consensus algorithm.")),(0,i.kt)("p",null,"In general, catchain component provide an operational framework for other elements of the validator-session consensus."),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(6437).Z,width:"1100",height:"845"})),(0,i.kt)("h2",{id:"node-catchain-initialization"},"Node Catchain Initialization"),(0,i.kt)("p",null,"Catchain session begins with the creation of the\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"CatchainImpl"),"\xa0and the\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"CatChainReceiverImpl"),"\xa0objects. The\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"CatChainReceiverImpl"),"\xa0configures the ADNL overlay upholding the communication with other validators."),(0,i.kt)("p",null,"Next step is\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"CatChainReceiverImpl"),"\xa0restoring previously received blocks from a RocksDB database instance (see\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"CatChainReceiverImpl::read_db_from"),"\xa0and\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"CatChainReceiverImpl::read_block_from_db"),"\xa0for the details)."),(0,i.kt)("p",null,"On top, there is always a block with hash=0 acting as a starter block for downloading block predecessors and dependencies. The central processing loops starts after the database reading stage is complete (see\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"CatChainImpl::on_receiver_started"),"\xa0and\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"CatChainImpl::send_process"),"\xa0for the details). The consensus algorithm initiates new block candidates generation for further approval \u2014 the block transfers to the catchain when a new candidate appears. In case there are no blocks, validator awaits for blocks from other validators on the catchain."),(0,i.kt)("h2",{id:"scheduled-actions"},"Scheduled Actions"),(0,i.kt)("p",null,"Each validator sends results of its work only to several neighbors (currently set to 5) minimizing traffic. Neighborhood randomly changes every 60\u2013120 seconds. Every 2\u20133 seconds, the system randomly picks a validator from the overall validator list for synchronization. This synchronization is bi-directional:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The validator-initiator sends a list containing delivered blocks heights (including vector timestamps, according to \u201cCatchain Consensus: An Outline\u201d). The validator expects to either receive absent blocks or a fork event notification in response. In the case of confirmed forking, consensus will blame the validator and discard all messages. Only the current validator can verify forking. Validator compares it\u2019s own block heights list with the received list and sends the difference, if any, to the requester. Such a process optimizes network traffic and reduces the average height of delivered blocks while limiting the count of outgoing response messages to 100."),(0,i.kt)("li",{parentName:"ul"},"The validator-initiator requests the delivery of all absent dependent blocks generated by a validator-answerer."),(0,i.kt)("li",{parentName:"ul"},"Invoking consensus algorithm iteration (will be described below). Each synchronization adds information about states of other validators, making the next consensus iteration possible on the validator.")),(0,i.kt)("h2",{id:"blocks-processing"},"Blocks Processing"),(0,i.kt)("p",null,"There are several types of blocks in the catchain:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"blocks written to a blockchain;"),(0,i.kt)("li",{parentName:"ul"},"catchain blocks with a state of the particular validator (",(0,i.kt)("inlineCode",{parentName:"li"},"CatchainReceivedBlock"),"). They are the messages with source validator number identification, consensus algorithm iteration number (height) and consensus increment messages;\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"CatchainReceivedBlock"),"\xa0are the temporal sources for consensus blocks creation (",(0,i.kt)("inlineCode",{parentName:"li"},"CatchainBlock"),");"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"CatchainBlock"),"\xa0blocks built from several\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"CatchainReceivedBlock"),"\xa0blocks(",(0,i.kt)("inlineCode",{parentName:"li"},"CatchainBlock"),"\xa0consists of\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"CatchainReceivedBlock"),"\xa0blocks states with maximal known height for a validator ).")),(0,i.kt)("p",null,"The\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"CatchainReceivedBlock"),"\xa0block consists of the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"catchain session identifier (to exclude the case when blocks from the previous catchain session are processed);"),(0,i.kt)("li",{parentName:"ul"},"number of the block origin source validator;"),(0,i.kt)("li",{parentName:"ul"},"block height (it is equal to the consensus algorithm iteration number for a particular validator);"),(0,i.kt)("li",{parentName:"ul"},"fork number (if several forks from the same validator are detected, the chain of blocks is invalidated and the validator is blamed);"),(0,i.kt)("li",{parentName:"ul"},"previous block sent to other validators (outgoing block);"),(0,i.kt)("li",{parentName:"ul"},"dependent blocks received by other validators (incoming blocks); note, that an incoming block cannot depend on two blocks from the same source validator; in general, this is a DAG.")),(0,i.kt)("p",null,"The dependent blocks graph allows for:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"recursively downloading of all blocks required for the full state of the processed block;"),(0,i.kt)("li",{parentName:"ul"},"recursively marking a subgraph of blocks as an invalid if forks are detected from a particular source validator.")),(0,i.kt)("p",null,"Each validator contains a list of states of other validators. Each of them stores\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"CatchainReceivedBlock"),"\xa0blocks that came from them. Every new incoming\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"CatchainReceivedBlock"),"\xa0block is checked regardless of which data channel it came from (directly from the validator or transitively, see\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"CatChainReceiverImpl::validate_block_sync"),"). If the block signature does not match the expected signature of the sender validator, or if the block is invalid, the block is ignored."),(0,i.kt)("p",null,"The validator checks each catchain validator for forks. Only one fork per validator is allowed. In case when the same validator sends two different blocks with the same height, it is marked as a blamed and all\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"CatChainReceivedBlockImpl"),"\xa0corresponding to this validator are invalidated. The validator itself ignore till the end of the current catchain session."),(0,i.kt)("p",null,"After the\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"CatChainReceivedBlockImpl"),"\xa0block is received, its processing is initiated (see\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"CatChainReceiverImpl::receive_block"),"). Then it is recorded to the database. The processing procedure downloads all dependents for the block and further adding the block to a queue of blocks ready to be run. This download procedure is done each 2-3 seconds by synchronization with other validators which are being asked for absent\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"CatChainReceivedBlockImpl"),"\xa0blocks."),(0,i.kt)("p",null,"When any data updates are received (from the database during initialization, when new blocks are received, and while adding new blocks after the work of the consensus algorithm (see\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"CatChainImpl::processing_block"),")), the\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"CatChainReceivedBlockImpl"),"\xa0block execution procedure is launched."),(0,i.kt)("p",null,"Each validator contains state lists for other validators. Each of them stores\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"CatchainReceivedBlock"),"\xa0blocks received from others. Every new incoming\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"CatchainReceivedBlock"),"\xa0block is checked regardless of which data channel it came from (directly from the validator or transitively, see\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"CatChainReceiverImpl::validate_block_sync"),"). Validator ignores the block if the block signature does not match the expected signature of the sender validator or if the block is invalid."),(0,i.kt)("p",null,"The active validator checks each catchain validator for forks. Only one fork per validator is allowed. In case the same validator sends two different blocks with the same height, catchain marks it as blamed and all\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"CatChainReceivedBlockImpl"),"\xa0blocks corresponding to this validator are invalidated. Consensus mechanics then ignore the validator itself until the end of the current catchain session."),(0,i.kt)("p",null,"Receiving the\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"CatChainReceivedBlockImpl"),"\xa0block initiates the processing (see\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"CatChainReceiverImpl::receive_block"),") and creates a database entry. The processing procedure downloads all dependents for the block. At the next step, it adds the block to a queue of blocks ready to be run. The download procedure is done every 2-3 seconds through synchronization with other validators required to provide absent\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"CatChainReceivedBlockImpl"),"\xa0blocks."),(0,i.kt)("p",null,"The\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"CatChainReceivedBlockImpl"),"\xa0block execution procedure initiates whenever any data updates are received (from the database during initialization, when new blocks are received, and while adding new blocks after the work of the consensus algorithm (see\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"CatChainImpl::processing_block"),"))."),(0,i.kt)("p",null,"Block execution includes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"creating a fork from the existing previous block (in this case, blame procedure initialization is possible if the fork already exists);"),(0,i.kt)("li",{parentName:"ul"},"preliminary procedures for processing the block (pre_deliver);"),(0,i.kt)("li",{parentName:"ul"},"processing of the block.")),(0,i.kt)("p",null,"Pre-processing of a CatChainReceivedBlockImpl includes checking forks (see\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"CatChainReceivedBlockImpl::pre_deliver"),")."),(0,i.kt)("p",null,"Block processing (see\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"CatChainReceivedBlockImpl::delivery"),") includes the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"deliver_block \u2014 notification that the block is ready for this validator. This notification consists of:")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Notifying all neighbors about the appearance of a new\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"CatChainReceivedBlockImpl"),"\xa0block;"),(0,i.kt)("li",{parentName:"ol"},"Generating a new CatchainBlock block and placing it on the top of the chain from the validator that sent the corresponding CatChainReceivedBlockImpl block. The CatchainBlock block used in the consensus algorithm is a copy (snapshot) of the corresponding CatChainReceivedBlockImpl block excluding the data used for dependencies downloading process;")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"dep_delivered \u2014 all dependent\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"CatChainReceivedBlockImpl"),"\xa0blocks (outgoing dependency) notification. This places dependents into a queue of blocks ready to be run;"),(0,i.kt)("li",{parentName:"ul"},"block_delivered \u2014 internal data update on validator-initiator (CatchainReceivedBlockImpl sender) sent blocks.")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"CatchainBlock"),"\xa0blocks received from the validator are the input for the consensus algorithm. Structurally, this block is very similar to the\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"CatChainReceivedBlockImpl"),"\xa0block. However, it contains all the data necessary for further processing (unlike\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"CatChainReceivedBlockImpl"),", where some data may be missing). Catchain stores a list of the\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"CatchainBlock"),"\xa0top blocks \u2014 one for each validator \u2014 and runs the consensus algorithm periodically by the timer at the beginning of work and on-demand (see\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"CatChainImpl::send_process"),"\xa0for the details). The consensus iteration identification for each validator is the height of a block that the consensus algorithm generated. Thus, a pair (",(0,i.kt)("inlineCode",{parentName:"p"},"validator number, block height"),") uniquely identifies the block for a particular validator."),(0,i.kt)("p",null,"Processing consensus results of one validator on another validator might result in two different blocks with the same height and validator numbers. This will result in fork appearance and identification key will extend to (",(0,i.kt)("inlineCode",{parentName:"p"},"validator number, block height, fork number"),"). However, since catchain does not allow forks, the source validator where forked block originated will be blamed. So the fork number may be skipped and\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"CatchainBlock"),"\xa0may be identified identification may using (",(0,i.kt)("inlineCode",{parentName:"p"},"validator number, block height"),")."),(0,i.kt)("p",null,"The consensus iteration begins by selecting a random subset from the list of\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"CatchainBlock"),"\xa0top blocks (no more than max_dept=4) and passing them to the consensus algorithm described above (see\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"ValidatorSessionImpl::process_blocks"),"). Note that a separate validator sent each such block and there can\u2019t be two blocks from a single validator. These blocks merge within the consensus algorithm, and a new CatchainBlock appears on their basis. Catchain reports this block appearance (see\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"CatchainImpl::processed_block"),"). Adding a new block leads to writing it into the database and creating a\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"CatChainReceivedBlockImpl"),"\xa0block from it, further sent to neighbors."))}p.isMDXComponent=!0},6437:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/0_5C1TuB_hyZiHnYLI-df78944bc6eb2f34b3d67d8533c7edaf.webp"}}]);