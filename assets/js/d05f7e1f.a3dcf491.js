"use strict";(self.webpackChunktts_notes=self.webpackChunktts_notes||[]).push([[2079],{545:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>g,frontMatter:()=>c,metadata:()=>l,toc:()=>r});var i=t(5893),o=t(1151);const c={},s="\u65b0\u589e & \u7f16\u8f91 git \u914d\u7f6e",l={id:"tool/git/configuration",title:"\u65b0\u589e & \u7f16\u8f91 git \u914d\u7f6e",description:"git \u7684\u914d\u7f6e\u67093\u4e2a\u7c7b\u578b\uff0c\u5206\u522b\u662f local(\u5f53\u524d\u4ed3\u5e93\uff0c.git/config)\u3001global(\u5f53\u524d\u7528\u6237\uff0c~/.gitconfig)\u3001system(\u7cfb\u7edf\uff0c/etc/gitconfig)\uff0c\u4f18\u5148\u7ea7\u4ece\u9ad8\u5230\u4f4e\u3002 local \u4e3a\u9ed8\u8ba4\u7c7b\u578b\u3002",source:"@site/docs/tool/git/configuration.md",sourceDirName:"tool/git",slug:"/tool/git/configuration",permalink:"/notes/tool/git/configuration",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"\u5e38\u7528\u547d\u4ee4",permalink:"/notes/tool/git/commands"},next:{title:"ignore & keep",permalink:"/notes/tool/git/git_ignore_keep"}},a={},r=[{value:"\u5199\u5165\u914d\u7f6e",id:"\u5199\u5165\u914d\u7f6e",level:2},{value:"\u5220\u9664\u914d\u7f6e",id:"\u5220\u9664\u914d\u7f6e",level:2},{value:"\u7f16\u8f91\u914d\u7f6e(\u6253\u5f00\u7f16\u8f91\u5668)",id:"\u7f16\u8f91\u914d\u7f6e\u6253\u5f00\u7f16\u8f91\u5668",level:2},{value:"\u914d\u7f6e\u6587\u4ef6\u793a\u4f8b",id:"\u914d\u7f6e\u6587\u4ef6\u793a\u4f8b",level:2}];function d(e){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"\u65b0\u589e--\u7f16\u8f91-git-\u914d\u7f6e",children:"\u65b0\u589e & \u7f16\u8f91 git \u914d\u7f6e"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["git \u7684\u914d\u7f6e\u6709",(0,i.jsx)(n.code,{children:"3"}),"\u4e2a\u7c7b\u578b\uff0c\u5206\u522b\u662f ",(0,i.jsx)(n.code,{children:"local"}),"(\u5f53\u524d\u4ed3\u5e93\uff0c",(0,i.jsx)(n.code,{children:".git/config"}),")\u3001",(0,i.jsx)(n.code,{children:"global"}),"(\u5f53\u524d\u7528\u6237\uff0c",(0,i.jsx)(n.code,{children:"~/.gitconfig"}),")\u3001",(0,i.jsx)(n.code,{children:"system"}),"(\u7cfb\u7edf\uff0c",(0,i.jsx)(n.code,{children:"/etc/gitconfig"}),")\uff0c\u4f18\u5148\u7ea7\u4ece\u9ad8\u5230\u4f4e\u3002 ",(0,i.jsx)(n.code,{children:"local"})," \u4e3a\u9ed8\u8ba4\u7c7b\u578b\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u5199\u5165\u914d\u7f6e",children:"\u5199\u5165\u914d\u7f6e"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"git config --system name value\ngit config --global name value\ngit config name value\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u5220\u9664\u914d\u7f6e",children:"\u5220\u9664\u914d\u7f6e"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"git config --unset --system name\ngit config --unset --global name\ngit config --unset name\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u7f16\u8f91\u914d\u7f6e\u6253\u5f00\u7f16\u8f91\u5668",children:"\u7f16\u8f91\u914d\u7f6e(\u6253\u5f00\u7f16\u8f91\u5668)"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"git config --edit --system\ngit config --edit --global\ngit config --edit\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u914d\u7f6e\u6587\u4ef6\u793a\u4f8b",children:"\u914d\u7f6e\u6587\u4ef6\u793a\u4f8b"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ini",children:"[user]\n        name = TSY\n[init]\n        defaultBranch = master\n[alias]\n        ad = add .\n        cm = commit -m\n        acm = !git add . && git commit -m\n        ac = !git add . && git commit\n        lg = log --decorate=full --color=always --graph --date=format:'%Y-%m-%d %H:%M:%S' --pretty=format:'%Cblue %H%d - %ad - %an(%ae) - %s'\n        ri = rebase --ignore-date -i\n        rh = reset --hard HEAD\n        ra = commit --amend --reset-author\n        cp = cherry-pick\n        mf = merge --ff\n        mn = merge --no-ff\n        mfs = merge --ff --squash\n        mns = merge --no-ff --squash\n        co = checkout\n        cb = checkout -b\n        pr = pull -r\n        sl = stash list\n        sp = stash pop\n        df = diff\n"})})]})}function g(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>s});var i=t(7294);const o={},c=i.createContext(o);function s(e){const n=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(c.Provider,{value:n},e.children)}}}]);