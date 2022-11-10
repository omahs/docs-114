"use strict";(self.webpackChunkeverscale_docs_website=self.webpackChunkeverscale_docs_website||[]).push([[922],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=i,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||r;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1154:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return d}});var a=n(3117),i=n(102),r=(n(7294),n(3905)),o=["components"],l={title:"v2.0",slug:"/arch/abi/2.0"},s="Smart Contracts ABI v2.0 Specification",p={unversionedId:"arch/abi/2.0",id:"arch/abi/2.0",title:"v2.0",description:"New in ABI v2.0",source:"@site/../../src/arch/abi/2.0.md",sourceDirName:"arch/abi",slug:"/arch/abi/2.0",permalink:"/arch/abi/2.0",draft:!1,editUrl:"https://github.com/everscale-org/docs/edit/main/.build/website/../../src/arch/abi/2.0.md",tags:[],version:"current",lastUpdatedAt:1667136257,formattedLastUpdatedAt:"Oct 30, 2022",frontMatter:{title:"v2.0",slug:"/arch/abi/2.0"},sidebar:"tutorialSidebar",previous:{title:"ABI",permalink:"/arch/abi"},next:{title:"v2.1",permalink:"/arch/abi/2.1"}},c={},d=[{value:"New in ABI v2.0",id:"new-in-abi-v20",level:2},{value:"Message body",id:"message-body",level:2},{value:"External Inbound Messages",id:"external-inbound-messages",level:3},{value:"External Outbound Messages",id:"external-outbound-messages",level:3},{value:"Internal Messages",id:"internal-messages",level:3},{value:"Message Body Signing",id:"message-body-signing",level:2},{value:"Signing Algorithm",id:"signing-algorithm",level:3},{value:"Function Signature (Function ID)",id:"function-signature-function-id",level:2},{value:"Function Signature Syntax",id:"function-signature-syntax",level:3},{value:"Signature Calculation Syntax",id:"signature-calculation-syntax",level:3},{value:"Sample Implementation",id:"sample-implementation",level:3},{value:"Event ID",id:"event-id",level:3},{value:"Encoding",id:"encoding",level:2},{value:"Header parameter types",id:"header-parameter-types",level:2},{value:"Function parameter types:",id:"function-parameter-types",level:3},{value:"Cell Data Overflow",id:"cell-data-overflow",level:2},{value:"Cell Reference Limit Overflow",id:"cell-reference-limit-overflow",level:2},{value:"Contract Interface Specification",id:"contract-interface-specification",level:2},{value:"Header section",id:"header-section",level:3},{value:"<strong>Functions</strong> section",id:"functions-section",level:3},{value:"Events section",id:"events-section",level:3},{value:"Data section",id:"data-section",level:3},{value:"Getters section",id:"getters-section",level:3},{value:"Introduction",id:"introduction",level:2},{value:"Solving of the problem",id:"solving-of-the-problem",level:2},{value:"Reference",id:"reference",level:2}],u={toc:d};function m(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"smart-contracts-abi-v20-specification"},"Smart Contracts ABI v2.0 Specification"),(0,r.kt)("h2",{id:"new-in-abi-v20"},"New in ABI v2.0"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"ABI v2.0")," introduces a new ",(0,r.kt)("inlineCode",{parentName:"p"},"header")," JSON ABI section with additional parameters placed before contract function parameters. These additional parameters are used for security checks or some protection mechanisms implemented in a contract. For example, ",(0,r.kt)("inlineCode",{parentName:"p"},"timestamp")," introduced in ",(0,r.kt)("strong",{parentName:"p"},"ABI v1.0")," and used for replay attack protection is now defined as an additional parameter in the ",(0,r.kt)("inlineCode",{parentName:"p"},"header")," section."),(0,r.kt)("p",null,"Apart from ",(0,r.kt)("inlineCode",{parentName:"p"},"timestamp"),", the new ",(0,r.kt)("inlineCode",{parentName:"p"},"expire")," additional parameter is introduced. It specifies the timespan upon expiration of which a message is not processed by a contract."),(0,r.kt)("p",null,"Some other minor modifications"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Public key became one of header parameters."),(0,r.kt)("li",{parentName:"ul"},"Signature is moved to root cell."),(0,r.kt)("li",{parentName:"ul"},"Get methods are placed in a separate section that helps find them among other public methods."),(0,r.kt)("li",{parentName:"ul"},"The last cell reference can be used by parameter serialization which needs reference (",(0,r.kt)("inlineCode",{parentName:"li"},"cell"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"bytes"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"map"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"array")," types) if all the following parameters can fit into current cell. ABI v1 used last cell reference only for cells chaining.")),(0,r.kt)("h1",{id:"motivation"},"Motivation"),(0,r.kt)("p",null,"Given the increase in number of additional parameters, it is necessary to review the way they are defined. The ",(0,r.kt)("inlineCode",{parentName:"p"},"header")," section is intended to include all additional parameters that contract expects in external inbound message body for all public functions. These parameters are placed into the cell body before ",(0,r.kt)("inlineCode",{parentName:"p"},"function ID")," in order of appearance in the ",(0,r.kt)("inlineCode",{parentName:"p"},"header")," section."),(0,r.kt)("p",null,"The public key became an optional parameter in order to decrease message size and therefore to reduce the forward fee. Each contract already has a public key, so there is no need to include it into each message."),(0,r.kt)("p",null,"Signature is moved to the root cell to decrease forward and gas fees. Given that reading a cell from reference consumes gas, reading the signature directly from the root cell is cheaper. Besides that, an additional cell increases forward fee."),(0,r.kt)("h1",{id:"specification"},"Specification"),(0,r.kt)("p",null,"ABI specifies message bodies layout for client to contract and contract to contract interaction."),(0,r.kt)("h2",{id:"message-body"},"Message body"),(0,r.kt)("h3",{id:"external-inbound-messages"},"External Inbound Messages"),(0,r.kt)("p",null,"Message body with encoded function call has the following format:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Maybe(Signature)")," +  ",(0,r.kt)("inlineCode",{parentName:"p"},"Enc(Header)")," +",(0,r.kt)("inlineCode",{parentName:"p"},"Function ID")," +  ",(0,r.kt)("inlineCode",{parentName:"p"},"Enc(Arguments)")),(0,r.kt)("p",null,"First comes an optional signature. It is prefixed by one bit flag that indicates the signature presence. If it is ",(0,r.kt)("inlineCode",{parentName:"p"},"1"),", then in the next ",(0,r.kt)("inlineCode",{parentName:"p"},"512 bit")," a signature is placed, otherwise the signature is omitted."),(0,r.kt)("p",null,"Then \u0441omes the encoded header parameters set  (same for all functions)."),(0,r.kt)("p",null,"It is followed by ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"32 bits"))," of function ID identifying which contract functions are called. The ",(0,r.kt)("inlineCode",{parentName:"p"},"function ID")," comes within the first ",(0,r.kt)("inlineCode",{parentName:"p"},"32 bits")," of the ",(0,r.kt)("inlineCode",{parentName:"p"},"SHA256")," hash of the function signature."),(0,r.kt)("p",null,"The highest bit is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"0")," for function ID in external inbound messages, and to ",(0,r.kt)("inlineCode",{parentName:"p"},"1")," for external outbound messages."),(0,r.kt)("p",null,"Function parameters are next. They are encoded in compliance with the present specification and stored either to the root cell or the next one in the chain."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"An encoded parameter cannot be split between different cells")),(0,r.kt)("h3",{id:"external-outbound-messages"},"External Outbound Messages"),(0,r.kt)("p",null,"External outbound messages are used to return values from functions or to emit events."),(0,r.kt)("p",null,"Return values are encoded and put into the message response:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Function ID"),"+",(0,r.kt)("inlineCode",{parentName:"p"},"Enc(Return values)")),(0,r.kt)("p",null,"Function ID's highest bit is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"1"),"."),(0,r.kt)("p",null,"Events are encoded as follows:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Event ID")," + ",(0,r.kt)("inlineCode",{parentName:"p"},"Enc(event args)")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Event ID")," - 32 bits of SHA256 hash of the event function signature with highest bit set to ",(0,r.kt)("inlineCode",{parentName:"p"},"0"),"."),(0,r.kt)("h3",{id:"internal-messages"},"Internal Messages"),(0,r.kt)("p",null,"Internal messages are used for contract-to-contract interaction; they have the following body format:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Function ID")," + ",(0,r.kt)("inlineCode",{parentName:"p"},"Enc(Arguments)")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Function ID")," - 32 bits function id calculated as first 32 bits SHA256 hash of the function signature. The highest bit of function ID is ",(0,r.kt)("inlineCode",{parentName:"p"},"0"),". Internal messages contain only function calls and no responses."),(0,r.kt)("h2",{id:"message-body-signing"},"Message Body Signing"),(0,r.kt)("p",null,"The message body can be protected with a cryptographic signature to identify a user outside the blockchain. In this case, an ",(0,r.kt)("em",{parentName:"p"},"External inbound message")," that calls the function carries a user ",(0,r.kt)("em",{parentName:"p"},"private key")," signature. This requirement applies only to ",(0,r.kt)("em",{parentName:"p"},"External inbound messages")," because ",(0,r.kt)("em",{parentName:"p"},"Internal inbound messages")," are generated within the blockchain, and ",(0,r.kt)("em",{parentName:"p"},"src address")," can be used to identify the caller."),(0,r.kt)("p",null,"If a user does not want to sign a message, bit ",(0,r.kt)("inlineCode",{parentName:"p"},"0")," should be placed to the root cell start and signature omitted."),(0,r.kt)("p",null,"The message body signature is generated from the ",(0,r.kt)("em",{parentName:"p"},"representation hash")," of the bag of cells following the signature."),(0,r.kt)("h3",{id:"signing-algorithm"},"Signing Algorithm"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"ABI serialization generates bag of cells containing header parameters, function ID and function parameters. 513 free bits are reserved in the root cell for signature and signature flag"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("em",{parentName:"li"},"Representation hash")," of the bag is signed using the ",(0,r.kt)("em",{parentName:"li"},"Ed25519")," algorithm."),(0,r.kt)("li",{parentName:"ol"},"Bit ",(0,r.kt)("inlineCode",{parentName:"li"},"1")," followed by 512 bits of the signature is saved to the start of the root cell before header parameters.")),(0,r.kt)("h2",{id:"function-signature-function-id"},"Function Signature (Function ID)"),(0,r.kt)("p",null,"The following syntax is used for defining a signature:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"function name"),(0,r.kt)("li",{parentName:"ul"},"list of input parameter types (input list) in parenthesis"),(0,r.kt)("li",{parentName:"ul"},"list of return values types (output list) in parenthesis"),(0,r.kt)("li",{parentName:"ul"},"ABI version")),(0,r.kt)("p",null,"Single comma is used to divide each input parameter and return value type from one another. Spaces are not used."),(0,r.kt)("p",null,"Parameter and return value names are not included."),(0,r.kt)("p",null,"The function name, input and output lists are not separated and immediately follow each other."),(0,r.kt)("p",null,"If a function has no input parameters or does not return any values, the corresponding input or output lists are empty (empty parenthesis)."),(0,r.kt)("h3",{id:"function-signature-syntax"},"Function Signature Syntax"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"function_name(input_type1,input_type2,...,input_typeN)(output_type1,output_type2,...,output_typeM)v2")),(0,r.kt)("h3",{id:"signature-calculation-syntax"},"Signature Calculation Syntax"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},'SHA256("function_name(input_type1,input_type2,...,input_typeN)(output_type1,output_type2,...,output_typeM)")v2')),(0,r.kt)("h3",{id:"sample-implementation"},"Sample Implementation"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Function")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"func(int64 param1, bool param2) -> uint32")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Function Signature")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"func(int64,bool)(uint32)v2")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Function Hash")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},'sha256("func(int64,bool)(uint32)v2") = 0x1354f2c85b50aa84c2f65ebb8cec69aba0aa3269c21e03e142e014e84ea59649')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"function ID")," then is ",(0,r.kt)("inlineCode",{parentName:"p"},"0x1354f2c8")," for function call and ",(0,r.kt)("inlineCode",{parentName:"p"},"0x9354f2c8")," for function response"),(0,r.kt)("h3",{id:"event-id"},"Event ID"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Event ID")," is calculated in the same way as the ",(0,r.kt)("strong",{parentName:"p"},"function ID")," except for cases when the event signature does not contain the list of return values types: ",(0,r.kt)("inlineCode",{parentName:"p"},"event(int64,bool)v2")),(0,r.kt)("h2",{id:"encoding"},"Encoding"),(0,r.kt)("p",null,"The goal of the ABI specification is to design ABI types that are cheap to read to reduce gas consumption and gas costs. Some types are optimized for storing without write access."),(0,r.kt)("h2",{id:"header-parameter-types"},"Header parameter types"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"time"),": message creation timestamp. Used for replay attack protection, encoded as 64 bit Unix time in milliseconds."),(0,r.kt)("p",{parentName:"li"},"Rule: the contract should store the timestamp of the last accepted message. The initial timestamp is 0. When a new message is received, the contract should do the following check:"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"last_time < new_time < now + interval,")," where"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"last_time")," - last accepted message timestamp (loaded from c4 register),"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"new_time")," - inbound external message timestamp (loaded from message body),"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"now")," - current block creation time (just as ",(0,r.kt)("inlineCode",{parentName:"p"},"NOW")," TVM primitive),"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"interval")," - 30 min."),(0,r.kt)("p",{parentName:"li"},"The contract should continue execution if these requirements are met. Otherwise, the inbound message should be rejected.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"expire"),": Unix time (in seconds, 32 bit) after that message should not be processed by contract. It is used for indicating lost external inbound messages."),(0,r.kt)("p",{parentName:"li"},"Rule:  if contract execution time is less then ",(0,r.kt)("inlineCode",{parentName:"p"},"expire")," time, then execution is continued. Otherwise, the message is expired, and the transaction aborts itself (by ",(0,r.kt)("inlineCode",{parentName:"p"},"ACCEPT")," primitive). The client waits for message processing until the ",(0,r.kt)("inlineCode",{parentName:"p"},"expire")," time. If the message wasn't processed during that interval is considered to be expired")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"pubkey"),": public key from key pair used for signing the message body. This parameter is optional. The client decides if he needs to set the public key or not. It is encoded as bit 1 followed by 256 bit of public key if parameter provided, or by bit ",(0,r.kt)("inlineCode",{parentName:"p"},"0")," if it is not.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Header may also contain any of standard ABI types used by custom checks."))),(0,r.kt)("h3",{id:"function-parameter-types"},"Function parameter types:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"uint<M>"),": unsigned ",(0,r.kt)("inlineCode",{parentName:"p"},"M")," bit integer. Big-endian encoded unsigned integer stored in the cell-data.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"int<M>"),": two\u2019s complement signed ",(0,r.kt)("inlineCode",{parentName:"p"},"M")," bit integer. Big-endian encoded signed integer stored in the cell-data.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"bool"),": equivalent to uint1.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"tuple ",(0,r.kt)("inlineCode",{parentName:"p"},"(T1, T2, ..., Tn)"),": tuple that includes ",(0,r.kt)("inlineCode",{parentName:"p"},"T1"),", ..., ",(0,r.kt)("inlineCode",{parentName:"p"},"Tn"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"n>=0")," types encoded in the following way:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"Enc(X(1)) Enc(X(2)) . . ., Enc(X(n)); where X(i) is value of T(i) for i in 1..n \n")),(0,r.kt)("p",{parentName:"li"},"Tuple elements are encoded as independent values so they can be placed in different cells")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"T[]")," is a dynamic array of ",(0,r.kt)("inlineCode",{parentName:"p"},"T")," type elements. It is encoded as a TVM dictionary.  ",(0,r.kt)("inlineCode",{parentName:"p"},"uint32")," defines the array elements count placed into the cell body.  ",(0,r.kt)("inlineCode",{parentName:"p"},"HashmapE")," (see TL-B schema in TVM spec) struct is then added (one bit as a dictionary root and one reference with data if the dictionary is not empty). The dictionary key is a serialized ",(0,r.kt)("inlineCode",{parentName:"p"},"uint32")," index of the array element, and the value is a serialized array element as ",(0,r.kt)("inlineCode",{parentName:"p"},"T")," type.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"T[k]")," is a static size array of ",(0,r.kt)("inlineCode",{parentName:"p"},"T")," type elements. Encoding is equivalent to ",(0,r.kt)("inlineCode",{parentName:"p"},"T[]")," without elements count")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"bytes"),": an array of ",(0,r.kt)("inlineCode",{parentName:"p"},"uint8")," type elements. The array is put into a separate cell. In the case of array overflow, the maximum cell-data size it's split into multiple sequential cells."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Note: contract stores this type as-is without parsing. For high-speed decoding, cut reference from body slice as ",(0,r.kt)("inlineCode",{parentName:"li"},"LDREF"),". This type is helpful if some raw data must be stored in the contract without write or random access to elements."),(0,r.kt)("li",{parentName:"ul"},"Note: analog of ",(0,r.kt)("inlineCode",{parentName:"li"},"bytes")," in Solidity. In C lang can be used as ",(0,r.kt)("inlineCode",{parentName:"li"},"void*"),"."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"fixedbytes<M>"),": a fixed-size array of ",(0,r.kt)("inlineCode",{parentName:"p"},"M")," ",(0,r.kt)("inlineCode",{parentName:"p"},"uint8")," type elements. Encoding is equivalent to ",(0,r.kt)("inlineCode",{parentName:"p"},"bytes"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"map(K,V)")," is a dictionary of ",(0,r.kt)("inlineCode",{parentName:"p"},"V")," type values with ",(0,r.kt)("inlineCode",{parentName:"p"},"K")," type key. ",(0,r.kt)("inlineCode",{parentName:"p"},"K")," may be any of ",(0,r.kt)("inlineCode",{parentName:"p"},"int<M>/uint<M>")," types with ",(0,r.kt)("inlineCode",{parentName:"p"},"M")," from ",(0,r.kt)("inlineCode",{parentName:"p"},"1")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"1023"),". Dictionary is encoded as  ",(0,r.kt)("inlineCode",{parentName:"p"},"HashmapE")," type (one bit put into cell data as dictionary root and one reference with data is added if the dictionary is not empty).")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"address")," is an account address in TON blockchain. Encoded as ",(0,r.kt)("inlineCode",{parentName:"p"},"MsgAddress")," struct (see TL-B schema in TON blockchain spec).")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"cell"),": a type for defining a raw tree of cells. Stored as a reference in the current cell. Must be decoded with ",(0,r.kt)("inlineCode",{parentName:"p"},"LDREF"),"  command and stored as-is."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Note: this type is useful to store payloads as a tree of cells analog to contract code and data in the form of ",(0,r.kt)("inlineCode",{parentName:"li"},"StateInit")," structure of ",(0,r.kt)("inlineCode",{parentName:"li"},"message")," structure.")))),(0,r.kt)("h2",{id:"cell-data-overflow"},"Cell Data Overflow"),(0,r.kt)("p",null,"If parameter data does not fit into the available space of the current cell-data, it moves to a separate new cell. This cell is attached to the current one as a reference. The new cell then becomes the current cell."),(0,r.kt)("h2",{id:"cell-reference-limit-overflow"},"Cell Reference Limit Overflow"),(0,r.kt)("p",null,"For simplicity, this ABI version reserves the last cell-reference spot for cell-data overflow. If the cell-reference limit in the current cell is already reached (save for the reserved spot) and a new cell is required, the current cell is considered complete, and a new one is generated. The reserved spot stores the reference to the new cell, and it continues with the new cell as a current one."),(0,r.kt)("p",null,"The last cell reference can be used by parameter serialization which needs reference (",(0,r.kt)("inlineCode",{parentName:"p"},"cell"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"bytes"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"map"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"array")," types) if all the following parameters can fit into current cell."),(0,r.kt)("h2",{id:"contract-interface-specification"},"Contract Interface Specification"),(0,r.kt)("p",null,"The contract interface is stored as a JSON file called contract ABI. It includes all public functions with data described by ABI types. Below is a structure of an ABI file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "ABI version": 2,\n    "header": [\n        ...\n    ],\n    "functions": [\n        ...     \n    ],\n    "getters": [\n      ...\n    ],\n    "events": [\n        ... \n    ],\n    "data": [\n        ...\n    ]\n}\n')),(0,r.kt)("p",null,"Getters is a list of get methods which might be called on local TVM."),(0,r.kt)("h3",{id:"header-section"},"Header section"),(0,r.kt)("p",null,"This section describes additional parameters of functions within the contract. Header-specific types are specified as strings with the type ",(0,r.kt)("inlineCode",{parentName:"p"},"name"),". Other types are specified as function parameter type (see ",(0,r.kt)("strong",{parentName:"p"},"Functions section"),")"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "header": [\n    "header_type",\n    {\n      "name": "param_name",\n      "type": "param_type"\n    }\n  ]\n}\n')),(0,r.kt)("p",null,"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json5"},'{\n  "header": [\n    "time",\n    "expire",\n    {\n      "name": "custom",\n      "type": "int256"\n    }\n  ]\n}\n')),(0,r.kt)("h3",{id:"functions-section"},(0,r.kt)("strong",{parentName:"h3"},"Functions")," section"),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Functions")," section specifies each interface function signature, including its name, input, and output parameters. Functions specified in the contract interface can be called from other contracts or from outside the blockchain via ABI call."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Functions")," section has the following fields:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json5"},'{\n  "functions": [\n    {\n      "name": "method_name",\n      "inputs": [\n        {"name": "func_name", "type": "ABI_type"},\n      ],\n      "outputs": [],\n      "id": "0xXXXXXXXX", //optional\n    }\n  ]\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"name"),": function name;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"inputs"),": an array of objects, each containing:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"name"),": parameter name;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"type"),": the canonical parameter type."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"components"),": used for tuple types, optional."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"id"),": an optional ",(0,r.kt)("inlineCode",{parentName:"li"},"uint32")," ",(0,r.kt)("inlineCode",{parentName:"li"},"id")," parameter can be added. This ",(0,r.kt)("inlineCode",{parentName:"li"},"id")," will be used as a ",(0,r.kt)("inlineCode",{parentName:"li"},"Function ID")," instead of automatically calculated. PS: the last case can be used for contracts that are not ABI-compatible."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"outputs"),": an array of objects similar to ",(0,r.kt)("inlineCode",{parentName:"li"},"inputs"),". It can be omitted if the function does not return anything;")),(0,r.kt)("h3",{id:"events-section"},"Events section"),(0,r.kt)("p",null,"This section specifies the events used in the contract. An event is an external outbound message with ABI-encoded parameters in the body."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json5"},'{\n  "events": [\n    {\n      "name": "event_name",\n      "inputs": [],\n      "id": "0xXXXXXXXX", //optional\n    },\n  ]\n}\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"inputs")," have the same format as for functions."),(0,r.kt)("h3",{id:"data-section"},"Data section"),(0,r.kt)("p",null,"This section covers the contract global public variables."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json5"},'{\n  "data": [\n    {\n      "name": "var_name",\n      "type": "abi_type",\n      "key": "<number>" // index of variable in contract data dictionary\n    },\n  ]\n}\n')),(0,r.kt)("h3",{id:"getters-section"},"Getters section"),(0,r.kt)("p",null,"Getters specification is not yet supported and this section is ignored."),(0,r.kt)("h1",{id:"problem-of-mappings-or-arrays-that-contains-big-structures-as-values"},'Problem of mappings or arrays that contains "big" structures as values.'),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"Several months ago we did breaking change in TVM. Opcode DICTSET had worked in this way: ",(0,r.kt)("inlineCode",{parentName:"p"},"if some_data+len(key)+len(value)")," doesn't fit in one cell (",(0,r.kt)("inlineCode",{parentName:"p"},"1023 bits"),") then value are stored in ref of cell. Now if it doesn't fit in one cell opcode will throw exception."),(0,r.kt)("p",null,"We haven't faced with this problem because solidity compiler doesn't support this feature (mappings or arrays that contain \"big\" structures as values). We are going to support it but ton-abi throws exception then it generates message."),(0,r.kt)("h2",{id:"solving-of-the-problem"},"Solving of the problem"),(0,r.kt)("p",null,"To set value in dictionaries (arrays or mappings) we will use opcode ",(0,r.kt)("inlineCode",{parentName:"p"},"DICTSET")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"DICTSETREF"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"if (12 + len(key) + maxPossibleValueLength <= 1023) then we use DICTSET.\n\nelse we will use DICTSETREF.\n\n12 = 2 + 10 \u2265 2 + log2(keyLength).\n")),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ton-blockchain/ton/blob/master/crypto/block/block.tlb#L30"},"https://github.com/ton-blockchain/ton/blob/master/crypto/block/block.tlb#L30")),(0,r.kt)("p",null,"Max possible size of value:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"intN/uintN - N bit."),(0,r.kt)("li",{parentName:"ul"},"address - 591 bit. See ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ton-blockchain/ton/blob/master/crypto/block/block.tlb#L107"},"https://github.com/ton-blockchain/ton/blob/master/crypto/block/block.tlb#L107"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-TL-B"},"anycast_info$_ depth:(#<= 30) { depth >= 1 }\n   rewrite_pfx:(bits depth) = Anycast;\n\naddr_var$11 anycast:(Maybe Anycast) addr_len:(## 9) \n   workchain_id:int32 address:(bits addr_len) = MsgAddressInt;\n\n2 +  // 11 \n1 + 5 + 30 + // anycast\n9 + // addr_len\n32 + // workchain_id:int32\n512 // address\n = \n591\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"bool - 1 bit"),(0,r.kt)("li",{parentName:"ul"},"bytes/cell - 0 bit"),(0,r.kt)("li",{parentName:"ul"},"array - 33 bit"),(0,r.kt)("li",{parentName:"ul"},"mapping - 1 bit"),(0,r.kt)("li",{parentName:"ul"},"structure = SUM maxPosibleLenght(member) for member in members")),(0,r.kt)("h2",{id:"reference"},"Reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/tonlabs/ton-labs-abi"},"ABI (Application Binary Interface) implementation")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/tonlabs/ton-labs-abi/blob/master/docs/ABI_2.0_spec.md"},"Everscale Smart Contracts ABI 2.0 Specification"))))}m.isMDXComponent=!0}}]);