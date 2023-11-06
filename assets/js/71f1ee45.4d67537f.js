"use strict";(self.webpackChunktts_notes=self.webpackChunktts_notes||[]).push([[4219],{9135:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>f,frontMatter:()=>c,metadata:()=>s,toc:()=>a});var r=o(5893),i=o(1151);const c={},t="Nacos",s={id:"microservice/nacos",title:"Nacos",description:"Config",source:"@site/interview/microservice/nacos.md",sourceDirName:"microservice",slug:"/microservice/nacos",permalink:"/notes/interview/microservice/nacos",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"interview",previous:{title:"Eureka & Ribbon & Feign",permalink:"/notes/interview/microservice/eureka_ribbon_feign"},next:{title:"Spring Cloud",permalink:"/notes/interview/microservice/spring_cloud"}},l={},a=[{value:"Config",id:"config",level:2},{value:"Bootstrap",id:"bootstrap",level:3},{value:"org.springframework.cloud.bootstrap.config.PropertySourceBootstrapConfiguration",id:"orgspringframeworkcloudbootstrapconfigpropertysourcebootstrapconfiguration",level:3},{value:"Locator",id:"locator",level:3},{value:"com.alibaba.cloud.nacos.client.NacosPropertySourceLocator",id:"comalibabacloudnacosclientnacospropertysourcelocator",level:4},{value:"Refresh",id:"refresh",level:3},{value:"com.alibaba.nacos.client.config.impl.ClientWorker.ConfigRpcTransportClient",id:"comalibabanacosclientconfigimplclientworkerconfigrpctransportclient",level:4},{value:"com.alibaba.cloud.nacos.refresh.NacosContextRefresher",id:"comalibabacloudnacosrefreshnacoscontextrefresher",level:4}];function d(e){const n={h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"nacos",children:"Nacos"}),"\n",(0,r.jsx)(n.h2,{id:"config",children:"Config"}),"\n",(0,r.jsx)(n.h3,{id:"bootstrap",children:"Bootstrap"}),"\n",(0,r.jsx)(n.h3,{id:"orgspringframeworkcloudbootstrapconfigpropertysourcebootstrapconfiguration",children:"org.springframework.cloud.bootstrap.config.PropertySourceBootstrapConfiguration"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"org.springframework.cloud.bootstrap.config.PropertySourceBootstrapConfiguration#initialize"}),"\n",(0,r.jsx)(n.li,{children:"org.springframework.cloud.bootstrap.config.PropertySourceLocator#locateCollection(Environment)"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"locator",children:"Locator"}),"\n",(0,r.jsx)(n.h4,{id:"comalibabacloudnacosclientnacospropertysourcelocator",children:"com.alibaba.cloud.nacos.client.NacosPropertySourceLocator"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["com.alibaba.nacos.client.config.NacosConfigService","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["com.alibaba.nacos.client.config.NacosConfigService#getConfigInner","\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"com.alibaba.nacos.client.config.impl.LocalConfigInfoProcessor#getFailover"}),"\n",(0,r.jsx)(n.li,{children:"com.alibaba.nacos.client.config.impl.ClientWorker#getServerConfig"}),"\n",(0,r.jsx)(n.li,{children:"com.alibaba.nacos.client.config.impl.LocalConfigInfoProcessor#getSnapshot"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"com.alibaba.nacos.client.config.impl.ClientWorker"}),"\n",(0,r.jsx)(n.li,{children:"com.alibaba.cloud.nacos.client.NacosPropertySourceBuilder"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"refresh",children:"Refresh"}),"\n",(0,r.jsx)(n.h4,{id:"comalibabanacosclientconfigimplclientworkerconfigrpctransportclient",children:"com.alibaba.nacos.client.config.impl.ClientWorker.ConfigRpcTransportClient"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"com.alibaba.nacos.client.config.impl.ClientWorker.ConfigRpcTransportClient#executeConfigListen"}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"comalibabacloudnacosrefreshnacoscontextrefresher",children:"com.alibaba.cloud.nacos.refresh.NacosContextRefresher"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"com.alibaba.cloud.nacos.refresh.NacosContextRefresher#registerNacosListener"}),"\n",(0,r.jsxs)(n.li,{children:["org.springframework.cloud.endpoint.event.RefreshEvent","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["org.springframework.cloud.context.refresh.ContextRefresher#refresh","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["org.springframework.cloud.context.refresh.ContextRefresher#refreshEnvironment","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"org.springframework.cloud.context.refresh.ContextRefresher#updateEnvironment"}),"\n",(0,r.jsx)(n.li,{children:"org.springframework.context.ApplicationEventPublisher#publishEvent(EnvironmentChangeEvent)"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"org.springframework.cloud.context.scope.refresh.RefreshScope#refreshAll"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["org.springframework.cloud.context.environment.EnvironmentChangeEvent","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"org.springframework.cloud.logging.LoggingRebinder#onApplicationEvent"}),"\n",(0,r.jsx)(n.li,{children:"org.springframework.cloud.context.properties.ConfigurationPropertiesRebinder#onApplicationEvent"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"org.springframework.cloud.context.scope.refresh.RefreshScopeRefreshedEvent"}),"\n"]}),"\n",(0,r.jsx)(n.h1,{id:"registry",children:"Registry"})]})}function f(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},1151:(e,n,o)=>{o.d(n,{Z:()=>s,a:()=>t});var r=o(7294);const i={},c=r.createContext(i);function t(e){const n=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);