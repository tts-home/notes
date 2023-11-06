"use strict";(self.webpackChunktts_notes=self.webpackChunktts_notes||[]).push([[9449],{3453:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>s,contentTitle:()=>o,default:()=>v,frontMatter:()=>i,metadata:()=>t,toc:()=>d});var l=n(5893),r=n(1151);const i={},o="Files and Code Templates",t={id:"tool/idea/templates",title:"Files and Code Templates",description:"includes",source:"@site/docs/tool/idea/templates.md",sourceDirName:"tool/idea",slug:"/tool/idea/templates",permalink:"/notes/tool/idea/templates",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Postfix Completion",permalink:"/notes/tool/idea/postfix_completion"},next:{title:"\u624b\u52a8\u66f4\u65b0",permalink:"/notes/tool/idea/update_manual"}},s={},d=[{value:"includes",id:"includes",level:2},{value:"CopyrightH.html",id:"copyrighthhtml",level:3},{value:"CopyrightJ.java",id:"copyrightjjava",level:3},{value:"File Header.java",id:"file-headerjava",level:3},{value:"internal",id:"internal",level:2},{value:"AnnotationType.java",id:"annotationtypejava",level:3},{value:"Class.java",id:"classjava",level:3},{value:"Enum.java",id:"enumjava",level:3},{value:"Record.java",id:"recordjava",level:3},{value:"Interface.java",id:"interfacejava",level:3},{value:"module-info.java",id:"module-infojava",level:3},{value:"package-info.java",id:"package-infojava",level:3},{value:"Groovy Annotation.groovy",id:"groovy-annotationgroovy",level:3},{value:"Groovy Class.groovy",id:"groovy-classgroovy",level:3},{value:"Groovy DSL Script.groovy",id:"groovy-dsl-scriptgroovy",level:3},{value:"Groovy Enum.groovy",id:"groovy-enumgroovy",level:3},{value:"Groovy Gant Script",id:"groovy-gant-script",level:3},{value:"Groovy Interface.groovy",id:"groovy-interfacegroovy",level:3},{value:"Groovy Script.groovy",id:"groovy-scriptgroovy",level:3},{value:"Groovy Trait.groovy",id:"groovy-traitgroovy",level:3},{value:"Kotlin Class.kt",id:"kotlin-classkt",level:3},{value:"Kotlin Enum.kt",id:"kotlin-enumkt",level:3},{value:"Kotlin File.kt",id:"kotlin-filekt",level:3},{value:"Kotlin Interface.kt",id:"kotlin-interfacekt",level:3},{value:"Kotlin Script.kts",id:"kotlin-scriptkts",level:3},{value:"Kotlin Worksheet.kts",id:"kotlin-worksheetkts",level:3},{value:"HTML File.html",id:"html-filehtml",level:3},{value:"XML Properties File.xml",id:"xml-properties-filexml",level:3},{value:"code",id:"code",level:2},{value:"Catch Statement Declaration.java",id:"catch-statement-declarationjava",level:3}];function c(e){const a={code:"code",h1:"h1",h2:"h2",h3:"h3",pre:"pre",...(0,r.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a.h1,{id:"files-and-code-templates",children:"Files and Code Templates"}),"\n",(0,l.jsx)(a.h2,{id:"includes",children:"includes"}),"\n",(0,l.jsx)(a.h3,{id:"copyrighthhtml",children:"CopyrightH.html"}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-html",children:"\x3c!-- Copyright \xa9 2014 - 2023 TTS. All Rights Reserved. --\x3e\n"})}),"\n",(0,l.jsx)(a.h3,{id:"copyrightjjava",children:"CopyrightJ.java"}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-java",children:"/*\n * Copyright \xa9 2014 - 2023 TTS. All Rights Reserved.\n */\n"})}),"\n",(0,l.jsx)(a.h3,{id:"file-headerjava",children:"File Header.java"}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-java",children:"/**\n * ${DIR_PATH}/${NAME}\n *\n * @author ${USER}\n * @version v1.0.0\n * @since ${YEAR}-${MONTH}-${DAY} ${HOUR}:${MINUTE}:${SECOND}\n */\n"})}),"\n",(0,l.jsx)(a.h2,{id:"internal",children:"internal"}),"\n",(0,l.jsx)(a.h3,{id:"annotationtypejava",children:"AnnotationType.java"}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-java",children:'#parse("CopyrightJ.java")\n\n#if (${PACKAGE_NAME} && ${PACKAGE_NAME} != "")package ${PACKAGE_NAME};#end\n\n#parse("File Header.java")\npublic @interface ${NAME} {\n}\n'})}),"\n",(0,l.jsx)(a.h3,{id:"classjava",children:"Class.java"}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-java",children:'#parse("CopyrightJ.java")\n\n#if (${PACKAGE_NAME} && ${PACKAGE_NAME} != "")package ${PACKAGE_NAME};#end\n\n#parse("File Header.java")\npublic class ${NAME} {\n}\n'})}),"\n",(0,l.jsx)(a.h3,{id:"enumjava",children:"Enum.java"}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-java",children:'#parse("CopyrightJ.java")\n\n#if (${PACKAGE_NAME} && ${PACKAGE_NAME} != "")package ${PACKAGE_NAME};#end\n\n#parse("File Header.java")\npublic enum ${NAME} {\n}\n'})}),"\n",(0,l.jsx)(a.h3,{id:"recordjava",children:"Record.java"}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-java",children:'#parse("CopyrightJ.java")\n\n#if (${PACKAGE_NAME} && ${PACKAGE_NAME} != "")package ${PACKAGE_NAME};#end\n\n#parse("File Header.java")\npublic record ${NAME}() {\n}\n'})}),"\n",(0,l.jsx)(a.h3,{id:"interfacejava",children:"Interface.java"}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-java",children:'#parse("CopyrightJ.java")\n\n#if (${PACKAGE_NAME} && ${PACKAGE_NAME} != "")package ${PACKAGE_NAME};#end\n\n#parse("File Header.java")\npublic interface ${NAME} {\n}\n'})}),"\n",(0,l.jsx)(a.h3,{id:"module-infojava",children:"module-info.java"}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-java",children:'#parse("CopyrightJ.java")\n\nmodule #[[$MODULE_NAME$]]# {\n}\n'})}),"\n",(0,l.jsx)(a.h3,{id:"package-infojava",children:"package-info.java"}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-java",children:'#parse("CopyrightJ.java")\n\n#if (${PACKAGE_NAME} && ${PACKAGE_NAME} != "")package ${PACKAGE_NAME};#end\n'})}),"\n",(0,l.jsx)(a.h3,{id:"groovy-annotationgroovy",children:"Groovy Annotation.groovy"}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-groovy",children:'#parse("CopyrightJ.java")\n\n#if (${PACKAGE_NAME} && $PACKAGE_NAME != "" )package ${PACKAGE_NAME}#end\n\n#parse("File Header.java")\n@interface ${NAME} {\n}\n'})}),"\n",(0,l.jsx)(a.h3,{id:"groovy-classgroovy",children:"Groovy Class.groovy"}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-groovy",children:'#parse("CopyrightJ.java")\n\n#if (${PACKAGE_NAME} && $PACKAGE_NAME != "" )package ${PACKAGE_NAME}#end\n\n#parse("File Header.java")\nclass ${NAME} {\n}\n'})}),"\n",(0,l.jsx)(a.h3,{id:"groovy-dsl-scriptgroovy",children:"Groovy DSL Script.groovy"}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-groovy",children:'#parse("File Header.java")\n'})}),"\n",(0,l.jsx)(a.h3,{id:"groovy-enumgroovy",children:"Groovy Enum.groovy"}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-groovy",children:'#parse("CopyrightJ.java")\n\n#if (${PACKAGE_NAME} && $PACKAGE_NAME != "" )package ${PACKAGE_NAME}#end\n\n#parse("File Header.java")\nenum ${NAME} {\n}\n'})}),"\n",(0,l.jsx)(a.h3,{id:"groovy-gant-script",children:"Groovy Gant Script"}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-groovy",children:"#parse(\"File Header.java\")\n\ntarget('default': 'The default target') {\n  \n}\n"})}),"\n",(0,l.jsx)(a.h3,{id:"groovy-interfacegroovy",children:"Groovy Interface.groovy"}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-groovy",children:'parse("CopyrightJ.java")\n\n#if (${PACKAGE_NAME} && $PACKAGE_NAME != "" )package ${PACKAGE_NAME}#end\n\n#parse("File Header.java")\ninterface ${NAME} {\n}\n'})}),"\n",(0,l.jsx)(a.h3,{id:"groovy-scriptgroovy",children:"Groovy Script.groovy"}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-groovy",children:'#parse("CopyrightJ.java")\n\n#if (${PACKAGE_NAME} && $PACKAGE_NAME != "" )package ${PACKAGE_NAME}#end\n\n#parse("File Header.java")\n'})}),"\n",(0,l.jsx)(a.h3,{id:"groovy-traitgroovy",children:"Groovy Trait.groovy"}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-groovy",children:'#parse("CopyrightJ.java")\n\n#if (${PACKAGE_NAME} && $PACKAGE_NAME != "" )package ${PACKAGE_NAME}#end\n\n#parse("File Header.java")\ntrait ${NAME} {\n}\n'})}),"\n",(0,l.jsx)(a.h3,{id:"kotlin-classkt",children:"Kotlin Class.kt"}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-kotlin",children:'#parse("CopyrightJ.java")\n\n#if (${PACKAGE_NAME} && ${PACKAGE_NAME} != "")package ${PACKAGE_NAME}#end\n\n#parse("File Header.java")\nclass ${NAME} {\n}\n'})}),"\n",(0,l.jsx)(a.h3,{id:"kotlin-enumkt",children:"Kotlin Enum.kt"}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-kotlin",children:'#parse("CopyrightJ.java")\n\n#if (${PACKAGE_NAME} && ${PACKAGE_NAME} != "")package ${PACKAGE_NAME}#end\n\n#parse("File Header.java")\nenum class ${NAME} {\n}\n'})}),"\n",(0,l.jsx)(a.h3,{id:"kotlin-filekt",children:"Kotlin File.kt"}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-kotlin",children:'#parse("CopyrightJ.java")\n\n#if (${PACKAGE_NAME} && ${PACKAGE_NAME} != "")package ${PACKAGE_NAME}#end\n\n#parse("File Header.java")\n'})}),"\n",(0,l.jsx)(a.h3,{id:"kotlin-interfacekt",children:"Kotlin Interface.kt"}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-kotlin",children:'#parse("CopyrightJ.java")\n\n#if (${PACKAGE_NAME} && ${PACKAGE_NAME} != "")package ${PACKAGE_NAME}#end\n\n#parse("File Header.java")\ninterface ${NAME} {\n}\n'})}),"\n",(0,l.jsx)(a.h3,{id:"kotlin-scriptkts",children:"Kotlin Script.kts"}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-kotlin",children:'#parse("CopyrightJ.java")\n'})}),"\n",(0,l.jsx)(a.h3,{id:"kotlin-worksheetkts",children:"Kotlin Worksheet.kts"}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-kotlin",children:'#parse("CopyrightJ.java")\n'})}),"\n",(0,l.jsx)(a.h3,{id:"html-filehtml",children:"HTML File.html"}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-html",children:'#parse("CopyrightH.html")\n\n<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title>#[[$Title$]]#</title>\n</head>\n<body>\n#[[$END$]]#\n</body>\n</html>\n'})}),"\n",(0,l.jsx)(a.h3,{id:"xml-properties-filexml",children:"XML Properties File.xml"}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-xml",children:'#parse("CopyrightH.html")\n\n<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<!DOCTYPE properties SYSTEM "http://java.sun.com/dtd/properties.dtd">\n<properties/>\n'})}),"\n",(0,l.jsx)(a.h2,{id:"code",children:"code"}),"\n",(0,l.jsx)(a.h3,{id:"catch-statement-declarationjava",children:"Catch Statement Declaration.java"}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-java",children:"final ${EXCEPTION_TYPE} ${EXCEPTION}\n"})})]})}function v(e={}){const{wrapper:a}={...(0,r.a)(),...e.components};return a?(0,l.jsx)(a,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},1151:(e,a,n)=>{n.d(a,{Z:()=>t,a:()=>o});var l=n(7294);const r={},i=l.createContext(r);function o(e){const a=l.useContext(i);return l.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function t(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),l.createElement(i.Provider,{value:a},e.children)}}}]);