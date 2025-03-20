import{_ as x,I as K,a as N,b as C}from"./index-edc21cc3.js";import{P as H}from"./PageContents-d463cb78.js";import{L as S}from"./LocationBar-db944bfe.js";import{P as E,a as D}from"./PageTitle-05d4d7f6.js";import{P as R}from"./PageHeadRow-08e456fb.js";import{P as A}from"./PageMainText-67af7690.js";import{S as U}from"./StepProgress-54ad3148.js";import{B as z}from"./BasicButton-bf947aac.js";import{B as j,a as q}from"./ButtonListItem-e4b61907.js";import{B as G}from"./BasicBox-55bdcfd2.js";import{K as J,a as O,b as Q,c as W}from"./KeyValueText-e0694333.js";import{F as X,a as Y}from"./FormListItem-30525d66.js";import{F as Z}from"./FormInvalid-0068421a.js";import{F as tt}from"./FormInvalidMessage-6f01a88b.js";import{B as et}from"./BasicDatepicker-38a17391.js";import{N as st}from"./NoticeText-052e1d32.js";import{r as at,f as ot,I as lt,h as s,k as nt,w as t,o as it,i as e,l as a,a as o,n}from"./vendor-2be1e024.js";import"./calendar-63271bf2.js";const rt={"basic-list":"_basic-list_33gnr_1","basic-list__item":"_basic-list__item_33gnr_7","basic-list__symbol":"_basic-list__symbol_33gnr_26","basic-list__content":"_basic-list__content_33gnr_80","basic-list--regular":"_basic-list--regular_33gnr_85","basic-list--medium":"_basic-list--medium_33gnr_96","basic-list--regular-margin":"_basic-list--regular-margin_33gnr_110","basic-list--normal-margin":"_basic-list--normal-margin_33gnr_113","basic-list--small-margin":"_basic-list--small-margin_33gnr_116"},_t={components:{PageContents:H,LocationBar:S,PageHead:E,PageHeadRow:R,PageTitle:D,PageMainText:A,StepProgress:U,BasicButton:z,ButtonList:j,ButtonListItem:q,BasicBox:G,KeyValue:J,KeyValueItem:O,KeyValueTitle:Q,KeyValueText:W,FormList:X,FormListItem:Y,FormInvalid:Z,FormInvalidMessage:tt,InputBlock:K,InputBlockCell:N,BasicDatepicker:et,NoticeText:st},setup(){const l={ui:{header:C()}},c=at({dateError:!1});return ot(()=>{l.ui.header.setActive(()=>"onlineBranch")}),lt(()=>{l.ui.header.setActive()}),{state:c}}},ct=o("span",{class:"color-red"},"계약 종료일로부터 60일이내에 취득세(2%)를 신고 납부",-1),mt=o("span",{class:"color-red"},"저당해지",-1),ut={class:"row-margin-block-small"},dt=o("h3",{class:"text-title-1 row-margin-contents"},"정산 정보",-1),pt=o("br",null,null,-1);function ft(l,c,bt,m,Bt,yt){const f=s("LocationBar"),g=s("PageTitle"),b=s("StepProgress"),B=s("PageHeadRow"),y=s("PageMainText"),P=s("PageHead"),i=s("KeyValueTitle"),r=s("KeyValueText"),_=s("KeyValueItem"),u=s("KeyValue"),d=s("BasicBox"),I=s("BasicDatepicker"),h=s("InputBlockCell"),v=s("InputBlock"),w=s("FormInvalidMessage"),T=s("FormInvalid"),L=s("FormListItem"),F=s("FormList"),p=s("NoticeText"),V=s("BasicButton"),$=s("ButtonListItem"),M=s("ButtonList"),k=s("PageContents");return it(),nt(k,null,{head:t(()=>[e(f,{data:[{text:"홈",to:"/main/home"},{text:"온라인 지점",to:"/"},{text:"계약정보"},{text:"만기후처리"},{text:"구매 신청",to:"/"}]})]),default:t(()=>[e(P,null,{default:t(()=>[e(B,null,{right:t(()=>[e(b,{total:3,current:2})]),default:t(()=>[e(g,{align:"left"},{default:t(()=>[a("만기후처리 구매 신청")]),_:1})]),_:1}),e(y,{align:"left"},{default:t(()=>[a("구매 정보를 확인해 주세요")]),_:1})]),_:1}),o("div",null,[o("ul",{class:n([l.$style["basic-list"],l.$style["basic-list--regular"],l.$style["basic-list--regular-margin"]])},[o("li",{class:n([l.$style["basic-list__item"],"font-weight-regular"])},[o("div",{class:n(l.$style["basic-list__symbol"])},null,2),o("div",{class:n(l.$style["basic-list__content"])}," 이용자 명의 리스상품으로, 소유권 이전 등록 절차가 필요하지 않습니다. ",2)],2),o("li",{class:n([l.$style["basic-list__item"],"font-weight-regular"])},[o("div",{class:n(l.$style["basic-list__symbol"])},null,2),o("div",{class:n(l.$style["basic-list__content"])},[a(" 취득세가 발생됩니다. 리스차량 이용자는 리스 "),ct,a("하여야 합니다. 불이행시 가산세를 포함한 금액으로 과세됩니다. ")],2)],2),o("li",{class:n([l.$style["basic-list__item"],"font-weight-regular"])},[o("div",{class:n(l.$style["basic-list__symbol"])},null,2),o("div",{class:n(l.$style["basic-list__content"])},[a(" 리스 종료 이후, "),mt,a("가 필요합니다. ")],2)],2)],2),o("section",ut,[dt,o("div",null,[e(d,null,{default:t(()=>[e(u,{wrap:!0},{default:t(()=>[e(_,null,{default:t(()=>[e(i,null,{default:t(()=>[a("정산금액")]),_:1}),e(r,null,{default:t(()=>[a("99,999,999 원")]),_:1})]),_:1}),e(_,null,{default:t(()=>[e(i,null,{default:t(()=>[a("입금계좌번호")]),_:1}),e(r,null,{default:t(()=>[a(" 하나"),pt,a(" 21556-412-94556 ")]),_:1})]),_:1})]),_:1})]),_:1}),e(F,{classNames:{wrap:"row-margin-contents"}},{default:t(()=>[e(L,{titleText:"입금예약일자",target:"#My_P08_p030_dateButton"},{default:t(()=>[e(T,{error:m.state.dateError},{default:t(()=>[e(v,{error:m.state.dateError},{default:t(()=>[e(h,{flexible:!0},{default:t(()=>[e(I,{title:"입금예약일자",id:"My_P08_p030_date",buttonId:"My_P08_p030_dateButton"})]),_:1})]),_:1},8,["error"]),e(w,null,{default:t(()=>[a("Error Message")]),_:1})]),_:1},8,["error"])]),_:1})]),_:1}),e(p,{classNames:{wrap:"row-margin-item-medium"}},{default:t(()=>[a(" 차량번호 혹은 계약자명으로 입금 부탁드립니다. ")]),_:1})]),o("div",null,[e(d,null,{default:t(()=>[e(u,{wrap:!0},{default:t(()=>[e(_,null,{default:t(()=>[e(i,null,{default:t(()=>[a("정산금액")]),_:1}),e(r,null,{default:t(()=>[a("-99,999,999 원")]),_:1})]),_:1}),e(_,null,{default:t(()=>[e(i,null,{default:t(()=>[a("환불예정일자")]),_:1}),e(r,null,{default:t(()=>[a("2023.01.10")]),_:1})]),_:1})]),_:1})]),_:1}),e(p,{classNames:{wrap:"row-margin-contents-small"}},{default:t(()=>[a(" 환불예정일자는 회사 내부사정에 따라 변경 될 수 있습니다. ")]),_:1})])])]),e(M,null,{default:t(()=>[e($,null,{default:t(()=>[e(V,null,{default:t(()=>[a("다음")]),_:1})]),_:1})]),_:1})]),_:1})}const gt={$style:rt},Et=x(_t,[["render",ft],["__cssModules",gt]]);export{Et as default};
//# sourceMappingURL=My_P08_p030-5ddfd3fe.js.map
