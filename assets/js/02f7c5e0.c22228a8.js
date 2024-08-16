"use strict";(self.webpackChunktts_notes=self.webpackChunktts_notes||[]).push([[9730],{6134:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var s=t(5893),r=t(1151);const a={},o="Mysql \u914d\u7f6e\u6587\u4ef6",l={id:"database/mysql/mysql.cnf",title:"Mysql \u914d\u7f6e\u6587\u4ef6",description:"",source:"@site/docs/database/mysql/mysql.cnf.md",sourceDirName:"database/mysql",slug:"/database/mysql/mysql.cnf",permalink:"/notes/database/mysql/mysql.cnf",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Docker Entrypoint",permalink:"/notes/database/mysql/docker_entrypoint.sh"},next:{title:"Mysql Server Docker",permalink:"/notes/database/mysql/mysql_server_docker"}},i={},d=[];function c(e){const n={code:"code",h1:"h1",header:"header",pre:"pre",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"mysql-\u914d\u7f6e\u6587\u4ef6",children:"Mysql \u914d\u7f6e\u6587\u4ef6"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ini",children:"[mysqld]\nserver-id=1\nbind-address=0.0.0.0\nport=3306\ndatadir=/data/mysql/data\ntmpdir=/data/mysql/temp\nsecure_file_priv=/data/mysql\n\ncharacter-set-server=utf8mb4\ncollation-server=utf8mb4_unicode_ci\ndefault-time-zone=+8:00\n\nlog-bin=mysql-bin\nbinlog_format=ROW\nlog-bin-index=mysql-bin.index\nrelay-log=relay-log\nrelay_log_index=relay-log.index\nlog-error=/data/mysql/log/mysql.err.log\nslow_query_log=on\nlong_query_time=10\nslow_query_log_file=/data/mysql/log/mysql.slow.log\n\ninnodb_use_native_aio=0\n\n[mysqldump]\nquick\nmax_allowed_packet=16M\n\n[mysql]\ndefault-character-set=utf8mb4\nno-auto-rehash\n"})})]})}function m(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>o});var s=t(7294);const r={},a=s.createContext(r);function o(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);