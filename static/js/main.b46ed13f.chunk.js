(window["webpackJsonp120-water-audit-challenge"]=window["webpackJsonp120-water-audit-challenge"]||[]).push([[0],{11:function(e,a,t){e.exports=t.p+"static/media/Spiderman-reading.eab2a831.jpg"},15:function(e,a,t){e.exports=t(25)},20:function(e,a,t){},21:function(e,a,t){},25:function(e,a,t){"use strict";t.r(a);var n=t(1),c=t.n(n),l=t(10),r=t.n(l),o=(t(20),t(11)),i=t.n(o),m=(t(21),t(7)),u=t(32),s=t(33),h=t(34),E=t(35),p=t(28),d=t(26),f=t(27),v=t(29),g=t(30),b=t(31),w=function(){return c.a.createElement("div",null,c.a.createElement("h1",null,"This Is Detail View"))},j=function(e){var a=Object(n.useState)(!1),t=Object(m.a)(a,2),l=t[0];t[1];return c.a.createElement("div",null,l?c.a.createElement(w,null):c.a.createElement("div",{className:"container"},e.comicResults.map((function(e,a){var t=e.thumbnail.path,n=e.thumbnail.extension;return c.a.createElement(d.a,{key:a,className:"card"},c.a.createElement(f.a,null,"Click Image For Detail View"),c.a.createElement(p.a,null,c.a.createElement(v.a,{top:!0,width:"100%",src:"".concat(t,"/standard_xlarge.").concat(n),alt:"Image Not Available"})),c.a.createElement(g.a,null,c.a.createElement(b.a,null,e.title)))}))))},N=function(e){var a=Object(n.useState)([]),t=Object(m.a)(a,2),l=t[0],r=t[1];return Object(n.useEffect)((function(){!function(){var a="".concat("https://gateway.marvel.com:443/v1/public/comics?","titleStartsWith=").concat(e.comicName,"&apikey=").concat("94bfc2c1e9454783329b955ba1751491");console.log(a),fetch(a).then((function(e){return e.json()})).then((function(e){return r(e.data.results)}))}()}),[]),c.a.createElement("div",null,0==l.length?c.a.createElement(c.a.Fragment,null):c.a.createElement(j,{comicResults:l}))},S=function(){var e=Object(n.useState)(""),a=Object(m.a)(e,2),t=a[0],l=a[1],r=Object(n.useState)(!1),o=Object(m.a)(r,2),i=o[0],d=o[1];return c.a.createElement("div",null,c.a.createElement("h1",null,"Search For a Marvel Comic Series"),c.a.createElement(u.a,{onSubmit:function(e){e.preventDefault(),d(!0)}},c.a.createElement(s.a,null,c.a.createElement(h.a,{htmlFor:"comicName"}),c.a.createElement(E.a,{name:"comicName",value:t,onChange:function(e){return l(e.target.value)}}),c.a.createElement(p.a,{type:"submit"},"Search"))),i?c.a.createElement(N,{comicName:t}):c.a.createElement(c.a.Fragment,null))};var k=function(){return c.a.createElement("div",{className:"App"},c.a.createElement("header",{className:"App-header"},c.a.createElement("h1",null,"Marvel Mayhem"),c.a.createElement("img",{src:i.a,className:"App-logo",alt:"logo"}),c.a.createElement(S,null),c.a.createElement("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer"},"Learn React")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[15,1,2]]]);
//# sourceMappingURL=main.b46ed13f.chunk.js.map