(this["webpackJsonpdealer-crm"]=this["webpackJsonpdealer-crm"]||[]).push([[8],{101:function(e,t){t.__esModule=!0,t.default={body:'<path d="M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 0 0 0-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 0 0 9.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3l-362.7 362.6l-88.9 15.7l15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z" fill="currentColor"/>',width:1024,height:1024}},102:function(e,t){t.__esModule=!0,t.default={body:'<path d="M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z" fill="currentColor"/>',width:1024,height:1024}},104:function(e,t,a){"use strict";function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}a.d(t,"a",(function(){return l}))},105:function(e,t,a){"use strict";function l(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}function n(e,t,a){return t&&l(e.prototype,t),a&&l(e,a),e}a.d(t,"a",(function(){return n}))},106:function(e,t,a){"use strict";function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}a.d(t,"a",(function(){return l}))},112:function(e,t,a){"use strict";function l(e){return(l="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(e){return(n="function"===typeof Symbol&&"symbol"===l(Symbol.iterator)?function(e){return l(e)}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":l(e)})(e)}function r(e,t){return!t||"object"!==n(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}a.d(t,"a",(function(){return r}))},113:function(e,t,a){"use strict";function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function n(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}a.d(t,"a",(function(){return n}))},125:function(e,t,a){e.exports=a.p+"static/media/errorsound.5a836b8a.mp3"},167:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),r=a(8),i=a(9),s=a(1),o=a(12),c=a(89),d=a(101),u=a.n(d),m=a(102),p=a.n(m),f=a(82),h=a(4);function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}var y=Object(r.b)((function(e){return{user:e.userReducer.user}}),{})(n.a.memo((function(e){var t=e.lead,a=e.handleLeadDelete,r=e.index,i=e.user,d=e.props,m=(e.leads,e.dealer_id),y=Object(l.useState)(!1),v=Object(o.a)(y,2),g=v[0],E=v[1],_=Object(l.useState)({lead_firstname:d.leads[r].lead_firstname||"",lead_lastname:d.leads[r].lead_lastname||"",lead_email:d.leads[r].lead_email||"",lead_phone:d.leads[r].lead_phone||"",lead_street:d.leads[r].lead_street||"",lead_city:d.leads[r].lead_city||"",lead_state:d.leads[r].lead_state||"",lead_type:d.leads[r].lead_type||"",dealer_id:m,salesman_lead:d.leads[r].salesman_lead||null,salesman_id:d.leads[r].salesman_id||null}),N=Object(o.a)(_,2),w=N[0],O=N[1],j=function(e){O(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(a,!0).forEach((function(t){Object(s.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},w,Object(s.a)({},e.target.name,e.target.value)))};return n.a.createElement(n.a.Fragment,null,g?n.a.createElement(f.a,null,n.a.createElement("form",{className:"leads-form",onSubmit:function(e){e.preventDefault()}},n.a.createElement("div",{className:"leads-field"},n.a.createElement("input",{type:"text",id:"first_name",name:"lead_firstname",autoComplete:"off",required:!0,className:"leads-group",value:w.lead_firstname,onChange:j}),n.a.createElement("label",{htmlFor:"inputField",className:"leads-label-name"},n.a.createElement("span",{className:"leads-content-name"},"First Name"))),n.a.createElement("div",{className:"leads-field"},n.a.createElement("input",{type:"text",id:"last_name",name:"lead_lastname",autoComplete:"off",required:!0,className:"leads-group",value:w.lead_lastname,onChange:j}),n.a.createElement("label",{htmlFor:"inputField",className:"leads-label-name"},n.a.createElement("span",{className:"leads-content-name"},"Last Name"))),n.a.createElement("div",{className:"leads-field"},n.a.createElement("input",{type:"text",id:"street",name:"lead_street",autoComplete:"off",required:!0,className:"leads-group",value:w.lead_street,onChange:j}),n.a.createElement("label",{htmlFor:"inputField",className:"leads-label-name"},n.a.createElement("span",{className:"leads-content-name"},"Street"))),n.a.createElement("div",{className:"leads-field"},n.a.createElement("input",{type:"text",id:"city",name:"lead_city",autoComplete:"off",required:!0,className:"leads-group",value:w.lead_city,onChange:j}),n.a.createElement("label",{htmlFor:"inputField",className:"leads-label-name"},n.a.createElement("span",{className:"leads-content-name"},"City"))),n.a.createElement("div",{className:"leads-field"},n.a.createElement("input",{type:"text",id:"state",name:"lead_state",autoComplete:"off",required:!0,className:"leads-group",value:w.lead_state,onChange:j}),n.a.createElement("label",{htmlFor:"inputField",className:"leads-label-name"},n.a.createElement("span",{className:"leads-content-name"},"State"))),n.a.createElement("div",{className:"leads-field"},n.a.createElement("input",{type:"email",id:"email",name:"lead_email",autoComplete:"off",required:!0,className:"leads-group",value:w.lead_email,onChange:j}),n.a.createElement("label",{htmlFor:"inputField",className:"leads-label-name"},n.a.createElement("span",{className:"leads-content-name"},"Email"))),n.a.createElement("div",{id:"phone-column",className:"leads-field"},n.a.createElement("input",{type:"phone",id:"leads-phone",name:"lead_phone",autoComplete:"off",required:!0,className:"leads-group",value:w.lead_phone,onChange:j}),n.a.createElement("label",{htmlFor:"inputField",className:"leads-label-name"},n.a.createElement("span",{className:"leads-content-name"},"Phone"))),n.a.createElement("select",{id:"leads-select",className:"leads-group",onChange:j,value:w.lead_type,name:"lead_type"},n.a.createElement("option",{value:""},"Select"),n.a.createElement("option",{value:"walk-in"},"Walk-in"),n.a.createElement("option",{value:"referral"},"Referral"),n.a.createElement("option",{value:"online"},"Online")),n.a.createElement(h.a,{onClick:function(){return E(!1)},className:"leads-closeBtn",to:"salesman"===i?"/sales/dash":"/dealer/dash"},"Close"),n.a.createElement("button",{onClick:function(){return d.editLead(t.id,w)},type:"submit",className:"leads-submitBtn"},"Submit"))):null,n.a.createElement("tr",null,n.a.createElement("td",{"data-label":"Full Name"},t.lead_firstname," ",t.lead_lastname),n.a.createElement("td",{"data-label":"Address"},t.lead_street,", ",t.lead_city,", ",t.lead_state," "),n.a.createElement("td",{"data-label":"Type"},t.lead_type),n.a.createElement("td",{"data-label":"Edit",className:"edit-style"},n.a.createElement(c.Icon,{onClick:function(){E(!0)},className:"edit-icon",icon:u.a})),n.a.createElement("td",{"data-label":"Delete",className:"delete-style"},n.a.createElement(c.Icon,{onClick:function(){return a(t.id)},className:"del-icon",icon:p.a}))))})));function v(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}var g=Object(r.b)(null,null)(n.a.memo((function(e){var t=e.lead,a=e.handleSalesmanLeadDelete,r=e.index,i=e.user,d=e.props,m=e.leads,b=e.sales_dealer_id,y=Object(l.useState)(!1),g=Object(o.a)(y,2),E=g[0],_=g[1],N=Object(l.useState)({lead_firstname:m[r].lead_firstname||"",lead_lastname:m[r].lead_lastname||"",lead_email:m[r].lead_email||"",lead_phone:m[r].lead_phone||"",lead_street:m[r].lead_street||"",lead_city:m[r].lead_city||"",lead_state:m[r].lead_state||"",lead_type:m[r].lead_type||"",dealer_id:b||null,salesman_lead:m[r].salesman_lead||null,salesman_id:m[r].salesman_id||null}),w=Object(o.a)(N,2),O=w[0],j=w[1],C=function(e){j(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?v(a,!0).forEach((function(t){Object(s.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):v(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},O,Object(s.a)({},e.target.name,e.target.value)))};return n.a.createElement(n.a.Fragment,null,E?n.a.createElement(f.a,null,n.a.createElement("form",{className:"leads-form",onSubmit:function(e){e.preventDefault()}},n.a.createElement("div",{className:"leads-field"},n.a.createElement("input",{type:"text",id:"first_name",name:"lead_firstname",autoComplete:"off",required:!0,className:"leads-group",value:O.lead_firstname,onChange:C}),n.a.createElement("label",{htmlFor:"inputField",className:"leads-label-name"},n.a.createElement("span",{className:"leads-content-name"},"First Name"))),n.a.createElement("div",{className:"leads-field"},n.a.createElement("input",{type:"text",id:"last_name",name:"lead_lastname",autoComplete:"off",required:!0,className:"leads-group",value:O.lead_lastname,onChange:C}),n.a.createElement("label",{htmlFor:"inputField",className:"leads-label-name"},n.a.createElement("span",{className:"leads-content-name"},"Last Name"))),n.a.createElement("div",{className:"leads-field"},n.a.createElement("input",{type:"text",id:"street",name:"lead_street",autoComplete:"off",required:!0,className:"leads-group",value:O.lead_street,onChange:C}),n.a.createElement("label",{htmlFor:"inputField",className:"leads-label-name"},n.a.createElement("span",{className:"leads-content-name"},"Street"))),n.a.createElement("div",{className:"leads-field"},n.a.createElement("input",{type:"text",id:"city",name:"lead_city",autoComplete:"off",required:!0,className:"leads-group",value:O.lead_city,onChange:C}),n.a.createElement("label",{htmlFor:"inputField",className:"leads-label-name"},n.a.createElement("span",{className:"leads-content-name"},"City"))),n.a.createElement("div",{className:"leads-field"},n.a.createElement("input",{type:"text",id:"state",name:"lead_state",autoComplete:"off",required:!0,className:"leads-group",value:O.lead_state,onChange:C}),n.a.createElement("label",{htmlFor:"inputField",className:"leads-label-name"},n.a.createElement("span",{className:"leads-content-name"},"State"))),n.a.createElement("div",{className:"leads-field"},n.a.createElement("input",{type:"email",id:"email",name:"lead_email",autoComplete:"off",required:!0,className:"leads-group",value:O.lead_email,onChange:C}),n.a.createElement("label",{htmlFor:"inputField",className:"leads-label-name"},n.a.createElement("span",{className:"leads-content-name"},"Email"))),n.a.createElement("div",{id:"phone-column",className:"leads-field"},n.a.createElement("input",{type:"phone",id:"leads-phone",name:"lead_phone",autoComplete:"off",required:!0,className:"leads-group",value:O.lead_phone,onChange:C}),n.a.createElement("label",{htmlFor:"inputField",className:"leads-label-name"},n.a.createElement("span",{className:"leads-content-name"},"Phone"))),n.a.createElement("select",{id:"leads-select",className:"leads-group",onChange:C,value:O.lead_type,name:"lead_type"},n.a.createElement("option",{value:""},"Select"),n.a.createElement("option",{value:"walk-in"},"Walk-in"),n.a.createElement("option",{value:"referral"},"Referral"),n.a.createElement("option",{value:"online"},"Online")),n.a.createElement(h.a,{onClick:function(){return _(!1)},className:"leads-closeBtn",to:"salesman"===i?"/sales/dash":"/dealer/dash"},"Close"),n.a.createElement("button",{onClick:function(){return d.editSalesLead(t.id,O)},type:"submit",className:"leads-submitBtn"},"Submit"))):null,n.a.createElement("tr",null,n.a.createElement("td",{"data-label":"Full Name"},t.lead_firstname," ",t.lead_lastname),n.a.createElement("td",{"data-label":"Address"},t.lead_street,", ",t.lead_city,", ",t.lead_state," "),n.a.createElement("td",{"data-label":"Type"},t.lead_type),n.a.createElement("td",{"data-label":"Edit",className:"edit-style"},n.a.createElement(c.Icon,{onClick:function(){_(!0)},className:"edit-icon",icon:u.a})),n.a.createElement("td",{"data-label":"Delete",className:"delete-style"},n.a.createElement(c.Icon,{onClick:function(){return a(t.id)},className:"del-icon",icon:p.a}))))}))),E=a(15),_=a.n(E),N=a(90),w=a(84),O=a.n(w),j=a(125),C=a.n(j),F=a(23);t.default=Object(r.b)((function(e){return{user:e.userReducer.user,leads:e.getDealerLeadReducer.leads,sales_leads:e.getSalesLeadReducer.leads,dealer_id:e.loginReducer.user.id,sales_dealer_id:e.salesLoginReducer.user.id,errors:e.getSalesLeadReducer.error}}),{getSalesmanLeads:i.v,getDealerLeads:i.q,deleteLead:i.g,editLead:i.l,deleteSalesmanLead:i.i,editSalesLead:i.n,clearError:i.e})(n.a.memo((function(e){var t=new N.Howl({src:O.a}),a=new N.Howl({src:C.a});Object(l.useEffect)((function(){return"dealer"===e.user?e.getDealerLeads():e.getSalesmanLeads()}),[e.user]);var r=function(a){e.deleteLead(a),t.play()},i=function(l){e.deleteSalesmanLead(l),e.clearError(),e.errors?a.play():t.play()};return N.Howler.volume(.5),n.a.createElement(n.a.Fragment,null,n.a.createElement(F.Helmet,null,n.a.createElement("title",null,"Auto Acuity | Leads")),n.a.createElement("div",null,e.errors?n.a.createElement(_.a,{title:e.errors,visibleTime:3e3}):null,n.a.createElement("div",{className:"leads"},n.a.createElement("div",{className:"leads__heading "+("salesman"===e.user?"sales_bb":"dealer_bb")},"Recent Leads"),n.a.createElement("table",null,n.a.createElement("thead",null,n.a.createElement("th",null,"Full Name"),n.a.createElement("th",null,"Address"),n.a.createElement("th",null,"Type"),n.a.createElement("th",null,"Edit"),n.a.createElement("th",null,"Delete")),n.a.createElement("td",{className:"spaceunder"}),n.a.createElement("tbody",null,"dealer"===e.user?e.leads&&e.leads.map((function(t,a){return n.a.createElement(y,{index:a,key:t.id,lead:t,handleLeadDelete:r,user:e.user,props:e,leads:e.leads,dealer_id:e.dealer_id})})):e.sales_leads&&e.sales_leads.map((function(t,a){return n.a.createElement(g,{index:a,key:t.id,lead:t,user:e.user,props:e,leads:e.sales_leads,handleSalesmanLeadDelete:i,sales_dealer_id:e.sales_dealer_id})})))))))})))},82:function(e,t,a){"use strict";var l=a(104),n=a(105),r=a(112),i=a(106),s=a(113),o=a(0),c=a.n(o),d=a(14),u=a.n(d),m=document.getElementById("portal"),p=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(r.a)(this,Object(i.a)(t).call(this))).componentDidMount=function(){m.appendChild(e.el)},e.componentWillUnMount=function(){m.removeChild(e.el)},e.el=document.createElement("div"),e}return Object(s.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){return u.a.createPortal(c.a.createElement("div",{className:"portal-styles",style:{position:"fixed",top:"0",bottom:"0",left:"0",right:"0",justifyContent:"center",alignItems:"center",backgroundColor:"rgba(0,0,0,0.6)"}},this.props.children),this.el)}}]),t}(o.Component);t.a=c.a.memo(p)},84:function(e,t,a){e.exports=a.p+"static/media/deletesound.06f599b9.mp3"},89:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.InlineIcon=t.Icon=void 0;var l,n=(l=a(0))&&l.__esModule?l:{default:l};function r(e){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}var s=0,o=/(-?[0-9.]*[0-9]+[0-9.]*)/g,c=/^-?[0-9.]*[0-9]+[0-9.]*$/g,d=["width","height","inline","hFlip","vFlip","flip","rotate","align","color","box"],u={left:0,top:0,width:16,height:16,rotate:0,hFlip:!1,vFlip:!1};var m=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._item=t}var t,a,l;return t=e,l=[{key:"splitAttributes",value:function(e){var t={icon:Object.create(null),node:Object.create(null)};return Object.keys(e).forEach((function(a){t[-1===d.indexOf(a)?"node":"icon"][a]=e[a]})),t}},{key:"calculateDimension",value:function(e,t,a){if(1===t)return e;if(a=void 0===a?100:a,"number"===typeof e)return Math.ceil(e*t*a)/a;var l=e.split(o);if(null===l||!l.length)return null;for(var n,r=[],i=l.shift(),s=c.test(i);;){if(s?(n=parseFloat(i),isNaN(n)?r.push(i):r.push(Math.ceil(n*t*a)/a)):r.push(i),void 0===(i=l.shift()))return r.join("");s=!s}}},{key:"replaceIDs",value:function(e){var t,a,l=/\sid="(\S+)"/g,n=[];function r(e,t,a){for(var l=0;-1!==(l=a.indexOf(e,l));)a=a.slice(0,l)+t+a.slice(l+e.length),l+=t.length;return a}for(;t=l.exec(e);)n.push(t[1]);return n.length?(a="IconifyId-"+Date.now().toString(16)+"-"+(16777216*Math.random()|0).toString(16)+"-",n.forEach((function(t){var l=a+s;s++,e=r('="'+t+'"','="'+l+'"',e),e=r('="#'+t+'"','="#'+l+'"',e),e=r("(#"+t+")","(#"+l+")",e)})),e):e}}],(a=[{key:"getAttributes",value:function(t){var a=this._item;"object"!==r(t)&&(t=Object.create(null));var l={horizontal:"center",vertical:"middle",slice:!1},n={rotate:a.rotate,hFlip:a.hFlip,vFlip:a.vFlip},i=Object.create(null),s=Object.create(null),o=!0===t.inline||"true"===t.inline||"1"===t.inline,c={left:a.left,top:o?a.inlineTop:a.top,width:a.width,height:o?a.inlineHeight:a.height};if(["hFlip","vFlip"].forEach((function(e){void 0===t[e]||!0!==t[e]&&"true"!==t[e]&&"1"!==t[e]||(n[e]=!n[e])})),void 0!==t.flip&&t.flip.toLowerCase().split(/[\s,]+/).forEach((function(e){switch(e){case"horizontal":n.hFlip=!n.hFlip;break;case"vertical":n.vFlip=!n.vFlip}})),void 0!==t.rotate){var d=t.rotate;if("number"===typeof d)n.rotate+=d;else if("string"===typeof d){var u=d.replace(/^-?[0-9.]*/,"");if(""===u)d=parseInt(d),isNaN(d)||(n.rotate+=d);else if(u!==d){var m=!1;switch(u){case"%":m=25;break;case"deg":m=90}m&&(d=parseInt(d.slice(0,d.length-u.length)),isNaN(d)||(n.rotate+=Math.round(d/m)))}}}var p,f=[];switch(n.hFlip?n.vFlip?n.rotate+=2:(f.push("translate("+(c.width+c.left)+" "+(0-c.top)+")"),f.push("scale(-1 1)"),c.top=c.left=0):n.vFlip&&(f.push("translate("+(0-c.left)+" "+(c.height+c.top)+")"),f.push("scale(1 -1)"),c.top=c.left=0),n.rotate%4){case 1:p=c.height/2+c.top,f.unshift("rotate(90 "+p+" "+p+")"),0===c.left&&0===c.top||(p=c.left,c.left=c.top,c.top=p),c.width!==c.height&&(p=c.width,c.width=c.height,c.height=p);break;case 2:f.unshift("rotate(180 "+(c.width/2+c.left)+" "+(c.height/2+c.top)+")");break;case 3:p=c.width/2+c.left,f.unshift("rotate(-90 "+p+" "+p+")"),0===c.left&&0===c.top||(p=c.left,c.left=c.top,c.top=p),c.width!==c.height&&(p=c.width,c.width=c.height,c.height=p)}var h,b,y=t.width?t.width:null,v=t.height?t.height:null;null===y&&null===v&&(v="1em"),null!==y&&null!==v?(h=y,b=v):null!==y?(h=y,b=e.calculateDimension(h,c.height/c.width)):(b=v,h=e.calculateDimension(b,c.width/c.height)),!1!==h&&(s.width="auto"===h?c.width:h),!1!==b&&(s.height="auto"===b?c.height:b),o&&0!==a.verticalAlign&&(i["vertical-align"]=a.verticalAlign+"em"),void 0!==t.align&&t.align.toLowerCase().split(/[\s,]+/).forEach((function(e){switch(e){case"left":case"right":case"center":l.horizontal=e;break;case"top":case"bottom":case"middle":l.vertical=e;break;case"crop":l.slice=!0;break;case"meet":l.slice=!1}})),s.preserveAspectRatio=function(e){var t;switch(e.horizontal){case"left":t="xMin";break;case"right":t="xMax";break;default:t="xMid"}switch(e.vertical){case"top":t+="YMin";break;case"bottom":t+="YMax";break;default:t+="YMid"}return t+=e.slice?" slice":" meet"}(l),s.viewBox=c.left+" "+c.top+" "+c.width+" "+c.height;var g=e.replaceIDs(a.body);return void 0!==t.color&&(g=g.replace(/currentColor/g,t.color)),f.length&&(g='<g transform="'+f.join(" ")+'">'+g+"</g>"),!0!==t.box&&"true"!==t.box&&"1"!==t.box||(g+='<rect x="'+c.left+'" y="'+c.top+'" width="'+c.width+'" height="'+c.height+'" fill="rgba(0, 0, 0, 0)" />'),{attributes:s,body:g,style:i}}},{key:"getSVG",value:function(t,a){var l=e.splitAttributes(t),n=this.getAttributes(l.icon),r='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"';return a&&Object.keys(l.node).forEach((function(e){r+=" "+e+'="'+l.node[e]+'"'})),Object.keys(n.attributes).forEach((function(e){r+=" "+e+'="'+n.attributes[e]+'"'})),r+=' style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);',Object.keys(n.style).forEach((function(e){r+=" "+e+": "+n.style[e]+";"})),t&&void 0!==t.style&&(r+=t.style),r+='">',r+=n.body+"</svg>"}}])&&i(t.prototype,a),l&&i(t,l),e}();function p(e,t){if("object"!==r(e.icon))return null;var a=m.splitAttributes(e),l=a.icon,i=a.node;delete i.icon,void 0===l.inline&&(l.inline=t);var s=new m(function(e){var t=Object.assign(Object.create(null),u,e);return void 0===t.inlineTop&&(t.inlineTop=t.top),void 0===t.inlineHeight&&(t.inlineHeight=t.height),void 0===t.verticalAlign&&(t.verticalAlign=t.height%7===0&&t.height%8!==0?-.143:-.125),t}(e.icon)).getAttributes(l),o={transform:"rotate(360deg)"};void 0!==s.style["vertical-align"]&&(o.verticalAlign=s.style["vertical-align"]),void 0!==e.style&&(o=Object.assign(o,e.style));var c=Object.assign({xmlns:"http://www.w3.org/2000/svg",focusable:!1,style:o},i,s.attributes);return c.dangerouslySetInnerHTML={__html:s.body},n.default.createElement("svg",c,null)}var f=function(e){return p(e,!1)};t.Icon=f;t.InlineIcon=function(e){return p(e,!0)};var h=f;t.default=h}}]);
//# sourceMappingURL=8.2534e9eb.chunk.js.map