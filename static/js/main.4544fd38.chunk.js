(this["webpackJsonpedtech-frontend"]=this["webpackJsonpedtech-frontend"]||[]).push([[0],{70:function(e,t,c){},93:function(e,t,c){"use strict";c.r(t);var n=c(2),r=c(0),i=c.n(r),a=c(24),s=c.n(a),o=(c(70),c(39)),j=c.n(o),d=c(52),l=c(37),u=c(53),b=c.n(u),h={baseURI:"https://jsonplaceholder.typicode.com"},x=c(33),O=c.n(x),p=!O.a.env.NODE_ENV||"development"===O.a.env.NODE_ENV,m=function(){return p},f=function(e){var t=Object(r.useState)(!0),c=Object(l.a)(t,2),n=c[0],i=c[1],a=Object(r.useState)(null),s=Object(l.a)(a,2),o=s[0],u=s[1],x=Object(r.useState)(void 0),O=Object(l.a)(x,2),p=O[0],f=O[1];return Object(r.useEffect)((function(){(function(){var t=Object(d.a)(j.a.mark((function t(){var c,n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,c=h.baseURI+e,t.next=4,b.a.get(c);case 4:n=t.sent,u(n.data),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(0),m()&&console.error(t.t0),f(t.t0);case 12:return t.prev=12,i(!1),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[0,8,12,15]])})));return function(){return t.apply(this,arguments)}})()()}),[e]),{data:o,loading:n,error:p}},g={navBarTitle:"EdTech",heroTitle:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",heroButton:"Explore products",heroSubtitle:"Browse products by category",trendingProductsTitle:"Trending products",trendingProductsSubTitle:"We think you may find those products helpful",recentReviewsTitle:"Recent reviews"},v=Object(r.createContext)(g),T=function(e){var t=e.children,c=f("/texts").data;return Object(n.jsx)(v.Provider,{value:c||g,children:t})},$=c(27),y=c(7),w=c(117),N=c(112),k=c(114),S=function(){return Object(r.useContext)(v)},E=function(){var e=S();return Object(n.jsx)(N.a,{position:"static",children:Object(n.jsx)(k.a,{children:e.navBarTitle})})},D=c(119),B=c(115),P=c(120),R=c(116),A=c(94),I=c(118),L=Object(I.a)({title:{fontSize:"20pt"},paper:{width:110,height:110,boxShadow:"none",border:"1px solid #cccccc"}}),q=c(58),C=function(e){return Object(q.a)(Array(e).keys())},J={$1:1,$2:2,$4:4,$3:3,$5:5,$6:6,$7:7,$8:8,$9:9,$10:10},W=function(){var e=L(),t=S();return Object(n.jsxs)(D.a,{children:[Object(n.jsx)(D.a,{marginTop:J.$6,children:Object(n.jsx)(B.a,{variant:"h2",className:e.title,children:t.heroTitle})}),Object(n.jsx)(D.a,{marginTop:J.$4,children:Object(n.jsx)(P.a,{variant:"contained",color:"primary",children:t.heroButton})}),Object(n.jsx)(D.a,{marginTop:J.$4,children:Object(n.jsx)(B.a,{variant:"subtitle2",children:t.heroSubtitle})}),Object(n.jsx)(D.a,{marginTop:J.$2,children:Object(n.jsx)(R.a,{container:!0,spacing:J.$3,children:C(4).map((function(t){return Object(n.jsx)(R.a,{item:!0,children:Object(n.jsx)(A.a,{className:e.paper})},t)}))})})]})},U=c(122),V=Object(I.a)({paper:{padding:10,width:240,boxShadow:"none",border:"1px solid #cccccc"},image:{width:220,height:200,background:"#cccccc"}}),_=function(){var e=V();return Object(n.jsxs)(A.a,{className:e.paper,children:[Object(n.jsx)("div",{className:e.image}),Object(n.jsx)(B.a,{variant:"subtitle2",children:"Default header"}),Object(n.jsx)(B.a,{variant:"body2",children:"category"})]})},z=function(e){var t=e.title,c=e.children;return Object(n.jsxs)(D.a,{display:"flex",flexDirection:"column",paddingTop:J.$4,children:[Object(n.jsx)(B.a,{variant:"h6",align:"center",children:t}),Object(n.jsx)(D.a,{paddingTop:J.$4,children:c})]})},F=function(){var e=S();return Object(n.jsx)(z,{title:e.trendingProductsTitle,children:Object(n.jsxs)(R.a,{container:!0,children:[Object(n.jsx)(U.a,{mdDown:!0,children:Object(n.jsx)(R.a,{item:!0,lg:4,children:Object(n.jsx)(B.a,{variant:"h4",children:e.trendingProductsSubTitle})})}),Object(n.jsx)(R.a,{item:!0,xs:12,lg:8,children:Object(n.jsx)(R.a,{container:!0,spacing:3,alignItems:"center",alignContent:"center",children:C(6).map((function(e){return Object(n.jsx)(R.a,{item:!0,xs:12,md:4,children:Object(n.jsx)(_,{})},e)}))})})]})})},G=c(121),M=Object(I.a)({image:{width:45,height:45,background:"#cccccc"}}),Y=function(e){var t=e.accountName,c=e.jobTitle,r=e.rating,i=e.productName,a=e.text,s=M();return Object(n.jsxs)(D.a,{display:"flex",children:[Object(n.jsx)(D.a,{flex:1,children:Object(n.jsx)("div",{className:s.image})}),Object(n.jsxs)(D.a,{flex:4,flexDirection:"column",children:[Object(n.jsx)(B.a,{variant:"subtitle2",children:t}),Object(n.jsx)(B.a,{variant:"caption",children:c}),Object(n.jsxs)(D.a,{display:"flex",children:[Object(n.jsx)(G.a,{value:r,readOnly:!0}),"on ",i]}),Object(n.jsx)(B.a,{variant:"body1",children:a})]})]})},H=function(){var e=S();return Object(n.jsx)(z,{title:e.recentReviewsTitle,children:Object(n.jsx)(R.a,{container:!0,children:C(3).map((function(e){return Object(n.jsx)(R.a,{item:!0,lg:4,md:6,xs:12,children:Object(n.jsx)(Y,{accountName:"Account ".concat(e),jobTitle:"Job Title",rating:3,productName:"Product name",text:"At eripuit signiferumque sea, vel ad mucius molestie, cu labitur iuvaret vulputate sed.At eripuit signiferumque sea, vel ad mucius molestie"})},e)}))})})},K=function(){return Object(n.jsx)(D.a,{bgcolor:"#cccccc",paddingY:J.$3,marginTop:J.$3,children:Object(n.jsx)(w.a,{maxWidth:"lg",children:Object(n.jsxs)(D.a,{display:"flex",flexDirection:"column",children:[Object(n.jsx)($.b,{to:"/",children:"Link"}),Object(n.jsx)($.b,{to:"/",children:"Link"}),Object(n.jsx)($.b,{to:"/",children:"Link"})]})})})},Q=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)(w.a,{maxWidth:"lg",disableGutters:!0,children:[Object(n.jsx)(E,{}),Object(n.jsx)(W,{}),Object(n.jsx)(F,{}),Object(n.jsx)(H,{})]}),Object(n.jsx)(K,{})]})},X=function(){return Object(n.jsx)($.a,{basename:"/edtech-frontend",children:Object(n.jsx)(y.a,{exact:!0,path:"/",component:Q})})};s.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(T,{children:Object(n.jsx)(X,{})})}),document.getElementById("root"))}},[[93,1,2]]]);
//# sourceMappingURL=main.4544fd38.chunk.js.map