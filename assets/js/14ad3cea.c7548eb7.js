"use strict";(self.webpackChunktts_notes=self.webpackChunktts_notes||[]).push([[5985],{3089:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>i});var s=l(5893),t=l(1151);const o={},r="\u5e38\u7528\u547d\u4ee4",c={id:"tool/shell/commands",title:"\u5e38\u7528\u547d\u4ee4",description:"MacOS \u5237\u65b0 DNS \u7f13\u5b58",source:"@site/docs/tool/shell/commands.md",sourceDirName:"tool/shell",slug:"/tool/shell/commands",permalink:"/notes/tool/shell/commands",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Batch",permalink:"/notes/tool/shell/bat"},next:{title:"DevOps Commands",permalink:"/notes/tool/shell/devops_commands"}},d={},i=[{value:"MacOS \u5237\u65b0 DNS \u7f13\u5b58",id:"macos-\u5237\u65b0-dns-\u7f13\u5b58",level:2},{value:"\u6307\u5b9a/\u53d6\u6d88\u4ee3\u7406",id:"\u6307\u5b9a\u53d6\u6d88\u4ee3\u7406",level:2},{value:"Tree",id:"tree",level:2},{value:"\u83b7\u53d6\u5f53\u524d\u811a\u672c\u7edd\u5bf9\u8def\u5f84",id:"\u83b7\u53d6\u5f53\u524d\u811a\u672c\u7edd\u5bf9\u8def\u5f84",level:2},{value:"\u540e\u53f0\u8fd0\u884c\u811a\u672c",id:"\u540e\u53f0\u8fd0\u884c\u811a\u672c",level:2},{value:"\u6253\u5305",id:"\u6253\u5305",level:2},{value:"\u5220\u9664 zip \u5305\u4e2d\u6307\u5b9a\u6587\u4ef6",id:"\u5220\u9664-zip-\u5305\u4e2d\u6307\u5b9a\u6587\u4ef6",level:2},{value:"\u4e0a\u4f20",id:"\u4e0a\u4f20",level:2},{value:"\u4e0b\u8f7d",id:"\u4e0b\u8f7d",level:2},{value:"\u767b\u5f55\u8df3\u677f\u673a",id:"\u767b\u5f55\u8df3\u677f\u673a",level:2},{value:"\u94fe\u63a5",id:"\u94fe\u63a5",level:2}];function a(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"\u5e38\u7528\u547d\u4ee4",children:"\u5e38\u7528\u547d\u4ee4"})}),"\n",(0,s.jsx)(n.h2,{id:"macos-\u5237\u65b0-dns-\u7f13\u5b58",children:"MacOS \u5237\u65b0 DNS \u7f13\u5b58"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"sudo killall -HUP mDNSResponder && sudo dscacheutil -flushcache\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u6307\u5b9a\u53d6\u6d88\u4ee3\u7406",children:"\u6307\u5b9a/\u53d6\u6d88\u4ee3\u7406"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"# \u6307\u5b9a\u4ee3\u7406\nexport http_proxy=http://127.0.0.1:10080\nexport https_proxy=$http_proxy\nexport ftp_proxy=$http_proxy\nexport socket_proxy=$http_proxy\nexport all_proxy=http://127.0.0.1:10080\nexport no_proxy=local,localhost,127.0.0.1\n# \u53d6\u6d88\u4ee3\u7406\nunset http_proxy\nunset https_proxy\nunset ftp_proxy\nunset socket_proxy\nunset all_proxy\nunset no_proxy\n# Sample\nexport http_proxy=http://127.0.0.1:10080 && export https_proxy=http://127.0.0.1:10080\n"})}),"\n",(0,s.jsx)(n.h2,{id:"tree",children:"Tree"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"find . -print | sed -e 's;[^/]*/;|____;g;s;____|; |;g'\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u83b7\u53d6\u5f53\u524d\u811a\u672c\u7edd\u5bf9\u8def\u5f84",children:"\u83b7\u53d6\u5f53\u524d\u811a\u672c\u7edd\u5bf9\u8def\u5f84"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"SCRIPT_DIR=$(cd $(dirname $0); pwd)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u540e\u53f0\u8fd0\u884c\u811a\u672c",children:"\u540e\u53f0\u8fd0\u884c\u811a\u672c"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"[sudo] nohup /path/of/shell > app.log 2>&1 &\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u6253\u5305",children:"\u6253\u5305"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"zip -9r dest.zip /path/of/zip/source \n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u5220\u9664-zip-\u5305\u4e2d\u6307\u5b9a\u6587\u4ef6",children:"\u5220\u9664 zip \u5305\u4e2d\u6307\u5b9a\u6587\u4ef6"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"zip -d /path/of/zip relative/path/of/delete/entry\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u4e0a\u4f20",children:"\u4e0a\u4f20"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"scp -i /path/of/key.pem -P 9527 /path/of/source root@127.0.0.1:/path/of/target\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u4e0b\u8f7d",children:"\u4e0b\u8f7d"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"scp -i /path/of/key.pem -P 9527 root@127.0.0.1:/path/of/source /path/of/target\n"})}),"\n",(0,s.jsx)(n.admonition,{title:"\u63d0\u793a",type:"info",children:(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u5982\u679c\u6587\u4ef6\u540d\u5305\u542b\u7a7a\u683c\uff0c\u9700\u5c06 ",(0,s.jsx)(n.code,{children:"\u7a7a\u683c"})," (",(0,s.jsx)(n.code,{children:" "}),") \u8f6c\u6362\u6210 ",(0,s.jsx)(n.code,{children:"\\\u7a7a\u683c"})," (",(0,s.jsx)(n.code,{children:"\\ "}),")\uff0c\u5e76\u5c06\u8def\u5f84\u6574\u4f53\u7528\u5355\u5f15\u53f7\u6216\u53cc\u5f15\u53f7\u62ec\u8d77\u6765\u3002"]}),"\n"]})}),"\n",(0,s.jsx)(n.h2,{id:"\u767b\u5f55\u8df3\u677f\u673a",children:"\u767b\u5f55\u8df3\u677f\u673a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"ssh user@host -p 2222 -i /path/of/key\n"})}),"\n",(0,s.jsx)(n.admonition,{title:"\u63d0\u793a",type:"info",children:(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u5982\u679c\u5728 ",(0,s.jsx)(n.code,{children:"jump server"})," \u4e0a\u914d\u7f6e\u4e86 ",(0,s.jsx)(n.code,{children:"ssh key"}),"\uff0c\u53ef\u4e0d\u7528\u6307\u5b9a ",(0,s.jsx)(n.code,{children:"key"}),"\u3002"]}),"\n"]})}),"\n",(0,s.jsx)(n.h2,{id:"\u94fe\u63a5",children:"\u94fe\u63a5"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"ln -s /path/of/source /path/of/target\nln -s /Users/tts/Apps/tools/ffmpeg/ffmpeg /Users/tts/Apps/tools/bin/ffmpeg\n"})})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},1151:(e,n,l)=>{l.d(n,{Z:()=>c,a:()=>r});var s=l(7294);const t={},o=s.createContext(t);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);