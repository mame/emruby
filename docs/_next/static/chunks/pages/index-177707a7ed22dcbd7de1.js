_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[11],{"/EDR":function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t("23aj")}])},"23aj":function(e,n,t){"use strict";t.r(n),function(e){var r=t("nKUr"),a=t("q1tI"),i=t("g4pe"),s=t.n(i),c=t("YFqc"),o=t.n(c),u=t("Vvt1"),l=t.n(u),f=t("cWnB"),b=t("T/rR"),d=(t("q4sD"),t("q7KB"),l()((function(){return Promise.all([t.e(4),t.e(6)]).then(t.bind(null,"ufaf"))}),{ssr:!1,loadableGenerated:{webpack:function(){return["ufaf"]},modules:["../components/Term"]}})),p=l()((function(){return Promise.all([t.e(7),t.e(15)]).then(t.bind(null,"+Sa3"))}),{ssr:!1,loadableGenerated:{webpack:function(){return["+Sa3"]},modules:["../components/Editor"]}});n.default=function(){var n=Object(a.useState)(),t=n[0],i=n[1],c=Object(a.useState)('puts "# Show Ruby version"\np RUBY_DESCRIPTION\n\nputs\nputs "# Execute Ruby code"\np 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10\np "Hello" + "world"\n\nputs\nputs "# Execute JS code from Ruby"\np emscripten_run_script_int(<<JAVASCRIPT)\n(function() {\n  var sum = 0;\n  for (var i = 1; i <= 100; i++) sum += i;\n  return sum;\n})();\nJAVASCRIPT\n\nputs\nputs "# Sleep one second"\nsleep 1\n\nputs\nputs "# Use an extension library"\n\nrequire "stringio"\np StringIO.new("foobar").read(3)\n\nputs\nputs "# Use an ruby library (did_you_mean) and show an exception"\nStrngIO'),u=c[0],l=c[1],h=Object(a.useState)(!1),j=h[0],m=h[1],v=Object(a.useState)(""),x=v[0],O=v[1],y=Object(a.useCallback)((function(e){return i(e)}),[]),w=Object(a.useCallback)((function(){t&&(t.clear(),m(!0),function(n,t){var r=new Worker(e,void 0);r.onmessage=function(e){return t(e.data)},r.postMessage(n)}(u,(function(e){switch(e[0]){case"status":O(e[1]);break;case"line":t.write(e[1]+"\n");break;case"terminated":m(!1)}})))}),[u,t]);return Object(r.jsxs)("div",{className:"container-fluid",children:[Object(r.jsx)(s.a,{children:Object(r.jsx)("title",{children:"emruby: A Ruby interpreter on browser"})}),Object(r.jsx)("h1",{children:"emruby: A Ruby interpreter on browser"}),Object(r.jsxs)("p",{children:["This is a demonstration of Ruby interpreter (MRI) that works on browser (experimental). Powered by"," ",Object(r.jsx)("a",{href:"https://emscripten.org/",children:"Emscripten"}),"."]}),Object(r.jsx)("h2",{className:"mt-4",children:"Code"}),Object(r.jsx)(p,{text:u,onChange:function(e){return l(e)}}),Object(r.jsx)(f.a,{disabled:j,onClick:w,className:"mt-3",children:j?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(b.a,{as:"span",animation:"border",size:"sm",role:"status","aria-hidden":"true"}),Object(r.jsx)("span",{className:"sr-only",children:"Loading..."})," ",x]}):"Run"}),Object(r.jsx)("h2",{className:"mt-4",children:"Result"}),Object(r.jsx)(d,{onXterm:y,needFit:!0,needLocalEcho:!1}),Object(r.jsx)("h2",{className:"mt-4",children:"See also"}),Object(r.jsxs)("ul",{children:[Object(r.jsxs)("li",{children:[Object(r.jsx)(o.a,{href:"/irb",children:"irb (experimental)"}),Object(r.jsx)(o.a,{href:"/irb-reline",children:"irb with reline (very experimental)"})]}),Object(r.jsx)("li",{children:Object(r.jsx)(o.a,{href:"https://github.com/mame/emruby",children:"source (github)"})})]})]})}}.call(this,t("Jvb7"))},Jvb7:function(e,n,t){e.exports=t.p+"static/chunks/2.6ce73087ed51634b3a7c.worker.js"},"T/rR":function(e,n,t){"use strict";var r=t("wx14"),a=t("zLVn"),i=t("TSYQ"),s=t.n(i),c=t("q1tI"),o=t.n(c),u=t("vUet"),l=o.a.forwardRef((function(e,n){var t=e.bsPrefix,i=e.variant,c=e.animation,l=e.size,f=e.children,b=e.as,d=void 0===b?"div":b,p=e.className,h=Object(a.a)(e,["bsPrefix","variant","animation","size","children","as","className"]),j=(t=Object(u.a)(t,"spinner"))+"-"+c;return o.a.createElement(d,Object(r.a)({ref:n},h,{className:s()(p,j,l&&j+"-"+l,i&&"text-"+i)}),f)}));l.displayName="Spinner",n.a=l},TSYQ:function(e,n,t){var r;!function(){"use strict";var t={}.hasOwnProperty;function a(){for(var e=[],n=0;n<arguments.length;n++){var r=arguments[n];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)&&r.length){var s=a.apply(null,r);s&&e.push(s)}else if("object"===i)for(var c in r)t.call(r,c)&&r[c]&&e.push(c)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(n,[]))||(e.exports=r)}()},cWnB:function(e,n,t){"use strict";var r=t("wx14"),a=t("zLVn"),i=t("TSYQ"),s=t.n(i),c=t("q1tI"),o=t.n(c),u=t("vUet");var l=function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return n.filter((function(e){return null!=e})).reduce((function(e,n){if("function"!==typeof n)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?n:function(){for(var t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];e.apply(this,r),n.apply(this,r)}}),null)};function f(e){return!e||"#"===e.trim()}var b=o.a.forwardRef((function(e,n){var t=e.as,i=void 0===t?"a":t,s=e.disabled,c=e.onKeyDown,u=Object(a.a)(e,["as","disabled","onKeyDown"]),b=function(e){var n=u.href,t=u.onClick;(s||f(n))&&e.preventDefault(),s?e.stopPropagation():t&&t(e)};return f(u.href)&&(u.role=u.role||"button",u.href=u.href||"#"),s&&(u.tabIndex=-1,u["aria-disabled"]=!0),o.a.createElement(i,Object(r.a)({ref:n},u,{onClick:b,onKeyDown:l((function(e){" "===e.key&&(e.preventDefault(),b(e))}),c)}))}));b.displayName="SafeAnchor";var d=b,p=o.a.forwardRef((function(e,n){var t=e.bsPrefix,i=e.variant,c=e.size,l=e.active,f=e.className,b=e.block,p=e.type,h=e.as,j=Object(a.a)(e,["bsPrefix","variant","size","active","className","block","type","as"]),m=Object(u.a)(t,"btn"),v=s()(f,m,l&&"active",i&&m+"-"+i,b&&m+"-block",c&&m+"-"+c);if(j.href)return o.a.createElement(d,Object(r.a)({},j,{as:h,ref:n,className:s()(v,j.disabled&&"disabled")}));n&&(j.ref=n),p?j.type=p:h||(j.type="button");var x=h||"button";return o.a.createElement(x,Object(r.a)({},j,{className:v}))}));p.displayName="Button",p.defaultProps={variant:"primary",active:!1,disabled:!1};n.a=p},vUet:function(e,n,t){"use strict";t.d(n,"a",(function(){return s}));t("wx14");var r=t("q1tI"),a=t.n(r),i=a.a.createContext({});i.Consumer,i.Provider;function s(e,n){var t=Object(r.useContext)(i);return e||t[n]||n}},wx14:function(e,n,t){"use strict";function r(){return(r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}t.d(n,"a",(function(){return r}))},zLVn:function(e,n,t){"use strict";function r(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}t.d(n,"a",(function(){return r}))}},[["/EDR",0,2,5,1,3]]]);