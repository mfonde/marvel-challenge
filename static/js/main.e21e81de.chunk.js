(window["webpackJsonp120-water-audit-challenge"]=window["webpackJsonp120-water-audit-challenge"]||[]).push([[0],{12:function(e,a,t){e.exports=t.p+"static/media/Spiderman-reading.eab2a831.jpg"},15:function(e,a,t){e.exports=t(25)},20:function(e,a,t){},21:function(e,a,t){},25:function(e,a,t){"use strict";t.r(a);var n=t(1),c=t.n(n),r=t(11),l=t.n(r),o=(t(20),t(12)),i=t.n(o),m=(t(21),t(6)),u=t(32),s=t(33),f=t(34),h=t(35),E=t(26),d=t(27),b=t(28),v=t(29),O=t(30),w=t(31),g=function(e){return c.a.createElement("div",null,c.a.createElement("h1",null,e.comicToView.title),c.a.createElement(E.a,{onClick:function(){e.detailViewOff()}},"Back To Results"))},p=function(e){var a=Object(n.useState)(!1),t=Object(m.a)(a,2),r=t[0],l=t[1],o=Object(n.useState)({}),i=Object(m.a)(o,2),u=i[0],s=i[1];return c.a.createElement("div",null,c.a.createElement(E.a,{onClick:function(){e.searchBarOn()}},"Back To Search"),r?c.a.createElement(g,{comicToView:u,detailViewOff:function(){l(!1)},searchBarOn:e.searchBarOn}):c.a.createElement("div",{className:"container"},e.comicResults.map((function(a,t){var n=a.thumbnail.path,r=a.thumbnail.extension;return c.a.createElement(d.a,{key:t,className:"card"},c.a.createElement(b.a,null,"Click Image For Detail View"),c.a.createElement(E.a,{className:"button",onClick:function(){!function(e){l(!0),s(e)}(a),e.searchBarOff()}},c.a.createElement(v.a,{top:!0,width:"100%",src:"".concat(n,"/standard_xlarge.").concat(r),alt:"Image Not Available"})),c.a.createElement(O.a,null,c.a.createElement(w.a,null,a.title)))}))))},B=function(e){var a=Object(n.useState)([]),t=Object(m.a)(a,2),r=t[0],l=t[1];return Object(n.useEffect)((function(){!function(){var a="".concat("https://gateway.marvel.com:443/v1/public/comics?","titleStartsWith=").concat(e.comicName,"&apikey=").concat("94bfc2c1e9454783329b955ba1751491");console.log(a),fetch(a).then((function(e){return e.json()})).then((function(a){l(a.data.results),e.setComicName("")}))}()}),[]),c.a.createElement("div",null,0==r.length?c.a.createElement(c.a.Fragment,null):c.a.createElement(p,{comicResults:r,searchBar:e.searchBar,searchBarOn:e.searchBarOn,searchBarOff:e.searchBarOff}))},j=function(e){var a=Object(n.useState)(""),t=Object(m.a)(a,2),r=t[0],l=t[1],o=Object(n.useState)(!1),i=Object(m.a)(o,2),d=i[0],b=i[1],v=Object(n.useState)(!0),O=Object(m.a)(v,2),w=O[0],g=O[1],p=function(){g(!1)};return c.a.createElement("div",null,w?c.a.createElement("div",null,c.a.createElement("h1",null,"Search For a Marvel Comic Series"),c.a.createElement(u.a,{onSubmit:function(e){e.preventDefault(),b(!0),p()}},c.a.createElement(s.a,null,c.a.createElement(f.a,{htmlFor:"comicName"}),c.a.createElement(h.a,{name:"comicName",value:r,onChange:function(e){return l(e.target.value)}}),c.a.createElement(E.a,{type:"submit"},"Search")))):c.a.createElement(c.a.Fragment,null),d?c.a.createElement(B,{comicName:r,searchBar:w,searchBarOn:function(e){window.location.reload()},searchBarOff:p,setComicName:l}):c.a.createElement(c.a.Fragment,null))};var S=function(){return c.a.createElement("div",{className:"App"},c.a.createElement("h1",null,"Marvel Mayhem"),c.a.createElement("img",{src:i.a,className:"App-logo",alt:"logo"}),c.a.createElement(j,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[15,1,2]]]);
//# sourceMappingURL=main.e21e81de.chunk.js.map