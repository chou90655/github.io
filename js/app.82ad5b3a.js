(function(t){function e(e){for(var r,a,u=e[0],c=e[1],s=e[2],l=0,d=[];l<u.length;l++)a=u[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);f&&f(e);while(d.length)d.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,a=1;a<n.length;a++){var u=n[a];0!==o[u]&&(r=!1)}r&&(i.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},a={app:0},o={app:0},i=[];function u(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"7f161baa","chunk-0f96e507":"2d6519b3","chunk-35a9749a":"0c83b825"}[t]+".js"}function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={"chunk-0f96e507":1,"chunk-35a9749a":1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise((function(e,n){for(var r="css/"+({about:"about"}[t]||t)+"."+{about:"31d6cfe0","chunk-0f96e507":"0a32e41f","chunk-35a9749a":"438545af"}[t]+".css",o=c.p+r,i=document.getElementsByTagName("link"),u=0;u<i.length;u++){var s=i[u],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===o))return e()}var d=document.getElementsByTagName("style");for(u=0;u<d.length;u++){s=d[u],l=s.getAttribute("data-href");if(l===r||l===o)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var r=e&&e.target&&e.target.src||o,i=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[t],f.parentNode.removeChild(f),n(i)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){a[t]=0})));var r=o[t];if(0!==r)if(r)e.push(r[2]);else{var i=new Promise((function(e,n){r=o[t]=[e,n]}));e.push(r[2]=i);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=u(t);var d=new Error;s=function(e){l.onerror=l.onload=null,clearTimeout(f);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}o[t]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var d=0;d<s.length;d++)e(s[d]);var f=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"18e2":function(t,e,n){},"1a59":function(t,e,n){"use strict";e["a"]=["周xx1","周xx2","周xx3","周xx4","周xx5","陈xx1","陈xx2","陈xx3","陈xx4","陈xx5","陈xx6"]},"28f3":function(t,e,n){},"498f":function(t,e,n){"use strict";e["a"]=[{l:"板油",v:"10.00"},{l:"五花肉",v:"12.00"},{l:"排骨",v:"13.00"},{l:"猪肝",v:"8.00"},{l:"猪心",v:"9.00"}]},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=(n("df49"),n("e7bd")),o=n("63b4"),i=n("0679");r["a"].use(a["a"]),r["a"].use(o["a"]),r["a"].use(i["a"]);var u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("div",{staticClass:"btn"},[n("cube-button",{attrs:{inline:"",primary:""},on:{click:function(e){t.seditsp=1}}},[t._v("分店 "),n("i",{staticClass:"cubeic-edit"})]),n("cube-button",{attrs:{inline:"",primary:""},on:{click:function(e){t.seditkd=1}}},[t._v("类型 "),n("i",{staticClass:"cubeic-edit"})]),n("cube-button",{attrs:{inline:""},on:{click:t.expt}},[t._v("导出")]),n("cube-button",{attrs:{inline:"",primary:"",outline:""}},[t._v("总计: "+t._s(t.total.toFixed(2))+"元")])],1),n("ul",{staticClass:"thd"},t._l(t.thead,(function(e,r){return n("li",{key:r,domProps:{innerHTML:t._s(e)}})})),0),n("cube-scroll",{ref:"scroll",staticClass:"ctt",attrs:{data:t.list,options:{scrollbar:!0}}},t._l(t.list,(function(e,r){return n("ul",{key:r,class:["list",e.d&&"odd"]},[n("li",{on:{click:function(n){return t.hdclc(e)}}},[t._v(t._s(e.sp))]),n("li",[t._v(t._s(e.l))]),n("li",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.v,expression:"_.v"}],attrs:{type:"number"},domProps:{value:e.v},on:{change:function(n){return t.hdcg("v",e)},input:function(n){n.target.composing||t.$set(e,"v",n.target.value)}}})]),n("li",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.n,expression:"_.n"}],attrs:{type:"number"},domProps:{value:e.n},on:{change:function(n){return t.hdcg("n",e)},input:function(n){n.target.composing||t.$set(e,"n",n.target.value)}}})]),n("li",{on:{click:function(n){return t.hdclc(e,1)}}},[t._v(t._s(((e.v||0)*(e.n||0)).toFixed(2)))])])})),0),t.seditsp?n("editsp",{on:{close:t.close}}):t._e(),t.seditkd?n("editkd",{on:{close:t.close}}):t._e()],1)},c=[],s=n("2909"),l=n("5530"),d=(n("d81d"),n("4de4"),n("0481"),n("b680"),n("13d5"),n("c740"),n("99af"),n("7db0"),n("d3b7"),n("3ca3"),n("ddb0"),n("1a59")),f=n("f59f"),p=n.n(f),h=n("498f");n("fb6a"),n("c975"),n("4160"),n("159b"),n("a434");function v(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1e3;o["a"].$create({txt:t||"网络异常",type:"txt",time:n,mask:e}).show()}function b(t){return("0"+t).slice(-2)}function m(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"-",r=new Date(t-24*e*36e5);return r.getFullYear()+n+b(r.getMonth()+1)+n+b(r.getDate())}r["a"].use(o["a"]);(function(){var t=navigator.userAgent,e=t.indexOf("Android")>-1||t.indexOf("Adr")>-1,n=t.indexOf("iPhone")>-1||t.indexOf("iPad")>-1})();var g=function(t,e){return JSON.parse(localStorage[t]||null)||e},x=g("kd",h["a"]),y={data:function(){return window.__this=this,{data:g("sp",d["a"]).map((function(t,e){return x.map((function(n,r){return Object(l["a"])(Object(l["a"])({},n),{},{sp:t,n:"0",d:e%2,o:r,s:!r})}))})),seditsp:0,seditkd:0,total:0,thead:["分店","类型","价格<i>(元/斤)</i>","重量<i>(斤)</i>","合计<i>(元)</i>"]}},computed:{list:function(){return this.data.flat().filter((function(t){return t.s}))}},watch:{list:function(){this.gettotal()}},methods:{hdcg:function(t,e){e[t]=(+e[t]).toFixed(2)||"0.00",this.gettotal()},expt:function(){try{var t=this.list.map((function(t){return{"分店":t.sp,"类型":t.l,"价格(元/斤)":t.v,"重量(斤)":t.n,"合计(元)":((t.v||0)*(t.n||0)).toFixed(2)}})),e=p.a.parse(t,{fields:["分店","类型","价格(元/斤)","重量(斤)","合计(元)"],excelStrings:!0}),n="data:text/csv;charset=utf-8,\ufeff"+e;this.createDownLoadClick(n,"".concat("猪肉 "+m(new Date,0,"."),".csv"))}catch(r){v("导出失败，请重试")}},createDownLoadClick:function(t,e){var n=document.createElement("a");n.href=encodeURI(t),n.download=e,document.body.appendChild(n),n.click(),document.body.removeChild(n)},gettotal:function(){this.total=this.list.reduce((function(t,e){return e.n*e.v+t}),0)},hdclc:function(t,e){var n=this.data.findIndex((function(e){return e[0].sp===t.sp})),r=this.data[n];if(e){if(1===r.filter((function(t){return t.s})).length)return v("分店至少保留一条",!1);t.s=!1,this.$set(this.data,n,[].concat(Object(s["a"])(r.filter((function(t){return t.s}))),Object(s["a"])(r.filter((function(t){return!t.s})))))}else{var a=r.find((function(t){return!t.s}));a&&(a.s=!0,this.$set(this.data,n,Object(s["a"])(r)))}},close:function(t){if(this.seditsp=0,this.seditkd=0,t){var e=g("kd",h["a"]);this.data=g("sp",d["a"]).map((function(t,n){return e.map((function(e,r){return Object(l["a"])(Object(l["a"])({},e),{},{sp:t,n:"0.00",d:n%2,o:r,s:!r})}))}))}}},components:{editsp:function(){return n.e("chunk-35a9749a").then(n.bind(null,"b454"))},editkd:function(){return n.e("chunk-0f96e507").then(n.bind(null,"9b82"))}}},k=y,_=(n("f186"),n("2877")),w=Object(_["a"])(k,u,c,!1,null,"26992706",null),O=w.exports,j=n("8c4f");r["a"].use(j["a"]);var C=[{path:"/",name:"Home",component:O},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],P=new j["a"]({routes:C}),S=P,E=n("2f62");r["a"].use(E["a"]);var A=new E["a"].Store({state:{},mutations:{},actions:{},modules:{}});n("28f3"),n("5cfb");r["a"].config.productionTip=!1,new r["a"]({router:S,store:A,render:function(t){return t(O)}}).$mount("#app")},f186:function(t,e,n){"use strict";n("18e2")}});