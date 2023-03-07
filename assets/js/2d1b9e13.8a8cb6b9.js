"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5022],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(a),f=r,h=p["".concat(l,".").concat(f)]||p[f]||d[f]||i;return a?n.createElement(h,o(o({ref:t},c),{},{components:a})):n.createElement(h,o({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,o[1]=s;for(var u=2;u<i;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},41693:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var n=a(87462),r=(a(67294),a(3905));const i={slug:"2023-day26",title:"26. \ud83c\udfedStable Diffusion on Azure ML",authors:["Vlad"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Machine-Learning","Azure-AI","StableDiffusion"],tags:["ai-april","30-days-of-azure-ai","azure-ml","ml-engineers","app-developers","workshop"],image:"https://azureaidevs.github.io/hub/img/og/30-01.png",description:"How to run Stable Diffusion Web UI on Azure ML compute instances"},o=void 0,s={permalink:"/hub/blog/2023-day26",source:"@site/blog/2023-aia/2023-04-28-stable-diffusion/index.md",title:"26. \ud83c\udfedStable Diffusion on Azure ML",description:"How to run Stable Diffusion Web UI on Azure ML compute instances",date:"2023-04-28T00:00:00.000Z",formattedDate:"April 28, 2023",tags:[{label:"ai-april",permalink:"/hub/blog/tags/ai-april"},{label:"30-days-of-azure-ai",permalink:"/hub/blog/tags/30-days-of-azure-ai"},{label:"azure-ml",permalink:"/hub/blog/tags/azure-ml"},{label:"ml-engineers",permalink:"/hub/blog/tags/ml-engineers"},{label:"app-developers",permalink:"/hub/blog/tags/app-developers"},{label:"workshop",permalink:"/hub/blog/tags/workshop"}],readingTime:2.29,hasTruncateMarker:!1,authors:[{name:"Vlad Iliescu",title:"Head of AI at Strongbytes and Microsoft MVP @vladiliescu",url:"https://github.com/vladiliescu",imageURL:"https://github.com/vladiliescu.png",key:"Vlad"}],frontMatter:{slug:"2023-day26",title:"26. \ud83c\udfedStable Diffusion on Azure ML",authors:["Vlad"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Machine-Learning","Azure-AI","StableDiffusion"],tags:["ai-april","30-days-of-azure-ai","azure-ml","ml-engineers","app-developers","workshop"],image:"https://azureaidevs.github.io/hub/img/og/30-01.png",description:"How to run Stable Diffusion Web UI on Azure ML compute instances"},prevItem:{title:"25. \ud83c\udfedBuild a Patient Registration App",permalink:"/hub/blog/2023-day25"},nextItem:{title:"27. \ud83c\udfedEngage with Azure Personalizer",permalink:"/hub/blog/2023-day27"}},l={authorsImageUrls:[void 0]},u=[{value:"Day <em>26</em> of #30DaysOfAzureAI",id:"day-26-of-30daysofazureai",level:2},{value:"What We&#39;ll Cover",id:"what-well-cover",level:2},{value:"Learn More",id:"learn-more",level:2},{value:"Questions?",id:"questions",level:2}],c={toc:u};function p(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("head",null,(0,r.kt)("meta",{name:"twitter:url",content:"https://azureaidevs.github.io/hub/ai-april/2023-day26"}),(0,r.kt)("meta",{name:"twitter:title",content:"Stable Diffusion on Azure ML"}),(0,r.kt)("meta",{name:"twitter:description",content:"How to run Stable Diffusion Web UI on Azure ML compute instances"}),(0,r.kt)("meta",{name:"twitter:image",content:"https://azureaidevs.github.io/hub/img/og/30-01.png"}),(0,r.kt)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,r.kt)("meta",{name:"twitter:creator",content:"dglover"}),(0,r.kt)("meta",{name:"twitter:site",content:"@AzureAdvocates"}),(0,r.kt)("link",{rel:"canonical",href:"https://vladiliescu.net/stable-diffusion-web-ui-on-azure-ml/"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud83d\udce7 ",(0,r.kt)("a",{parentName:"li",href:"https://microsoft.github.io/Low-Code/subscribe"},"Subscribe to the Azure AI Developer Newsletter")),(0,r.kt)("li",{parentName:"ul"},"\ud83d\udccc ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/AzureAiDevs/Discussions/discussions/categories/26-stable-diffusion-on-azure-ml"},"Ask a question about this post on GitHub Discussions")),(0,r.kt)("li",{parentName:"ul"},"\ud83d\udca1 ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/AzureAiDevs/Discussions/discussions/categories/call-for-content"},"Suggest a topic for a future post"))),(0,r.kt)("h2",{id:"day-26-of-30daysofazureai"},"Day ",(0,r.kt)("em",{parentName:"h2"},"26")," of #30DaysOfAzureAI"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"How to run Stable Diffusion Web UI on Azure ML compute instances")),(0,r.kt)("p",null,'"Unlock the full potential of Stable Diffusion with Azure Machine Learning. Discover the comprehensive guide provided by the author on how to create the ideal environment for running this powerful tool. From code snippets to costs, this guide will take you on a journey of discovery and awe."'),(0,r.kt)("h2",{id:"what-well-cover"},"What We'll Cover"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"A comprehensive guide to run Stable Diffusion on Azure Machine Learning, including prerequisites and costs."),(0,r.kt)("li",{parentName:"ol"},"Discussion of the author's experience with Stable Diffusion on different GPU types."),(0,r.kt)("li",{parentName:"ol"},"A journey to unlock the full potential of Stable Diffusion with Azure Machine Learning.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Empty Banner Placeholder",src:a(53538).Z,width:"834",height:"350"})),(0,r.kt)("p",null,"The article describes how the author was fascinated by Stable Diffusion's ability to generate images and was determined to run it on Azure Machine Learning, as he was unable to use it on his MacBook. The author lists the prerequisites required to create Azure resources and provides the code snippets to create a resource group, Azure ML workspace, and a GPU compute instance. The article also guides readers on how to request access to GPU compute instances and how to avoid getting denied access due to the unavailability of GPU instances. The author recommends using a Standard_NC6s_v3 compute type with a Tesla V100 to run Stable Diffusion efficiently."),(0,r.kt)("p",null,"In summary, the article provides a comprehensive guide on how to create the required Azure resources to run Stable Diffusion on Azure Machine Learning. The author's experience with Stable Diffusion on different GPU types and the associated costs are also discussed, providing readers with a clear understanding of the resources required and their costs."),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(52149).Z,width:"1536",height:"768"})),(0,r.kt)("h2",{id:"learn-more"},"Learn More"),(0,r.kt)("p",null,"To learn more, check out this ",(0,r.kt)("a",{parentName:"p",href:"https://vladiliescu.net/stable-diffusion-web-ui-on-azure-ml/"},"article"),"."),(0,r.kt)("h2",{id:"questions"},"Questions?"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/AzureAiDevs/Discussions/discussions/categories/26-stable-diffusion-on-azure-ml"},"Remember, you can ask a question about this post on GitHub Discussions")))}p.isMDXComponent=!0},53538:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/banner-a9137e400a8d11b09fae830b535e3da6.png"},52149:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-1c5cdbd1cd567ab75dd7c7b1fc6eaf3b.jpeg"}}]);