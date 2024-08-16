"use strict";(self.webpackChunktts_notes=self.webpackChunktts_notes||[]).push([[6122],{6738:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>s,contentTitle:()=>d,default:()=>k,frontMatter:()=>t,metadata:()=>i,toc:()=>l});var c=n(5893),o=n(1151);const t={},d="Docker Network",i={id:"cicd/docker/docker_network",title:"Docker Network",description:"Bridge",source:"@site/docs/cicd/docker/docker_network.md",sourceDirName:"cicd/docker",slug:"/cicd/docker/docker_network",permalink:"/notes/cicd/docker/docker_network",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Dockerfile Collection",permalink:"/notes/cicd/docker/docker_file_collection"},next:{title:"Docker Timezone",permalink:"/notes/cicd/docker/docker_timezone"}},s={},l=[{value:"Bridge",id:"bridge",level:2},{value:"\u521b\u5efa\u6865\u63a5",id:"\u521b\u5efa\u6865\u63a5",level:3},{value:"\u6307\u5b9a\u7f51\u7edc\u542f\u52a8\u5bb9\u5668",id:"\u6307\u5b9a\u7f51\u7edc\u542f\u52a8\u5bb9\u5668",level:3},{value:"\u79fb\u9664\u6865\u63a5",id:"\u79fb\u9664\u6865\u63a5",level:3}];function a(e){const r={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",pre:"pre",...(0,o.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r.header,{children:(0,c.jsx)(r.h1,{id:"docker-network",children:"Docker Network"})}),"\n",(0,c.jsx)(r.h2,{id:"bridge",children:"Bridge"}),"\n",(0,c.jsx)(r.h3,{id:"\u521b\u5efa\u6865\u63a5",children:"\u521b\u5efa\u6865\u63a5"}),"\n",(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:"language-shell",children:"docker network create --driver=bridge docker\n"})}),"\n",(0,c.jsx)(r.h3,{id:"\u6307\u5b9a\u7f51\u7edc\u542f\u52a8\u5bb9\u5668",children:"\u6307\u5b9a\u7f51\u7edc\u542f\u52a8\u5bb9\u5668"}),"\n",(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:"language-shell",children:"docker run --network docker --network-alias mysql ...\ndocker run --network docker --network-alias nacos ...\n"})}),"\n",(0,c.jsx)(r.h3,{id:"\u79fb\u9664\u6865\u63a5",children:"\u79fb\u9664\u6865\u63a5"}),"\n",(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:"language-shell",children:"docker network rm docker\n"})})]})}function k(e={}){const{wrapper:r}={...(0,o.a)(),...e.components};return r?(0,c.jsx)(r,{...e,children:(0,c.jsx)(a,{...e})}):a(e)}},1151:(e,r,n)=>{n.d(r,{Z:()=>i,a:()=>d});var c=n(7294);const o={},t=c.createContext(o);function d(e){const r=c.useContext(t);return c.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),c.createElement(t.Provider,{value:r},e.children)}}}]);