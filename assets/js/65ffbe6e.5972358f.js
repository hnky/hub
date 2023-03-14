"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7032],{3905:(e,a,t)=>{t.d(a,{Zo:()=>d,kt:()=>h});var r=t(67294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=r.createContext({}),u=function(e){var a=r.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},d=function(e){var a=u(e.components);return r.createElement(s.Provider,{value:a},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},m=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=u(t),m=n,h=c["".concat(s,".").concat(m)]||c[m]||p[m]||i;return t?r.createElement(h,o(o({ref:a},d),{},{components:t})):r.createElement(h,o({ref:a},d))}));function h(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l[c]="string"==typeof e?e:n,o[1]=l;for(var u=2;u<i;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},83913:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=t(87462),n=(t(67294),t(3905));const i={slug:"day16",title:"16. \ud83e\uddd1\ud83c\udffd\u200d\ud83d\udd2cScaling Model Dev with Azure ML",authors:["Bea"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Machine-Learning","Azure-AI"],tags:["ai-april","30-days-of-azure-ai","ml-developers","azure-ml","data-scientist"],image:"https://azureaidevs.github.io/hub/img/2023-aia/banner-day16.png",description:"Azure ML: Train and Deploy ML Models at Scale https://azureaidevs.github.io/hub/2023-aia/day16 #30DaysOfAzureAI #AzureAiDevs #AI #AzureML"},o=void 0,l={permalink:"/hub/2023-aia/day16",source:"@site/2023-aia/2023-04-17-inside-azureml-train-deploy/index.md",title:"16. \ud83e\uddd1\ud83c\udffd\u200d\ud83d\udd2cScaling Model Dev with Azure ML",description:"Azure ML: Train and Deploy ML Models at Scale https://azureaidevs.github.io/hub/2023-aia/day16 #30DaysOfAzureAI #AzureAiDevs #AI #AzureML",date:"2023-04-17T00:00:00.000Z",formattedDate:"April 17, 2023",tags:[{label:"ai-april",permalink:"/hub/2023-aia/tags/ai-april"},{label:"30-days-of-azure-ai",permalink:"/hub/2023-aia/tags/30-days-of-azure-ai"},{label:"ml-developers",permalink:"/hub/2023-aia/tags/ml-developers"},{label:"azure-ml",permalink:"/hub/2023-aia/tags/azure-ml"},{label:"data-scientist",permalink:"/hub/2023-aia/tags/data-scientist"}],readingTime:2.565,hasTruncateMarker:!1,authors:[{name:"Beatriz Stollnitz",title:"Principal Cloud Advocate AiMl",url:"https://github.com/bstollnitz",tag:"@beastollnitz",imageURL:"https://github.com/bstollnitz.png",key:"Bea"}],frontMatter:{slug:"day16",title:"16. \ud83e\uddd1\ud83c\udffd\u200d\ud83d\udd2cScaling Model Dev with Azure ML",authors:["Bea"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Machine-Learning","Azure-AI"],tags:["ai-april","30-days-of-azure-ai","ml-developers","azure-ml","data-scientist"],image:"https://azureaidevs.github.io/hub/img/2023-aia/banner-day16.png",description:"Azure ML: Train and Deploy ML Models at Scale https://azureaidevs.github.io/hub/2023-aia/day16 #30DaysOfAzureAI #AzureAiDevs #AI #AzureML"},prevItem:{title:"15. \ud83e\uddd1\u200d\ud83d\udcbbRecap: Azure AI App Developers\u2728",permalink:"/hub/2023-aia/day15"},nextItem:{title:"17. \ud83e\uddd1\ud83c\udffd\u200d\ud83d\udd2cStreamline Model Dev with Azure ML",permalink:"/hub/2023-aia/day17"}},s={authorsImageUrls:[void 0]},u=[{value:"\ud83d\uddd3\ufe0f Day <em>16</em> of #30DaysOfAzureAI",id:"\ufe0f-day-16-of-30daysofazureai",level:2},{value:"\ud83c\udfaf What we&#39;ll cover",id:"-what-well-cover",level:2},{value:"\ud83d\udcda References",id:"-references",level:2},{value:"\ud83d\ude8c How to train and deploy in Azure ML",id:"-how-to-train-and-deploy-in-azure-ml",level:2},{value:"\ud83d\udc53 Read today&#39;s article",id:"-read-todays-article",level:2},{value:"\ud83d\ude4b\ud83c\udffe\u200d\u2642\ufe0f Questions?",id:"\ufe0f-questions",level:2},{value:"\ud83d\udccd 30 days roadmap",id:"-30-days-roadmap",level:2}],d={toc:u};function c(e){let{components:a,...i}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,i,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("head",null,(0,n.kt)("link",{rel:"canonical",href:"https://bea.stollnitz.com/blog/aml-command"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\ud83d\udc53 ",(0,n.kt)("a",{parentName:"li",href:"https://bea.stollnitz.com/blog/aml-command"},"Read today's article")),(0,n.kt)("li",{parentName:"ul"},"\ud83d\udcec ",(0,n.kt)("a",{parentName:"li",href:"https://aka.ms/azure-ai-dev-newsletter"},"Sign up for the Microsoft AI and Machine Learning Newsletter")),(0,n.kt)("li",{parentName:"ul"},"\ud83d\ude4b\ud83c\udffe\u200d\u2642\ufe0f ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/AzureAiDevs/hub/discussions/categories/16-scaling-model-dev-with-azure-ml"},"Ask a question about this post on GitHub Discussions")),(0,n.kt)("li",{parentName:"ul"},"\ud83d\udca1 ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/AzureAiDevs/hub/discussions/categories/call-for-content"},"Suggest a topic for a future post"))),(0,n.kt)("h2",{id:"\ufe0f-day-16-of-30daysofazureai"},"\ud83d\uddd3\ufe0f Day ",(0,n.kt)("em",{parentName:"h2"},"16")," of #30DaysOfAzureAI"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Azure ML: Train and Deploy ML Models at Scale")),(0,n.kt)("p",null,'Last week was for Azure AI App developers. This week, we switch gears and focus on Azure Machine Learning services for people building, deploying, and "productionalizing" ML models. If you\'re a Data Scientist, or an ML or MLOps engineer, then this week is for you. '),(0,n.kt)("p",null,"Today, learn about training and deploying machine learning models using Azure ML."),(0,n.kt)("h2",{id:"-what-well-cover"},"\ud83c\udfaf What we'll cover"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"How to train and deploy a machine learning model using Azure ML"),(0,n.kt)("li",{parentName:"ul"},"The three most common methods of creating resources: Azure ML CLI, Python SDK, and Studio UI")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Image banner for day 16",src:t(12345).Z,width:"834",height:"350"})),(0,n.kt)("h2",{id:"-references"},"\ud83d\udcda References"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/training/modules/intro-to-azure-ml?WT.mc_id=aiml-89446-dglover"},"Learn Module: Introduction to Azure Machine Learning")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/azure/machine-learning/overview-what-is-azure-machine-learning?WT.mc_id=aiml-89446-dglover"},"What is Azure Machine Learning?"))),(0,n.kt)("h2",{id:"-how-to-train-and-deploy-in-azure-ml"},"\ud83d\ude8c How to train and deploy in Azure ML"),(0,n.kt)("p",null,"Read ",(0,n.kt)("a",{parentName:"p",href:"https://bea.stollnitz.com/blog/aml-command"},"today's article")," is perfect if you have a basic understanding of how to train a machine learning model, but you've never used Azure ML before, then you're in the right place. ",(0,n.kt)("a",{parentName:"p",href:"https://bea.stollnitz.com/blog/aml-command"},"Today's article")," is a hands-on introduction to the most fundamental operations of Azure ML: training and deploying a machine learning model in the cloud. It discusses which resources you need to create, and the three main methods of creating them: the Azure ML CLI, the Python SDK, and the Studio UI."),(0,n.kt)("p",null,"The goal for today is for you to have a deep technical understanding of the basics of Azure ML. The article demonstrates how to train and deploy a simple model, but you'll be able to apply the same concepts to your own ML projects, regardless of their complexity.\xdf"),(0,n.kt)("h2",{id:"-read-todays-article"},"\ud83d\udc53 Read today's article"),(0,n.kt)("p",null,"Today's ",(0,n.kt)("a",{parentName:"p",href:"https://bea.stollnitz.com/blog/aml-command"},"article"),"."),(0,n.kt)("h2",{id:"\ufe0f-questions"},"\ud83d\ude4b\ud83c\udffe\u200d\u2642\ufe0f Questions?"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/AzureAiDevs/Discussions/discussions/categories/16-scaling-model-dev-with-azure-ml"},"Remember, you can ask a question about this post on GitHub Discussions")),(0,n.kt)("h2",{id:"-30-days-roadmap"},"\ud83d\udccd 30 days roadmap"),(0,n.kt)("p",null,"What's next? View the ",(0,n.kt)("a",{parentName:"p",href:"/hub/roadmap/30days"},"#30DaysOfAzureAI Roadmap")))}c.isMDXComponent=!0},12345:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/banner-day16-b3733e2355a538c43d84c922b864ac93.png"}}]);