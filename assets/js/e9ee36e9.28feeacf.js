"use strict";(self.webpackChunktts_notes=self.webpackChunktts_notes||[]).push([[2829],{8947:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>i});var t=s(5893),o=s(1151);const a={},r="\u5e38\u7528\u547d\u4ee4",c={id:"database/mysql/commands",title:"\u5e38\u7528\u547d\u4ee4",description:"\u8bbe\u5b9a root \u7528\u6237\u5bc6\u7801",source:"@site/docs/database/mysql/commands.md",sourceDirName:"database/mysql",slug:"/database/mysql/commands",permalink:"/notes/database/mysql/commands",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"MongoDB \u5b89\u5168",permalink:"/notes/database/mongodb/mongo_auth"},next:{title:"Docker Entrypoint",permalink:"/notes/database/mysql/docker_entrypoint.sh"}},d={},i=[{value:"\u8bbe\u5b9a <code>root</code> \u7528\u6237\u5bc6\u7801",id:"\u8bbe\u5b9a-root-\u7528\u6237\u5bc6\u7801",level:2},{value:"\u8ba4\u8bc1\u6388\u6743",id:"\u8ba4\u8bc1\u6388\u6743",level:2}];function l(e){const n={code:"code",h1:"h1",h2:"h2",pre:"pre",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"\u5e38\u7528\u547d\u4ee4",children:"\u5e38\u7528\u547d\u4ee4"}),"\n",(0,t.jsxs)(n.h2,{id:"\u8bbe\u5b9a-root-\u7528\u6237\u5bc6\u7801",children:["\u8bbe\u5b9a ",(0,t.jsx)(n.code,{children:"root"})," \u7528\u6237\u5bc6\u7801"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"-- \u67e5\u770b\u5f53\u524d\u6240\u6709\u7528\u6237\nSELECT Host, User, plugin, authentication_string, password_expired, account_locked, Password_require_current FROM mysql.user \\G;\n-- \u5c06 `root` \u7528\u6237\u8bbe\u5b9a\u4e3a\u53ef\u4ece\u4efb\u610f\u5ba2\u6237\u7aef\u767b\u5f55\nUPDATE mysql.user SET Host = '%' WHERE User = 'root';\n-- \u66f4\u6539 `root` \u7528\u6237\u5bc6\u7801\nALTER USER 'root'@'%' IDENTIFIED WITH caching_sha2_password BY 'password';\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u8ba4\u8bc1\u6388\u6743",children:"\u8ba4\u8bc1\u6388\u6743"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"-- \u521b\u5efa\u7528\u6237\nCREATE USER 'user_name'@'host' IDENTIFIED WITH caching_sha2_password BY 'password';\nCREATE USER 'user_name'@'host' IDENTIFIED WITH mysql_native_password BY 'password';\n-- \u6388\u6743\nGRANT ALL ON *.* TO 'user_name'@'host' WITH GRANT OPTION;\nGRANT ALL ON schema_name.table_name TO 'user_name'@'host';\nGRANT ALL PRIVILEGES ON schema_name.table_name TO 'user_name'@'host';\n-- \u66f4\u6539\u5bc6\u7801\nALTER USER 'root'@'%' IDENTIFIED WITH caching_sha2_password BY 'new_password';\n-- \u5237\u65b0\u6743\u9650\nFLUSH PRIVILEGES;\n"})}),"\n",(0,t.jsx)(n.h1,{id:"database",children:"database"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"CREATE {DATABASE | SCHEMA} [IF NOT EXISTS] db_name\n    [create_option] ...\n\ncreate_option: [DEFAULT] {\n    CHARACTER SET [=] charset_name\n  | COLLATE [=] collation_name\n  | ENCRYPTION [=] {'Y' | 'N'}\n}\n-- Example\nCREATE DATABASE `foo_bar` CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci;\nCREATE DATABASE `foo_bar` CHARACTER SET = utf8 COLLATE = utf8_unicode_ci;\n"})})]})}function m(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>c,a:()=>r});var t=s(7294);const o={},a=t.createContext(o);function r(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);