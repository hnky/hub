"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9876],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>g});var r=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},h="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=u(a),d=i,g=h["".concat(l,".").concat(d)]||h[d]||p[d]||n;return a?r.createElement(g,o(o({ref:t},c),{},{components:a})):r.createElement(g,o({ref:t},c))}));function g(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,o=new Array(n);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[h]="string"==typeof e?e:i,o[1]=s;for(var u=2;u<n;u++)o[u]=a[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},44685:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>n,metadata:()=>s,toc:()=>u});var r=a(87462),i=(a(67294),a(3905));const n={slug:"day24",title:"24. \ud83c\udfedMachine Learning for Beginners",authors:["Bethany"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["ml-for-beginners"],tags:["ai-april","30-days-of-azure-ai","ml-developers","workshop"],image:"https://azureaidevs.github.io/hub/img/2023-aia/banner-day24.png",description:"Learn about the Microsoft Machine Learning for Beginners Curriculum https://azureaidevs.github.io/hub/2023-aia/day24 #30DaysOfAzureAI #AzureAiDevs #AI #MachineLearning"},o=void 0,s={permalink:"/hub/2023-aia/day24",source:"@site/2023-aia/2023-04-26-ml-ai-workshops/index.md",title:"24. \ud83c\udfedMachine Learning for Beginners",description:"Learn about the Microsoft Machine Learning for Beginners Curriculum https://azureaidevs.github.io/hub/2023-aia/day24 #30DaysOfAzureAI #AzureAiDevs #AI #MachineLearning",date:"2023-04-26T00:00:00.000Z",formattedDate:"April 26, 2023",tags:[{label:"ai-april",permalink:"/hub/2023-aia/tags/ai-april"},{label:"30-days-of-azure-ai",permalink:"/hub/2023-aia/tags/30-days-of-azure-ai"},{label:"ml-developers",permalink:"/hub/2023-aia/tags/ml-developers"},{label:"workshop",permalink:"/hub/2023-aia/tags/workshop"}],readingTime:2.175,hasTruncateMarker:!1,authors:[{name:"Bethany Jepchumba",title:"Cloud Advocate",url:"https://github.com/BethanyJep",tag:"@bethanyjep",imageURL:"https://github.com/BethanyJep.png",key:"Bethany"}],frontMatter:{slug:"day24",title:"24. \ud83c\udfedMachine Learning for Beginners",authors:["Bethany"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["ml-for-beginners"],tags:["ai-april","30-days-of-azure-ai","ml-developers","workshop"],image:"https://azureaidevs.github.io/hub/img/2023-aia/banner-day24.png",description:"Learn about the Microsoft Machine Learning for Beginners Curriculum https://azureaidevs.github.io/hub/2023-aia/day24 #30DaysOfAzureAI #AzureAiDevs #AI #MachineLearning"},prevItem:{title:"23. \ud83c\udfedData Science for Beginners",permalink:"/hub/2023-aia/day23"},nextItem:{title:"25. \ud83c\udfedBuild a Patient Registration App",permalink:"/hub/2023-aia/day25"}},l={authorsImageUrls:[void 0]},u=[{value:"\ud83d\uddd3\ufe0f Day <em>24</em> of #30DaysOfAzureAI",id:"\ufe0f-day-24-of-30daysofazureai",level:2},{value:"\ud83c\udfaf What we&#39;ll cover",id:"-what-well-cover",level:2},{value:"\ud83d\udcda References",id:"-references",level:2},{value:"\ud83d\ude8c Get started with Machine Learning for Beginners",id:"-get-started-with-machine-learning-for-beginners",level:2},{value:"\ud83d\udc53 Read today&#39;s article",id:"-read-todays-article",level:2},{value:"\ud83d\ude4b\ud83c\udffe\u200d\u2642\ufe0f Questions?",id:"\ufe0f-questions",level:2},{value:"\ud83d\udccd 30 days roadmap",id:"-30-days-roadmap",level:2}],c={toc:u};function h(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("head",null,(0,i.kt)("link",{rel:"canonical",href:"https://microsoft.github.io/ML-For-Beginners/"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\ud83d\udc53 ",(0,i.kt)("a",{parentName:"li",href:"https://microsoft.github.io/ML-For-Beginners/"},"Read today's article")),(0,i.kt)("li",{parentName:"ul"},"\ud83d\udcec ",(0,i.kt)("a",{parentName:"li",href:"https://aka.ms/azure-ai-dev-newsletter"},"Sign up for the Microsoft AI and Machine Learning Newsletter")),(0,i.kt)("li",{parentName:"ul"},"\ud83d\ude4b\ud83c\udffe\u200d\u2642\ufe0f ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/AzureAiDevs/hub/discussions/categories/24-machine-learning-for-beginners"},"Ask a question about this post on GitHub Discussions")),(0,i.kt)("li",{parentName:"ul"},"\ud83d\udca1 ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/AzureAiDevs/hub/discussions/categories/call-for-content"},"Suggest a topic for a future post")),(0,i.kt)("li",{parentName:"ul"},"\ud83c\udf24\ufe0f ",(0,i.kt)("a",{parentName:"li",href:"https://aka.ms/30-days-of-azure-ai-challenge"},"Azure AI Cloud Skills Challenge")),(0,i.kt)("li",{parentName:"ul"},"\ud83c\udfeb ",(0,i.kt)("a",{parentName:"li",href:"https://techcommunity.microsoft.com/t5/artificial-intelligence-and/ct-p/AI"},"Azure AI Technical Community"))),(0,i.kt)("h2",{id:"\ufe0f-day-24-of-30daysofazureai"},"\ud83d\uddd3\ufe0f Day ",(0,i.kt)("em",{parentName:"h2"},"24")," of #30DaysOfAzureAI"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Learn about the Microsoft Machine Learning for Beginners Curriculum")),(0,i.kt)("p",null,"Yesterday we learned about Data Science for Beginners Curriculum. Today is for folk starting their ML journey. The Machine Learning for Beginners Curriculum is a 12-week, 26-lesson course, so let's dive in!"),(0,i.kt)("h2",{id:"-what-well-cover"},"\ud83c\udfaf What we'll cover"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Machine Learning for Beginners curriculum."),(0,i.kt)("li",{parentName:"ul"},"Classic Machine Learning with the Scikit-learn Python library."),(0,i.kt)("li",{parentName:"ul"},"Introduction to Natural Language Processing and Time Series analysis.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Image banner for day 24",src:a(57281).Z,width:"834",height:"350"})),(0,i.kt)("h2",{id:"-references"},"\ud83d\udcda References"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/training/modules/introduction-to-ai-technology?WT.mc_id=aiml-89446-dglover"},"Learn Module: Introduction to AI technology"))),(0,i.kt)("h2",{id:"-get-started-with-machine-learning-for-beginners"},"\ud83d\ude8c Get started with Machine Learning for Beginners"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://microsoft.github.io/ML-For-Beginners/"},"Today's article")," is about the Microsoft Machine Learning for Beginners curriculum, a free 12-week, 26-lesson curriculum all about Machine Learning. "),(0,i.kt)("p",null,"In this curriculum, you will learn about what is sometimes called classic machine learning, using primarily Scikit-learn as a library and avoiding deep learning, which is covered in the ",(0,i.kt)("a",{parentName:"p",href:"https://microsoft.github.io/AI-For-Beginners/"},"Artificial Intelligence for Beginners")," curriculum. Pair these lessons with our ",(0,i.kt)("a",{parentName:"p",href:"https://microsoft.github.io/ML-For-Beginners/"},"Data Science for Beginners")," curriculum, as well!"),(0,i.kt)("p",null,"What are you waiting for? Get started today!"),(0,i.kt)("h2",{id:"-read-todays-article"},"\ud83d\udc53 Read today's article"),(0,i.kt)("p",null,"Today's ",(0,i.kt)("a",{parentName:"p",href:"https://microsoft.github.io/ML-For-Beginners/"},"article"),"."),(0,i.kt)("h2",{id:"\ufe0f-questions"},"\ud83d\ude4b\ud83c\udffe\u200d\u2642\ufe0f Questions?"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/AzureAiDevs/Discussions/discussions/categories/24-machine-learning-for-beginners"},"Remember, you can ask a question about this post on GitHub Discussions")),(0,i.kt)("h2",{id:"-30-days-roadmap"},"\ud83d\udccd 30 days roadmap"),(0,i.kt)("p",null,"What's next? View the ",(0,i.kt)("a",{parentName:"p",href:"/hub/roadmap/30days"},"#30DaysOfAzureAI Roadmap")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://azureaidevs.github.io/hub/2023-aia/rss.xml"},(0,i.kt)("img",{src:a(1081).Z,width:"14",height:"14"})," Click to subscribe")))}h.isMDXComponent=!0},57281:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/banner-day24-5eebe5b73a21ec218842cad4c1f980b9.png"},1081:(e,t,a)=>{a.d(t,{Z:()=>r});const r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAACXBIWXMAAAB0AAAAdAExheWBAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAYdJREFUKJGdkT1o00EYxn93l38SSQtFEkQo0hZDUbEQEJdCEAWNlUKhSzq0m4MiuChaHCS0gqOrdOjQJYZQECWRQB1LoUPtZ4hdBCt+DkKUSi531+EvaPMB0Xe6O57fPe/7vGJ/dsDxHyX/nNQ/gQEAhCQ8XcH9+Ib7uInZXcJsPQe934Gj0YiuGDJ+EW/kEaGbr1FD421B8feMIhJF9g+jEmnkifP+f2tZ9KuHYOstHJWHN/YEdW4S+/UttYUJ9OItqP1EJdJ4qUwbx0CI8L2d308OUy6iCw+QPb0EJ7MQjKBf3MVsLDY4Go3O36C+Mof7VUWdGiE0lcN+30O/vO+neOEOeEcaQGcxlRL1pcfUnl7BftpGxOJ4V2cw5QL2/Sqi+xjqzGhzqiqRJjgxj+jpReeu+/OdvoaInsSsPfM18UsNoJB4qQxyIEkgeRtX/YxZzwMCNXgZ+27Zlx0/26LVchGswVRKANgPb3zx0T5c9Yu/50gUhGreI0KBM03Rtyp56NYhBHAAgCCJzTkM7XMAAAAASUVORK5CYII="}}]);