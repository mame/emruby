_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[11],{"/EDR":function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t("23aj")}])},"23aj":function(e,n,t){"use strict";t.r(n),function(e){var r=t("nKUr"),a=t("q1tI"),s=t("g4pe"),i=t.n(s),c=t("YFqc"),o=t.n(c),u=t("Vvt1"),l=t.n(u),f=t("cWnB"),d=t("T/rR"),b=(t("q4sD"),t("q7KB"),l()((function(){return Promise.all([t.e(5),t.e(6)]).then(t.bind(null,"ufaf"))}),{ssr:!1,loadableGenerated:{webpack:function(){return["ufaf"]},modules:["../components/Term"]}})),p=l()((function(){return Promise.all([t.e(7),t.e(14)]).then(t.bind(null,"+Sa3"))}),{ssr:!1,loadableGenerated:{webpack:function(){return["+Sa3"]},modules:["../components/Editor"]}});n.default=function(){var n=Object(a.useState)(),t=n[0],s=n[1],c=Object(a.useState)('puts "# Show Ruby version"\np RUBY_DESCRIPTION\n\nputs\nputs "# Execute Ruby code"\np 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10\np "Hello" + "world"\n\nputs\nputs "# Execute JS code from Ruby"\np emscripten_run_script_int(<<JAVASCRIPT)\n(function() {\n  var sum = 0;\n  for (var i = 1; i <= 100; i++) sum += i;\n  return sum;\n})();\nJAVASCRIPT\n\nputs\nputs "# Sleep one second"\nsleep 1\n\nputs\nputs "# Use an extension library"\n\nrequire "stringio"\np StringIO.new("foobar").read(3)\n\nputs\nputs "# Use an ruby library (did_you_mean) and show an exception"\nStrngIO'),u=c[0],l=c[1],h=Object(a.useState)(!1),m=h[0],j=h[1],v=Object(a.useState)(""),y=v[0],O=v[1],x=Object(a.useCallback)((function(e){return s(e)}),[]),w=Object(a.useCallback)((function(){t&&(t.clear(),j(!0),function(n,t){var r=new Worker(e,void 0);r.onmessage=function(e){return t(e.data)},r.postMessage(n)}(u,(function(e){switch(e[0]){case"status":O(e[1]);break;case"line":t.write(e[1]+"\n");break;case"terminated":j(!1)}})))}),[u,t]);return Object(r.jsxs)("div",{className:"container-fluid",children:[Object(r.jsx)(i.a,{children:Object(r.jsx)("title",{children:"emruby: Emscripten'ed Ruby"})}),Object(r.jsx)("h1",{children:"emruby: Emscripten'ed Ruby"}),Object(r.jsx)("p",{children:"This is a demonstration of Ruby interpreter (MRI) that works on browser (experimental)."}),Object(r.jsx)("h2",{className:"mt-4",children:"Code"}),Object(r.jsx)(p,{text:u,onChange:function(e){return l(e)}}),Object(r.jsx)(f.a,{disabled:m,onClick:w,className:"mt-3",children:m?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(d.a,{as:"span",animation:"border",size:"sm",role:"status","aria-hidden":"true"}),Object(r.jsx)("span",{className:"sr-only",children:"Loading..."})," ",y]}):"Run"}),Object(r.jsx)("h2",{className:"mt-4",children:"Result"}),Object(r.jsx)(b,{onXterm:x,needLocalEcho:!1}),Object(r.jsx)("h2",{className:"mt-4",children:"See also"}),Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:Object(r.jsx)(o.a,{href:"/irb",as:"/irb.html",children:"irb on WASM (very experimental)"})}),Object(r.jsx)("li",{children:Object(r.jsx)(o.a,{href:"https://github.com/mame/emruby",children:"source (github)"})})]})]})}}.call(this,t("ArPG"))},ArPG:function(e,n,t){e.exports=t.p+"static/chunks/1.cd6bcce756895969d807.worker.js"},"RAs/":function(e,n,t){"use strict";function r(){return(r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}t.d(n,"a",(function(){return r}))},"T/rR":function(e,n,t){"use strict";var r=t("RAs/"),a=t("hVfy"),s=t("TSYQ"),i=t.n(s),c=t("q1tI"),o=t.n(c),u=t("vUet"),l=o.a.forwardRef((function(e,n){var t=e.bsPrefix,s=e.variant,c=e.animation,l=e.size,f=e.children,d=e.as,b=void 0===d?"div":d,p=e.className,h=Object(a.a)(e,["bsPrefix","variant","animation","size","children","as","className"]),m=(t=Object(u.a)(t,"spinner"))+"-"+c;return o.a.createElement(b,Object(r.a)({ref:n},h,{className:i()(p,m,l&&m+"-"+l,s&&"text-"+s)}),f)}));l.displayName="Spinner",n.a=l},TSYQ:function(e,n,t){var r;!function(){"use strict";var t={}.hasOwnProperty;function a(){for(var e=[],n=0;n<arguments.length;n++){var r=arguments[n];if(r){var s=typeof r;if("string"===s||"number"===s)e.push(r);else if(Array.isArray(r)&&r.length){var i=a.apply(null,r);i&&e.push(i)}else if("object"===s)for(var c in r)t.call(r,c)&&r[c]&&e.push(c)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(n,[]))||(e.exports=r)}()},cWnB:function(e,n,t){"use strict";var r=t("RAs/"),a=t("hVfy"),s=t("TSYQ"),i=t.n(s),c=t("q1tI"),o=t.n(c),u=t("vUet");var l=function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return n.filter((function(e){return null!=e})).reduce((function(e,n){if("function"!==typeof n)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?n:function(){for(var t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];e.apply(this,r),n.apply(this,r)}}),null)};function f(e){return!e||"#"===e.trim()}var d=o.a.forwardRef((function(e,n){var t=e.as,s=void 0===t?"a":t,i=e.disabled,c=e.onKeyDown,u=Object(a.a)(e,["as","disabled","onKeyDown"]),d=function(e){var n=u.href,t=u.onClick;(i||f(n))&&e.preventDefault(),i?e.stopPropagation():t&&t(e)};return f(u.href)&&(u.role=u.role||"button",u.href=u.href||"#"),i&&(u.tabIndex=-1,u["aria-disabled"]=!0),o.a.createElement(s,Object(r.a)({ref:n},u,{onClick:d,onKeyDown:l((function(e){" "===e.key&&(e.preventDefault(),d(e))}),c)}))}));d.displayName="SafeAnchor";var b=d,p=o.a.forwardRef((function(e,n){var t=e.bsPrefix,s=e.variant,c=e.size,l=e.active,f=e.className,d=e.block,p=e.type,h=e.as,m=Object(a.a)(e,["bsPrefix","variant","size","active","className","block","type","as"]),j=Object(u.a)(t,"btn"),v=i()(f,j,l&&"active",s&&j+"-"+s,d&&j+"-block",c&&j+"-"+c);if(m.href)return o.a.createElement(b,Object(r.a)({},m,{as:h,ref:n,className:i()(v,m.disabled&&"disabled")}));n&&(m.ref=n),p?m.type=p:h||(m.type="button");var y=h||"button";return o.a.createElement(y,Object(r.a)({},m,{className:v}))}));p.displayName="Button",p.defaultProps={variant:"primary",active:!1,disabled:!1};n.a=p},hVfy:function(e,n,t){"use strict";function r(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}t.d(n,"a",(function(){return r}))},vUet:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));t("RAs/");var r=t("q1tI"),a=t.n(r),s=a.a.createContext({});s.Consumer,s.Provider;function i(e,n){var t=Object(r.useContext)(s);return e||t[n]||n}}},[["/EDR",0,2,4,1,3]]]);