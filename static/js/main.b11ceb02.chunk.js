(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,function(t,e,n){t.exports={softkey:"Softkey_softkey__IzEv-",left:"Softkey_left__3bN5n",right:"Softkey_right__UP2x3",center:"Softkey_center__2AwmS"}},function(t,e,n){t.exports={todos:"ToDos_todos__33HrU",completed:"ToDos_completed__2tBhO"}},,,,,function(t){t.exports={installed:{client_id:"943908581198-mt31hegku9rrukb84pq8gnabaril5oan.apps.googleusercontent.com",project_id:"kaios-task-app",auth_uri:"https://accounts.google.com/o/oauth2/auth",token_uri:"https://oauth2.googleapis.com/token",auth_provider_x509_cert_url:"https://www.googleapis.com/oauth2/v1/certs",client_secret:"LPQrgU4qdXr5ZhbFjBijJMbk",redirect_uris:["urn:ietf:wg:oauth:2.0:oob","http://localhost"]},web:{client_id:"943908581198-7al7j05rfdhqdgqireeu0bqpqlilb4ls.apps.googleusercontent.com",project_id:"kaios-task-app",auth_uri:"https://accounts.google.com/o/oauth2/auth",token_uri:"https://oauth2.googleapis.com/token",auth_provider_x509_cert_url:"https://www.googleapis.com/oauth2/v1/certs",client_secret:"kchV_SIsL-DanEnnb_0scDbx",redirect_uris:["https://localhost:3000","http://localhost:3000"],javascript_origins:["https://localhost:3000","http://localhost:3000"]}}},function(t,e,n){t.exports={input:"Input_input__3oRWX"}},function(t,e,n){},,,,function(t,e,n){t.exports=n(21)},,,,,function(t,e,n){},,function(t,e,n){"use strict";n.r(e);var o=n(0),a=n.n(o),r=n(6),s=n.n(r),i=(n(19),n(4)),c=n.n(i),u=n(7),l=n(1),h=n(8),p=(n(9),n(10),n(3),n(2)),f=n.n(p),g=function(t){var e=t.left,n=t.onKeyLeft,r=t.center,s=t.onKeyCenter,i=t.right,c=t.onKeyRight;Object(o.useEffect)(function(){return document.addEventListener("keydown",u),function(){return document.removeEventListener("keydown",u)}},[]);var u=function(t){switch(t.key){case"SoftLeft":return n&&n(t);case"Enter":return s&&s(t);case"SoftRight":return c&&c(t);default:return}};return a.a.createElement("div",{className:f.a.softkey},a.a.createElement("label",{className:f.a.left},e),a.a.createElement("label",{className:f.a.center},r),a.a.createElement("label",{className:f.a.right},i))},k=n(11),d=n(12),_=new(function(){function t(){Object(k.a)(this,t)}return Object(d.a)(t,[{key:"init",value:function(){return new Promise(function(t,e){return window.gapi.client.load("tasks","v1",function(){return window.gapi.client.load("plus","v1",function(){return t()})})})}},{key:"listTaskLists",value:function(){var t=window.gapi.client.tasks.tasklists.list();return this.makeRequest(t)}},{key:"showTaskList",value:function(t){var e=window.gapi.client.tasks.tasklists.get({tasklist:t});return this.makeRequest(e)}},{key:"listTasks",value:function(t){var e=window.gapi.client.tasks.tasks.list({tasklist:t});return this.makeRequest(e)}},{key:"makeRequest",value:function(t){return new Promise(function(e,n){t.execute(function(t){return t.error?n(t.error):e(t.result)})})}}]),t}()),w=n(13),m=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function b(){var t=Object(o.useState)(!1),e=Object(l.a)(t,2),n=e[0],r=e[1],s=Object(o.useState)(!1),i=Object(l.a)(s,2),p=i[0],f=i[1],k=Object(w.useGoogleLogin)({clientId:h.web.client_id,onSuccess:function(){var t=Object(u.a)(c.a.mark(function t(e){var n;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(e),t.next=3,_.init();case 3:return t.next=5,_.listTaskLists();case 5:n=t.sent,f(n),r(!0);case 8:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),isSignedIn:!0,redirectUri:m?"http://localhost:3000":"https://grachet.github.io/kaios-google-task",onFailure:function(t){console.error(t)},uxMode:"redirect",scope:"https://www.googleapis.com/auth/tasks"}),d=k.signIn,b=k.loaded;console.log(p);var v=function(){b&&d()};return a.a.createElement(a.a.Fragment,null,!!m&&a.a.createElement("button",{onClick:function(){return v()}},"Sign"),JSON.stringify(p),a.a.createElement(g,{left:n?null:"Sign In",onKeyLeft:function(){v()}}))}s.a.render(a.a.createElement(b,null),document.getElementById("root"))}],[[14,1,2]]]);
//# sourceMappingURL=main.b11ceb02.chunk.js.map