(this.webpackJsonprickandmorty=this.webpackJsonprickandmorty||[]).push([[0],{36:function(e,t,n){},38:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(30),s=n.n(r),i=(n(36),n(4)),o=n.n(i),u=n(9),j=n(10),d=(n(38),n(12)),l=n(1),b=function(e){var t=e.buttonName,n=e.disabled,c=e.linkTo;return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(d.b,{to:c,className:"primaryButton",disabled:n,children:t})})},p=(n(44),function(e){var t=e.chipDescription,n=e.color;return Object(l.jsx)("div",{className:"chip",style:{backgroundColor:n},children:t})}),h=(n(45),function(e){var t=e.urlImage,n=e.name,c=e.gender,a=e.origin,r=e.type,s=e.status,i=e.color;return Object(l.jsxs)("div",{className:"card",children:[Object(l.jsx)("div",{className:"card-image",children:Object(l.jsx)("img",{src:t,alt:"",height:"100",width:"200"})}),Object(l.jsxs)("div",{className:"card-content",children:[Object(l.jsxs)("div",{className:"card-description",children:[Object(l.jsxs)("p",{children:["Nombre: ",n]}),Object(l.jsxs)("p",{children:["G\xe9nero: ",c]}),Object(l.jsxs)("p",{children:["Origen: ",a]}),Object(l.jsxs)("p",{children:["Tipo: ",r]})]}),Object(l.jsx)("div",{className:"card-chip",children:Object(l.jsx)(p,{chipDescription:s,color:i})})]})]})}),f=(n(46),function(e){var t=e.value,n=e.name;return Object(l.jsx)("div",{children:Object(l.jsx)("input",{className:"input",value:t,placeholder:"Buscar",name:n})})}),O=n(19),m=(n(47),function(){return Object(l.jsxs)("div",{className:"container-loading",children:[Object(l.jsx)(O.a,{className:"player-one",loop:!0,src:"https://assets7.lottiefiles.com/packages/lf20_4jsnlwpe.json",autoplay:!0}),Object(l.jsx)(O.a,{className:"player-two",loop:!0,src:"https://assets10.lottiefiles.com/packages/lf20_yTjvtJ.json",autoplay:!0})]})}),x=n(13),v=n.n(x),g="https://rickandmortyapi.com/api/character",N=function(){var e=Object(u.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("".concat(g,"/?page=").concat(t));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(u.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("".concat(g,"/").concat(t));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();n(66);var y=function(e){var t=e.match,n=Object(c.useState)([]),a=Object(j.a)(n,2),r=a[0],s=a[1],i=Object(c.useState)(!0),p=Object(j.a)(i,2),O=p[0],x=p[1],v=Object(c.useState)(""),g=Object(j.a)(v,2),w=g[0],y=g[1],k=parseInt(t.params.id,10)||1,C=Object(c.useState)(0),S=Object(j.a)(C,2),T=S[0],F=S[1],E=function(){var e=Object(u.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return x(!0),e.next=3,N(k);case 3:t=e.sent,n=t.data.results.filter((function(e){return"unknown"!==e.status})),s(n),F(t.data.info.pages),setTimeout((function(){x(!1)}),900);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){E()}),[k]),O?Object(l.jsx)(m,{}):Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("form",{action:"",onSubmit:function(e){e.preventDefault();var t=new FormData(e.target);y(t.get("name"))},children:Object(l.jsx)(f,{className:"input",name:"name"})}),Object(l.jsx)("div",{className:"container",children:r.filter((function(e){return""===w||e.name.toLowerCase().includes(w.toLowerCase())?e:void 0})).map((function(e){var t;return Object(l.jsx)("div",{className:"div-card",children:Object(l.jsx)(d.b,{to:"".concat(k,"/episode/").concat(e.id),children:Object(l.jsx)(h,{urlImage:e.image,name:e.name,gender:e.gender,origin:null===(t=e.origin)||void 0===t?void 0:t.name,type:e.type,status:e.status,color:"Alive"===e.status?"#40CC5899":"#E0404099"})})},e.id)}))}),Object(l.jsx)("div",{className:"div-buttons",children:!w&&Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"btn",children:[Object(l.jsx)(b,{linkTo:"/".concat(k-1),buttonName:"Anterior",disabled:1===k}),Object(l.jsx)(b,{linkTo:"/".concat(k+1),buttonName:"Siguiente",disabled:T===k})]})})})]})},k=n(2),C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,70)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))},S=function(){var e=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("".concat("https://rickandmortyapi.com/api/episode"));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),T=(n(67),function(e){var t=e.match,n=parseInt(t.params.idCharacter,10)||1,a=Object(c.useState)([]),r=Object(j.a)(a,2),s=r[0],i=r[1],d=Object(c.useState)([]),b=Object(j.a)(d,2),p=b[0],h=b[1],f=Object(c.useState)(!0),O=Object(j.a)(f,2),x=O[0],v=O[1],g=function(){var e=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v(!0),e.next=3,w(n);case 3:t=e.sent,i(t.data.episode),setTimeout((function(){v(!1)}),900);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){g()}),[n]);var N=function(){var e=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v(!0),e.next=3,S();case 3:t=e.sent,h(t.data.results),setTimeout((function(){v(!1)}),900);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){N()}),[]),x?Object(l.jsx)(m,{}):Object(l.jsxs)("div",{className:"containerEpisode",children:[Object(l.jsx)("h2",{children:"Episodios"}),Object(l.jsxs)("table",{className:"table",children:[Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{scope:"row",children:"Episodio"}),Object(l.jsx)("th",{children:"Nombre"}),Object(l.jsx)("th",{children:"Fecha al aire"})]}),p.map((function(e){var t=s.findIndex((function(t){return t===e.url}));return t>=0?(e=p[t],Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("tr",{children:[Object(l.jsxs)("td",{children:[e.episode," "]}),Object(l.jsxs)("td",{children:[e.name," "]}),Object(l.jsxs)("td",{children:[e.air_date," "]})]},e.id)})):null}))]})]})}),F=(n(68),function(){return Object(l.jsx)("div",{className:"navbar",children:Object(l.jsx)("h2",{children:"RICK Y MORTY"})})});s.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsxs)(d.a,{children:[Object(l.jsx)(F,{}),Object(l.jsxs)(k.c,{children:[Object(l.jsx)(k.a,{path:"/",exact:!0,component:y}),Object(l.jsx)(k.a,{path:"/:id",exact:!0,component:y}),Object(l.jsx)(k.a,{path:"/:id/episode/:idCharacter",exact:!0,component:T})]})]})}),document.getElementById("root")),C()}},[[69,1,2]]]);
//# sourceMappingURL=main.9fe15c61.chunk.js.map