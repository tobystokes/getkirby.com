!function(e){var t=window.webpackJsonp;window.webpackJsonp=function(n,o,i){for(var a,u,c=0,d=[];c<n.length;c++)u=n[c],r[u]&&d.push(r[u][0]),r[u]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a]);for(t&&t(n,o,i);d.length;)d.shift()()};var n={},r={3:0};function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.e=function(e){var t=r[e];if(0===t)return new Promise(function(e){e()});if(t)return t[2];var n=new Promise(function(n,o){t=r[e]=[n,o]});t[2]=n;var i=document.getElementsByTagName("head")[0],a=document.createElement("script");a.type="text/javascript",a.charset="utf-8",a.async=!0,a.timeout=12e4,o.nc&&a.setAttribute("nonce",o.nc),a.src=o.p+"js/"+({0:"code",1:"search",2:"tooltip"}[e]||e)+"-bundle.js?v="+{0:"84f20e4a",1:"74bad12e",2:"1e9050ee"}[e];var u=setTimeout(c,12e4);function c(){a.onerror=a.onload=null,clearTimeout(u);var t=r[e];0!==t&&(t&&t[1](new Error("Loading chunk "+e+" failed.")),r[e]=void 0)}return a.onerror=a.onload=c,i.appendChild(a),n},o.m=e,o.c=n,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/assets/",o.oe=function(e){throw console.error(e),e},o(o.s=27)}([,,,,,,,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){};return new Promise(function(t){"loading"!==document.readyState?(e(),t()):document.addEventListener("DOMContentLoaded",function(){e(),t()})})}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{!r&&u.return&&u.return()}finally{if(o)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),o=function(e){var t=r(e,2)[1];Prism.languages.kirbytext=Prism.languages.extend("markdown",{}),Prism.languages.insertBefore("kirbytext","prolog",{kirbytag:{pattern:/\([a-z0-9_-]+:.*?\)/i,inside:{"kirbytag-bracket":/^\(|\)$/,"kirbytag-name":{pattern:/^[a-z0-9_-]+:/i},"kirbytag-attr":{pattern:/([^:]\s+)[a-z0-9_-]+:/i,lookbehind:!0}}}}),Prism.languages.kirbycontent={delimiter:/\n----\s*\n*/,property:{pattern:/(^\n*|\n----\s*\n*)[a-zA-Z0-9_\-\u0020]+:/,lookbehind:!0}},Prism.plugins.customClass.prefix("code-"),Prism.plugins.toolbar.registerButton("copy-to-clipboard",function(e){var n=document.createElement("a");n.classList.add("link-reset"),n.insertAdjacentHTML("beforeend",'<svg viewBox="0 0 16 16" width="16" height="16" class="icon"><path d="M10,4H2C1.4,4,1,4.4,1,5v10c0,0.6,0.4,1,1,1h8c0.6,0,1-0.4,1-1V5C11,4.4,10.6,4,10,4z"></path> <path data-color="color-2" d="M14,0H4v2h9v11h2V1C15,0.4,14.6,0,14,0z"></path></svg>');var r,o=document.createElement("span");function i(){setTimeout(function(){o.textContent="Copy"},5e3)}return o.textContent="Copy",n.appendChild(o),(r=new t(n,{text:function(){return e.code}})).on("success",function(){o.textContent="Copied!",i()}),r.on("error",function(){o.textContent="Press Ctrl+C/⌘+C to copy",i()}),n})};t.default=function(){var e=document.querySelectorAll('pre code[class^="language-"], pre code[class*=" language-"], pre.code > code'),t=/(?:^| )language(-[a-z])( |$)*/i;if(e.length>0){for(var r,i=0,a=e.length;i<a&&(r=e[i]);i++)t.test(r.className)||r.classList.add("language-plaintext");Promise.all([n.e(0).then(n.bind(null,25)),n.e(0).then(n.bind(null,26))]).then(o)}}},,,,,,,,,,,,,,,,,function(e,t,n){n(28),n(35),n(36),n(37),n(38),n(39),n(40),n(41),n(42),n(43),n(44),n(45),n(46),n(47),n(48),n(49),n(50),n(51),n(52),n(53),n(54),n(55),n(56),n(57),n(58),n(59),e.exports=n(60)},function(e,t,n){"use strict";n(29),n(30),n(32),n(34);var r,o=n(10);(0,((r=o)&&r.__esModule?r:{default:r}).default)()},function(e,t,n){(function(){"use strict";"undefined"!=typeof document&&function(e){var t;function n(){t||(t=!0,e())}"complete"===document.readyState?e():(t=!1,document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1))}(function(){var e=!0,t=!1,n=null,r={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function o(e){return!(!e||e===document||"HTML"===e.nodeName||"BODY"===e.nodeName)}function i(e){e.classList.contains("focus-visible")||(e.classList.add("focus-visible"),e.setAttribute("data-focus-visible-added",""))}function a(t){e=!1}function u(){document.addEventListener("mousemove",c),document.addEventListener("mousedown",c),document.addEventListener("mouseup",c),document.addEventListener("pointermove",c),document.addEventListener("pointerdown",c),document.addEventListener("pointerup",c),document.addEventListener("touchmove",c),document.addEventListener("touchstart",c),document.addEventListener("touchend",c)}function c(t){"html"!==t.target.nodeName.toLowerCase()&&(e=!1,document.removeEventListener("mousemove",c),document.removeEventListener("mousedown",c),document.removeEventListener("mouseup",c),document.removeEventListener("pointermove",c),document.removeEventListener("pointerdown",c),document.removeEventListener("pointerup",c),document.removeEventListener("touchmove",c),document.removeEventListener("touchstart",c),document.removeEventListener("touchend",c))}document.addEventListener("keydown",function(t){o(document.activeElement)&&i(document.activeElement),e=!0},!0),document.addEventListener("mousedown",a,!0),document.addEventListener("pointerdown",a,!0),document.addEventListener("touchstart",a,!0),document.addEventListener("focus",function(t){var n,a,u;o(t.target)&&(e||(n=t.target,a=n.type,"INPUT"==(u=n.tagName)&&r[a]&&!n.readonly||"TEXTAREA"==u&&!n.readonly||"true"==n.contentEditable))&&(i(t.target),e=!1)},!0),document.addEventListener("blur",function(e){var r;o(e.target)&&e.target.classList.contains("focus-visible")&&(t=!0,window.clearTimeout(n),n=window.setTimeout(function(){t=!1,window.clearTimeout(n)},100),(r=e.target).hasAttribute("data-focus-visible-added")&&(r.classList.remove("focus-visible"),r.removeAttribute("data-focus-visible-added")))},!0),document.addEventListener("visibilitychange",function(n){"hidden"==document.visibilityState&&(t&&(e=!0),u())},!0),u(),document.body.classList.add("js-focus-visible")})})()},function(e,t,n){"use strict";var r=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{!r&&u.return&&u.return()}finally{if(o)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),o=a(n(9)),i=a(n(31));function a(e){return e&&e.__esModule?e:{default:e}}var u='<svg viewBox="0 0 5 11" width="5" height="11" aria-hidden="true"><path d="M2.96153846,5.41538462 L0,9.13846154 L1.35384615,10.1538462 L4.73846154,5.92307692 C4.82307692,5.75384615 4.90769231,5.58461538 4.90769231,5.41538462 C4.90769231,5.24615385 4.82307692,5.07692308 4.73846154,4.90769231 L1.35384615,0.676923077 L0,1.69230769 L2.96153846,5.41538462 Z"/></svg>';(0,o.default)(function(){var e=document.querySelector(".js-menu-search");if(e){var t=document.querySelector(".js-menu-search-input");Promise.all([n.e(1).then(n.bind(null,76)),n.e(1).then(n.bind(null,77))]).then(function(n){var o=r(n,2),a=o[0],c=o[1],d=a("S7OGBIAJTV","d161a2f4cd2d69247c529a3371ad3050").initIndex("getkirby-3"),s="",l=[],f=new c(t,{list:[],filter:function(){return!0},sort:!1,item:function(e){var t=document.createElement("li");return"VIEW_ALL_RESULTS_UXfpeDFlmye9rXkXP5wd"===e.label?(t.classList.add("menu-search-view-all"),t.innerHTML="<strong>View all results</strong>"+u):"SEARCH_ERROR_UXfpeDFlmye9rXkXP5wd"===e.label?(t.classList.add("menu-search-error"),t.innerHTML="<strong>Sorry, an error occured. Please try advanced search instead.</strong>"+u):t.innerHTML="<strong>"+e.label+"</strong> <small>"+e.value+"</small>",t}});t.addEventListener("keypress",function(t){(t.key&&"Enter"===t.key||13===t.keyCode)&&e.submit()}),t.addEventListener("keyup",function(){var e=t.value.trim();return e===s||(""===e?(s="",l=[],f.list=l,f.evaluate(),!0):(s=e,e.length<=2||void(0,i.default)(250).then(function(){var n={hitsPerPage:5},r=t.getAttribute("data-filters");r&&(n.filters=r),d.search(e,n,function(e,t){if(l=[],e)return"console"in window&&console.error("Quicksearch error",e),l.push({label:"SEARCH_ERROR_UXfpeDFlmye9rXkXP5wd",value:0}),f.list=l,f.evaluate(),void f.open();for(var n=0,r=t.hits.length;n<r;n++){var o=t.hits[n];l.push({label:o.title,value:o.objectID})}t.nbHits>0&&t.nbHits>t.hitsPerPage&&l.push({label:"VIEW_ALL_RESULTS_UXfpeDFlmye9rXkXP5wd",value:t.nbHits}),f.list=l,f.evaluate(),f.open()})})))}),t.addEventListener("awesomplete-select",function(t){t.preventDefault(),"VIEW_ALL_RESULTS_UXfpeDFlmye9rXkXP5wd"===t.text.label||"SEARCH_ERROR_UXfpeDFlmye9rXkXP5wd"===t.text.label?e.submit():window.location.href="/"+t.text.value})})}})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=(r=0,function(e){return new Promise(function(t){clearTimeout(r),r=setTimeout(t(),e)})});t.default=o},function(e,t,n){"use strict";var r,o=n(33),i=n(9);function a(e){var t=e.querySelector("[aria-expanded]");if(!t)return!1;var n=e.querySelector(".js-sidebar-submenu");return!n.hidden?(n.hidden=!0,t.setAttribute("aria-expanded",!1),function(e){for(var t=0,n=e.querySelectorAll("a"),r=n.length;t<r;t++)n[t].setAttribute("tabindex","-1")}(n)):(t.setAttribute("aria-expanded",!0),n.hidden=!1,function(e){for(var t=0,n=e.querySelectorAll("a"),r=n.length;t<r;t++)n[t].setAttribute("tabindex","0")}(n)),!0}(0,((r=i)&&r.__esModule?r:{default:r}).default)().then(function(){var e=document.querySelector(".js-sidebar");e&&((0,o.on)(e,"keydown","a.sidebar-item-link",function(e){(e.key&&("ArrowRight"===e.key||"ArrowLeft"===e.key)||39===e.keyCode||37===e.keyCode)&&a(this.parentNode)&&e.preventDefault()}),(0,o.on)(e,"click",".js-sidebar-toggle",function(e){e.preventDefault(),a(this.parentNode)}))})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.on=function(e,t,n,r){e.addEventListener(t,function(t){for(var o=e.querySelectorAll(n),i=t.target,a=0,u=o.length;a<u;a++)for(var c=i,d=o[a];c&&c!==e;){if(c===d)return r.call(d,t);c=c.parentNode}})}},function(e,t,n){"use strict";var r,o=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{!r&&u.return&&u.return()}finally{if(o)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),i=n(9);var a={interactive:!0,animation:"shift-away",arrow:!0,delay:[150,300],theme:"kirby",maxWidth:"25rem",performance:!0};(0,((r=i)&&r.__esModule?r:{default:r}).default)().then(function(){var e=document.querySelectorAll("[data-tooltip]");e.length&&Promise.all([n.e(2).then(n.bind(null,78))]).then(function(t){for(var n=o(t,1)[0],r=0,i=e.length;r<i;r++){var u=e[r],c='<div class="tippy-inner | text text-small -background:black">'+u.getAttribute("data-tooltip")+"</div>";u.setAttribute("title",c),n(u,a)}})})},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){}]);
//# sourceMappingURL=index.js.map