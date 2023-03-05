"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6217],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),s=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(r),f=n,h=m["".concat(c,".").concat(f)]||m[f]||u[f]||i;return r?a.createElement(h,o(o({ref:t},p),{},{components:r})):a.createElement(h,o({ref:t},p))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[m]="string"==typeof e?e:n,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},13120:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=r(87462),n=(r(67294),r(3905));const i={slug:"2023-day20",title:"20. \ud83e\uddd1\ud83c\udffd\u200d\ud83d\udd2cLearn MLOps for the ML Lifecycle",authors:["Cassie"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["MLOps","Machine-Learning","Azure-AI"],tags:["ai-april","30-days-of-azure-ai","ml-developers"],image:"https://microsoft.github.io/Low-Code/img/og/30-01.png",description:"Learn Live: Start the machine learning lifecycle with MLOps"},o=void 0,l={permalink:"/hubv2/blog/2023-day20",source:"@site/blog/2023-aia/2023-04-21-mlops-intro/index.md",title:"20. \ud83e\uddd1\ud83c\udffd\u200d\ud83d\udd2cLearn MLOps for the ML Lifecycle",description:"Learn Live: Start the machine learning lifecycle with MLOps",date:"2023-04-21T00:00:00.000Z",formattedDate:"April 21, 2023",tags:[{label:"ai-april",permalink:"/hubv2/blog/tags/ai-april"},{label:"30-days-of-azure-ai",permalink:"/hubv2/blog/tags/30-days-of-azure-ai"},{label:"ml-developers",permalink:"/hubv2/blog/tags/ml-developers"}],readingTime:.89,hasTruncateMarker:!1,authors:[{name:"Cassie Breviu",title:"Senior Program Manager @CassieBreviu",url:"https://github.com/cassiebreviu",imageURL:"https://github.com/cassiebreviu.png",key:"Cassie"}],frontMatter:{slug:"2023-day20",title:"20. \ud83e\uddd1\ud83c\udffd\u200d\ud83d\udd2cLearn MLOps for the ML Lifecycle",authors:["Cassie"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["MLOps","Machine-Learning","Azure-AI"],tags:["ai-april","30-days-of-azure-ai","ml-developers"],image:"https://microsoft.github.io/Low-Code/img/og/30-01.png",description:"Learn Live: Start the machine learning lifecycle with MLOps"},prevItem:{title:"19. \ud83e\uddd1\ud83c\udffd\u200d\ud83d\udd2cBuilding Responsible AI in Every Model",permalink:"/hubv2/blog/2023-day19"},nextItem:{title:"21. \ud83e\uddd1\ud83c\udffd\u200d\ud83d\udd2cRecap - Machine Learning Week\u2728",permalink:"/hubv2/blog/2023-day21"}},c={authorsImageUrls:[void 0]},s=[{value:"Welcome to Day <em>20</em> of 30DaysOfAzureAI!",id:"welcome-to-day-20-of-30daysofazureai",level:2},{value:"What We&#39;ll Cover",id:"what-well-cover",level:2},{value:"Introduction",id:"introduction",level:2}],p={toc:s};function m(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("head",null,(0,n.kt)("meta",{name:"twitter:url",content:"https://aka.ms/ai-april/2023-day20"}),(0,n.kt)("meta",{name:"twitter:title",content:"Learn MLOps for the ML Lifecycle"}),(0,n.kt)("meta",{name:"twitter:description",content:"Learn Live: Start the machine learning lifecycle with MLOps"}),(0,n.kt)("meta",{name:"twitter:image",content:"https://aka.ms/ai-april/2023-day20/banner.png"}),(0,n.kt)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,n.kt)("meta",{name:"twitter:creator",content:"dglover"}),(0,n.kt)("meta",{name:"twitter:site",content:"@AzureAdvocates"}),(0,n.kt)("link",{rel:"canonical",href:"https://learn.microsoft.com/en-us/events/ignite-2022/cll99-learn-live-start-machine-learning-lifecycle-with-mlops"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\ud83d\udce7 ",(0,n.kt)("a",{parentName:"li",href:"https://microsoft.github.io/Low-Code/subscribe"},"Subscribe to the Azure AI Developer Newsletter")),(0,n.kt)("li",{parentName:"ul"},"\ud83d\udccc ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/AzureAiDevs/Discussions/discussions/categories/20-learn-mlops-for-the-ml-lifecycle"},"Ask a question about this post on GitHub Discussions"))),(0,n.kt)("h2",{id:"welcome-to-day-20-of-30daysofazureai"},"Welcome to Day ",(0,n.kt)("em",{parentName:"h2"},"20")," of 30DaysOfAzureAI!"),(0,n.kt)("h2",{id:"what-well-cover"},"What We'll Cover"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Empty Banner Placeholder",src:r(32031).Z,width:"834",height:"350"})),(0,n.kt)("h2",{id:"introduction"},"Introduction"),(0,n.kt)("p",null,"Learn Live: Start the machine learning lifecycle with MLOps"),(0,n.kt)("p",null,"To learn more, head over to the ",(0,n.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/events/ignite-2022/cll99-learn-live-start-machine-learning-lifecycle-with-mlops"},"original post"),"."))}m.isMDXComponent=!0},32031:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/banner-37800743c80922c43f5c8f96fd9fe6af.png"}}]);