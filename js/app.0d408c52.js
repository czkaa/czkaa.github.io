(function(t){function e(e){for(var a,s,r=e[0],o=e[1],i=e[2],b=0,j=[];b<r.length;b++)s=r[b],Object.prototype.hasOwnProperty.call(l,s)&&l[s]&&j.push(l[s][0]),l[s]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a]);u&&u(e);while(j.length)j.shift()();return c.push.apply(c,i||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],a=!0,r=1;r<n.length;r++){var o=n[r];0!==l[o]&&(a=!1)}a&&(c.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},l={app:0},c=[];function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],o=r.push.bind(r);r.push=e,r=r.slice();for(var i=0;i<r.length;i++)e(r[i]);var u=o;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0717":function(t,e,n){},"0a49":function(t,e,n){},"26ab":function(t,e,n){"use strict";n("0717")},"34a3":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);var a=n("7a23");function l(t,e,n,l,c,s){const r=Object(a["B"])("router-view");return Object(a["u"])(),Object(a["g"])("div",null,[Object(a["j"])(r,{class:""},{default:Object(a["I"])(({Component:t})=>[Object(a["j"])(a["b"],{mode:"out-in"},{default:Object(a["I"])(()=>[(Object(a["u"])(),Object(a["e"])(Object(a["C"])(t),{key:l.route.path}))]),_:2},1024)]),_:1})])}var c=n("6c02"),s={setup(){return{route:Object(c["c"])()}}},r=(n("eb01"),n("6b0d")),o=n.n(r);const i=o()(s,[["render",l]]);var u=i;const b={"basic-link":""},j=["href"];function d(t,e,n,l,c,s){return Object(a["u"])(),Object(a["g"])("div",b,[Object(a["i"])(Object(a["E"])(n.text)+" ",1),Object(a["h"])("a",{target:"_blank",href:n.link,class:"underline"},Object(a["E"])(n.link),9,j)])}var O={props:{link:String,text:{type:String,default:""}}};const h=o()(O,[["render",d]]);var f=h;const p=["innerHTML"];function m(t,e,n,l,c,s){return Object(a["u"])(),Object(a["g"])("div",{"basic-text":"",innerHTML:n.text,class:"text-justify"},null,8,p)}var g={props:{text:String}};const v=o()(g,[["render",m]]);var y=v;const x=["src"];function k(t,e,n,l,c,s){return Object(a["u"])(),Object(a["g"])("img",{"basic-image":"",src:n.image.url},null,8,x)}var w={props:{image:Object}};const _=o()(w,[["render",k]]);var I=_;const S={key:0,"snippet-item-channel":"",class:"w-full h-full grid grid-cols-2 gap-14 p-3 sm:pl-10 sm:pt-10 sm:block"},T={class:""},D={class:Object(a["p"])(["w-1/3 h-2 z-50","fixed bottom-8 ml-3 left-1/2 transform -rotate-45 origin-top-left","sm:rotate-0 sm:static sm:h-20 sm:ml-0 sm:mt-5 sm:w-1/2  "])},M=["max","disabled"],A={id:"datalist",class:"-mt-7"},P=["value","label"],C={class:"space-y-2"};function U(t,e,n,l,c,s){const r=I,o=y,i=f;return c.data||"Block"===n.item.base_class?(Object(a["u"])(),Object(a["g"])("div",S,[Object(a["h"])("div",T,[s.images.length>0?(Object(a["u"])(),Object(a["e"])(r,{key:0,class:"w-full filter object-contain object-left",style:{maxHeight:"75vh"},image:s.images[c.value].image.display},null,8,["image"])):Object(a["f"])("",!0)]),Object(a["h"])("nav",D,[Object(a["J"])(Object(a["h"])("input",{type:"range",min:"0","onUpdate:modelValue":e[0]||(e[0]=t=>c.value=t),max:s.images.length-1,disabled:0===s.images.length,class:"w-full transform scale-y-mirror"},null,8,M),[[a["G"],c.value]]),Object(a["h"])("div",A,[(Object(a["u"])(!0),Object(a["g"])(a["a"],null,Object(a["A"])(s.images,(t,e)=>(Object(a["u"])(),Object(a["g"])("option",{value:e,label:e},null,8,P))),256))])]),Object(a["h"])("div",C,["Text"===n.item.class?(Object(a["u"])(),Object(a["e"])(o,{key:0,text:n.item.content_html},null,8,["text"])):Object(a["f"])("",!0),"Link"===n.item.class?(Object(a["u"])(),Object(a["e"])(i,{key:1,link:n.item.source.url,text:"contributed code to"},null,8,["link"])):Object(a["f"])("",!0),"Channel"===n.item.base_class?(Object(a["u"])(),Object(a["g"])(a["a"],{key:2},[(Object(a["u"])(!0),Object(a["g"])(a["a"],null,Object(a["A"])(c.data.contents,t=>(Object(a["u"])(),Object(a["g"])(a["a"],{key:t.id},["Text"===t.class?(Object(a["u"])(),Object(a["e"])(o,{key:0,text:t.content_html},null,8,["text"])):Object(a["f"])("",!0)],64))),128)),(Object(a["u"])(!0),Object(a["g"])(a["a"],null,Object(a["A"])(c.data.contents,t=>(Object(a["u"])(),Object(a["g"])(a["a"],{key:t.id},["Link"===t.class?(Object(a["u"])(),Object(a["e"])(i,{key:0,link:t.source.url},null,8,["link"])):Object(a["f"])("",!0)],64))),128)),Object(a["j"])(o,{text:n.item.metadata.description},null,8,["text"])],64)):Object(a["f"])("",!0)])])):Object(a["f"])("",!0)}var E=n("bc3a"),J=n.n(E),H={props:{item:Object},data(){return{data:null,value:0}},computed:{images(){return this.data?this.data.contents.filter(t=>"Image"===t.class):[]}},methods:{fetchData(t){this.error=null,J.a.get("https://api.are.na/v2/channels/"+t).then(t=>{t?(this.data=t.data,console.log(this.data)):console.log("error")})}},mounted(){console.log("MOUNTED"),"Channel"===this.item.class&&this.fetchData(this.item.slug)}};n("26ab");const L=o()(H,[["render",U],["__scopeId","data-v-2fabb529"]]);var z=L;const G={key:0,"snippet-channel":""},N={class:Object(a["p"])(["w-full h-2 py-4 px-3","fixed bottom-4 left-0 -mt-0","sm:-top-2 sm:pl-12 sm_pr-4"])},V=["max","disabled"],q={id:"datalist",class:"transform -translate-y-2"},B=["value","label"],F={class:"fixed w-full left-0 top-0 z-50"};function K(t,e,n,l,c,s){const r=z;return c.data?(Object(a["u"])(),Object(a["g"])("div",G,[Object(a["h"])("nav",N,[Object(a["J"])(Object(a["h"])("input",{type:"range",min:"0","onUpdate:modelValue":e[0]||(e[0]=t=>c.value=t),max:c.data.contents.length-1,disabled:1===c.data.contents.length,class:"w-full transform scale-y-mirror"},null,8,V),[[a["G"],c.value]]),Object(a["h"])("div",q,[(Object(a["u"])(!0),Object(a["g"])(a["a"],null,Object(a["A"])(c.data.contents,(t,e)=>(Object(a["u"])(),Object(a["g"])("option",{value:e,style:Object(a["q"])({width:100/c.data.contents.length+"%"}),label:"Text"===t.class?"[event]":"Channel"===t.class?""+t.title:"[job]"},null,12,B))),256))])]),Object(a["h"])("div",F,[(Object(a["u"])(!0),Object(a["g"])(a["a"],null,Object(a["A"])(c.data.contents,(t,e)=>(Object(a["u"])(),Object(a["g"])(a["a"],{key:t.id},[e===parseInt(c.value)?(Object(a["u"])(),Object(a["e"])(r,{key:0,item:t,class:"w-full pointer-events-auto"},null,8,["item"])):Object(a["f"])("",!0)],64))),128))])])):Object(a["f"])("",!0)}var Q={props:{channel:Object},data(){return{data:null,value:0}},methods:{fetchData(t){this.error=null,J.a.get("https://api.are.na/v2/channels/"+t).then(t=>{t?this.data=t.data:console.log("error")})}},mounted(){console.log("MOUNTED"),this.fetchData(this.channel.slug)}};n("b0ed");const R=o()(Q,[["render",K],["__scopeId","data-v-30d1c658"]]);var W=R;const X=t=>(Object(a["x"])("data-v-5fa1e228"),t=t(),Object(a["v"])(),t),Y={key:0,class:"flex flex-col absolute w-full h-full bg-blue-100 bg-opacity-50"},Z={"page-home":"",class:"w-full h-full"},$=["min","max"],tt={id:"datalist",class:"text-xs transform translate-y-3 mt-0.5"},et=X(()=>Object(a["h"])("option",{class:"invisible"},"2013",-1)),nt=["value","label","disabled"];function at(t,e,n,l,c,s){const r=W;return s.channels?(Object(a["u"])(),Object(a["g"])("div",Y,[Object(a["h"])("div",Z,[(Object(a["u"])(!0),Object(a["g"])(a["a"],null,Object(a["A"])(s.channels,t=>(Object(a["u"])(),Object(a["g"])(a["a"],{key:t.id},[t.title.toString()===c.value.toString()?(Object(a["u"])(),Object(a["e"])(r,{key:0,channel:t,class:"w-full"},null,8,["channel"])):Object(a["f"])("",!0)],64))),128))]),Object(a["h"])("nav",{class:"fixed -top-0 left-1/2 sm:left-0 ml-3 sm:ml-10 w-full pr-8 pl-3 transform origin-top-left rotate-90",style:Object(a["q"])({width:"calc(100vh)"})},[Object(a["J"])(Object(a["h"])("input",{type:"range",class:"w-full z-50",min:s.range[0]-1,"onUpdate:modelValue":e[0]||(e[0]=t=>c.value=t),max:s.range[1]},null,8,$),[[a["G"],c.value]]),Object(a["h"])("div",tt,[et,(Object(a["u"])(!0),Object(a["g"])(a["a"],null,Object(a["A"])(s.range[2],(t,e)=>(Object(a["u"])(),Object(a["g"])("option",{value:e+s.range[0],label:e+s.range[0],disabled:!s.channels.some(t=>parseInt(t.title)===e+s.range[0])},null,8,nt))),256))])],4)])):Object(a["f"])("",!0)}var lt={data(){return{root:"my-online-portfolio",data:0,value:2013}},computed:{channels(){return this.data?this.data.contents.filter(t=>"Channel"===t.base_class):null},range(){return this.channels.length?[parseInt(this.channels[0].title),parseInt(this.channels[this.channels.length-1].title),parseInt(this.channels[this.channels.length-1].title)-parseInt(this.channels[0].title)+1]:null}},methods:{fetchData(t){this.error=null,J.a.get("https://api.are.na/v2/channels/"+t).then(t=>{t?(this.data=t.data,console.log(this.data)):console.log("error")})}},mounted(){console.log("MOUNTED"),this.fetchData(this.root)}};n("aecc");const ct=o()(lt,[["render",at],["__scopeId","data-v-5fa1e228"]]);var st=ct;const rt={home:"",class:"w-full h-full"};function ot(t,e){const n=st;return Object(a["u"])(),Object(a["g"])("div",rt,[Object(a["j"])(n)])}const it={},ut=o()(it,[["render",ot]]);var bt=ut;const jt=[{path:"/",name:"Home",component:bt}],dt=Object(c["a"])({history:Object(c["b"])(),routes:jt});var Ot=dt,ht=n("5502"),ft=Object(ht["a"])({state:{},mutations:{},actions:{},modules:{}});n("ba8c");Object(a["d"])(u).use(ft).use(Ot).mount("#app")},aa61:function(t,e,n){},aecc:function(t,e,n){"use strict";n("34a3")},b0ed:function(t,e,n){"use strict";n("0a49")},ba8c:function(t,e,n){},eb01:function(t,e,n){"use strict";n("aa61")}});
//# sourceMappingURL=app.0d408c52.js.map