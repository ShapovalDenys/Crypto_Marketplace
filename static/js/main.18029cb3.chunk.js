(this["webpackJsonpreact_phone-catalog"]=this["webpackJsonpreact_phone-catalog"]||[]).push([[0],{38:function(e,a,t){e.exports=t(79)},47:function(e,a,t){},48:function(e,a,t){},49:function(e,a,t){},51:function(e,a,t){},52:function(e,a,t){},53:function(e,a,t){},71:function(e,a,t){},72:function(e,a,t){},74:function(e,a,t){},75:function(e,a,t){},76:function(e,a,t){},77:function(e,a,t){},78:function(e,a,t){},79:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),s=t(4),i=t(16),r=t.n(i),l=t(11),o=t(25),u=t(18),m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{type:"LOGIN",response:e}},_=function(e){return e.response},p={response:{}},g=Object(u.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"LOGIN":return Object(o.a)(Object(o.a)({},e),{},{response:a.response});default:return e}})),d=(t(47),t(1)),E=(t(48),t(49),function(){var e=Object(n.useState)(!1),a=Object(d.a)(e,2),t=a[0],i=a[1];return c.a.createElement("header",{className:"header"},c.a.createElement("div",{className:"header-wrap"},c.a.createElement("nav",{className:"nav"},c.a.createElement("ul",{className:"nav-list"},c.a.createElement("li",null,c.a.createElement(s.b,{to:"/",className:"nav__link-logo"},c.a.createElement("img",{src:"./img/wallet.svg",alt:"wallet"}),"CryptoWallet")),c.a.createElement("li",null,c.a.createElement(s.b,{to:"/dashboard",className:"nav__link"},"Dashboard")),c.a.createElement("li",null,c.a.createElement(s.b,{to:"/market",className:"nav__link"},"Market")),c.a.createElement("li",null,c.a.createElement(s.b,{to:"/trends",className:"nav__link"},"Trends")))),c.a.createElement("div",{className:"user-menu"},c.a.createElement(s.b,{to:"/login",className:"user-menu__link"},c.a.createElement("img",{className:"user-menu__img",src:"./img/user.svg",alt:"user"})),c.a.createElement("div",{className:"user-menu__mobile-menu"},c.a.createElement("button",{className:t?"hamburger hamburger--squeeze is-active":"hamburger hamburger--squeeze",type:"button",onClick:function(){return i(!t)}},c.a.createElement("span",{className:"hamburger-box"},c.a.createElement("span",{className:"hamburger-inner"})))))),c.a.createElement("div",{className:t?"mobile mobile__active":"mobile"},c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement(s.b,{to:"/dashboard",className:"mobile__link"},"Dashboard")),c.a.createElement("li",null,c.a.createElement(s.b,{to:"/market",className:"mobile__link"},"Market")),c.a.createElement("li",null,c.a.createElement(s.b,{to:"/trends",className:"mobile__link"},"Trends")))))}),b=t(3),f=(t(51),t(52),t(53),t(12)),h=t(10),O=t.n(h),v=(t(71),function(e){var a=e.item,t=e.currentId,s=e.setCurrentId,i=e.expandAll,r=e.currentDate,l=Object(n.useState)(""),o=Object(d.a)(l,2),u=o[0],m=o[1],_=Object(n.useState)(""),p=Object(d.a)(_,2),g=p[0],E=p[1],b=Object(n.useState)(a),f=Object(d.a)(b,2),h=f[0],v=f[1],N=Object(n.useState)(!1),j=Object(d.a)(N,2),k=j[0],y=j[1],S=function(e){i&&y(!k),function(e){s(e===t?"0":e)}(e)};return Object(n.useEffect)((function(){!1===i&&y(!1)}),[i]),c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"active"===h.account_status?"operations__transaction":"operations__transaction operations__transaction-disabled",onClick:function(){return S(a.account_id)}},c.a.createElement("span",null,h.account_name),c.a.createElement("span",null,h.account_id),c.a.createElement("span",null,h.account_status),c.a.createElement("span",null,h.account_spent),c.a.createElement("span",null,h.account_dis_reason),c.a.createElement("span",null,h.account_currency)),!1===k&&c.a.createElement(c.a.Fragment,null,(t===h.account_id||!0===i)&&c.a.createElement("div",{className:"account-info"},c.a.createElement("h3",null,"Account information: ",h.account_name),c.a.createElement("div",{className:"account-info__inner"},c.a.createElement("div",null,c.a.createElement("span",null,"Campaign_num : ",h.statistics[0].campaign_num),c.a.createElement("span",null,"Campaign_name : ",h.statistics[0].campaign_name),c.a.createElement("span",null,"Campaign_impressions : ",h.statistics[0].campaign_impressions),c.a.createElement("span",null,"Campaign_spent : ",h.statistics[0].campaign_spent),c.a.createElement("span",null,"Campaign_frequency : ",h.statistics[0].campaign_frequency),c.a.createElement("span",null,"Campaign_clicks : ",h.statistics[0].campaign_clicks),c.a.createElement("span",null,"Campaign_unique_clicks : ",h.statistics[0].campaign_unique_clicks),c.a.createElement("span",null,"Campaign_ctr : ",h.statistics[0].campaign_ctr),c.a.createElement("span",null,"Campaign_unique_ctr : ",h.statistics[0].campaign_unique_ctr),c.a.createElement("span",null,"Campaign_inline_clicks : ",h.statistics[0].campaign_inline_clicks),c.a.createElement("span",null,"Campaign_inline_clicks_ctr : ",h.statistics[0].campaign_inline_clicks_ctr)),c.a.createElement("div",null,c.a.createElement("div",null,c.a.createElement("span",null,"Account_name : ",h.account_name),c.a.createElement("span",null,"Account_id : ",h.account_id),c.a.createElement("span",null,"Account_spent: ",h.account_spent),c.a.createElement("span",null,"Account_dis_reason: ",h.account_dis_reason),c.a.createElement("span",null,"Account_currency: ",h.account_currency),c.a.createElement("span",null,"Account_card: ",h.account_card),c.a.createElement("div",{className:"account-info__span"},c.a.createElement("span",null,"Account_status:"),c.a.createElement("span",{className:"disable"===h.account_status?"account-info__disable":"account-info__active"},h.account_status))),c.a.createElement("form",{className:"operations__form operations__form-item"},c.a.createElement("div",null,c.a.createElement("label",{className:"operations__form-label",htmlFor:"date"},"DATE FROM: "),c.a.createElement("input",{className:"operations__form-input",value:h.statistics[0].date_range[0].date_start.split("-").reverse().join("-"),type:"date",id:"date",name:"date",max:r,onChange:function(e){return E(e.target.value)}})),c.a.createElement("div",null,c.a.createElement("label",{className:"operations__form-label",htmlFor:"date"},"DATE TO: "),c.a.createElement("input",{className:"operations__form-input",value:h.statistics[0].date_range[0].date_stop.split("-").reverse().join("-"),type:"date",id:"date",name:"date",max:r,onChange:function(e){return m(e.target.value)}})),c.a.createElement("button",{className:"operations__form-button operations__form-button-item",type:"submit",onClick:function(e){return function(e){e.preventDefault();var t=JSON.stringify({fromDateItem:g,toDateItem:u,id:a.account_id});console.log(t),O.a.post("/sendItem.php",t).then((function(e){console.log(e.json()),v(e.json())})).catch((function(e){console.log(e)}))}(e)}},"Select Data")))))))}),N=(t(72),function(){var e=Object(l.b)(),a=Object(l.c)(_),t=Object(n.useState)(""),i=Object(d.a)(t,2),r=i[0],o=i[1],u=Object(n.useState)(""),p=Object(d.a)(u,2),g=p[0],E=p[1],b=Object(n.useState)(!1),f=Object(d.a)(b,2),h=f[0],v=f[1],N=Object(n.useState)(JSON.parse(localStorage.getItem("Response"))||a),j=Object(d.a)(N,2),k=j[0],y=j[1],S=Object(n.useState)(!1),C=Object(d.a)(S,2),q=C[0],D=C[1],w=Object(n.useState)(!1),x=Object(d.a)(w,2),A=x[0],I=x[1];Object(n.useEffect)((function(){k.sessid?h?(localStorage.setItem("Response",JSON.stringify(k)),D(!1),I(!1)):(e(m(k)),D(!1),I(!1)):(D(A&&!0),I(!1))}),[k]);return k.sessid?c.a.createElement("div",{className:"login"},c.a.createElement("h2",{className:"login__article login__article-success"},"Login Success"),c.a.createElement("button",{onClick:function(){return localStorage.setItem("Response",JSON.stringify("")),y({}),void e(m({}))},className:"login__button login__button-logout"},"Logout")):c.a.createElement("form",{className:"login",onSubmit:function(e){return function(e){e.preventDefault(),I(!0);var a=JSON.stringify({login:r,password:g});O.a.post("/login.php",a).then((function(e){console.log(e.json()),y(e.json())})).catch((function(e){console.log(e),y({sessid:"test-test-test",login:"test"})}))}(e)}},c.a.createElement("h2",{className:"login__article"},"Login"),q&&c.a.createElement("span",{className:"login__error"},"Error LOGIN"),c.a.createElement("input",{onChange:function(e){return o(e.target.value)},className:"login__input",type:"login",placeholder:"Login",autoFocus:!0,required:!0}),c.a.createElement("input",{onChange:function(e){return E(e.target.value)},className:"login__input",type:"password",placeholder:"Password",required:!0}),c.a.createElement("div",{className:"login__inner"},c.a.createElement("div",null,c.a.createElement("input",{className:"login__checkbox",id:"check",type:"checkbox",value:h,onChange:function(){return v(!h)}}),c.a.createElement("label",{className:"login__checkbox",htmlFor:"check"}," Remember Me")),c.a.createElement(s.b,{to:"/registration",className:"login__registration-link"},"Registration")),c.a.createElement("button",{className:"login__button",type:"submit"},"Login"))}),j=[{account_name:"acc1",account_id:"1234567",account_status:"active",account_currency:"USD",account_spent:"12",account_card:"*1234 Mastercard",account_dis_reason:"something",statistics:[{campaign_num:1,campaign_name:"\u043c\u044b \u043f\u043e\u0442\u0440\u0430\u0442\u0438\u043b\u0438 \u0442\u0440\u0438 \u043b\u044f\u043c\u0430 \u043d\u0430 \u0445\u0435\u0440\u043d\u044e",campaign_impressions:123.22,campaign_spent:10,campaign_frequency:.12345,campaign_clicks:123,campaign_unique_clicks:98,campaign_ctr:1.11,campaign_unique_ctr:.11,campaign_inline_clicks:1.21,campaign_inline_clicks_ctr:1.01,date_range:[{date_start:"01-01-2020",date_stop:"01-01-2020"}]}]},{account_name:"acc2",account_id:"1234568",account_status:"active",account_currency:"USD",account_spent:"12",account_card:"*1234 Mastercard",account_dis_reason:"something",statistics:[{campaign_num:1,campaign_name:"\u043c\u044b \u043f\u043e\u0442\u0440\u0430\u0442\u0438\u043b\u0438 \u0442\u0440\u0438 \u043b\u044f\u043c\u0430 \u043d\u0430 \u0445\u0435\u0440\u043d\u044e",campaign_impressions:123.22,campaign_spent:10,campaign_frequency:.12345,campaign_clicks:123,campaign_unique_clicks:98,campaign_ctr:1.11,campaign_unique_ctr:.11,campaign_inline_clicks:1.21,campaign_inline_clicks_ctr:1.01,date_range:[{date_start:"01-01-2020",date_stop:"01-01-2020"}]}]},{account_name:"acc3",account_id:"1234569",account_status:"disable",account_currency:"USD",account_spent:"12",account_card:"*1234 Mastercard",account_dis_reason:"something",statistics:[{campaign_num:1,campaign_name:"\u043c\u044b \u043f\u043e\u0442\u0440\u0430\u0442\u0438\u043b\u0438 \u0442\u0440\u0438 \u043b\u044f\u043c\u0430 \u043d\u0430 \u0445\u0435\u0440\u043d\u044e",campaign_impressions:123.22,campaign_spent:10,campaign_frequency:.12345,campaign_clicks:123,campaign_unique_clicks:98,campaign_ctr:1.11,campaign_unique_ctr:.11,campaign_inline_clicks:1.21,campaign_inline_clicks_ctr:1.01,date_range:[{date_start:"01-01-2020",date_stop:"01-01-2020"}]}]},{account_name:"acc2",account_id:"12344568",account_status:"active",account_currency:"USD",account_spent:"12",account_card:"*1234 Mastercard",account_dis_reason:"something",statistics:[{campaign_num:1,campaign_name:"\u043c\u044b \u043f\u043e\u0442\u0440\u0430\u0442\u0438\u043b\u0438 \u0442\u0440\u0438 \u043b\u044f\u043c\u0430 \u043d\u0430 \u0445\u0435\u0440\u043d\u044e",campaign_impressions:123.22,campaign_spent:10,campaign_frequency:.12345,campaign_clicks:123,campaign_unique_clicks:98,campaign_ctr:1.11,campaign_unique_ctr:.11,campaign_inline_clicks:1.21,campaign_inline_clicks_ctr:1.01,date_range:[{date_start:"01-01-2020",date_stop:"01-01-2020"}]}]},{account_name:"acc2",account_id:"1245464568",account_status:"active",account_currency:"USD",account_spent:"12",account_card:"*1234 Mastercard",account_dis_reason:"something",statistics:[{campaign_num:1,campaign_name:"\u043c\u044b \u043f\u043e\u0442\u0440\u0430\u0442\u0438\u043b\u0438 \u0442\u0440\u0438 \u043b\u044f\u043c\u0430 \u043d\u0430 \u0445\u0435\u0440\u043d\u044e",campaign_impressions:123.22,campaign_spent:10,campaign_frequency:.12345,campaign_clicks:123,campaign_unique_clicks:98,campaign_ctr:1.11,campaign_unique_ctr:.11,campaign_inline_clicks:1.21,campaign_inline_clicks_ctr:1.01,date_range:[{date_start:"01-01-2020",date_stop:"01-01-2020"}]}]},{account_name:"acc2",account_id:"143456568",account_status:"disable",account_currency:"USD",account_spent:"12",account_card:"*1234 Mastercard",account_dis_reason:"something",statistics:[{campaign_num:1,campaign_name:"\u043c\u044b \u043f\u043e\u0442\u0440\u0430\u0442\u0438\u043b\u0438 \u0442\u0440\u0438 \u043b\u044f\u043c\u0430 \u043d\u0430 \u0445\u0435\u0440\u043d\u044e",campaign_impressions:123.22,campaign_spent:10,campaign_frequency:.12345,campaign_clicks:123,campaign_unique_clicks:98,campaign_ctr:1.11,campaign_unique_ctr:.11,campaign_inline_clicks:1.21,campaign_inline_clicks_ctr:1.01,date_range:[{date_start:"01-01-2020",date_stop:"01-01-2020"}]}]},{account_name:"acc2",account_id:"121455668",account_status:"active",account_currency:"USD",account_spent:"12",account_card:"*1234 Mastercard",account_dis_reason:"something",statistics:[{campaign_num:1,campaign_name:"\u043c\u044b \u043f\u043e\u0442\u0440\u0430\u0442\u0438\u043b\u0438 \u0442\u0440\u0438 \u043b\u044f\u043c\u0430 \u043d\u0430 \u0445\u0435\u0440\u043d\u044e",campaign_impressions:123.22,campaign_spent:10,campaign_frequency:.12345,campaign_clicks:123,campaign_unique_clicks:98,campaign_ctr:1.11,campaign_unique_ctr:.11,campaign_inline_clicks:1.21,campaign_inline_clicks_ctr:1.01,date_range:[{date_start:"01-01-2020",date_stop:"01-01-2020"}]}]},{account_name:"acc2",account_id:"1238564568",account_status:"active",account_currency:"USD",account_spent:"12",account_card:"*1234 Mastercard",account_dis_reason:"something",statistics:[{campaign_num:1,campaign_name:"\u043c\u044b \u043f\u043e\u0442\u0440\u0430\u0442\u0438\u043b\u0438 \u0442\u0440\u0438 \u043b\u044f\u043c\u0430 \u043d\u0430 \u0445\u0435\u0440\u043d\u044e",campaign_impressions:123.22,campaign_spent:10,campaign_frequency:.12345,campaign_clicks:123,campaign_unique_clicks:98,campaign_ctr:1.11,campaign_unique_ctr:.11,campaign_inline_clicks:1.21,campaign_inline_clicks_ctr:1.01,date_range:[{date_start:"01-01-2020",date_stop:"01-01-2020"}]}]}],k=function(){var e=Object(n.useState)(""),a=Object(d.a)(e,2),t=a[0],s=a[1],i=Object(n.useState)(""),r=Object(d.a)(i,2),o=r[0],u=r[1],m=Object(n.useState)(""),p=Object(d.a)(m,2),g=p[0],E=p[1],h=Object(n.useState)("-"),k=Object(d.a)(h,2),y=k[0],S=k[1],C=Object(n.useState)(j),q=Object(d.a)(C,2),D=q[0],w=q[1],x=Object(n.useState)(),A=Object(d.a)(x,2),I=A[0],M=A[1],F=Object(n.useState)(""),R=Object(d.a)(F,2),J=R[0],L=R[1],P=Object(n.useState)(!1),T=Object(d.a)(P,2),U=T[0],G=T[1],z=Object(n.useState)(!1),H=Object(d.a)(z,2),W=H[0],Y=H[1],B=(Object(b.g)(),Object(n.useState)(!1)),K=Object(d.a)(B,2),Q=K[0],V=K[1],X=Object(l.c)(_),Z=JSON.parse(localStorage.getItem("Response"));Object(n.useEffect)((function(){(null!==X&&X.hasOwnProperty("sessid")||null!==Z&&Z.hasOwnProperty("sessid"))&&V(!0)}),[X,Z]),Object(n.useEffect)((function(){var e=new Date,a=e.getDate(),t=e.getMonth()+1,n=e.getFullYear();E(n+"-"+"".concat(t>9?t:"0"+t)+"-"+"".concat(a>9?a:"0"+a)),(X.hasOwnProperty("sessid")||Z.hasOwnProperty("sessid"))&&V(!0);var c={};null!==X&&X.hasOwnProperty("sessid")&&(c=JSON.stringify(X)),null!==Z&&Z.hasOwnProperty("sessid")&&(c=JSON.stringify(Z)),O.a.post("/check.php",c).then((function(e){console.log(e.json()),e.json().check?V(!0):V(!1)})).catch((function(e){console.log(e)}))}),[]);var $=function(e){e.preventDefault();var a=JSON.stringify({fromDate:o,toDate:t,dataRange:y});O.a.post("/send.php",a).then((function(e){console.log(e.json()),w(e.json())})).catch((function(e){console.log(e)}))},ee=D;"status"===J&&(U&&(ee=Object(f.a)(D).sort((function(e,a){return e.account_status.localeCompare(a.account_status)}))),U||(ee=Object(f.a)(D).sort((function(e,a){return a.account_status.localeCompare(e.account_status)})))),"name"===J&&(U&&(ee=Object(f.a)(D).sort((function(e,a){return e.account_name.localeCompare(a.account_name)}))),U||(ee=Object(f.a)(D).sort((function(e,a){return a.account_name.localeCompare(e.account_name)})))),"id"===J&&(U&&(ee=Object(f.a)(D).sort((function(e,a){return e.account_id-a.account_id}))),U||(ee=Object(f.a)(D).sort((function(e,a){return a.account_id-e.account_id}))));var ae=function(e){"status"===e&&(L("status"),G(!U)),"name"===e&&(L("name"),G(!U)),"id"===e&&(L("id"),G(!U))};return Q?c.a.createElement("div",{className:"operations"},c.a.createElement("div",{className:"module__article"},c.a.createElement("h2",null,"Operations"),c.a.createElement("button",{className:"operations__form-button",onClick:function(){Y(!W),M("")},type:"button"},"Expand all")),c.a.createElement("form",{className:"operations__form"},c.a.createElement("div",null,c.a.createElement("label",{className:"operations__form-label",htmlFor:"date"},"DATE FROM: "),c.a.createElement("input",{className:"operations__form-input",type:"date",id:"date",name:"date",max:g,onChange:function(e){return u(e.target.value)}})),c.a.createElement("div",null,c.a.createElement("label",{className:"operations__form-label",htmlFor:"date"},"DATE TO: "),c.a.createElement("input",{className:"operations__form-input",type:"date",id:"date",name:"date",max:g,onChange:function(e){return s(e.target.value)}})),c.a.createElement("button",{className:"operations__form-button",type:"submit",onClick:function(e){return $(e)}},"Select Data")),c.a.createElement("form",{className:"operations__form"},c.a.createElement("div",null,c.a.createElement("label",{className:"operations__form-label",htmlFor:"date"},"RANGE: "),c.a.createElement("select",{onChange:function(e){return S(e.target.value)},className:"operations__form-input",type:"date",id:"date",name:"date"},c.a.createElement("option",null,"-"),c.a.createElement("option",null,"DAY"),c.a.createElement("option",null,"WEEK"),c.a.createElement("option",null,"MONTH"))),c.a.createElement("button",{className:"operations__form-button",type:"submit",onClick:function(e){return $(e)}},"Select Range")),c.a.createElement("div",{className:"balance__line"}),c.a.createElement("div",{className:"operations__transactions-title"},c.a.createElement("span",{id:"name",onClick:function(e){return ae(e.target.id)}},"Account Name"),c.a.createElement("span",{id:"id",onClick:function(e){return ae(e.target.id)}},"ID"),c.a.createElement("span",{id:"status",onClick:function(e){return ae(e.target.id)}},"\u0421\u0442\u0430\u0442\u0443\u0441"),c.a.createElement("span",null,"Spend total"),c.a.createElement("span",null,"Disable reason"),c.a.createElement("span",null,"Currency")),c.a.createElement("div",{className:"operations__transactions"},ee.map((function(e){return c.a.createElement(v,{key:e.account_name+e.account_id,item:e,currentId:I,setCurrentId:M,expandAll:W,currentDate:g})})))):c.a.createElement(N,null)},y=(t(24),t(37),t(74),t(75),t(76),t(77),function(){return c.a.createElement("div",{className:"homepage"},c.a.createElement("h2",null,"Home Page"))}),S=(t(78),function(){var e=Object(n.useState)(""),a=Object(d.a)(e,2),t=a[0],s=a[1],i=Object(n.useState)(""),r=Object(d.a)(i,2),l=r[0],o=r[1];return c.a.createElement("form",{className:"login",onSubmit:function(e){return function(e){e.preventDefault();var a=JSON.stringify({login:t,password:l});O.a.post("/registration.php",a).then((function(e){console.log(e.json())})).catch((function(e){console.log(e)}))}(e)}},c.a.createElement("h2",{className:"login__article"},"Registration"),c.a.createElement("input",{onChange:function(e){return s(e.target.value)},className:"login__input",type:"login",placeholder:"Login",autoFocus:!0,required:!0}),c.a.createElement("input",{onChange:function(e){return o(e.target.value)},className:"login__input",type:"password",placeholder:"Password",required:!0}),c.a.createElement("button",{className:"login__button",type:"submit"},"Registration"))}),C=function(){return c.a.createElement("section",{className:"module"},c.a.createElement(b.d,null,c.a.createElement(b.b,{path:"/",exact:!0,component:y}),c.a.createElement(b.b,{path:"/dashboard",exact:!0,component:k}),c.a.createElement(b.b,{path:"/market",exact:!0,component:k}),c.a.createElement(b.b,{path:"/trends",exact:!0,component:k}),c.a.createElement(b.b,{path:"/login",exact:!0,component:N}),c.a.createElement(b.b,{path:"/registration",exact:!0,component:S}),c.a.createElement(b.a,{to:"/"})))},q=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(E,null),c.a.createElement(C,null))};r.a.render(c.a.createElement(l.a,{store:g},c.a.createElement(s.a,null,c.a.createElement(q,null))),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.18029cb3.chunk.js.map