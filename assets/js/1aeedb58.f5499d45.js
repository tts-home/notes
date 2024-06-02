"use strict";(self.webpackChunktts_notes=self.webpackChunktts_notes||[]).push([[4947],{1536:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var a=s(5893),t=s(1151);const r={},o="maven \u4ed3\u5e93\u58f0\u660e",i={id:"cicd/gradle/repositories",title:"maven \u4ed3\u5e93\u58f0\u660e",description:"\u79c1\u670d\u4ed3\u5e93\u5bc6\u7801\u53ef\u5728\u7528\u6237\u5168\u5c40 gradle.properties \u914d\u7f6e\u6587\u4ef6\u4e2d\u914d\u7f6e\u3002",source:"@site/docs/cicd/gradle/repositories.md",sourceDirName:"cicd/gradle",slug:"/cicd/gradle/repositories",permalink:"/notes/cicd/gradle/repositories",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"artifact \u53d1\u5e03",permalink:"/notes/cicd/gradle/pushlish_artifact"},next:{title:"Settings Script Sample",permalink:"/notes/cicd/gradle/settings_sample"}},l={},c=[{value:"pluginManagement",id:"pluginmanagement",level:2},{value:"\u4f9d\u8d56\u62c9\u53d6\u4ed3\u5e93",id:"\u4f9d\u8d56\u62c9\u53d6\u4ed3\u5e93",level:2},{value:"\u4f9d\u8d56\u53d1\u5e03\u4ed3\u5e93",id:"\u4f9d\u8d56\u53d1\u5e03\u4ed3\u5e93",level:2},{value:"\u914d\u7f6e\u9879\u76ee\u7684\u62c9\u53d6\u4ed3\u5e93",id:"\u914d\u7f6e\u9879\u76ee\u7684\u62c9\u53d6\u4ed3\u5e93",level:2},{value:"\u914d\u7f6e\u9879\u76ee\u7684\u53d1\u5e03\u4ed3\u5e93",id:"\u914d\u7f6e\u9879\u76ee\u7684\u53d1\u5e03\u4ed3\u5e93",level:2}];function p(n){const e={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,t.a)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h1,{id:"maven-\u4ed3\u5e93\u58f0\u660e",children:"maven \u4ed3\u5e93\u58f0\u660e"}),"\n",(0,a.jsx)(e.admonition,{title:"\u6ce8\u610f",type:"info",children:(0,a.jsxs)(e.p,{children:["\u79c1\u670d\u4ed3\u5e93\u5bc6\u7801\u53ef\u5728\u7528\u6237\u5168\u5c40 ",(0,a.jsx)(e.code,{children:"gradle.properties"})," \u914d\u7f6e\u6587\u4ef6\u4e2d\u914d\u7f6e\u3002"]})}),"\n",(0,a.jsx)(e.h2,{id:"pluginmanagement",children:"pluginManagement"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-groovy",children:'repositories {\n    maven {\n        name = "aliyun-maven"\n        url = "https://maven.aliyun.com/nexus/content/groups/public/"\n        content {\n            excludeGroup "org.tts.coding"\n        }\n    }\n    mavenCentral {\n        content {\n            excludeGroup "org.tts.coding"\n        }\n    }\n    gradlePluginPortal {\n        content {\n            excludeGroup "org.tts.coding"\n        }\n    }\n    maven {\n        name = "nexus-release"\n        url = "https://packages.aliyun.com/maven/repository/2109469-release-ORaPIw/"\n        credentials {\n            username = "${maven_release_username}"\n            password = "${maven_release_password}"\n        }\n        content {\n            includeGroup "org.tts.coding"\n        }\n        mavenContent {\n            releasesOnly()\n        }\n    }\n    maven {\n        name = "nexus-snapshot"\n        url = "https://packages.aliyun.com/maven/repository/2109469-snapshot-Vq6lEd/"\n        credentials {\n            username = "${maven_snapshot_username}"\n            password = "${maven_snapshot_password}"\n        }\n        content {\n            includeGroup "org.tts.coding"\n        }\n        mavenContent {\n            snapshotsOnly()\n        }\n    }\n}\n'})}),"\n",(0,a.jsx)(e.h2,{id:"\u4f9d\u8d56\u62c9\u53d6\u4ed3\u5e93",children:"\u4f9d\u8d56\u62c9\u53d6\u4ed3\u5e93"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-groovy",children:'/* maven \u62c9\u53d6\u4ed3\u5e93 */\next.pullRepositories = [\n    {\n        name = "aliyun-maven"\n        url = "https://maven.aliyun.com/nexus/content/groups/public/"\n        content {\n            excludeGroup "org.tts.coding"\n        }\n    },\n    {\n        name = "nexus-release"\n        url = "https://packages.aliyun.com/maven/repository/2109469-release-ORaPIw/"\n        credentials {\n            username = "${maven_release_username}"\n            password = "${maven_release_password}"\n        }\n        content {\n            includeGroup "org.tts.coding"\n        }\n        mavenContent {\n            releasesOnly()\n        }\n    },\n    {\n        name = "nexus-snapshot"\n        url = "https://packages.aliyun.com/maven/repository/2109469-snapshot-Vq6lEd/"\n        credentials {\n            username = "${maven_snapshot_username}"\n            password = "${maven_snapshot_password}"\n        }\n        content {\n            includeGroup "org.tts.coding"\n        }\n        mavenContent {\n            snapshotsOnly()\n        }\n    }\n]\n'})}),"\n",(0,a.jsx)(e.admonition,{title:"\u6ce8\u610f",type:"info",children:(0,a.jsxs)(e.p,{children:["\u62c9\u53d6\u4ed3\u5e93\u9700\u5c06 ",(0,a.jsx)(e.code,{children:"mavenCentral"})," \u4ed3\u5e93\u52a0\u4e0a\uff0c\u914d\u7f6e\u53c2\u8003 ",(0,a.jsx)(e.code,{children:"pluginManagement"})," -> ",(0,a.jsx)(e.code,{children:"repositories"})," \u90e8\u5206\u3002"]})}),"\n",(0,a.jsx)(e.h2,{id:"\u4f9d\u8d56\u53d1\u5e03\u4ed3\u5e93",children:"\u4f9d\u8d56\u53d1\u5e03\u4ed3\u5e93"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-groovy",children:'/* maven \u63a8\u9001\u4ed3\u5e93 */\next.pushRepositories = [\n    snapshot: [\n        {\n            name = "nexus-snapshot"\n            url = "https://packages.aliyun.com/maven/repository/2109469-snapshot-Vq6lEd/"\n            credentials {\n                username = "${maven_snapshot_username}"\n                password = "${maven_snapshot_password}"\n            }\n        }\n    ],\n    relsease: [\n        {\n            name = "nexus-release"\n            url = "https://packages.aliyun.com/maven/repository/2109469-release-ORaPIw/"\n            credentials {\n                username = "${maven_release_username}"\n                password = "${maven_release_password}"\n            }\n        }\n    ]\n]\n'})}),"\n",(0,a.jsx)(e.h2,{id:"\u914d\u7f6e\u9879\u76ee\u7684\u62c9\u53d6\u4ed3\u5e93",children:"\u914d\u7f6e\u9879\u76ee\u7684\u62c9\u53d6\u4ed3\u5e93"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-groovy",children:'allprojects {\n    buildscript {\n        repositories {\n            pullRepositories.each { repository -> maven repository }\n            mavenCentral {\n                content {\n                    excludeGroup "org.tts.coding"\n                }\n            }\n        }\n    }\n    repositories {\n        pullRepositories.each { repository -> maven repository }\n        mavenCentral {\n            content {\n                excludeGroup "org.tts.coding"\n            }\n        }\n    }\n    ......    \n}\n'})}),"\n",(0,a.jsx)(e.h2,{id:"\u914d\u7f6e\u9879\u76ee\u7684\u53d1\u5e03\u4ed3\u5e93",children:"\u914d\u7f6e\u9879\u76ee\u7684\u53d1\u5e03\u4ed3\u5e93"}),"\n",(0,a.jsx)(e.admonition,{title:"\u63d0\u793a",type:"info",children:(0,a.jsxs)(e.p,{children:["\u53d1\u5e03\u4ed3\u5e93\u914d\u7f6e\u8bf7\u53c2\u8003 ",(0,a.jsx)(e.a,{href:"pushlish_artifact#%E9%85%8D%E7%BD%AE%E4%BB%93%E5%BA%93",children:"\u53d1\u5e03\u4ed3\u5e93\u914d\u7f6e"}),"\u3002"]})})]})}function d(n={}){const{wrapper:e}={...(0,t.a)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(p,{...n})}):p(n)}},1151:(n,e,s)=>{s.d(e,{Z:()=>i,a:()=>o});var a=s(7294);const t={},r=a.createContext(t);function o(n){const e=a.useContext(r);return a.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:o(n.components),a.createElement(r.Provider,{value:e},n.children)}}}]);