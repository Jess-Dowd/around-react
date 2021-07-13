(this["webpackJsonparound-react"]=this["webpackJsonparound-react"]||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var o=n(1),a=n.n(o),r=n(6),c=n.n(r),s=(n(14),n(9)),i=n(2),u=n.p+"static/media/logo.c7581985.svg",l=n(0);var p=function(e){return Object(l.jsx)("header",{className:"header",children:Object(l.jsx)("img",{src:u,className:"header__logo",alt:"Around The World"})})},d=a.a.createContext();var b=function(e){var t=a.a.useContext(d),n=e.card.owner._id===t._id,o="photo-grid__delete ".concat(n?"photo-grid__delete":"photo-grid__delete_hidden"),r=e.card.likes.some((function(e){return e._id===t._id})),c="photo-grid__heart ".concat(r&&"photo-grid__heart_clicked");return Object(l.jsxs)("article",{className:"photo-grid",children:[Object(l.jsx)("button",{type:"button","aria-label":"Card Delete Button",className:o,onClick:function(){e.onCardDelete(e.card)}}),Object(l.jsx)("img",{className:"photo-grid__photo",alt:"",src:e.card.link,onClick:function(){e.onCardClick(e.card)}}),Object(l.jsxs)("div",{className:"photo-grid__content",children:[Object(l.jsx)("h2",{className:"photo-grid__title",children:e.card.name}),Object(l.jsx)("button",{type:"button","aria-label":"Card Favorite Button",className:c,onClick:function(){e.onCardLike(e.card)},children:Object(l.jsx)("p",{className:"photo-grid__like-count",children:e.card.likes.length})})]})]})};var h=function(e){var t=a.a.useContext(d);return Object(l.jsxs)("main",{className:"main",children:[Object(l.jsxs)("section",{className:"profile",children:[Object(l.jsx)("button",{type:"button",className:"profile__image-button",onClick:e.onEditAvatar}),Object(l.jsx)("img",{className:"profile__image",src:t.avatar,alt:"My profile pic"}),Object(l.jsxs)("div",{className:"profile__text",children:[Object(l.jsx)("h1",{className:"profile__name",children:t.name}),Object(l.jsx)("p",{className:"profile__bio",children:t.about})]}),Object(l.jsx)("button",{className:"profile__text-button",type:"button","aria-label":"edit profile",onClick:e.onEditProfile}),Object(l.jsx)("button",{className:"profile__photo-button",type:"button","aria-label":"add photo",onClick:e.onAddCard})]}),Object(l.jsx)("section",{className:"grid-container",children:e.cards.map((function(t){return Object(l.jsx)(b,{card:t,onCardClick:e.onCardClick,onCardLike:e.onCardLike,onCardDelete:e.onCardDelete,onClose:e.onClose},t._id)}))})]})};var j=function(e){return Object(l.jsx)("footer",{className:"footer",children:Object(l.jsx)("p",{className:"footer__text",children:"\xa9 2020 Around The U.S."})})};var f=function(e){var t=e.card,n=e.onClose;return Object(l.jsx)("div",{className:"popup-box picture ".concat(t&&"popup-box_open"),children:Object(l.jsxs)("figure",{className:"popup-box__container popup-box__container_type_photo",children:[Object(l.jsx)("img",{className:"popup-box__image",src:t?t.link:"",alt:t?t.name:""}),Object(l.jsx)("button",{type:"button","aria-label":"Close Picture Button",className:"popup-box__exit popup-box__exit_preview",onClick:n}),Object(l.jsx)("figcaption",{className:"popup-box__caption",children:t&&t.name})]})})};var m=function(e){return Object(l.jsx)("div",{className:"popup-box popup-box_type_".concat(e.name," ").concat(e.isOpen&&"popup-box_open"),name:e.name,onSubmit:e.onSubmit,children:Object(l.jsxs)("form",{className:"popup-box__container popup-box__container_type_".concat(e.name),children:[Object(l.jsx)("button",{type:"button","aria-label":"Close Picture Button",className:"popup-box__exit ",onClick:e.onClose}),Object(l.jsx)("h2",{className:"popup-box__title",children:e.title}),e.children,Object(l.jsx)("button",{type:"submit",className:"popup-box__save",onClick:e.onClose,children:e.btnText})]})})};var _=function(e){var t=a.a.useContext(d);a.a.useEffect((function(){c(t.name),b(t.about)}),[t]);var n=a.a.useState(""),o=Object(i.a)(n,2),r=o[0],c=o[1],s=a.a.useState(""),u=Object(i.a)(s,2),p=u[0],b=u[1];return Object(l.jsx)(m,{name:"profile",title:"Edit Profile",isOpen:e.isOpen,btnText:"Save",onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onUpdateUser({name:r,about:p}),e.onClose()},children:Object(l.jsxs)("div",{className:"popup-box__input",children:[Object(l.jsx)("input",{id:"form-name",type:"text",name:"field1",className:"popup-box__text popup-box__text_type_name",placeholder:"name",required:!0,minLength:"2",maxLength:"40",value:r,onChange:function(e){c(e.target.value)}}),Object(l.jsx)("span",{id:"form-name-error",className:"popup-box__error"}),Object(l.jsx)("input",{id:"profile-text",type:"text",name:"field2",className:"popup-box__text popup-box__text_about",placeholder:"profession",required:!0,minLength:"2",maxLength:"200",value:p,onChange:function(e){b(e.target.value)}}),Object(l.jsx)("span",{id:"profile-text-error",className:"popup-box__error"})]})})};var x=function(e){var t=a.a.useContext(d),n=a.a.useRef();return Object(l.jsx)(m,{name:"form-pic",title:"Change userpic",isOpen:e.isOpen,btnText:"Save",onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onUpdateAvatar({avatar:n.current.value}),e.onClose(),n.current.value=null},children:Object(l.jsxs)("div",{className:"popup-box__input",children:[Object(l.jsx)("input",{ref:n,id:"form-name",name:"primary",className:"form__name popup-box__text popup-box__text_type_user-pic",type:"url",placeholder:t.avatar,required:!0}),Object(l.jsx)("span",{id:"form-name-error",className:"popup-box__error"})]})})};var O=function(e){var t=a.a.useState(""),n=Object(i.a)(t,2),o=n[0],r=n[1],c=a.a.useState(""),s=Object(i.a)(c,2),u=s[0],p=s[1];return Object(l.jsx)(m,{name:"card",title:"New place",isOpen:e.isOpen,btnText:"Create",onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onAddCard({name:o,link:u}),e.onClose()},children:Object(l.jsxs)("div",{className:"popup-box__input",children:[Object(l.jsx)("input",{id:"card-title",type:"text",name:"field1",className:"popup-box__text popup-box__text_type_card",placeholder:"Title",value:o,onChange:function(e){r(e.target.value)},required:!0,minLength:"1",maxLength:"30"}),Object(l.jsx)("span",{id:"card-title-error",className:"popup-box__error"}),Object(l.jsx)("input",{id:"card-url",type:"url",name:"field2",className:"popup-box__text popup-box__text_type_photo",placeholder:"Image Link",required:!0,value:u,onChange:function(e){p(e.target.value)}}),Object(l.jsx)("span",{id:"card-url-error",className:"popup-box__error"})]})})},C=n(7),v=n(8),g=new(function(){function e(t){Object(C.a)(this,e),this.options=t}return Object(v.a)(e,[{key:"getUserInfo",value:function(){return fetch("".concat(this.options.baseUrl,"/users/me"),{headers:this.options.headers}).then((function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.status))}))}},{key:"patchUserInfo",value:function(e){var t=e.name,n=e.about;return fetch("".concat(this.options.baseUrl,"/users/me"),{method:"PATCH",headers:this.options.headers,body:JSON.stringify({name:t,about:n})}).then((function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.status))}))}},{key:"patchUserPic",value:function(e){var t=e.avatar;return fetch("".concat(this.options.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this.options.headers,body:JSON.stringify({avatar:t})}).then((function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.status))}))}},{key:"getInitialCards",value:function(){return fetch("".concat(this.options.baseUrl,"/cards"),{headers:this.options.headers}).then((function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.status))}))}},{key:"addNewCard",value:function(e){var t=e.name,n=e.link;return fetch("".concat(this.options.baseUrl,"/cards"),{method:"POST",headers:this.options.headers,body:JSON.stringify({name:t,link:n})}).then((function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.status))}))}},{key:"deleteCard",value:function(e){return fetch("".concat(this.options.baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this.options.headers}).then((function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.status))}))}},{key:"likeCard",value:function(e,t){return t?fetch("".concat(this.options.baseUrl,"/cards/likes/").concat(e._id),{method:"DELETE",headers:this.options.headers}).then((function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.status))})):fetch("".concat(this.options.baseUrl,"/cards/likes/").concat(e._id),{method:"PUT",headers:this.options.headers}).then((function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.status))}))}}]),e}())({baseUrl:"https://around.nomoreparties.co/v1/group-10",headers:{authorization:"0ca829a7-d9ab-43f0-95f1-42176c6a1754","Content-Type":"application/json"}});var N=function(e){return Object(l.jsx)(m,{name:"Delete",title:"Are you sure?",isOpen:e.isOpen,btnText:"yes",onClose:e.onClose,onSubmit:function(t){t.preventDefault(),console.log({card:t.target}),e.onSubmit(),e.onClose()}})};var k=function(){var e=a.a.useState({}),t=Object(i.a)(e,2),n=t[0],o=t[1];a.a.useEffect((function(){g.getUserInfo().then((function(e){o(e)})).catch((function(e){console.log(e)}))}),[]);var r=a.a.useState(null),c=Object(i.a)(r,2),u=c[0],b=c[1],m=a.a.useState(!1),C=Object(i.a)(m,2),v=C[0],k=C[1],y=a.a.useState(!1),S=Object(i.a)(y,2),E=S[0],U=S[1],P=a.a.useState(!1),T=Object(i.a)(P,2),L=T[0],A=T[1],D=a.a.useState(!1),I=Object(i.a)(D,2),w=I[0],B=I[1];function q(){A(!1),k(!1),U(!1),B(!1),b(null)}var F=a.a.useState([]),J=Object(i.a)(F,2),H=J[0],M=J[1];function z(e){g.deleteCard(e._id).then((function(){var t=H.filter((function(t){return t._id!==e._id}));M(t)})).catch((function(e){console.log(e)}))}return a.a.useEffect((function(){g.getInitialCards().then((function(e){M(e)})).catch((function(e){console.log(e)}))}),[]),Object(l.jsx)("div",{className:"App body",children:Object(l.jsxs)(d.Provider,{value:n,children:[Object(l.jsx)(p,{}),Object(l.jsx)(h,{onEditProfile:function(){k(!0)},onAddCard:function(){U(!0)},onEditAvatar:function(){A(!0)},onCardClick:function(e){b(e)},onClose:q,cards:H,onCardLike:function(e){var t=e.likes.some((function(e){return e._id===n._id}));g.likeCard(e,t).then((function(t){var n=H.map((function(n){return n._id===e._id?t:n}));M(n)})).catch((function(e){console.log(e)}))},onCardDelete:function(){B(!0)}},z),Object(l.jsx)(j,{}),Object(l.jsx)(_,{isOpen:v,onClose:q,onUpdateUser:function(e){g.patchUserInfo(e).then((function(e){o(e),q()})).catch((function(e){console.log(e)}))}}),Object(l.jsx)(x,{isOpen:L,onClose:q,onUpdateAvatar:function(e){g.patchUserPic(e).then((function(e){o(e),q()})).catch((function(e){console.log(e)}))}}),Object(l.jsx)(O,{isOpen:E,onClose:q,onAddCard:function(e){g.addNewCard(e).then((function(e){var t=[].concat(Object(s.a)(H),[e]);M(t),q()})).catch((function(e){console.log(e)}))}}),Object(l.jsx)(N,{isOpen:w,onClose:q,onSubmit:z}),Object(l.jsx)(f,{card:u,onClose:q})]})})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,o=t.getFID,a=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),o(e),a(e),r(e),c(e)}))};c.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(k,{})}),document.getElementById("root")),y()}},[[16,1,2]]]);
//# sourceMappingURL=main.108f02fc.chunk.js.map