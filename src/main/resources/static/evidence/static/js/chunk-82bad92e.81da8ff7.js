(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-82bad92e"],{"03d4":function(t,n,i){"use strict";i("6b0d")},"37f9":function(t,n,i){"use strict";i.r(n);var a=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",[i("div",{staticClass:"main"},[i("div",{staticClass:"index-top"},[i("div",{staticClass:"content"},[t._m(0),i("div",{staticClass:"btn-right"},[i("router-link",{attrs:{to:"/login"}},[t._v("登录")])],1)])]),t._m(1),i("div",{staticClass:"index-content"},[i("div",{staticClass:"item"},[i("div",{staticClass:"total"},[t._v(t._s(t.signData.totalEviCount))]),i("div",{staticClass:"title"},[t._v("存证统计")])]),i("div",{staticClass:"item"},[i("div",{staticClass:"total"},[t._v(t._s(t.signData.totalChainCount))]),i("div",{staticClass:"title"},[t._v("上链统计")])])])]),i("div",{staticClass:"copyright"},[t._v(" CopyRight ©2021 杭州亦笔科技有限公司 ")])])},e=[function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"logo"},[i("i",{staticClass:"icon"},[t._v("EEC")]),t._v("基于区块链的电子存证管理平台 ")])},function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"index-banner"},[i("div",{staticClass:"slogan"},[i("h3",[t._v("Electronic Evidence Chain")]),i("div",{staticClass:"summary"},[t._v("基于区块链的电子存证管理平台")])])])}],r=i("ad8f"),u={data:function(){return{signData:{totalEviCount:"",totalChainCount:""}}},created:function(){this.getData()},methods:{getData:function(){var t=this;Object(r["n"])().then((function(n){var i=n.data;t.signData=i}))}}},o=u,c=(i("03d4"),i("2877")),d=Object(c["a"])(o,a,e,!1,null,"6a0c8186",null);n["default"]=d.exports},"6b0d":function(t,n,i){},ad8f:function(t,n,i){"use strict";i.d(n,"j",(function(){return e})),i.d(n,"f",(function(){return r})),i.d(n,"e",(function(){return u})),i.d(n,"a",(function(){return o})),i.d(n,"q",(function(){return c})),i.d(n,"k",(function(){return d})),i.d(n,"m",(function(){return s})),i.d(n,"t",(function(){return l})),i.d(n,"i",(function(){return f})),i.d(n,"d",(function(){return h})),i.d(n,"g",(function(){return v})),i.d(n,"l",(function(){return C})),i.d(n,"b",(function(){return p})),i.d(n,"r",(function(){return m})),i.d(n,"h",(function(){return b})),i.d(n,"p",(function(){return j})),i.d(n,"c",(function(){return O})),i.d(n,"u",(function(){return _})),i.d(n,"s",(function(){return g})),i.d(n,"n",(function(){return E})),i.d(n,"o",(function(){return w}));var a=i("b775");function e(t){return Object(a["a"])({url:"/eviChain/product/list",method:"post",data:t})}function r(){return Object(a["a"])({url:"/eviChain/user/chainInfo",method:"post"})}function u(t){return Object(a["a"])({url:"/eviChain/user/deployContract",method:"post",data:t})}function o(t){return Object(a["a"])({url:"/eviChain/product/add",method:"post",data:t})}function c(t){return Object(a["a"])({url:"/eviChain/product/modify",method:"post",data:t})}function d(){return Object(a["a"])({url:"/eviChain/product/selectList",method:"post"})}function s(t){return Object(a["a"])({url:"/eviChain/step/selectList",method:"post",data:t})}function l(t){return Object(a["a"])({url:"/eviChain/file/upload",method:"post",data:t})}function f(t){return Object(a["a"])({url:"/eviChain/field/selectList",method:"post",data:t})}function h(t){return Object(a["a"])({url:"/eviChain/field/add",method:"post",data:t})}function v(t){return Object(a["a"])({url:"/eviChain/data/list",method:"post",data:t})}function C(t){return Object(a["a"])({url:"/eviChain/step/list",method:"post",data:t})}function p(t){return Object(a["a"])({url:"/eviChain/step/add",method:"post",data:t})}function m(t){return Object(a["a"])({url:"/eviChain/step/modify",method:"post",data:t})}function b(t){return Object(a["a"])({url:"/eviChain/field/list",method:"post",data:t})}function j(t){return Object(a["a"])({url:"/eviChain/field/modify",method:"post",data:t})}function O(t){return Object(a["a"])({url:"/eviChain/data/bqSave",method:"post",data:t})}function _(t){return Object(a["a"])({url:"/eviChain/data/validChain",method:"post",data:t})}function g(t){return Object(a["a"])({url:"/eviChain/data/previewChain",method:"post",data:t})}function E(){return Object(a["a"])({url:"/eviChain/data/getTotalInfo",method:"post"})}function w(t){return Object(a["a"])({url:"/eviChain/user/"+t,method:"post"})}}}]);