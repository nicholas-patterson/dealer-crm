(this["webpackJsonpdealer-crm"]=this["webpackJsonpdealer-crm"]||[]).push([[11],{165:function(e,a,t){"use strict";t.r(a);var r=t(1),n=t(12),s=t(0),l=t.n(s),m=t(8),o=t(9),c=t(15),i=t.n(c),d=t(23);function u(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?u(t,!0).forEach((function(a){Object(r.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(t).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}a.default=Object(m.b)((function(e){return{dealer:e.loginReducer.user.dealer_email,dealer_username:e.loginReducer.user.dealer_username,errors:e.loginReducer.error}}),{updateEmail:o.H,updatePassword:o.I,updateUsername:o.J,clearError:o.e})((function(e){var a=Object(s.useState)({dealer_username:e.dealer_username||"",dealer_password:""}),t=Object(n.a)(a,2),m=t[0],o=t[1],c=Object(s.useState)({dealer_email:e.dealer||"",dealer_password:""}),u=Object(n.a)(c,2),w=u[0],f=u[1],E=Object(s.useState)({curent_password:"",new_password:"",confirm_new_password:""}),_=Object(n.a)(E,2),b=_[0],N=_[1],v=function(e){o(p({},m,Object(r.a)({},e.target.name,e.target.value)))},g=function(e){f(p({},w,Object(r.a)({},e.target.name,e.target.value)))},h=function(e){N(p({},b,Object(r.a)({},e.target.name,e.target.value)))};return l.a.createElement(l.a.Fragment,null,l.a.createElement(d.Helmet,null,l.a.createElement("title",null,"Auto Acuity | Account")),e.errors?l.a.createElement(i.a,{title:e.errors,visibleTime:3e3}):null,l.a.createElement("div",null,l.a.createElement("h2",{className:"pi-title"},"My Details"),l.a.createElement("h4",{className:"pi-subtitle"},"Personal Information"),l.a.createElement("div",{className:"personal--information"},l.a.createElement("div",{className:"personal--information__desc"},l.a.createElement("p",null,"Review and update any personal information that you find necessary and then hit save.")),l.a.createElement("div",{className:"personal--information__form-section"},l.a.createElement("form",{className:"personal--information__fields",onSubmit:function(e){e.preventDefault(),o({dealer_password:""})}},l.a.createElement("div",{className:"pi-field"},l.a.createElement("input",{type:"text",name:"dealer_username",id:"username",autoComplete:"off",required:!0,className:"input-group",value:m.dealer_username,onChange:v}),l.a.createElement("label",{htmlFor:"inputField",className:"pi-label-name"},l.a.createElement("span",{className:"pi-content-name"},"Username"))),l.a.createElement("div",{className:"pi-field",id:"last_name_grid_column"},l.a.createElement("input",{type:"text",name:"dealer_password",id:"pass",autoComplete:"off",required:!0,className:"input-group",value:m.dealer_password,onChange:v}),l.a.createElement("label",{htmlFor:"inputField",className:"pi-label-name"},l.a.createElement("span",{className:"pi-content-name"},"Password"))),l.a.createElement("button",{type:"submit",onClick:function(){return e.updateUsername(m)},className:"pi-submitBtn"},"Save")))),l.a.createElement("h4",{className:"ea-subtitle"},"E-mail Address"),l.a.createElement("div",{className:"email--address__information"},l.a.createElement("div",{className:"email--address__desc"},l.a.createElement("p",null,"Review and update your email adress, Double check accuracy. Password must be used for validation.")),l.a.createElement("div",{className:"email--address__form-section"},l.a.createElement("form",{className:"email--address__fields",onSubmit:function(e){e.preventDefault(),f({dealer_password:""})}},l.a.createElement("div",{className:"ea-field"},l.a.createElement("input",{type:"email",name:"dealer_email",id:"email",className:"ea-group",autoComplete:"off",required:!0,value:w.dealer_email,onChange:g}),l.a.createElement("label",{htmlFor:"inputField",className:"ea-label-name"},l.a.createElement("span",{className:"ea-content-name"},"E-mail"))),l.a.createElement("div",{className:"ea-field"},l.a.createElement("input",{type:"password",name:"dealer_password",id:"password",className:"ea-group",autoComplete:"off",required:!0,value:w.dealer_password,onChange:g}),l.a.createElement("label",{htmlFor:"inputField",className:"ea-label-name"},l.a.createElement("span",{className:"ea-content-name"},"Password"))),l.a.createElement("button",{type:"submit",onClick:function(){return e.updateEmail(w)},className:"ea-submitBtn"},"Save")))),l.a.createElement("h4",{className:"pw-subtitle"},"Password"),l.a.createElement("div",{className:"password--information"},l.a.createElement("div",{className:"password--information__desc"},l.a.createElement("p",null,"To change password, enter your current password and then your new password; be sure to confirm your new password.")),l.a.createElement("div",{className:"password--information__form-section"},l.a.createElement("form",{onSubmit:function(a){a.preventDefault(),e.clearError(),N({current_password:"",new_password:"",confirm_new_password:""})},className:"password__information__fields"},l.a.createElement("div",{className:"pw-field"},l.a.createElement("input",{type:"password",name:"current_password",id:"current_password",className:"pw-group",autoComplete:"off",required:!0,value:b.current_password,onChange:h}),l.a.createElement("label",{htmlFor:"inputField",className:"pw-label-name"},l.a.createElement("span",{className:"pw-content-name"},"Current Password"))),l.a.createElement("div",{className:"pw-field"},l.a.createElement("input",{type:"password",name:"new_password",id:"new_password",className:"pw-group",autoComplete:"off",required:!0,value:b.new_password,onChange:h}),l.a.createElement("label",{htmlFor:"inputField",className:"pw-label-name"},l.a.createElement("span",{className:"pw-content-name"},"New Password"))),l.a.createElement("div",{className:"pw-field"},l.a.createElement("input",{type:"password",name:"confirm_new_password",id:"confirm_new_password",className:"pw-group",autoComplete:"off",required:!0,value:b.confirm_new_password,onChange:h}),l.a.createElement("label",{htmlFor:"inputField",className:"pw-label-name"},l.a.createElement("span",{className:"pw-content-name"}," Confirm Password"))),l.a.createElement("button",{onClick:function(){return e.updatePassword(b)},type:"submit",className:"pw-submitBtn"},"Save"))))))}))}}]);
//# sourceMappingURL=11.647f1424.chunk.js.map