import{_ as $,I as q,a as z,B as U,b as j}from"./index-edc21cc3.js";import{B as S}from"./BasicBox-55bdcfd2.js";import{B as W,a as D}from"./BasicBoxHeadLeft-957bf409.js";import{P as G}from"./PageContents-d463cb78.js";import{N as J,a as O}from"./NavTabButton-5af6f30d.js";import{K as Q,a as R,b as X,c as Y}from"./KeyValueText-e0694333.js";import{P as Z,a as tt}from"./PageTitle-05d4d7f6.js";import{B as et}from"./BasicHr-f6a7d6b1.js";import{F as at,a as lt}from"./FormListItem-30525d66.js";import{F as nt}from"./FormInvalid-0068421a.js";import{F as ot}from"./FormInvalidMessage-6f01a88b.js";import{B as st,a as ut}from"./ButtonListItem-e4b61907.js";import{B as _t}from"./BasicButton-bf947aac.js";import{P as rt,a as it,b as ct}from"./PaginationNavNumber-f7425eb7.js";import{P as mt}from"./PaginationNavEllipsis-0ac0c887.js";import{r as dt,f as ft,I as pt,h as l,k as Bt,w as e,o as I,i as t,l as a,a as o,n as P,c as yt,j as gt,F as vt}from"./vendor-2be1e024.js";import"./UiTabButton-e399d58f.js";import"./pagination-next-00daa3b1.js";const Nt="_empty_1iru9_1",bt="_empty__text_1iru9_6",xt={empty:Nt,empty__text:bt,"empty--secondary":"_empty--secondary_1iru9_14"},It={components:{PageContents:G,PageHead:Z,PageTitle:tt,NavTab:J,NavTabButton:O,BasicBox:S,BasicBoxHead:W,KeyValue:Q,KeyValueItem:R,KeyValueTitle:X,KeyValueText:Y,BasicHr:et,FormList:at,FormListItem:lt,FormInvalid:nt,FormInvalidMessage:ot,InputBlock:q,InputBlockCell:z,BasicInput:U,ButtonList:st,ButtonListItem:ut,BasicButton:_t,BasicBoxHeadLeft:D,PaginationNav:rt,PaginationNavArrow:it,PaginationNavEllipsis:mt,PaginationNavNumber:ct},setup(){const i={ui:{header:j()}},d=dt({carNumberError:!1});return ft(()=>{i.ui.header.setActive(()=>"inventoryFinance005")}),pt(()=>{i.ui.header.setActive()}),{state:d}}},Pt=o("br",null,null,-1),ht=o("h3",{class:"text-title-2 font-weight-medium"}," 주식회사알차이노베이션 (재고금융) ",-1),wt=o("h3",{class:"text-title-1 row-margin-contents"},"구비서류 추가등록",-1),Ft={class:"contents-wrap"},Tt={class:"contents-wrap"},Lt=o("h3",{class:"text-title-1 row-margin-contents"},"계약내역",-1),Vt={class:"reset-list"},kt=o("h4",{class:"text-title-2 font-weight-medium"},"20고5678",-1),Ht=o("p",{class:"text-body-3 color-gray-tertiary row-margin-item-small"}," BMW 5시리즈(7세대) 520d M스포츠 패키지 플러스 2021 ",-1);function Kt(i,d,Mt,f,Et,At){const h=l("PageTitle"),w=l("PageHead"),p=l("NavTabButton"),F=l("NavTab"),B=l("BasicBoxHead"),s=l("KeyValueTitle"),u=l("KeyValueText"),_=l("KeyValueItem"),y=l("KeyValue"),g=l("BasicBox"),v=l("BasicHr"),T=l("BasicInput"),L=l("InputBlockCell"),V=l("InputBlock"),k=l("FormInvalidMessage"),H=l("FormInvalid"),K=l("FormListItem"),C=l("FormList"),N=l("BasicButton"),b=l("ButtonListItem"),x=l("ButtonList"),M=l("BasicBoxHeadLeft"),r=l("PaginationNavArrow"),n=l("PaginationNavNumber"),c=l("PaginationNavEllipsis"),m=l("PaginationNav"),E=l("PageContents");return I(),Bt(E,null,{default:e(()=>[t(w,null,{default:e(()=>[t(h,null,{default:e(()=>[a(" 서류를 등록할 상품을"),Pt,a(" 선택해 주세요 ")]),_:1})]),_:1}),o("div",null,[t(F,null,{default:e(()=>[t(p,{tagName:"button",type:"button",active:!0},{default:e(()=>[a("재고금융")]),_:1}),t(p,{tagName:"button",type:"button"},{default:e(()=>[a("재고금융Ⅱ")]),_:1})]),_:1}),o("section",null,[t(g,null,{default:e(()=>[t(B,null,{default:e(()=>[ht]),_:1}),t(y,{wrap:!0},{default:e(()=>[t(_,null,{default:e(()=>[t(s,null,{default:e(()=>[a("약정기간")]),_:1}),t(u,null,{default:e(()=>[a("2021.11.10 ~ 2022.03.10")]),_:1})]),_:1}),t(_,null,{default:e(()=>[t(s,null,{default:e(()=>[a("한도금액")]),_:1}),t(u,null,{default:e(()=>[a("200,000,000 원")]),_:1})]),_:1}),t(_,null,{default:e(()=>[t(s,null,{default:e(()=>[a("한도잔액")]),_:1}),t(u,null,{default:e(()=>[a("2,000,000 원")]),_:1})]),_:1}),t(_,null,{default:e(()=>[t(s,null,{default:e(()=>[a("실행건수")]),_:1}),t(u,null,{default:e(()=>[a("N 건")]),_:1})]),_:1}),t(_,null,{default:e(()=>[t(s,null,{default:e(()=>[a("실행금액")]),_:1}),t(u,null,{default:e(()=>[a("2,000,000 원")]),_:1})]),_:1})]),_:1})]),_:1})]),t(v,{theme:"quaternary",className:"row-margin-block"}),o("section",null,[wt,t(C,null,{default:e(()=>[t(K,{titleText:"차량번호",target:"#IF_P05_p001_carNumber"},{default:e(()=>[t(H,{error:f.state.carNumberError},{default:e(()=>[t(V,{error:f.state.carNumberError},{default:e(()=>[t(L,{flexible:!0},{default:e(()=>[t(T,{title:"차량번호",id:"IF_P05_p001_carNumber"})]),_:1})]),_:1},8,["error"]),t(k,null,{default:e(()=>[a("Error Message")]),_:1})]),_:1},8,["error"])]),_:1})]),_:1}),t(x,{classNames:{wrap:"row-margin-block-small"}},{default:e(()=>[t(b,null,{default:e(()=>[t(N,{line:!0},{default:e(()=>[a("조회")]),_:1})]),_:1})]),_:1})])]),t(v,{theme:"quaternary",className:"row-margin-block"}),o("div",Ft,[o("section",Tt,[Lt,o("div",{class:P(i.$style.empty)},[o("p",{class:P(i.$style.empty__text)},"상담 승인 건이 없습니다.",2)],2),o("div",null,[o("ul",Vt,[(I(),yt(vt,null,gt(5,A=>o("li",{key:A,class:"row-margin-contents-small"},[t(g,null,{default:e(()=>[t(B,null,{default:e(()=>[t(M,null,{default:e(()=>[kt,Ht]),_:1})]),_:1}),t(y,{wrap:!0},{default:e(()=>[t(_,null,{default:e(()=>[t(s,null,{default:e(()=>[a("대출신청금액")]),_:1}),t(u,null,{default:e(()=>[a("10,000,000 원")]),_:1})]),_:1}),t(_,null,{default:e(()=>[t(s,null,{default:e(()=>[a("상담일자")]),_:1}),t(u,null,{default:e(()=>[a("2022.11.25")]),_:1})]),_:1}),t(_,null,{default:e(()=>[t(s,null,{default:e(()=>[a("등록여부")]),_:1}),t(u,null,{default:e(()=>[a("N")]),_:1})]),_:1})]),_:1}),t(x,{wrap:!0,align:"center",classNames:{wrap:"row-margin-contents"}},{default:e(()=>[t(b,null,{default:e(()=>[t(N,{size:"regular"},{default:e(()=>[a("구비서류 추가등록")]),_:1})]),_:1})]),_:1})]),_:1})])),64))]),t(m,null,{default:e(()=>[t(r,{type:"prev",disabled:!0}),t(n,{active:!0},{default:e(()=>[a("1")]),_:1}),t(n,null,{default:e(()=>[a("2")]),_:1}),t(n,null,{default:e(()=>[a("3")]),_:1}),t(n,null,{default:e(()=>[a("4")]),_:1}),t(n,null,{default:e(()=>[a("5")]),_:1}),t(n,null,{default:e(()=>[a("6")]),_:1}),t(n,null,{default:e(()=>[a("7")]),_:1}),t(c),t(n,null,{default:e(()=>[a("999")]),_:1}),t(r,{type:"next"})]),_:1}),t(m,null,{default:e(()=>[t(r,{type:"prev"}),t(n,null,{default:e(()=>[a("1")]),_:1}),t(c),t(n,null,{default:e(()=>[a("13")]),_:1}),t(n,null,{default:e(()=>[a("14")]),_:1}),t(n,{active:!0},{default:e(()=>[a("15")]),_:1}),t(n,null,{default:e(()=>[a("16")]),_:1}),t(n,null,{default:e(()=>[a("17")]),_:1}),t(c),t(n,null,{default:e(()=>[a("99")]),_:1}),t(r,{type:"next"})]),_:1}),t(m,null,{default:e(()=>[t(r,{type:"prev"}),t(n,null,{default:e(()=>[a("1")]),_:1}),t(c),t(n,null,{default:e(()=>[a("93")]),_:1}),t(n,null,{default:e(()=>[a("94")]),_:1}),t(n,null,{default:e(()=>[a("95")]),_:1}),t(n,null,{default:e(()=>[a("96")]),_:1}),t(n,null,{default:e(()=>[a("97")]),_:1}),t(n,null,{default:e(()=>[a("98")]),_:1}),t(n,{active:!0},{default:e(()=>[a("99")]),_:1}),t(r,{type:"next",disabled:!0})]),_:1})])])])]),_:1})}const Ct={$style:xt},ae=$(It,[["render",Kt],["__cssModules",Ct]]);export{ae as default};
//# sourceMappingURL=IF_P05_p001-ab6f8466.js.map
