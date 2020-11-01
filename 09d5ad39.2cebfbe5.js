(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{149:function(t,e,a){"use strict";a.d(e,"a",(function(){return p})),a.d(e,"b",(function(){return O}));var r=a(0),n=a.n(r);function b(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function c(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?c(Object(a),!0).forEach((function(e){b(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},b=Object.keys(t);for(r=0;r<b.length;r++)a=b[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(t);for(r=0;r<b.length;r++)a=b[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var i=n.a.createContext({}),s=function(t){var e=n.a.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},p=function(t){var e=s(t.components);return n.a.createElement(i.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.a.createElement(n.a.Fragment,{},e)}},d=n.a.forwardRef((function(t,e){var a=t.components,r=t.mdxType,b=t.originalType,c=t.parentName,i=o(t,["components","mdxType","originalType","parentName"]),p=s(a),d=r,O=p["".concat(c,".").concat(d)]||p[d]||m[d]||b;return a?n.a.createElement(O,l(l({ref:e},i),{},{components:a})):n.a.createElement(O,l({ref:e},i))}));function O(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var b=a.length,c=new Array(b);c[0]=d;var l={};for(var o in e)hasOwnProperty.call(e,o)&&(l[o]=e[o]);l.originalType=t,l.mdxType="string"==typeof t?t:r,c[1]=l;for(var i=2;i<b;i++)c[i]=a[i];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},65:function(t,e,a){"use strict";a.r(e),a.d(e,"frontMatter",(function(){return c})),a.d(e,"metadata",(function(){return l})),a.d(e,"rightToc",(function(){return o})),a.d(e,"default",(function(){return s}));var r=a(2),n=a(6),b=(a(0),a(149)),c={title:"Examples"},l={unversionedId:"examples",id:"examples",isDocsHomePage:!1,title:"Examples",description:"You can get all of the following examples as follows",source:"@site/docs/examples.md",slug:"/examples",permalink:"/docs/examples",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/examples.md",version:"current",lastUpdatedBy:"Huan LI (\u674e\u5353\u6853)",lastUpdatedAt:1604226806,sidebar:"docs",previous:{title:"Motivation",permalink:"/docs/introduction/motivations"},next:{title:"Examples II",permalink:"/docs/examples2"}},o=[{value:"1. BASIC",id:"1-basic",children:[]},{value:"2. ADVANCED",id:"2-advanced",children:[]},{value:"3. PROFESSIONAL",id:"3-professional",children:[]}],i={rightToc:o};function s(t){var e=t.components,a=Object(n.a)(t,["components"]);return Object(b.b)("wrapper",Object(r.a)({},i,a,{components:e,mdxType:"MDXLayout"}),Object(b.b)("p",null,"You can get all of the following examples as follows"),Object(b.b)("p",null,Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/wechaty/wechaty-getting-started/tree/master/examples"}),"https://github.com/wechaty/wechaty-getting-started/tree/master/examples")),Object(b.b)("h2",{id:"1-basic"},"1. BASIC"),Object(b.b)("p",null,"Wechaty Basic Functions, see ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/wechaty/wechaty-getting-started/tree/master/examples/basic"}),"https://github.com/wechaty/wechaty-getting-started/tree/master/examples/basic")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"FileName"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"the-worlds-shortest-chatbot-code-in-6-lines.js"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"The very first wechaty example showcasing how easy it is to get started")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"ding-dong-bot.js"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Practical example illustrates on how to do message handling")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"contact-bot.js"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"List all contacts by Wechat ID & Name")))),Object(b.b)("h2",{id:"2-advanced"},"2. ADVANCED"),Object(b.b)("p",null,"Wechaty Advanced Functions, see ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/wechaty/wechaty-getting-started/tree/master/examples/advanced"}),"https://github.com/wechaty/wechaty-getting-started/tree/master/examples/advanced")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"FileName"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"demo-in-tutorial.js"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"the demo bot from the tutorial")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"busy-bot.js"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),'auto response "busy" message for you when you are')),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"media-file-bot.js"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Save Media Attachment in Message to local files")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"room-bot.js,room-say-cli.js"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Practical example illustrates on how to do room handling")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"friend-bot.js"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Practical example illustrates on how to do friend handling")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"gist-bot/"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Best template for bigger modules, with each handler in separated files")))),Object(b.b)("h2",{id:"3-professional"},"3. PROFESSIONAL"),Object(b.b)("p",null,"Wechaty Integrated with Other Modules/Services, see ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/wechaty/wechaty-getting-started/tree/master/examples/professional"}),"https://github.com/wechaty/wechaty-getting-started/tree/master/examples/professional")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"FileName"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"hot-import-bot/"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Using Hot Module Reload","(","HMR",")"," for Wechaty Listeners")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"ctrl-c-signal-bot.ts"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Ctrl-C signal handling demo")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"monster-bot/"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"demo that tried to include everything -- message, room, HMR & signal handling, with each handler in separated files")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"api-ai-bot.ts"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Wechaty bot that uses ApiAi.com brain")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"speech-to-text-bot.ts"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"bot that uses baidu speech ","(","vop.baidu.com",")")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"tuling123-bot.ts"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Connect to ",Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"http://www.tuling123.com/"}),"tuling123")," chatbot")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"telegram-roger-bot.js"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"single bot that runs under/for both Telegram and WeChaty")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"blessed-twins-bot/"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Wechaty multi-instance support ","(","v0.16+",")"," demo")))))}s.isMDXComponent=!0}}]);