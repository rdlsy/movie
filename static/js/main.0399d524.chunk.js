(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{102:function(e,t,a){},103:function(e,t,a){},104:function(e,t,a){},107:function(e,t,a){},108:function(e,t,a){},109:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(48),l=a.n(c),i=a(11),s=(a(58),a(59),a(60),a(2)),o=a(4);a(61),a(62);var u=function(e){var t=e.open,a=e.closeMenu;return r.a.createElement("aside",{className:t?"Aside open":"Aside"},r.a.createElement("div",{className:"Inner"},r.a.createElement("button",{type:"button",className:"close",onClick:a},"\ub2eb\uae30"),r.a.createElement("nav",{className:"Nav"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(i.b,{to:"/"},"\ud648")),r.a.createElement("li",null,r.a.createElement(i.b,{to:"/search"},"\uac80\uc0c9"))))))};var m=function(e){var t=e.history,a=Object(n.useState)(!1),c=Object(o.a)(a,2),l=c[0],s=c[1];return r.a.createElement("header",{className:"Header"},r.a.createElement("button",{type:"button",className:"MenuBtn",onClick:function(){return s(!l)}},r.a.createElement("span",null)),r.a.createElement("h1",{className:"Logo"},r.a.createElement("a",{href:"/"},"\ub85c\uace0")),r.a.createElement(i.b,{to:"/search",className:"SearchBtn"}),r.a.createElement(u,{history:t,open:l,closeMenu:function(){return s(!l)}}))};a(67);var p=function(e){var t=e.children;return r.a.createElement("section",{className:"Content"},t)};a(68);var d=function(){return r.a.createElement("footer",{className:"Footer"},r.a.createElement("div",{className:"Address"},r.a.createElement("span",null,"\uc11c\uc6b8\uc2dc \ub178\uc6d0\uad6c \ub3d9\uc77c\ub85c COPYRIGHT\u24d2 (\uc6b0 01753)"),r.a.createElement("span",null,"\ub300\ud45c\uc804\ud654\xa0\xa01234-5678\xa0\xa0\uc774\uba54\uc77c\xa0\xa0lsy_65@naver.com"),r.a.createElement("span",null,"\ub300\ud45c\uc790\xa0\uc774\uc138\uc601")))},E=a(5),f=a.n(E),v=a(12),h=a(15),b=a(34),N=a.n(b),k="https://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json",w="664383b11fdaa853a4884a63b0ae7cc4",y="http://api.koreafilm.or.kr:80/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2",g="229UV0UP2N545R3W7SN2",O="https://www.filecity.co.kr/module/top100_test.php",j="https://www.filecity.co.kr/hoonmin/koreafilm_api.php",S=new Date,_=new FormData;_.append("tab","top100"),_.append("tab2","BD_ALL"),_.append("s_value",""),_.append("no_adult",0),_.append("view","post"),_.append("limit",20),_.append("no_overlap",0),_.append("down_chk",0),_.append("sale",0),_.append("sale2",0),_.append("year",0),_.append("poster_chk",0);var x=function(){var e=Object(v.a)(f.a.mark((function e(t){var a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.a.get(t);case 3:return a=e.sent,e.abrupt("return",a);case 7:return e.prev=7,e.t0=e.catch(0),alert(e.t0.msg),e.abrupt("return",{data:null});case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=Object(v.a)(f.a.mark((function e(t,a){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.a.post(t,a).then((function(e){return JSON.stringify(e,null,2),e.data.list}));case 3:return n=e.sent,e.abrupt("return",n);case 7:return e.prev=7,e.t0=e.catch(0),alert(e.t0.msg),e.abrupt("return",{data:null});case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,a){return e.apply(this,arguments)}}(),L={fetchData:function(){return x("".concat(k,"?key=").concat(w,"&targetDt=").concat(function(e){var t=e.getFullYear(),a=e.getMonth()+1,n=e.getDate()-1;return a<10&&(a="0"+a),n<10&&(n="0"+n),t+""+a+n}(S)))},fetchPoster:function(e){return x("".concat(y,"&detail=Y&title=").concat(e,"&type=\uadf9\uc601\ud654&ServiceKey=").concat(g))},fetchRankCity:function(){return C("".concat(O),_)},fetchPoster2:function(e){return x("".concat(j,"?title=").concat(e))}};var T=function(e){var t=e.movie,a=e.showPopup,n=t.idx,c=t.name,l=t.imgSrc,i=t.cate,s=t.url;return r.a.createElement("div",{onClick:function(){return function(e,t){a(e,t)}(n,s)}},r.a.createElement("img",{src:l,alt:c}),r.a.createElement("dl",{className:"SliderItem"},r.a.createElement("dt",null,c),r.a.createElement("dd",null,i)))},D=a(24),I=a.n(D);a(102);var M=function(e){var t=e.closePopup,a=e.info,n="https://www.filecity.co.kr/#idx=".concat(a.idx);return r.a.createElement("div",{className:"MovieView"},r.a.createElement("p",{className:"view_title"},"1\ubd84 \ubbf8\ub9ac\ubcf4\uae30"),r.a.createElement("button",{type:"button",onClick:t,className:"close"},"\ub2eb\uae30"),r.a.createElement("div",{className:"Inner"},r.a.createElement("video",{controls:!0,width:"100%"},r.a.createElement("source",{src:a.url,type:"video/mp4"})),r.a.createElement(i.b,{to:n,className:"goLink",target:"_blank"},"\ud30c\uc77c\uc2dc\ud2f0 \uc774\ub3d9")))};var A=function(e){var t=e.data,a=Object(n.useState)((function(){var e=[];t.map((function(t,a){return e.push({id:a+1,idx:t.idx,name:t.real_title,imgSrc:t.main_img,cate:t.cate_h,url:t.url_1min}),e}));var a=e.filter((function(e){return e.name}));return a=a.splice(0,10)})),c=Object(o.a)(a,1)[0],l={infinite:!0,speed:500,slidesToShow:4,slidesToScroll:1,responsive:[{breakpoint:1175,settings:{slidesToShow:3}},{breakpoint:540,settings:{slidesToShow:2}}]},i=Object(n.useState)(!1),s=Object(o.a)(i,2),u=s[0],m=s[1],p=Object(n.useState)({idx:"",url:""}),d=Object(o.a)(p,2),E=d[0],f=d[1],v=Object(n.useCallback)((function(e,t){m(!u),f({idx:e,url:t})}),[u]),h=Object(n.useCallback)((function(){m(!u)}),[u]);return r.a.createElement("div",{className:"SliderList"},r.a.createElement(I.a,l,c.map((function(e){return r.a.createElement(T,{key:e.id,movie:e,showPopup:v})}))),u&&r.a.createElement(M,{info:E,closePopup:h}))};a(103);function P(){return R.apply(this,arguments)}function R(){return(R=Object(v.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.fetchRankCity();case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var B=function(){var e=Object(h.a)({promiseFn:P}),t=e.data,a=e.error;return e.isLoading?r.a.createElement("div",null):a?r.a.createElement("div",null,"\uc5d0\ub7ec\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4"):r.a.createElement("article",{className:"Slider"},r.a.createElement("div",{className:"SliderWrap"},r.a.createElement(A,{data:t})))};var F=function(e){var t,a,n=e.movie,c=e.history,l=n.id,i=n.name,s=n.rankOldAndNew,o=n.rankInten,u=n.audiCnt,m=Math.abs(o);return r.a.createElement("li",{onClick:function(){return function(e){c.push("/search?title=".concat(e))}(n.name)}},r.a.createElement("span",{className:"Title"},l+".",r.a.createElement("span",{className:"Name"},i),r.a.createElement("span",{className:(t=s,a=o,"NEW"===t?"New":a<0?"Down":a>0?"Up":"Minus")},0!==m?m:"")),r.a.createElement("span",{className:"Count"},u,"\uba85"))};var W=function(e){var t=e.rank,a=e.history,c=Object(n.useState)((function(){var e=[];return t.map((function(t,a){return e.push({id:a+1,name:t.movieNm,rankOldAndNew:t.rankOldAndNew,rankInten:t.rankInten,audiCnt:t.audiCnt}),e})),e})),l=Object(o.a)(c,1)[0];return r.a.createElement("ol",{className:"List"},l.map((function(e,t){return r.a.createElement(F,{key:t,movie:e,history:a})})))};a(104);function H(){return Y.apply(this,arguments)}function Y(){return(Y=Object(v.a)(f.a.mark((function e(){var t,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.fetchData();case 2:return t=e.sent,a=t.data.boxOfficeResult.dailyBoxOfficeList,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var $=function(e){var t=e.history,a=Object(h.a)({promiseFn:H}),n=a.data,c=a.error,l=a.isLoading;return c?r.a.createElement("div",null,"\uc5d0\ub7ec\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4."):r.a.createElement("article",{className:"LiveRank"},r.a.createElement("div",{className:"inner"},r.a.createElement("h2",{className:"SubTitle"},"\uc2e4\uc2dc\uac04\ub7ad\ud0b9 ",r.a.createElement("span",null,"(\uc77c\ubcc4 \ubc15\uc2a4\uc624\ud53c\uc2a4)")),r.a.createElement("div",{className:"LiveRankWrap"},l?r.a.createElement("div",{className:"Loading"},r.a.createElement("span",{className:"l1"}),r.a.createElement("span",{className:"l2"}),r.a.createElement("span",{className:"l3"})):r.a.createElement(W,{rank:n,history:t}))))};var J=function(e){var t=e.history;return r.a.createElement(r.a.Fragment,null,r.a.createElement(m,{history:t}),r.a.createElement(p,null,r.a.createElement(B,null),r.a.createElement($,{history:t})),r.a.createElement(d,null))},U=a(51),q=a.n(U);var G=function(e){var t=e.onInsert,a=e.history,c=e.query,l=Object(n.useState)(""),i=Object(o.a)(l,2),s=i[0],u=i[1],m=Object(n.useRef)(),p=Object(n.useCallback)((function(e){u(e.target.value)}),[]),d=Object(n.useCallback)((function(e){e.preventDefault(),s&&t(s)}),[t,s]);return Object(n.useEffect)((function(){c.title&&u(c.title),m.current.focus()}),[c]),r.a.createElement("div",{className:"SearchWrap"},r.a.createElement("button",{type:"button",className:"BackBtn",onClick:function(){a.push("/")}},r.a.createElement("span",null),r.a.createElement("span",null)),r.a.createElement("form",{onSubmit:d},r.a.createElement("input",{type:"text",placeholder:"\uac80\uc0c9\uc5b4\ub97c \uc785\ub825\ud558\uc138\uc694.",onChange:p,value:s,ref:m}),r.a.createElement("button",{type:"submit"},"\uac80\uc0c9")))};var V=function(e){var t=e.still;return r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{src:t,alt:""}))};var K=function(e){var t=e.movie,a=t.title,n=t.posters,c=t.type,l=t.nation,i=t.runtime,s=t.repRlsDate,o=t.titleEng,u=t.prodYear,m=t.rating,p=t.company,d=t.director,E=t.actor,f=t.stlls,v=n.split("|")[0],h=f.split("|"),b=d[0].directorNm,N=E.splice(0,5),k=m[0].ratingGrade,w=a.replaceAll(" !HS ","");w=w.replaceAll(" !HE ","");var y=s.replace(/(\d{4})(\d{2})(\d{2})/,"$1-$2-$3"),g={infinite:!0,speed:500,slidesToShow:5,slidesToScroll:1,initialSlide:0,responsive:[{breakpoint:1175,settings:{slidesToShow:3}},{breakpoint:540,settings:{slidesToShow:2}}]};return r.a.createElement("div",{className:"Movie"},r.a.createElement("div",{className:"Inner"},r.a.createElement("div",{className:"Movie_Title"},w,r.a.createElement("span",null,o+" \xb7 "+u+"\ub144")),r.a.createElement("div",{className:"Movie_Info"},r.a.createElement("ul",{className:"Movie_Info_List"},r.a.createElement("li",null,c," \xb7 ",r.a.createElement("span",null,k)," \xb7 ",l+" \xb7 "+i+"\ubd84"),r.a.createElement("li",null,r.a.createElement("dl",null,r.a.createElement("dt",null,"\uac1c\ubd09\uc77c"),r.a.createElement("dd",null,y))),r.a.createElement("li",null,r.a.createElement("dl",null,r.a.createElement("dt",null,"\uc81c\uc791\uc0ac"),r.a.createElement("dd",null,p))),r.a.createElement("li",null,r.a.createElement("dl",null,r.a.createElement("dt",null,"\uac10\ub3c5"),r.a.createElement("dd",null,b))),r.a.createElement("li",null,r.a.createElement("dl",null,r.a.createElement("dt",null,"\ucd9c\uc5f0"),r.a.createElement("dd",null,N.map((function(e,t){return r.a.createElement("span",{key:t},e.actorNm)})))))),r.a.createElement("figure",{className:"Movie_Poster"},r.a.createElement("img",{src:v||"/search_movie/img/noimage.gif",alt:w})))),r.a.createElement("div",{className:"Movie_Stills"},r.a.createElement("p",{className:"SubTitle"},"\uc774\ubbf8\uc9c0"),r.a.createElement("ul",null,r.a.createElement(I.a,g,h.map((function(e,t){return r.a.createElement(V,{key:t,still:e})}))))))};function Q(e){return z.apply(this,arguments)}function z(){return(z=Object(v.a)(f.a.mark((function e(t){var a,n,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.movie,e.next=3,L.fetchPoster2(a);case 3:return n=e.sent,r=n.data,e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var X=function(e){var t=e.movie,a=Object(h.a)({promiseFn:Q,movie:t,watch:t}),n=a.data,c=a.error;return a.isLoading?r.a.createElement("div",{className:"Loading"},r.a.createElement("span",{className:"l1"}),r.a.createElement("span",{className:"l2"}),r.a.createElement("span",{className:"l3"})):c?r.a.createElement("div",null,"\uc5d0\ub7ec\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4"):r.a.createElement(r.a.Fragment,null,0===n.Data[0].TotalCount?r.a.createElement("div",{className:"Empty"},"\uac80\uc0c9\uacb0\uacfc \uc5c6\uc74c"):n.Data[0].Result.map((function(e,t){return r.a.createElement(K,{key:t,movie:e})})))};a(107);var Z=function(e){var t=e.location,a=e.history,c=Object(n.useState)(null),l=Object(o.a)(c,2),i=l[0],s=l[1],u=Object(n.useCallback)((function(e){s(e)}),[]),m=q.a.parse(t.search,{ignoreQueryPrefix:!0});return Object(n.useEffect)((function(){m&&s(m.title),i&&u(i)}),[m,i,u]),r.a.createElement("section",{className:"SearchArea"},r.a.createElement(G,{onInsert:u,history:a,query:m}),i?r.a.createElement(X,{movie:i}):"")};a(108);var ee=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(s.c,null,r.a.createElement(s.a,{path:"/",exact:!0,component:J}),r.a.createElement(s.a,{path:"/search",component:Z})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(i.a,{basename:"/search_movie"},r.a.createElement(ee,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},53:function(e,t,a){e.exports=a(109)},58:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){}},[[53,1,2]]]);
//# sourceMappingURL=main.0399d524.chunk.js.map