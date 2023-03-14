"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[557],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>d});var r=t(67294);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function n(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?n(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,r,i=function(e,a){if(null==e)return{};var t,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),u=function(e){var a=r.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},c=function(e){var a=u(e.components);return r.createElement(s.Provider,{value:a},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},h=r.forwardRef((function(e,a){var t=e.components,i=e.mdxType,n=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(t),h=i,d=p["".concat(s,".").concat(h)]||p[h]||m[h]||n;return t?r.createElement(d,o(o({ref:a},c),{},{components:t})):r.createElement(d,o({ref:a},c))}));function d(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var n=t.length,o=new Array(n);o[0]=h;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l[p]="string"==typeof e?e:i,o[1]=l;for(var u=2;u<n;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},33745:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>n,metadata:()=>l,toc:()=>u});var r=t(87462),i=(t(67294),t(3905));const n={slug:"day21",title:"21. \ud83e\uddd1\ud83c\udffd\u200d\ud83d\udd2cRecap: Azure ML Week\u2728",authors:["Dave"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Azure-AI","Machine-Learning","MLOps","rai"],tags:["ai-april","30-days-of-azure-ai","ml-developers","azure-mlops"],image:"https://azureaidevs.github.io/hub/img/2023-aia/banner-day21.png",description:"30DaysOfAzureAI Recap for Azure Machine Learning Week https://azureaidevs.github.io/hub/2023-aia/day21 #30DaysOfAzureAI #AzureAiDevs #AI"},o=void 0,l={permalink:"/hub/2023-aia/day21",source:"@site/2023-aia/2023-04-23-recap-week-three/index.md",title:"21. \ud83e\uddd1\ud83c\udffd\u200d\ud83d\udd2cRecap: Azure ML Week\u2728",description:"30DaysOfAzureAI Recap for Azure Machine Learning Week https://azureaidevs.github.io/hub/2023-aia/day21 #30DaysOfAzureAI #AzureAiDevs #AI",date:"2023-04-23T00:00:00.000Z",formattedDate:"April 23, 2023",tags:[{label:"ai-april",permalink:"/hub/2023-aia/tags/ai-april"},{label:"30-days-of-azure-ai",permalink:"/hub/2023-aia/tags/30-days-of-azure-ai"},{label:"ml-developers",permalink:"/hub/2023-aia/tags/ml-developers"},{label:"azure-mlops",permalink:"/hub/2023-aia/tags/azure-mlops"}],readingTime:1.535,hasTruncateMarker:!1,authors:[{name:"Dave Glover",title:"Principal Cloud Advocate",url:"https://github.com/gloveboxes",tag:"@dglover",imageURL:"https://github.com/gloveboxes.png",key:"Dave"}],frontMatter:{slug:"day21",title:"21. \ud83e\uddd1\ud83c\udffd\u200d\ud83d\udd2cRecap: Azure ML Week\u2728",authors:["Dave"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Azure-AI","Machine-Learning","MLOps","rai"],tags:["ai-april","30-days-of-azure-ai","ml-developers","azure-mlops"],image:"https://azureaidevs.github.io/hub/img/2023-aia/banner-day21.png",description:"30DaysOfAzureAI Recap for Azure Machine Learning Week https://azureaidevs.github.io/hub/2023-aia/day21 #30DaysOfAzureAI #AzureAiDevs #AI"},prevItem:{title:"20. \ud83e\uddd1\ud83c\udffd\u200d\ud83d\udd2cStreamline Ops w/ Azure MLOps",permalink:"/hub/2023-aia/day20"},nextItem:{title:"22. \ud83c\udfedMLOps Accelerator Explained",permalink:"/hub/2023-aia/day22"}},s={authorsImageUrls:[void 0]},u=[{value:"\ud83d\uddd3\ufe0f Day <em>21</em> of #30DaysOfAzureAI",id:"\ufe0f-day-21-of-30daysofazureai",level:2},{value:"\ud83c\udfaf What we&#39;ll cover",id:"-what-well-cover",level:2},{value:"\ud83d\udcda References",id:"-references",level:2},{value:"\ud83d\ude4b\ud83c\udffe\u200d\u2642\ufe0f Questions?",id:"\ufe0f-questions",level:2}],c={toc:u};function p(e){let{components:a,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("head",null,(0,i.kt)("link",{rel:"canonical",href:"https://azureaidevs.github.io/hub/2023-aia/day21"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\ud83d\udccd ",(0,i.kt)("a",{parentName:"li",href:"/hub/roadmap/30days/"},"30 days of Azure AI roadmap")),(0,i.kt)("li",{parentName:"ul"},"\ud83d\udcec ",(0,i.kt)("a",{parentName:"li",href:"https://aka.ms/azure-ai-dev-newsletter"},"Sign up for the AI and Machine Learning Newsletter")),(0,i.kt)("li",{parentName:"ul"},"\ud83d\udcf0 ",(0,i.kt)("a",{parentName:"li",href:"https://azureaidevs.github.io/hub/2023-aia/rss.xml"},"Subscribe to the #30DaysOfAzureAI RSS feed")),(0,i.kt)("li",{parentName:"ul"},"\ud83d\ude4b\ud83c\udffe\u200d\u2642\ufe0f ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/AzureAiDevs/hub/discussions/categories/21-recap-azure-ml-week%E2%9C%A8"},"Ask a question about this post on GitHub Discussions")),(0,i.kt)("li",{parentName:"ul"},"\ud83d\udca1 ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/AzureAiDevs/hub/discussions/categories/call-for-content"},"Suggest a topic for a future post"))),(0,i.kt)("h2",{id:"\ufe0f-day-21-of-30daysofazureai"},"\ud83d\uddd3\ufe0f Day ",(0,i.kt)("em",{parentName:"h2"},"21")," of #30DaysOfAzureAI"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"30DaysOfAzureAI Recap for Azure Machine Learning Week")),(0,i.kt)("h2",{id:"-what-well-cover"},"\ud83c\udfaf What we'll cover"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Image banner for day 21",src:t(34551).Z,width:"834",height:"350"})),(0,i.kt)("h2",{id:"-references"},"\ud83d\udcda References"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/training/modules/intro-to-azure-ml?WT.mc_id=aiml-89446-dglover"},"Learn Module: Introduction to Azure Machine Learning")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/training/paths/introduction-machine-learn-operations?WT.mc_id=aiml-89446-dglover"},"Learn Module: Introduction to machine learning operations (MLOps)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/azure/machine-learning/overview-what-is-azure-machine-learning?WT.mc_id=aiml-89446-dglover"},"What is Azure Machine Learning?")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/training/modules/start-ml-lifecycle-mlops?WT.mc_id=aiml-89446-dglover"},"Learn Module: Start the machine learning lifecycle with MLOps")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://azure.microsoft.com/products/machine-learning/mlops/#features?WT.mc_id=aiml-89446-dglover"},"Machine learning operations (MLOps)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://blogs.microsoft.com/on-the-issues/2023/02/02/responsible-ai-chatgpt-artificial-intelligence?WT.mc_id=aiml-89446-dglover"},"Meeting the AI moment: advancing the future through responsible AI")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://news.microsoft.com/source/features/ai/microsoft-approach-to-ai/#using-ai-responsibly?WT.mc_id=aiml-89446-dglover"},"Microsoft's approach to using AI responsibly"))),(0,i.kt)("h2",{id:"\ufe0f-questions"},"\ud83d\ude4b\ud83c\udffe\u200d\u2642\ufe0f Questions?"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/AzureAiDevs/Discussions/discussions/categories/21-recap-azure-ml-week%E2%9C%A8"},"Remember, you can ask a question about this post on GitHub Discussions")))}p.isMDXComponent=!0},34551:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/banner-day21-71e05800431efb27d5cd9c5c5e690ef6.png"}}]);