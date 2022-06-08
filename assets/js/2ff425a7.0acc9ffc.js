"use strict";(self.webpackChunkeverscale_docs_website=self.webpackChunkeverscale_docs_website||[]).push([[2662],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return v}});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),c=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=c(e.components);return o.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},p=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),p=c(t),v=r,m=p["".concat(l,".").concat(v)]||p[v]||u[v]||i;return t?o.createElement(m,s(s({ref:n},d),{},{components:t})):o.createElement(m,s({ref:n},d))}));function v(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,s=new Array(i);s[0]=p;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a.mdxType="string"==typeof e?e:r,s[1]=a;for(var c=2;c<i;c++)s[c]=t[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},4247:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return l},default:function(){return v},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return u}});var o=t(7462),r=t(3366),i=(t(7294),t(3905)),s=["components"],a={title:"Troubleshooting",sidebar_position:2},l="EverDev Troubleshooting",c={unversionedId:"develop/api-tools/everdev/troubleshooting",id:"develop/api-tools/everdev/troubleshooting",title:"Troubleshooting",description:"Here are some solutions to frequently encountered problems.",source:"@site/../../src/develop/api-tools/everdev/troubleshooting.md",sourceDirName:"develop/api-tools/everdev",slug:"/develop/api-tools/everdev/troubleshooting",permalink:"/develop/api-tools/everdev/troubleshooting",draft:!1,editUrl:"https://github.com/everscale-org/docs/edit/main/.build/website/../../src/develop/api-tools/everdev/troubleshooting.md",tags:[],version:"current",lastUpdatedAt:1654715952,formattedLastUpdatedAt:"6/8/2022",sidebarPosition:2,frontMatter:{title:"Troubleshooting",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"How to view controller info",permalink:"/develop/api-tools/everdev/guides/controller-info"},next:{title:"Use in JS Application",permalink:"/develop/api-tools/everdev/js-application"}},d={},u=[{value:"EACCESS errors during installation",id:"eaccess-errors-during-installation",level:2},{value:"command not found: everdev",id:"command-not-found-everdev",level:2},{value:"Unspecified Error on <code>everdev sol compile</code> in Windows 10",id:"unspecified-error-on-everdev-sol-compile-in-windows-10",level:2},{value:"TON OS SE: Couldn\u2019t connect to Docker daemon",id:"ton-os-se-couldnt-connect-to-docker-daemon",level:2},{value:"After everdev is installed on Ubuntu WSL on Windows 10 old version is there",id:"after-everdev-is-installed-on-ubuntu-wsl-on-windows-10-old-version-is-there",level:2}],p={toc:u};function v(e){var n=e.components,t=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"everdev-troubleshooting"},"EverDev Troubleshooting"),(0,i.kt)("p",null,"Here are some solutions to frequently encountered problems."),(0,i.kt)("h2",{id:"eaccess-errors-during-installation"},"EACCESS errors during installation"),(0,i.kt)("p",null,"These errors can occur, if npm was installed without the use of a version manager."),(0,i.kt)("p",null,"Refer to ",(0,i.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally"},"this article")," for ways to resolve the issue."),(0,i.kt)("h2",{id:"command-not-found-everdev"},"command not found: everdev"),(0,i.kt)("p",null,"This error may happen because ",(0,i.kt)("inlineCode",{parentName:"p"},"PATH")," environment variable was not correctly updated to contain path to Node.js binary."),(0,i.kt)("p",null,"If you use Linux, ensure the following command is in your ",(0,i.kt)("inlineCode",{parentName:"p"},"~/.bashrc")," for bash shell or ",(0,i.kt)("inlineCode",{parentName:"p"},"~/.zshrc")," for zsh shell:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"export PATH=~/.npm-global/bin:$PATH\n")),(0,i.kt)("p",null,"If you have installed Node.js using Homebrew on MacOS, npm binaries could be found in ",(0,i.kt)("inlineCode",{parentName:"p"},"/usr/local/share/npm/bin"),".\nSo, in your ",(0,i.kt)("inlineCode",{parentName:"p"},"~/.zshrc")," file add the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"export PATH=/usr/local/share/npm/bin:$PATH\n")),(0,i.kt)("p",null,"If you use Windows, add path to NodeJS bin directory via environment variables settings dialogue and relaunch console window."),(0,i.kt)("p",null,"Additionally, make sure ",(0,i.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally"},"permissions are alright"),"."),(0,i.kt)("h2",{id:"unspecified-error-on-everdev-sol-compile-in-windows-10"},"Unspecified Error on ",(0,i.kt)("inlineCode",{parentName:"h2"},"everdev sol compile")," in Windows 10"),(0,i.kt)("p",null,"1) Run \\Users\\UserName\\everdev\\solidity\\solc.exe and review error messages.\n2) Update Visual Studio components and make sure ",(0,i.kt)("a",{parentName:"p",href:"https://support.microsoft.com/en-us/topic/the-latest-supported-visual-c-downloads-2647da03-1eea-4433-9aff-95f26a218cc0"},"vc_redist is installed"),"."),(0,i.kt)("h2",{id:"ton-os-se-couldnt-connect-to-docker-daemon"},"TON OS SE: Couldn\u2019t connect to Docker daemon"),(0,i.kt)("p",null,"This error occurs in two cases. Either the docker daemon isn't running, or current user doesn't have rights to access docker."),(0,i.kt)("p",null,"You can ",(0,i.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/install/linux-postinstall/"},"fix the rights")," issue either by running relevant commands as the superuser or adding the user to the ",(0,i.kt)("inlineCode",{parentName:"p"},"docker")," group: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"sudo usermod -a -G docker $USER\n")),(0,i.kt)("p",null,"Make sure to restart the system or log out and back in, for the new group settings to take effect."),(0,i.kt)("h2",{id:"after-everdev-is-installed-on-ubuntu-wsl-on-windows-10-old-version-is-there"},"After everdev is installed on Ubuntu WSL on Windows 10 old version is there"),(0,i.kt)("p",null,"This issue can occur if npm was installed without correct permissions for Linux/Ubuntu.\nRefer to ",(0,i.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally"},"this article")," for ways to resolve it."),(0,i.kt)("p",null,"After it is done, reload terminal and install everdev via `npm i everdev -g' again."))}v.isMDXComponent=!0}}]);