"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5278],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),u=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(a),m=n,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return a?r.createElement(h,i(i({ref:t},c),{},{components:a})):r.createElement(h,i({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:n,i[1]=l;for(var u=2;u<o;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},2539:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=a(87462),n=(a(67294),a(3905));const o={slug:"2023-day22",title:"22. \ud83c\udfedMLOps Accelerator Explained",authors:["Setu"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["MLOps","Machine-Learning","Azure-AI"],tags:["ai-april","30-days-of-azure-ai","ml-developers","azure-mlops"],image:"https://azureaidevs.github.io/hub/img/2023/banner-day22.png",description:"Accelerating MLOps with the v2 Solution Accelerator"},i=void 0,l={permalink:"/hub/blog/2023-day22",source:"@site/blog/2023-aia/2023-04-24-mlops-accelerator/index.md",title:"22. \ud83c\udfedMLOps Accelerator Explained",description:"Accelerating MLOps with the v2 Solution Accelerator",date:"2023-04-24T00:00:00.000Z",formattedDate:"April 24, 2023",tags:[{label:"ai-april",permalink:"/hub/blog/tags/ai-april"},{label:"30-days-of-azure-ai",permalink:"/hub/blog/tags/30-days-of-azure-ai"},{label:"ml-developers",permalink:"/hub/blog/tags/ml-developers"},{label:"azure-mlops",permalink:"/hub/blog/tags/azure-mlops"}],readingTime:3.01,hasTruncateMarker:!1,authors:[{name:"Setu Chokshi",title:"Senior Cloud Solution Architect @setuc",url:"https://github.com/setuc",imageURL:"https://github.com/setuc.png",key:"Setu"}],frontMatter:{slug:"2023-day22",title:"22. \ud83c\udfedMLOps Accelerator Explained",authors:["Setu"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["MLOps","Machine-Learning","Azure-AI"],tags:["ai-april","30-days-of-azure-ai","ml-developers","azure-mlops"],image:"https://azureaidevs.github.io/hub/img/2023/banner-day22.png",description:"Accelerating MLOps with the v2 Solution Accelerator"},prevItem:{title:"21. \ud83e\uddd1\ud83c\udffd\u200d\ud83d\udd2cRecap: Azure ML Week\u2728",permalink:"/hub/blog/2023-day21"},nextItem:{title:"23. \ud83c\udfedData Science for beginners",permalink:"/hub/blog/2023-day23"}},s={authorsImageUrls:[void 0]},u=[{value:"Day <em>22</em> of #30DaysOfAzureAI",id:"day-22-of-30daysofazureai",level:2},{value:"What we&#39;ll cover",id:"what-well-cover",level:2},{value:"References",id:"references",level:3},{value:"Learn More",id:"learn-more",level:2},{value:"Questions?",id:"questions",level:2}],c={toc:u};function p(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("head",null,(0,n.kt)("link",{rel:"canonical",href:"https://github.com/Azure/mlops-v2"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\ud83d\udce7 ",(0,n.kt)("a",{parentName:"li",href:"https://aka.ms/azure-ai-dev-newsletter"},"Sign up for the Azure AI Developer Newsletter")),(0,n.kt)("li",{parentName:"ul"},"\ud83d\udcf0 ",(0,n.kt)("a",{parentName:"li",href:"https://azureaidevs.github.io/hub/blog/rss.xml"},"Subscribe to the #30DaysOfAzureAI RSS feed")),(0,n.kt)("li",{parentName:"ul"},"\ud83d\udccc ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/AzureAiDevs/Discussions/discussions/categories/22-mlops-accelerator-explained"},"Ask a question about this post on GitHub Discussions")),(0,n.kt)("li",{parentName:"ul"},"\ud83d\udca1 ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/AzureAiDevs/Discussions/discussions/categories/call-for-content"},"Suggest a topic for a future post"))),(0,n.kt)("h2",{id:"day-22-of-30daysofazureai"},"Day ",(0,n.kt)("em",{parentName:"h2"},"22")," of #30DaysOfAzureAI"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Accelerating MLOps with the v2 Solution Accelerator")),(0,n.kt)("p",null,"The Azure MLOps (v2) Solution Accelerator simplifies MLOps implementation in Azure with an end-to-end, modular approach. It supports Azure DevOps and GitHub, requires an Azure subscription, and can be customized to fit your organization's needs. With a template-based approach to data science, quickstarts, and a deployment guide, you'll be up and running in just a few hours. Join the revolution of streamlined and automated machine learning workflows today!"),(0,n.kt)("h2",{id:"what-well-cover"},"What we'll cover"),(0,n.kt)("p",null,"The three main points of the Azure MLOps (v2) Solution Accelerator are: "),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Simplified, end-to-end, and modular approach to MLOps implementation in Azure "),(0,n.kt)("li",{parentName:"ol"},"Support for both Azure DevOps and GitHub, with an Azure subscription required "),(0,n.kt)("li",{parentName:"ol"},"Customizable design with template-based approach to data science, quickstarts, and a deployment guide to get you up and running quickly. ")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Image banner for day 22",src:a(20221).Z,width:"834",height:"350"})),(0,n.kt)("h3",{id:"references"},"References"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://azure.microsoft.com/products/machine-learning/mlops/#features?WT.mc_id=aiml-89446-dglover"},"Machine learning operations (MLOps)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/training/paths/introduction-machine-learn-operations?WT.mc_id=aiml-89446-dglover"},"Learn Module: Introduction to machine learning operations (MLOps)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/training/modules/start-ml-lifecycle-mlops?WT.mc_id=aiml-89446-dglover"},"Learn Module: Start the machine learning lifecycle with MLOps"))),(0,n.kt)("p",null,"The Azure MLOps (v2) Solution Accelerator is a project designed to simplify the implementation of MLOps in Azure. MLOps is a set of automated and collaborative workflows that allow teams of machine learning professionals to quickly and easily deploy their models into production. The solution accelerator provides a modular end-to-end approach based on pattern architectures, with the goals of simplicity, modularity, repeatability, security, collaboration, and enterprise readiness. It achieves these goals with a template-based approach for end-to-end data science, driving operational efficiency at each stage. The solution accelerator is designed to be customizable to fit each organization's unique needs and can be up and running in just a few hours."),(0,n.kt)("p",null,"The solution accelerator supports both Azure DevOps and GitHub-based deployments and projects, and requires an Azure subscription, Azure CLI, and Git bash, WSL, or another shell script editor on your local machine. The project provides documentation on solution accelerator concepts and structure, supported machine learning patterns, accelerator deployment guides, and quickstarts for precreated project scenarios. The solution accelerator is designed to be a starting point for your MLOps journey, and can be customized to fit your organization's unique needs."),(0,n.kt)("iframe",{width:"100%",height:"420",src:"https://www.youtube.com/embed/5yPDkWCMmtk",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),(0,n.kt)("h2",{id:"learn-more"},"Learn More"),(0,n.kt)("p",null,"To learn more, check out this ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Azure/mlops-v2"},"article"),"."),(0,n.kt)("h2",{id:"questions"},"Questions?"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/AzureAiDevs/Discussions/discussions/categories/22-mlops-accelerator-explained"},"Remember, you can ask a question about this post on GitHub Discussions")))}p.isMDXComponent=!0},20221:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/banner-day22-9773b143d79b787db6d4ba5ae8ba20aa.png"}}]);