"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[415],{415:function(e,t,n){n.r(t);var r=n(439),i=n(791),s=n(689),c=n(87),o=n(184),h="https://api.themoviedb.org/3/trending/all/day?api_key=".concat("136e9303af57d83b29ddf02ef48e9efe");t.default=function(){var e=(0,s.TH)(),t=(0,i.useState)([]),n=(0,r.Z)(t,2),u=n[0],a=n[1],l=(0,i.useState)(null),d=(0,r.Z)(l,2),f=d[0],g=d[1];return(0,i.useEffect)((function(){fetch("".concat(h)).then((function(e){return e.json()})).then((function(e){if(0===e.results.length)return Promise.reject(new Error("Oops, there is no trending movies"));a(e.results)})).catch((function(e){return g(e)}))}),[]),(0,o.jsxs)("div",{children:[f&&0===u.length&&(0,o.jsx)("h2",{children:f.message}),(0,o.jsxs)("div",{children:[(0,o.jsx)("h2",{children:"Trending today"}),u.length>0&&(0,o.jsx)("ul",{children:u.map((function(t){return(0,o.jsx)("li",{children:(0,o.jsx)(c.rU,{to:"movies/".concat(t.id),state:{from:e},children:t.title||t.name})},t.id)}))})]})]})}}}]);
//# sourceMappingURL=415.b9aefc65.chunk.js.map