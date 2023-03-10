"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3187],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),d=r,h=c["".concat(s,".").concat(d)]||c[d]||m[d]||i;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},67608:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const i={slug:"2023-day17",title:"17. \ud83e\uddd1\ud83c\udffd\u200d\ud83d\udd2cStreamline Model Dev with Azure ML",authors:["Bea"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Machine-Learning","Azure-AI"],tags:["ai-april","30-days-of-azure-ai","ml-developers","azure-ml","data-scientist"],image:"https://azureaidevs.github.io/hub/img/2023/banner-day17.png",description:"Streamlining ML Development with Azure ML Components & Pipelines https://azureaidevs.github.io/hub/blog/2023-day17 #30DaysOfAzureAI #AzureAiDevs #AI #AzureML"},o=void 0,l={permalink:"/hub/blog/2023-day17",source:"@site/blog/2023-aia/2023-04-18-azureml-pipelines/index.md",title:"17. \ud83e\uddd1\ud83c\udffd\u200d\ud83d\udd2cStreamline Model Dev with Azure ML",description:"Streamlining ML Development with Azure ML Components & Pipelines https://azureaidevs.github.io/hub/blog/2023-day17 #30DaysOfAzureAI #AzureAiDevs #AI #AzureML",date:"2023-04-18T00:00:00.000Z",formattedDate:"April 18, 2023",tags:[{label:"ai-april",permalink:"/hub/blog/tags/ai-april"},{label:"30-days-of-azure-ai",permalink:"/hub/blog/tags/30-days-of-azure-ai"},{label:"ml-developers",permalink:"/hub/blog/tags/ml-developers"},{label:"azure-ml",permalink:"/hub/blog/tags/azure-ml"},{label:"data-scientist",permalink:"/hub/blog/tags/data-scientist"}],readingTime:2.19,hasTruncateMarker:!1,authors:[{name:"Beatriz Stollnitz",title:"Principal Cloud Advocate AiMl",url:"https://github.com/bstollnitz",tag:"@beastollnitz",imageURL:"https://github.com/bstollnitz.png",key:"Bea"}],frontMatter:{slug:"2023-day17",title:"17. \ud83e\uddd1\ud83c\udffd\u200d\ud83d\udd2cStreamline Model Dev with Azure ML",authors:["Bea"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Machine-Learning","Azure-AI"],tags:["ai-april","30-days-of-azure-ai","ml-developers","azure-ml","data-scientist"],image:"https://azureaidevs.github.io/hub/img/2023/banner-day17.png",description:"Streamlining ML Development with Azure ML Components & Pipelines https://azureaidevs.github.io/hub/blog/2023-day17 #30DaysOfAzureAI #AzureAiDevs #AI #AzureML"},prevItem:{title:"16. \ud83e\uddd1\ud83c\udffd\u200d\ud83d\udd2cScaling Model Dev with Azure ML",permalink:"/hub/blog/2023-day16"},nextItem:{title:"18. \ud83e\uddd1\ud83c\udffd\u200d\ud83d\udd2cAzure ML Managed Online Endpoints",permalink:"/hub/blog/2023-day18"}},s={authorsImageUrls:[void 0]},u=[{value:"Day <em>17</em> of #30DaysOfAzureAI",id:"day-17-of-30daysofazureai",level:2},{value:"What we&#39;ll cover",id:"what-well-cover",level:2},{value:"References",id:"references",level:3},{value:"How to train using pipelines and components in Azure ML",id:"how-to-train-using-pipelines-and-components-in-azure-ml",level:2},{value:"Learn More",id:"learn-more",level:2},{value:"Questions?",id:"questions",level:2}],p={toc:u};function c(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("head",null,(0,r.kt)("meta",{property:"og:url",content:"https://azureaidevs.github.io/hub/blog/2023-day17"}),(0,r.kt)("meta",{property:"og:title",content:"Streamline Model Dev with Azure ML"}),(0,r.kt)("meta",{property:"og:description",content:"Streamlining ML Development with Azure ML Components & Pipelines https://azureaidevs.github.io/hub/blog/2023-day17 #30DaysOfAzureAI #AzureAiDevs #AI #AzureML"}),(0,r.kt)("meta",{property:"og:image",content:"https://azureaidevs.github.io/hub/img/2023/banner-day17.png"}),(0,r.kt)("meta",{property:"og:type",content:"article"}),(0,r.kt)("meta",{property:"og:site_name",content:"Azure AI Developer"}),(0,r.kt)("link",{rel:"canonical",href:"https://bea.stollnitz.com/blog/aml-pipeline/"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud83d\udce7 ",(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/azure-ai-dev-newsletter"},"Sign up for the Azure AI Developer Newsletter")),(0,r.kt)("li",{parentName:"ul"},"\ud83d\udcf0 ",(0,r.kt)("a",{parentName:"li",href:"https://azureaidevs.github.io/hub/blog/rss.xml"},"Subscribe to the #30DaysOfAzureAI RSS feed")),(0,r.kt)("li",{parentName:"ul"},"\ud83d\udccc ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/AzureAiDevs/hub/discussions/categories/17-streamline-model-dev-with-azure-ml"},"Ask a question about this post on GitHub Discussions")),(0,r.kt)("li",{parentName:"ul"},"\ud83d\udca1 ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/AzureAiDevs/hub/discussions/categories/call-for-content"},"Suggest a topic for a future post"))),(0,r.kt)("h2",{id:"day-17-of-30daysofazureai"},"Day ",(0,r.kt)("em",{parentName:"h2"},"17")," of #30DaysOfAzureAI"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Streamlining ML Development with Azure ML Components & Pipelines")),(0,r.kt)("p",null,"Yesterday we learned about training and deploying machine learning models using Azure ML. Today is all about streamlining ML Development with Azure ML Components & Pipelines."),(0,r.kt)("h2",{id:"what-well-cover"},"What we'll cover"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Azure ML components and pipelines")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Image banner for day 17",src:n(37930).Z,width:"834",height:"350"})),(0,r.kt)("h3",{id:"references"},"References"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/training/modules/intro-to-azure-ml?WT.mc_id=aiml-89446-dglover"},"Learn Module: Introduction to Azure Machine Learning")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/azure/machine-learning/overview-what-is-azure-machine-learning?WT.mc_id=aiml-89446-dglover"},"What is Azure Machine Learning?"))),(0,r.kt)("h2",{id:"how-to-train-using-pipelines-and-components-in-azure-ml"},"How to train using pipelines and components in Azure ML"),(0,r.kt)("p",null,"Check out ",(0,r.kt)("a",{parentName:"p",href:"https://bea.stollnitz.com/blog/aml-pipeline/"},"today's article")," to take your machine leaning projects to new heights with Azure ML components and pipelines! Learn how to break down your training code into components, and how to connect those components into a pipeline. Organizing your work into steps with components and pipelines will boost your productivity, especially as the complexity of your project increases."),(0,r.kt)("p",null,"The goal for today is for you to be able to evaluate the benefits of components and pipelines for your own project, and to understand the technical aspects of implementing them."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(18077).Z,width:"3000",height:"1557"})),(0,r.kt)("h2",{id:"learn-more"},"Learn More"),(0,r.kt)("p",null,"Read today's ",(0,r.kt)("a",{parentName:"p",href:"https://bea.stollnitz.com/blog/aml-pipeline/"},"article"),"."),(0,r.kt)("h2",{id:"questions"},"Questions?"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/AzureAiDevs/Discussions/discussions/categories/17-streamline-model-dev-with-azure-ml"},"Remember, you can ask a question about this post on GitHub Discussions")))}c.isMDXComponent=!0},18077:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image-be3fc8bf4716c04cb23e2e27c5dd6ac9.png"},37930:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/banner-day17-ad449113924bfa3d25fa20d2af0a2cd9.png"}}]);