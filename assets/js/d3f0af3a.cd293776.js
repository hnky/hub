"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8154],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>d});var a=t(67294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function n(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?n(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,a,i=function(e,r){if(null==e)return{};var t,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)t=n[a],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)t=n[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),u=function(e){var r=a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},c=function(e){var r=u(e.components);return a.createElement(l.Provider,{value:r},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},m=a.forwardRef((function(e,r){var t=e.components,i=e.mdxType,n=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(t),m=i,d=p["".concat(l,".").concat(m)]||p[m]||h[m]||n;return t?a.createElement(d,s(s({ref:r},c),{},{components:t})):a.createElement(d,s({ref:r},c))}));function d(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var n=t.length,s=new Array(n);s[0]=m;var o={};for(var l in r)hasOwnProperty.call(r,l)&&(o[l]=r[l]);o.originalType=e,o[p]="string"==typeof e?e:i,s[1]=o;for(var u=2;u<n;u++)s[u]=t[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},10154:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>n,metadata:()=>o,toc:()=>u});var a=t(87462),i=(t(67294),t(3905));const n={slug:"2023-day27",title:"27. \ud83c\udfedEnhance CX with Azure Personalizer",authors:["Arafat"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Personalizers","Cognitive-Services","Azure-AI"],tags:["ai-april","30-days-of-azure-ai","app-developers","workshop","azure-cognitive-services"],image:"https://azureaidevs.github.io/hub/img/2023/banner-day27.png",description:"Maximizing Business Results with Azure Personalizer: A Machine Learning-Based Service for Personalized Customer Experiences"},s=void 0,o={permalink:"/hub/blog/2023-day27",source:"@site/blog/2023-aia/2023-04-29-azure-personalizer/index.md",title:"27. \ud83c\udfedEnhance CX with Azure Personalizer",description:"Maximizing Business Results with Azure Personalizer: A Machine Learning-Based Service for Personalized Customer Experiences",date:"2023-04-29T00:00:00.000Z",formattedDate:"April 29, 2023",tags:[{label:"ai-april",permalink:"/hub/blog/tags/ai-april"},{label:"30-days-of-azure-ai",permalink:"/hub/blog/tags/30-days-of-azure-ai"},{label:"app-developers",permalink:"/hub/blog/tags/app-developers"},{label:"workshop",permalink:"/hub/blog/tags/workshop"},{label:"azure-cognitive-services",permalink:"/hub/blog/tags/azure-cognitive-services"}],readingTime:1.355,hasTruncateMarker:!1,authors:[{name:"Arafat Tehsin",title:"Engineering Manager & Microsoft MVP (AI) @arafattehsin",url:"https://github.com/arafattehsin",imageURL:"https://github.com/arafattehsin.png",key:"Arafat"}],frontMatter:{slug:"2023-day27",title:"27. \ud83c\udfedEnhance CX with Azure Personalizer",authors:["Arafat"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Personalizers","Cognitive-Services","Azure-AI"],tags:["ai-april","30-days-of-azure-ai","app-developers","workshop","azure-cognitive-services"],image:"https://azureaidevs.github.io/hub/img/2023/banner-day27.png",description:"Maximizing Business Results with Azure Personalizer: A Machine Learning-Based Service for Personalized Customer Experiences"},prevItem:{title:"26. \ud83c\udfedStable Diffusion on Azure ML",permalink:"/hub/blog/2023-day26"},nextItem:{title:"28. \ud83c\udfedContinuing your Azure AI Journey\u2728",permalink:"/hub/blog/2023-day28"}},l={authorsImageUrls:[void 0]},u=[{value:"Day <em>27</em> of #30DaysOfAzureAI",id:"day-27-of-30daysofazureai",level:2},{value:"What we&#39;ll cover",id:"what-well-cover",level:2},{value:"References",id:"references",level:3},{value:"Questions?",id:"questions",level:2}],c={toc:u};function p(e){let{components:r,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("head",null,(0,i.kt)("link",{rel:"canonical",href:"https://azureaidevs.github.io/hub/ai-april/2023-day27"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\ud83d\udce7 ",(0,i.kt)("a",{parentName:"li",href:"https://microsoft.github.io/Low-Code/subscribe"},"Sign up for the Azure AI Developer Newsletter")),(0,i.kt)("li",{parentName:"ul"},"\ud83d\udcf0 ",(0,i.kt)("a",{parentName:"li",href:"https://azureaidevs.github.io/hub/blog/rss.xml"},"Subscribe to the #30DaysOfAzureAI RSS feed")),(0,i.kt)("li",{parentName:"ul"},"\ud83d\udccc ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/AzureAiDevs/Discussions/discussions/categories/27-enhance-cx-with-azure-personalizer"},"Ask a question about this post on GitHub Discussions")),(0,i.kt)("li",{parentName:"ul"},"\ud83d\udca1 ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/AzureAiDevs/Discussions/discussions/categories/call-for-content"},"Suggest a topic for a future post"))),(0,i.kt)("h2",{id:"day-27-of-30daysofazureai"},"Day ",(0,i.kt)("em",{parentName:"h2"},"27")," of #30DaysOfAzureAI"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Maximizing Business Results with Azure Personalizer: A Machine Learning-Based Service for Personalized Customer Experiences")),(0,i.kt)("h2",{id:"what-well-cover"},"What we'll cover"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Image shows authors and product icons",src:t(43857).Z,width:"834",height:"350"})),(0,i.kt)("h3",{id:"references"},"References"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://azure.microsoft.com/en-us/products/cognitive-services/personalizer?WT.mc_id=aiml-89446-dglover"},"Azure Personalizer Cognitive Service")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://azure.microsoft.com/en-au/products/cognitive-services/#overview?WT.mc_id=aiml-89446-dglover"},"Azure Cognitive Services")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://azure.microsoft.com/en-us/products/cognitive-services/#api?WT.mc_id=aiml-89446-dglover"},"Azure Cognitive Services APIs"))),(0,i.kt)("h2",{id:"questions"},"Questions?"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/AzureAiDevs/Discussions/discussions/categories/27-enhance-cx-with-azure-personalizer"},"Remember, you can ask a question about this post on GitHub Discussions")))}p.isMDXComponent=!0},43857:(e,r,t)=>{t.d(r,{Z:()=>a});const a=t.p+"assets/images/banner-d9e47525395bedbd0ee44f225f6528e7.png"}}]);