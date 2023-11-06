"use strict";(self.webpackChunktts_notes=self.webpackChunktts_notes||[]).push([[4929],{9240:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var t=i(5893),s=i(1151);const o={},r="artifact \u53d1\u5e03",a={id:"cicd/gradle/pushlish_artifact",title:"artifact \u53d1\u5e03",description:"\u83b7\u53d6\u53d1\u5e03\u4ed3\u5e93",source:"@site/docs/cicd/gradle/pushlish_artifact.md",sourceDirName:"cicd/gradle",slug:"/cicd/gradle/pushlish_artifact",permalink:"/notes/cicd/gradle/pushlish_artifact",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Gradle \u5c5e\u6027\u6587\u4ef6",permalink:"/notes/cicd/gradle/gradle.properties"},next:{title:"maven \u4ed3\u5e93\u58f0\u660e",permalink:"/notes/cicd/gradle/repositories"}},c={},d=[{value:"\u83b7\u53d6\u53d1\u5e03\u4ed3\u5e93",id:"\u83b7\u53d6\u53d1\u5e03\u4ed3\u5e93",level:2},{value:"\u53d1\u5e03\u901a\u7528\u914d\u7f6e",id:"\u53d1\u5e03\u901a\u7528\u914d\u7f6e",level:2},{value:"\u914d\u7f6e\u4ed3\u5e93",id:"\u914d\u7f6e\u4ed3\u5e93",level:3},{value:"\u4e0d\u751f\u6210 module meta",id:"\u4e0d\u751f\u6210-module-meta",level:3},{value:"\u53d1\u5e03 bom",id:"\u53d1\u5e03-bom",level:2},{value:"\u53d1\u5e03 jar",id:"\u53d1\u5e03-jar",level:2}];function l(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"artifact-\u53d1\u5e03",children:"artifact \u53d1\u5e03"}),"\n",(0,t.jsx)(n.h2,{id:"\u83b7\u53d6\u53d1\u5e03\u4ed3\u5e93",children:"\u83b7\u53d6\u53d1\u5e03\u4ed3\u5e93"}),"\n",(0,t.jsx)(n.admonition,{title:"\u63d0\u793a",type:"info",children:(0,t.jsxs)(n.p,{children:["\u4ed3\u5e93\u5b9a\u4e49\u8bf7\u53c2\u8003 ",(0,t.jsx)(n.a,{href:"repositories",children:"\u4ed3\u5e93\u58f0\u660e"}),"\u3002"]})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-groovy",children:'/**\n * \u83b7\u53d6\u53d1\u5e03\u4ed3\u5e93\n *\n * @param version \u7248\u672c\u53f7\n * @return \u4ed3\u5e93 {@link MavenArtifactRepository}\n */\n@SuppressWarnings("GrMethodMayBeStatic")\ndef getPublishRepositories(version) {\n    if (version.toUpperCase().endsWith("-SNAPSHOT")) {\n        return pushRepositories.snapshot\n    }\n    return pushRepositories.release\n}\n'})}),"\n",(0,t.jsx)(n.admonition,{title:"\u6ce8\u610f",type:"info",children:(0,t.jsx)(n.p,{children:"\u6ce8\u610f\u7248\u672c\u53f7\u9700\u4f7f\u7528\u53d1\u5e03\u6a21\u5757\u7684\u7248\u672c\u53f7\u3002"})}),"\n",(0,t.jsx)(n.h2,{id:"\u53d1\u5e03\u901a\u7528\u914d\u7f6e",children:"\u53d1\u5e03\u901a\u7528\u914d\u7f6e"}),"\n",(0,t.jsx)(n.h3,{id:"\u914d\u7f6e\u4ed3\u5e93",children:"\u914d\u7f6e\u4ed3\u5e93"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-groovy",children:"publishing {\n    repositories {\n        def publishRepositories = getPublishRepositories(project.version)\n        publishRepositories.each { repository -> maven repository }\n    }\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"\u4e0d\u751f\u6210-module-meta",children:"\u4e0d\u751f\u6210 module meta"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-groovy",children:"tasks.withType(GenerateModuleMetadata) {\n    enabled = false\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u53d1\u5e03-bom",children:"\u53d1\u5e03 bom"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-groovy",children:'plugins {\n    id "java-platform"\n    id "maven-publish"\n}\n\njavaPlatform {\n    allowDependencies()\n}\n\npublishing {\n    repositories {\n        def publishRepositories = getPublishRepositories(project.version)\n        publishRepositories.each { repository -> maven repository }\n    }\n    publications {\n        mavenBom(MavenPublication) {\n            from components.javaPlatform\n            pom {\n                packaging = "pom"\n                name = "TTS Dependencies"\n                description = "Maven bom of TTS"\n                url = "http://www.tts.org/"\n                properties = [\n                    foo: "bar"\n                ]\n                licenses {\n                    license {\n                        name = "The Apache License, Version 2.0"\n                        url = "http://www.apache.org/licenses/LICENSE-2.0.txt"\n                    }\n                }\n                developers {\n                    developer {\n                        id = "tts"\n                        name = "Michael Tao"\n                        email = "tts@tts.org"\n                    }\n                }\n                scm {\n                    connection = "scm:git:git://github.com/tts/tts-dependencies.git"\n                }\n            }\n        }\n    }\n}\n\ndependencies {\n    /* declare import bom */\n    api(\n        platform("org.springframework.boot:spring-boot-dependencies:2.6.2"),\n        platform("org.springframework.cloud:spring-cloud-dependencies:2021.0.0")\n    )\n    /* declare transitive dependencies */\n    constraints {\n        api "org.tts.coding:tts-utils:1.0.0-SNAPSHOT"\n    }\n}\n'})}),"\n",(0,t.jsx)(n.admonition,{title:"\u63d0\u793a",type:"info",children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"java-platform"})," \u58f0\u660e\u4f9d\u8d56\u4ec5\u652f\u6301 ",(0,t.jsx)(n.code,{children:"api"})," / ",(0,t.jsx)(n.code,{children:"runtime"})," \u4e24\u79cd ",(0,t.jsx)(n.code,{children:"configuration"}),"\u3002",(0,t.jsx)(n.br,{}),"\n","\u58f0\u660e ",(0,t.jsx)(n.code,{children:"jar"})," \u4f9d\u8d56\u9700\u4f7f\u7528 ",(0,t.jsx)(n.code,{children:"constraints"}),"\u3002"]})}),"\n",(0,t.jsx)(n.h2,{id:"\u53d1\u5e03-jar",children:"\u53d1\u5e03 jar"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-groovy",children:'plugins {\n    id "java-library"\n    id "maven-publish"\n}\n\njava {\n    withJavadocJar()\n    withSourcesJar()\n}\n\nconfigurations {\n    implementation.extendsFrom(provided)\n}\n\npublishing {\n    publications {\n        mavenJar(MavenPublication) {\n            from components.java\n            pom {\n                packaging = "jar"\n                url = "http://www.tts.org/"\n                properties = [\n                    foo: "bar"\n                ]\n                licenses {\n                    license {\n                        name = "The Apache License, Version 2.0"\n                        url = "http://www.apache.org/licenses/LICENSE-2.0.txt"\n                    }\n                }\n                developers {\n                    developer {\n                        id = "tts"\n                        name = "Michael Tao"\n                        email = "tts@tts.org"\n                    }\n                }\n                scm {\n                    connection = "scm:git:git://github.com/tts/tts-libraries.git"\n                }\n                withXml {\n                    //noinspection GroovyImplicitNullArgumentCall\n                    def pomDependencies = asNode().dependencies.dependency\n                    /* handle provided scope dependencies */\n                    def allDependencies = project.configurations.provided.allDependencies\n                    pomDependencies.findAll {\n                        dependency -> allDependencies.find { dep -> dep.name == dependency.artifactId.text() }\n                    }.findAll { dependency -> dependency.scope.text() == "runtime" }.each {\n                        dependency -> dependency.scope.each { scope -> scope.value = "provided" }\n                    }\n                    /* handle compile scope dependencies */\n                    pomDependencies.findAll { it.scope.text() == "compile" }.each { dependency ->\n                        dependency.scope.each { scope -> scope.replaceNode({}) }\n                    }\n                }\n            }\n        }\n    }\n}\n'})}),"\n",(0,t.jsx)(n.admonition,{title:"\u6ce8\u610f",type:"info",children:(0,t.jsxs)(n.p,{children:["\u6253 ",(0,t.jsx)(n.code,{children:"jar"})," \u65f6\uff0c\u6ce8\u610f\u751f\u6210 ",(0,t.jsx)(n.code,{children:"pom"})," \u7684\u914d\u7f6e\u8c03\u6574\u3002 ",(0,t.jsx)(n.code,{children:"pom"})," \u7684\u901a\u7528\u914d\u7f6e\u53ef\u5728 ",(0,t.jsx)(n.code,{children:"parent"})," \u4e2d\u914d\u7f6e\uff0c\u5728 ",(0,t.jsx)(n.code,{children:"children"})," \u4e2d\u589e\u52a0\u6216\u8986\u76d6\u3002\u6570\u7ec4\u5c5e\u6027\u4e0d\u4f1a\u8986\u76d6\uff0c\u9700\u6ce8\u610f\u51fa\u73b0\u91cd\u590d\u5c5e\u6027\u3002"]})})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>a,a:()=>r});var t=i(7294);const s={},o=t.createContext(s);function r(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);