(this["webpackJsonpdealer-crm"]=this["webpackJsonpdealer-crm"]||[]).push([[10],{137:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(4),i=t(8),s=t(9),r=t(86),o=t(138),d=t.n(o),m=t(154),_=t.n(m),u=t(139),f=t.n(u),v=t(90),E=t(84),N=t.n(E),p=t(2),b=t(140),y=t.n(b);a.default=Object(i.b)((function(e){return{user:e.userReducer.user,salesman:e.salesLoginReducer.user,dealer_leads:e.getDealerLeadReducer.leads,salesman_leads:e.getSalesLeadReducer.leads,dealer_token:e.loginReducer.token||e.loginReducer.user.token,salesman_token:e.salesLoginReducer.user.token,dealer_notifications:e.getDealerNotificationsReducer.notifications,salesman_notifications:e.getSalesmanNotificationReducer.notifications}}),{getSalesmans:s.x,getDealerNotifications:s.r,getSalesmanNotifications:s.w,deleteDealerNotification:s.f,deleteSalesmanNotification:s.j})(l.a.memo((function(e){var a=y()(p.b,{transports:["websocket"],multiplex:!1,query:"token=".concat("dealer"===e.user?e.dealer_token:e.salesman_token)});Object(n.useEffect)((function(){return"dealer"===e.user?e.getDealerNotifications():void 0}),[]),Object(n.useEffect)((function(){return"salesman"===e.user?e.getSalesmanNotifications():void 0}),[]),Object(n.useEffect)((function(){a.on("message",(function(a){"dealer"===e.user?e.getDealerNotifications():e.getSalesmanNotifications()}))}),["dealer"===e.user?e.dealer_leads:e.salesman_leads]);var t=function(e){return"dealer_lead"===e.title?l.a.createElement(d.a,{path:r.b,size:1.5,color:"#39c"}):"new_inventory_added"===e.title?l.a.createElement(d.a,{path:r.c,size:1.5,color:"#39c"}):"new_salesman"===e.title?l.a.createElement(d.a,{path:r.a,size:1.5,color:"#39c"}):"lead_deleted"===e.title?l.a.createElement(d.a,{path:r.d,size:1.5,color:"#39c"}):"sales_lead"===e.title?l.a.createElement(d.a,{path:r.b,size:1.5,color:"#39c"}):"lead_added"===e.title?l.a.createElement(d.a,{path:r.b,size:1.5,color:"#39c"}):"new_inventory_deleted"===e.title?l.a.createElement(d.a,{path:r.d,size:1.5,color:"#39c"}):"used_inventory_deleted"===e.title?l.a.createElement(d.a,{path:r.d,size:1.5,color:"#39c"}):"used_inventory_added"===e.title?l.a.createElement(d.a,{path:r.c,size:1.5,color:"#39c"}):void 0},i=new v.Howl({src:N.a});return v.Howler.volume(.5),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,l.a.createElement("div",{className:"console-recent-activity-container"},l.a.createElement("div",{className:"console"},l.a.createElement("h2",{className:"console__heading "+("salesman"===e.user?"sales_bb":"dealer_bb")},"what would you like to do?"),l.a.createElement("div",{className:"console__controls"},l.a.createElement(c.a,{to:"salesman"===e.user?"/sales/dash/newlead":"/dealer/dash/newlead",className:"console__control "+("salesman"===e.user?"sales_border":"dealer_border"),onClick:e.leadsClick},l.a.createElement("p",null,"Add New Lead")),"salesman"===e.user?null:l.a.createElement(c.a,{to:"/dealer/dash/newsalesperson",className:"console__control "+("salesman"===e.user?"sales_border":"dealer_border"),onClick:function(){return Object(s.x)()}},l.a.createElement("p",null,"Add New Salesperson")))),l.a.createElement("div",{className:"recent-activity"},l.a.createElement("h2",{className:"recent-activity__heading "+("salesman"===e.user?"sales_bb":"dealer_bb")},"recent activity"," ",l.a.createElement("span",{className:"iconify recent-activity__help-icon "+("salesman"===e.user?"sales_help_icon":"dealer_help_icon"),"data-icon":"mdi:map-marker-question-outline","data-inline":"false"})),l.a.createElement("div",{className:"recent-activity__items"},"dealer"===e.user?e.dealer_notifications.map((function(a,n){return l.a.createElement("div",{className:"recent-activity__item",key:n},l.a.createElement("div",{className:"recent-activity__item__box recent-activity__item__icon"},l.a.createElement("span",null,t(a))),l.a.createElement("div",{className:"recent-activity__item__box recent-activity__item__text"},a.data.message),l.a.createElement("div",{className:"recent-activity__item__time"},l.a.createElement(f.a,{fromNow:!0,ago:!0},a.createdAt)," ","ago"),l.a.createElement(_.a,{onClick:function(){return function(a){e.deleteDealerNotification(a.id),i.play()}(a)},className:"notif-close-btn"}))})):e.salesman_notifications.map((function(a,n){return l.a.createElement("div",{className:"recent-activity__item",key:n},l.a.createElement("div",{className:"recent-activity__item__box recent-activity__item__icon"},l.a.createElement("span",null,t(a))),l.a.createElement("div",{className:"recent-activity__item__box recent-activity__item__text"},a.data.message),l.a.createElement("div",{className:"recent-activity__item__time"},l.a.createElement(f.a,{fromNow:!0,ago:!0},a.createdAt)," ","ago"),l.a.createElement(_.a,{onClick:function(){return function(a){e.deleteSalesmanNotification(a.id),i.play()}(a)},className:"notif-close-btn"}))})))))))})))},149:function(e,a){},84:function(e,a,t){e.exports=t.p+"static/media/deletesound.06f599b9.mp3"}}]);
//# sourceMappingURL=10.9548bd04.chunk.js.map