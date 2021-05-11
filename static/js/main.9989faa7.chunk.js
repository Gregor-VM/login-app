(this["webpackJsonplogin-app"]=this["webpackJsonplogin-app"]||[]).push([[0],{41:function(e,t,r){},53:function(e,t,r){"use strict";r.r(t);var n=r(2),a=r.n(n),c=r(28),s=r.n(c),i=(r(41),r(3)),l=r.n(i),o=r(9),u=r(7),d=r(13),j=r(26);r(43),r(54);j.a.initializeApp({apiKey:"AIzaSyDBoyvAqh7Ww0SeZ1Hi2s26_TdiO7FZPlE",authDomain:"login-app-95884.firebaseapp.com",projectId:"login-app-95884",storageBucket:"login-app-95884.appspot.co",messagingSenderId:"460461185126",appId:"1:460461185126:web:af022a863559380f9875a7"});var b=new j.a.auth.GoogleAuthProvider,p=function(){m.signInWithPopup(b)},m=j.a.auth(),h=j.a.firestore(),f=function(e){return Object(n.useEffect)((function(){document.body.className=e?"body_animation":""}),[e])},O=function(e,t,r,n){var a=!1,c=!1;return""===e?r("Email field can't be empty"):(a=!0,r(void 0)),""===t?n("Password field can't be empty"):t.length<6?n("The password is too short"):(c=!0,n(void 0)),[a,c]},x=function(e,t,r,n,a){var c=!1,s=!1;return""===e?r("Email field can't be empty"):(r(void 0),c=!0),""===t?n("Password field can't be empty"):t!==a?n("The password doesn't match"):t.length<6?n("The password is too short"):(n(void 0),s=!0),[c,s]},v=r(8),g={SET_USER:"SET_USER",ADD_ARTICLE:"ADD_ARTICLE",SET_ARTICLE:"SET_ARTICLE",SET_EDITING:"SET_EDITING",SET_EDITING_DOC:"SET_EDITING_DOC"},N={setUser:function(e){return{type:g.SET_USER,payload:e}}},y=r(11);function w(e){h.collection("users").doc(e.id).set(e)}var k=function(){var e=Object(v.b)(),t=Object(y.f)();Object(n.useEffect)((function(){return m.onAuthStateChanged(function(){var r=Object(o.a)(l.a.mark((function r(n){var a,c,s;return l.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(null!==n){r.next=2;break}return r.abrupt("return",null);case 2:return r.next=4,h.collection("users").doc(n.uid).get();case 4:if(a=r.sent,c={},a.exists){r.next=11;break}w(c={name:n.displayName,email:n.email,photoURL:n.photoURL,id:n.uid}),r.next=15;break;case 11:return r.next=13,h.collection("users").where("id","==",n.uid).get();case 13:s=r.sent,c=s.docs[0].data();case 15:e(N.setUser(c)),t.push("/login-app/home");case 17:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}())}),[e,t])},E=r(1);var S=function(){var e=Object(n.useState)(void 0),t=Object(u.a)(e,2),r=t[0],a=t[1],c=Object(n.useState)(void 0),s=Object(u.a)(c,2),i=s[0],j=s[1],b=Object(n.useRef)(),h=Object(n.useRef)(),x=function(){var e=Object(o.a)(l.a.mark((function e(t){var r,n,c,s,i,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=b.current.value,n=h.current.value,t.preventDefault(),c=O(r,n,a,j),s=Object(u.a)(c,2),i=s[0],o=s[1],!i||!o){e.next=13;break}return e.prev=5,e.next=8,m.signInWithEmailAndPassword(r,n);case 8:e.next=13;break;case 10:e.prev=10,e.t0=e.catch(5),a(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[5,10]])})));return function(t){return e.apply(this,arguments)}}();return k(),f(!0),Object(E.jsx)("div",{className:"container d-flex align-items-center justify-content-center vh100",children:Object(E.jsxs)("div",{className:"card p-5",children:[Object(E.jsx)("div",{className:"card-title",children:Object(E.jsx)("h1",{className:"display-4 text-center",children:"Sign In"})}),Object(E.jsxs)("div",{className:"card-body p-0",children:[Object(E.jsxs)("form",{onSubmit:x,children:[Object(E.jsxs)("div",{className:"form-group row",children:[Object(E.jsx)("label",{htmlFor:"email",children:"Email"}),Object(E.jsx)("input",{ref:b,id:"email",type:"email",className:"form-control "+(r&&"is-invalid"),placeholder:"Enter your email..."}),r&&Object(E.jsx)("div",{className:"invalid-feedback",children:r})]}),Object(E.jsxs)("div",{className:"form-group row",children:[Object(E.jsx)("label",{htmlFor:"password",children:"Password"}),Object(E.jsx)("input",{ref:h,id:"password",type:"password",className:"form-control "+(i&&"is-invalid"),placeholder:"Enter your password..."}),i&&Object(E.jsx)("div",{className:"invalid-feedback",children:i})]}),Object(E.jsx)("div",{className:"form-group row",children:Object(E.jsx)("button",{type:"submit",className:"btn btn-primary btn-block mt-2",children:"Sign In"})})]}),Object(E.jsx)("p",{className:"text-center",children:"or"}),Object(E.jsxs)("button",{className:"btn btn-outline-danger btn-block mb-2",onClick:function(){p()},children:[Object(E.jsx)("i",{className:"fab fa-google mr-2"}),"Sign In With Google"]})]}),Object(E.jsxs)("small",{className:"text-center",children:["Don't you have an account yet?"," ",Object(E.jsx)(d.b,{to:"/login-app/signup",children:"Sign Up here!"})]}),Object(E.jsx)("small",{className:"text-center",children:Object(E.jsx)(d.b,{to:"/login-app/recover",children:"Forgot Password?"})})]})})};var A=function(){var e=Object(n.useState)(void 0),t=Object(u.a)(e,2),r=t[0],a=t[1],c=Object(n.useState)(void 0),s=Object(u.a)(c,2),i=s[0],j=s[1],b=Object(n.useRef)(),h=Object(n.useRef)(),O=Object(n.useRef)(),v=function(){var e=Object(o.a)(l.a.mark((function e(t){var r,n,c,s,i,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=b.current.value,n=h.current.value,t.preventDefault(),c=x(r,n,a,j,O.current.value),s=Object(u.a)(c,2),i=s[0],o=s[1],!i||!o){e.next=13;break}return e.prev=5,e.next=8,m.createUserWithEmailAndPassword(r,n);case 8:e.next=13;break;case 10:e.prev=10,e.t0=e.catch(5),a(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[5,10]])})));return function(t){return e.apply(this,arguments)}}();return k(),f(!0),Object(E.jsx)("div",{className:"container d-flex align-items-center justify-content-center vh100",children:Object(E.jsxs)("div",{className:"card p-4",children:[Object(E.jsx)("div",{className:"card-title",children:Object(E.jsx)("h1",{className:"display-4 text-center m-0",children:"Sign Up"})}),Object(E.jsx)("div",{className:"card-body px-4 m-0 py-0",children:Object(E.jsxs)("form",{onSubmit:v,children:[Object(E.jsxs)("div",{className:"form-group row",children:[Object(E.jsx)("label",{htmlFor:"email",children:"Email"}),Object(E.jsx)("input",{ref:b,id:"email",type:"email",className:"form-control "+(r&&"is-invalid"),placeholder:"Enter your email..."}),r&&Object(E.jsx)("div",{className:"invalid-feedback",children:r})]}),Object(E.jsxs)("div",{className:"form-group row",children:[Object(E.jsx)("label",{htmlFor:"password",children:"Password"}),Object(E.jsx)("input",{ref:h,id:"password",type:"password",className:"form-control "+(i&&"is-invalid"),placeholder:"Enter your password..."}),i&&Object(E.jsx)("div",{className:"invalid-feedback",children:i})]}),Object(E.jsxs)("div",{className:"form-group row",children:[Object(E.jsx)("label",{htmlFor:"confirmpassword",children:"Confirm password"}),Object(E.jsx)("input",{ref:O,id:"confirmpassword",type:"password",className:"form-control "+(i&&"is-invalid"),placeholder:"Enter your confirm password..."}),i&&Object(E.jsx)("div",{className:"invalid-feedback",children:i})]}),Object(E.jsx)("div",{className:"form-group row",children:Object(E.jsx)("button",{type:"submit",className:"btn btn-primary btn-block mt-2",children:"Sign Up"})})]})}),Object(E.jsx)("p",{className:"text-center m-0 mb-3",children:"or"}),Object(E.jsxs)("button",{className:"btn btn-outline-danger btn-block mb-2",onClick:function(){p()},children:[Object(E.jsx)("i",{className:"fab fa-google mr-2"}),"Sign Up With Google"]}),Object(E.jsxs)("small",{className:"text-center",children:["Do you already have an account?",Object(E.jsx)(d.b,{to:"/login-app/signin",children:" Sign In here!"})]})]})})},I=r(6),T={setArticles:function(e){return{type:g.SET_ARTICLE,payload:e}},addArticle:function(e){return{type:g.ADD_ARTICLE,payload:e}}},D=r(31);function _(e){return U.apply(this,arguments)}function U(){return(U=Object(o.a)(l.a.mark((function e(t){var r,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.collection("users").doc(t).get();case 2:return r=e.sent,n=r.data(),e.abrupt("return",{name:n.name,photoURL:n.photoURL});case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var R={firstArticles:function(){var e=Object(o.a)(l.a.mark((function e(){var t,r,n,a,c,s,i,o,u,d,j,b,p,m=arguments;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=m.length>0&&void 0!==m[0]&&m[0],r={},t&&(r=h.collection("articles").where("user_id","==",t).orderBy("date","desc")),t||(r=h.collection("articles").orderBy("date","desc")),e.next=6,r.limit(10).get();case 6:n=e.sent,a=[],c="",s=Object(D.a)(n.docs),e.prev=10,s.s();case 12:if((i=s.n()).done){e.next=25;break}return o=i.value,u=o.data(),d=o.id,e.next=18,_(u.user_id);case 18:j=e.sent,b=j.name,p=j.photoURL,a.push(Object(I.a)(Object(I.a)({},u),{},{itemId:d,name:b,photoURL:p})),c=o;case 23:e.next=12;break;case 25:e.next=30;break;case 27:e.prev=27,e.t0=e.catch(10),s.e(e.t0);case 30:return e.prev=30,s.f(),e.finish(30);case 33:return e.abrupt("return",{articles:a,lastKey:c});case 34:case"end":return e.stop()}}),e,null,[[10,27,30,33]])})));return function(){return e.apply(this,arguments)}}(),nextArticles:function(){var e=Object(o.a)(l.a.mark((function e(t){var r,n,a,c,s,i,o,u,d,j,b,p,m,f=arguments;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=f.length>1&&void 0!==f[1]&&f[1],n={},r&&(n=h.collection("articles").where("user_id","==",r).orderBy("date","desc")),r||(n=h.collection("articles").orderBy("date","desc")),e.next=6,n.startAfter(t).limit(10).get();case 6:a=e.sent,c=[],s="",i=Object(D.a)(a.docs),e.prev=10,i.s();case 12:if((o=i.n()).done){e.next=25;break}return u=o.value,d=u.data(),j=u.id,e.next=18,_(d.user_id);case 18:b=e.sent,p=b.name,m=b.photoURL,c.push(Object(I.a)(Object(I.a)({},d),{},{itemId:j,name:p,photoURL:m})),s=u;case 23:e.next=12;break;case 25:e.next=30;break;case 27:e.prev=27,e.t0=e.catch(10),i.e(e.t0);case 30:return e.prev=30,i.f(),e.finish(30);case 33:return e.abrupt("return",{articles:c,lastKey:s});case 34:case"end":return e.stop()}}),e,null,[[10,27,30,33]])})));return function(t){return e.apply(this,arguments)}}(),addArticle:function(){var e=Object(o.a)(l.a.mark((function e(t,r){var n,a,c,s,i,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new Date,a={user_id:t.id,text:r,date:"".concat(n.getUTCDay(),"/").concat(n.getUTCMonth(),"/").concat(n.getUTCFullYear()," at ").concat(n.getUTCHours(),":").concat(n.getUTCMinutes(),":").concat(n.getUTCSeconds())},e.prev=2,e.next=5,h.collection("articles").add(a);case 5:return c=e.sent,s={msg:"Articulo enviado!",error:!1},i=Object(I.a)(Object(I.a)({},a),{},{itemId:c.id}),e.abrupt("return",{msg:s,finalArticle:i});case 11:return e.prev=11,e.t0=e.catch(2),o={msg:e.t0.message,error:!0},e.abrupt("return",{msg:o});case 15:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(t,r){return e.apply(this,arguments)}}(),updateArticle:function(){var e=Object(o.a)(l.a.mark((function e(t,r){var n,a,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(I.a)(Object(I.a)({},t),{},{text:r,date:t.date.includes("(editado")?t.date:t.date+" (editado)"}),e.prev=1,e.next=4,h.collection("articles").doc(t.itemId).update(n);case 4:return a={msg:"Articulo actualizado!",error:!1},e.abrupt("return",{msg:a,finalArticle:n});case 8:return e.prev=8,e.t0=e.catch(1),c={msg:e.t0.message,error:!0},e.abrupt("return",{msg:c});case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,r){return e.apply(this,arguments)}}(),getUserInfoById:function(){var e=Object(o.a)(l.a.mark((function e(t){var r,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.collection("users").doc(t).get();case 2:return r=e.sent,n=r.data(),e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),deleteAccount:function(){var e=Object(o.a)(l.a.mark((function e(t){var r,n,a,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.collection("users").doc(t).delete();case 3:return e.next=5,h.collection("articles").where("user_id","==",t).get();case 5:r=e.sent,n=Object(D.a)(r.docs),e.prev=7,n.s();case 9:if((a=n.n()).done){e.next=15;break}return c=a.value,e.next=13,c.ref.delete();case 13:e.next=9;break;case 15:e.next=20;break;case 17:e.prev=17,e.t0=e.catch(7),n.e(e.t0);case 20:return e.prev=20,n.f(),e.finish(20);case 23:return e.abrupt("return",!0);case 26:return e.prev=26,e.t1=e.catch(0),e.abrupt("return",!1);case 29:case"end":return e.stop()}}),e,null,[[0,26],[7,17,20,23]])})));return function(t){return e.apply(this,arguments)}}(),thisNameExists:function(){var e=Object(o.a)(l.a.mark((function e(t){var r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.collection("users").where("name","==",t).get();case 3:return r=e.sent,e.abrupt("return",r);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",!1);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),updateNameAndPhoto:function(){var e=Object(o.a)(l.a.mark((function e(t,r,n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.collection("users").doc(n).update({name:t,photoURL:r});case 2:case"end":return e.stop()}}),e)})));return function(t,r,n){return e.apply(this,arguments)}}()},C={setEditing:function(e){return{type:g.SET_EDITING,payload:e}},setEditingDoc:function(e){return{type:g.SET_EDITING_DOC,payload:e}}};var L=function(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),r=t[0],a=t[1],c=Object(n.useState)({msg:"",error:!1}),s=Object(u.a)(c,2),i=s[0],d=s[1],j=Object(n.useState)(!1),b=Object(u.a)(j,2),p=b[0],m=b[1],h=Object(v.c)((function(e){return e.user.user})),f=Object(v.c)((function(e){return e.editing})),O=Object(v.c)((function(e){return e.articles.articles})),x=Object(v.b)();Object(n.useEffect)((function(){f.editing&&a(f.editingDoc.text)}),[f]),Object(n.useEffect)((function(){var e=localStorage.getItem("eraser");e&&a(e)}),[]);var g=function(){var e=Object(o.a)(l.a.mark((function e(t){var n,c,s,o,u,j,b;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),m(!0),""!==r){e.next=5;break}return m(!1),e.abrupt("return",d({msg:"Tu mensaje est\xe1 vacio!",error:!0}));case 5:if(!f.editing){e.next=25;break}return e.prev=6,e.next=9,R.updateArticle(f.editingDoc,r);case 9:return n=e.sent,c=n.msg,s=n.finalArticle,d(c),x(T.setArticles(O.map((function(e){return e.itemId===s.itemId?Object(I.a)(Object(I.a)({},e),{},{text:s.text,date:s.date}):e})))),x(C.setEditing(!1)),x(C.setEditingDoc({})),a(""),m(!1),e.abrupt("return",null);case 21:e.prev=21,e.t0=e.catch(6),d(i),m(!1);case 25:return e.prev=25,e.next=28,R.addArticle(h,r);case 28:o=e.sent,u=o.msg,j=o.finalArticle,d(u),j&&x(T.addArticle(j)),j&&localStorage.removeItem("eraser"),a(""),m(!1),e.next=43;break;case 38:e.prev=38,e.t1=e.catch(25),b=e.t1.msg,d(b),m(!1);case 43:case"end":return e.stop()}}),e,null,[[6,21],[25,38]])})));return function(t){return e.apply(this,arguments)}}();return Object(E.jsx)("div",{className:"card mt-3 row mx-1 shadow-sm",children:Object(E.jsxs)("div",{className:"card-body col-12",children:[Object(E.jsx)("div",{className:"form-group",children:Object(E.jsx)("textarea",{onChange:function(e){return a(e.target.value)},value:r,rows:"6",className:"form-control",placeholder:"Write something interesting and share it..."})}),""!==i.msg&&Object(E.jsx)("div",{className:"alert alert-"+(i.error?"danger":"success"),children:i.msg}),Object(E.jsx)("button",{type:"submit",className:"btn btn-success",onClick:g,disabled:p,children:f.editing?"Update":"Share"}),f.editing&&Object(E.jsx)("button",{className:"btn btn-danger ml-2",onClick:function(){x(C.setEditingDoc({})),x(C.setEditing(!1)),a("")},children:"Cancel"}),!f.editing&&Object(E.jsx)("button",{className:"btn btn-outline-secondary ml-2",onClick:function(e){e.preventDefault(),localStorage.setItem("eraser",r),d({msg:"Your text in save in this device",error:!1})},children:"Save"})]})})};var F=function(e){var t=e.user,r=Object(v.b)(),n=Object(y.f)(),a=n.location.pathname;return Object(E.jsxs)("nav",{className:"navbar navbar-light bg-light",children:[Object(E.jsxs)("a",{className:"navbar-brand",href:"/#",onClick:function(e){e.preventDefault(),n.push("/login-app/profile",t.id)},children:[null!==t.photoURL?Object(E.jsx)("img",{src:t.photoURL,width:"30",height:"30",className:"d-inline-block align-top rounded-circle mr-2",alt:"avatar"}):Object(E.jsx)("i",{className:"fas fa-user-alt mr-2"}),null===t.name?"An\xf3nimo":t.name]}),Object(E.jsxs)("ul",{className:"navbar-nav d-flex flex-row",children:[Object(E.jsx)("li",{className:(a.includes("/home")?"active":"")+" nav-item mx-2",children:Object(E.jsxs)(d.b,{className:"nav-link",to:"/login-app/home",children:[Object(E.jsx)("i",{className:"fas fa-home mx-1 my-0"}),"Home",Object(E.jsx)("span",{className:"sr-only",children:"(current)"})]})}),Object(E.jsx)("li",{className:(a.includes("/settings")?"active":"")+" nav-item mx-2",children:Object(E.jsxs)(d.b,{className:"nav-link",to:"/login-app/settings",children:[Object(E.jsx)("i",{className:"fas fa-cog mx-1"}),"Settings",Object(E.jsx)("span",{className:"sr-only",children:"(current)"})]})}),Object(E.jsx)("li",{className:"nav-item mx-2",children:Object(E.jsxs)("a",{className:"nav-link",href:"/#",onClick:function(e){e.preventDefault(),m.signOut(),n.push("/login-app/signin"),r(N.setUser({}))},children:[Object(E.jsx)("i",{className:"fas fa-sign-out-alt mx-1"}),"Logout",Object(E.jsx)("span",{className:"sr-only",children:"(current)"})]})})]})]})},P=r(20);var G=function(e){var t=e.center;return e.sm?Object(E.jsx)("div",{class:"spinner-border spinner-border-sm",role:"status",children:Object(E.jsx)("span",{class:"sr-only",children:"Loading..."})}):t?Object(E.jsx)("div",{className:"w-100 text-center",children:Object(E.jsx)("div",{className:"spinner-border",role:"status",children:Object(E.jsx)("span",{className:"sr-only",children:"Loading..."})})}):Object(E.jsx)("div",{className:"spinner-border",role:"status",children:Object(E.jsx)("span",{className:"sr-only",children:"Loading..."})})};var B=function(e){var t=e.name,r=e.photoURL,a=e.text,c=e.date,s=e.user_id,i=e.itemId,d=Object(n.useState)(!1),j=Object(u.a)(d,2),b=j[0],p=j[1],m=Object(v.c)((function(e){return e.user.user.id})),f=Object(v.c)((function(e){return e.articles.articles})),O=m===s,x=Object(y.g)().pathname.includes("/profile"),g=Object(v.b)(),N=Object(y.f)();function w(){return(w=Object(o.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Are you sure to delete this item?")){e.next=7;break}return p(!0),e.next=4,h.collection("articles").doc(i).delete();case 4:t=f.filter((function(e){return e.itemId!==i})),g(T.setArticles(t)),p(!1);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(){return(k=Object(o.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:g(C.setEditing(!0)),g(C.setEditingDoc({text:a,date:c,itemId:i})),x&&N.push("/login-app/home");case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(E.jsxs)("div",{className:"card shadow-sm p-4 row my-4",children:[Object(E.jsx)("div",{className:"card-title",children:Object(E.jsxs)("div",{className:"d-flex justify-content-between flex-md-row flex-column",children:[Object(E.jsxs)("div",{className:"hover_blue",onClick:function(){N.push("/login-app/profile",s)},children:[null!==r?Object(E.jsx)("img",{src:r,alt:t+" profile",width:"25",className:"rounded-circle mr-2"}):Object(E.jsx)("i",{className:"fas fa-user-alt mr-2"}),Object(E.jsx)("span",{className:"lead",children:null===t?"An\xf3nimo":t})]}),Object(E.jsxs)("div",{children:[O&&Object(E.jsx)("i",{className:"fas fa-edit hover_blue p-2",onClick:function(){return k.apply(this,arguments)}}),O&&(b?Object(E.jsx)(G,{sm:!0}):Object(E.jsx)("i",{className:"fas fa-trash hover_red p-2",onClick:function(){return w.apply(this,arguments)}}))]})]})}),Object(E.jsxs)("div",{className:"card-body col-12 p-2",children:[Object(E.jsx)("p",{children:a}),Object(E.jsxs)("small",{children:["Posted: ",c]})]})]})};var W=function(e){var t=e.id,r=Object(v.c)((function(e){return e.articles.articles})),a=Object(n.useState)(""),c=Object(u.a)(a,2),s=c[0],i=c[1],l=Object(n.useState)(!0),o=Object(u.a)(l,2),d=o[0],j=o[1],b=Object(n.useState)(!1),p=Object(u.a)(b,2),m=p[0],h=p[1],f=Object(n.useState)(!1),O=Object(u.a)(f,2),x=O[0],g=O[1],N=Object(n.useState)([]),w=Object(u.a)(N,2),k=w[0],S=w[1],A=Object(y.g)().pathname.includes("/profile"),D=Object(v.b)(),_=Object(n.useCallback)((function(e){if(r.length>0&&!A&&!e)return j(!1),null;if(void 0===t&&A)return null;h(e);var n=t||!1;R.firstArticles(n).then((function(e){var r=e.articles,n=e.lastKey;t||D(T.setArticles(r)),t&&S(r),i(n),j(!1),h(!1)}))}),[D,t,r,A]);return Object(n.useEffect)((function(){var e=!0;return e&&_(!1),function(){return e=!1}}),[_]),Object(E.jsx)("div",{className:"card mt-4 mx-1 row p-4 shadow",children:Object(E.jsxs)("div",{className:"card-body col-12",children:[Object(E.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(E.jsx)("h4",{className:"text-center m-0",children:"Last Articles:"}),m?Object(E.jsx)(G,{}):Object(E.jsx)("i",{className:"fas fa-sync-alt border rounded p-2 hover",onClick:function(){return _(!0)}})]}),r.length>0&&!A?r.map((function(e,t){return Object(n.createElement)(B,Object(I.a)(Object(I.a)({},e),{},{key:t}))})):null,k.length>0&&A?k.map((function(e,t){return Object(n.createElement)(B,Object(I.a)(Object(I.a)({},e),{},{key:t}))})):null,0===k.length&&A&&!d&&Object(E.jsx)("p",{className:"my-2 text-center",children:"This account doesn't have articles"}),0===r.length&&!A&&!d&&Object(E.jsx)("p",{className:"my-2 text-center",children:"Nobody has uploaded anything be the first!"}),x&&!d?Object(E.jsx)("span",{children:"No more articles :("}):!d&&Object(E.jsx)("a",{href:"/#",className:"text-center d-block",onClick:function(e){j(!0),e.preventDefault();var r=t||!1;R.nextArticles(s,r).then((function(e){var r=e.articles,n=e.lastKey;t||D(T.addArticle(r)),t&&r.length>0&&S((function(e){return[].concat(Object(P.a)(e),Object(P.a)(r))})),i(n),0===r.length&&g(!0),j(!1)}))},children:"Load More!"}),d&&Object(E.jsx)(G,{center:!0})]})})};var Y=function(){var e=Object(v.c)((function(e){return e.user.user}));return f(!1),Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(F,{user:e}),Object(E.jsxs)("div",{className:"container",children:[Object(E.jsx)(L,{}),Object(E.jsx)(W,{})]})]})};var z=function(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),r=t[0],a=t[1],c=Object(n.useRef)(),s=function(){var e=Object(o.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.sendPasswordResetEmail(c.current.value);case 3:a("You have to check your email and follow the instructions"),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),a(e.t0.message);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}();return f(!0),Object(E.jsx)("div",{className:"container vh100 d-flex align-items-center justify-content-center",children:Object(E.jsxs)("div",{className:"card p-4",children:[Object(E.jsx)("div",{className:"card-title",children:Object(E.jsx)("h4",{className:"text-center display-4",children:"Recover my account"})}),Object(E.jsxs)("div",{className:"form-group",children:[Object(E.jsx)("label",{htmlFor:"resetpassword"}),Object(E.jsx)("input",{ref:c,id:"resetpassword",type:"text",className:"form-control",placeholder:"Write your email..."})]}),Object(E.jsx)("button",{className:"btn btn-primary btn-block",onClick:s,children:"Send Email"}),Object(E.jsx)("small",{className:"my-2 text-center",children:r}),Object(E.jsx)(d.b,{to:"/login-app/signin",children:Object(E.jsx)("small",{className:"text-center mt-1",children:"Back to Sign in"})})]})})};function K(){return(K=Object(o.a)(l.a.mark((function e(t){var r,n,a,c,s,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!(null===t||void 0===t||null===(r=t.type)||void 0===r?void 0:r.includes("image"))){e.next=14;break}return(n=new FormData).append("file",t),n.append("upload_preset","mhxqfgbm"),a={method:"POST",body:n},e.next=8,fetch("https://api.cloudinary.com/v1_1/dalnxbdem/image/upload",a);case 8:return c=e.sent,e.next=11,c.json();case 11:return s=e.sent,i=s.url,e.abrupt("return",i);case 14:return e.abrupt("return",!1);case 17:return e.prev=17,e.t0=e.catch(0),e.abrupt("return","error");case 20:case"end":return e.stop()}}),e,null,[[0,17]])})))).apply(this,arguments)}var M=function(e){return K.apply(this,arguments)};var H=function(){var e=Object(v.c)((function(e){return e.user.user})),t=Object(n.useState)(!1),r=Object(u.a)(t,2),a=r[0],c=r[1],s=Object(n.useState)(e.name),i=Object(u.a)(s,2),d=i[0],j=i[1],b=Object(n.useState)(""),p=Object(u.a)(b,2),h=p[0],f=p[1],O=Object(n.useState)(""),x=Object(u.a)(O,2),g=x[0],w=x[1],k=Object(n.useRef)(),S=Object(n.useRef)(""),A=Object(v.b)(),T=Object(y.f)(),D=function(){var t=Object(o.a)(l.a.mark((function t(){var r,n,s,i,o,u,d;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r="",n=S.current.value,s=k.current.files[0],!1!==a){t.next=5;break}return t.abrupt("return",c(!0));case 5:if(void 0!==s||e.name!==n){t.next=7;break}return t.abrupt("return",f("You didn't change anything"));case 7:if(!(n<6)){t.next=9;break}return t.abrupt("return",f("Your name can't have less of 6 words"));case 9:return t.prev=9,t.next=12,R.thisNameExists(n);case 12:if(o=t.sent,(null===(i=o.docs[0])||void 0===i?void 0:i.id)===e.id){t.next=17;break}if(!!o.empty){t.next=17;break}return t.abrupt("return",f("This name already exist, try change it"));case 17:return t.next=19,M(s);case 19:if(!1!==(u=t.sent)&&"error"!==u&&(r=u),"error"!==u){t.next=23;break}return t.abrupt("return",f("Error uploading the image"));case 23:return d=""!==r?r:e.photoURL,t.next=26,R.updateNameAndPhoto(n,d,e.id);case 26:w("Your profile has been updated"),A(N.setUser(Object(I.a)(Object(I.a)({},e),{},{name:S.current.value,photoURL:d}))),f(""),t.next=34;break;case 31:t.prev=31,t.t0=t.catch(9),f("An unexpected error happened");case 34:case"end":return t.stop()}}),t,null,[[9,31]])})));return function(){return t.apply(this,arguments)}}(),_=function(){var t=Object(o.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!window.confirm("All your information including your articles will be deleted and this action is irreversible, do you want to continue?")){t.next=5;break}return t.next=3,R.deleteAccount(e.id);case 3:m.signOut(),T.push("/login-app/signin");case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(F,{user:e}),Object(E.jsxs)("div",{className:"container row mx-auto",children:[Object(E.jsxs)("div",{className:"card p-4 col-md-3 m-2",children:[null!==e.photoURL?Object(E.jsx)("img",{className:"mx-auto rounded-circle avatar",width:"100",height:"100",alt:"profile",src:e.photoURL}):Object(E.jsx)("i",{className:"fas fa-user-alt mr-2 text-center",style:{fontSize:70}}),Object(E.jsxs)("div",{className:"card-title mt-3 text-center",children:[Object(E.jsx)("h4",{children:null===e.name?"An\xf3nimo":e.name}),Object(E.jsx)("small",{children:e.email})]}),Object(E.jsx)("button",{className:"btn btn-danger",onClick:_,children:"Delete this account"})]}),Object(E.jsx)("div",{className:"card col-md-8 m-2 row",children:Object(E.jsxs)("div",{className:"card-body col-12 d-flex flex-column justify-content-between",children:[Object(E.jsxs)("form",{children:[Object(E.jsxs)("div",{className:"form-group row",children:[Object(E.jsx)("label",{htmlFor:"user_name",className:"col-sm-2 col-form-label",children:"Name"}),Object(E.jsx)("div",{className:"col-sm-10",children:Object(E.jsx)("input",{ref:S,type:"text",className:"form-control",id:"user_name",value:d,onChange:function(e){return j(e.target.value)},disabled:!a})})]}),Object(E.jsxs)("div",{className:"form-group row",children:[Object(E.jsx)("label",{htmlFor:"user_photo",className:"col-sm-2 col-form-label",children:"Image"}),Object(E.jsx)("div",{className:"col-sm-10",children:Object(E.jsx)("input",{ref:k,type:"file",className:"form-control-file",id:"user_photo",disabled:!a})})]})]}),""!==h&&Object(E.jsx)("div",{className:"alert alert-danger",children:h}),""!==g&&Object(E.jsx)("div",{className:"alert alert-success",children:g}),Object(E.jsx)("button",{className:"btn btn-success",onClick:D,children:"Update Info"})]})})]})]})};var q=function(e){var t=e.user;return void 0===t.id?Object(E.jsx)("div",{className:"card p-4 col-md-3 m-4 h-25",children:Object(E.jsx)(G,{center:!0})}):Object(E.jsx)(E.Fragment,{children:Object(E.jsxs)("div",{className:"card p-4 col-md-3 m-4 h-25",children:[null!==t.photoURL?Object(E.jsx)("img",{className:"mx-auto rounded-circle",width:"100",height:"100",alt:"profile",src:t.photoURL}):Object(E.jsx)("i",{className:"fas fa-user-alt mr-2 text-center",style:{fontSize:70}}),Object(E.jsx)("div",{className:"card-title mt-3 text-center",children:Object(E.jsx)("h4",{children:null===t.name?"An\xf3nimo":t.name})})]})})};var J=function(e){var t=Object(v.c)((function(e){return e.user.user})),r=e.location.state,a=Object(n.useState)({}),c=Object(u.a)(a,2),s=c[0],i=c[1];return Object(n.useEffect)((function(){R.getUserInfoById(r).then((function(e){return i(e)}))}),[r]),Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(F,{user:t}),Object(E.jsxs)("div",{className:"container row mx-auto",children:[Object(E.jsx)(q,{user:s}),Object(E.jsx)("div",{className:"col-md-8",children:Object(E.jsx)(W,{id:s.id})})]})]})};var Z=function(){var e=Object(v.c)((function(e){return e.user.user}));return Object(E.jsx)(d.a,{children:Object(E.jsxs)(y.c,{children:[Object(E.jsx)(y.a,{exact:!0,path:"/login-app/",component:void 0===e.id?S:Y}),Object(E.jsx)(y.a,{path:"/login-app/signin",component:S}),Object(E.jsx)(y.a,{path:"/login-app/signup",component:A}),Object(E.jsx)(y.a,{path:"/login-app/home",component:void 0===e.id?S:Y}),Object(E.jsx)(y.a,{path:"/login-app/recover",component:z}),Object(E.jsx)(y.a,{path:"/login-app/settings",component:void 0===e.id?S:H}),Object(E.jsx)(y.a,{path:"/login-app/profile",component:void 0===e.id?S:J})]})})},Q=r(30),V={user:{}};var X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0,r=t.type,n=t.payload;switch(r){case g.SET_USER:return Object(I.a)(Object(I.a)({},e),{},{user:n});default:return e}},$={articles:[]};var ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0,r=t.type,n=t.payload;switch(r){case g.ADD_ARTICLE:return(null===n||void 0===n?void 0:n.length)?Object(I.a)(Object(I.a)({},e),{},{articles:[].concat(Object(P.a)(e.articles),Object(P.a)(n))}):(null===n||void 0===n?void 0:n.name)?Object(I.a)(Object(I.a)({},e),{},{articles:[n].concat(Object(P.a)(e.articles))}):e;case g.SET_ARTICLE:return Object(I.a)(Object(I.a)({},e),{},{articles:n});default:return e}},te={editing:!1,editingDoc:{}};var re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,t=arguments.length>1?arguments[1]:void 0,r=t.type,n=t.payload;switch(r){case g.SET_EDITING:return Object(I.a)(Object(I.a)({},e),{},{editing:n});case g.SET_EDITING_DOC:return Object(I.a)(Object(I.a)({},e),{},{editingDoc:n});default:return e}},ne=Object(Q.a)({user:X,articles:ee,editing:re}),ae=Object(Q.b)(ne);var ce=function(){return Object(E.jsx)(v.a,{store:ae,children:Object(E.jsx)(Z,{})})};r(51),r(52);s.a.render(Object(E.jsx)(a.a.StrictMode,{children:Object(E.jsx)(ce,{})}),document.getElementById("root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.9989faa7.chunk.js.map