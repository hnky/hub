"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2273],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),s=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(r),d=n,m=p["".concat(u,".").concat(d)]||p[d]||h[d]||o;return r?a.createElement(m,i(i({ref:t},c),{},{components:r})):a.createElement(m,i({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[p]="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},54883:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=r(87462),n=(r(67294),r(3905));const o={slug:"2023-day5",title:"5. \ud83c\udfc1Learn key Azure ML Concepts",authors:["Bea"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Machine-Learning","Azure-AI"],tags:["azure-ai","azure-ml","30-days-of-azure-ai"],image:"https://azureaidevs.github.io/hub/img/2023/banner-day5.png",description:"Learn key Azure ML Concepts with this primer https://azureaidevs.github.io/hub/blog/2023-day5 #30DaysOfAzureAI #AzureAiDevs #AI #AzureML"},i=void 0,l={permalink:"/hub/blog/2023-day5",source:"@site/blog/2023-aia/2023-04-06-azure-ml-intro/index.md",title:"5. \ud83c\udfc1Learn key Azure ML Concepts",description:"Learn key Azure ML Concepts with this primer https://azureaidevs.github.io/hub/blog/2023-day5 #30DaysOfAzureAI #AzureAiDevs #AI #AzureML",date:"2023-04-06T00:00:00.000Z",formattedDate:"April 6, 2023",tags:[{label:"azure-ai",permalink:"/hub/blog/tags/azure-ai"},{label:"azure-ml",permalink:"/hub/blog/tags/azure-ml"},{label:"30-days-of-azure-ai",permalink:"/hub/blog/tags/30-days-of-azure-ai"}],readingTime:2.28,hasTruncateMarker:!1,authors:[{name:"Beatriz Stollnitz",title:"Principal Cloud Advocate AiMl",url:"https://github.com/bstollnitz",tag:"@beastollnitz",imageURL:"https://github.com/bstollnitz.png",key:"Bea"}],frontMatter:{slug:"2023-day5",title:"5. \ud83c\udfc1Learn key Azure ML Concepts",authors:["Bea"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Machine-Learning","Azure-AI"],tags:["azure-ai","azure-ml","30-days-of-azure-ai"],image:"https://azureaidevs.github.io/hub/img/2023/banner-day5.png",description:"Learn key Azure ML Concepts with this primer https://azureaidevs.github.io/hub/blog/2023-day5 #30DaysOfAzureAI #AzureAiDevs #AI #AzureML"},prevItem:{title:"4. \ud83c\udfc1Build an AI Receipt App with Copilot",permalink:"/hub/blog/2023-day4"},nextItem:{title:"6. \ud83c\udfc1The Mission of Responsible AI",permalink:"/hub/blog/2023-day6"}},u={authorsImageUrls:[void 0]},s=[{value:"Day <em>5</em> of #30DaysOfAzureAI",id:"day-5-of-30daysofazureai",level:2},{value:"What we&#39;ll cover",id:"what-well-cover",level:2},{value:"References",id:"references",level:3},{value:"Introduction to Azure ML",id:"introduction-to-azure-ml",level:2},{value:"Learn More",id:"learn-more",level:2},{value:"Questions?",id:"questions",level:2}],c={toc:s};function p(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("head",null,(0,n.kt)("meta",{property:"og:url",content:"https://azureaidevs.github.io/hub/blog/2023-day5"}),(0,n.kt)("meta",{property:"og:title",content:"Learn key Azure ML Concepts"}),(0,n.kt)("meta",{property:"og:description",content:"Learn key Azure ML Concepts with this primer https://azureaidevs.github.io/hub/blog/2023-day5 #30DaysOfAzureAI #AzureAiDevs #AI #AzureML"}),(0,n.kt)("meta",{property:"og:image",content:"https://azureaidevs.github.io/hub/img/2023/banner-day5.png"}),(0,n.kt)("meta",{property:"og:type",content:"article"}),(0,n.kt)("meta",{property:"og:site_name",content:"Azure AI Developer"}),(0,n.kt)("link",{rel:"canonical",href:"https://bea.stollnitz.com/blog/aml-introduction/"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\ud83d\udce7 ",(0,n.kt)("a",{parentName:"li",href:"https://aka.ms/azure-ai-dev-newsletter"},"Sign up for the Azure AI Developer Newsletter")),(0,n.kt)("li",{parentName:"ul"},"\ud83d\udcf0 ",(0,n.kt)("a",{parentName:"li",href:"https://azureaidevs.github.io/hub/blog/rss.xml"},"Subscribe to the #30DaysOfAzureAI RSS feed")),(0,n.kt)("li",{parentName:"ul"},"\ud83d\udccc ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/AzureAiDevs/hub/discussions/categories/5-learn-key-azure-ml-concepts"},"Ask a question about this post on GitHub Discussions")),(0,n.kt)("li",{parentName:"ul"},"\ud83d\udca1 ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/AzureAiDevs/hub/discussions/categories/call-for-content"},"Suggest a topic for a future post"))),(0,n.kt)("h2",{id:"day-5-of-30daysofazureai"},"Day ",(0,n.kt)("em",{parentName:"h2"},"5")," of #30DaysOfAzureAI"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Learn key Azure ML Concepts with this primer")),(0,n.kt)("p",null,"Yesterday we talked about using Copilot to build an intelligent Receipt processing app. Today we'll explore Azure Machine Learning."),(0,n.kt)("h2",{id:"what-well-cover"},"What we'll cover"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Why use Azure ML"),(0,n.kt)("li",{parentName:"ul"},"The main resources used to train and deploy models in Azure ML "),(0,n.kt)("li",{parentName:"ul"},"The four different ways of creating those resources")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Image banner for day 5",src:r(92981).Z,width:"834",height:"350"})),(0,n.kt)("h3",{id:"references"},"References"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/training/modules/intro-to-azure-ml?WT.mc_id=aiml-89446-dglover"},"Learn Module: Introduction to Azure Machine Learning")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/azure/machine-learning/overview-what-is-azure-machine-learning?WT.mc_id=aiml-89446-dglover"},"What is Azure Machine Learning?"))),(0,n.kt)("h2",{id:"introduction-to-azure-ml"},"Introduction to Azure ML"),(0,n.kt)("p",null,"Read ",(0,n.kt)("a",{parentName:"p",href:"https://bea.stollnitz.com/blog/aml-introduction/"},"today's article")," to understand the benefits of using cloud computing for machine learning projects, and to get an overview of Microsoft's Azure ML platform. Azure ML enables you to train and deploy machine learning models in the cloud, by creating a variety of resources that help tailor the workflow to your needs. Today's article provides an overview of each of those resources, and explains the four different ways of creating them."),(0,n.kt)("p",null,"The goal for today is for you to get a foundational understanding of Azure ML concepts, so that you'll be able to follow code samples later in the AI April month."),(0,n.kt)("h2",{id:"learn-more"},"Learn More"),(0,n.kt)("p",null,"Check out today's ",(0,n.kt)("a",{parentName:"p",href:"https://bea.stollnitz.com/blog/aml-introduction/"},"article"),"."),(0,n.kt)("h2",{id:"questions"},"Questions?"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/AzureAiDevs/Discussions/discussions/categories/5-learn-key-azure-ml-concepts"},"Remember, you can ask a question about this post on GitHub Discussions")))}p.isMDXComponent=!0},92981:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/banner-day5-e973a20c3969038c89afbf45721cb901.png"}}]);