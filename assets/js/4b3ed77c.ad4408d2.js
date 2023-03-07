"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7285],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=i,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||r;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:i,o[1]=l;for(var u=2;u<r;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},36165:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var a=n(87462),i=(n(67294),n(3905));const r={slug:"2023-day18",title:"18. \ud83e\uddd1\ud83c\udffd\u200d\ud83d\udd2cAzure ML Managed Online Endpoints",authors:["Vlad"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Machine-Learning","Azure-AI"],tags:["ai-april","30-days-of-azure-ai","ml-developers","azure-ml","data-scientist"],image:"https://azureaidevs.github.io/hub/img/og/30-01.png",description:"Azure ML Managed Online Endpoints - A Quickstart"},o=void 0,l={permalink:"/hub/blog/2023-day18",source:"@site/blog/2023-aia/2023-04-19-azureml-endpoints/index.md",title:"18. \ud83e\uddd1\ud83c\udffd\u200d\ud83d\udd2cAzure ML Managed Online Endpoints",description:"Azure ML Managed Online Endpoints - A Quickstart",date:"2023-04-19T00:00:00.000Z",formattedDate:"April 19, 2023",tags:[{label:"ai-april",permalink:"/hub/blog/tags/ai-april"},{label:"30-days-of-azure-ai",permalink:"/hub/blog/tags/30-days-of-azure-ai"},{label:"ml-developers",permalink:"/hub/blog/tags/ml-developers"},{label:"azure-ml",permalink:"/hub/blog/tags/azure-ml"},{label:"data-scientist",permalink:"/hub/blog/tags/data-scientist"}],readingTime:2.025,hasTruncateMarker:!1,authors:[{name:"Vlad Iliescu",title:"Head of AI at Strongbytes and Microsoft MVP @vladiliescu",url:"https://github.com/vladiliescu",imageURL:"https://github.com/vladiliescu.png",key:"Vlad"}],frontMatter:{slug:"2023-day18",title:"18. \ud83e\uddd1\ud83c\udffd\u200d\ud83d\udd2cAzure ML Managed Online Endpoints",authors:["Vlad"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Machine-Learning","Azure-AI"],tags:["ai-april","30-days-of-azure-ai","ml-developers","azure-ml","data-scientist"],image:"https://azureaidevs.github.io/hub/img/og/30-01.png",description:"Azure ML Managed Online Endpoints - A Quickstart"},prevItem:{title:"17. \ud83e\uddd1\ud83c\udffd\u200d\ud83d\udd2cStreamline Model Dev with Azure ML",permalink:"/hub/blog/2023-day17"},nextItem:{title:"19. \ud83e\uddd1\ud83c\udffd\u200d\ud83d\udd2cGuide to Responsible AI (Part 2)",permalink:"/hub/blog/2023-day19"}},s={authorsImageUrls:[void 0]},u=[{value:"Day <em>18</em> of #30DaysOfAzureAI",id:"day-18-of-30daysofazureai",level:2},{value:"What We&#39;ll Cover",id:"what-well-cover",level:2},{value:"Learn More",id:"learn-more",level:2},{value:"Questions?",id:"questions",level:2}],c={toc:u};function d(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("head",null,(0,i.kt)("meta",{name:"twitter:url",content:"https://azureaidevs.github.io/hub/ai-april/2023-day18"}),(0,i.kt)("meta",{name:"twitter:title",content:"Azure ML Managed Online Endpoints"}),(0,i.kt)("meta",{name:"twitter:description",content:"Azure ML Managed Online Endpoints - A Quickstart"}),(0,i.kt)("meta",{name:"twitter:image",content:"https://azureaidevs.github.io/hub/img/og/30-01.png"}),(0,i.kt)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,i.kt)("meta",{name:"twitter:creator",content:"dglover"}),(0,i.kt)("meta",{name:"twitter:site",content:"@AzureAdvocates"}),(0,i.kt)("link",{rel:"canonical",href:"https://vladiliescu.net/aml-managed-endpoints-quickstart/"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\ud83d\udce7 ",(0,i.kt)("a",{parentName:"li",href:"https://microsoft.github.io/Low-Code/subscribe"},"Subscribe to the Azure AI Developer Newsletter")),(0,i.kt)("li",{parentName:"ul"},"\ud83d\udccc ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/AzureAiDevs/Discussions/discussions/categories/18-azure-ml-managed-online-endpoints"},"Ask a question about this post on GitHub Discussions")),(0,i.kt)("li",{parentName:"ul"},"\ud83d\udca1 ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/AzureAiDevs/Discussions/discussions/categories/call-for-content"},"Suggest a topic for a future post"))),(0,i.kt)("h2",{id:"day-18-of-30daysofazureai"},"Day ",(0,i.kt)("em",{parentName:"h2"},"18")," of #30DaysOfAzureAI"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Azure ML Managed Online Endpoints - A Quickstart")),(0,i.kt)("p",null,"Unleash the full potential of your machine learning models with Azure Machine Learning's managed online endpoints. Enjoy the benefits of built-in security, native blue/green deployments, and auto-scaling with Azure Monitor. Achieve seamless deployment with step-by-step instructions using Azure CLI and Azure ML CLI v2 tools. Get started now!"),(0,i.kt)("h2",{id:"what-well-cover"},"What We'll Cover"),(0,i.kt)("p",null,"The three main points discussed in the article are:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Built-in security"),(0,i.kt)("li",{parentName:"ol"},"Native blue/green deployments"),(0,i.kt)("li",{parentName:"ol"},"Auto-scaling with Azure Monitor")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Empty Banner Placeholder",src:n(9799).Z,width:"834",height:"350"})),(0,i.kt)("p",null,"The article discusses the benefits of using Azure Machine Learning's managed online endpoints and compares them to Azure Container Instances. The author outlines three main reasons why they prefer managed online endpoints: built-in security, native blue/green deployments, and auto-scaling with Azure Monitor."),(0,i.kt)("p",null,"To deploy a machine learning model using managed online endpoints, the author suggests using Azure CLI and Azure ML CLI v2 tools. The author provides step-by-step instructions for deploying an online endpoint using an inference script that translates API inputs to something the model can handle, invokes the model, and returns formatted results. The inference script must have two methods: init, which loads the model into memory, and run, which is called when someone invokes the API."),(0,i.kt)("p",null,"Overall, the article is a helpful guide for anyone looking to deploy machine learning models using Azure Machine Learning's managed online endpoints."),(0,i.kt)("h2",{id:"learn-more"},"Learn More"),(0,i.kt)("p",null,"To learn more, check out this ",(0,i.kt)("a",{parentName:"p",href:"https://vladiliescu.net/aml-managed-endpoints-quickstart/"},"article"),"."),(0,i.kt)("h2",{id:"questions"},"Questions?"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/AzureAiDevs/Discussions/discussions/categories/18-azure-ml-managed-online-endpoints"},"Remember, you can ask a question about this post on GitHub Discussions")))}d.isMDXComponent=!0},9799:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/banner-833aa8307e96a53f610777f726e18e23.png"}}]);