(window["webpackJsonp120-water-audit-challenge"]=window["webpackJsonp120-water-audit-challenge"]||[]).push([[0],{12:function(e,a,t){e.exports=t.p+"static/media/Spiderman-reading.eab2a831.jpg"},15:function(e,a,t){e.exports=t(25)},20:function(e,a,t){},21:function(e,a,t){},25:function(e,a,t){"use strict";t.r(a);var n=t(1),c=t.n(n),l=t(11),i=t.n(l),r=(t(20),t(6)),o=t(12),m=t.n(o),u=(t(21),t(32)),s=t(33),h=t(34),d=t(35),f=t(26),w=t(27),E=t(28),v=t(29),b=t(30),g=t(31),p=function(e){var a=e.comicToView.thumbnail.path,t=e.comicToView.thumbnail.extension;return c.a.createElement("div",null,c.a.createElement("img",{src:"".concat(a,"/landscape_incredible.").concat(t),alt:"Image Not Available"}),c.a.createElement("h1",null,e.comicToView.title),c.a.createElement("h6",null,"On Sale Date: ",e.comicToView.dates[0].date),c.a.createElement("p",null,e.comicToView.description),c.a.createElement(f.a,{onClick:function(){e.detailViewOff()}},"Back To Results"))},O=function(e){var a=Object(n.useState)({}),t=Object(r.a)(a,2),l=t[0],i=t[1];return c.a.createElement("div",null,e.detailView?c.a.createElement(p,{comicToView:l,detailViewOff:function(){e.setDetailView(!1)},searchBarOn:e.searchBarOn}):c.a.createElement("div",null,c.a.createElement(f.a,{onClick:function(){e.searchBarOn()}},"Back To Search"),c.a.createElement("div",{className:"container"},(console.log(e.comicResults),e.comicResults.map((function(a,t){var n=a.thumbnail.path,l=a.thumbnail.extension;return c.a.createElement(w.a,{key:t,className:"card"},c.a.createElement(E.a,null,"Click Image For Detail View"),c.a.createElement(f.a,{className:"button",onClick:function(){!function(a){e.setDetailView(!0),i(a)}(a),e.searchBarOff()}},c.a.createElement(v.a,{top:!0,width:"100%",src:"".concat(n,"/standard_xlarge.").concat(l),alt:"Image Not Available"})),c.a.createElement(b.a,null,c.a.createElement(g.a,null,a.title)))}))))))},V=function(e){var a=Object(n.useState)([]),t=Object(r.a)(a,2),l=t[0],i=t[1];return Object(n.useEffect)((function(){!function(){var a="".concat("https://gateway.marvel.com:443/v1/public/comics?","titleStartsWith=").concat(e.comicName,"&apikey=").concat("94bfc2c1e9454783329b955ba1751491");console.log(a),fetch(a).then((function(e){return e.json()})).then((function(e){i(e.data.results)}))}()}),[]),c.a.createElement("div",null,0==l.length?c.a.createElement(c.a.Fragment,null):c.a.createElement(O,{comicResults:l,searchBar:e.searchBar,searchBarOn:e.searchBarOn,searchBarOff:e.searchBarOff,detailView:e.detailView,setDetailView:e.setDetailView}))},B=function(e){var a=Object(n.useState)(""),t=Object(r.a)(a,2),l=t[0],i=t[1],o=Object(n.useState)(!1),m=Object(r.a)(o,2),w=m[0],E=m[1],v=Object(n.useState)(!0),b=Object(r.a)(v,2),g=b[0],p=b[1],O=function(){p(!1)};return c.a.createElement("div",null,g?c.a.createElement("div",null,c.a.createElement("h1",null,"Search For a Marvel Comic Series"),c.a.createElement(u.a,{onSubmit:function(e){e.preventDefault(),E(!0),O()}},c.a.createElement(s.a,null,c.a.createElement(h.a,{htmlFor:"comicName"}),c.a.createElement(d.a,{name:"comicName",value:l,onChange:function(e){return i(e.target.value)}}),c.a.createElement(f.a,{type:"submit"},"Search")))):c.a.createElement(c.a.Fragment,null),w?c.a.createElement(V,{comicName:l,searchBar:g,searchBarOn:function(e){window.location.reload()},searchBarOff:O,setComicName:i,detailView:e.detailView,setDetailView:e.setDetailView}):c.a.createElement(c.a.Fragment,null))};var j=function(){var e=Object(n.useState)(!1),a=Object(r.a)(e,2),t=a[0],l=a[1];return c.a.createElement("div",{className:"App"},0==t?c.a.createElement("div",null,c.a.createElement("h1",null,"Marvel Mayhem"),c.a.createElement("img",{src:m.a,className:"App-logo",alt:"logo"})):c.a.createElement(c.a.Fragment,null),c.a.createElement(B,{detailView:t,setDetailView:l}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[15,1,2]]]);
//# sourceMappingURL=main.bb08936d.chunk.js.map