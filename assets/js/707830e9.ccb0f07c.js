"use strict";(self.webpackChunktts_notes=self.webpackChunktts_notes||[]).push([[5114],{5953:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>p,frontMatter:()=>c,metadata:()=>l,toc:()=>t});var s=o(5893),i=o(1151);const c={},r="Dock Maven Plugin",l={id:"cicd/maven/docker_maven_plugin",title:"Dock Maven Plugin",description:"\u914d\u7f6e docker maven plugin",source:"@site/docs/cicd/maven/docker_maven_plugin.md",sourceDirName:"cicd/maven",slug:"/cicd/maven/docker_maven_plugin",permalink:"/notes/cicd/maven/docker_maven_plugin",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"\u81ea\u7528 settings.xml",permalink:"/notes/cicd/maven/custom_settings"},next:{title:"Commands",permalink:"/notes/cicd/podman/commands"}},a={},t=[{value:"\u914d\u7f6e docker maven plugin",id:"\u914d\u7f6e-docker-maven-plugin",level:2},{value:"\u6253\u5305 docker \u955c\u50cf",id:"\u6253\u5305-docker-\u955c\u50cf",level:2},{value:"\u5728 docker \u4e2d\u542f\u52a8",id:"\u5728-docker-\u4e2d\u542f\u52a8",level:2}];function d(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"dock-maven-plugin",children:"Dock Maven Plugin"}),"\n",(0,s.jsx)(n.h2,{id:"\u914d\u7f6e-docker-maven-plugin",children:"\u914d\u7f6e docker maven plugin"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-xml",children:"<profile>\n    <id>docker</id>\n    <build>\n        <plugins>\n            <plugin>\n                <groupId>io.fabric8</groupId>\n                <artifactId>docker-maven-plugin</artifactId>\n                <version>0.38.0</version>\n                <configuration>\n                    \x3c!--suppress MavenModelInspection --\x3e\n                    <dockerHost>${docker.host}</dockerHost>\n                    \x3c!--suppress MavenModelInspection --\x3e\n                    <pullRegistry>${docker.pull.registry}</pullRegistry>\n                    \x3c!--suppress MavenModelInspection --\x3e\n                    <pushRegistry>${docker.push.registry}</pushRegistry>\n                    <authConfig>\n                        <pull>\n                            \x3c!--suppress MavenModelInspection --\x3e\n                            <username>${docker.pull.username}</username>\n                            \x3c!--suppress MavenModelInspection --\x3e\n                            <password>${docker.pull.password}</password>\n                        </pull>\n                        <push>\n                            \x3c!--suppress MavenModelInspection --\x3e\n                            <username>${docker.push.username}</username>\n                            \x3c!--suppress MavenModelInspection --\x3e\n                            <password>${docker.push.password}</password>\n                        </push>\n                    </authConfig>\n                    <images>\n                        <image>\n                            <alias>${project.name}</alias>\n                            <name>backend-beta/${project.name}</name>\n                            <build>\n                                <tags>\n                                    <tag>latest</tag>\n                                    <tag>${project.version}</tag>\n                                </tags>\n                                <from>surpath-basic-image/surpath-basic-jdk11:v1.0.0</from>\n                                <ports>\n                                    <port>8889</port>\n                                </ports>\n                                <assemblies>\n                                    \x3c!-- copy cat client config --\x3e\n                                    <assembly>\n                                        <name>data/appdatas/cat</name>\n                                        <inline>\n                                            <id>copy-file</id>\n                                            <files>\n                                                <file>\n                                                    <source>${project.build.directory}/classes/application.yml</source>\n                                                    <outputDirectory>.</outputDirectory>\n                                                </file>\n                                            </files>\n                                        </inline>\n                                    </assembly>\n                                    \x3c!-- copy executable jar --\x3e\n                                    <assembly>\n                                        <name>data/server</name>\n                                        <inline>\n                                            <id>copy-file</id>\n                                            <files>\n                                                <file>\n                                                    <source>${project.build.directory}/${project.build.finalName}.jar</source>\n                                                    <outputDirectory>.</outputDirectory>\n                                                </file>\n                                            </files>\n                                        </inline>\n                                    </assembly>\n                                </assemblies>\n                                <entryPoint>\n                                    <exec>\n                                        <arg>/bin/bash</arg>\n                                        <arg>-c</arg>\n                                        <arg>$JAVA_HOME/bin/java -Dapollo.meta=$apollo_meta -Denv=$apollo_env -Dapp.id=$apollo_app -jar /data/server/${project.build.finalName}.jar</arg>\n                                    </exec>\n                                </entryPoint>\n                            </build>\n                        </image>\n                    </images>\n                </configuration>\n            </plugin>\n        </plugins>\n    </build>\n</profile>\n"})}),"\n",(0,s.jsx)(n.admonition,{title:"\u6ce8\u610f",type:"info",children:(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u6587\u4ef6\u62f7\u8d1d ",(0,s.jsx)(n.code,{children:"assembly"})," \u8282\u70b9\u7684 ",(0,s.jsx)(n.code,{children:"name"})," \u5c5e\u6027\u4f1a\u4f5c\u4e3a\u6784\u5efa\u65f6\u5728 ",(0,s.jsx)(n.code,{children:"build"})," \u76ee\u5f55\u4e0b\u521b\u5efa\u7684\u6587\u4ef6\u5939\u540d\uff0c",(0,s.jsx)(n.code,{children:"name"})," \u7684\u503c\u9700\u552f\u4e00\u3002",(0,s.jsx)(n.code,{children:"outputDirectory"})," \u5c5e\u6027\u7684\u503c\u4e3a\u76ee\u7684\u6587\u4ef6\u5939\uff0c",(0,s.jsx)(n.code,{children:"name"})," \u4e0b\u7684\u76f8\u5bf9\u8def\u5f84\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"entryPoint"})," \u7684\u5199\u6cd5\u9700\u6ce8\u610f\uff0c\u5efa\u8bae\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"exec"})," \u6a21\u5f0f\u3002 ",(0,s.jsx)(n.code,{children:"exec"})," \u6a21\u5f0f\u4e2d\u6ce8\u5165\u73af\u5883\u53d8\u91cf\u7684\u89e3\u51b3\u65b9\u5f0f\u89c1\u4e0a\u9762\u914d\u7f6e\u6587\u4ef6(\u5176\u5b9e\u5c31\u662f\u5728 ",(0,s.jsx)(n.code,{children:"exec"})," \u4e2d\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"shell"})," \u7684\u6298\u4e2d\u65b9\u6848)\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:["\u73af\u5883\u53d8\u91cf\u540d\u9700\u6ce8\u610f\uff0c\u7ecf\u6d4b\u8bd5 ",(0,s.jsx)(n.code,{children:"."}),", ",(0,s.jsx)(n.code,{children:"-"})," \u4f5c\u4e3a\u5206\u9694\u7b26\u65e0\u6cd5\u8bc6\u522b\u3002"]}),"\n"]})}),"\n",(0,s.jsx)(n.h2,{id:"\u6253\u5305-docker-\u955c\u50cf",children:"\u6253\u5305 docker \u955c\u50cf"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"mvn package -Dmaven.test.skip=true -P jdk11 && \\\n    mvn -f ./project_home/pom.xml -P docker docker:build\n"})}),"\n",(0,s.jsx)(n.admonition,{title:"\u6ce8\u610f",type:"info",children:(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u5148\u6784\u5efa\u51fa\u53ef\u6267\u884c ",(0,s.jsx)(n.code,{children:"jar"}),"\uff0c\u518d\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"docker"})," \u914d\u7f6e\u6253\u5305\u955c\u50cf\u3002"]}),"\n"]})}),"\n",(0,s.jsx)(n.h2,{id:"\u5728-docker-\u4e2d\u542f\u52a8",children:"\u5728 docker \u4e2d\u542f\u52a8"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"docker run -p 8889:8889 -v /path/of/host:/path/of/container \\\n    -e apollo.env=my.apollo.env -e apollo.app=my.apollo.app -e apollo.meta=my.apollo.meta \\\n    docker_image:latest\n"})}),"\n",(0,s.jsx)(n.admonition,{title:"\u6ce8\u610f",type:"info",children:(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u542f\u52a8\u5bb9\u5668\u65f6\u9700\u8981\u6ce8\u610f ",(0,s.jsx)(n.code,{children:"run"})," \u7684 ",(0,s.jsx)(n.code,{children:"[options]"})," \u9700\u5728\u955c\u50cf\u540d\u79f0\u524d\u9762\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:["\u73af\u5883\u53d8\u91cf\u540d\u9700\u6ce8\u610f\uff0c\u7ecf\u6d4b\u8bd5 ",(0,s.jsx)(n.code,{children:"."}),", ",(0,s.jsx)(n.code,{children:"-"})," \u4f5c\u4e3a\u5206\u9694\u7b26\u65e0\u6cd5\u8bc6\u522b\u3002"]}),"\n"]})})]})}function p(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1151:(e,n,o)=>{o.d(n,{Z:()=>l,a:()=>r});var s=o(7294);const i={},c=s.createContext(i);function r(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);