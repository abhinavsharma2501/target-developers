"use strict";(self.webpackChunktarget_developers=self.webpackChunktarget_developers||[]).push([[8811],{97741:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return r},default:function(){return b}});var i=a(87462),n=a(63366),s=(a(15007),a(64983)),o=a(91515),d=["components"],r={},l=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.mdx)("div",t)}},p=l("InlineAlert"),m=l("CodeBlock"),c={_frontmatter:r},u=o.Z;function b(e){var t=e.components,a=(0,n.Z)(e,d);return(0,s.mdx)(u,(0,i.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,s.mdx)("h1",{id:"draft---under-review"},"DRAFT - UNDER REVIEW"),(0,s.mdx)("h1",{id:"models-api-overview"},"Models API Overview"),(0,s.mdx)("p",null,'The Models API, also called the Blocklist API, enables users to view and manage the list of features used in machine learning models for Automated Personalization (AP) and Auto-Target (AT) activities. If a user would like to exclude a feature from being used by the models for AP or AT activities, they can use the Models API to add that feature to the "blocklist."'),(0,s.mdx)(p,{variant:"info",slots:"header, text",mdxType:"InlineAlert"}),(0,s.mdx)("p",null,"Definition"),(0,s.mdx)("p",null,"A ",(0,s.mdx)("strong",{parentName:"p"},"blocklist")," defines the set of features that will be excluded by Adobe Target from its machine learning models. For more information on features, see ",(0,s.mdx)("a",{parentName:"p",href:"https://experienceleague.adobe.com/docs/target/using/activities/automated-personalization/ap-data.html"},"Data used by Target machine-learning algorithms"),"."),(0,s.mdx)("p",null,"Blocklists may be defined per activity (activity level), or for all activities within a Target account (global level)."),(0,s.mdx)("h2",{id:"models-api-specification"},"Models API specification"),(0,s.mdx)("p",null,"View the Models API specification ",(0,s.mdx)("a",{parentName:"p",href:"../administer/models-api/index.md"},"here"),"."),(0,s.mdx)("h2",{id:"prerequisites"},"Prerequisites"),(0,s.mdx)("p",null,"To use the Models API, you must configure authentication using the ",(0,s.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/console/home"},"Adobe Developer Console"),", just as you would with the ",(0,s.mdx)("a",{parentName:"p",href:"../administer/admin-api/index.md"},"Target Admin API"),". For more information, see ",(0,s.mdx)("a",{parentName:"p",href:"../before-administer/configure-authentication.md"},"How to Configure Authentication"),"."),(0,s.mdx)("h2",{id:"models-api-usage-guidelines"},"Models API usage guidelines"),(0,s.mdx)(p,{variant:"info",slots:"header, text1, text2, text3, text4, text5",mdxType:"InlineAlert"}),(0,s.mdx)("p",null,"How to manage blocklists"),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Step 1:")," View list of features for an activity"),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Step 2:")," Check the blocklist of the activity"),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Step 3:")," Add features to the blocklist of the activity"),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Step 4:")," (Optional) Unblock"),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Step 5:")," (Optional) Manage the global blocklist"),(0,s.mdx)("h2",{id:"step1"},"Step 1: View list of features for an activity"),(0,s.mdx)("p",null,"Before blocklisting a feature, view the list of features that are currently being included in the models for that activity."),(0,s.mdx)(m,{slots:"heading, code",repeat:"2",languages:"JSON, JSON",mdxType:"CodeBlock"}),(0,s.mdx)("h4",{id:"request"},"Request"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-json"},"GET https://mc.adobe.io/<tenant>/target/models/features/<campaignId>\n")),(0,s.mdx)("h4",{id:"response"},"Response"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "features": [\n        {\n            "externalName": "Visitor Profile - Total Visits to Activity",\n            "internalName": "SES_PREVIOUS_VISIT_COUNT",\n            "type": "CONTINUOUS"\n        },\n        {\n            "externalName": "Visitor Profile - Total Visits",\n            "internalName": "SES_TOTAL_SESSIONS",\n            "type": "CONTINUOUS"\n        },\n        {\n            "externalName": "Visitor Profile - Pages Seen Before Activity",\n            "internalName": "SES_PREVIOUS_VISIT_COUNT",\n            "type": "CONTINUOUS"\n        },\n        {\n            "externalName": "Visitor Profile - Activity Lifetime Time on Site",\n            "internalName": "SES_TOTAL_TIME",\n            "type": "CONTINUOUS"\n        }\n    ],\n    "reportParameters": {\n        "clientCode": <tenant>,\n        "campaignId": <campaignId>\n    }\n}\n')),(0,s.mdx)("p",null,"In the example shown here, the user is checking to see the list of features being used in the model for the activity whose Activity ID is 260840."),(0,s.mdx)("p",null,(0,s.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"761px"}},"\n      ",(0,s.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"134.0625%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,s.mdx)("picture",{parentName:"span"},"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/target-developers/static/95d766161dfba09e4d207ab2266fa50a/5530d/models-api-step-1.webp 320w","/target-developers/static/95d766161dfba09e4d207ab2266fa50a/0c8fb/models-api-step-1.webp 640w","/target-developers/static/95d766161dfba09e4d207ab2266fa50a/751eb/models-api-step-1.webp 761w"],sizes:"(max-width: 761px) 100vw, 761px",type:"image/webp"}),"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/target-developers/static/95d766161dfba09e4d207ab2266fa50a/dd4a7/models-api-step-1.png 320w","/target-developers/static/95d766161dfba09e4d207ab2266fa50a/0f09e/models-api-step-1.png 640w","/target-developers/static/95d766161dfba09e4d207ab2266fa50a/fe1bc/models-api-step-1.png 761w"],sizes:"(max-width: 761px) 100vw, 761px",type:"image/png"}),"\n          ",(0,s.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/target-developers/static/95d766161dfba09e4d207ab2266fa50a/fe1bc/models-api-step-1.png",alt:"Step 1",title:"Step 1",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,s.mdx)(p,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,s.mdx)("p",null,"To find your activity's Activity ID, navigate to the Activities List in the Target UI. Click on the activity of interest. The Activity ID will be displayed in the body of the resulting Activities Overview page, as well as at the end of the URL for that page."),(0,s.mdx)(p,{variant:"info",slots:"header, text1, text2",mdxType:"InlineAlert"}),(0,s.mdx)("p",null,"Definition"),(0,s.mdx)("p",null,"The ",(0,s.mdx)("strong",{parentName:"p"},"externalName")," is a user-friendly name for a feature. It is created by Target, and it is possible this value may change over time. Users can view these user-friendly names in the ",(0,s.mdx)("a",{parentName:"p",href:"https://experienceleague.adobe.com/docs/target/using/reports/insights/personalization-insights-reports.html"},"Personalization Insights report"),"."),(0,s.mdx)("p",null,"The ",(0,s.mdx)("strong",{parentName:"p"},"internalName")," is the feature's actual identifier. It is also created by Target, but it cannot be changed. This is the value you will need to reference in order to identify the feature(s) you would like to blocklist."),(0,s.mdx)("p",null,"Note that in order for the features list to populate with values (that is, in order for it to be non-null), an activity:"),(0,s.mdx)("ol",null,(0,s.mdx)("li",{parentName:"ol"},"Must have Status = Live, or must have been activated previously"),(0,s.mdx)("li",{parentName:"ol"},"Must have been running long enough for there to be campaign activity, so that the model has had data to run against.")),(0,s.mdx)("h2",{id:"step2"},"Step 2: Check the blocklist of the activity"),(0,s.mdx)("p",null,"Next, view the blocklist. In other words, check to see which features, if any, are currently being blocked from inclusion in the models for this activity."),(0,s.mdx)(p,{variant:"error",slots:"text",mdxType:"InlineAlert"}),(0,s.mdx)("p",null,"Note that ",(0,s.mdx)("inlineCode",{parentName:"p"},"/blockList/")," is case sensitive in the request."),(0,s.mdx)(m,{slots:"heading, code",repeat:"2",languages:"JSON, JSON",mdxType:"CodeBlock"}),(0,s.mdx)("h4",{id:"request-1"},"Request"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-json"},"GET https://mc.adobe.io/<tenant>/target/models/features/blockList/<campaignId>\n")),(0,s.mdx)("h4",{id:"response-1"},"Response"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-json"},"")),(0,s.mdx)("p",null,"In the example shown here, the user is checking the list of blocked features for the activity whose Activity ID is 260840. The results are empty, which means this activity does not currently have any blocklisted features."),(0,s.mdx)("p",null,(0,s.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"740px"}},"\n      ",(0,s.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"70.625%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,s.mdx)("picture",{parentName:"span"},"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/target-developers/static/f29558b31e3555bd38daf28b7308d7e3/5530d/models-api-step-2.webp 320w","/target-developers/static/f29558b31e3555bd38daf28b7308d7e3/0c8fb/models-api-step-2.webp 640w","/target-developers/static/f29558b31e3555bd38daf28b7308d7e3/c30c1/models-api-step-2.webp 740w"],sizes:"(max-width: 740px) 100vw, 740px",type:"image/webp"}),"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/target-developers/static/f29558b31e3555bd38daf28b7308d7e3/dd4a7/models-api-step-2.png 320w","/target-developers/static/f29558b31e3555bd38daf28b7308d7e3/0f09e/models-api-step-2.png 640w","/target-developers/static/f29558b31e3555bd38daf28b7308d7e3/b38af/models-api-step-2.png 740w"],sizes:"(max-width: 740px) 100vw, 740px",type:"image/png"}),"\n          ",(0,s.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/target-developers/static/f29558b31e3555bd38daf28b7308d7e3/b38af/models-api-step-2.png",alt:"Step 2",title:"Step 2",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,s.mdx)(p,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,s.mdx)("p",null,"You may see empty results like this, the first time you check the full blocklist, before adding any features to it. However, once you have added (and subsequently removed) features from a blocklist, you may see slightly different results, in which an empty blocklisted features array is returned. Continue reading to see an example of this in ",(0,s.mdx)("a",{parentName:"p",href:"#step4"},"Step 4"),"."),(0,s.mdx)("h2",{id:"step3"},"Step 3: Add features to the blocklist of the activity"),(0,s.mdx)("p",null,"To add features to the blocklist, change the request from GET to PUT, and modify the body of the request to specify the ",(0,s.mdx)("inlineCode",{parentName:"p"},"blockedFeatureSources")," or ",(0,s.mdx)("inlineCode",{parentName:"p"},"blockedFeatures")," as desired."),(0,s.mdx)("ul",null,(0,s.mdx)("li",{parentName:"ul"},"The body of the request requires either ",(0,s.mdx)("inlineCode",{parentName:"li"},"blockedFeatures")," or ",(0,s.mdx)("inlineCode",{parentName:"li"},"blockedFeatureSources"),". Both may be included."),(0,s.mdx)("li",{parentName:"ul"},"Populate ",(0,s.mdx)("inlineCode",{parentName:"li"},"blockedFeatures")," with values identified from ",(0,s.mdx)("inlineCode",{parentName:"li"},"internalName"),". See ",(0,s.mdx)("a",{parentName:"li",href:"#step1"},"Step 1"),"."),(0,s.mdx)("li",{parentName:"ul"},"Populate ",(0,s.mdx)("inlineCode",{parentName:"li"},"blockedFeatureSources")," with values from the table below.")),(0,s.mdx)("p",null,"Note that ",(0,s.mdx)("inlineCode",{parentName:"p"},"blockedFeatureSources")," are sources for features. For the purposes of blocklisting, they serve as groups or categories of features, which enable users to block entire sets of features at once. The values of ",(0,s.mdx)("inlineCode",{parentName:"p"},"blockedFeatureSources")," match the first characters of a feature's identifier (",(0,s.mdx)("inlineCode",{parentName:"p"},"blockedFeatures")," or ",(0,s.mdx)("inlineCode",{parentName:"p"},"internalName"),' values); therefore they may also be considered "feature prefixes."'),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Table of ",(0,s.mdx)("inlineCode",{parentName:"strong"},"blockedFeatureSources")," values:")),(0,s.mdx)("table",null,(0,s.mdx)("thead",{parentName:"table"},(0,s.mdx)("tr",{parentName:"thead"},(0,s.mdx)("th",{parentName:"tr",align:null},"Prefix"),(0,s.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,s.mdx)("tbody",{parentName:"table"},(0,s.mdx)("tr",{parentName:"tbody"},(0,s.mdx)("td",{parentName:"tr",align:null},"BOX"),(0,s.mdx)("td",{parentName:"tr",align:null})),(0,s.mdx)("tr",{parentName:"tbody"},(0,s.mdx)("td",{parentName:"tr",align:null},"URL"),(0,s.mdx)("td",{parentName:"tr",align:null})),(0,s.mdx)("tr",{parentName:"tbody"},(0,s.mdx)("td",{parentName:"tr",align:null},"SEG"),(0,s.mdx)("td",{parentName:"tr",align:null})),(0,s.mdx)("tr",{parentName:"tbody"},(0,s.mdx)("td",{parentName:"tr",align:null},"AAM"),(0,s.mdx)("td",{parentName:"tr",align:null},"Adobe Audience Manager")),(0,s.mdx)("tr",{parentName:"tbody"},(0,s.mdx)("td",{parentName:"tr",align:null},"CRS"),(0,s.mdx)("td",{parentName:"tr",align:null})),(0,s.mdx)("tr",{parentName:"tbody"},(0,s.mdx)("td",{parentName:"tr",align:null},"UPA"),(0,s.mdx)("td",{parentName:"tr",align:null})),(0,s.mdx)("tr",{parentName:"tbody"},(0,s.mdx)("td",{parentName:"tr",align:null},"IAC"),(0,s.mdx)("td",{parentName:"tr",align:null})),(0,s.mdx)("tr",{parentName:"tbody"},(0,s.mdx)("td",{parentName:"tr",align:null},"CUMULATIVE_ACTION"),(0,s.mdx)("td",{parentName:"tr",align:null})))),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"QUESTION A: Please provide list of descriptions")),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},'QUESTION B: What is the "SES" prefix, which was shown in demos?"')),(0,s.mdx)(m,{slots:"heading, code",repeat:"2",languages:"JSON, JSON",mdxType:"CodeBlock"}),(0,s.mdx)("h4",{id:"request-2"},"Request"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-json"},'PUT https://mc.adobe.io/<tenant>/target/models/features/blockList/<campaignId>\n\n{\n    "blockedFeatureSources": ["AAM"],\n    "blockedFeatures": ["SES_PREVIOUS_VISIT_COUNT", "SES_TOTAL_SESSIONS"]\n}\n')),(0,s.mdx)("h4",{id:"response-2"},"Response"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "blockedFeatures": [\n            "SES_PREVIOUS_VISIT_COUNT",\n            "SES_TOTAL_SESSIONS"\n        ],\n    "blockedFeatureSources": [\n            "AAM"\n        ]\n}\n\n')),(0,s.mdx)("p",null,"In the example shown here, the user is blocking two features, ",(0,s.mdx)("inlineCode",{parentName:"p"},"SES_PREVIOUS_VISIT_COUNT")," and ",(0,s.mdx)("inlineCode",{parentName:"p"},"SES_TOTAL_SESSIONS"),", which they previously identified by querying the full list of features for the activity whose Activity ID is 260480, as described in ",(0,s.mdx)("a",{parentName:"p",href:"#step1"},"Step 1"),'. They are also blocking all features whose source is Adobe Audience Manager, achieved by blocking features with the prefix of "AAM."'),(0,s.mdx)("p",null,(0,s.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"713px"}},"\n      ",(0,s.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"104.06249999999999%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,s.mdx)("picture",{parentName:"span"},"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/target-developers/static/5d7e2a5cb8b45d86cfb680dea79cddd5/5530d/models-api-step-3.webp 320w","/target-developers/static/5d7e2a5cb8b45d86cfb680dea79cddd5/0c8fb/models-api-step-3.webp 640w","/target-developers/static/5d7e2a5cb8b45d86cfb680dea79cddd5/e185d/models-api-step-3.webp 713w"],sizes:"(max-width: 713px) 100vw, 713px",type:"image/webp"}),"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/target-developers/static/5d7e2a5cb8b45d86cfb680dea79cddd5/dd4a7/models-api-step-3.png 320w","/target-developers/static/5d7e2a5cb8b45d86cfb680dea79cddd5/0f09e/models-api-step-3.png 640w","/target-developers/static/5d7e2a5cb8b45d86cfb680dea79cddd5/61d11/models-api-step-3.png 713w"],sizes:"(max-width: 713px) 100vw, 713px",type:"image/png"}),"\n          ",(0,s.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/target-developers/static/5d7e2a5cb8b45d86cfb680dea79cddd5/61d11/models-api-step-3.png",alt:"Step 3",title:"Step 3",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"QUESTION C"),": Will the Body of the Response of a blocklist request show the FULL list of blocked features, or will it only display the features you just blocked, within that specific PUT request?"),(0,s.mdx)(p,{variant:"help",slots:"text",mdxType:"InlineAlert"}),(0,s.mdx)("p",null,"Note that after blocklisting a feature, it is recommended that you verify the updated blocklist by performing ",(0,s.mdx)("a",{parentName:"p",href:"#step2"},"Step 2")," again (GET the blocklist). Verify that the results appear as expected (verify that the results include the features added from the latest PUT request)."),(0,s.mdx)("h2",{id:"step4"},"Step 4: (Optional) Unblock"),(0,s.mdx)("p",null,"To unblock, clear the values from ",(0,s.mdx)("inlineCode",{parentName:"p"},"blockedFeatureSources")," or ",(0,s.mdx)("inlineCode",{parentName:"p"},"blockedFeatures"),"."),(0,s.mdx)(m,{slots:"heading, code",repeat:"2",languages:"JSON, JSON",mdxType:"CodeBlock"}),(0,s.mdx)("h4",{id:"request-3"},"Request"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-json"},'PUT https://mc.adobe.io/<tenant>/target/models/features/blockList/<campaignId>\n\n{\n    "blockedFeatureSources": [],\n    "blockedFeatures": []\n}\n')),(0,s.mdx)("h4",{id:"response-3"},"Response"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "blockedFeatures": [],\n    "blockedFeatureSources": []\n}\n\n')),(0,s.mdx)("p",null,"In the example shown here, the user is clearing their blocklist for the activity whose Activity ID is 260840. Note that the response shows empty arrays for both blocked features and their sources—",(0,s.mdx)("inlineCode",{parentName:"p"},"blockedFeatureSources")," and ",(0,s.mdx)("inlineCode",{parentName:"p"},"blockedFeatures"),", respectively."),(0,s.mdx)("p",null,(0,s.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"741px"}},"\n      ",(0,s.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"94.0625%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,s.mdx)("picture",{parentName:"span"},"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/target-developers/static/ad9e92f316a9f6baedb9447405689cbf/5530d/models-api-step-4.webp 320w","/target-developers/static/ad9e92f316a9f6baedb9447405689cbf/0c8fb/models-api-step-4.webp 640w","/target-developers/static/ad9e92f316a9f6baedb9447405689cbf/d34f7/models-api-step-4.webp 741w"],sizes:"(max-width: 741px) 100vw, 741px",type:"image/webp"}),"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/target-developers/static/ad9e92f316a9f6baedb9447405689cbf/dd4a7/models-api-step-4.png 320w","/target-developers/static/ad9e92f316a9f6baedb9447405689cbf/0f09e/models-api-step-4.png 640w","/target-developers/static/ad9e92f316a9f6baedb9447405689cbf/660ed/models-api-step-4.png 741w"],sizes:"(max-width: 741px) 100vw, 741px",type:"image/png"}),"\n          ",(0,s.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/target-developers/static/ad9e92f316a9f6baedb9447405689cbf/660ed/models-api-step-4.png",alt:"Step 4",title:"Step 4",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,s.mdx)("p",null,"As always, after modifying the blocklist, it is recommended that you perform ",(0,s.mdx)("a",{parentName:"p",href:"#step2"},"Step 2")," again (GET the blocklist to verify the list includes features as expected). In the example shown here, the user is verifying that their blocklist is now empty."),(0,s.mdx)("p",null,(0,s.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"722px"}},"\n      ",(0,s.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"85.625%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,s.mdx)("picture",{parentName:"span"},"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/target-developers/static/ecb48cbc22072e57e64ff6f96254db6f/5530d/models-api-step-4b.webp 320w","/target-developers/static/ecb48cbc22072e57e64ff6f96254db6f/0c8fb/models-api-step-4b.webp 640w","/target-developers/static/ecb48cbc22072e57e64ff6f96254db6f/6aa51/models-api-step-4b.webp 722w"],sizes:"(max-width: 722px) 100vw, 722px",type:"image/webp"}),"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/target-developers/static/ecb48cbc22072e57e64ff6f96254db6f/dd4a7/models-api-step-4b.png 320w","/target-developers/static/ecb48cbc22072e57e64ff6f96254db6f/0f09e/models-api-step-4b.png 640w","/target-developers/static/ecb48cbc22072e57e64ff6f96254db6f/ad973/models-api-step-4b.png 722w"],sizes:"(max-width: 722px) 100vw, 722px",type:"image/png"}),"\n          ",(0,s.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/target-developers/static/ecb48cbc22072e57e64ff6f96254db6f/ad973/models-api-step-4b.png",alt:"Step 4b",title:"Step 4b",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,s.mdx)(p,{variant:"info",slots:"header, text",mdxType:"InlineAlert"}),(0,s.mdx)("p",null,"Question: How can I delete some, but not all, of a blocklist?"),(0,s.mdx)("p",null,"Answer: To remove a discrete subset of blocklisted features from a multi-feature blocklist, users can simply send the updated list in ",(0,s.mdx)("a",{parentName:"p",href:"#step3"},"the blocklist request"),", as opposed to clearing the entire blocklist and re-adding the desired features. In other words, send the updated feature list (as shown in ",(0,s.mdx)("a",{parentName:"p",href:"#step3"},"Step 3"),'), making sure to exclude the features you wish to "delete" from the blocklist.'),(0,s.mdx)("h2",{id:"step-5-optional-manage-the-global-blocklist"},"Step 5: (Optional) Manage the global blocklist"),(0,s.mdx)("p",null,"The examples above were all in the context of a single activity. You may also block features for all activities across a given client (tenant), instead of having to specify the blocklist for each activity. To perform a global blocklist, use the ",(0,s.mdx)("inlineCode",{parentName:"p"},"/blockList/global")," call, instead of ",(0,s.mdx)("inlineCode",{parentName:"p"},"blockList/<campaignId>"),"."),(0,s.mdx)(m,{slots:"heading, code",repeat:"2",languages:"JSON, JSON",mdxType:"CodeBlock"}),(0,s.mdx)("h4",{id:"request-4"},"Request"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-json"},'PUT https://mc.adobe.io/<tenant>/target/models/features/blockList/global\n\n{\n    "blockedFeatureSources": ["AAM"],\n    "blockedFeatures": ["AAM_FEATURE_1", "AAM_FEATURE_2"]\n}\n')),(0,s.mdx)("h4",{id:"response-4"},"Response"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "blockedFeatures": [\n        "AAM_FEATURE_1",\n        "AAM_FEATURE_2"\n    ],\n    "blockedFeatureSources": [\n        "AAM"\n    ]\n}\n\n')),(0,s.mdx)("p",null,"In the sample Request shown above, the user is blocking two features, ",(0,s.mdx)("inlineCode",{parentName:"p"},"AAM_FEATURE_1")," and ",(0,s.mdx)("inlineCode",{parentName:"p"},"AAM_FEATURE_2"),", for all activities in their Target account. This means that, regardless of the activity, ",(0,s.mdx)("inlineCode",{parentName:"p"},"AAM_FEATURE_1")," and ",(0,s.mdx)("inlineCode",{parentName:"p"},"AAM_FEATURE_2")," will not be included in the machine learning models for this account. Furthermore, the user is also globally blocking all features whose prefix is ",(0,s.mdx)("inlineCode",{parentName:"p"},"AAM.")),(0,s.mdx)(p,{variant:"info",slots:"header, text",mdxType:"InlineAlert"}),(0,s.mdx)("p",null,"Question: Isn't the code sample above, redundant?"),(0,s.mdx)("p",null,'Answer: Yes. It is redundant to block features with values beginning with "AAM," while also blocking all features whose source is "AAM." The net result is that all features sourced from AAM will be blocked. Therefore, if the goal is to block all features from Audience Manager, individually specifying certain features beginning with "AAM" is unnecessary, in the example above.'),(0,s.mdx)("p",null,"Whether at the activity- or global-level, it is recommended that you verify your blocklist after modifying it, to ensure it contains the values you expect. Do this by changing the ",(0,s.mdx)("inlineCode",{parentName:"p"},"PUT")," to a ",(0,s.mdx)("inlineCode",{parentName:"p"},"GET"),"."),(0,s.mdx)("p",null,'In the sample Response shown below, we see that Target is not only blocking the two individual features, plus all features sourced from "AAM," as specified in the previous ',(0,s.mdx)("inlineCode",{parentName:"p"},"PUT"),', but it is also blocking features sourced from "PRO" and "ENV." Note this means that "PRO" and "ENV" features must have been blocked globally in a prior request.'),(0,s.mdx)("p",null,(0,s.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"731px"}},"\n      ",(0,s.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"103.75000000000001%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,s.mdx)("picture",{parentName:"span"},"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/target-developers/static/5ffd7781a737c72f1dfbadcc4440285d/5530d/models-api-step-5.webp 320w","/target-developers/static/5ffd7781a737c72f1dfbadcc4440285d/0c8fb/models-api-step-5.webp 640w","/target-developers/static/5ffd7781a737c72f1dfbadcc4440285d/263f1/models-api-step-5.webp 731w"],sizes:"(max-width: 731px) 100vw, 731px",type:"image/webp"}),"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/target-developers/static/5ffd7781a737c72f1dfbadcc4440285d/dd4a7/models-api-step-5.png 320w","/target-developers/static/5ffd7781a737c72f1dfbadcc4440285d/0f09e/models-api-step-5.png 640w","/target-developers/static/5ffd7781a737c72f1dfbadcc4440285d/4bd0f/models-api-step-5.png 731w"],sizes:"(max-width: 731px) 100vw, 731px",type:"image/png"}),"\n          ",(0,s.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/target-developers/static/5ffd7781a737c72f1dfbadcc4440285d/4bd0f/models-api-step-5.png",alt:"Step 5",title:"Step 5",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")))}b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-before-administer-models-api-md-0717791bc8e4655f00d6.js.map