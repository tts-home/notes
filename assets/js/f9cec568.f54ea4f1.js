"use strict";(self.webpackChunktts_notes=self.webpackChunktts_notes||[]).push([[9097],{78:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>t,default:()=>l,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var s=a(5893),o=a(1151);const r={},t="Jenkins pipeline",i={id:"cicd/jenkins/pipeline",title:"Jenkins pipeline",description:"",source:"@site/docs/cicd/jenkins/pipeline.md",sourceDirName:"cicd/jenkins",slug:"/cicd/jenkins/pipeline",permalink:"/notes/cicd/jenkins/pipeline",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Settings Script Sample",permalink:"/notes/cicd/gradle/settings_sample"},next:{title:"KT Connect",permalink:"/notes/cicd/k8s/kt_connect"}},d={},p=[];function c(e){const n={code:"code",h1:"h1",pre:"pre",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"jenkins-pipeline",children:"Jenkins pipeline"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-groovy",children:"/**\n * \u83b7\u53d6\u901a\u7528\u53c2\u6570\n */\ndef obtainGeneralJvmArgs() {\n    def jvm_args = '-Xms2048m -Xmx2048m'\n    jvm_args = jvm_args + ' --add-opens java.base/java.lang=ALL-UNNAMED'\n    jvm_args = jvm_args + ' --add-opens java.base/java.util=ALL-UNNAMED'\n    jvm_args = jvm_args + ' --add-opens java.base/java.nio=ALL-UNNAMED'\n    jvm_args = jvm_args + ' --add-exports java.base/jdk.internal.ref=ALL-UNNAMED'\n    return jvm_args;\n}\n\ndef jvm_args = obtainGeneralJvmArgs()\n\npipeline {\n    agent {\n        node {\n            label 'back_slave'\n        }\n    }\n\n    environment {\n        repository = 'foo.dkr.ecr.us-west-1.amazonaws.com'\n        image = 'foo.dkr.ecr.us-west-1.amazonaws.com/bar'\n        ssl_key = '/path/of/key.pem'\n        jvm_opt = \"${jvm_args}\"\n        node_ip_test_a = '192.168.0.1'\n        node_user_test_a = 'user_test_a'\n        node_ip_prod_a = '192.168.0.2'\n        node_user_prod_a = 'user_prod_a'\n        node_ip_prod_b = '192.168.0.3'\n        node_user_prod_b = 'user_prod_b'\n    }\n\n    parameters {\n        gitParameter(\n            name: 'BRANCH',\n            type: 'PT_BRANCH',\n            defaultValue: 'develop',\n            selectedValue: 'DEFAULT',\n            sortMode: 'DESCENDING_SMART',\n            branchFilter: 'origin/(.*)',\n            tagFilter: 'origin/(.*)',\n            description: 'git branch',\n        )\n    }\n\n    stages {\n        stage('checkout') {\n            steps {\n                echo \"git pull latest code...${params.BRANCH}\"\n                checkout([\n                    $class: 'GitSCM',\n                    branches: [[name: \"${params.BRANCH}\"]],\n                    doGenerateSubmoduleConfigurations: false,\n                    extensions: [],\n                    gitTool: 'Default',\n                    submoduleCfg: [],\n                    userRemoteConfigs: [[\n                        url: 'http://git.github.net/tts/hello.git',\n                        credentialsId: 'b6af3832-8e72-4cad-b14d-6f3b25d43b3c'\n                    ]]\n                ])\n            }\n        }\n        stage('build') {\n            steps {\n                echo \"maven & docker build ...\"\n                sh '''\n                    export JAVA_HOME=/data/jdk-11;\n                    mvn clean -U package -Dmaven.test.skip=true;\n                    aws ecr get-login-password --region us-west-1 | docker login --username AWS --password-stdin ${repository};\n                    docker build . -t ${image}:$DOCKER_TAG;\n                    docker push ${image}:${DOCKER_TAG};\n                '''\n            }\n        }\n        stage('deploy - dev') {\n            when {\n                environment name: 'TARGET_ENV', value: 'dev'\n            }\n            steps {\n                echo \"No environment [dev] ...\"\n            }\n        }\n        stage('deploy - test') {\n            when {\n                environment name: 'TARGET_ENV', value: 'test'\n            }\n            failFast true\n            parallel {\n                stage('deploy server a') {\n                    steps {\n                        echo \"deploy server ${node_ip_test_a}...\"\n                        sh '''\n                            ssh -i ${ssl_key} ${node_user_test_a}@${node_ip_test_a} \"\n                                aws ecr get-login-password --region us-west-1 | sudo docker login --username AWS --password-stdin ${repository};\n                                sudo docker pull ${image}:${DOCKER_TAG};\n                                sudo docker rm -f bar;\n                                sudo docker run --network crawler -d -p 9000:9000 \\\n                                   -e JVM_OPT=\\\\\"${jvm_opt}\\\\\" \\\n                                   -v /data/log/java/bar/:/data/log/java/bar/ \\\n                                   -v /data/bar/app.properties:/data/bar/app.properties \\\n                                   -v /etc/timezone:/etc/timezone:ro -v /etc/localtime:/etc/localtime:ro \\\n                                   --name bar ${image}:${DOCKER_TAG};\n                            \"\n                        '''\n                    }\n                }\n            }\n        }\n        stage('deploy - prod') {\n            when {\n                environment name: 'TARGET_ENV', value: 'prod'\n            }\n            failFast true\n            parallel {\n                stage('deploy server a') {\n                    steps {\n                        echo \"deploy server ${node_ip_prod_a}...\"\n                        sh '''\n                            ssh -i ${ssl_key} ${node_user_prod_a}@${node_ip_prod_a} \"\n                                aws ecr get-login-password --region us-west-1 | sudo docker login --username AWS --password-stdin ${repository};\n                                sudo docker pull ${image}:${DOCKER_TAG};\n                                sudo docker rm -f bar;\n                                sudo docker run --network crawler -d -p 9000:9000 \\\n                                   -e JVM_OPT=\\\\\"${jvm_opt}\\\\\" \\\n                                   -v /data/log/java/bar/:/data/log/java/bar/ \\\n                                   -v /data/bar/app.properties:/data/bar/app.properties \\\n                                   -v /etc/timezone:/etc/timezone:ro -v /etc/localtime:/etc/localtime:ro \\\n                                   --name bar ${image}:${DOCKER_TAG};\n                            \"\n                        '''\n                    }\n                }\n                stage('deploy server b') {\n                    steps {\n                        echo \"deploy server ${node_ip_prod_b}...\"\n                        sh '''\n                            ssh -i ${ssl_key} ${node_user_prod_b}@${node_ip_prod_b} \"\n                                aws ecr get-login-password --region us-west-1 | sudo docker login --username AWS --password-stdin ${repository};\n                                sudo docker pull ${image}:${DOCKER_TAG};\n                                sudo docker rm -f bar;\n                                sudo docker run --network crawler -d -p 9000:9000 \\\n                                   -e JVM_OPT=\\\\\"${jvm_opt}\\\\\" \\\n                                   -v /data/log/java/bar/:/data/log/java/bar/ \\\n                                   -v /data/bar/app.properties:/data/bar/app.properties \\\n                                   -v /etc/timezone:/etc/timezone:ro -v /etc/localtime:/etc/localtime:ro \\\n                                   --name bar ${image}:${DOCKER_TAG};\n                            \"\n                        '''\n                    }\n                }\n            }\n        }\n    }\n\n    post {\n        success {\n            echo 'CI/CD job execution succeed.'\n        }\n        failure {\n            echo 'CI/CD job execution failed.'\n        }\n    }\n}\n"})})]})}function l(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},1151:(e,n,a)=>{a.d(n,{Z:()=>i,a:()=>t});var s=a(7294);const o={},r=s.createContext(o);function t(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);