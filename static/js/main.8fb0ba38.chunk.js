(this["webpackJsonpreact-currecy-conventer"]=this["webpackJsonpreact-currecy-conventer"]||[]).push([[0],{21:function(e,n,t){"use strict";t.r(n);var r,o,c,u,a,i,d,l,s,b,m,j,g=t(1),f=t.n(g),h=t(9),x=t.n(h),O=t(2),p=t(3),k=O.default.div(r||(r=Object(p.a)(["\n    margin: 0 auto;\n    max-width: 800px;\n"]))),v=t(0),y=function(e){var n=e.children;return Object(v.jsx)(k,{children:n})},B=O.default.h1(o||(o=Object(p.a)(["\n    text-align: center;\n    margin: 0;\n    padding: 16px;\n"]))),C=function(e){var n=e.title;return Object(v.jsx)("header",{children:Object(v.jsx)(B,{children:n})})},E=function(e){var n=e.children;return Object(v.jsx)("main",{children:n})},w=O.default.div(c||(c=Object(p.a)(["\n    display: flex;\n    justify-content: flex-end;\n    font-size: 12px;\n    font-family: monospace;\n"]))),R=t(4),z=function(){var e=function(){var e=Object(g.useState)(new Date),n=Object(R.a)(e,2),t=n[0],r=n[1];return Object(g.useEffect)((function(){var e=setInterval((function(){r(new Date)}),1e3);return function(){clearInterval(e)}}),[]),{currentDate:t,formatDate:function(e){return e.toLocaleDateString(void 0,{month:"long",weekday:"long",day:"numeric",year:"numeric",hour:"numeric",minute:"numeric",second:"numeric"})}}}(),n=e.currentDate,t=e.formatDate;return Object(v.jsx)(w,{children:t(n)})},S=O.default.p(u||(u=Object(p.a)(["\n    text-align: center;\n    width: 100%;\n    border: ",";\n    border-radius: ",";\n    padding: 12px;\n    font-size: 16px;\n    margin: 0px 2px;\n    background-color: ",";\n    word-break: break-word;\n"])),(function(e){return e.theme.ElementBorder}),(function(e){return e.theme.ElementBorderRadius}),(function(e){return e.theme.BackgroundColor.ElementBackgroundColorSecondary})),F=function(e){var n=e.result;return!!n&&Object(v.jsxs)(S,{children:[n.amount," ",n.currencyFrom," to ",n.value.toFixed(2)," ",n.currencyTo]})},D=O.default.div(a||(a=Object(p.a)(["\n    display: flex;\n    margin: 10px 0;\n"]))),T=O.default.button(i||(i=Object(p.a)(["\n    margin: 0;\n    background-color: ",";\n    width: 100%;\n    border: ",";\n    border-radius: ",";\n    padding: 12px;\n    font-size: 16px;\n\n    &:hover {\n        background-color: ",";\n}\n    &:active {\n        background-color: ",";\n}\n"])),(function(e){return e.theme.BackgroundColor.ElementBackgroundColor}),(function(e){return e.theme.ElementBorder}),(function(e){return e.theme.ElementBorderRadius}),(function(e){return e.theme.BackgroundColor.ElementBackgroundColorHover}),(function(e){return e.theme.BackgroundColor.ElementBackgroundColorActive})),P=function(e){var n=e.hideRates,t=e.toggleHideRates;return Object(v.jsxs)(D,{children:[Object(v.jsx)(T,{children:"Przelicz waluty"}),Object(v.jsxs)(T,{onClick:t,type:"button",children:["".concat(!0===n?"Poka\u017c":"Ukryj")," Kursy"]})]})},H=[{id:"PLN",name:"PLN",value:1},{id:"EUR",name:"EUR",value:4.45},{id:"USD",name:"USD",value:4.2},{id:"RUB",name:"RUB",value:.2}],U=O.default.form(d||(d=Object(p.a)(["\n    margin: 10px 0px;\n"]))),I=O.default.fieldset(l||(l=Object(p.a)(["\n    width: 100%;\n    border: ",";\n    border-radius: ",";\n    padding: 12px;\n    font-size: 16px;\n    background-color: rgb(231 239 239 / 75%);\n"])),(function(e){return e.theme.ElementBorder}),(function(e){return e.theme.ElementBorderRadius})),L=O.default.select(s||(s=Object(p.a)(["\n    margin: 5px 0;\n    width: 100%;\n    padding: 5px;\n    border-radius: ",";\n    border: ",";\n    background-color: ",";\n\n    &:hover {\n        background-color: ",";\n    }\n"])),(function(e){return e.theme.ElementBorderRadius}),(function(e){return e.theme.ElementBorder}),(function(e){return e.theme.BackgroundColor.ElementBackgroundColor}),(function(e){return e.theme.BackgroundColor.ElementBackgroundColorHover})),A=Object(O.default)(L)(b||(b=Object(p.a)(["\n    background-color: ",";\n"])),(function(e){return e.theme.BackgroundColor.ElementBackgroundColorSecondary})),W=O.default.span(m||(m=Object(p.a)(["\n    border-radius: ",";\n    border: ",";\n    background-color: ",";\n"])),(function(e){return e.theme.ElementBorderRadius}),(function(e){return e.theme.ElementBorder}),(function(e){return e.theme.BackgroundColor.ElementBackgroundColor})),q=function(){var e=function(){var e=Object(g.useState)(!0),n=Object(R.a)(e,2),t=n[0],r=n[1],o=Object(g.useState)(""),c=Object(R.a)(o,2),u=c[0],a=c[1],i=Object(g.useState)(H[0].name),d=Object(R.a)(i,2),l=d[0],s=d[1],b=Object(g.useState)(H[1].name),m=Object(R.a)(b,2),j=m[0],f=m[1],h=Object(g.useState)(),x=Object(R.a)(h,2),O=x[0];return{currencyFrom:l,currencyTo:j,calculateResult:function(e,n,t){return+e*+n/+t},amount:u,setAmount:a,setResult:x[1],setCurrencyFrom:s,setCurrencyTo:f,hideRates:t,toggleHideRates:function(){r((function(e){return!e}))},result:O}}(),n=e.currencyFrom,t=e.currencyTo,r=e.calculateResult,o=e.amount,c=e.setAmount,u=e.setResult,a=e.setCurrencyFrom,i=e.setCurrencyTo,d=e.hideRates,l=e.toggleHideRates,s=e.result;return Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)(U,{onSubmit:function(e){e.preventDefault();var a=H.find((function(e){return e.name===n})),i=H.find((function(e){return e.name===t})),d=r(o,a.value,i.value);u({amount:o,currencyFrom:n,value:d,currencyTo:t}),c("")},children:[Object(v.jsxs)(I,{children:[Object(v.jsxs)("label",{children:["Wybierz walut\u0119 do przeliczenia:",Object(v.jsx)(L,{value:n,onChange:function(e){var n=e.target;return a(n.value)},name:"currencyFrom",required:!0,children:H.map((function(e){return Object(v.jsx)("option",{children:e.id},e.id)}))})]}),Object(v.jsxs)("label",{children:["Wybierz walut\u0119 docelow\u0105:",Object(v.jsx)(L,{value:t,onChange:function(e){var n=e.target;return i(n.value)},name:"currencyTo",required:!0,children:H.map((function(e){return Object(v.jsx)("option",{children:e.name},e.id)}))})]}),Object(v.jsxs)("label",{children:["Wpisz kwot\u0119:",Object(v.jsx)(A,{as:"input",value:o,onChange:function(e){var n=e.target;return c(n.value)},type:"number",min:"0.01",required:!0,step:"0.01"})]})]}),Object(v.jsx)(P,{hideRates:d,toggleHideRates:l}),Object(v.jsx)(F,{result:s,amount:o}),!d&&Object(v.jsxs)(I,{children:[Object(v.jsx)("legend",{children:Object(v.jsx)(W,{children:"Kursy walut"})}),H.slice(1).map((function(e){return Object(v.jsxs)("label",{children:[e.name,Object(v.jsx)(A,{as:"input",onChange:function(n){return e.value=n.target.value},type:"number",min:"0.01",step:"0.01",defaultValue:e.value},e.id)]})}))]})]})})},M=O.default.p(j||(j=Object(p.a)(["\n    text-align: center;\n    font-size: 10px;\n    background: white;\n"]))),J=function(){return Object(v.jsx)(M,{children:"Designed by Wojciech Bylica Arts"})};var K,N=function(){return Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)(y,{children:[Object(v.jsx)(C,{title:"Przelicznik walut"}),Object(v.jsxs)(E,{children:[Object(v.jsx)(z,{}),Object(v.jsx)(q,{})]}),Object(v.jsx)(J,{})]})})},_=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,22)).then((function(n){var t=n.getCLS,r=n.getFID,o=n.getFCP,c=n.getLCP,u=n.getTTFB;t(e),r(e),o(e),c(e),u(e)}))},G=t(13),V=Object(O.createGlobalStyle)(K||(K=Object(p.a)(["\n\n","\n\nhtml {\n  box-sizing: border-box;\n}\n\n*, ::after, ::before {\n  box-sizing: inherit;\n}\n\nbody {\n  background-color: ",";\n  background-image: ",";\n  background-repeat: no-repeat;\n  background-position: top;\n  font-family: 'Libre Franklin', sans-serif;\n  padding: 10px;\n  font-size: 16px;\n}\n"])),G.normalize,(function(e){return e.theme.Body.BodyBackgroundColor}),(function(e){return e.theme.Body.BodyBackgroundImage}));x.a.render(Object(v.jsx)(f.a.StrictMode,{children:Object(v.jsxs)(O.ThemeProvider,{theme:{BackgroundColor:{ElementBackgroundColor:"hsl(230deg 98% 85%)",ElementBackgroundColorHover:"hsl(230deg 98% 80%)",ElementBackgroundColorActive:"hsl(230deg 98% 75%)",ElementBackgroundColorSecondary:"white"},Body:{BodyBackgroundImage:'url("https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Money-2180330_1920.jpg/1024px-Money-2180330_1920.jpg")',BodyBackgroundColor:"#e5e5e3"},ElementBorder:"1px solid grey",ElementBorderRadius:"3px",breakpoint:{mobile:500}},children:[Object(v.jsx)(V,{}),Object(v.jsx)(N,{})]})}),document.getElementById("root")),_()}},[[21,1,2]]]);
//# sourceMappingURL=main.8fb0ba38.chunk.js.map