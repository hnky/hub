"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2273],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),u=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(r),d=n,h=p["".concat(s,".").concat(d)]||p[d]||m[d]||o;return r?a.createElement(h,i(i({ref:t},c),{},{components:r})):a.createElement(h,i({ref:t},c))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:n,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},54883:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=r(87462),n=(r(67294),r(3905));const o={slug:"2023-day5",title:"5. \ud83c\udfc1Learn key Azure ML Concepts",authors:["Bea"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Machine-Learning","Azure-AI"],tags:["azure-ai","azure-ml","30-days-of-azure-ai"],image:"https://azureaidevs.github.io/hub/img/2023/banner-day5.png",description:"Learn key Azure ML Concepts with this primer"},i=void 0,l={permalink:"/hub/blog/2023-day5",source:"@site/blog/2023-aia/2023-04-06-azure-ml-intro/index.md",title:"5. \ud83c\udfc1Learn key Azure ML Concepts",description:"Learn key Azure ML Concepts with this primer",date:"2023-04-06T00:00:00.000Z",formattedDate:"April 6, 2023",tags:[{label:"azure-ai",permalink:"/hub/blog/tags/azure-ai"},{label:"azure-ml",permalink:"/hub/blog/tags/azure-ml"},{label:"30-days-of-azure-ai",permalink:"/hub/blog/tags/30-days-of-azure-ai"}],readingTime:2.935,hasTruncateMarker:!1,authors:[{name:"Beatriz Stollnitz",title:"Principal Cloud Advocate AiMl @beastollnitz",url:"https://github.com/bstollnitz",imageURL:"https://github.com/bstollnitz.png",key:"Bea"}],frontMatter:{slug:"2023-day5",title:"5. \ud83c\udfc1Learn key Azure ML Concepts",authors:["Bea"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Machine-Learning","Azure-AI"],tags:["azure-ai","azure-ml","30-days-of-azure-ai"],image:"https://azureaidevs.github.io/hub/img/2023/banner-day5.png",description:"Learn key Azure ML Concepts with this primer"},prevItem:{title:"4. \ud83c\udfc1Use CoPilot to build a AI Receipt App",permalink:"/hub/blog/2023-day4"},nextItem:{title:"6. \ud83c\udfc1The Mission of Responsible AI",permalink:"/hub/blog/2023-day6"}},s={authorsImageUrls:[void 0]},u=[{value:"Day <em>5</em> of #30DaysOfAzureAI",id:"day-5-of-30daysofazureai",level:2},{value:"What we&#39;ll cover",id:"what-well-cover",level:2},{value:"References",id:"references",level:3},{value:"Why Use Azure ML?",id:"why-use-azure-ml",level:2},{value:"Learn More",id:"learn-more",level:2},{value:"Questions?",id:"questions",level:2}],c={toc:u};function p(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("head",null,(0,n.kt)("link",{rel:"canonical",href:"https://bea.stollnitz.com/blog/aml-introduction/"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\ud83d\udce7 ",(0,n.kt)("a",{parentName:"li",href:"https://microsoft.github.io/Low-Code/subscribe"},"Sign up for the Azure AI Developer Newsletter")),(0,n.kt)("li",{parentName:"ul"},"\ud83d\udcf0 ",(0,n.kt)("a",{parentName:"li",href:"https://azureaidevs.github.io/hub/blog/rss.xml"},"Subscribe to the #30DaysOfAzureAI RSS feed")),(0,n.kt)("li",{parentName:"ul"},"\ud83d\udccc ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/AzureAiDevs/Discussions/discussions/categories/5-learn-key-azure-ml-concepts"},"Ask a question about this post on GitHub Discussions")),(0,n.kt)("li",{parentName:"ul"},"\ud83d\udca1 ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/AzureAiDevs/Discussions/discussions/categories/call-for-content"},"Suggest a topic for a future post"))),(0,n.kt)("h2",{id:"day-5-of-30daysofazureai"},"Day ",(0,n.kt)("em",{parentName:"h2"},"5")," of #30DaysOfAzureAI"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Learn key Azure ML Concepts with this primer")),(0,n.kt)("p",null,"If you\u2019re used to training machine learning models on your local hardware, you may have experienced frustration as you hit the limits of what it can do. Maybe you\u2019ve trained a model overnight or over several days for a school project, preventing you from using your laptop for other homework. Or maybe you\u2019ve deployed a model in your company\u2019s hardware, only to find out that your product went viral unexpectedly and your hardware couldn\u2019t scale to meet demand. Or maybe as your team grows, you need a better way to manage the workflow of your machine learning project. These are a few common scenarios that are easily solved by moving your training and deployment to the cloud."),(0,n.kt)("p",null,"There are currently three major offerings in the AI cloud space: AWS Sagemaker from Amazon, Google Cloud Vertex AI from Google, and Azure ML from Microsoft. This article is the first in a series that will cover Azure ML in detail."),(0,n.kt)("h2",{id:"what-well-cover"},"What we'll cover"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"This post provides an overview of the main concepts in Azure ML to help the reader become effective at using the platform. "),(0,n.kt)("li",{parentName:"ul"},"Understanding these concepts will make following code samples easier and provide a good foundation for writing your own code. "),(0,n.kt)("li",{parentName:"ul"},"The goal is to make the reader proficient in using Azure ML.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Image shows authors and product icons",src:r(17448).Z,width:"834",height:"350"})),(0,n.kt)("h3",{id:"references"},"References"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/training/modules/intro-to-azure-ml?WT.mc_id=aiml-89446-dglover"},"Learn Module: Introduction to Azure Machine Learning")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/azure/machine-learning/overview-what-is-azure-machine-learning?WT.mc_id=aiml-89446-dglover"},"What is Azure Machine Learning?"))),(0,n.kt)("h2",{id:"why-use-azure-ml"},"Why Use Azure ML?"),(0,n.kt)("p",null,"The article discusses the benefits of using cloud computing for machine learning projects and introduces the Azure ML platform. Azure ML enables users to train and deploy machine learning models in the cloud, and offers resources including workspaces, datastores, jobs, assets, compute, and endpoints. The article provides an overview of each resource and explains the different ways of creating them using Azure ML Studio, Azure CLI, Python SDK, and REST APIs. The article aims to provide readers with a foundational understanding of Azure ML concepts to follow the code samples in upcoming posts."),(0,n.kt)("h2",{id:"learn-more"},"Learn More"),(0,n.kt)("p",null,"To learn more, check out this ",(0,n.kt)("a",{parentName:"p",href:"https://bea.stollnitz.com/blog/aml-introduction/"},"article"),"."),(0,n.kt)("h2",{id:"questions"},"Questions?"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/AzureAiDevs/Discussions/discussions/categories/5-learn-key-azure-ml-concepts"},"Remember, you can ask a question about this post on GitHub Discussions")))}p.isMDXComponent=!0},17448:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/banner-e973a20c3969038c89afbf45721cb901.png"}}]);