(window["webpackJsonp120-water-audit-challenge"]=window["webpackJsonp120-water-audit-challenge"]||[]).push([[0],{12:function(e,a,t){e.exports=t.p+"static/media/Spiderman-reading.eab2a831.jpg"},15:function(e,a,t){e.exports=t(25)},20:function(e,a,t){},21:function(e,a,t){},25:function(e,a,t){"use strict";t.r(a);var n=t(1),c=t.n(n),l=t(11),i=t.n(l),r=(t(20),t(6)),o=t(12),m=t.n(o),s=(t(21),t(31)),u=t(32),h=t(33),d=t(34),f=t(26),E=t(27),w=t(28),v=t(29),b=t(30),g=function(e){var a=e.comicToView.thumbnail.path,t=e.comicToView.thumbnail.extension;return c.a.createElement("div",{className:"detailView"},c.a.createElement("img",{src:"".concat(a,"/landscape_incredible.").concat(t),alt:"Image Not Available"}),c.a.createElement("h1",null,e.comicToView.title),c.a.createElement("h6",null,"On Sale Date: ",e.comicToView.dates[0].date),c.a.createElement("p",null,e.comicToView.description),c.a.createElement(f.a,{onClick:function(){e.detailViewOff()}},"Back To Results"))},O=function(e){var a=Object(n.useState)({}),t=Object(r.a)(a,2),l=t[0],i=t[1];return c.a.createElement("div",null,e.detailView?c.a.createElement(g,{comicToView:l,detailViewOff:function(){e.setDetailView(!1)},searchBarOn:e.searchBarOn}):c.a.createElement("div",null,c.a.createElement(f.a,{onClick:function(){e.searchBarOn()}},"Back To Search"),c.a.createElement("p",null,"Click An Image For Detail View"),c.a.createElement("div",{className:"container"},(console.log(e.comicResults),e.comicResults.map((function(a,t){var n=a.thumbnail.path,l=a.thumbnail.extension;return c.a.createElement(E.a,{key:t,className:"card"},c.a.createElement(f.a,{className:"button",onClick:function(){!function(a){e.setDetailView(!0),i(a)}(a),e.searchBarOff()}},c.a.createElement(w.a,{top:!0,width:"100%",src:"".concat(n,"/standard_xlarge.").concat(l),alt:"Image Not Available"})),c.a.createElement(v.a,null,c.a.createElement(b.a,null,a.title)))}))))))},p=function(e){var a=Object(n.useState)([]),t=Object(r.a)(a,2),l=t[0],i=t[1],o=Object(n.useState)(0),m=Object(r.a)(o,2),s=m[0],u=m[1],h=function(){var a="".concat("https://gateway.marvel.com:443/v1/public/comics?","titleStartsWith=").concat(e.comicName,"&offset=").concat(s,"&apikey=").concat("94bfc2c1e9454783329b955ba1751491");console.log(a),fetch(a).then((function(e){return e.json()})).then((function(e){i(e.data.results)}))};return Object(n.useEffect)((function(){h()}),[]),c.a.createElement("div",null,0==l.length?c.a.createElement(c.a.Fragment,null):c.a.createElement(O,{comicResults:l,searchBar:e.searchBar,searchBarOn:e.searchBarOn,searchBarOff:e.searchBarOff,detailView:e.detailView,setDetailView:e.setDetailView}),c.a.createElement("div",{className:"navButtons"},20==l.length?c.a.createElement(f.a,{className:"nextPage",onClick:function(){u(s+20),h()}},"Next Page"):null))},V=function(e){var a=Object(n.useState)(""),t=Object(r.a)(a,2),l=t[0],i=t[1],o=Object(n.useState)(!1),m=Object(r.a)(o,2),E=m[0],w=m[1],v=Object(n.useState)(!0),b=Object(r.a)(v,2),g=b[0],O=b[1],V=function(){O(!1)};return c.a.createElement("div",null,g?c.a.createElement("div",null,c.a.createElement("h1",null,"Search For a Marvel Comic Series"),c.a.createElement(s.a,{onSubmit:function(e){e.preventDefault(),w(!0),V()}},c.a.createElement(u.a,null,c.a.createElement(h.a,{htmlFor:"comicName"}),c.a.createElement(d.a,{name:"comicName",value:l,onChange:function(e){return i(e.target.value)}}),c.a.createElement(f.a,{type:"submit"},"Search")))):c.a.createElement(c.a.Fragment,null),E?c.a.createElement(p,{comicName:l,searchBar:g,searchBarOn:function(e){window.location.reload()},searchBarOff:V,setComicName:i,detailView:e.detailView,setDetailView:e.setDetailView}):c.a.createElement(c.a.Fragment,null))};var B=function(){var e=Object(n.useState)(!1),a=Object(r.a)(e,2),t=a[0],l=a[1];return c.a.createElement("div",{className:"App"},0==t?c.a.createElement("div",null,c.a.createElement("h1",null,"Marvel Mayhem"),c.a.createElement("img",{src:m.a,className:"App-logo",alt:"logo"})):c.a.createElement(c.a.Fragment,null),c.a.createElement(V,{detailView:t,setDetailView:l}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[15,1,2]]]);
//# sourceMappingURL=main.c70c2fbd.chunk.js.map