"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3187],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),m=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=m(r),d=a,g=p["".concat(s,".").concat(d)]||p[d]||c[d]||o;return r?n.createElement(g,i(i({ref:t},u),{},{components:r})):n.createElement(g,i({ref:t},u))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var m=2;m<o;m++)i[m]=r[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},67608:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>m});var n=r(87462),a=(r(67294),r(3905));const o={slug:"2023-day17",title:"17. \ud83e\uddd1\ud83c\udffd\u200d\ud83d\udd2cStreamline Model Dev with Azure ML",authors:["Bea"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,tags:["ai-april","30-days-of-azure-ai","ml-developers","azure-ml","data-scientist"],image:"https://microsoft.github.io/Low-Code/img/og/30-01.png",description:"Streamlining ML Development with Azure ML Components & Pipelines"},i=void 0,l={permalink:"/hubv2/blog/2023-day17",source:"@site/blog/2023-aia/2023-04-18-azureml-pipelines/index.md",title:"17. \ud83e\uddd1\ud83c\udffd\u200d\ud83d\udd2cStreamline Model Dev with Azure ML",description:"Streamlining ML Development with Azure ML Components & Pipelines",date:"2023-04-18T00:00:00.000Z",formattedDate:"April 18, 2023",tags:[{label:"ai-april",permalink:"/hubv2/blog/tags/ai-april"},{label:"30-days-of-azure-ai",permalink:"/hubv2/blog/tags/30-days-of-azure-ai"},{label:"ml-developers",permalink:"/hubv2/blog/tags/ml-developers"},{label:"azure-ml",permalink:"/hubv2/blog/tags/azure-ml"},{label:"data-scientist",permalink:"/hubv2/blog/tags/data-scientist"}],readingTime:.9,hasTruncateMarker:!1,authors:[{name:"Beatriz Stollnitz",title:"Principal Cloud Advocate AiMl @beastollnitz",url:"https://github.com/bstollnitz",imageURL:"https://github.com/bstollnitz.png",key:"Bea"}],frontMatter:{slug:"2023-day17",title:"17. \ud83e\uddd1\ud83c\udffd\u200d\ud83d\udd2cStreamline Model Dev with Azure ML",authors:["Bea"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,tags:["ai-april","30-days-of-azure-ai","ml-developers","azure-ml","data-scientist"],image:"https://microsoft.github.io/Low-Code/img/og/30-01.png",description:"Streamlining ML Development with Azure ML Components & Pipelines"},prevItem:{title:"16. \ud83e\uddd1\ud83c\udffd\u200d\ud83d\udd2cScaling Model Dev with Azure ML",permalink:"/hubv2/blog/2023-day16"},nextItem:{title:"18. \ud83e\uddd1\ud83c\udffd\u200d\ud83d\udd2cAzure ML Managed Online Endpoints",permalink:"/hubv2/blog/2023-day18"}},s={authorsImageUrls:[void 0]},m=[{value:"Welcome to <em>Day 17</em> of 30DaysOfAzureAI!",id:"welcome-to-day-17-of-30daysofazureai",level:2},{value:"What We&#39;ll Cover",id:"what-well-cover",level:2},{value:"Introduction",id:"introduction",level:2}],u={toc:m};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("head",null,(0,a.kt)("meta",{name:"twitter:url",content:"https://microsoft.github.io/Low-Code/blog/2023-day17"}),(0,a.kt)("meta",{name:"twitter:title",content:"Streamline Model Dev with Azure ML"}),(0,a.kt)("meta",{name:"twitter:description",content:"Streamlining ML Development with Azure ML Components & Pipelines"}),(0,a.kt)("meta",{name:"twitter:image",content:"https://microsoft.github.io/Low-Code/blog/2023-day17/twitter.png"}),(0,a.kt)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,a.kt)("meta",{name:"twitter:creator",content:"dglover"}),(0,a.kt)("meta",{name:"twitter:site",content:"@AzureAdvocates"}),(0,a.kt)("link",{rel:"canonical",href:"https://bea.stollnitz.com/blog/aml-pipeline/"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ud83d\udce7 ",(0,a.kt)("a",{parentName:"li",href:"https://microsoft.github.io/Low-Code/subscribe"},"Subscribe to the Azure AI Developer Newsletter")),(0,a.kt)("li",{parentName:"ul"},"\ud83d\udccc ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/AzureAiDevs/Discussions/discussions/categories/17-streamline-model-dev-with-azure-ml"},"Ask a question about this post on GitHub Discussions"))),(0,a.kt)("h2",{id:"welcome-to-day-17-of-30daysofazureai"},"Welcome to ",(0,a.kt)("em",{parentName:"h2"},"Day 17")," of 30DaysOfAzureAI!"),(0,a.kt)("h2",{id:"what-well-cover"},"What We'll Cover"),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"Streamlining ML Development with Azure ML Components & Pipelines"),(0,a.kt)("p",null,"To learn more, head over to the ",(0,a.kt)("a",{parentName:"p",href:"https://bea.stollnitz.com/blog/aml-pipeline/"},"original post"),"."))}p.isMDXComponent=!0}}]);