"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[89],{89:function(e,n,t){t.r(n),t.d(n,{default:function(){return a}});var s=t(439),i=t(689),r=t(791),c="Reviews_reviews__hZhbT",o="Reviews_reviewsList__hT3GB",h=t(184),a=function(){var e=(0,r.useState)([]),n=(0,s.Z)(e,2),t=n[0],a=n[1],u=(0,r.useState)(null),l=(0,s.Z)(u,2),f=l[0],d=l[1],v=(0,i.UO)().movieId;return(0,r.useEffect)((function(){fetch("".concat("https://api.themoviedb.org/3/movie","/").concat(v,"/reviews?api_key=").concat("136e9303af57d83b29ddf02ef48e9efe","&language=en-US")).then((function(e){return e.json()})).then((function(e){if(!e)return Promise.reject(new Error("Oops, there is no movie with ID ".concat(v)));a(e.results)})).catch((function(e){return d(e)}))}),[v]),console.log(t),(0,h.jsxs)("div",{className:c,children:[f&&(0,h.jsx)("h2",{children:f.message}),(0,h.jsx)("h2",{children:"Reviews"}),(0,h.jsx)("ul",{className:o,children:0!==t.length?t.map((function(e){return(0,h.jsxs)("li",{children:[(0,h.jsxs)("p",{children:["Author: ",e.author]}),(0,h.jsx)("p",{children:e.content})]},e.id)})):(0,h.jsx)("p",{children:"Sorry, we don't have any reviews "})})]})}}}]);
//# sourceMappingURL=89.601dbb66.chunk.js.map