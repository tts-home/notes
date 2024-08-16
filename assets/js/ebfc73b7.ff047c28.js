"use strict";(self.webpackChunktts_notes=self.webpackChunktts_notes||[]).push([[1406],{3234:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var t=o(5893),i=o(1151);const r={},l="Build Script Sample",s={id:"cicd/gradle/build_root_sample",title:"Build Script Sample",description:"groovy",source:"@site/docs/cicd/gradle/build_root_sample.md",sourceDirName:"cicd/gradle",slug:"/cicd/gradle/build_root_sample",permalink:"/notes/cicd/gradle/build_root_sample",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"k3s \u5b89\u88c5\u914d\u7f6e",permalink:"/notes/cicd/docker/k3s_install_config"},next:{title:"Commands",permalink:"/notes/cicd/gradle/commands"}},a={},c=[{value:"groovy",id:"groovy",level:2},{value:"kotlin",id:"kotlin",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",pre:"pre",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"build-script-sample",children:"Build Script Sample"})}),"\n",(0,t.jsx)(n.h2,{id:"groovy",children:"groovy"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-groovy",children:'//file:noinspection GroovyAssignabilityCheck\n\napply from: rootProject.file("gradle/dependencies.gradle")\n\nallprojects {\n    buildscript {\n        repositories {\n            pullRepositories.each { repository -> maven repository }\n            mavenCentral {\n                content {\n                    excludeGroup "org.tts.coding"\n                }\n            }\n        }\n    }\n\n    apply plugin: "idea"\n\n    group = "org.tts.coding"\n    version = "1.0.0"\n\n    repositories {\n        pullRepositories.each { repository -> maven repository }\n        mavenCentral {\n            content {\n                excludeGroup "org.tts.coding"\n            }\n        }\n    }\n\n    idea {\n        module {\n            inheritOutputDirs = false\n            outputDir = project.file("out/production")\n            testOutputDir = project.file("out/test")\n            downloadSources = true\n            downloadJavadoc = false\n        }\n    }\n\n    /* \u6e05\u7a7abuild\u7f13\u5b58 */\n    task clear(type: Delete) {\n        delete "${projectDir}/build"\n        delete "${projectDir}/out"\n    }\n}\n\nsubprojects { project ->\n    apply plugin: "java"\n    apply plugin: "java-library"\n\n    compileJava {\n        sourceCompatibility = JavaVersion.VERSION_17\n        targetCompatibility = JavaVersion.VERSION_17\n        options.encoding = "UTF-8"\n    }\n\n    dependencies {\n        testImplementation libs.junit\n        annotationProcessor libs.lombok\n        compileOnly libs.lombok\n        testAnnotationProcessor libs.lombok\n        testCompileOnly libs.lombok\n        /* spring BOM */\n        implementation libs.spring\n    }\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"kotlin",children:"kotlin"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin"})})]})}function p(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:(e,n,o)=>{o.d(n,{Z:()=>s,a:()=>l});var t=o(7294);const i={},r=t.createContext(i);function l(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);