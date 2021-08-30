(this.webpackJsonp3=this.webpackJsonp3||[]).push([[0],{155:function(e,t,a){},162:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(96),r=a.n(s),i=(a(161),a(154),a(155),a(4)),l=a(2),o=a(27),d={projects:[{half:!1,title:"Netflix Clone",site:"https://netflix-react-clone-70d64.web.app/",code:"",image:"/images/netflix.png",description:"",technologies:[{src:"javascript",alt:"JavaScript"},{src:"react",alt:"React"},{src:"redux",alt:"Redux"},{src:"sass",alt:"SASS"},{src:"html",alt:"HTML"},{src:"css",alt:"CSS"},{src:"firebase",alt:"Firebase"}]},{half:!1,title:"Amazon Clone",site:"https://amazo-react-clone.web.app/",code:"",image:"/images/amazon.png",description:"",technologies:[{src:"javascript",alt:"JavaScript"},{src:"react",alt:"React"},{src:"redux",alt:"Redux"},{src:"sass",alt:"SASS"},{src:"html",alt:"HTML"},{src:"css",alt:"CSS"},{src:"firebase",alt:"Firebase"}]},{half:!1,title:"Chat App",site:"https://whatsapp-react-clone-506fb.web.app/",code:"",image:"/images/whatsapp.png",description:"",technologies:[{src:"javascript",alt:"JavaScript"},{src:"react",alt:"React"},{src:"redux",alt:"Redux"},{src:"sass",alt:"SASS"},{src:"html",alt:"HTML"},{src:"css",alt:"CSS"},{src:"firebase",alt:"Firebase"}]},{half:!0,title:"pizza",site:"https://rynay-pizza-builder.netlify.app",code:"",image:"/images/pizza.png",description:""},{half:!1,title:"apple",site:"https://rynay-apple-store.netlify.app",code:"",image:"/images/apple.png",description:""},{half:!0,title:"mapty",site:"https://relaxed-colden-ce3b68.netlify.app",code:"",image:"/images/mapty.png",description:""},{half:!0,title:"nexter",site:"https://sad-dijkstra-1b66f0.netlify.app",code:"",image:"/images/nexter.png",description:""},{half:!0,title:"outdoors",site:"https://flamboyant-lalande-525340.netlify.app",code:"",image:"/images/outdoors.png",description:""},{half:!0,title:"trillo",site:"https://stoic-wing-b8e6ca.netlify.app",code:"",image:"/images/trillo.png",description:""}],stack:[{src:"react",alt:"React"},{src:"redux",alt:"Redux"},{src:"typescript",alt:"TypeScript"},{src:"javascript",alt:"JavaScript"},{src:"sass",alt:"SASS"},{src:"html",alt:"HTML"},{src:"css",alt:"CSS"},{src:"git",alt:"Git"},{src:"github",alt:"GitHub"},{src:"firebase",alt:"Firebase"},{src:"visual-studio-code",alt:"VS Code"}],headings:{activity:{ru:"\ud83d\udcbb \u0410\u043a\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u044c \u0417\u0430 \u041f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u0435 7 \u0414\u043d\u0435\u0439",en:"\ud83d\udcbb Last 7 Days Activity"},greeting:{ru:"\ud83d\udd96 \u041f\u0440\u0438\u0432\u0435\u0442, \u044f \u041a\u0441\u0435\u043d\u0438\u044f!",en:"\ud83d\udd96 Hi there! I'm Kseniia"},stack:{ru:"\ud83e\uddf0 \u042f\u0437\u044b\u043a\u0438, \u0422\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0438 \u0438 \u0418\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u044b:",en:"\ud83e\uddf0 Languages, Technologies and Tools:"}},buttonTexts:{projectSiteLink:{ru:"\u041f\u043e\u0441\u0435\u0442\u0438\u0442\u044c",en:"Visit"},projectSourceLink:{ru:"\u0418\u0441\u0445\u043e\u0434\u043d\u044b\u0439 \u043a\u043e\u0434",en:"Source Code"}},themes:{dark:"dark",light:"light"},languages:{ru:"ru",en:"en"},navLinks:[{title:{ru:"\u041e\u0431\u043e \u043c\u043d\u0435",en:"About"},link:"/"},{title:{ru:"\u041f\u043e\u0440\u0442\u0444\u043e\u043b\u0438\u043e",en:"Projects"},link:"/projects"}]},h=a(0),j=Object(c.createContext)(null),p=function(e){var t=e.children,a=Object(c.useState)(localStorage.getItem("language")||d.languages.en),n=Object(i.a)(a,2),s=n[0],r=n[1];Object(c.useEffect)((function(){localStorage.setItem("language",s)}),[s]);return Object(h.jsx)(j.Provider,{value:[s,function(){r("ru"===s?"en":"ru")}],children:t})},b=Object(c.createContext)(null),u=function(e){var t=e.children,a=Object(c.useState)(localStorage.getItem("theme")||d.themes.dark),n=Object(i.a)(a,2),s=n[0],r=n[1];Object(c.useEffect)((function(){localStorage.setItem("theme",s)}),[s]);return Object(h.jsx)(b.Provider,{value:[s,function(){r("dark"===s?"light":"dark")}],children:t})},g=a(20),_=a.n(g),x=function(){var e=Object(c.useContext)(j),t=Object(i.a)(e,2),a=t[0],n=t[1],s=Object(c.useContext)(b),r=Object(i.a)(s,2),l=r[0],p=r[1];return Object(h.jsx)("header",{className:_.a.header,children:Object(h.jsxs)("div",{className:_.a.header__container,children:[Object(h.jsx)("nav",{className:_.a.header__nav,children:d.navLinks.map((function(e){return Object(h.jsx)(o.b,{exact:!0,to:e.link,className:_.a.header__navLink,activeClassName:_.a.header__navLink_active,children:e.title[a]},e.link)}))}),Object(h.jsxs)("div",{className:_.a.header__togglersContainer,children:[Object(h.jsx)("button",{onClick:n,onKeyDown:function(e){"Enter"===e.key&&n()},"aria-label":"ru"===a?"\u0410\u043d\u0433\u043b\u0438\u0439\u0441\u043a\u0438\u0439 \u044f\u0437\u044b\u043a. English language":"Russian language. \u0420\u0443\u0441\u0441\u043a\u0438\u0439 \u044f\u0437\u044b\u043a",children:Object(h.jsx)("img",{src:"/images/".concat(a,".svg"),alt:"flag"})}),Object(h.jsx)("button",{onClick:p,onKeyDown:function(e){"Enter"===e.key&&p()},"aria-label":"dark"===l?"en"===a?"Light theme":"\u0421\u0432\u0435\u0442\u043b\u0430\u044f \u0442\u0435\u043c\u0430":"en"===a?"Dark theme":"\u0422\u0435\u043c\u043d\u0430\u044f \u0442\u0435\u043c\u0430",children:"dark"===l?"\ud83c\udf19":"\u2600\ufe0f"})]})]})})},m=function(){var e=Object(c.useContext)(j),t=Object(i.a)(e,1)[0];return Object(h.jsx)("section",{children:Object(h.jsx)("h1",{children:d.headings.greeting[t]})})},O=function(){var e=Object(c.useContext)(j),t=Object(i.a)(e,1)[0];return Object(h.jsx)("section",{children:Object(h.jsxs)("h2",{children:[d.headings.activity[t],":"]})})},f=a(99),v=a.n(f),k=function(e){var t=e.technologies;return Object(h.jsx)("ul",{className:v.a.technologies,children:t.map((function(e){return Object(h.jsxs)("li",{children:[Object(h.jsx)("img",{src:"/images/".concat(e.src,".svg"),alt:e.alt}),Object(h.jsx)("span",{children:e.alt})]},e.alt)}))})},C=function(){var e=Object(c.useContext)(j),t=Object(i.a)(e,1)[0];return Object(h.jsxs)("section",{children:[Object(h.jsx)("h2",{children:d.headings.stack[t]}),Object(h.jsx)(k,{technologies:d.stack})]})},S=function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(m,{}),Object(h.jsx)(C,{}),Object(h.jsx)(O,{})]})},y=a(39),w=a.n(y),L=function(){return Object(h.jsx)("article",{className:w.a.container,children:d.projects.map((function(e){return Object(h.jsx)("section",{className:e.half?w.a.project_halfWidth:w.a.project_fullWidth,children:Object(h.jsx)("a",{href:e.site,target:"_blank",rel:"noreferrer",children:Object(h.jsx)("img",{src:e.image,alt:e.title})})},e.title)}))})},H=a(28),N=a.n(H),A=a(21),E=a.n(A),R=function(){var e=Object(c.useContext)(b),t=Object(i.a)(e,1)[0],a=Object(l.f)(),n=Object(c.useState)(),s=Object(i.a)(n,2),r=s[0],o=s[1];return Object(c.useLayoutEffect)((function(){a.isExact&&"/"===a.path?o(!0):o(!1)}),[a]),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("figure",{className:"".concat(E.a.chartsContainer," ").concat("light"===t?"":E.a.chartsContainer_hidden," ").concat(r?"":E.a.chartsContainer_hidden),children:[Object(h.jsx)("embed",{width:"50%",src:"https://wakatime.com/share/@rynay/da0223be-e452-41cf-af2c-9272e2b5de59.svg"}),Object(h.jsx)("embed",{width:"50%",src:"https://wakatime.com/share/@rynay/3731142a-d11b-453b-ad3b-63af6b794506.svg"})]}),Object(h.jsxs)("figure",{className:"".concat(E.a.chartsContainer," ").concat("dark"===t?"":E.a.chartsContainer_hidden,"  ").concat(r?"":E.a.chartsContainer_hidden),children:[Object(h.jsx)("embed",{width:"50%",src:"https://wakatime.com/share/@rynay/92b2b2d2-a172-493c-8cbe-d574856057b5.svg"}),Object(h.jsx)("embed",{width:"50%",src:"https://wakatime.com/share/@rynay/858b6f63-f709-4655-8b90-8023c071cabf.svg"})]})]})};var T=function(){var e=Object(c.useContext)(b),t=Object(i.a)(e,1)[0];return Object(h.jsxs)("div",{className:"".concat(N.a.scrollContainer," ").concat(N.a.app," ").concat("dark"===t?N.a.app_dark:N.a.app_light),"data-simplebar":!0,children:[Object(h.jsx)(x,{}),Object(h.jsxs)("main",{className:N.a.container,children:[Object(h.jsxs)(l.c,{children:[Object(h.jsx)(l.a,{path:"/projects",children:Object(h.jsx)(L,{})}),Object(h.jsx)(l.a,{path:"/",children:Object(h.jsx)(S,{})})]}),Object(h.jsx)(R,{})]})]})};r.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(o.a,{children:Object(h.jsx)(u,{children:Object(h.jsx)(p,{children:Object(h.jsx)(T,{})})})})}),document.getElementById("root"))},20:function(e,t,a){e.exports={header:"Header_header__1824u",header__container:"Header_header__container__1xKH4",header__nav:"Header_header__nav__YpBej",header__navLink:"Header_header__navLink__VpVwm",header__navLink_active:"Header_header__navLink_active__2QQLU",header__togglersContainer:"Header_header__togglersContainer__37Olo"}},21:function(e,t,a){e.exports={chartsContainer_hidden:"Charts_chartsContainer_hidden__cFuHe"}},28:function(e,t,a){e.exports={app:"App_app__XBfRs",app_dark:"App_app_dark__1-3Xu",app_light:"App_app_light__3ACN7",scrollContainer:"App_scrollContainer__3ZQTi",container:"App_container__2x9FE"}},39:function(e,t,a){e.exports={container:"Projects_container__2wflE"}},99:function(e,t,a){e.exports={technologies:"ListOfTechnologies_technologies__2k_7H"}}},[[162,1,2]]]);
//# sourceMappingURL=main.14628b2b.chunk.js.map