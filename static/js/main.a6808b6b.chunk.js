(this["webpackJsonpgenshin-characters"]=this["webpackJsonpgenshin-characters"]||[]).push([[0],{21:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){},49:function(e,t,c){},50:function(e,t,c){},69:function(e,t,c){},74:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c(19),s=c.n(n),i=(c(39),c(21),c(40),c(9)),r=c.p+"static/media/logo.5e14ad59.png",l="https://api.genshin.dev/characters",o="genshin",j=[{to:"/".concat(o,"/game"),exact:!1,className:"header__li",text:"Games"},{to:"/".concat(o,"/characters"),exact:!1,className:"header__li",text:"Characters"},{to:"/".concat(o,"/news"),exact:!1,className:"header__li",text:"News"},{to:"/".concat(o,"/weapons"),exact:!1,className:"header__li",text:"Weapons"},{to:"/".concat(o,"/artifacts"),exact:!1,className:"header__li",text:"Artifacts"},{to:"/".concat(o,"/map"),exact:!0,className:"header__li",text:"map"},{to:"/".concat(o,"/gift"),exact:!0,className:"header__li",text:"gift"}],d=c(0);var u=function(){return Object(d.jsxs)("ul",{children:[Object(d.jsx)(i.b,{to:"/".concat(o,"/"),exact:!0,className:"header__li",children:Object(d.jsx)("img",{alt:"logo",src:r})}),j.map((function(e,t){return Object(d.jsx)(i.b,{to:e.to,className:e.className,exact:e.exact,children:e.text},t)}))]})},h=(c(49),c.p+"static/media/full-logo.ad7ab723.png"),b=function(){return Object(d.jsx)("div",{className:"row",children:Object(d.jsxs)("div",{className:"col footer",children:[Object(d.jsx)("img",{className:"footer__logo",src:h,alt:"logo"}),Object(d.jsxs)("p",{children:["This web is made by LTM, based on Genshin API of"," ",Object(d.jsx)("u",{children:"genshin.dev"})]})]})})},m=c(10),x=c.p+"static/media/undeveloped.bc2e111e.gif",O=(c(50),function(){return Object(d.jsxs)("div",{className:"undeveloped",children:[Object(d.jsx)("div",{className:"row",children:Object(d.jsx)("div",{className:"col",children:Object(d.jsx)("li",{className:"undeveloped-notice",children:"T\xednh n\u0103ng n\xe0y \u0111ang \u0111\u01b0\u1ee3c ph\xe1t tri\u1ec3n"})})}),Object(d.jsx)("div",{className:"row",children:Object(d.jsx)("div",{className:"col",children:Object(d.jsx)("img",{className:"undeveloped-img my-auto mx-auto d-block",src:x,alt:"undeveloped"})})})]})}),f=function(){return Object(d.jsx)("div",{children:Object(d.jsx)("p",{children:"Trang ch\u1ee7"})})};var p=function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h4",{className:"small-title",children:"Choose your"}),Object(d.jsx)("span",{className:"big-title",children:"Character"}),Object(d.jsx)("p",{className:"decs-title",children:"With more than 40 characters, you\u2019ll find the perfect match for your playstyle. Master one, or master them all."})]})},g=c(8);var v=function(e){var t=e.name,c=e.children;return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:"col item",children:Object(d.jsx)(i.b,{to:"/".concat(o,"/characters/").concat(t),children:Object(d.jsxs)("div",{className:"item__container",children:[c,Object(d.jsx)("div",{className:"item__text",children:Object(d.jsx)("span",{children:t})})]})})})})},N=c(33),_=c.n(N),w=function(e,t,c,a){return _()({method:c,url:"".concat(e,"/").concat(t),data:a})},y=(c(68),c.p+"static/media/loading.5e01ee79.gif");var S=function(){var e=Object(a.useState)(null),t=Object(g.a)(e,2),c=t[0],n=t[1];Object(a.useEffect)((function(){w(l,"","GET",null).then((function(e){n(e.data)}))}),[]);var s=Object(a.useState)(null),i=Object(g.a)(s,2),r=i[0],o=i[1],j=Object(a.useState)(!0),u=Object(g.a)(j,2),h=u[0],b=u[1];return function(){if(c&&!r){var e=c.map((function(e,t){return Object(d.jsx)(v,{name:e,children:Object(d.jsx)("img",{onLoad:function(){t===c.length-1&&b(!1)},alt:"".concat(e,"-card"),src:"".concat(l,"/").concat(e,"/card")})},t)})).reduce((function(e,t,c){return c%5===0&&e.push([]),e[e.length-1].push(t),e}),[]).map((function(e,t){return Object(d.jsx)("div",{className:"row",children:e},t)}));o(e)}}(),Object(d.jsxs)("div",{className:"row",style:{width:"90%",margin:"0 auto"},children:[Object(d.jsx)("div",{className:"col ".concat(h?"":"hidden"),children:Object(d.jsx)("img",{className:"loading",src:y,alt:"loading"})}),Object(d.jsx)("div",{className:"".concat(h?"hidden":""),children:r})]})};c(69);var T=function(){return Object(d.jsxs)("div",{className:"content",children:[Object(d.jsx)(p,{}),Object(d.jsx)(S,{})]})},C=(c(70),c.p,c.p,c.p,c(34)),F=function(){var e=Object(m.f)().params.name,t=Object(a.useState)(null),c=Object(g.a)(t,2),n=c[0],s=c[1],i=Object(a.useState)(!0),r=Object(g.a)(i,2),o=(r[0],r[1]),j=Object(a.useState)(null),u=Object(g.a)(j,2),h=(u[0],u[1],Object(a.useState)(0)),b=Object(g.a)(h,2),x=b[0],O=(b[1],Object(a.useState)(0)),f=Object(g.a)(O,2);f[0],f[1];Object(C.useEffect)((function(){w(l,e,"GET",null).then((function(e){e.status>=200&&e.status<=299&&(o(!1),window.scrollTo(0,0),s(e.data))}))}),[]),console.log(n),console.log("active: "+x);return Object(d.jsx)("div",{children:"Hello, this is character info"})},E=[{path:"/".concat(o,"/"),exact:!0,main:function(){return Object(d.jsx)(f,{})}},{path:"/".concat(o,"/characters"),exact:!0,main:function(){return Object(d.jsx)(T,{})}},{path:"/".concat(o,"/characters/:name"),exact:!0,main:function(){return Object(d.jsx)(F,{})}},{path:"",exact:!1,main:function(){return Object(d.jsx)(O,{})}}];var G=function(){return Object(d.jsx)(i.a,{children:Object(d.jsxs)("div",{id:"App",children:[Object(d.jsx)(u,{}),Object(d.jsx)(m.c,{children:E.map((function(e,t){return Object(d.jsx)(m.a,{path:e.path,exact:e.exact,component:e.main},t)}))}),Object(d.jsx)(b,{})]})})},L=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,75)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),a(e),n(e),s(e),i(e)}))};c(73);s.a.render(Object(d.jsx)(G,{}),document.getElementById("root")),L()}},[[74,1,2]]]);
//# sourceMappingURL=main.a6808b6b.chunk.js.map