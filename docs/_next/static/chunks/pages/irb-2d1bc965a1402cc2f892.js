_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[12],{Z17B:function(e,t,n){"use strict";n.r(t),function(e){var r=n("nKUr"),s=n("q1tI"),c=n("g4pe"),o=n.n(c),i=n("YFqc"),a=n.n(i),l=n("Vvt1"),u=n.n(l),d=(n("q4sD"),n("q7KB"),u()((function(){return Promise.all([n.e(4),n.e(6)]).then(n.bind(null,"ufaf"))}),{ssr:!1,loadableGenerated:{webpack:function(){return["ufaf"]},modules:["../components/Term"]}}));t.default=function(){Object(s.useEffect)((function(){console.log(navigator),"serviceWorker"in navigator?navigator.serviceWorker.register("/sw.js").then((function(e){console.log("COOP/COEP Service Worker registered: ",e.scope)}),(function(e){console.log("COOP/COEP Service Worker failed to register: ",e)})):console.warn("Cannot register COOP/COEP Service Worker")}),[]);var t=Object(s.useState)(),n=t[0],c=t[1],i=Object(s.useState)(null),l=i[0],u=i[1],f=Object(s.useState)(Object(r.jsx)(r.Fragment,{children:"Status: Not initialized"})),h=f[0],b=f[1],j=Object(s.useCallback)((function(e,t){c(e),u(t)}),[]);return Object(s.useEffect)((function(){if(n&&l){var t=new Worker(e,void 0),s=new SharedArrayBuffer(1024),c=new Int32Array(s);c.fill(-1),t.postMessage(s);var o=0,i=[],a=function(){Atomics.store(c,o,i.shift()),Atomics.notify(c,o),o=(o+1)%1024};return t.onmessage=function(e){var t=e.data;switch(t[0]){case"status":t[1]&&b(Object(r.jsxs)(r.Fragment,{children:["Status: ",t[1]]}));break;case"terminated":b(Object(r.jsx)(r.Fragment,{children:"Status: Terminated. Please reload this page to re-run irb."}));break;case"output":n.write(String.fromCharCode(t[1]));break;case"input":b(Object(r.jsxs)(r.Fragment,{children:["Ready! Type ",Object(r.jsx)("code",{children:"RUBY_DESCRIPTION"})," and press the Enter key"]})),0==i.length?l.read("> ").then((function(e){n.write("\x1b[A> ");for(var t=e+"\n",r=0;r<t.length;r++)i.push(t.charCodeAt(r));i.push(-1),a()})):a()}},function(){l.detach(),n.dispose(),t.terminate()}}}),[n,l]),Object(r.jsxs)("div",{className:"container-fluid",children:[Object(r.jsx)(o.a,{children:Object(r.jsx)("title",{children:"irb on WASM (very experimental)"})}),Object(r.jsx)("h1",{className:"mb-5",children:"irb on WASM (very experimental)"}),Object(r.jsx)("p",{children:"Note: This works on only Chrome before version 91"}),Object(r.jsx)("p",{children:h}),Object(r.jsx)(d,{onXterm:j,needLocalEcho:!0}),Object(r.jsx)("p",{className:"mt-4",children:Object(r.jsx)(a.a,{href:"/",children:"Back to top"})})]})}}.call(this,n("stS3"))},stS3:function(e,t,n){e.exports=n.p+"static/chunks/1.31193b08978930e1819d.worker.js"},wDov:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/irb",function(){return n("Z17B")}])}},[["wDov",0,2,5,1,3]]]);