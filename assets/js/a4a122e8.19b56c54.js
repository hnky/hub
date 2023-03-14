"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8940],{3905:(e,a,t)=>{t.d(a,{Zo:()=>d,kt:()=>h});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),u=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},d=function(e){var a=u(e.components);return n.createElement(s.Provider,{value:a},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=u(t),m=r,h=p["".concat(s,".").concat(m)]||p[m]||c[m]||i;return t?n.createElement(h,l(l({ref:a},d),{},{components:t})):n.createElement(h,l({ref:a},d))}));function h(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=m;var o={};for(var s in a)hasOwnProperty.call(a,s)&&(o[s]=a[s]);o.originalType=e,o[p]="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=t[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5599:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var n=t(87462),r=(t(67294),t(3905));const i={slug:"day18",title:"18. \ud83e\uddd1\ud83c\udffd\u200d\ud83d\udd2cAzure ML Managed Online Endpoints",authors:["Vlad"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Machine-Learning","Azure-AI"],tags:["ai-april","30-days-of-azure-ai","ml-developers","azure-ml","data-scientist"],image:"https://azureaidevs.github.io/hub/img/2023-aia/banner-day18.png",description:"Azure ML Managed Online Endpoints - A Quickstart https://azureaidevs.github.io/hub/2023-aia/day18 #30DaysOfAzureAI #AzureAiDevs #AI #AzureML"},l=void 0,o={permalink:"/hub/2023-aia/day18",source:"@site/2023-aia/2023-04-19-azureml-endpoints/index.md",title:"18. \ud83e\uddd1\ud83c\udffd\u200d\ud83d\udd2cAzure ML Managed Online Endpoints",description:"Azure ML Managed Online Endpoints - A Quickstart https://azureaidevs.github.io/hub/2023-aia/day18 #30DaysOfAzureAI #AzureAiDevs #AI #AzureML",date:"2023-04-19T00:00:00.000Z",formattedDate:"April 19, 2023",tags:[{label:"ai-april",permalink:"/hub/2023-aia/tags/ai-april"},{label:"30-days-of-azure-ai",permalink:"/hub/2023-aia/tags/30-days-of-azure-ai"},{label:"ml-developers",permalink:"/hub/2023-aia/tags/ml-developers"},{label:"azure-ml",permalink:"/hub/2023-aia/tags/azure-ml"},{label:"data-scientist",permalink:"/hub/2023-aia/tags/data-scientist"}],readingTime:2.095,hasTruncateMarker:!1,authors:[{name:"Vlad Iliescu",title:"Head of AI at Strongbytes and Microsoft MVP",url:"https://github.com/vladiliescu",tag:"@vladiliescu",imageURL:"https://github.com/vladiliescu.png",key:"Vlad"}],frontMatter:{slug:"day18",title:"18. \ud83e\uddd1\ud83c\udffd\u200d\ud83d\udd2cAzure ML Managed Online Endpoints",authors:["Vlad"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Machine-Learning","Azure-AI"],tags:["ai-april","30-days-of-azure-ai","ml-developers","azure-ml","data-scientist"],image:"https://azureaidevs.github.io/hub/img/2023-aia/banner-day18.png",description:"Azure ML Managed Online Endpoints - A Quickstart https://azureaidevs.github.io/hub/2023-aia/day18 #30DaysOfAzureAI #AzureAiDevs #AI #AzureML"},prevItem:{title:"17. \ud83e\uddd1\ud83c\udffd\u200d\ud83d\udd2cStreamline Model Dev with Azure ML",permalink:"/hub/2023-aia/day17"},nextItem:{title:"19. \ud83e\uddd1\ud83c\udffd\u200d\ud83d\udd2cDebug models w/ Responsible AI",permalink:"/hub/2023-aia/day19"}},s={authorsImageUrls:[void 0]},u=[{value:"\ud83d\uddd3\ufe0f Day <em>18</em> of #30DaysOfAzureAI",id:"\ufe0f-day-18-of-30daysofazureai",level:2},{value:"\ud83c\udfaf What we&#39;ll cover",id:"-what-well-cover",level:2},{value:"\ud83d\udcda References",id:"-references",level:2},{value:"\ud83d\ude8c Get started with Azure ML&#39;s managed online endpoints",id:"-get-started-with-azure-mls-managed-online-endpoints",level:2},{value:"\ud83d\udc53 Read today&#39;s article",id:"-read-todays-article",level:2},{value:"\ud83d\ude4b\ud83c\udffe\u200d\u2642\ufe0f Questions?",id:"\ufe0f-questions",level:2},{value:"\ud83d\udccd 30 days roadmap",id:"-30-days-roadmap",level:2}],d={toc:u};function p(e){let{components:a,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,i,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("head",null,(0,r.kt)("link",{rel:"canonical",href:"https://vladiliescu.net/aml-managed-endpoints-quickstart/"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud83d\udc53 ",(0,r.kt)("a",{parentName:"li",href:"https://vladiliescu.net/aml-managed-endpoints-quickstart/"},"Read today's article")),(0,r.kt)("li",{parentName:"ul"},"\ud83d\udcec ",(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/azure-ai-dev-newsletter"},"Sign up for the Microsoft AI and Machine Learning Newsletter")),(0,r.kt)("li",{parentName:"ul"},"\ud83d\ude4b\ud83c\udffe\u200d\u2642\ufe0f ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/AzureAiDevs/hub/discussions/categories/18-azure-ml-managed-online-endpoints"},"Ask a question about this post on GitHub Discussions")),(0,r.kt)("li",{parentName:"ul"},"\ud83d\udca1 ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/AzureAiDevs/hub/discussions/categories/call-for-content"},"Suggest a topic for a future post"))),(0,r.kt)("h2",{id:"\ufe0f-day-18-of-30daysofazureai"},"\ud83d\uddd3\ufe0f Day ",(0,r.kt)("em",{parentName:"h2"},"18")," of #30DaysOfAzureAI"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Azure ML Managed Online Endpoints - A Quickstart")),(0,r.kt)("p",null,"Yesterday we learned how to streamline ML Development with Azure ML. Today, we'll learn how to deploy ML models using Azure ML managed online endpoints."),(0,r.kt)("h2",{id:"-what-well-cover"},"\ud83c\udfaf What we'll cover"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"What are Azure ML managed online endpoints."),(0,r.kt)("li",{parentName:"ol"},"The three main components of an online endpoint."),(0,r.kt)("li",{parentName:"ol"},"How to deploy one or more models under the same endpoint.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Image banner for day 18",src:t(64263).Z,width:"834",height:"350"})),(0,r.kt)("h2",{id:"-references"},"\ud83d\udcda References"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/training/modules/intro-to-azure-ml?WT.mc_id=aiml-89446-dglover"},"Learn Module: Introduction to Azure Machine Learning")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/azure/machine-learning/overview-what-is-azure-machine-learning?WT.mc_id=aiml-89446-dglover"},"What is Azure Machine Learning?"))),(0,r.kt)("h2",{id:"-get-started-with-azure-mls-managed-online-endpoints"},"\ud83d\ude8c Get started with Azure ML's managed online endpoints"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://vladiliescu.net/aml-managed-endpoints-quickstart/"},"Today's article")," discusses the benefits of using Azure Machine Learning's managed online endpoints and compares them to Azure Container Instances. The author outlines three main reasons why they prefer managed online endpoints: built-in security, native blue/green deployments, and auto-scaling with Azure Monitor."),(0,r.kt)("p",null,"Step-by-step instructions are provided for for deploying an online endpoint that translates API inputs to something a machine learning model can handle, invokes the model, and returns formatted results."),(0,r.kt)("h2",{id:"-read-todays-article"},"\ud83d\udc53 Read today's article"),(0,r.kt)("p",null,"Today's ",(0,r.kt)("a",{parentName:"p",href:"https://vladiliescu.net/aml-managed-endpoints-quickstart/"},"article"),"."),(0,r.kt)("h2",{id:"\ufe0f-questions"},"\ud83d\ude4b\ud83c\udffe\u200d\u2642\ufe0f Questions?"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/AzureAiDevs/Discussions/discussions/categories/18-azure-ml-managed-online-endpoints"},"Remember, you can ask a question about this post on GitHub Discussions")),(0,r.kt)("h2",{id:"-30-days-roadmap"},"\ud83d\udccd 30 days roadmap"),(0,r.kt)("p",null,"What's next? View the ",(0,r.kt)("a",{parentName:"p",href:"/hub/roadmap/30days"},"#30DaysOfAzureAI Roadmap")))}p.isMDXComponent=!0},64263:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/banner-day18-833aa8307e96a53f610777f726e18e23.png"}}]);