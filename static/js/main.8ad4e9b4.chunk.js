(this["webpackJsonpreact-trip-event-page"]=this["webpackJsonpreact-trip-event-page"]||[]).push([[0],{38:function(n,e,t){},67:function(n,e,t){"use strict";t.r(e);var r,c,i,a,s,o,d=t(0),l=t(28),u=t.n(l),j=t(33),h=(t(38),t(3)),p=t(4),b=t(1),m=p.a.div(r||(r=Object(h.a)(["\n    margin-top: -0.3rem;\n"]))),g=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{children:Object(b.jsx)("img",{src:"/react-trip-event-page/jeju.jpg",width:"100%",height:"100%"})}),Object(b.jsx)(m,{children:Object(b.jsx)("img",{src:"/react-trip-event-page/jeju2.jpg",width:"100%",height:"100%"})})]})},x=t(5),f=t.n(x),O=t(6),v=t(7),w=p.a.div(c||(c=Object(h.a)(["\n    display: flex;\n    margin-top: -0.3rem;\n    padding-top: 3rem;\n    margin-left: 2rem;\n    .thumbnail{\n        overflow: hidden;\n        margin-right: 1rem;\n        img{\n            display: block;\n            width: 150px;\n            height: 140px;\n            object-fit: cover;\n        }\n    }\n    .contents{\n        margin-top: 1rem;\n        h2{\n            margin: 0;\n        }\n        p{\n            margin: 0:\n            line-height: 1.5;\n            margin-top: 0.5rem;\n            white-space: normal;\n            font-size: 14px;\n        }\n    }\n    .sights{\n        color: green;\n    }\n    & + &{\n        margin-top: 3rem;\n    }\n"]))),k=function(n){var e=n.deliver,t=e.name,r=e.desc,c=e.sights,i=e.thumbnail;return Object(b.jsxs)(w,{children:[i&&Object(b.jsx)("div",{className:"thumbnail",children:Object(b.jsx)("img",{src:i,alt:"thumbnail"})}),Object(b.jsxs)("div",{className:"contents",children:[Object(b.jsx)("h2",{children:t}),Object(b.jsx)("p",{children:r}),Object(b.jsxs)("p",{className:"sights",children:["\ucd94\ucc9c\uba85\uc18c: ",c]})]})]})},y=t(15),F=t.n(y),N=function(){var n=Object(O.a)(f.a.mark((function n(){var e;return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,F.a.get("".concat("https://e2549a78-5436-4bdd-baea-38d8d68e1b9b.mock.pstmn.io/locations"));case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),_=function(){var n=Object(O.a)(f.a.mark((function n(){var e;return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,F.a.get("".concat("https://e2549a78-5436-4bdd-baea-38d8d68e1b9b.mock.pstmn.io/themes"));case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),z=p.a.div(i||(i=Object(h.a)(['\n    box-sizing: border-box;\n    padding-bottom: 3rem;\n    width: 100%;\n    height: 100%;\n    margin: 0 auto;\n    @media screen and (max-width: 768px){\n        padding-left: 1rem;\n        padding-right: 1rem;\n    }\n    font-family: "HS";\n    background-color: #FFFFF0;\n']))),S=function(){var n=Object(d.useState)(null),e=Object(v.a)(n,2),t=e[0],r=e[1],c=Object(d.useState)(!1),i=Object(v.a)(c,2),a=i[0],s=i[1];return Object(d.useEffect)((function(){var n=function(){var n=Object(O.a)(f.a.mark((function n(){var e;return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:s(!0);try{e=N().then((function(n){return r(n.data.locations)})),console.log(e)}catch(t){console.log(t)}s(!1);case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}),[]),a?Object(b.jsx)(z,{children:"\ub300\uae30 \uc911..."}):t?Object(b.jsx)(z,{children:t.map((function(n){return Object(b.jsx)(k,{deliver:n},n.name)}))}):null},E=p.a.div(a||(a=Object(h.a)(["\n    margin-top: -0.3rem;\n    padding-top: 3rem;\n    margin-left: 2rem;\n    .thumbnail{\n        img{\n            display: block;\n            width: 150px;\n            height: 140px;    \n        }\n    }\n    .contents{\n        background-color: #FFF8DC;\n        width: 150px;\n        height: 160px;\n        h2{\n            margin: 0;\n        }\n        p{\n            margin: 0:\n            line-height: 1.5;\n            white-space: normal;\n            font-size: 14px;\n        }\n        .discount{\n            margin-left: 4rem;\n            border: 2px solid orange;\n            border-radius: 50px;\n            background-color: orange;\n            color: white;\n            font-size: 10px;\n        }\n        .title{\n            font-size: 15px;\n        }\n        .price_origin{\n            text-decoration: line-through;\n            color: gray;\n        }\n        .p_discount{\n            margin-left: 0.5rem;\n            text-decoration: none;\n            color: red;\n        }\n    }\n    & + &{\n        margin-top: 3rem;\n    }\n"]))),H=function(n){var e=n.deliver,t=e.location,r=e.title,c=e.ticket_type,i=e.discount,a=e.price_origin,s=e.price_discounted,o=e.thumbnail;return Object(b.jsxs)(E,{children:[o&&Object(b.jsx)("div",{className:"thumbnail",children:Object(b.jsx)("img",{src:o,alt:"thumbnail"})}),Object(b.jsxs)("div",{className:"contents",children:[Object(b.jsxs)("h4",{children:[c,Object(b.jsxs)("span",{className:"discount",children:[i,"\ud560\uc778"]})]}),Object(b.jsx)("h3",{children:t}),Object(b.jsx)("h4",{className:"title",children:r}),Object(b.jsxs)("span",{className:"price_origin",children:[a,"\uc6d0"]}),Object(b.jsxs)("span",{className:"p_discount",children:[s,"\uc6d0~"]})]})]})},J=p.a.div(s||(s=Object(h.a)(["\n    background-color: beige;\n    margin-top: -0.3rem;\n"]))),B=p.a.div(o||(o=Object(h.a)(['\n    box-sizing: border-box;\n    padding-bottom: 3rem;\n    margin: 0 auto;\n    @media screen and (max-width: 768px){\n        padding-left: 1rem;\n        padding-right: 1rem;\n    }\n    font-family: "HS";\n']))),C=function(){var n=Object(d.useState)(null),e=Object(v.a)(n,2),t=e[0],r=e[1],c=Object(d.useState)(!1),i=Object(v.a)(c,2),a=i[0],s=i[1];return Object(d.useEffect)((function(){var n=function(){var n=Object(O.a)(f.a.mark((function n(){var e;return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:s(!0);try{e=_().then((function(n){return r(n.data.themes)})),console.log(e)}catch(t){console.log(t)}s(!1);case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}),[]),a?Object(b.jsx)("h1",{children:"\ub300\uae30\uc911"}):t?Object(b.jsx)(J,{children:Object(b.jsx)(B,{children:t.map((function(n){return Object(b.jsx)(H,{deliver:n},n.title)}))})}):null},D=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(g,{}),Object(b.jsx)(S,{}),Object(b.jsx)(C,{})]})};u.a.render(Object(b.jsx)(j.a,{children:Object(b.jsx)(D,{})}),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.8ad4e9b4.chunk.js.map