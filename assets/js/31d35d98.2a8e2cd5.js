"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6076],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var r=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(a),h=i,m=c["".concat(l,".").concat(h)]||c[h]||d[h]||n;return a?r.createElement(m,s(s({ref:t},p),{},{components:a})):r.createElement(m,s({ref:t},p))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,s=new Array(n);s[0]=h;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[c]="string"==typeof e?e:i,s[1]=o;for(var u=2;u<n;u++)s[u]=a[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},98134:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>n,metadata:()=>o,toc:()=>u});var r=a(87462),i=(a(67294),a(3905));const n={slug:"day9",title:"9. \ud83e\uddd1\u200d\ud83d\udcbbBuild intelligent apps w/ Azure AI SDKs",authors:["Arun"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Azure-OpenAI-Services","Cognitive-Services","Azure-AI"],tags:["ai-april","30-days-of-azure-ai","app-developers"],image:"https://azureaidevs.github.io/hub/img/2023-aia/banner-day9.png",description:"Building intelligent apps? Then explore the Azure AI Hub for OpenAI and Cognitive Services SDK samples https://azureaidevs.github.io/hub/2023-aia/day9 #30DaysOfAzureAI #AzureAiDevs #AI #OpenAI"},s=void 0,o={permalink:"/hub/2023-aia/day9",source:"@site/2023-aia/2023-04-10-azure-cog-openai-sdks/index.md",title:"9. \ud83e\uddd1\u200d\ud83d\udcbbBuild intelligent apps w/ Azure AI SDKs",description:"Building intelligent apps? Then explore the Azure AI Hub for OpenAI and Cognitive Services SDK samples https://azureaidevs.github.io/hub/2023-aia/day9 #30DaysOfAzureAI #AzureAiDevs #AI #OpenAI",date:"2023-04-10T00:00:00.000Z",formattedDate:"April 10, 2023",tags:[{label:"ai-april",permalink:"/hub/2023-aia/tags/ai-april"},{label:"30-days-of-azure-ai",permalink:"/hub/2023-aia/tags/30-days-of-azure-ai"},{label:"app-developers",permalink:"/hub/2023-aia/tags/app-developers"}],readingTime:2.43,hasTruncateMarker:!1,authors:[{name:"Arun Chandrasekhar",title:"Principal Product Manager",url:"https://github.com/achandmsft",tag:"@rcarunmsft",imageURL:"https://github.com/achandmsft.png",key:"Arun"}],frontMatter:{slug:"day9",title:"9. \ud83e\uddd1\u200d\ud83d\udcbbBuild intelligent apps w/ Azure AI SDKs",authors:["Arun"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Azure-OpenAI-Services","Cognitive-Services","Azure-AI"],tags:["ai-april","30-days-of-azure-ai","app-developers"],image:"https://azureaidevs.github.io/hub/img/2023-aia/banner-day9.png",description:"Building intelligent apps? Then explore the Azure AI Hub for OpenAI and Cognitive Services SDK samples https://azureaidevs.github.io/hub/2023-aia/day9 #30DaysOfAzureAI #AzureAiDevs #AI #OpenAI"},prevItem:{title:"8. \ud83c\udfc1Recap: Azure AI Fundamentals Week\u2728",permalink:"/hub/2023-aia/day8"},nextItem:{title:"10. \ud83e\uddd1\u200d\ud83d\udcbbInside look at Azure OpenAI for Devs",permalink:"/hub/2023-aia/day10"}},l={authorsImageUrls:[void 0]},u=[{value:"\ud83d\uddd3\ufe0f Day <em>9</em> of #30DaysOfAzureAI",id:"\ufe0f-day-9-of-30daysofazureai",level:2},{value:"\ud83c\udfaf What we&#39;ll cover",id:"-what-well-cover",level:2},{value:"\ud83d\udcda References",id:"-references",level:2},{value:"\ud83d\ude8c Introducing the Azure AI Hub",id:"-introducing-the-azure-ai-hub",level:2},{value:"\ud83d\udc53 Read today&#39;s article",id:"-read-todays-article",level:2},{value:"\ud83d\ude4b\ud83c\udffe\u200d\u2642\ufe0f Questions?",id:"\ufe0f-questions",level:2}],p={toc:u};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("head",null,(0,i.kt)("link",{rel:"canonical",href:"https://github.com/Azure-Samples/azure-ai"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\ud83d\udce7 ",(0,i.kt)("a",{parentName:"li",href:"https://aka.ms/azure-ai-dev-newsletter"},"Sign up for the Azure AI Developer Newsletter")),(0,i.kt)("li",{parentName:"ul"},"\ud83d\udcf0 ",(0,i.kt)("a",{parentName:"li",href:"https://azureaidevs.github.io/hub/2023-aia/rss.xml"},"Subscribe to the #30DaysOfAzureAI RSS feed")),(0,i.kt)("li",{parentName:"ul"},"\ud83d\udccc ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/AzureAiDevs/hub/discussions/categories/9-build-intelligent-apps-w/-azure-ai-sdks"},"Ask a question about this post on GitHub Discussions")),(0,i.kt)("li",{parentName:"ul"},"\ud83d\udca1 ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/AzureAiDevs/hub/discussions/categories/call-for-content"},"Suggest a topic for a future post"))),(0,i.kt)("h2",{id:"\ufe0f-day-9-of-30daysofazureai"},"\ud83d\uddd3\ufe0f Day ",(0,i.kt)("em",{parentName:"h2"},"9")," of #30DaysOfAzureAI"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Building intelligent apps? Then explore the Azure AI Hub for OpenAI and Cognitive Services SDK samples")),(0,i.kt)("p",null,"Last week was Azure AI fundamentals week, this week, we switch gears and focus on Azure AI App Developers. This week is for folk building intelligent apps that call Azure AI Services or incorporate AI models directly into apps. "),(0,i.kt)("p",null,"So what better place to start than an introduction to the Azure AI Hub where you'll find loads of samples for using the Azure AI Services SDKs. These samples are invaluable for getting started with Azure Cognitive Services and the Azure OpenAI Service."),(0,i.kt)("h2",{id:"-what-well-cover"},"\ud83c\udfaf What we'll cover"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The Azure AI Hub repo"),(0,i.kt)("li",{parentName:"ul"},"Code samples and discussion channels."),(0,i.kt)("li",{parentName:"ul"},"Best practices for using the Azure AI SDKs.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Image banner for day 9",src:a(5085).Z,width:"834",height:"350"})),(0,i.kt)("h2",{id:"-references"},"\ud83d\udcda References"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/azure/cognitive-services/openai/quickstart?pivots=programming-language-studio&WT.mc_id=aiml-89446-dglover"},"Quickstart: Get started generating text using Azure OpenAI Service")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/training/modules/explore-azure-openai&WT.mc_id=aiml-89446-dglover"},"Learn Module: Introduction to Azure OpenAI Service")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/training/browse/?products=azure-cognitive-services&WT.mc_id=aiml-89446-dglover"},"Learn Module: Learn about Azure Cognitive Services")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://startups.microsoft.com/blog/trelent-openai-service?WT.mc_id=aiml-89446-dglover"},"Case Study: Trelent powers source code documentation with OpenAI Service")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://customers.microsoft.com/story/1376278902865681018-instabase-partner-professional-services-azure?WT.mc_id=aiml-89446-dglover"},"Case Study: Hypergrowth startup harnesses deep learning to redefine enterprise productivity"))),(0,i.kt)("h2",{id:"-introducing-the-azure-ai-hub"},"\ud83d\ude8c Introducing the Azure AI Hub"),(0,i.kt)("p",null,"Read ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Azure-Samples/azure-ai"},"today's article")," to learn about the Azure AI Hub repository, a curated list of samples for popular end-to-end customer scenarios that use AI services from Azure. "),(0,i.kt)("p",null,"The repository includes a set of best practices and guidelines for developers to follow when building AI solutions. The repository is a one-stop shop for developers to find the latest Azure AI samples, and to learn best practices for building AI solutions."),(0,i.kt)("h2",{id:"-read-todays-article"},"\ud83d\udc53 Read today's article"),(0,i.kt)("p",null,"Today's ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Azure-Samples/azure-ai"},"article"),"."),(0,i.kt)("h2",{id:"\ufe0f-questions"},"\ud83d\ude4b\ud83c\udffe\u200d\u2642\ufe0f Questions?"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/AzureAiDevs/Discussions/discussions/categories/9-build-intelligent-apps-w/-azure-ai-sdks"},"Remember, you can ask a question about this post on GitHub Discussions")))}c.isMDXComponent=!0},5085:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/banner-day9-39ec090c7dd5e0ddfab53cd5def2d863.png"}}]);