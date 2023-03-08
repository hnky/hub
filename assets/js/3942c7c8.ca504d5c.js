"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9443],{3905:(e,a,t)=>{t.d(a,{Zo:()=>p,kt:()=>m});var r=t(67294);function s(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function n(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){s(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,r,s=function(e,a){if(null==e)return{};var t,r,s={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var l=r.createContext({}),u=function(e){var a=r.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):n(n({},a),e)),t},p=function(e){var a=u(e.components);return r.createElement(l.Provider,{value:a},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},h=r.forwardRef((function(e,a){var t=e.components,s=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(t),h=s,m=c["".concat(l,".").concat(h)]||c[h]||d[h]||i;return t?r.createElement(m,n(n({ref:a},p),{},{components:t})):r.createElement(m,n({ref:a},p))}));function m(e,a){var t=arguments,s=a&&a.mdxType;if("string"==typeof e||s){var i=t.length,n=new Array(i);n[0]=h;var o={};for(var l in a)hasOwnProperty.call(a,l)&&(o[l]=a[l]);o.originalType=e,o[c]="string"==typeof e?e:s,n[1]=o;for(var u=2;u<i;u++)n[u]=t[u];return r.createElement.apply(null,n)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},17887:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>n,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var r=t(87462),s=(t(67294),t(3905));const i={slug:"2023-day19",title:"19. \ud83e\uddd1\ud83c\udffd\u200d\ud83d\udd2cDebug models w/ Responsible AI",authors:["Ruth"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Machine-Learning","Azure-AI","rai-privacy-security","rai-fairness","rai-transparency","rai-accountable","rai-inclusion","rai-reliable"],tags:["azure-ai","responsible-ai","30-days-of-azure-ai","ml-developers","app-developers"],image:"https://azureaidevs.github.io/hub/img/2023/banner-day19.png",description:"Guide to analyzing ML models for Responsible AI issues (Part 1)"},n=void 0,o={permalink:"/hub/blog/2023-day19",source:"@site/blog/2023-aia/2023-04-20-rai-part-1/index.md",title:"19. \ud83e\uddd1\ud83c\udffd\u200d\ud83d\udd2cDebug models w/ Responsible AI",description:"Guide to analyzing ML models for Responsible AI issues (Part 1)",date:"2023-04-20T00:00:00.000Z",formattedDate:"April 20, 2023",tags:[{label:"azure-ai",permalink:"/hub/blog/tags/azure-ai"},{label:"responsible-ai",permalink:"/hub/blog/tags/responsible-ai"},{label:"30-days-of-azure-ai",permalink:"/hub/blog/tags/30-days-of-azure-ai"},{label:"ml-developers",permalink:"/hub/blog/tags/ml-developers"},{label:"app-developers",permalink:"/hub/blog/tags/app-developers"}],readingTime:2.66,hasTruncateMarker:!1,authors:[{name:"Ruth Yakubu",title:"Principal Cloud Advocate @ruthieyakubu",url:"https://github.com/ruyakubu",imageURL:"https://github.com/ruyakubu.png",key:"Ruth"}],frontMatter:{slug:"2023-day19",title:"19. \ud83e\uddd1\ud83c\udffd\u200d\ud83d\udd2cDebug models w/ Responsible AI",authors:["Ruth"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Machine-Learning","Azure-AI","rai-privacy-security","rai-fairness","rai-transparency","rai-accountable","rai-inclusion","rai-reliable"],tags:["azure-ai","responsible-ai","30-days-of-azure-ai","ml-developers","app-developers"],image:"https://azureaidevs.github.io/hub/img/2023/banner-day19.png",description:"Guide to analyzing ML models for Responsible AI issues (Part 1)"},prevItem:{title:"18. \ud83e\uddd1\ud83c\udffd\u200d\ud83d\udd2cAzure ML Managed Online Endpoints",permalink:"/hub/blog/2023-day18"},nextItem:{title:"20. \ud83e\uddd1\ud83c\udffd\u200d\ud83d\udd2cLearn MLOps for the ML Lifecycle",permalink:"/hub/blog/2023-day20"}},l={authorsImageUrls:[void 0]},u=[{value:"Day <em>19</em> of #30DaysOfAzureAI",id:"day-19-of-30daysofazureai",level:2},{value:"What we&#39;ll cover",id:"what-well-cover",level:2},{value:"References",id:"references",level:3},{value:"What is Responsible AI Dashboard?",id:"what-is-responsible-ai-dashboard",level:2},{value:"Learn More",id:"learn-more",level:2},{value:"Questions?",id:"questions",level:2}],p={toc:u};function c(e){let{components:a,...i}=e;return(0,s.kt)("wrapper",(0,r.Z)({},p,i,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("head",null,(0,s.kt)("link",{rel:"canonical",href:"https://techcommunity.microsoft.com/t5/ai-machine-learning-blog/getting-started-with-azure-machine-learning-responsible-ai/ba-p/3746948"})),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\ud83d\udce7 ",(0,s.kt)("a",{parentName:"li",href:"https://microsoft.github.io/Low-Code/subscribe"},"Sign up for the Azure AI Developer Newsletter")),(0,s.kt)("li",{parentName:"ul"},"\ud83d\udcf0 ",(0,s.kt)("a",{parentName:"li",href:"https://azureaidevs.github.io/hub/blog/rss.xml"},"subscribe to the #30DaysOfAzureAI RSS feed")),(0,s.kt)("li",{parentName:"ul"},"\ud83d\udccc ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/AzureAiDevs/Discussions/discussions/categories/19-debug-models-w/-responsible-ai"},"Ask a question about this post on GitHub Discussions")),(0,s.kt)("li",{parentName:"ul"},"\ud83d\udca1 ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/AzureAiDevs/Discussions/discussions/categories/call-for-content"},"Suggest a topic for a future post"))),(0,s.kt)("h2",{id:"day-19-of-30daysofazureai"},"Day ",(0,s.kt)("em",{parentName:"h2"},"19")," of #30DaysOfAzureAI"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Guide to analyzing ML models for Responsible AI issues (Part 1)")),(0,s.kt)("p",null,"The Responsible AI (RAI) Dashboard is a set of open-source tools for creating responsible AI models available on the Azure Machine Learning platform. It includes components for data analysis, model troubleshooting, fairness evaluation, and causal relationship exploration. To use the RAI Dashboard, a user needs an Azure Machine Learning workspace and can refer to a tutorial using the Diabetes Hospital Readmission dataset."),(0,s.kt)("h2",{id:"what-well-cover"},"What we'll cover"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"The RAI Dashboard is a suite of open-source tools for responsible AI development, including features like model interpretability, error analysis, and counterfactual analysis."),(0,s.kt)("li",{parentName:"ul"},"The RAI Dashboard is accessible via the Azure Machine Learning platform."),(0,s.kt)("li",{parentName:"ul"},"RAI components help ML engineers and decision-makers improve AI responsibility.")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Image shows authors and product icons",src:t(9494).Z,width:"834",height:"350"})),(0,s.kt)("h3",{id:"references"},"References"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://news.microsoft.com/source/features/ai/microsoft-approach-to-ai/#using-ai-responsibly?WT.mc_id=aiml-89446-cxall"},"Microsoft's approach to using AI responsibly")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://blogs.microsoft.com/on-the-issues/2023/02/02/responsible-ai-chatgpt-artificial-intelligence?WT.mc_id=aiml-89446-cxall"},"Meeting the AI moment: advancing the future through responsible AI"))),(0,s.kt)("h2",{id:"what-is-responsible-ai-dashboard"},"What is Responsible AI Dashboard?"),(0,s.kt)("p",null,"The Responsible AI (RAI) Dashboard is a suite of open-source tools that help developers create responsible AI models with features such as model statistics, data explorer, error analysis, model interpretability, counterfactual analysis, and causal inference. The dashboard is built on leading open-source tools such as ErrorAnalysis, InterpretML, Fairlearn, DiCE, and EconML, and it can be accessed through the Azure Machine Learning platform. The RAI components allow developers to troubleshoot and analyze models and make better decisions to produce more responsible AI systems."),(0,s.kt)("p",null,"InterpretML, Fairlearn, DiCE, and EconML are some of the open-source tools that power the RAI dashboard. InterpretML provides data scientists and AI developers access to state-of-the-art glassbox and opaquebox interpretability models, helping them better understand how their models are making predictions. Fairlearn helps identify fairness issues and covers a set of state-of-the-art mitigation algorithms to address them. DiCE outputs counterfactual datapoints that are similar to the input but with different outcomes, helping ML engineers and business decision-makers generate alternative datapoints. EconML helps business decision-makers explore causal relationships between factors and real-world outcomes."),(0,s.kt)("p",null,"The RAI dashboard is available as part of the Responsible AI Toolbox via open source or in the Azure Machine Learning platform. It allows ML engineers to analyze models and make better decisions to produce more responsible AI systems. The dashboard can be accessed through the Azure Machine Learning platform, eliminating the need to use open-source libraries separately to troubleshoot model performance, reliability, or fairness in disparate code instances. The tutorial walks users through creating an Azure Machine Learning workspace and using RAI components for further analysis and debugging of a model trained on the Diabetes Hospital Readmission dataset."),(0,s.kt)("h2",{id:"learn-more"},"Learn More"),(0,s.kt)("p",null,"To learn more, check out this ",(0,s.kt)("a",{parentName:"p",href:"https://techcommunity.microsoft.com/t5/ai-machine-learning-blog/getting-started-with-azure-machine-learning-responsible-ai/ba-p/3746948"},"article"),"."),(0,s.kt)("h2",{id:"questions"},"Questions?"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/AzureAiDevs/Discussions/discussions/categories/19-debug-models-w/-responsible-ai"},"Remember, you can ask a question about this post on GitHub Discussions")))}c.isMDXComponent=!0},9494:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/banner-5a1412d792726cee1bfe955224d657ed.png"}}]);