(window["webpackJsonp120-water-audit-challenge"]=window["webpackJsonp120-water-audit-challenge"]||[]).push([[0],{12:function(e,t,a){e.exports=a.p+"static/media/Spiderman-reading.eab2a831.jpg"},15:function(e,t,a){e.exports=a(25)},20:function(e,t,a){},21:function(e,t,a){},25:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),l=a(11),i=a.n(l),o=(a(20),a(6)),r=a(12),s=a.n(r),m=(a(21),a(31)),u=a(32),f=a(33),h=a(34),d=a(26),E=a(27),w=a(28),b=a(29),v=a(30),g=function(e){var t=e.comicToView.thumbnail.path,a=e.comicToView.thumbnail.extension;return c.a.createElement("div",{className:"detailView"},c.a.createElement("img",{src:"".concat(t,"/landscape_incredible.").concat(a),alt:"Image Not Available"}),c.a.createElement("h1",null,e.comicToView.title),c.a.createElement("h6",null,"On Sale Date: ",e.comicToView.dates[0].date),c.a.createElement("h4",null,e.comicToView.description),c.a.createElement(d.a,{className:"button",onClick:function(){e.detailViewOff()}},"Back To Results"))},O=function(e){var t=Object(n.useState)({}),a=Object(o.a)(t,2),l=a[0],i=a[1];return c.a.createElement("div",null,e.comicResults==[]?c.a.createElement("p",null,"No Results. Please Refresh The Page and Try Again."):e.detailView?c.a.createElement(g,{comicToView:l,detailViewOff:function(){e.setDetailView(!1)}}):c.a.createElement("div",null,c.a.createElement(d.a,{className:"button",onClick:function(){e.searchBarOn()}},"Back To Search"),c.a.createElement("p",null,"Click An Image For Detail View"),c.a.createElement("div",{className:"container"},e.comicResults.map((function(t,a){var n=t.thumbnail.path,l=t.thumbnail.extension;return c.a.createElement(E.a,{key:a,className:"card"},c.a.createElement(d.a,{className:"button",onClick:function(){!function(t){e.setDetailView(!0),i(t)}(t),e.searchBarOff()}},c.a.createElement(w.a,{top:!0,width:"100%",src:"".concat(n,"/standard_xlarge.").concat(l),alt:"Image Not Available"})),c.a.createElement(b.a,null,c.a.createElement(v.a,null,t.title)))}))),c.a.createElement("div",{className:"navButtons"},e.offset>-20?c.a.createElement(d.a,{className:"previousPage button",onClick:function(){e.setOffset(e.offset-20),e.fetchComicResults()}},"Previous Page"):null,20==e.comicResults.length?c.a.createElement(d.a,{className:"nextPage button",onClick:function(){e.setOffset(e.offset+20)}},"Next Page"):null)))},p=function(e){var t=Object(n.useState)([]),a=Object(o.a)(t,2),l=a[0],i=a[1],r=Object(n.useState)(0),s=Object(o.a)(r,2),m=s[0],u=s[1],f=Object(n.useState)(!1),h=Object(o.a)(f,2),d=h[0],E=h[1],w=function(){console.log(m);var t="".concat("https://gateway.marvel.com:443/v1/public/comics?","titleStartsWith=").concat(e.comicName,"&offset=").concat(m,"&apikey=").concat("94bfc2c1e9454783329b955ba1751491");console.log(t),fetch(t).then((function(e){return e.json()})).then((function(e){i(e.data.results)})).then(E(!0))};return Object(n.useEffect)((function(){w()}),[]),c.a.createElement("div",null,c.a.createElement(O,{comicResults:l,resultsToggle:d,searchBarOn:e.searchBarOn,searchBarOff:e.searchBarOff,detailView:e.detailView,setDetailView:e.setDetailView,offset:m,setOffset:u,fetchComicResults:w}))},V=function(e){var t=Object(n.useState)(""),a=Object(o.a)(t,2),l=a[0],i=a[1],r=Object(n.useState)(!1),s=Object(o.a)(r,2),E=s[0],w=s[1],b=Object(n.useState)(!0),v=Object(o.a)(b,2),g=v[0],O=v[1],V=function(){O(!1)};return c.a.createElement("div",null,g?c.a.createElement("div",null,c.a.createElement("h2",null,"Search For a Marvel Comic Series"),c.a.createElement(m.a,{onSubmit:function(e){e.preventDefault(),w(!0),V()}},c.a.createElement(u.a,null,c.a.createElement(f.a,{htmlFor:"comicName"}),c.a.createElement(h.a,{name:"comicName",value:l,onChange:function(e){return i(e.target.value)}}),c.a.createElement(d.a,{className:"button",type:"submit"},"Search")))):c.a.createElement(c.a.Fragment,null),E?c.a.createElement(p,{comicName:l,searchBar:g,searchBarOn:function(e){window.location.reload()},searchBarOff:V,detailView:e.detailView,setDetailView:e.setDetailView}):c.a.createElement(c.a.Fragment,null))};var N=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),a=t[0],l=t[1];return c.a.createElement("div",{className:"App"},0==a?c.a.createElement("div",null,c.a.createElement("h1",null,"Marvel Mayhem!"),c.a.createElement("img",{src:s.a,className:"App-logo",alt:"logo"})):c.a.createElement(c.a.Fragment,null),c.a.createElement(V,{detailView:a,setDetailView:l}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[15,1,2]]]);
//# sourceMappingURL=main.3b214faa.chunk.js.map