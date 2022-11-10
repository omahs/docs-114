"use strict";(self.webpackChunkeverscale_docs_website=self.webpackChunkeverscale_docs_website||[]).push([[7729],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,h=u["".concat(l,".").concat(m)]||u[m]||p[m]||o;return n?a.createElement(h,s(s({ref:t},d),{},{components:n})):a.createElement(h,s({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3141:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p}});var a=n(3117),r=n(102),o=(n(7294),n(3905)),s=["components"],i={sidebar_position:3},l="Everscale Wallet API guide",c={unversionedId:"develop/tutorial/ton-wallet-api",id:"develop/tutorial/ton-wallet-api",title:"Everscale Wallet API guide",description:"Via following this link you can find all necessary information concerning the interaction with and configuration of Everscale wallet API.",source:"@site/../../src/develop/tutorial/ton-wallet-api.md",sourceDirName:"develop/tutorial",slug:"/develop/tutorial/ton-wallet-api",permalink:"/develop/tutorial/ton-wallet-api",draft:!1,editUrl:"https://github.com/everscale-org/docs/edit/main/.build/website/../../src/develop/tutorial/ton-wallet-api.md",tags:[],version:"current",lastUpdatedAt:1667136257,formattedLastUpdatedAt:"Oct 30, 2022",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Issue a Non-Fungible Token",permalink:"/develop/tutorial/smart-digital-assets/mint-nft"},next:{title:"Smart Contracts",permalink:"/develop/smart-contracts"}},d={},p=[{value:"Using the Everscale Wallet API",id:"using-the-everscale-wallet-api",level:2},{value:"1. Brief description",id:"1-brief-description",level:3},{value:"2. Setup",id:"2-setup",level:3},{value:"3. Transfer EVER",id:"3-transfer-ever",level:3},{value:"4. How to process a transaction from a user on the backend",id:"4-how-to-process-a-transaction-from-a-user-on-the-backend",level:3},{value:"5. Token transfer",id:"5-token-transfer",level:3}],u={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"everscale-wallet-api-guide"},"Everscale Wallet API guide"),(0,o.kt)("p",null,"Via following ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/broxus/ever-wallet-api"},"this link")," you can find all necessary information concerning the interaction with and configuration of Everscale wallet API. "),(0,o.kt)("p",null,"In order to understand how to send transactions and track their statuses please see the guide below."),(0,o.kt)("h2",{id:"using-the-everscale-wallet-api"},"Using the Everscale Wallet API"),(0,o.kt)("h3",{id:"1-brief-description"},"1. Brief description"),(0,o.kt)("p",null,"This API guide is intended to explain how to send and track transactions with the help of Ever Wallet.",(0,o.kt)("br",{parentName:"p"}),"\n","The wallet tracks addresses from the database and indexes all transactions, storing the information about them in the postgres DB.",(0,o.kt)("br",{parentName:"p"}),"\n","All transactions with native EVERs are tracked, and there is a whitelist of Root Token addresses to be tracked in the settings.",(0,o.kt)("br",{parentName:"p"}),"\n","There is a Callbacks Table in the database, where you can specify the URL of your backend to which callbacks will come for all transactions."),(0,o.kt)("p",null,"It takes about 40 minutes to synchronize the node.",(0,o.kt)("br",{parentName:"p"}),"\n","Both the Ton-Wallet-API and callback requests use HMAC signatures in the headers."),(0,o.kt)("h3",{id:"2-setup"},"2. Setup"),(0,o.kt)("p",null,"You need postgres11 + a dedicated server to work",(0,o.kt)("br",{parentName:"p"}),"\n","CPU: 4 cores, 2 GHz",(0,o.kt)("br",{parentName:"p"}),"\n","RAM: 8 GB",(0,o.kt)("br",{parentName:"p"}),"\n","Storage: 200 GB fast SSD",(0,o.kt)("br",{parentName:"p"}),"\n","Network: 100 MBit/s   "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Follow the instructions from the Readme ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/broxus/ever-wallet-api"},"https://github.com/broxus/ever-wallet-api")),(0,o.kt)("li",{parentName:"ol"},'Create yourself a "system address" by calling ',(0,o.kt)("inlineCode",{parentName:"li"},"/address/create")," with empty parameters. The response will return an EVER address. It is necessary to send EVERs to it, which will be consumed as gas for further work."),(0,o.kt)("li",{parentName:"ol"},"In the table ",(0,o.kt)("inlineCode",{parentName:"li"},"api_service_callback")," we enter the address of our backend, which will deal with transaction processing."),(0,o.kt)("li",{parentName:"ol"},"Configure token whitelist:",(0,o.kt)("br",{parentName:"li"}),"You can see the Root-Contract addresses at ",(0,o.kt)("a",{parentName:"li",href:"https://raw.githubusercontent.com/broxus/ton-assets/master/manifest.json"},"https://raw.githubusercontent.com/broxus/ton-assets/master/manifest.json"),".",(0,o.kt)("br",{parentName:"li"}),"By default, the whitelist already includes all the tokens in this list.\nTo add more tokens to the whitelist use the script below:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"  ./scripts/root_token.sh -t native --database-url ${DATABASE_URL} --name ${TOKEN_NAME} --address ${TOKEN_ADDRESS}\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"DATABASE_URL - Postgres connection url (example: postgresql://postgres:",(0,o.kt)("a",{parentName:"li",href:"mailto:postgres@127.0.0.1"},"postgres@127.0.0.1"),"/ton_wallet_api)"),(0,o.kt)("li",{parentName:"ul"},"TOKEN_NAME - Token name (example: WEVER)"),(0,o.kt)("li",{parentName:"ul"},"TOKEN_ADDRESS - Token address (example: 0:0ee39330eddb680ce731cd6a443c71d9069db06d149a9bec9569d1eb8d04eb37)")),(0,o.kt)("h3",{id:"3-transfer-ever"},"3. Transfer EVER"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n // To create a transaction you will need a sender\'s address. For example, your system address.   \n\n "fromAddress": "0:0000000000000000000000000000000000000000000000000000000000000000",  \n  "bounce": false,    \n\n  // a random uuid that you generate for yourself and store it on your backend to further track the status of the transaction\n\n "ID": "00000000-0000-0000-0000-000000000000",      \n \n "outputs": [\n   {\n     // How many EVERs to send. To send 1 EVER this value = 1000000000\n     "value": "1000000000"\n     // Set Normal to deduct the number of sent EVERs from the value    \n     "outputType": "Normal",    \n     // Recipient address of EVERs    \n     "recipientAddress": "0:0000000000000000000000000000000000000000000000000000000000000000",    \n   }\n ]\n}\n')),(0,o.kt)("p",null,"Or use the script:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# Create transaction\nAPI_KEY=${API_KEY} SECRET=${API_SECRET} HOST=${HOST} \\\n./scripts/wallet.sh -m create_transaction \\\n--src-addr {sender} --dst-addr {recipient} --amount {amount}\n")),(0,o.kt)("p",null,"You can track the status of a transaction via the following two ways:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The recommended way is via callback ",(0,o.kt)("inlineCode",{parentName:"li"},"AccountTransactionEvent"),", which has ",(0,o.kt)("inlineCode",{parentName:"li"},"transactionStatus")," field:",(0,o.kt)("br",{parentName:"li"}),(0,o.kt)("inlineCode",{parentName:"li"},"Expired")," - end state for failed transactions,",(0,o.kt)("br",{parentName:"li"}),(0,o.kt)("inlineCode",{parentName:"li"},"Done")," - final state for successful transactions. ")),(0,o.kt)("p",null,"If your backend was disabled during the callback or responded with an ",(0,o.kt)("inlineCode",{parentName:"p"},"error"),", the event will have an Error state. In this case you should query all events ",(0,o.kt)("inlineCode",{parentName:"p"},"/events")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"Error")," state at backend startup, process them and give each event a ",(0,o.kt)("inlineCode",{parentName:"p"},"Done")," state by calling ",(0,o.kt)("inlineCode",{parentName:"p"},"/events/mark"),". "),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"The second way is by polling the GET method ",(0,o.kt)("inlineCode",{parentName:"li"},"/transactions/id/<uuid>"))),(0,o.kt)("h3",{id:"4-how-to-process-a-transaction-from-a-user-on-the-backend"},"4. How to process a transaction from a user on the backend"),(0,o.kt)("p",null,"We generate a deposit address for the user by calling  ",(0,o.kt)("inlineCode",{parentName:"p"},"/address/create")," with empty parameters."),(0,o.kt)("p",null,"After receiving the transaction, the backend receives a callback of the form ",(0,o.kt)("inlineCode",{parentName:"p"},"AccountTransactionEvent")," (see ",(0,o.kt)("a",{parentName:"p",href:"https://tonapi.broxus.com/swagger.yaml"},"swagger"),").",(0,o.kt)("br",{parentName:"p"}),"\n","You can also get such events in a list, using the ",(0,o.kt)("inlineCode",{parentName:"p"},"/events")," method."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"To merge tokens to the system address, you can use the ",(0,o.kt)("inlineCode",{parentName:"li"},"/tokens/transactions/create")," method in such a callback (see ",(0,o.kt)("a",{parentName:"li",href:"#5-token-transfer"},'"5. Token Transfer."'),")"),(0,o.kt)("li",{parentName:"ol"},"If your backend was not working at the time of the callback or responded with an error, the event will have an Error status.")),(0,o.kt)("h3",{id:"5-token-transfer"},"5. Token transfer"),(0,o.kt)("p",null,"First, check the status and balance of the address you want to send tokens from by making a GET request to ",(0,o.kt)("inlineCode",{parentName:"p"},"/address/{string}"),"\nThe address you are sending tokens from must have at least 0.6 EVER (balance >= 600000000), if the balance is not enough, top it up (see ",(0,o.kt)("a",{parentName:"p",href:"#3-transfer-ever"},'"3. Transfer EVER"')," )"),(0,o.kt)("p",null,"To transfer tokens, use the method ",(0,o.kt)("inlineCode",{parentName:"p"},"/tokens/transactions/create")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n\n // Sender  \n "fromAddress": "string",  \n // Receiver            \n "recipientAddress": "string",              \n\n //  The number of tokens with decimals. For example, for transferring 1 USDT this value = "1000000"\n "value": "1000000"\n\n // How many EVERs to apply. The default recommended value is 0.5 EVER. The funds will be debited fromAddress.\n "fee": "5000000000",  \n\n // The address to which to return the remaining EVERs. For example, your system address.\n "sendGasTo": "string",                                \n\n // A random uuid that you generate yourself and store on your backend to further track the status of the transaction\n "id": "00000000-0000-0000-0000-000000000000",      \n\n // Token Address. (see https://raw.githubusercontent.com/broxus/ton-assets/master/manifest.json)\n \n\n "rootAddress": "string",                    \n}\n')),(0,o.kt)("p",null,"Or use the script:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"}," # Create token transaction\nAPI_KEY=${API_KEY} SECRET=${API_SECRET} HOST=${HOST} \\\n./scripts/wallet.sh -m create_token_transaction \\\n--src-addr {sender} --dst-addr {recipient} \\\n--root-addr {root_token_address} --amount {amount}\n")),(0,o.kt)("p",null,"You can track the status of a transaction with:\n1) (Recommended way) via callback ",(0,o.kt)("inlineCode",{parentName:"p"},"AccountTransactionEvent"),", which has transactionStatus field:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"expired")," - end state for failed transactions,"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"done")," - final state for successful transactions. ")),(0,o.kt)("p",null,"If your backend was disabled during the callback or responded with an error, the event will have an ",(0,o.kt)("inlineCode",{parentName:"p"},"Error")," state.",(0,o.kt)("br",{parentName:"p"}),"\n","In this case you should query all events ",(0,o.kt)("inlineCode",{parentName:"p"},"/events")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"Error")," state at backend startup, process them and give each event a ",(0,o.kt)("inlineCode",{parentName:"p"},"Done")," state by calling ",(0,o.kt)("inlineCode",{parentName:"p"},"/events/mark"),".  "),(0,o.kt)("p",null,"2) by polling the GET method ",(0,o.kt)("inlineCode",{parentName:"p"},"/transactions/id/<uuid>")))}m.isMDXComponent=!0}}]);