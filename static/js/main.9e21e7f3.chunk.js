(this["webpackJsonpreact-currecy-conventer"]=this["webpackJsonpreact-currecy-conventer"]||[]).push([[0],[,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(4),i=n.n(a),u=(n(9),n(2)),s=(n(10),n(0)),l=function(e){var t=e.children;return Object(s.jsx)("div",{className:"container",children:t})},o=(n(12),function(e){var t=e.title;return Object(s.jsx)("header",{children:Object(s.jsx)("h1",{className:"header",children:t})})}),j=function(e){var t=e.children;return Object(s.jsx)("main",{children:t})},d=(n(13),function(e){var t=e.date;return Object(s.jsx)("div",{className:"clock",children:t.toLocaleDateString(void 0,{month:"long",weekday:"long",day:"numeric",year:"numeric",hour:"numeric",minute:"numeric",second:"numeric"})})}),b=(n(14),function(e){var t=e.result;return!!t&&Object(s.jsxs)("p",{className:"form__results",children:[t.amount," ",t.currencyFrom," to ",t.value.toFixed(2)," ",t.currencyTo]})}),f=(n(15),function(e){var t=e.hideRates,n=e.toggleHideRates;return Object(s.jsxs)("div",{className:"buttons",children:[Object(s.jsx)("button",{className:"buttons__button",children:"Przelicz waluty"}),Object(s.jsxs)("button",{onClick:n,type:"button",className:"buttons__button",children:["".concat(!0===t?"Poka\u017c":"Ukryj")," Kursy"]})]})}),m=[{id:"PLN",name:"PLN",value:1},{id:"EUR",name:"EUR",value:4.45},{id:"USD",name:"USD",value:4.2},{id:"RUB",name:"RUB",value:.2}],h=function(e){var t=e.toggleHideRates,n=e.hideRates,r=Object(c.useState)(""),a=Object(u.a)(r,2),i=a[0],l=a[1],o=Object(c.useState)(m[0].name),j=Object(u.a)(o,2),d=j[0],h=j[1],O=Object(c.useState)(m[1].name),v=Object(u.a)(O,2),x=v[0],g=v[1],y=Object(c.useState)(),_=Object(u.a)(y,2),p=_[0],N=_[1];return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)("form",{className:"form",onSubmit:function(e){e.preventDefault();var t=m.find((function(e){return e.name===d})),n=m.find((function(e){return e.name===x})),c=function(e,t,n){return+e*+t/+n}(i,t.value,n.value);N({amount:i,currencyFrom:d,value:c,currencyTo:x}),l("")},children:[Object(s.jsxs)("fieldset",{className:"form__fieldset",children:[Object(s.jsxs)("label",{children:["Wybierz walut\u0119 do przeliczenia:",Object(s.jsx)("select",{value:d,onChange:function(e){var t=e.target;return h(t.value)},name:"currencyFrom",className:"form__field form__field--background",required:!0,children:m.map((function(e){return Object(s.jsx)("option",{children:e.id},e.id)}))})]}),Object(s.jsxs)("label",{children:["Wybierz walut\u0119 docelow\u0105:",Object(s.jsx)("select",{value:x,onChange:function(e){var t=e.target;return g(t.value)},name:"currencyTo",className:"form__field form__field--background",required:!0,children:m.map((function(e){return Object(s.jsx)("option",{children:e.name},e.id)}))})]}),Object(s.jsxs)("label",{children:["Wpisz kwot\u0119:",Object(s.jsx)("input",{value:i,onChange:function(e){var t=e.target;return l(t.value)},type:"number",className:"form__field",min:"0.01",required:!0,step:"0.01"})]})]}),Object(s.jsx)(f,{hideRates:n,toggleHideRates:t}),Object(s.jsx)(b,{result:p,amount:i}),Object(s.jsxs)("fieldset",{className:"form__fieldset ".concat(!0===n?"form__currency--hidden":""),children:[Object(s.jsx)("legend",{children:"Kursy walut"}),m.slice(1).map((function(e){return Object(s.jsxs)("label",{children:[e.name,Object(s.jsx)("input",{onChange:function(t){return e.value=t.target.value},type:"number",className:"form__field",min:"0.01",step:"0.01",defaultValue:e.value},e.id)]})}))]})]})})},O=(n(16),function(){return Object(s.jsx)("footer",{className:"footer",children:"Designed by Wojciech Bylica Arts"})});var v=function(){var e=Object(c.useState)(!0),t=Object(u.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(new Date),i=Object(u.a)(a,2),b=i[0],f=i[1];return Object(c.useEffect)((function(){var e=setInterval((function(){f(new Date)}),1e3);return function(){clearInterval(e)}}),[]),Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)(l,{children:[Object(s.jsx)(o,{title:"Przelicznik walut"}),Object(s.jsxs)(j,{children:[Object(s.jsx)(d,{date:b}),Object(s.jsx)(h,{hideRates:n,toggleHideRates:function(){r((function(e){return!e}))}})]}),Object(s.jsx)(O,{})]})})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),a(e),i(e)}))};i.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(v,{})}),document.getElementById("root")),x()}],[[17,1,2]]]);
//# sourceMappingURL=main.9e21e7f3.chunk.js.map