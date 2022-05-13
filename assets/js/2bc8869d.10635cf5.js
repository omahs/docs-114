"use strict";(self.webpackChunkeverscale_docs_website=self.webpackChunkeverscale_docs_website||[]).push([[1174],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return p}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),m=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=m(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=m(n),p=o,f=d["".concat(s,".").concat(p)]||d[p]||u[p]||l;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,a=new Array(l);a[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var m=2;m<l;m++)a[m]=n[m];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9125:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return i},metadata:function(){return m},toc:function(){return u}});var r=n(7462),o=n(3366),l=(n(7294),n(3905)),a=["components"],i={title:"Create controller"},s="How to create controller",m={unversionedId:"develop/sdk-tools/everdev/guides/create-controller",id:"develop/sdk-tools/everdev/guides/create-controller",title:"Create controller",description:"Currently all the controllers must be implemented inside of the everdev package.",source:"@site/../../src/develop/sdk-tools/everdev/guides/create-controller.md",sourceDirName:"develop/sdk-tools/everdev/guides",slug:"/develop/sdk-tools/everdev/guides/create-controller",permalink:"/develop/sdk-tools/everdev/guides/create-controller",draft:!1,editUrl:"https://github.com/everscale-org/docs/edit/main/.build/website/../../src/develop/sdk-tools/everdev/guides/create-controller.md",tags:[],version:"current",lastUpdatedAt:1652461558,formattedLastUpdatedAt:"5/13/2022",frontMatter:{title:"Create controller"},sidebar:"tutorialSidebar",previous:{title:"View controller info",permalink:"/develop/sdk-tools/everdev/guides/controller-info"},next:{title:"Quick start",permalink:"/develop/sdk-tools/everdev/guides/quick-start"}},c={},u=[{value:"What a controller should and what it shouldn&#39;t to do",id:"what-a-controller-should-and-what-it-shouldnt-to-do",level:2},{value:"How to implement a Controller",id:"how-to-implement-a-controller",level:2},{value:"Controller API Reference",id:"controller-api-reference",level:2}],d={toc:u};function p(e){var t=e.components,n=(0,o.Z)(e,a);return(0,l.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"how-to-create-controller"},"How to create controller"),(0,l.kt)("p",null,"Currently all the controllers must be implemented inside of the ",(0,l.kt)("inlineCode",{parentName:"p"},"everdev")," package."),(0,l.kt)("p",null,"To create a new controller:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Clone ",(0,l.kt)("inlineCode",{parentName:"li"},"git@github.com:tonlabs/everdev.git"),"."),(0,l.kt)("li",{parentName:"ul"},"Create and checkout branch for the new controller."),(0,l.kt)("li",{parentName:"ul"},"Create a folder under ",(0,l.kt)("inlineCode",{parentName:"li"},"src/controllers"),"."),(0,l.kt)("li",{parentName:"ul"},"Implement the controller code."),(0,l.kt)("li",{parentName:"ul"},"Include the new controller in file ",(0,l.kt)("inlineCode",{parentName:"li"},"src/controllers/index.js"),"."),(0,l.kt)("li",{parentName:"ul"},"Create pull request.")),(0,l.kt)("h2",{id:"what-a-controller-should-and-what-it-shouldnt-to-do"},"What a controller should and what it shouldn't to do"),(0,l.kt)("p",null,"Controller should:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Expose functionality to the user as a list of commands."),(0,l.kt)("li",{parentName:"ul"},"Install the required tool components on demand (on first usage)."),(0,l.kt)("li",{parentName:"ul"},"Start and stop the tool components that acts like a demons."),(0,l.kt)("li",{parentName:"ul"},"Define three commands to control the tool version:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"version")," to show the currently installed tool version;"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"update")," to update the tool to the latest available version;"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"use")," to select the specified tool version as the current version.")))),(0,l.kt)("p",null,"Controller shouldn't:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Implement tool functionality itself. Controller is a connector between the user and the existing development tool."),(0,l.kt)("li",{parentName:"ul"},"Implement user interaction itself. All user interaction must be implemented exactly in the terms of everdev extensibility.")),(0,l.kt)("h2",{id:"how-to-implement-a-controller"},"How to implement a Controller"),(0,l.kt)("p",null,"Create a folder for a new controller:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"mkdir src/controllers/foo\ncd src/controllers/foo\n")),(0,l.kt)("p",null,"Create ",(0,l.kt)("inlineCode",{parentName:"p"},"index.ts")," with the controller's definition:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'import { ToolController } from "../../core";\nimport { versionCommand } from "./version";\nimport { updateCommand } from "./update";\nimport { runCommand } from "./run";\nexport const Foo: ToolController = {\n    name: "foo",\n    title: "Foo Tool",\n    commands: [\n        versionCommand,\n        updateCommand,\n        runCommand,\n    ],\n};\n')),(0,l.kt)("p",null,"Create ",(0,l.kt)("inlineCode",{parentName:"p"},"installer.ts")," to implement all the code related to the tool installation:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'import path from "path";\nimport fs from "fs";\nimport { Terminal, everdevHome } from "../../core";\nfunction fooHome() {\n    return path.resolve(everdevHome(), "foo");\n}\nasync function ensureInstalled(terminal: Terminal) {\n}\nexport async function getVersion(): Promise<string> {\n    return "1.0.0";\n}\nexport async function updateVersion(terminal: Terminal) {\n    if (fs.existsSync(fooHome())) {\n        fs.rmdirSync(fooHome(), { recursive: true });\n    }\n    ensureInstalled(terminal);\n}\nexport async function runFoo(terminal: Terminal, workDir: string, args: string[]): Promise<void> {\n    ensureInstalled(terminal);\n    terminal.log("Foo succeeded");\n};\n')),(0,l.kt)("p",null,"Create ",(0,l.kt)("inlineCode",{parentName:"p"},"version.ts")," command handler:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'import { getVersion } from "./installer";\nimport { Command, Terminal } from "../../core";\nexport const versionCommand: Command = {\n    name: "version",\n    title: "Show Foo Version",\n    async run(terminal: Terminal, _args: {}): Promise<void> {\n        terminal.log(await getVersion());\n    },\n};\n')),(0,l.kt)("p",null,"Create ",(0,l.kt)("inlineCode",{parentName:"p"},"update.ts")," command handler:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'import { updateVersion } from "./installer";\nimport { Command, Terminal } from "../../core";\nexport const versionCommand: Command = {\n    name: "update",\n    title: "Update Foo Version",\n    async run(terminal: Terminal, _args: {}): Promise<void> {\n        await updateVersion(terminal);\n    },\n};\n')),(0,l.kt)("p",null,"Create ",(0,l.kt)("inlineCode",{parentName:"p"},"run.ts")," command handler:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'import { runFoo } from "./installer";\nimport { Command, Terminal } from "../../core";\nexport const runCommand: Command = {\n    name: "run",\n    title: "Run Foo",\n    async run(terminal: Terminal, args: {}): Promise<void> {\n        await runFoo(terminal, args);\n    },\n};\n')),(0,l.kt)("h2",{id:"controller-api-reference"},"Controller API Reference"),(0,l.kt)("p",null,"You can find API reference in form of TSDoc in ",(0,l.kt)("inlineCode",{parentName:"p"},"src/core/index.ts"),"."))}p.isMDXComponent=!0}}]);