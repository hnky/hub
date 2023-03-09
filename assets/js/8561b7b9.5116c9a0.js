"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2367],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var r=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(a),h=o,m=c["".concat(s,".").concat(h)]||c[h]||d[h]||i;return a?r.createElement(m,n(n({ref:t},u),{},{components:a})):r.createElement(m,n({ref:t},u))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,n=new Array(i);n[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:o,n[1]=l;for(var p=2;p<i;p++)n[p]=a[p];return r.createElement.apply(null,n)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},61131:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>n,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=a(87462),o=(a(67294),a(3905));const i={slug:"2023-day14",title:"14. \ud83e\uddd1\u200d\ud83d\udcbbBlazor Apps and Azure OpenAI",authors:["Michael"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Azure-OpenAI-Services","Blazor","vscode","Azure-AI"],tags:["ai-april","30-days-of-azure-ai","app-developers","copilot","open-ai"],image:"https://azureaidevs.github.io/hub/img/2023/banner-day14.png",description:"Build Interactive Web Applications with Microsoft Blazor and Azure OpenAI https://azureaidevs.github.io/hub/blog/2023-day14 #30DaysOfAzureAI #AzureAiDevs #AI #OpenAI"},n=void 0,l={permalink:"/hub/blog/2023-day14",source:"@site/blog/2023-aia/2023-04-15-openai-blazer/index.md",title:"14. \ud83e\uddd1\u200d\ud83d\udcbbBlazor Apps and Azure OpenAI",description:"Build Interactive Web Applications with Microsoft Blazor and Azure OpenAI https://azureaidevs.github.io/hub/blog/2023-day14 #30DaysOfAzureAI #AzureAiDevs #AI #OpenAI",date:"2023-04-15T00:00:00.000Z",formattedDate:"April 15, 2023",tags:[{label:"ai-april",permalink:"/hub/blog/tags/ai-april"},{label:"30-days-of-azure-ai",permalink:"/hub/blog/tags/30-days-of-azure-ai"},{label:"app-developers",permalink:"/hub/blog/tags/app-developers"},{label:"copilot",permalink:"/hub/blog/tags/copilot"},{label:"open-ai",permalink:"/hub/blog/tags/open-ai"}],readingTime:3.335,hasTruncateMarker:!1,authors:[{name:"Michael Washington",title:"Founder of BlazorHelpWebsite.com and Microsoft MVP @ADefWebserver",url:"https://github.com/ADefWebserver",imageURL:"https://github.com/ADefWebserver.png",key:"Michael"}],frontMatter:{slug:"2023-day14",title:"14. \ud83e\uddd1\u200d\ud83d\udcbbBlazor Apps and Azure OpenAI",authors:["Michael"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Azure-OpenAI-Services","Blazor","vscode","Azure-AI"],tags:["ai-april","30-days-of-azure-ai","app-developers","copilot","open-ai"],image:"https://azureaidevs.github.io/hub/img/2023/banner-day14.png",description:"Build Interactive Web Applications with Microsoft Blazor and Azure OpenAI https://azureaidevs.github.io/hub/blog/2023-day14 #30DaysOfAzureAI #AzureAiDevs #AI #OpenAI"},prevItem:{title:"13. \ud83e\uddd1\u200d\ud83d\udcbbCopilot's updated AI model",permalink:"/hub/blog/2023-day13"},nextItem:{title:"15. \ud83e\uddd1\u200d\ud83d\udcbbRecap: Azure AI App Developers\u2728",permalink:"/hub/blog/2023-day15"}},s={authorsImageUrls:[void 0]},p=[{value:"Day <em>14</em> of #30DaysOfAzureAI",id:"day-14-of-30daysofazureai",level:2},{value:"What we&#39;ll cover",id:"what-well-cover",level:2},{value:"References",id:"references",level:3},{value:"Learn More",id:"learn-more",level:2},{value:"Questions?",id:"questions",level:2}],u={toc:p};function c(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("head",null,(0,o.kt)("meta",{property:"og:url",content:"https://azureaidevs.github.io/hub/blog/2023-day14"}),(0,o.kt)("meta",{property:"og:title",content:"Blazor Apps and Azure OpenAI"}),(0,o.kt)("meta",{property:"og:description",content:"Build Interactive Web Applications with Microsoft Blazor and Azure OpenAI https://azureaidevs.github.io/hub/blog/2023-day14 #30DaysOfAzureAI #AzureAiDevs #AI #OpenAI"}),(0,o.kt)("meta",{property:"og:image",content:"https://azureaidevs.github.io/hub/img/2023/banner-day14.png"}),(0,o.kt)("meta",{property:"og:type",content:"article"}),(0,o.kt)("meta",{property:"og:site_name",content:"Azure AI Developer"}),(0,o.kt)("link",{rel:"canonical",href:"https://blazorhelpwebsite.com/ViewBlogPost/2065"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\ud83d\udce7 ",(0,o.kt)("a",{parentName:"li",href:"https://aka.ms/azure-ai-dev-newsletter"},"Sign up for the Azure AI Developer Newsletter")),(0,o.kt)("li",{parentName:"ul"},"\ud83d\udcf0 ",(0,o.kt)("a",{parentName:"li",href:"https://azureaidevs.github.io/hub/blog/rss.xml"},"Subscribe to the #30DaysOfAzureAI RSS feed")),(0,o.kt)("li",{parentName:"ul"},"\ud83d\udccc ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/AzureAiDevs/hub/discussions/categories/14-blazor-apps-and-azure-openai"},"Ask a question about this post on GitHub Discussions")),(0,o.kt)("li",{parentName:"ul"},"\ud83d\udca1 ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/AzureAiDevs/hub/discussions/categories/call-for-content"},"Suggest a topic for a future post"))),(0,o.kt)("h2",{id:"day-14-of-30daysofazureai"},"Day ",(0,o.kt)("em",{parentName:"h2"},"14")," of #30DaysOfAzureAI"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Build Interactive Web Applications with Microsoft Blazor and Azure OpenAI")),(0,o.kt)("p",null,"The Blazor web framework allows developers to create client-side web applications using .NET and C#. The Blazor Help Website provides a range of resources and tutorials to help developers get started with Blazor, including articles, videos, a community forum, and a library of code samples and demos. This website is an excellent resource for anyone looking to learn about Blazor and how to use it to build real-world applications."),(0,o.kt)("h2",{id:"what-well-cover"},"What we'll cover"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The article covers Microsoft Blazor and Azure OpenAI consumption, including text-davinci-002 model."),(0,o.kt)("li",{parentName:"ul"},"A guide is provided for setting up the Azure OpenAI service."),(0,o.kt)("li",{parentName:"ul"},"The article includes code for a Blazor app wrapping the OpenAIClient class and creating a UI. It serves as a comprehensive tutorial for integrating Azure OpenAI into Blazor apps.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Image banner for day 14",src:a(9281).Z,width:"834",height:"350"})),(0,o.kt)("h3",{id:"references"},"References"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://dotnet.microsoft.com/apps/aspnet/web-apps/blazor"},"Build beautiful, web apps with Blazor")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://azure.microsoft.com/products/cognitive-services/openai-service?WT.mc_id=aiml-89446-dglover"},"Azure OpenAI Service")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/training/modules/explore-azure-openai?WT.mc_id=aiml-89446-dglover"},"Learn Module: Introduction to Azure OpenAI Service"))),(0,o.kt)("p",null,"Blazor is a new web framework for building single-page applications (SPAs) using .NET and C#. It allows developers to create client-side web applications with the same language and tools they use to build server-side applications. One of the benefits of Blazor is that it eliminates the need for JavaScript, which can often cause compatibility issues and make development more challenging. Blazor provides a more cohesive development experience, with full-stack web development using .NET."),(0,o.kt)("p",null,"Blazor Help Website is a popular online resource that provides a wealth of information and tutorials about Blazor. The website is dedicated to helping developers get up to speed with Blazor quickly and efficiently. It offers a range of resources for both beginners and advanced developers, including articles, tutorials, and videos. The website also has a community forum where developers can ask questions and share their knowledge with others."),(0,o.kt)("p",null,"One of the most useful features of the Blazor Help Website is its extensive library of code samples and demos. These code samples provide developers with practical examples of how to use Blazor to build real-world applications. The website covers a range of topics related to Blazor, including components, data binding, navigation, and authentication. With its comprehensive and up-to-date content, the Blazor Help Website is an excellent resource for anyone looking to learn more about Blazor and how to use it to build modern web applications."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(45290).Z,width:"513",height:"537"})),(0,o.kt)("h2",{id:"learn-more"},"Learn More"),(0,o.kt)("p",null,"To learn more, check out this ",(0,o.kt)("a",{parentName:"p",href:"https://blazorhelpwebsite.com/ViewBlogPost/2065"},"article"),"."),(0,o.kt)("h2",{id:"questions"},"Questions?"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/AzureAiDevs/Discussions/discussions/categories/14-blazor-apps-and-azure-openai"},"Remember, you can ask a question about this post on GitHub Discussions")))}c.isMDXComponent=!0},45290:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/image-62549b4855490d9374b2424aa72368a4.png"},9281:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/banner-day14-31885662be789e4f92413ec6ba2bf6be.png"}}]);