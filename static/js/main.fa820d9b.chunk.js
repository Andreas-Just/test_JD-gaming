(this["webpackJsonpreact-redux-typescript-blank"]=this["webpackJsonpreact-redux-typescript-blank"]||[]).push([[0],{24:function(e,t,a){e.exports=a(39)},29:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){},34:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),s=a(15),c=a.n(s),r=a(22),u=(a(29),a(5)),o=(a(30),a(23)),l=a(16),p=a.n(l),g=(a(31),a(17)),f=Object(u.c)((function(e){var t=e.page,a=e.pagesStore,s=t.id,c=t.name,r=t.isActive,u=t.display,l=Object(g.a)({threshold:1}),f=Object(o.a)(l,3),d=f[0],b=f[1],m=f[2];return Object(n.useEffect)((function(){m&&a.hiddenPage(b,t.id)}),[b,t,m]),i.a.createElement("li",{className:p()({Page:!0,Page_active:r,Page_display:!u}),onClick:function(){return a.selectPage(s)},"aria-hidden":"true",ref:d},c)})),d=Object(u.b)("pagesStore")(Object(u.c)((function(e){var t=e.pagesStore;return Object(n.useEffect)((function(){t.getPages()}),[]),i.a.createElement("div",{className:"Pagination"},i.a.createElement("button",{className:"Pagination-Btn",type:"button"},"\u2b9c"),i.a.createElement("ul",{className:"Pagination-List"},t.pages.map((function(e){return i.a.createElement(f,{key:e.id,page:e,pagesStore:t})}))),i.a.createElement("button",{className:"Pagination-Btn",type:"button"},"\u2b9e"))}))),b=a(7),m=a(10),h=a.n(m),v=a(18),j=a(19),O=a(20),P=a(1);Object(P.g)({enforceActions:"observed"});var y=function(){function e(){var t=this;Object(j.a)(this,e),this.pages=[],this.getPages=Object(v.a)(h.a.mark((function e(){var a,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://andreas-just.github.io/test_JD-gaming/api/pages.json").then((function(e){return e.json()}));case 2:a=e.sent,n=a.map((function(e,t){return{id:t,name:e,isActive:!1,display:!0}})),Object(P.o)((function(){t.pages=n}));case 5:case"end":return e.stop()}}),e)})))}return Object(O.a)(e,[{key:"selectPage",value:function(e){if(!this.pages[e].isActive){var t=this.pages.map((function(t){return t.id===e?Object(b.a)(Object(b.a)({},t),{},{isActive:!0}):Object(b.a)(Object(b.a)({},t),{},{isActive:!1})}));this.pages=t}}},{key:"hiddenPage",value:function(e,t){if(e)this.pages[t].display=!0;else if(this.pages[t].isActive){var a,n=(null===(a=this.pages.find((function(e){return e.display&&!e.isActive})))||void 0===a?void 0:a.id)||0;this.pages[n].display=!1}else this.pages[t].display=!1}}]),e}();Object(P.i)(y,{pages:P.n,getPages:P.f.bound,selectPage:P.f,hiddenPage:P.f});var E=new y,k=(a(34),{pagesStore:E}),A=function(){return i.a.createElement(u.a,k,i.a.createElement("div",{className:"App"},i.a.createElement(d,null)))},N=function(){return i.a.createElement(r.a,null,i.a.createElement(A,null))};c.a.render(i.a.createElement(N,null),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.fa820d9b.chunk.js.map