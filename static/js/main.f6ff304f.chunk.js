(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{13:function(e,t,n){e.exports={contactForm:"Filter_contactForm__3eiWW",inputLabel:"Filter_inputLabel__2qhTC",input:"Filter_input__EwK-J"}},16:function(e,t,n){e.exports={mainTitle:"PhoneBook_mainTitle__xIEpA",title:"PhoneBook_title__2BEiw"}},21:function(e,t,n){e.exports={btn:"Button_btn__3-jHA"}},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var a,c=n(0),r=n.n(c),i=n(11),o=n.n(i),l=n(3),s=n(4),u=n(5),b=n(19),m=n.n(b),j=n(6),d=n(22),h=n(2),p=Object(s.b)("contact/Add"),O=Object(s.b)("contact/Delete"),f=Object(s.b)("contact/Filter"),v=Object(s.c)([{name:"David",number:"3235-43-21",id:"12"},{name:"Rony",number:"3235-43-51",id:"13"},{name:"Bob",number:"3235-43-81",id:"14"},{name:"Ivan",number:"3235-43-91",id:"15"},{name:"Jhon",number:"3235-43-51",id:"16"},{name:"Clark",number:"3235-43-21",id:"17"}],(a={},Object(j.a)(a,p,(function(e,t){var n=t.payload;return e.some((function(e){return e.name.toLowerCase()===n.name.toLowerCase()}))?(alert("".concat([n.name]," is already in contacts")),e):[].concat(Object(d.a)(e),[n])})),Object(j.a)(a,O,(function(e,t){var n=t.payload;return e.filter((function(e){return e.id!==n}))})),a)),x=Object(s.c)("",Object(j.a)({},f,(function(e,t){return t.payload}))),_=Object(h.b)({contacts:v,filter:x}),g={key:"phonebook",storage:m.a,whitelist:["contacts"]},y=Object(u.g)(g,_),w=Object(s.a)({reducer:y,middleware:function(e){return e({serializableCheck:{ignoredActions:[u.a,u.f,u.b,u.c,u.d,u.e]}})}}),C=Object(u.h)(w),N=n(20),k=n(17),F=n(21),L=n.n(F),B=n(1);function z(e){var t=e.type,n=e.name,a=e.clickOnBtn,c=e.id,r=e.children;return Object(B.jsxs)("button",{className:L.a.btn,type:t,onClick:a,id:c,children:[n,r]})}var A,E,P=n(7),M=n.n(P),q=n(36);function I(e){var t=Object(c.useState)(""),n=Object(k.a)(t,2),a=n[0],r=n[1],i=Object(c.useState)(""),o=Object(k.a)(i,2),s=o[0],u=o[1],b=Object(l.b)(),m=function(e){var t=e.target,n=t.name,a=t.value;switch(n){case"name":r(a);break;case"number":u(a);break;default:return}},j=function(){r(""),u("")};return Object(B.jsxs)("form",{onSubmit:function(e){e.preventDefault(),b(p({name:a,number:s,id:q.generate()})),j()},className:M.a.contactForm,children:[Object(B.jsxs)("label",{className:M.a.inputLabel,children:["Name",Object(B.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:a,onChange:m,className:M.a.input})]}),Object(B.jsxs)("label",{className:M.a.inputLabel,children:["Number",Object(B.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:s,onChange:m,className:M.a.input})]}),Object(B.jsx)(z,{name:"Add contact",type:"submit"})]})}var S=["title","titleId"];function T(){return(T=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function D(e,t){if(null==e)return{};var n,a,c=function(e,t){if(null==e)return{};var n,a,c={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function J(e,t){var n=e.title,a=e.titleId,r=D(e,S);return c.createElement("svg",T({xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 32 32",ref:t,"aria-labelledby":a},r),void 0===n?c.createElement("title",{id:a},"bin"):n?c.createElement("title",{id:a},n):null,A||(A=c.createElement("path",{d:"M4 10v20c0 1.1 0.9 2 2 2h18c1.1 0 2-0.9 2-2v-20h-22zM10 28h-2v-14h2v14zM14 28h-2v-14h2v14zM18 28h-2v-14h2v14zM22 28h-2v-14h2v14z"})),E||(E=c.createElement("path",{d:"M26.5 4h-6.5v-2.5c0-0.825-0.675-1.5-1.5-1.5h-7c-0.825 0-1.5 0.675-1.5 1.5v2.5h-6.5c-0.825 0-1.5 0.675-1.5 1.5v2.5h26v-2.5c0-0.825-0.675-1.5-1.5-1.5zM18 4h-6v-1.975h6v1.975z"})))}var Z=c.forwardRef(J),R=(n.p,n(9)),W=n.n(R);function H(e){var t=e.nameBtn,n=Object(l.b)(),a=Object(l.c)((function(e){return e.contacts})),c=Object(l.c)((function(e){return e.filter})),r=c?a.filter((function(e){return e.name.toLowerCase().includes(c)})):a;return Object(B.jsx)("ul",{className:W.a.list,children:r.map((function(e){return Object(B.jsxs)("li",{className:W.a.item,children:[Object(B.jsxs)("span",{className:W.a.itemName,children:[e.name,":"]}),Object(B.jsxs)("span",{className:W.a.itemPhone,children:[" ",e.number]}),Object(B.jsx)(z,{name:t,clickOnBtn:function(e){var t;e.preventDefault(),t=e.currentTarget.id,n(O(t))},id:e.id,children:Object(B.jsx)(Z,{width:"20",height:"20",fill:"rgb(71, 71, 71)"})})]},e.id)}))})}var K=n(13),Q=n.n(K);function V(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.filter}));return Object(B.jsx)("div",{className:Q.a.contactForm,children:Object(B.jsxs)("label",{className:Q.a.inputLabel,children:["Find contact by name",Object(B.jsx)("input",{className:Q.a.input,type:"text",value:t,onChange:function(t){return n=t.target.value,void e(f(n.toLowerCase()));var n},required:!0})]})})}var Y=n(16),$=n.n(Y);function G(){return Object(B.jsxs)("div",{children:[Object(B.jsx)("h1",{className:$.a.mainTitle,children:"Phonebook"}),Object(B.jsx)(I,{nameBtn:"Add contact"}),Object(B.jsx)("h2",{className:$.a.title,children:"Contacts"}),Object(B.jsx)(V,{}),Object(B.jsx)(H,{nameBtn:"Delete"})]})}n(45);var U=function(){return Object(B.jsx)("div",{className:"App",children:Object(B.jsx)(G,{})})};n(46);o.a.render(Object(B.jsx)(r.a.StrictMode,{children:Object(B.jsx)(l.a,{store:w,children:Object(B.jsx)(N.a,{loading:null,persistor:C,children:Object(B.jsx)(U,{})})})}),document.getElementById("root"))},7:function(e,t,n){e.exports={contactForm:"ContactForm_contactForm__3pPbp",inputLabel:"ContactForm_inputLabel__35F8V",input:"ContactForm_input__heqvu"}},9:function(e,t,n){e.exports={list:"ContactList_list__1j2T6",item:"ContactList_item__11nYB",itemName:"ContactList_itemName__3oQrq",itemPhone:"ContactList_itemPhone__2h_o9"}}},[[47,1,2]]]);
//# sourceMappingURL=main.f6ff304f.chunk.js.map