"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4572],{3905:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>m});var a=i(67294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function n(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,a,r=function(e,t){if(null==e)return{};var i,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)i=o[a],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)i=o[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):n(n({},t),e)),i},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var i=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(i),h=r,m=u["".concat(l,".").concat(h)]||u[h]||d[h]||o;return i?a.createElement(m,n(n({ref:t},p),{},{components:i})):a.createElement(m,n({ref:t},p))}));function m(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=i.length,n=new Array(o);n[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,n[1]=s;for(var c=2;c<o;c++)n[c]=i[c];return a.createElement.apply(null,n)}return a.createElement.apply(null,i)}h.displayName="MDXCreateElement"},44901:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=i(87462),r=(i(67294),i(3905));const o={slug:"2023-day7",title:"7. \ud83c\udfc1Accessible AI Apps for Everyone",authors:["Henk"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Accessibility-Employment","Accessibility-Modern-Life","Accessibility-Human-Connection"],tags:["ai-april","30-days-of-azure-ai","ml-developers","app-developers","ai-for-accessibility"],image:"https://azureaidevs.github.io/hub/img/2023/banner-day7.png",description:"Learn to build AI for everyone with AI for Accessibility"},n=void 0,s={permalink:"/hub/blog/2023-day7",source:"@site/blog/2023-aia/2023-04-08-ai-accessibility/index.md",title:"7. \ud83c\udfc1Accessible AI Apps for Everyone",description:"Learn to build AI for everyone with AI for Accessibility",date:"2023-04-08T00:00:00.000Z",formattedDate:"April 8, 2023",tags:[{label:"ai-april",permalink:"/hub/blog/tags/ai-april"},{label:"30-days-of-azure-ai",permalink:"/hub/blog/tags/30-days-of-azure-ai"},{label:"ml-developers",permalink:"/hub/blog/tags/ml-developers"},{label:"app-developers",permalink:"/hub/blog/tags/app-developers"},{label:"ai-for-accessibility",permalink:"/hub/blog/tags/ai-for-accessibility"}],readingTime:2.58,hasTruncateMarker:!1,authors:[{name:"Henk Boelman",title:"Senior Cloud Advocate @hboelman",url:"https://github.com/hnky",imageURL:"https://github.com/hnky.png",key:"Henk"}],frontMatter:{slug:"2023-day7",title:"7. \ud83c\udfc1Accessible AI Apps for Everyone",authors:["Henk"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Accessibility-Employment","Accessibility-Modern-Life","Accessibility-Human-Connection"],tags:["ai-april","30-days-of-azure-ai","ml-developers","app-developers","ai-for-accessibility"],image:"https://azureaidevs.github.io/hub/img/2023/banner-day7.png",description:"Learn to build AI for everyone with AI for Accessibility"},prevItem:{title:"6. \ud83c\udfc1The Mission of Responsible AI",permalink:"/hub/blog/2023-day6"},nextItem:{title:"8. \ud83c\udfc1Recap: Azure AI Fundamentals Week\u2728",permalink:"/hub/blog/2023-day8"}},l={authorsImageUrls:[void 0]},c=[{value:"Day <em>7</em> of #30DaysOfAzureAI",id:"day-7-of-30daysofazureai",level:2},{value:"What we&#39;ll cover",id:"what-well-cover",level:2},{value:"References",id:"references",level:3},{value:"Learn More",id:"learn-more",level:2},{value:"Questions?",id:"questions",level:2}],p={toc:c};function u(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("head",null,(0,r.kt)("link",{rel:"canonical",href:"https://www.microsoft.com/ai/ai-for-accessibility"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud83d\udce7 ",(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/azure-ai-dev-newsletter"},"Sign up for the Azure AI Developer Newsletter")),(0,r.kt)("li",{parentName:"ul"},"\ud83d\udcf0 ",(0,r.kt)("a",{parentName:"li",href:"https://azureaidevs.github.io/hub/blog/rss.xml"},"Subscribe to the #30DaysOfAzureAI RSS feed")),(0,r.kt)("li",{parentName:"ul"},"\ud83d\udccc ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/AzureAiDevs/Discussions/discussions/categories/7-accessible-ai-apps-for-everyone"},"Ask a question about this post on GitHub Discussions")),(0,r.kt)("li",{parentName:"ul"},"\ud83d\udca1 ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/AzureAiDevs/Discussions/discussions/categories/call-for-content"},"Suggest a topic for a future post"))),(0,r.kt)("h2",{id:"day-7-of-30daysofazureai"},"Day ",(0,r.kt)("em",{parentName:"h2"},"7")," of #30DaysOfAzureAI"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Learn to build AI for everyone with AI for Accessibility")),(0,r.kt)("p",null,"The article overviews AI projects aimed at improving the lives of people with disabilities, from education to home and low-cost assistive technology. It highlights NWEA and AI4Bharat, and stresses the importance of FATE considerations in sign language AI, as well as Microsoft's AI for Accessibility grants. "),(0,r.kt)("h2",{id:"what-well-cover"},"What we'll cover"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Overview of AI projects aimed at improving the lives of people with disabilities in education, employment, community, home, and low-cost assistive technology. "),(0,r.kt)("li",{parentName:"ol"},"Highlighting specific projects like NWEA and AI4Bharat. "),(0,r.kt)("li",{parentName:"ol"},"The importance of FATE considerations in sign language AI and the existence of Microsoft's AI for Accessibility grants. ")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Image banner for day 7",src:i(8700).Z,width:"834",height:"350"})),(0,r.kt)("h3",{id:"references"},"References"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.microsoft.com/ai/ai-for-accessibility"},"AI for Accessibility"))),(0,r.kt)("p",null,"The article provides an overview of various AI for Accessibility projects that aim to improve the lives of people with disabilities. The projects range from education to employment, community, home, and low-cost assistive technology. One of the projects highlighted is NWEA, which is developing math assessments to make them more accessible for students with vision disabilities, improving their access to higher-level math and STEM careers. Another project is AI4Bharat, which aims to improve accessibility for the deaf population in India by creating datasets to advance Indian Sign Language understanding."),(0,r.kt)("p",null,"The article also discusses the importance of intersectionality in disability and how technology can be a powerful tool to connect people. Additionally, it highlights the need for FATE (Fairness, Accountability, Transparency, and Ethics) considerations in sign language AI datasets to ensure equitable outcomes in training AI and machine learning. Lastly, the article discusses Microsoft's AI for Accessibility grants, which offer funding, technology, and expertise to individuals and teams passionate about creating a more inclusive world."),(0,r.kt)("p",null,(0,r.kt)("img",{src:i(16975).Z,width:"1600",height:"600"})),(0,r.kt)("h2",{id:"learn-more"},"Learn More"),(0,r.kt)("p",null,"To learn more, check out this ",(0,r.kt)("a",{parentName:"p",href:"https://www.microsoft.com/ai/ai-for-accessibility"},"article"),"."),(0,r.kt)("h2",{id:"questions"},"Questions?"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/AzureAiDevs/Discussions/discussions/categories/7-accessible-ai-apps-for-everyone"},"Remember, you can ask a question about this post on GitHub Discussions")))}u.isMDXComponent=!0},16975:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/ai-for-accessiblity-7d7600cf2d8d7cdf406d14375a963109.jpeg"},8700:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/banner-day7-421eb56ff83d926fde3862f1593bafec.png"}}]);