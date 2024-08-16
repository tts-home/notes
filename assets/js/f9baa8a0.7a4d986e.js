"use strict";(self.webpackChunktts_notes=self.webpackChunktts_notes||[]).push([[5045],{9302:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var t=r(5893),a=r(1151);const s={},o="\u6e90\u7801\u7f16\u7ece\u5b89\u88c5",i={id:"tool/aria2/build_from_source",title:"\u6e90\u7801\u7f16\u7ece\u5b89\u88c5",description:"MacOS",source:"@site/docs/tool/aria2/build_from_source.md",sourceDirName:"tool/aria2",slug:"/tool/aria2/build_from_source",permalink:"/notes/tool/aria2/build_from_source",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Nacos Discovery",permalink:"/notes/spring/nacos/nacos_discovery"},next:{title:"Aria2 \u4e0b\u8f7d\u547d\u4ee4",permalink:"/notes/tool/aria2/commands"}},l={},c=[{value:"MacOS",id:"macos",level:2},{value:"\u4e0b\u8f7d\u6e90\u7801",id:"\u4e0b\u8f7d\u6e90\u7801",level:3},{value:"\u7f16\u7ece\u5b89\u88c5",id:"\u7f16\u7ece\u5b89\u88c5",level:3}];function d(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"\u6e90\u7801\u7f16\u7ece\u5b89\u88c5",children:"\u6e90\u7801\u7f16\u7ece\u5b89\u88c5"})}),"\n",(0,t.jsx)(n.h2,{id:"macos",children:"MacOS"}),"\n",(0,t.jsx)(n.h3,{id:"\u4e0b\u8f7d\u6e90\u7801",children:"\u4e0b\u8f7d\u6e90\u7801"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"git"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"git clone -b release-1.36.0 https://github.com/aria2/aria2.git ./aria2\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"wget"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"wget https://github.com/aria2/aria2/releases/download/release-1.36.0/aria2-1.36.0.tar.gz\ntar -xvf aria2-1.36.0.tar.gz --strip-components 1 -C ./aria2\n"})}),"\n",(0,t.jsx)(n.h3,{id:"\u7f16\u7ece\u5b89\u88c5",children:"\u7f16\u7ece\u5b89\u88c5"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"cd aria2\nmake configure\n./configure --prefix=/usr/local\nsudo make install\n"})})]})}function u(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>i,a:()=>o});var t=r(7294);const a={},s=t.createContext(a);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);