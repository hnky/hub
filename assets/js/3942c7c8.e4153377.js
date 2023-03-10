"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9443],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var r=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(a),b=i,h=c["".concat(l,".").concat(b)]||c[b]||d[b]||n;return a?r.createElement(h,o(o({ref:t},p),{},{components:a})):r.createElement(h,o({ref:t},p))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,o=new Array(n);o[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:i,o[1]=s;for(var u=2;u<n;u++)o[u]=a[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}b.displayName="MDXCreateElement"},17887:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>n,metadata:()=>s,toc:()=>u});var r=a(87462),i=(a(67294),a(3905));const n={slug:"2023-day19",title:"19. \ud83e\uddd1\ud83c\udffd\u200d\ud83d\udd2cDebug models w/ Responsible AI",authors:["Ruth"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Machine-Learning","Azure-AI","rai-privacy-security","rai-fairness","rai-transparency","rai-accountable","rai-inclusion","rai-reliable"],tags:["azure-ai","responsible-ai","30-days-of-azure-ai","ml-developers","app-developers","machine-learning-debugging-tools","responsible-ai-tools"],image:"https://azureaidevs.github.io/hub/img/2023/banner-day19.png",description:"Guide to analyzing ML models for Responsible AI issues (Part 1) https://azureaidevs.github.io/hub/blog/2023-day19 #30DaysOfAzureAI #AzureAiDevs #AI #AIEthics"},o=void 0,s={permalink:"/hub/blog/2023-day19",source:"@site/blog/2023-aia/2023-04-20-rai-part-1/index.md",title:"19. \ud83e\uddd1\ud83c\udffd\u200d\ud83d\udd2cDebug models w/ Responsible AI",description:"Guide to analyzing ML models for Responsible AI issues (Part 1) https://azureaidevs.github.io/hub/blog/2023-day19 #30DaysOfAzureAI #AzureAiDevs #AI #AIEthics",date:"2023-04-20T00:00:00.000Z",formattedDate:"April 20, 2023",tags:[{label:"azure-ai",permalink:"/hub/blog/tags/azure-ai"},{label:"responsible-ai",permalink:"/hub/blog/tags/responsible-ai"},{label:"30-days-of-azure-ai",permalink:"/hub/blog/tags/30-days-of-azure-ai"},{label:"ml-developers",permalink:"/hub/blog/tags/ml-developers"},{label:"app-developers",permalink:"/hub/blog/tags/app-developers"},{label:"machine-learning-debugging-tools",permalink:"/hub/blog/tags/machine-learning-debugging-tools"},{label:"responsible-ai-tools",permalink:"/hub/blog/tags/responsible-ai-tools"}],readingTime:2.425,hasTruncateMarker:!1,authors:[{name:"Ruth Yakubu",title:"Principal Cloud Advocate",url:"https://github.com/ruyakubu",tag:"@ruthieyakubu",imageURL:"https://github.com/ruyakubu.png",key:"Ruth"}],frontMatter:{slug:"2023-day19",title:"19. \ud83e\uddd1\ud83c\udffd\u200d\ud83d\udd2cDebug models w/ Responsible AI",authors:["Ruth"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Machine-Learning","Azure-AI","rai-privacy-security","rai-fairness","rai-transparency","rai-accountable","rai-inclusion","rai-reliable"],tags:["azure-ai","responsible-ai","30-days-of-azure-ai","ml-developers","app-developers","machine-learning-debugging-tools","responsible-ai-tools"],image:"https://azureaidevs.github.io/hub/img/2023/banner-day19.png",description:"Guide to analyzing ML models for Responsible AI issues (Part 1) https://azureaidevs.github.io/hub/blog/2023-day19 #30DaysOfAzureAI #AzureAiDevs #AI #AIEthics"},prevItem:{title:"18. \ud83e\uddd1\ud83c\udffd\u200d\ud83d\udd2cAzure ML Managed Online Endpoints",permalink:"/hub/blog/2023-day18"},nextItem:{title:"20. \ud83e\uddd1\ud83c\udffd\u200d\ud83d\udd2cStreamline Ops w/ Azure MLOps",permalink:"/hub/blog/2023-day20"}},l={authorsImageUrls:[void 0]},u=[{value:"\ud83d\uddd3\ufe0f Day <em>19</em> of #30DaysOfAzureAI",id:"\ufe0f-day-19-of-30daysofazureai",level:2},{value:"\ud83c\udfaf What we&#39;ll cover",id:"-what-well-cover",level:2},{value:"\ud83d\udcda References",id:"-references",level:2},{value:"\ud83d\ude8c What is Responsible AI Dashboard?",id:"-what-is-responsible-ai-dashboard",level:2},{value:"\ud83d\udc53 Read today&#39;s article",id:"-read-todays-article",level:2},{value:"\ud83d\ude4b\ud83c\udffe\u200d\u2642\ufe0f Questions?",id:"\ufe0f-questions",level:2}],p={toc:u};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("head",null,(0,i.kt)("meta",{property:"og:url",content:"https://azureaidevs.github.io/hub/blog/2023-day19"}),(0,i.kt)("meta",{property:"og:title",content:"Debug models w/ Responsible AI"}),(0,i.kt)("meta",{property:"og:description",content:"Guide to analyzing ML models for Responsible AI issues (Part 1) https://azureaidevs.github.io/hub/blog/2023-day19 #30DaysOfAzureAI #AzureAiDevs #AI #AIEthics"}),(0,i.kt)("meta",{property:"og:image",content:"https://azureaidevs.github.io/hub/img/2023/banner-day19.png"}),(0,i.kt)("meta",{property:"og:type",content:"article"}),(0,i.kt)("meta",{property:"og:site_name",content:"Azure AI Developer"}),(0,i.kt)("link",{rel:"canonical",href:"https://techcommunity.microsoft.com/t5/ai-machine-learning-blog/getting-started-with-azure-machine-learning-responsible-ai/ba-p/3746948"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\ud83d\udce7 ",(0,i.kt)("a",{parentName:"li",href:"https://aka.ms/azure-ai-dev-newsletter"},"Sign up for the Azure AI Developer Newsletter")),(0,i.kt)("li",{parentName:"ul"},"\ud83d\udcf0 ",(0,i.kt)("a",{parentName:"li",href:"https://azureaidevs.github.io/hub/blog/rss.xml"},"Subscribe to the #30DaysOfAzureAI RSS feed")),(0,i.kt)("li",{parentName:"ul"},"\ud83d\udccc ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/AzureAiDevs/hub/discussions/categories/19-debug-models-w/-responsible-ai"},"Ask a question about this post on GitHub Discussions")),(0,i.kt)("li",{parentName:"ul"},"\ud83d\udca1 ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/AzureAiDevs/hub/discussions/categories/call-for-content"},"Suggest a topic for a future post"))),(0,i.kt)("h2",{id:"\ufe0f-day-19-of-30daysofazureai"},"\ud83d\uddd3\ufe0f Day ",(0,i.kt)("em",{parentName:"h2"},"19")," of #30DaysOfAzureAI"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Guide to analyzing ML models for Responsible AI issues (Part 1)")),(0,i.kt)("p",null,'Yesterday we learned how to deploy ML models using Azure ML managed online endpoints. In the "Fundamentals" week we learned about the importance of Responsible AI. Today, we get practical, you\'ll learn about the Azure ML Responsible AI Dashboard and how it can help you build fairer ML models.'),(0,i.kt)("h2",{id:"-what-well-cover"},"\ud83c\udfaf What we'll cover"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The Azure ML RAI Dashboard."),(0,i.kt)("li",{parentName:"ul"},"Build fairer and responsible AI models."),(0,i.kt)("li",{parentName:"ul"},"Tools for responsible AI development, including model interoperability, error analysis, and counterfactual analysis.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Image banner for day 19",src:a(37603).Z,width:"834",height:"350"})),(0,i.kt)("h2",{id:"-references"},"\ud83d\udcda References"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://news.microsoft.com/source/features/ai/microsoft-approach-to-ai/#using-ai-responsibly?WT.mc_id=aiml-89446-dglover"},"Microsoft's approach to using AI responsibly")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://blogs.microsoft.com/on-the-issues/2023/02/02/responsible-ai-chatgpt-artificial-intelligence?WT.mc_id=aiml-89446-dglover"},"Meeting the AI moment: advancing the future through responsible AI"))),(0,i.kt)("h2",{id:"-what-is-responsible-ai-dashboard"},"\ud83d\ude8c What is Responsible AI Dashboard?"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://techcommunity.microsoft.com/t5/ai-machine-learning-blog/getting-started-with-azure-machine-learning-responsible-ai/ba-p/3746948"},"Today's article")," is about the Responsible AI (RAI) Dashboard is a suite of open-source tools that help developers create responsible AI models with features such as model statistics, data explorer, error analysis, model interpretability, counterfactual analysis, and causal inference. The dashboard is built on leading open-source tools such as ErrorAnalysis, InterpretML, Fairlearn, DiCE, and EconML, and it can be accessed through the Azure Machine Learning platform. The RAI components allow developers to troubleshoot and analyze models and make better decisions to produce more responsible AI systems."),(0,i.kt)("h2",{id:"-read-todays-article"},"\ud83d\udc53 Read today's article"),(0,i.kt)("p",null,"Today's ",(0,i.kt)("a",{parentName:"p",href:"https://techcommunity.microsoft.com/t5/ai-machine-learning-blog/getting-started-with-azure-machine-learning-responsible-ai/ba-p/3746948"},"article"),"."),(0,i.kt)("h2",{id:"\ufe0f-questions"},"\ud83d\ude4b\ud83c\udffe\u200d\u2642\ufe0f Questions?"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/AzureAiDevs/Discussions/discussions/categories/19-debug-models-w/-responsible-ai"},"Remember, you can ask a question about this post on GitHub Discussions")))}c.isMDXComponent=!0},37603:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/banner-day19-5a1412d792726cee1bfe955224d657ed.png"}}]);