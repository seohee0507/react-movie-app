"use strict";(self.webpackChunkmovie_app=self.webpackChunkmovie_app||[]).push([[274],{868:(e,s,a)=>{a.d(s,{A:()=>d});var t,i,n=a(528),r=a(197),c=a(579);const l=48*Math.PI,o=r.Ay.circle(t||(t=(0,n.A)(["\n\t","\n"])),(e=>e.$movieRating&&(0,r.AH)(i||(i=(0,n.A)(["\n\t\t\tanimation:1.5s ratingAniKeyframes ease-out forwards;\n\t\t\t@keyframes ratingAniKeyframes{\n\t\t\t\t0%{stroke-dashoffset:","}\n\t\t\t\t100%{stroke-dashoffset: ","}\n\t\t\t}"])),l,(l*(1-.1*Number(e.$movieRating)).toFixed(2)).toFixed(4))));const d=function(e){let{...s}=e;return(0,c.jsx)(o,{...s})}},732:(e,s,a)=>{a.r(s),a.d(s,{default:()=>M});var t=a(43),i=a(249);const n="MovieCard_card__4wNz0",r="MovieCard_card_thumb__oykiN",c="MovieCard_thumb_wrap__dLLs7",l="MovieCard_tlt__aEPCu",o="MovieCard_tag__IUgPq",d="MovieCard_skeleton__XvXS2",_="MovieCard_inner__Ca8us",p="MovieCard_inner_txt__VdVDt";var m=a(579);const u=function(e){let{onDetail:s}=e;const[a,i]=(0,t.useState)(!0),[u,x]=(0,t.useState)([]);return(0,t.useEffect)((()=>{(async()=>{const e=await(await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=7&sort_by=year")).json();x(e.data.movies),i(!1)})()}),[]),(0,m.jsxs)("ul",{className:r,children:[a&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)("li",{className:d,children:[(0,m.jsx)("div",{className:_}),(0,m.jsx)("p",{className:p}),(0,m.jsx)("p",{className:p})]}),(0,m.jsxs)("li",{className:d,children:[(0,m.jsx)("div",{className:_}),(0,m.jsx)("p",{className:p}),(0,m.jsx)("p",{className:p})]}),(0,m.jsxs)("li",{className:d,children:[(0,m.jsx)("div",{className:_}),(0,m.jsx)("p",{className:p}),(0,m.jsx)("p",{className:p})]})]}),u.map((e=>{var a;return(0,m.jsxs)("li",{children:[(0,m.jsxs)("div",{className:n,onClick:()=>s(e.id),children:[(0,m.jsx)("div",{className:c,children:(0,m.jsx)("img",{src:e.medium_cover_image,alt:e.title,loading:"lazy"})}),(0,m.jsx)("h2",{className:l,children:e.title.length>50?"".concat(e.title.slice(0,50),"..."):e.title})]}),(0,m.jsx)("div",{children:null===(a=e.genres)||void 0===a?void 0:a.map((e=>(0,m.jsx)("span",{className:o,children:e},e)))})]},e.id)}))]})};var x=a(328);a(14);const v="MovieSwiper_card__j8Nx5",h="MovieSwiper_thumb_wrap__LbstU",j="MovieSwiper_tlt__WsUxj",g="MovieSwiper_tag__rYV0j",N="MovieSwiper_skeleton__xTmAB",f="MovieSwiper_inner__Mkv5D";const k=function(e){let{onDetail:s}=e;const[a,i]=(0,t.useState)(!0),[n,r]=(0,t.useState)([]);return(0,t.useEffect)((()=>{(async()=>{const e=await(await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8&sort_by=2022")).json();r(e.data.movies),i(!1)})()}),[]),(0,m.jsxs)(x.RC,{slidesPerView:1.3,spaceBetween:28,centeredSlides:!0,children:[a&&(0,m.jsx)("div",{className:N,children:(0,m.jsx)("div",{className:f})}),n.map((e=>{var a;return(0,m.jsx)(x.qr,{children:(0,m.jsxs)("div",{className:v,onClick:()=>s(e.id),children:[(0,m.jsx)("div",{className:h,children:(0,m.jsx)("img",{src:e.medium_cover_image,alt:e.title,loading:"lazy"})}),(0,m.jsx)("h2",{className:j,children:e.title.length>50?"".concat(e.title.slice(0,50),"..."):e.title}),(0,m.jsx)("div",{children:null===(a=e.genres)||void 0===a?void 0:a.map((e=>(0,m.jsx)("span",{className:g,children:e},e)))})]})},e.id)}))]})};var A=a(633),w=a(868),y=a(394);const P=function(e){var s;let{detailId:a,onClose:i}=e;const[n,r]=(0,t.useState)([]),[c,l]=(0,t.useState)(!0),[o,d]=(0,t.useState)(!1);return(0,t.useEffect)((()=>{(async()=>{const e=await(await fetch("https://yts.mx/api/v2/movie_details.json?movie_id=".concat(a))).json();r(e.data.movie),l(!1)})()}),[a]),(0,t.useEffect)((()=>(document.body.style.cssText="overflow:hidden",()=>{document.body.style.cssText="overflow:visible"})),[]),(0,m.jsxs)("div",{className:"".concat(A.A.popup," ").concat(c?A.A.loading:A.A.loaded),children:[(0,m.jsx)("div",{className:A.A.popup_header,children:(0,m.jsx)("button",{onClick:i,children:(0,m.jsx)(y.NEn,{})})}),(0,m.jsxs)("div",{className:"".concat(A.A.back_dim," ").concat(c?A.A.loading:A.A.loaded),children:[(0,m.jsx)("img",{src:o?n.large_cover_image:n.medium_cover_image,alt:n.title}),(0,m.jsx)("img",{src:n.large_cover_image,onLoad:()=>{d(!0)},style:{display:"none"},alt:n.title})]}),(0,m.jsxs)("div",{className:A.A.inner_wrap,children:[(0,m.jsxs)("div",{className:A.A.inner,children:[(0,m.jsx)("h3",{className:A.A.tlt,children:n.title_long}),(0,m.jsx)("p",{className:A.A.txt,children:n.year}),n.runtime>0&&(0,m.jsxs)("p",{className:A.A.txt,children:["Runtime : ",Math.floor(n.runtime/60),"h ",n.runtime%60,"min "]}),(0,m.jsx)("p",{className:A.A.txt,children:null===(s=n.genres)||void 0===s?void 0:s.map((e=>(0,m.jsx)("span",{className:A.A.tag,children:e},e)))}),(0,m.jsx)("p",{className:A.A.desc,children:n.description_full})]}),(0,m.jsxs)("div",{className:A.A.circle_rating,children:[(0,m.jsxs)("svg",{children:[(0,m.jsx)("circle",{r:"24",cx:"50%",cy:"50%",stroke:"#ddd",fill:"transparent",strokeWidth:"4",strokeLinecap:"round",strokeDasharray:"150.7964",strokeDashoffset:"0"}),!c&&(0,m.jsx)(w.A,{r:"24",cx:"50%",cy:"50%",stroke:"#0141cb",fill:"none",strokeWidth:"4",strokeLinecap:"round",strokeDasharray:"150.7964",$movieRating:n.rating})]}),(0,m.jsx)("p",{className:A.A.rating,children:n.rating})]})]})]})};const M=function(){const[e,s]=(0,t.useState)(!1),[a,n]=(0,t.useState)(0),r=e=>{n(e),s(!0)};return(0,m.jsxs)(i.A,{children:[(0,m.jsx)(k,{onDetail:r}),(0,m.jsx)(u,{onDetail:r}),e&&(0,m.jsx)(P,{detailId:a,onClose:()=>s(!1)})]})}},633:(e,s,a)=>{a.d(s,{A:()=>t});const t={popup:"Popup_popup__36vW2",loaded:"Popup_loaded__YaYFX",popup_header:"Popup_popup_header__9-PZP",inner_wrap:"Popup_inner_wrap__IWkYa",inner_wrap_sub:"Popup_inner_wrap_sub__6vnPg",inner:"Popup_inner__-MVEn",tlt:"Popup_tlt__MDx5M",txt:"Popup_txt__5jhMP",tag:"Popup_tag__5EiVO",desc:"Popup_desc__+NxCE",circle_rating:"Popup_circle_rating__NemU2",rating:"Popup_rating__cZzNm",back_dim:"Popup_back_dim__w+aAv",skeleton:"Popup_skeleton__JyVsp",loading:"Popup_loading__9t43T"}}}]);
//# sourceMappingURL=274.e1fd8b64.chunk.js.map