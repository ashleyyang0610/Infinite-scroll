(this["webpackJsonpinfinite-scroll"]=this["webpackJsonpinfinite-scroll"]||[]).push([[0],{144:function(e,n,t){},145:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(33),c=t.n(o),i=t(8),l=t(71),p=t.n(l),u=t(152),s=t(19),d=t(154),f=t(22),b=t(72),O=t.n(b),g=function(e,n){var t=e;return Object.keys(n).forEach((function(e){t=t.replace("{".concat(e,"}"),"".concat(e,"=").concat(n[e]))})),O.a.get(t)},h=t(150),y=t(151),m=t(155),j=t(40),w=t(45),v=t(153),x=100;function E(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function S(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?E(t,!0).forEach((function(n){Object(f.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):E(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var P="RESET_REPO_SEARCHING_DEFAULT",_="UPDATE_FETCHING_MASK",A="UPDATE_KEYWORD",D="UPDATE_LOADING_FLAG",T="UPDATE_PAGE_SIZE",k="UPDATE_REPO_LIST",L="UPDATE_TOTAL_COUNT",z={isFetchingMaskVisible:!1,isLoading:!1,keyword:"",pageSize:x,repoList:[],totalCount:0};Object(v.a)("FETCH_REPO_DATA"),Object(v.a)("GET_REPO_DATA"),Object(v.a)(P),Object(v.a)("SEARCH_REPO_DATA"),Object(v.a)(_),Object(v.a)(A),Object(v.a)(D),Object(v.a)(T),Object(v.a)(k),Object(v.a)(L);var C=Object(d.a)((function(e){return e.ofType("GET_REPO_DATA").exhaustMap((function(e){return Object(m.a)(Object(j.a)({type:D,payload:!0}),Object(w.a)(g("https://api.github.com/search/repositories?{q}&{page}&{per_page}",{q:U.getState().repoSearching.keyword,page:e.payload.page||U.getState().repoSearching.repoList.length/U.getState().repoSearching.pageSize+1,per_page:e.payload.per_page||U.getState().repoSearching.pageSize})).pipe(Object(h.a)((function(e){return Object(m.a)(Object(j.a)({type:k,payload:U.getState().repoSearching.repoList.concat(e.data.items)}),Object(j.a)({type:L,payload:e.data.total_count}),Object(j.a)({type:_,payload:!1}),Object(j.a)({type:D,payload:!1}))})),Object(y.a)((function(e){return Object(j.a)({type:D,payload:!1})}))))}))}),(function(e){return e.ofType("SEARCH_REPO_DATA").switchMap((function(e){return Object(m.a)(Object(j.a)({type:D,payload:!0}),Object(j.a)({type:L,payload:0}),Object(j.a)({type:A,payload:e.payload.keyword}),Object(j.a)({type:k,payload:[]}),Object(j.a)({type:"GET_REPO_DATA",payload:{page:1}}))}))})),R=Object(s.c)({repoSearching:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case P:return S({},e,{isFetchingMaskVisible:!1,isLoading:!1,keyword:"",pageSize:x,repoList:[],totalCount:0});case _:return S({},e,{isFetchingMaskVisible:n.payload});case A:return S({},e,{keyword:n.payload});case D:return S({},e,{isLoading:n.payload});case T:return S({},e,{pageSize:n.payload});case k:return S({},e,{repoList:n.payload});case L:return S({},e,{totalCount:n.payload});default:return e}}}),N=Object(u.a)(),F=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||s.d,I=Object(s.a)(N,p.a),M=Object(s.e)((function(e,n){var t;return"INITIAL_ALL_STATE"!==n.type&&(t=e),R(t,n)}),F(I));N.run(C);var U=M,G=t(43),H=t(74),V=t(4),q=t(5),W=t(75);function B(){var e=Object(V.a)(["\n    width: 100%;\n    height: 36px;\n    padding: 5px 12px;\n    font-size: 13px;\n    color: #fff;\n    background-color: hsla(0, 0%, 100%, 0.125);\n    background-image: none;\n    border: 0px;\n    border-radius: 3px;\n\n    &:focus {\n        background-color: #fff;\n        color: #222;\n        transition: border-color 0.2s linear 0s;\n        outline: none;\n    }\n\n    &:disabled {\n        background-color: #dddddd;\n        opacity: 0.5;\n        cursor: not-allowed;\n    }\n\n    &:focus {\n        outline: none;\n        border-color: #0096cc;\n    }\n\n    &::placeholder {\n        color: #bbb;\n    }\n\n    /* Chrome/Opera/Safari */\n    &::-webkit-input-placeholder {\n        color: #bbb;\n    }\n\n    /* Firefox 19+ */\n    &::-moz-placeholder {\n        color: #bbb;\n    }\n\n    /* IE 10+ */\n    &:-ms-input-placeholder {\n        color: #bbb;\n    }\n\n    /* Firefox 18- */\n    &:-moz-placeholder {\n        color: #bbb;\n    }\n"]);return B=function(){return e},e}var J=Object(q.a)(W.DebounceInput)(B());function K(){var e=Object(V.a)(["\n    margin: 0px;\n    font-size: 16px;\n    font-weight: 600;\n"]);return K=function(){return e},e}function X(){var e=Object(V.a)(["\n    margin: 0px;\n    font-size: 20px;\n    font-weight: 600;\n"]);return X=function(){return e},e}function Y(){var e=Object(V.a)(["\n    margin: 0px;\n    font-size: 24px;\n"]);return Y=function(){return e},e}function Z(){var e=Object(V.a)(["\n    margin: 0px;\n    font-size: 30px;\n"]);return Z=function(){return e},e}q.a.h1(Z()),q.a.h2(Y());var $=q.a.h3(X());q.a.h4(K());function Q(){var e=Object(V.a)(["\n    margin-right: 24px;\n\n    @media screen and (max-width: 1200px) {\n        margin-right: 12px;\n    }\n"]);return Q=function(){return e},e}function ee(){var e=Object(V.a)(["\n    transition: width 0.35s;\n\n    @media screen and (max-width: 1200px) {\n        max-width: calc(100% - 44px);\n    }\n"]);return ee=function(){return e},e}function ne(){var e=Object(V.a)(["\n    flex: 1 0 auto;\n    color: #fff;\n    margin-left: 12px;\n    line-height: 36px;\n\n    @media screen and (max-width: 959px) {\n        display: none;\n    }\n"]);return ne=function(){return e},e}function te(){var e=Object(V.a)(["\n    display: flex;\n    justify-content: space-between;\n    height: 52px;\n    padding: 8px 15vw;\n    background-color: #24292e;\n\n    @media screen and (min-width: 1020px) and (max-width: 1200px) {\n        padding-left: 10vw;\n        padding-right: 10vw;\n    }\n\n    @media screen and (max-width: 1019px) {\n        padding-left: 5vw;\n        padding-right: 5vw;\n    }\n"]);return te=function(){return e},e}var re=q.a.header(te()),ae=Object(q.a)($)(ne()),oe=Object(q.a)(J)(ee()),ce=q.a.a(Q()),ie=function(){var e=Object(i.c)((function(e){return e.repoSearching.keyword})),n=Object(i.c)((function(e){return e.repoSearching.totalCount})),t=Object(i.b)();return a.a.createElement(re,{className:"flex flex-justify-between"},a.a.createElement("div",{className:"flex flex-justify-between"},a.a.createElement(ce,{href:"https://github.com/"},a.a.createElement(G.a,{icon:H.a,color:"#fff",style:{fontSize:"36px"}})),a.a.createElement(oe,{minLength:2,placeholder:"Search",debounceTimeout:300,onChange:function(e){return function(e){t({type:"SEARCH_REPO_DATA",payload:{keyword:e}})}(e.target.value)}})),""!==e&&a.a.createElement(ae,null,"".concat(n.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")," repository results")))},le=t(78),pe=t.n(le),ue=t(79),se=t(44),de=t(80);function fe(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function be(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?fe(t,!0).forEach((function(n){Object(f.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):fe(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var Oe=function(e){var n=Object(se.a)({},e);return a.a.createElement("div",n,a.a.createElement(G.a,{icon:de.a,size:"3x",spin:!0,style:be({color:"#ced4da"},n.style)}))},ge=t(83),he=t(81),ye=t.n(he),me=t(82),je=t.n(me);function we(){var e=Object(V.a)(["\n    position: absolute;\n    top: 0px;\n    right: 0px;\n    bottom: 0px;\n    left: 0px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: rgba(0, 0, 0, 0.4);\n    color: #24292e;\n    font-size: 24px;\n"]);return we=function(){return e},e}function ve(){var e=Object(V.a)(["\n    width: 100%;\n    color: #586069;\n    margin: 0px;\n"]);return ve=function(){return e},e}function xe(){var e=Object(V.a)(["\n    max-width: 100%;\n    color: #0366d6;\n    text-decoration: none;\n\n    &:hover {\n        text-decoration: underline;\n    }\n"]);return xe=function(){return e},e}function Ee(){var e=Object(V.a)(["\n    margin: 0;\n    margin-bottom: 24px;\n    border: none;\n    border-top: ",";\n"]);return Ee=function(){return e},e}function Se(){var e=Object(V.a)(["\n    padding: 0 15vw 24px 15vw;\n\n    @media screen and (min-width: 1020px) and (max-width: 1200px) {\n        padding: 5px 10vw;\n    }\n\n    @media screen and (max-width: 1019px) {\n        padding: 5px 5vw;\n    }\n"]);return Se=function(){return e},e}function Pe(){var e=Object(V.a)(["\n    flex: 1;\n"]);return Pe=function(){return e},e}var _e=q.a.section(Pe()),Ae=q.a.div(Se()),De=q.a.hr(Ee(),(function(e){return 0!==e.index?"1px solid #e1e4e8":"1px solid transparent"})),Te=q.a.a(xe()),ke=q.a.p(ve()),Le=q.a.div(we()),ze=function(e){var n=e.data,t=e.index,r=e.style,o=n.repoList[t];return!o||je()(o)?null:a.a.createElement(Ae,{key:o.id,style:r},a.a.createElement(De,{index:t}),a.a.createElement($,null,a.a.createElement(Te,{href:o.html_url,className:"text-overflow-ellipsis"},"".concat(o.owner.login,"/"),a.a.createElement("em",null,o.name))),a.a.createElement(ke,{className:"text-overflow-ellipsis"},o.description))};function Ce(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}var Re=function(e){var n=e.height,t=(e.itemSize,e.repoList),r=e.totalCount,o=e.width,c=Object(i.c)((function(e){return e.repoSearching.pageSize})),l=Object(i.c)((function(e){return e.repoSearching.keyword})),p=Object(i.b)(),u=function(){p({type:"GET_REPO_DATA",payload:{keyword:l}})},s=function(e){p({type:_,payload:e})},d=t.length===r;return a.a.createElement(ge.a,{height:n,itemCount:r,itemData:{repoList:t},itemSize:100,onScroll:ye()((function(e){return function(e){var n=e.allDataLoaded,t=e.onFetchNextPage,r=e.pageSize,a=e.repoLength,o=e.scrollDirection,c=e.scrollOffset,i=(e.scrollUpdateWasRequested,e.updateFetchingMask);if("backward"!==o&&!n){var l=Math.ceil(c/100);l>a-r/15*3&&i(!0),a-l<r&&t()}}(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?Ce(t,!0).forEach((function(n){Object(f.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Ce(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},Object(se.a)({},e),{allDataLoaded:d,onFetchNextPage:u,updateFetchingMask:s,pageSize:c,repoLength:t.length}))}),300),overscanCount:20,width:o},ze)},Ne=function(){var e=Object(i.c)((function(e){return e.repoSearching.isFetchingMaskVisible})),n=Object(i.c)((function(e){return e.repoSearching.isLoading})),t=Object(i.c)((function(e){return e.repoSearching.repoList})),o=Object(i.c)((function(e){return e.repoSearching.totalCount})),c=Object(i.b)();Object(r.useEffect)((function(){var e=document.querySelector(".infinite-list").offsetHeight;c({type:T,payload:15*Math.ceil(e/100)})}),[c]);var l=0!==o,p=pe()({"infinite-list":!0,"position-middle-container":!l});return a.a.createElement(_e,{className:p},n&&!l&&a.a.createElement(Oe,{className:"position-middle-content"}),!n&&!l&&a.a.createElement("div",{className:"position-middle-content"},"No repo found"),l&&a.a.createElement(ue.a,null,(function(e){var n=e.width,r=e.height;return 0===n||0===r?null:a.a.createElement(Re,{height:r,itemSize:100,repoList:t,totalCount:o>1e3?1e3:o,width:n})})),l&&e&&a.a.createElement(Le,null,"Scroll too fast... The API is still fetching..."," "))},Fe=function(){return a.a.createElement(i.a,{store:U},a.a.createElement("main",null,a.a.createElement(ie,null),a.a.createElement(Ne,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(144);c.a.render(a.a.createElement(Fe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},87:function(e,n,t){e.exports=t(145)}},[[87,1,2]]]);
//# sourceMappingURL=main.da540866.chunk.js.map