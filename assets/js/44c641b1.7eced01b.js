"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5461],{3905:(e,a,r)=>{r.d(a,{Zo:()=>p,kt:()=>m});var t=r(67294);function i(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function n(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?n(Object(r),!0).forEach((function(a){i(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function o(e,a){if(null==e)return{};var r,t,i=function(e,a){if(null==e)return{};var r,t,i={},n=Object.keys(e);for(t=0;t<n.length;t++)r=n[t],a.indexOf(r)>=0||(i[r]=e[r]);return i}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)r=n[t],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=t.createContext({}),u=function(e){var a=t.useContext(l),r=a;return e&&(r="function"==typeof e?e(a):s(s({},a),e)),r},p=function(e){var a=u(e.components);return t.createElement(l.Provider,{value:a},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},h=t.forwardRef((function(e,a){var r=e.components,i=e.mdxType,n=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(r),h=i,m=c["".concat(l,".").concat(h)]||c[h]||d[h]||n;return r?t.createElement(m,s(s({ref:a},p),{},{components:r})):t.createElement(m,s({ref:a},p))}));function m(e,a){var r=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var n=r.length,s=new Array(n);s[0]=h;var o={};for(var l in a)hasOwnProperty.call(a,l)&&(o[l]=a[l]);o.originalType=e,o[c]="string"==typeof e?e:i,s[1]=o;for(var u=2;u<n;u++)s[u]=r[u];return t.createElement.apply(null,s)}return t.createElement.apply(null,r)}h.displayName="MDXCreateElement"},48386:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>n,metadata:()=>o,toc:()=>u});var t=r(87462),i=(r(67294),r(3905));const n={slug:"day27",title:"27. \ud83c\udfedEnhance CX with Azure Personalizer",authors:["Arafat"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Personalizers","Cognitive-Services","Azure-AI"],tags:["ai-april","30-days-of-azure-ai","app-developers","workshop","azure-cognitive-services"],image:"https://azureaidevs.github.io/hub/img/2023-aia/banner-day27.png",description:"Maximizing Business Results with Azure Personalizer: A Machine Learning-Based Service for Personalized Customer Experiences https://azureaidevs.github.io/hub/2023-aia/day27 #30DaysOfAzureAI #AzureAiDevs #AI #AzurePersonalizer"},s=void 0,o={permalink:"/hub/2023-aia/day27",source:"@site/2023-aia/2023-04-29-azure-personalizer/index.md",title:"27. \ud83c\udfedEnhance CX with Azure Personalizer",description:"Maximizing Business Results with Azure Personalizer: A Machine Learning-Based Service for Personalized Customer Experiences https://azureaidevs.github.io/hub/2023-aia/day27 #30DaysOfAzureAI #AzureAiDevs #AI #AzurePersonalizer",date:"2023-04-29T00:00:00.000Z",formattedDate:"April 29, 2023",tags:[{label:"ai-april",permalink:"/hub/2023-aia/tags/ai-april"},{label:"30-days-of-azure-ai",permalink:"/hub/2023-aia/tags/30-days-of-azure-ai"},{label:"app-developers",permalink:"/hub/2023-aia/tags/app-developers"},{label:"workshop",permalink:"/hub/2023-aia/tags/workshop"},{label:"azure-cognitive-services",permalink:"/hub/2023-aia/tags/azure-cognitive-services"}],readingTime:3.07,hasTruncateMarker:!1,authors:[{name:"Arafat Tehsin",title:"Engineering Manager & Microsoft MVP (AI)",url:"https://github.com/arafattehsin",tag:"@arafattehsin",imageURL:"https://github.com/arafattehsin.png",key:"Arafat"}],frontMatter:{slug:"day27",title:"27. \ud83c\udfedEnhance CX with Azure Personalizer",authors:["Arafat"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Personalizers","Cognitive-Services","Azure-AI"],tags:["ai-april","30-days-of-azure-ai","app-developers","workshop","azure-cognitive-services"],image:"https://azureaidevs.github.io/hub/img/2023-aia/banner-day27.png",description:"Maximizing Business Results with Azure Personalizer: A Machine Learning-Based Service for Personalized Customer Experiences https://azureaidevs.github.io/hub/2023-aia/day27 #30DaysOfAzureAI #AzureAiDevs #AI #AzurePersonalizer"},prevItem:{title:"26. \ud83c\udfedStable Diffusion on Azure ML",permalink:"/hub/2023-aia/day26"},nextItem:{title:"28. \ud83c\udfedContinuing your Azure AI Journey\u2728",permalink:"/hub/2023-aia/day28"}},l={authorsImageUrls:[void 0]},u=[{value:"\ud83d\uddd3\ufe0f Day <em>27</em> of #30DaysOfAzureAI",id:"\ufe0f-day-27-of-30daysofazureai",level:2},{value:"\ud83c\udfaf What we&#39;ll cover",id:"-what-well-cover",level:2},{value:"\ud83d\udcda References",id:"-references",level:2},{value:"\ud83d\ude8c Personalized user experiences at scale",id:"-personalized-user-experiences-at-scale",level:2},{value:"\ud83d\udc53 Read today&#39;s article",id:"-read-todays-article",level:2},{value:"\ud83d\ude4b\ud83c\udffe\u200d\u2642\ufe0f Questions?",id:"\ufe0f-questions",level:2},{value:"\ud83d\udccd 30 days roadmap",id:"-30-days-roadmap",level:2}],p={toc:u};function c(e){let{components:a,...n}=e;return(0,i.kt)("wrapper",(0,t.Z)({},p,n,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("head",null,(0,i.kt)("link",{rel:"canonical",href:"https://www.arafattehsin.com/reinforcement-learning-in-apps-bots-websites-with-azure-personalizer-part-1"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\ud83d\udc53 ",(0,i.kt)("a",{parentName:"li",href:"https://www.arafattehsin.com/reinforcement-learning-in-apps-bots-websites-with-azure-personalizer-part-1"},"Read today's article")),(0,i.kt)("li",{parentName:"ul"},"\ud83d\udcec ",(0,i.kt)("a",{parentName:"li",href:"https://aka.ms/azure-ai-dev-newsletter"},"Sign up for the Microsoft AI and Machine Learning Newsletter")),(0,i.kt)("li",{parentName:"ul"},"\ud83d\ude4b\ud83c\udffe\u200d\u2642\ufe0f ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/AzureAiDevs/hub/discussions/categories/27-enhance-cx-with-azure-personalizer"},"Ask a question about this post on GitHub Discussions")),(0,i.kt)("li",{parentName:"ul"},"\ud83d\udca1 ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/AzureAiDevs/hub/discussions/categories/call-for-content"},"Suggest a topic for a future post"))),(0,i.kt)("h2",{id:"\ufe0f-day-27-of-30daysofazureai"},"\ud83d\uddd3\ufe0f Day ",(0,i.kt)("em",{parentName:"h2"},"27")," of #30DaysOfAzureAI"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Maximizing Business Results with Azure Personalizer: A Machine Learning-Based Service for Personalized Customer Experiences")),(0,i.kt)("p",null,"Yesterday we learned about the power of Stable Diffusion and Azure ML. Today, you're going to learn how to build personalized experiences for your customers with reinforcement learning using Azure Personalizer."),(0,i.kt)("h2",{id:"-what-well-cover"},"\ud83c\udfaf What we'll cover"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Azure Personalizer Cognitive Service."),(0,i.kt)("li",{parentName:"ul"},"Build a personalized experience for your users."),(0,i.kt)("li",{parentName:"ul"},"How to create the resources for Azure Personalizer.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Image banner for day 27",src:r(27953).Z,width:"834",height:"350"})),(0,i.kt)("h2",{id:"-references"},"\ud83d\udcda References"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://azure.microsoft.com/products/cognitive-services/personalizer?WT.mc_id=aiml-89446-dglover"},"Azure Personalizer Cognitive Service")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://azure.microsoft.com/en-au/products/cognitive-services/#overview?WT.mc_id=aiml-89446-dglover"},"Azure Cognitive Services")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://azure.microsoft.com/products/cognitive-services/#api?WT.mc_id=aiml-89446-dglover"},"Azure Cognitive Services APIs")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://startups.microsoft.com/blog/launchwithai-videoken?WT.mc_id=aiml-89446-dglover"},"Case Study: VideoKen is improving video discovery and engagement using AI"))),(0,i.kt)("h2",{id:"-personalized-user-experiences-at-scale"},"\ud83d\ude8c Personalized user experiences at scale"),(0,i.kt)("p",null,"Azure Personalizer is a cloud-based service offered by Microsoft Azure that enables developers to create personalized experiences for customers / users based on their preferences and behavior. By leveraging machine learning algorithms, Azure Personalizer can optimize personalized recommendations and actions to achieve the goals of the application, such as maximizing engagement or revenue. With its scalability and easy integration, it can be used to deliver tailored content and actions to a large number of users, providing a more engaging and satisfying user experience."),(0,i.kt)("p",null,"All in all, Azure Personalizer helps developers create personalized experiences for their users at scale, which can lead to increased user satisfaction and retention."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Personalizer gif",src:r(15843).Z,width:"600",height:"338"})),(0,i.kt)("p",null,"This ",(0,i.kt)("a",{parentName:"p",href:"https://www.arafattehsin.com/tag/azure-personalizer/"},"Azure Personalizer Workshop")," provides a comprehensive guide on how to create a personalized user experience using Azure Personalizer. The ",(0,i.kt)("a",{parentName:"p",href:"https://www.arafattehsin.com/reinforcement-learning-in-apps-bots-websites-with-azure-personalizer-part-1/"},"first")," part of the series introduces the necessary concepts of Azure Personalizer, including how it uses machine learning algorithms to optimize personalized recommendations and actions."),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://www.arafattehsin.com/reinforcement-learning-in-apps-bots-websites-with-azure-personalizer-part-2/"},"second")," part of the series focuses on creating a simulator to create and improve a Personalizer model before deploying it to production. This allows developers to test and refine their model before launching it to a large number of users."),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://www.arafattehsin.com/reinforcement-learning-in-apps-bots-websites-with-azure-personalizer-part-3/"},"final")," part of the series demonstrates how to use the Personalizer model in a Power Virtual Agents bot with the Power Automate custom connector."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Image banner for day 27",src:r(29861).Z,width:"800",height:"474"})),(0,i.kt)("p",null,"By following the steps outlined in the workshop, developers can create a more engaging and personalized user experience that can lead to increased user satisfaction and retention."),(0,i.kt)("h2",{id:"-read-todays-article"},"\ud83d\udc53 Read today's article"),(0,i.kt)("p",null,"Today's ",(0,i.kt)("a",{parentName:"p",href:"https://www.arafattehsin.com/reinforcement-learning-in-apps-bots-websites-with-azure-personalizer-part-1"},"article"),"."),(0,i.kt)("h2",{id:"\ufe0f-questions"},"\ud83d\ude4b\ud83c\udffe\u200d\u2642\ufe0f Questions?"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/AzureAiDevs/Discussions/discussions/categories/27-enhance-cx-with-azure-personalizer"},"Remember, you can ask a question about this post on GitHub Discussions")),(0,i.kt)("h2",{id:"-30-days-roadmap"},"\ud83d\udccd 30 days roadmap"),(0,i.kt)("p",null,"What's next? View the ",(0,i.kt)("a",{parentName:"p",href:"/hub/roadmap/30days"},"#30DaysOfAzureAI Roadmap")))}c.isMDXComponent=!0},29861:(e,a,r)=>{r.d(a,{Z:()=>t});const t=r.p+"assets/images/PVA-demo-7a52508312d596ce12eb33da18c27ab5.gif"},15843:(e,a,r)=>{r.d(a,{Z:()=>t});const t=r.p+"assets/images/Personalizer-f2b7ab725d58f6477a6446ce5152a01c.gif"},27953:(e,a,r)=>{r.d(a,{Z:()=>t});const t=r.p+"assets/images/banner-day27-d9e47525395bedbd0ee44f225f6528e7.png"}}]);