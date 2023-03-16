"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9290],{4137:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(a),h=r,m=c["".concat(l,".").concat(h)]||c[h]||d[h]||i;return a?n.createElement(m,o(o({ref:t},p),{},{components:a})):n.createElement(m,o({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,o[1]=s;for(var u=2;u<i;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},2983:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var n=a(7462),r=(a(7294),a(4137));const i={slug:"day10",title:"10. \ud83e\uddd1\u200d\ud83d\udcbbHow to build your own ChatGPT",authors:["Heidi"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Azure-OpenAI-Services","Cognitive-Search","Azure-AI"],tags:["ai-april","azure-open-ai","azure-cognitive-services","app-developers"],image:"https://azureaidevs.github.io/hub/img/2023-aia/banner-day10.png",description:"Build your own ChatGPT with Azure Cognitive Search + Azure OpenAI Service https://azureaidevs.github.io/hub/2023-aia/day10 #30DaysOfAzureAI #AzureAiDevs #AI #OpenAI"},o=void 0,s={permalink:"/hub/2023-aia/day10",source:"@site/2023-aia/2023-04-11-build-chatgpt/index.md",title:"10. \ud83e\uddd1\u200d\ud83d\udcbbHow to build your own ChatGPT",description:"Build your own ChatGPT with Azure Cognitive Search + Azure OpenAI Service https://azureaidevs.github.io/hub/2023-aia/day10 #30DaysOfAzureAI #AzureAiDevs #AI #OpenAI",date:"2023-04-11T00:00:00.000Z",formattedDate:"April 11, 2023",tags:[{label:"ai-april",permalink:"/hub/2023-aia/tags/ai-april"},{label:"azure-open-ai",permalink:"/hub/2023-aia/tags/azure-open-ai"},{label:"azure-cognitive-services",permalink:"/hub/2023-aia/tags/azure-cognitive-services"},{label:"app-developers",permalink:"/hub/2023-aia/tags/app-developers"}],readingTime:5.505,hasTruncateMarker:!1,authors:[{name:"Heidi Steen",title:"Senior Content Developer",url:"https://github.com/HeidiSteen",tag:"@HeidiSteen",imageURL:"https://github.com/HeidiSteen.png",key:"Heidi"}],frontMatter:{slug:"day10",title:"10. \ud83e\uddd1\u200d\ud83d\udcbbHow to build your own ChatGPT",authors:["Heidi"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Azure-OpenAI-Services","Cognitive-Search","Azure-AI"],tags:["ai-april","azure-open-ai","azure-cognitive-services","app-developers"],image:"https://azureaidevs.github.io/hub/img/2023-aia/banner-day10.png",description:"Build your own ChatGPT with Azure Cognitive Search + Azure OpenAI Service https://azureaidevs.github.io/hub/2023-aia/day10 #30DaysOfAzureAI #AzureAiDevs #AI #OpenAI"},prevItem:{title:"9. \ud83e\uddd1\u200d\ud83d\udcbbBuild intelligent apps w/ Azure AI SDKs",permalink:"/hub/2023-aia/day9"},nextItem:{title:"14. \ud83e\uddd1\u200d\ud83d\udcbbBlazor apps and Azure OpenAI",permalink:"/hub/2023-aia/day14"}},l={authorsImageUrls:[void 0]},u=[{value:"\ud83d\uddd3\ufe0f Day 10 of #30DaysOfAzureAI",id:"\ufe0f-day-10-of-30daysofazureai",level:2},{value:"\ud83c\udfaf What we&#39;ll cover",id:"-what-well-cover",level:2},{value:"\ud83d\udcda References",id:"-references",level:2},{value:"\ud83d\ude8c Learn how to use Azure OpenAI for your applications",id:"-learn-how-to-use-azure-openai-for-your-applications",level:2},{value:"Scenario One: Converse with Minecraft",id:"scenario-one-converse-with-minecraft",level:2},{value:"Scenario Two: Combine Content Discovery and Language Understanding to Create New Information",id:"scenario-two-combine-content-discovery-and-language-understanding-to-create-new-information",level:2},{value:"Key Takeaways and Next Steps",id:"key-takeaways-and-next-steps",level:2},{value:"\ud83d\ude4b\ud83c\udffe\u200d\u2642\ufe0f Questions?",id:"\ufe0f-questions",level:2},{value:"\ud83d\udccd 30 days roadmap",id:"-30-days-roadmap",level:2}],p={toc:u};function c(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("head",null,(0,r.kt)("link",{rel:"canonical",href:"https://azureaidevs.github.io/hub/2023-aia/day10"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud83d\udcec ",(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/azure-ai-dev-newsletter"},"Sign up for the Microsoft AI and Machine Learning Newsletter")),(0,r.kt)("li",{parentName:"ul"},"\ud83c\udf24\ufe0f ",(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/30-days-of-azure-ai-challenge"},"Continue the Azure AI Cloud Skills Challenge")),(0,r.kt)("li",{parentName:"ul"},"\ud83c\udfeb ",(0,r.kt)("a",{parentName:"li",href:"https://techcommunity.microsoft.com/t5/artificial-intelligence-and/ct-p/AI"},"Bookmark the Azure AI Technical Community")),(0,r.kt)("li",{parentName:"ul"},"\ud83d\ude4b\ud83c\udffe\u200d\u2642\ufe0f ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/AzureAiDevs/hub/discussions/categories/10-how-to-build-your-own-chatgpt"},"Ask a question about this post on GitHub Discussions")),(0,r.kt)("li",{parentName:"ul"},"\ud83d\udca1 ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/AzureAiDevs/hub/discussions/categories/call-for-content"},"Suggest a topic for a future post"))),(0,r.kt)("h2",{id:"\ufe0f-day-10-of-30daysofazureai"},"\ud83d\uddd3\ufe0f Day 10 of #30DaysOfAzureAI"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Build your own ChatGPT with Azure Cognitive Search + Azure OpenAI Service")),(0,r.kt)("p",null,"Yesterday was about the Azure AI Hub, a treasure trove of Azure AI SDK samples. Today, we're going to hear from\ndistinguished engineer Pablo Castro as he walks us through a progression of short examples that show us how to build\nmore dynamic, interactive, and differentiated experiences with the Azure OpenAI Service."),(0,r.kt)("h2",{id:"-what-well-cover"},"\ud83c\udfaf What we'll cover"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Core concepts"),(0,r.kt)("li",{parentName:"ul"},"Using prompts for user interaction (Minecraft example)"),(0,r.kt)("li",{parentName:"ul"},"Cross-pollination between apps (Cognitive Search example)"),(0,r.kt)("li",{parentName:"ul"},"Sign up to get started")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Image banner for day 10",src:a(5104).Z,width:"834",height:"350"})),(0,r.kt)("h2",{id:"-references"},"\ud83d\udcda References"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/training/modules/explore-azure-openai?WT.mc_id=aiml-89446-dglover"},"Learn Module: Introduction to Azure OpenAI Service")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/training/browse/?expanded=azure&roles=ai-engineer&products=azure-cognitive-search&WT.mc_id=aiml-89446-dglover"},"Learn Module: Azure Cognitive Search")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://startups.microsoft.com/blog/bootstrapping-ai-models-pointers?WT.mc_id=aiml-89446-dglover"},"Case Study: Is data necessary for bootstrapping of AI models?")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://startups.microsoft.com/blog/metaverse-training-stellarx?WT.mc_id=aiml-89446-dglover"},"Case Study: Metaverse training and AI-driven onboarding"))),(0,r.kt)("h2",{id:"-learn-how-to-use-azure-openai-for-your-applications"},"\ud83d\ude8c Learn how to use Azure OpenAI for your applications"),(0,r.kt)("p",null,'Azure\'s OpenAI Service lets you leverage large scale generative AI\nmodels based in Azure that have a deep understanding of language and\ncode as you build new applications. "Language understanding" means that\nyou can type or "talk" to an app to get it do the things you want.'),(0,r.kt)("p",null,"In Azure OpenAI, you can work with these models:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"GPT-3 generates content based on natural language input.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Codex translates natural language instructions directly into code.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"DALL-E 2 generates realistic images and art from natural language\ndescriptions."))),(0,r.kt)("p",null,"These models are hosted on Azure, accessible to apps through REST APIs,\nor through Azure OpenAI Studio for interactive exploration."),(0,r.kt)("p",null,"Azure OpenAI models include built-in content filtering. If inputs or\ngenerated outputs include inappropriate content, the Azure OpenAI\nService catches it. Detection and mitigation of harmful use follows the\nresponsible AI principles, which you can find more about at\n",(0,r.kt)("a",{parentName:"p",href:"https://aka.ms/AIprinciples"},"aka.ms/AIprinciples"),"."),(0,r.kt)("p",null,"In this session, we'll unpack the core concepts for interacting with\nmodels, using prompts, and demonstrate how you can use Azure's OpenAI\nStudio to experiment with and test your models before bringing them into\nyour code to deliver differentiated app experiences, all with Azure's\nenterprise-grade security for your app's foundation."),(0,r.kt)("h2",{id:"scenario-one-converse-with-minecraft"},"Scenario One: Converse with Minecraft"),(0,r.kt)("p",null,"Transforming the surface area of an app might be easier than you think!\nIn this video segment, Pablo shows us how he used Minecraft's extension\nAPIs to integrate a conversational user interaction model to build in\nMinecraft."),(0,r.kt)("p",null,'The add-in module, named "conjure", collects a text input that\'s passed\nto Codex, transforming user intent into actionable code that Minecraft\nunderstands.'),(0,r.kt)("iframe",{width:"100%",height:"420",src:"https://www.youtube.com/embed/3t3qZu1Dy1k?start=341",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),(0,r.kt)("p",null,"If your application supports plug-in or add-on modules, you can attach a\nmodule that accepts text prompts as inputs, and then pass that input to\nCodex to interpret the user intent. Codex returns native code that can\nthen be processed by your application."),(0,r.kt)("h2",{id:"scenario-two-combine-content-discovery-and-language-understanding-to-create-new-information"},"Scenario Two: Combine Content Discovery and Language Understanding to Create New Information"),(0,r.kt)("p",null,"The next example combines the content discovery capabilities of Azure\nCognitive Search with the language understanding of the GPT-3 model."),(0,r.kt)("p",null,"The premise is an app for a green energy company that helps users find\nthe latest insights and developments by scanning content over large\nvolumes of unstructured content from various sources."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Cognitive Search accepts a user query and returns a set of matching\ndocuments in order of relevance. Instead of returning the results to\nthe user, it sends them to GPT-3 for more analysis.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"GPT-3 takes the documents and composes better answers and insights\nusing content from all of them."))),(0,r.kt)("iframe",{width:"100%",height:"420",src:"https://www.youtube.com/embed/3t3qZu1Dy1k?start=576",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),(0,r.kt)("p",null,"In this example, the app calls Azure Cognitive Search to discover\ntext-based documents related to the user's question. This step finds the\nmatches, ranks the documents, and returns the most relevant candidates."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Graphical user interface Description automatically generated",src:a(1701).Z,width:"800",height:"445"})),(0,r.kt)("p",null,"But sometimes the best answer isn't in one document. By adding language\nunderstanding, the app can use GPT-3 to derive a new answer using the\ncontent from all of the matching documents. This isn't just a verbatim\nanswer from one document, but a new answer from multiple documents."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Graphical user interface, text, application Description automatically generated",src:a(9148).Z,width:"808",height:"451"})),(0,r.kt)("h2",{id:"key-takeaways-and-next-steps"},"Key Takeaways and Next Steps"),(0,r.kt)("p",null,"Now that you've seen a few examples, here are some next steps:"),(0,r.kt)("p",null,"See how Microsoft integrates OpenAI into applications. You can ",(0,r.kt)("a",{parentName:"p",href:"https://youtu.be/3t3qZu1Dy1k?t=164"},"catch\nthese examples in the video"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Co-Pilot in the ",(0,r.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/power-platform/developer/"},"Power\nPlatform"),"\nlets you author Power Fx commands and automation flow without having\nto know or type the syntax.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"M365's ",(0,r.kt)("a",{parentName:"p",href:"https://designer.microsoft.com/"},"Microsoft Designer")," lets\nyou use AI-generated images when creating visual content."))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://customervoice.microsoft.com/Pages/ResponsePage.aspx?id=v4j5cvGGr0GRqy180BHbR7en2Ais5pxKtso_Pz4b1_xUOFA5Qk1UWDRBMjg0WFhPMkIzTzhKQ1dWNyQlQCN0PWcu"},"Sign up for Azure\nOpenAI"),"\nto get core building blocks for production-grade applications, including\nhosting at scale, to enterprise-level security."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Call OpenAI from your code just like any other REST API.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Secure with strong authentication, role-based access control and the\nability to configure virtual networks, private endpoints as you\nwould for any Azure service."))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://oai.azure.com/portal"},"Sign up for Azure OpenAI Studio")," to\nexperiment and test your ideas before bringing them into your code.\n",(0,r.kt)("a",{parentName:"p",href:"https://youtu.be/3t3qZu1Dy1k?t=721"},"Watch this segment of the video"),"\nfor a walkthrough."),(0,r.kt)("h2",{id:"\ufe0f-questions"},"\ud83d\ude4b\ud83c\udffe\u200d\u2642\ufe0f Questions?"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/AzureAiDevs/Discussions/discussions/categories/10-how-to-build-your-own-chatgpt"},"Remember, you can ask a question about this post on GitHub Discussions")),(0,r.kt)("h2",{id:"-30-days-roadmap"},"\ud83d\udccd 30 days roadmap"),(0,r.kt)("p",null,"What's next? View the ",(0,r.kt)("a",{parentName:"p",href:"/hub/roadmap/30days"},"#30DaysOfAzureAI Roadmap")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://azureaidevs.github.io/hub/2023-aia/rss.xml"},(0,r.kt)("img",{src:a(1081).Z,width:"14",height:"14"})," Click to subscribe")))}c.isMDXComponent=!0},1701:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image3-6cc014422d14871444503a6d89b65d1c.png"},9148:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image4-40835ddec01e80e721da633f4eb0453e.png"},5104:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/banner-day10-3f68bef1ae395ac7f0730bd3324afefa.png"},1081:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAACXBIWXMAAAB0AAAAdAExheWBAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAYdJREFUKJGdkT1o00EYxn93l38SSQtFEkQo0hZDUbEQEJdCEAWNlUKhSzq0m4MiuChaHCS0gqOrdOjQJYZQECWRQB1LoUPtZ4hdBCt+DkKUSi531+EvaPMB0Xe6O57fPe/7vGJ/dsDxHyX/nNQ/gQEAhCQ8XcH9+Ib7uInZXcJsPQe934Gj0YiuGDJ+EW/kEaGbr1FD421B8feMIhJF9g+jEmnkifP+f2tZ9KuHYOstHJWHN/YEdW4S+/UttYUJ9OItqP1EJdJ4qUwbx0CI8L2d308OUy6iCw+QPb0EJ7MQjKBf3MVsLDY4Go3O36C+Mof7VUWdGiE0lcN+30O/vO+neOEOeEcaQGcxlRL1pcfUnl7BftpGxOJ4V2cw5QL2/Sqi+xjqzGhzqiqRJjgxj+jpReeu+/OdvoaInsSsPfM18UsNoJB4qQxyIEkgeRtX/YxZzwMCNXgZ+27Zlx0/26LVchGswVRKANgPb3zx0T5c9Yu/50gUhGreI0KBM03Rtyp56NYhBHAAgCCJzTkM7XMAAAAASUVORK5CYII="}}]);