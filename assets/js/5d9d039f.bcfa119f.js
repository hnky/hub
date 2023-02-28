"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[43669],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(a),d=r,h=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return a?n.createElement(h,i(i({ref:t},p),{},{components:a})):n.createElement(h,i({ref:t},p))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},3900:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const o={slug:"2023-day11",title:"11. Azure Integration Patterns",authors:["linda","stephanie"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["power-platform","azure","fusion teams","integration patterns","Azure AI"],image:"https://microsoft.github.io/Low-Code/img/og/30-11.png",description:"Today we'll explore some real world use cases that integrate Azure with Power Platform to help you resolve business challenges more efficiently.",tags:["low-code-february","28-days-of-lowcode","learn-live","zero-to-hero","ask-the-expert","fusion-teams","power-platform"]},i=void 0,s={permalink:"/hubv2/blog/2023-day11",source:"@site/blog/2023-lcf/2023-02-11/index.md",title:"11. Azure Integration Patterns",description:"Today we'll explore some real world use cases that integrate Azure with Power Platform to help you resolve business challenges more efficiently.",date:"2023-02-11T00:00:00.000Z",formattedDate:"February 11, 2023",tags:[{label:"low-code-february",permalink:"/hubv2/blog/tags/low-code-february"},{label:"28-days-of-lowcode",permalink:"/hubv2/blog/tags/28-days-of-lowcode"},{label:"learn-live",permalink:"/hubv2/blog/tags/learn-live"},{label:"zero-to-hero",permalink:"/hubv2/blog/tags/zero-to-hero"},{label:"ask-the-expert",permalink:"/hubv2/blog/tags/ask-the-expert"},{label:"fusion-teams",permalink:"/hubv2/blog/tags/fusion-teams"},{label:"power-platform",permalink:"/hubv2/blog/tags/power-platform"}],readingTime:8.86,hasTruncateMarker:!1,authors:[{name:"Linda Nichols",title:"Principal Solution Spec GBB",url:"https://github.com/lynnaloo",imageURL:"https://github.com/lynnaloo.png",key:"linda"},{name:"Stephanie Lemus",title:"Principal Solution Spec GBB",url:"https://github.com/stephle00",imageURL:"https://github.com/stephle00.png",key:"stephanie"}],frontMatter:{slug:"2023-day11",title:"11. Azure Integration Patterns",authors:["linda","stephanie"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["power-platform","azure","fusion teams","integration patterns","Azure AI"],image:"https://microsoft.github.io/Low-Code/img/og/30-11.png",description:"Today we'll explore some real world use cases that integrate Azure with Power Platform to help you resolve business challenges more efficiently.",tags:["low-code-february","28-days-of-lowcode","learn-live","zero-to-hero","ask-the-expert","fusion-teams","power-platform"]},prevItem:{title:"10. Secure Connectors with APIM",permalink:"/hubv2/blog/2023-day10"},nextItem:{title:"12. Recap - Integrations Week \u2728",permalink:"/hubv2/blog/2023-day12"}},l={authorsImageUrls:[void 0,void 0]},c=[{value:"What We&#39;ll Cover",id:"what-well-cover",level:2},{value:"Why Power Platform and Azure together?",id:"why-power-platform-and-azure-together",level:2},{value:"How do I access data from Microsoft Azure &amp; beyond from a Azure AI platform?",id:"how-do-i-access-data-from-microsoft-azure--beyond-from-a-azure-ai-platform",level:2},{value:"Why use Azure API Management (APIM) with Azure AI development?",id:"why-use-azure-api-management-apim-with-azure-ai-development",level:2},{value:"Azure AI + Azure Integration Patterns",id:"azure-ai--azure-integration-patterns",level:2},{value:"Conclusion",id:"conclusion",level:2}],p={toc:c};function u(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("head",null,(0,r.kt)("meta",{name:"twitter:url",content:"https://microsoft.github.io/Low-Code/blog/2023-day11"}),(0,r.kt)("meta",{name:"twitter:title",content:"11. Azure AI + Azure Integration Patterns"}),(0,r.kt)("meta",{name:"twitter:description",content:"Today we'll explore some real world use cases that integrate Azure with Power Platform to help you resolve busienss challenges more efficiently."}),(0,r.kt)("meta",{name:"twitter:image",content:"https://microsoft.github.io/Low-Code/img/og/30-10.png"}),(0,r.kt)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,r.kt)("meta",{name:"twitter:creator",content:"@lynnaloo"}),(0,r.kt)("meta",{name:"twitter:site",content:"@AzureAdvocates"}),(0,r.kt)("link",{rel:"canonical",href:"https://microsoft.github.io/Low-Code/blog/2023-day11"})),(0,r.kt)("p",null,"Welcome to ",(0,r.kt)("inlineCode",{parentName:"p"},"Day 11")," of #30DaysOfAzureAI!"),(0,r.kt)("p",null,"The theme for this week is ",(0,r.kt)("strong",{parentName:"p"},"backend integration"),". Yesterday we talked about building secure connectors with Azure API Management. Today we'll explore some real world use cases that integrate Azure with Power Platform to help you resolve busienss challenges more efficiently. Let's talk about ",(0,r.kt)("strong",{parentName:"p"},"Azure AI and Azure Integration Patterns!"),"."),(0,r.kt)("h2",{id:"what-well-cover"},"What We'll Cover"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Why Power Platform and Azure together?"),(0,r.kt)("li",{parentName:"ul"},"Access data beyond a Azure AI platform"),(0,r.kt)("li",{parentName:"ul"},"Use Azure API Management use Azure AI development"),(0,r.kt)("li",{parentName:"ul"},"Azure AI + Azure Integration Patterns")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Speaker Card for Feb 11",src:a(17417).Z,width:"1001",height:"420"})),(0,r.kt)("h2",{id:"why-power-platform-and-azure-together"},"Why Power Platform and Azure together?"),(0,r.kt)("p",null,"By using Microsoft Azure to extend the capabilities of Power Platform, you can help solve the App Gap challenge. "),(0,r.kt)("p",null,"Simply put, the app gap is a condition where there is an increasing need for custom applications, but you don't have enough developers to build the applications in the business units\u2019 backlog. "),(0,r.kt)("p",null,"For many businesses today, the ",(0,r.kt)("em",{parentName:"p"},"app gap")," is already very real and getting worse.  Current estimates are that the world is currently short some 4m developers \u2026 with an estimated 500 million new apps needing to be built by 2025. This challenge emphasizes the need to find creative and efficient ways to deliver more custom applications to meet the needs of the business with fewer developers."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"So how do we build more apps, faster?")),(0,r.kt)("p",null,"We can accelerate app development by letting pro developers do what they do best: traditional development and increasing the availability of organizational services & data."),(0,r.kt)("p",null,"We then simultaneously empower Azure AI developers to solve some of their business problems themselves by giving them a Azure AI development platform and controlled access to the right data, APIs & service endpoints."),(0,r.kt)("p",null,"This is at the heart of the fusion team development concept \u2013 joining professional & Azure AI developers together to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Close the app gap"),(0,r.kt)("li",{parentName:"ul"},"Build applications faster to reduce the organizational app backlog"),(0,r.kt)("li",{parentName:"ul"},"Create new developers from untraditional places"),(0,r.kt)("li",{parentName:"ul"},"Incubate a culture of innovation")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Resources:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/events/build-2022/odbrk45-expedite-application-delivery-with-low-code-fusion-teams/?WT.mc_id=javascript-82212-ninarasi"},"Expedite application delivery with low-code and fusion teams")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/power-apps/guidance/fusion-dev-ebook/?WT.mc_id=javascript-82212-ninarasi"},"Fusion Development Ebook"))),(0,r.kt)("h2",{id:"how-do-i-access-data-from-microsoft-azure--beyond-from-a-azure-ai-platform"},"How do I access data from Microsoft Azure & beyond from a Azure AI platform?"),(0,r.kt)("p",null,"Power Platform uses the concept of connectors - wrappers around the OpenAPI specifications - the industry standard for documenting REST APIS. "),(0,r.kt)("p",null,"Connectors abstract away the details of the underlying API while still offering a Azure AI interface within Power Platform. Using connectors, Azure AI developers can interact with APIs without having to have coding ability or extensive knowledge of the underlying API or backend systems. Connectors also give a consistent experience when authenticating to APIs without added custom code."),(0,r.kt)("p",null,"Power Platform provides >1000 built-in connectors which enables easy integration with a wide variety of systems & services.  Pre-built connectors include Dynamics 365, Salesforce, SAP and  Microsoft Teams among many others \u2013 in addition to seamless connection to Microsoft Azure services.  "),(0,r.kt)("p",null,"To connect to internal organizational APIs or solutions where there isn\u2019t an existing connector, Power Platform includes the ability to create custom connectors, which can be used as wrappers to APIs exposed through an API Gateway. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Resources:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/connectors/connectors/?WT.mc_id=javascript-82212-ninarasi"},"Connectors overview")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/connectors/custom-connectors/?WT.mc_id=javascript-82212-ninarasi"},"Custom Connectors overview"))),(0,r.kt)("h2",{id:"why-use-azure-api-management-apim-with-azure-ai-development"},"Why use Azure API Management (APIM) with Azure AI development?"),(0,r.kt)("p",null,"Azure API Management is a cloud-based platform for creating, managing & publishing APIs.  It supports fusion development patterns through:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Decoupling: Abstracting APIs from their backend implementation and hosting them under a single domain/IP address.  The API layer is decoupled from a specific user interface so the same API can be used in both traditional & Azure AI applications."),(0,r.kt)("li",{parentName:"ul"},"Governance: APIM adds an additional control plane for Azure AI development by allowing access only to specified apps & users and not exposing APIs directly."),(0,r.kt)("li",{parentName:"ul"},"Monitoring and debugging: Use Azure Application Insights to debug, monitor traffic & configure analytics."),(0,r.kt)("li",{parentName:"ul"},"Change Management: Versioning & revision control to manage breaking changes for traditional & Azure AI developers."),(0,r.kt)("li",{parentName:"ul"},"Internal Documentation: Creates a catalog of available APIs with downloadable Open API specifications via the Developer Portal."),(0,r.kt)("li",{parentName:"ul"},"Integration with Power Platform: Pushing custom connectors directly to Power Platform environments makes them available at once for use in apps & automation flows.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Resources:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/azure/api-management/api-management-key-concepts/?WT.mc_id=javascript-82212-ninarasi"},"What is API Management?")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/azure/api-management/export-api-power-platform/?WT.mc_id=javascript-82212-ninarasi"},"Export custom connectors from API Management")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://azure.github.io/apim-lab/?WT.mc_id=javascript-82212-ninarasi"},"APIM Hands-on Lab"))),(0,r.kt)("h2",{id:"azure-ai--azure-integration-patterns"},"Azure AI + Azure Integration Patterns"),(0,r.kt)("p",null,"The following technology patterns are generalized with regards to specific use cases but are drawn from real-world customer scenarios using Azure with Power Platform, aka \u201cfusion development.\u201d "),(0,r.kt)("p",null,"A common part of many of these fusion architecture patterns is the use of custom connectors that are exported & controlled from Azure API Management."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Feb11",src:a(51863).Z,width:"688",height:"230"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"IT Democratization")),(0,r.kt)("p",null,"This is the most basic pattern for fusion development.  This pattern allows for Azure AI developers, without a coding background, to build applications using their organization\u2019s data. This architecture uses APIs written by pro developers to amplify existing data and expose it to Azure AI developers using an API gateway. "),(0,r.kt)("p",null,"The Azure API Management Developer Portal provides an enterprise catalog which aggregates the data & APIs available to Azure AI & professional developers alike."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Feb11",src:a(34650).Z,width:"691",height:"251"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Resources:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/power-apps/guidance/fusion-dev-ebook/?WT.mc_id=javascript-82212-ninarasi"},"Fusion Development Ebook"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"AI/ML integrations")),(0,r.kt)("p",null,"Azure includes a rich suite of managed AI and machine learning services, including Azure Cognitive Services and Azure Machine Learning, to more easily build & deploy AI models. "),(0,r.kt)("p",null,"By combining Azure\u2019s AI/ML capabilities with Power Platform, you can build intelligent solutions that bring together the best of both worlds.  For example:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Building custom machine learning models in Azure AI services front-ended by a Azure AI app that consumes the resulting models to deliver insights about images & videos uploaded by end users."),(0,r.kt)("li",{parentName:"ul"},"After using AI/ML on the backend to process large amounts of data, Power Automate workflows can watch the resulting output, triggering custom actions & notifications based on the content."),(0,r.kt)("li",{parentName:"ul"},"Creating a Azure AI user interface for data labeling, making it easier for your business subject matter experts to label their datasets for use in training new custom Azure machine learning experiments.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Feb11",src:a(30112).Z,width:"686",height:"336"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Resources:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://azure.microsoft.com/products/cognitive-services/#overview/?WT.mc_id=javascript-82212-ninarasi"},"Azure Cognitive Services overview")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://azure.microsoft.com/products/machine-learning/#product-overview/?WT.mc_id=javascript-82212-ninarasi"},"Azure Machine Learning")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://azure.microsoft.com/products/cognitive-services/openai-service/?WT.mc_id=javascript-82212-ninarasi"},"Azure Open AI")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/appdevgbb/power-apps-custom-vision/?WT.mc_id=javascript-82212-ninarasi"},"Custom Vision + Power Apps Demo")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=ka_yY77b-0M/?WT.mc_id=javascript-82212-ninarasi"},"Power Apps and Azure Cognitive Services Demo"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"IoT/Event-driven Systems")," "),(0,r.kt)("p",null,"IoT systems can generate large amounts of data from connected devices. By integrating Power Platform with Azure IoT, you can build custom Azure AI apps & workflows that act on the IoT device data. "),(0,r.kt)("p",null,"For example:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Azure IoT Hub can collect & process data from IoT Devices, while Power Apps + Power BI can be used to build custom dashboards to supply insights & visualizations of the data.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Designing Power Automate workflows that are only triggered based on specific events or conditions which then send notifications to other systems, like Microsoft Teams.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Building fast, low-code interfaces for remote command & control of IoT edge devices."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Feb11",src:a(22543).Z,width:"677",height:"214"})))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Resources:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://azure.microsoft.com/products/iot-hub/#overview/?WT.mc_id=javascript-82212-ninarasi"},"Azure IoT Hub overview")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://azure.microsoft.com/solutions/messaging-services/#overview/?WT.mc_id=javascript-82212-ninarasi"},"Messaging Services on Azure Overview")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/appdevgbb/tornado-watchdog/?WT.mc_id=javascript-82212-ninarasi"},"Tornado Warning System Demo"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"On-prem data with Azure and Power Platform")),(0,r.kt)("p",null,"Sometimes organizations have security requirements that require isolated communication between resources in the cloud and on-premises. By using Azure with on-premises systems, you can create a dedicated and private connection and bypass the public internet. "),(0,r.kt)("p",null,"By using API Management in an Azure VNET (Virtual Network), you can also create secure connections between APIs and their backend services. Access to these APIs can be restricted to only allowing access to designated, trusted interfaces, such as Power Platform. This pattern has some of the same accessibility benefits of IT Democratization, but while respecting the security & isolation requirements of the business."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Feb11",src:a(53923).Z,width:"678",height:"282"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Resources:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/azure/api-management/api-management-using-with-vnet?tabs=stv2/?WT.mc_id=javascript-82212-ninarasi"},"Connect to a VNET using APIM")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/azure/api-management/export-api-power-platform/?WT.mc_id=javascript-82212-ninarasi"},"Export a Custom connector from APIM")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/connectors/custom-connectors/create-custom-connector-aad-protected-azure-functions/?WT.mc_id=javascript-82212-ninarasi"},"Custom connector for Azure AD-protected Apps")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/azure/api-management/api-management-howto-protect-backend-with-aad/?WT.mc_id=javascript-82212-ninarasi"},"Protect APIM with Azure AD"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Azure Communication Services + Power Platform")),(0,r.kt)("p",null,"Azure Communication Services allows you to add voice, video, and messaging capabilities to your applications. By integrating Power Platform with Azure Communication Services, you can build custom Azure AI applications that easily incorporate these communication capabilities."),(0,r.kt)("p",null,"Common communication & Azure AI scenarios include:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Create a flow using Power Automate to send out omnichannel notifications via email, SMS, and chat.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Using Power Automate to create Event Grid triggered flows to process inbound communication events such as incoming calls or SMS messages.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Using Azure Cognitive services, Azure Communication Services, and Power Automate together to do sentiment analysis that empowers support personnel to create contextual, personalized responses for end users.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Create a Power App Azure AI UI to trigger communication workflows and manage communication related metadata, like chat/SMS history."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Feb11",src:a(86743).Z,width:"647",height:"230"})))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Resources:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/azure/communication-services/overview/?WT.mc_id=javascript-82212-ninarasi"},"Azure Communication Services overview")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://powerautomate.microsoft.com/connectors/details/shared_azurecommunicationservicessms/azure-communication-services-sms/?WT.mc_id=javascript-82212-ninarasi"},"SMS Connector")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://powerautomate.microsoft.com/connectors/details/shared_acsemail/azure-communication-services-email/?WT.mc_id=javascript-82212-ninarasi"},"Email Connector")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://powerautomate.microsoft.com/connectors/details/shared_acschat/azure-communication-services-chat/?WT.mc_id=javascript-82212-ninarasi"},"Chat Connector")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://powerautomate.microsoft.com/connectors/details/shared_acsidentity/azure-communication-services-identity/?WT.mc_id=javascript-82212-ninarasi"},"Identity Connector")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/lowCode/sentimentanalysis"},"Integrate sentiment analysis with SMS"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Mainframe Modernization and Extension")),(0,r.kt)("p",null,"Azure integration services unlocks the ability to access & use Mainframe data.  Old green screen mainframe apps can be modernized to use modern technologies such as advanced data analytics & AI/ML services. "),(0,r.kt)("p",null,"By combining Power Platform with mainframe application data, you can unlock data and democratize development that was previously limited to only professional developers. You can build Azure AI user-friendly interfaces for accessing and working with Mainframe data, making it easier for non-technical users to interact with data. For example:"),(0,r.kt)("p",null,"\u2022\tIngesting real-time data, like telemetry & system alerts, that trigger Power Automate flows and send notifications to Microsoft Teams.\n\u2022\tUsing Power Apps to create user interfaces that allow users to view, manage, and create visualizations for Mainframe application data."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Feb11",src:a(69229).Z,width:"691",height:"265"})," "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Resources:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://ignite.microsoft.com/sessions/691884e3-273a-46eb-99ee-a0c761c86a1e?source=sessions/?WT.mc_id=javascript-82212-ninarasi"},"Low-Code Meets Mainframe: Kyndryl data pipeline"))),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"These Azure Azure AI patterns are just a few of the many integration patterns that bring together the best of both worlds. "),(0,r.kt)("p",null,"The combination of Azure & Power Platform supplies a comprehensive set of tools for building internal APIs to access your organization's data, designing AI experiments, and programming IoT devices.  "),(0,r.kt)("p",null,"Our Azure AI platform\u2019s capabilities help you quickly solve complex business problems & address the app gap problem with the fusion development process. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"}," Get Started Today?")," "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/ai-april/challenge"},(0,r.kt)("strong",{parentName:"a"},"Cloud Skills Challenge")),": Sign up for a month-long challenge and clime up the leaderboard"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/events/learn-events/powerful-devs-2023/?WT.mc_id=javascript-82212-ninarasi"},(0,r.kt)("strong",{parentName:"a"},"PowerfulDevs Session")),": Enable millions of Azure AI devs by building custom connectors"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/ai-april/collection"},(0,r.kt)("strong",{parentName:"a"},"Learn Collection")," "),": #30DaysOfAzureAI resources center")))}u.isMDXComponent=!0},86743:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/acs-727502e313b839227cecc38884495323.png"},30112:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/aiml-b0714a39ca7793150756d59d474be416.png"},22543:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/iot-c5d8d06f2efc283f1edddeb36b63b986.png"},34650:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/it-ed66733f95c8889ee6faf777874818d3.png"},69229:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/mainframe-70ca6efbea2faa014f882d59bc756391.png"},53923:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/onprem-005528f35c63af1e2297ff721b3189d0.png"},51863:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/picture-1-bc658fa5035aa1e4a28ff99524457f82.png"},17417:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/30-11-fc5862e9dc77b07431322a2ed297cda9.png"}}]);