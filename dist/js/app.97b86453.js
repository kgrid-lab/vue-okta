(function(t){function e(e){for(var r,i,u=e[0],c=e[1],l=e[2],p=0,f=[];p<u.length;p++)i=u[p],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&f.push(a[i][0]),a[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);s&&s(e);while(f.length)f.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,u=1;u<n.length;u++){var c=n[u];0!==a[c]&&(r=!1)}r&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},a={app:0},o=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=e,u=u.slice();for(var l=0;l<u.length;l++)e(u[l]);var s=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"3b3b":function(t,e,n){t.exports=n.p+"img/avocado.04e73cfd.jpg"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[t.authState.isAuthenticated?t._e():n("div",[n("button",{on:{click:function(e){return t.login()}}},[t._v(" Login ")])]),n("router-link",{attrs:{to:"/"}},[t._v("Home")]),n("br"),n("router-link",{attrs:{to:"/banana"}},[t._v("Banana Time")]),n("br"),n("router-link",{attrs:{to:"/avocado"}},[t._v("Fresh Avocado")]),n("br"),t.authState.isAuthenticated?n("div",[n("button",{on:{click:function(e){return t.logout()}}},[t._v(" Logout ")])]):t._e(),n("router-view")],1)},o=[],i=n("1da1"),u=(n("96cf"),{name:"App",data:function(){return{authenticated:!1}},created:function(){this.isAuthenticated()},watch:{$route:"isAuthenticated"},methods:{isAuthenticated:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$auth.isAuthenticated();case 2:t.authenticated=e.sent;case 3:case"end":return e.stop()}}),e)})))()},login:function(){this.$auth.signInWithRedirect({originalUri:"/banana"})},logout:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$auth.signOut();case 2:case"end":return e.stop()}}),e)})))()}}}),c=u,l=n("2877"),s=Object(l["a"])(c,a,o,!1,null,null,null),p=s.exports,f=n("8c4f"),d=n("7b13"),h=n("8c47"),v={oidc:{clientId:"0oapdvd3osLL5SIZL5d6",issuer:"https://dev-28324586.okta.com/oauth2/default",redirectUri:window.location.origin+"/login/callback",scopes:["openid","profile","email"]}},m=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},b=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"home"}},[n("h1",[t._v("YOU'RE HOME")])])}],g={name:"Home"},_=g,w=Object(l["a"])(_,m,b,!1,null,null,null),O=w.exports,y=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},j=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("img",{attrs:{alt:"Vue logo",src:n("3b3b")}}),t._v(" Look out, avocado time has come. ")])}],k={name:"Avocado"},x=k,A=Object(l["a"])(x,y,j,!1,null,null,null),$=A.exports,E=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},S=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),t._v(" Congratulations, it's banana time. ")])}],P={name:"Banana"},L=P,R=Object(l["a"])(L,E,S,!1,null,null,null),M=R.exports;r["a"].use(f["a"]);var T=new h["OktaAuth"](v.oidc);r["a"].use(d["b"],{oktaAuth:T});var H=new f["a"]({mode:"history",routes:[{path:"/",component:O},{path:"/login/callback",component:d["a"]},{path:"/banana",name:"banana",component:M,meta:{requiresAuth:!0}},{path:"/avocado",name:"avocado",component:$,meta:{requiresAuth:!0}}]}),I=H;r["a"].config.productionTip=!1,new r["a"]({router:I,render:function(t){return t(p)}}).$mount("#app")},cf05:function(t,e,n){t.exports=n.p+"img/logo.a1781cbb.png"}});
//# sourceMappingURL=app.97b86453.js.map