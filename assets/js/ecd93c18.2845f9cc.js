"use strict";(self.webpackChunktts_notes=self.webpackChunktts_notes||[]).push([[3036],{4030:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>i});var s=n(5893),r=n(1151);const a={},o="h2database server",l={id:"database/other/h2",title:"h2database server",description:"\u901a\u7528\u547d\u4ee4",source:"@site/docs/database/other/h2.md",sourceDirName:"database/other",slug:"/database/other/h2",permalink:"/notes/database/other/h2",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Mysql Server Docker",permalink:"/notes/database/mysql/mysql_server_docker"},next:{title:"\u5e38\u7528\u547d\u4ee4",permalink:"/notes/database/postgresql/commands"}},c={},i=[{value:"\u901a\u7528\u547d\u4ee4",id:"\u901a\u7528\u547d\u4ee4",level:2},{value:"\u521b\u5efa\u6570\u636e\u5e93\u5b9e\u4f8b",id:"\u521b\u5efa\u6570\u636e\u5e93\u5b9e\u4f8b",level:2},{value:"\u542f\u52a8\u6570\u636e\u5e93",id:"\u542f\u52a8\u6570\u636e\u5e93",level:2},{value:"\u521b\u5efa SCHEMA",id:"\u521b\u5efa-schema",level:2},{value:"\u6570\u636e\u5e93 server",id:"\u6570\u636e\u5e93-server",level:2},{value:"JDBC",id:"jdbc",level:2}];function d(e){const t={admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"h2database-server",children:"h2database server"})}),"\n",(0,s.jsx)(t.h2,{id:"\u901a\u7528\u547d\u4ee4",children:"\u901a\u7528\u547d\u4ee4"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"# \u67e5\u770b server \u5e2e\u52a9\njava -cp h2.jar org.h2.tools.Server -help\n"})}),"\n",(0,s.jsx)(t.h2,{id:"\u521b\u5efa\u6570\u636e\u5e93\u5b9e\u4f8b",children:"\u521b\u5efa\u6570\u636e\u5e93\u5b9e\u4f8b"}),"\n",(0,s.jsxs)(t.admonition,{title:"\u6ce8\u610f",type:"info",children:[(0,s.jsxs)(t.p,{children:["\u8fd9\u91cc\u6307\u7684\u662f ",(0,s.jsx)(t.code,{children:"\u6570\u636e\u5e93\u5b9e\u4f8b"}),"\uff0c\u4e0d\u662f ",(0,s.jsx)(t.code,{children:"database/schema"}),"\u3002"]}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"java -cp h2.jar org.h2.tools.Shell\n\nWelcome to H2 Shell 2.1.214 (2022-06-13)\nExit with Ctrl+C\n[Enter]   jdbc:h2:~/test\nURL       jdbc:h2:~/.h2/test\n[Enter]   org.h2.Driver\nDriver    org.h2.Driver\n[Enter]\nUser      h2_test_user\nPassword\nType the same password again to confirm database creation.\nPassword\nConnected\nCommands are case insensitive; SQL statements end with ';'\nhelp or ?      Display this help\nlist           Toggle result list / stack trace mode\nmaxwidth       Set maximum column width (default is 100)\nautocommit     Enable or disable autocommit\nhistory        Show the last 20 statements\nquit or exit   Close the connection and exit\n\nsql> quit\nConnection closed\n"})}),(0,s.jsx)(t.h2,{id:"\u542f\u52a8\u6570\u636e\u5e93",children:"\u542f\u52a8\u6570\u636e\u5e93"}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"java -cp h2.jar org.h2.tools.Server -trace -tcp -tcpAllowOthers -tcpPort 9092\n"})}),(0,s.jsx)(t.h2,{id:"\u521b\u5efa-schema",children:"\u521b\u5efa SCHEMA"}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:"CREATE SCHEMA `CARP_CRAWLER`;\n"})}),(0,s.jsx)(t.h2,{id:"\u6570\u636e\u5e93-server",children:"\u6570\u636e\u5e93 server"}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"#!/bin/bash\n\nBIN_DIR=$(cd `dirname $0`; pwd -P)\nH2_DIR=$BIN_DIR/../h2\nnohup $JAVA_HOME/bin/java -cp $H2_DIR/h2.jar org.h2.tools.Server -trace -tcp -tcpAllowOthers -tcpPort 9092 > $H2_DIR/h2.log 2>&1 &\n"})}),(0,s.jsx)(t.h2,{id:"jdbc",children:"JDBC"}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-text",children:"jdbc:h2:tcp://127.0.0.1:9092/~/.h2/test\n"})})]})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>o});var s=n(7294);const r={},a=s.createContext(r);function o(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);