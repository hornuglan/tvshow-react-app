(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){},24:function(e,t,n){e.exports=n.p+"static/media/pageNotFound.732df2a0.jpg"},27:function(e,t,n){e.exports=n(36)},36:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(20),c=n.n(o),s=n(13),l=n(1),i=n(9),u=n(25),p=n(26),d=function(e,t){return e&&""!==t?"https://api.trakt.tv/search/show?extended=full&page=".concat(e,"&limit=15&query=").concat(t):t?"https://api.trakt.tv/search/show?extended=full&query=".concat(t):e?"https://api.trakt.tv/shows/watched?extended=full&page=".concat(e,"&limit=15"):"https://api.trakt.tv/shows/watched?extended=full&page=1&limit=15"},h=function(){return{method:"GET",headers:{"Content-Type":"application/json","trakt-api-key":"57e8bf0c5577c8bd768ff34d11b4338b78f56fba6ced125f36bd017d79a968b6","trakt-api-version":"2"}}},f=function(e){return"https://webservice.fanart.tv/v3/tv/".concat(e,"?api_key=").concat("ddc2447b6b87e0d850a8c2f4136ffe12")},m={query:"",data:[],pageNumber:1,leftBorder:1,rightBorder:10,pageCount:null,isLoading:!0},y={fieldName:null,type:null},g=Object(l.c)({content:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PAGE_LOADING":return Object(i.a)({},e,{isLoading:!0});case"PAGE_LOADED":return Object(i.a)({},e,{data:t.payload.data,pageNumber:t.payload.pageNumber,leftBorder:t.payload.leftBorder,rightBorder:t.payload.rightBorder,query:t.payload.query,pageCount:t.payload.pageCount,isLoading:!1});case"PAGE_FAILED":return console.error("SOMETHING WENT WRONG IN PAGINATION");default:return e}},sort:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_SORT_RULES":return Object(i.a)({},e,t.payload);default:return e}}}),E=n(22),b=n.n(E),N=n(23),w=Object(l.d)(g,Object(l.a)(N.a,b.a)),v=n(3),C=n(4),P=n(7),O=n(5),k=n(6),j=function(e){function t(){var e,n;Object(v.a)(this,t);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(n=Object(P.a)(this,(e=Object(O.a)(t)).call.apply(e,[this].concat(o)))).queryRef=a.a.createRef(),n.handleKeyPress=function(e){13===e.charCode?n.props.setPage(1,1,10,n.queryRef.current.value):console.log("Error in search using keycode")},n}return Object(k.a)(t,e),Object(C.a)(t,[{key:"render",value:function(){var e=this;return a.a.createElement("div",{className:"search"},a.a.createElement("input",{className:"search-input",type:"text",defaultValue:this.props.content.query,ref:this.queryRef,placeholder:"Search for shows",onKeyPress:this.handleKeyPress}),a.a.createElement("button",{type:"submit",className:"search-button",onClick:function(){return e.props.setPage(1,1,10,e.queryRef.current.value)}},"Go!"))}}]),t}(a.a.Component),S=function(e){var t=function(e,t,n,r){var a=[],o=Math.min(r,t+9);e===t&&1!==e?(t--,n--,o--):e===n&&e!==r&&(t++,n++,o++);for(var c=t;c<=o;c++)a.push(c);return console.log(e,t,n,a),{leftBorder:t,rightBorder:n,range:a}}(e.content.pageNumber,e.content.leftBorder,e.content.rightBorder,e.content.pageCount),n=t.leftBorder,r=t.rightBorder,o=t.range;return a.a.createElement("ul",{className:"pagination"},a.a.createElement("li",null,a.a.createElement("a",{href:"#",className:"first-page",onClick:function(){return e.setPage(1,1,10,e.content.query)}},"\u226a")),a.a.createElement("li",null,a.a.createElement("a",{href:"#",className:"prev",onClick:function(){return function(e,t,n,r,a,o){e<t&&n(e-1,r,a,o)}(e.content.pageNumber,e.content.pageCount,e.setPage,n,r,e.content.query)}},"<")),o.map(function(t){return a.a.createElement("li",{key:t.toString()},a.a.createElement("a",{href:"#",style:t===e.content.pageNumber?{backgroundColor:"rgba(255,255,255,.85)",color:"rgba(38, 50, 56, 0.8)"}:{},onClick:function(){return e.setPage(t,n,r,e.content.query)}},t))}),a.a.createElement("li",null,a.a.createElement("a",{href:"#",className:"next",onClick:function(){return function(e,t,n,r,a,o){e<t&&n(e+1,r,a,o)}(e.content.pageNumber,e.content.pageCount,e.setPage,n,r,e.content.query)}},">")),a.a.createElement("li",null,a.a.createElement("a",{href:"#",className:"last-page",onClick:function(){return e.setPage(e.content.pageCount,e.content.pageCount-10>0?e.content.pageCount-10:1,e.content.pageCount,e.content.query)}},"\u226b")))},A=function(e){return a.a.createElement("div",{className:"page-header"},a.a.createElement(j,{content:e.content,setPage:e.setPage}),a.a.createElement(S,{setPage:e.setPage,content:e.content}))},T=n(24),B=n.n(T),R=(n(15),function(e){function t(){return Object(v.a)(this,t),Object(P.a)(this,Object(O.a)(t).apply(this,arguments))}return Object(k.a)(t,e),Object(C.a)(t,[{key:"render",value:function(){var e=this;return a.a.createElement("div",{className:"container"},a.a.createElement(A,{setPage:this.props.setPage,searchShow:this.props.searchShow,content:this.props.content}),a.a.createElement("table",null,a.a.createElement("thead",{className:"table-header"},a.a.createElement("tr",{className:"thead-row"},a.a.createElement("th",{className:"thead-cell"},"\u2116"),a.a.createElement("th",{className:"thead-cell"},"Poster"),a.a.createElement("th",{className:"thead-cell",title:"To sort A-Z click once. To sort Z-A click twice",onClick:function(){return e.props.sortByTitle(e.props.sort.fieldName,e.props.sort.type)}},"Title"),a.a.createElement("th",{className:"thead-cell"},"Genres"),a.a.createElement("th",{className:"thead-cell",title:"To sort in ascending order click once. To sort in descending order click twice",onClick:function(){return e.props.sortByYear(e.props.sort.fieldName,e.props.sort.type)}},"Year"),a.a.createElement("th",{className:"thead-cell"},"Country"))),a.a.createElement("tbody",{className:"table-body"},D(this.props.content.data,this.props.sort.fieldName,this.props.sort.type).map(function(e,t){return a.a.createElement("tr",{className:"tbody-row",key:t.toString()},a.a.createElement("td",{className:"tbody-cell"},t+1),a.a.createElement("td",{className:"tbody-cell"},a.a.createElement("img",{className:"poster",alt:"",src:e.poster?e.poster:B.a})),a.a.createElement("td",{className:"tbody-cell"},e.show.title?e.show.title:""),a.a.createElement("td",{className:"tbody-cell"},e.show.genres?e.show.genres.join(", "):""),a.a.createElement("td",{className:"tbody-cell"},e.show.year?e.show.year:""),a.a.createElement("td",{className:"tbody-cell"},e.show.country?e.show.country.toUpperCase():""))}))))}}]),t}(a.a.Component)),D=function(e,t,n){if(!t||!n)return e;if("year"===t){if("ASC"===n)return e.sort(function(e,t){return e.show.year-t.show.year});if("DESC"===n)return e.sort(function(e,t){return t.show.year-e.show.year});console.log("Error occured in applySortRules with year sorting")}if("title"===t){if("ASC"===n){return e.sort(function(e,t){return e.show.title>t.show.title?1:e.show.title<t.show.title?-1:0})}if("DESC"===n){return e.sort(function(e,t){return e.show.title>t.show.title?-1:e.show.title<t.show.title?1:0})}console.log("Error occured in applySortRules with title sorting")}},_=function(e){function t(){return Object(v.a)(this,t),Object(P.a)(this,Object(O.a)(t).apply(this,arguments))}return Object(k.a)(t,e),Object(C.a)(t,[{key:"componentDidMount",value:function(){this.props.setPage(1,1,10,"")}},{key:"render",value:function(){return this.props.content.isLoading?a.a.createElement("div",{className:"lds-ripple"},a.a.createElement("div",null),a.a.createElement("div",null)):a.a.createElement(R,{setPage:this.props.setPage,sortByYear:this.props.sortByYear,sortByTitle:this.props.sortByTitle,sort:this.props.sort,content:this.props.content})}}]),t}(a.a.Component),q=Object(s.b)(function(e){return{content:e.content,sort:e.sort}},function(e){return{setPage:function(t,n,r,a){return e(function(e,t,n,r){return function(a){return a({type:"PAGE_LOADING",payload:null}),fetch(d(e,r),h()).then(function(e){var t=e.headers.get("X-Pagination-Page-Count"),n=new Promise(function(e){return e(t)});return Promise.all([n,e.json()])},function(e){return console.log("ERROR IN REDUX FETCH",e)}).then(function(e){var t=Object(p.a)(e,2),n=t[0],r=t[1],a=r.map(function(e){return f(e.show.ids.tvdb)}),o=[new Promise(function(e){return e(n)}),new Promise(function(e){return e(r)})].concat(a.map(function(e){return fetch(e).then(function(e){return e.json()})}));return Promise.all(o)}).then(function(o){var c=Object(u.a)(o),s=c[0],l=c[1];c.slice(2).forEach(function(e){e.tvposter&&(l.find(function(t){return t.show.ids.tvdb===+e.thetvdb_id}).poster=e.tvposter[0].url)}),a({type:"PAGE_LOADED",payload:{pageNumber:e,leftBorder:t,rightBorder:n,pageCount:+s,query:r,data:l}})})}}(t,n,r,a))},sortByYear:function(t,n){return e(function(e,t){return"year"===e&&"ASC"===t?function(e){e({type:"UPDATE_SORT_RULES",payload:{fieldName:"year",type:"DESC"}})}:function(e){e({type:"UPDATE_SORT_RULES",payload:{fieldName:"year",type:"ASC"}})}}(t,n))},sortByTitle:function(t,n){return e(function(e,t){return"title"===e&&"ASC"===t?function(e){e({type:"UPDATE_SORT_RULES",payload:{fieldName:"title",type:"DESC"}})}:function(e){e({type:"UPDATE_SORT_RULES",payload:{fieldName:"title",type:"ASC"}})}}(t,n))}}})(_);c.a.render(a.a.createElement(s.a,{store:w},a.a.createElement(q,null)),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.ee482541.chunk.js.map