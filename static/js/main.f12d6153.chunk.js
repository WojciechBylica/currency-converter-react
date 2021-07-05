(this["webpackJsonpreact-currecy-conventer"]=this["webpackJsonpreact-currecy-conventer"]||[]).push([[0],{54:function(e,t,n){"use strict";n.r(t);var r,c,a,o,u,i,s,d,l,b,j,m,h,f,x=n(1),g=n.n(x),p=n(22),O=n.n(p),y=n(2),v=n(3),k=y.default.div(r||(r=Object(v.a)(["\n    margin: 0 auto;\n    max-width: 600px;\n"]))),w=n(0),z=function(e){var t=e.children;return Object(w.jsx)(k,{children:t})},C=y.default.h1(c||(c=Object(v.a)(["\n    text-align: center;\n    margin: 0;\n    padding: 16px;\n"]))),B=function(e){var t=e.title;return Object(w.jsx)("header",{children:Object(w.jsx)(C,{children:t})})},F=function(e){var t=e.children;return Object(w.jsx)("main",{children:t})},R=y.default.div(a||(a=Object(v.a)(["\n    display: flex;\n    justify-content: flex-end;\n    font-size: 12px;\n    font-family: monospace;\n"]))),S=n(5),D=function(){var e=function(){var e=Object(x.useState)(new Date),t=Object(S.a)(e,2),n=t[0],r=t[1];return Object(x.useEffect)((function(){var e=setInterval((function(){r(new Date)}),1e3);return function(){clearInterval(e)}}),[]),{currentDate:n,formatDate:function(e){return e.toLocaleDateString(void 0,{month:"long",weekday:"long",day:"numeric",year:"numeric",hour:"numeric",minute:"numeric",second:"numeric"})}}}(),t=e.currentDate,n=e.formatDate;return Object(w.jsxs)(R,{children:["Dzisiaj jest: ",n(t)]})},T=y.default.p(o||(o=Object(v.a)(["\n    text-align: center;\n    width: 100%;\n    border: ",";\n    border-radius: ",";\n    padding: 12px;\n    font-size: 16px;\n    margin: 0px 2px;\n    background-color: ",";\n    word-break: break-word;\n"])),(function(e){return e.theme.elementBorder}),(function(e){return e.theme.elementBorderRadius}),(function(e){return e.theme.backgroundColor.white})),P=function(e){var t=e.result;return!!t&&Object(w.jsxs)(T,{children:[t.amount," ",t.currencyFrom," to ",t.value.toFixed(2)," ",t.currencyTo]})},H=y.default.div(u||(u=Object(v.a)(["\n    display: flex;\n    margin: 10px 0;\n"]))),L=y.default.button(i||(i=Object(v.a)(["\n    margin: 0;\n    background-color: ",";\n    width: 100%;\n    border: ",";\n    border-radius: ",";\n    padding: 12px;\n    font-size: 16px;\n    box-shadow: 2px 2px 5px #1d1b1b;\n\n    &:hover {\n        background-color: ",";\n}\n    &:active {\n        background-color: ",";\n}\n"])),(function(e){return e.theme.backgroundColor.melrose}),(function(e){return e.theme.elementBorder}),(function(e){return e.theme.elementBorderRadius}),(function(e){return e.theme.backgroundColor.melroseHover}),(function(e){return e.theme.backgroundColor.melroseActive})),A=function(e){var t=e.hideRates,n=e.toggleHideRates;return Object(w.jsxs)(H,{children:[Object(w.jsx)(L,{children:"Przelicz waluty"}),Object(w.jsxs)(L,{onClick:n,type:"button",children:["".concat(!0===t?"Poka\u017c":"Ukryj")," Kursy"]})]})},I=y.default.form(s||(s=Object(v.a)(["\n    margin: 10px 0px;\n"]))),q=y.default.fieldset(d||(d=Object(v.a)(["\n    width: 100%;\n    border: ",";\n    border-radius: ",";\n    padding: 12px;\n    font-size: 16px;\n    background-color: ",";\n    box-shadow: 2px 2px 5px #1d1b1b;\n"])),(function(e){return e.theme.elementBorder}),(function(e){return e.theme.elementBorderRadius}),(function(e){return e.theme.backgroundColor.mystic})),N=y.default.select(l||(l=Object(v.a)(["\n    margin: 5px 0;\n    width: 100%;\n    padding: 5px;\n    border-radius: ",";\n    border: ",";\n    background-color: ",";\n\n    &:hover {\n        background-color: ",";\n    }\n"])),(function(e){return e.theme.elementBorderRadius}),(function(e){return e.theme.elementBorder}),(function(e){return e.theme.backgroundColor.melrose}),(function(e){return e.theme.backgroundColor.melroseHover})),W=Object(y.default)(N)(b||(b=Object(v.a)(["\n    background-color: ",";\n"])),(function(e){return e.theme.backgroundColor.white})),E=y.default.span(j||(j=Object(v.a)(["\n    border-radius: ",";\n    border: ",";\n    background-color: ",";\n"])),(function(e){return e.theme.elementBorderRadius}),(function(e){return e.theme.elementBorder}),(function(e){return e.theme.backgroundColor.melrose})),M=function(e){var t=e.dataFromNBP,n=function(){var e=Object(x.useState)(!0),t=Object(S.a)(e,2),n=t[0],r=t[1],c=Object(x.useState)(""),a=Object(S.a)(c,2),o=a[0],u=a[1],i=Object(x.useState)("35"),s=Object(S.a)(i,2),d=s[0],l=s[1],b=Object(x.useState)("1"),j=Object(S.a)(b,2),m=j[0],h=j[1],f=Object(x.useState)(),g=Object(S.a)(f,2),p=g[0];return{currencyFrom:d,currencyTo:m,setCurrencyFrom:l,setCurrencyTo:h,calculateResult:function(e,t,n){return+e*+t/+n},amount:o,setAmount:u,setResult:g[1],hideRates:n,toggleHideRates:function(){r((function(e){return!e}))},result:p}}(),r=n.currencyFrom,c=n.currencyTo,a=n.setCurrencyFrom,o=n.setCurrencyTo,u=n.calculateResult,i=n.amount,s=n.setAmount,d=n.setResult,l=n.hideRates,b=n.toggleHideRates,j=n.result;return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsxs)(R,{children:[" Aktualizacja kurs\xf3w: ",t.date]}),Object(w.jsx)(R,{children:t.table}),Object(w.jsxs)(I,{onSubmit:function(e){e.preventDefault();var n=+t.rates[r].mid,a=+t.rates[c].mid,o=u(i,n,a);d({amount:i,currencyFrom:t.rates[r].code,value:o,currencyTo:t.rates[c].code}),s("")},children:[Object(w.jsxs)(q,{children:[Object(w.jsxs)("label",{children:["Wybierz walut\u0119 do przeliczenia:",Object(w.jsx)(N,{value:r,onChange:function(e){var t=e.target;return a(t.value)},name:"currencyFrom",required:!0,children:Object.keys(t.rates).map((function(e){return Object(w.jsxs)("option",{value:e,children:[t.rates[e].code," ",t.rates[e].currency]},e)}))})]}),Object(w.jsxs)("label",{children:["Wybierz walut\u0119 docelow\u0105:",Object(w.jsx)(N,{value:c,onChange:function(e){var t=e.target;return o(t.value)},name:"currencyTo",required:!0,children:Object.keys(t.rates).map((function(e){return Object(w.jsxs)("option",{value:e,children:[t.rates[e].code," ",t.rates[e].currency]},e)}))})]}),Object(w.jsxs)("label",{children:["Wpisz kwot\u0119:",Object(w.jsx)(W,{as:"input",value:i,onChange:function(e){var t=e.target;return s(t.value)},type:"number",min:"0.01",required:!0,step:"0.01"})]})]}),Object(w.jsx)(A,{hideRates:l,toggleHideRates:b}),Object(w.jsx)(P,{result:j,amount:i}),!l&&Object(w.jsxs)(q,{children:[Object(w.jsx)("legend",{children:Object(w.jsx)(E,{children:"Kursy walut"})}),Object.keys(t.rates).map((function(e){return Object(w.jsxs)("label",{children:[t.rates[e].code," ",t.rates[e].currency,Object(w.jsx)(W,{as:"p",children:t.rates[e].mid},t.rates[0].currency)]})}))]})]})]})},G=y.default.p(m||(m=Object(v.a)(["\n    text-align: center;\n    font-size: 10px;\n    background: white;\n"]))),J=function(){return Object(w.jsx)(G,{children:"Designed by Wojciech Bylica Arts"})},K=y.default.div(h||(h=Object(v.a)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n"]))),_=y.default.img(f||(f=Object(v.a)(["\n    max-width: 75%;\n"]))),U=function(e){var t=e.body,n=e.source,r=e.alt;return Object(w.jsx)(w.Fragment,{children:Object(w.jsxs)(K,{children:[Object(w.jsx)("p",{children:t}),Object(w.jsx)(_,{src:n,alt:r})]})})},Q=n(11),V=n.n(Q),X=n(29),Y=n(26),Z=n(27),$=n.n(Z),ee=n.p+"static/media/imageLoader.b543d30c.gif",te=n.p+"static/media/image.761c5393.png";var ne,re=function(){var e=function(){var e=Object(x.useState)({date:null,table:null,rates:null,status:"loading"}),t=Object(S.a)(e,2),n=t[0],r=t[1];return Object(x.useEffect)((function(){setTimeout(function(){var e=Object(Y.a)(V.a.mark((function e(){var t,n,c;return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,$.a.get("http://api.nbp.pl/api/exchangerates/tables/a/");case 3:t=e.sent,n=t.data[0].rates,c=[].concat(Object(X.a)(n),[{code:"PLN",currency:"polski z\u0142oty",mid:1}]),r({date:t.data[0].effectiveDate,table:t.data[0].no,rates:c,status:"success"}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),r({status:"error"});case 12:case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),2e3)}),[]),n}();return Object(w.jsx)(w.Fragment,{children:Object(w.jsxs)(z,{children:[Object(w.jsx)(B,{title:"Przelicznik walut"}),"loading"===e.status&&Object(w.jsx)(U,{body:"\u0141aduj\u0119 kursy walut z Narodowego Banku Polskiego...",source:ee,alt:"imageLoader"}),"error"===e.status&&Object(w.jsx)(U,{body:"Co\u015b posz\u0142o nie tak... Sprawd\u017a po\u0142\u0105czenie z internetem i spr\xf3buj ponownie!",source:te,alt:"image"}),"success"===e.status&&Object(w.jsxs)(w.Fragment,{children:[Object(w.jsxs)(F,{children:[Object(w.jsx)(D,{}),Object(w.jsx)(M,{dataFromNBP:e})]}),Object(w.jsx)(J,{})]})]})})},ce=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,55)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),r(e),c(e),a(e),o(e)}))},ae=n(28),oe=Object(y.createGlobalStyle)(ne||(ne=Object(v.a)(["\n\n","\n\nhtml {\n  box-sizing: border-box;\n}\n\n*, ::after, ::before {\n  box-sizing: inherit;\n}\n\nbody {\n  background-repeat: no-repeat;\n  background-position: top; \n  background-color: ",";\n  font-family: 'Libre Franklin', sans-serif;\n  padding: 10px;\n  font-size: 16px;\n}\n"])),ae.normalize,(function(e){return e.theme.backgroundColor.melrose}));O.a.render(Object(w.jsx)(g.a.StrictMode,{children:Object(w.jsxs)(y.ThemeProvider,{theme:{backgroundColor:{melrose:"hsl(230deg 98% 85%)",melroseHover:"hsl(230deg 98% 80%)",melroseActive:"hsl(230deg 98% 75%)",white:"white",mystic:"rgb(231 239 239 / 75%)"},Body:{bodyBackgroundImage:'url("https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Money-2180330_1920.jpg/1024px-Money-2180330_1920.jpg")',quillGray:"#e5e5e3"},elementBorder:"1px solid grey",elementBorderRadius:"3px"},children:[Object(w.jsx)(oe,{}),Object(w.jsx)(re,{})]})}),document.getElementById("root")),ce()}},[[54,1,2]]]);
//# sourceMappingURL=main.f12d6153.chunk.js.map