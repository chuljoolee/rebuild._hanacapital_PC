import{_ as K,B as M,I as C,a as L,b as O}from"./index-edc21cc3.js";import{P as $}from"./PageContents-d463cb78.js";import{P as H,a as U}from"./PageTitle-05d4d7f6.js";import{B as D}from"./BasicBox-55bdcfd2.js";import{K as N,a as S,b as A,c as z}from"./KeyValueText-e0694333.js";import{U as R}from"./UnitText-9225af48.js";import{F as W,a as j}from"./FormListItem-30525d66.js";import{F as q}from"./FormInvalid-0068421a.js";import{F as G}from"./FormInvalidMessage-6f01a88b.js";import{F as J}from"./FormHelpText-3c2e4d1e.js";import{B as Q}from"./BasicSelect-4f243716.js";import{B as X}from"./BasicButton-bf947aac.js";import{B as Y,a as Z}from"./ButtonListItem-e4b61907.js";import{r as tt,f as et,I as lt,h as l,k as ot,w as e,o as at,i as t,l as r,a as o,n as s}from"./vendor-2be1e024.js";const st="_logs_1a8kl_1",rt="_logs__item_1a8kl_8",_t="_logs__block_1a8kl_28",nt="_logs__link_1a8kl_48",it="_logs__row_1a8kl_60",ct="_logs__contents_1a8kl_64",ut="_logs__right_1a8kl_68",mt="_logs__title_1a8kl_73",gt="_logs__button_1a8kl_137",dt={logs:st,logs__item:rt,logs__block:_t,"logs__block--secondary":"_logs__block--secondary_1a8kl_44",logs__link:nt,"logs__block--tertiary":"_logs__block--tertiary_1a8kl_52",logs__row:it,logs__contents:ct,logs__right:ut,logs__title:mt,"logs__link-text":"_logs__link-text_1a8kl_119",logs__button:gt,"basic-list":"_basic-list_1a8kl_142","basic-list__item":"_basic-list__item_1a8kl_148","basic-list__symbol":"_basic-list__symbol_1a8kl_167","basic-list__content":"_basic-list__content_1a8kl_221","basic-list--regular":"_basic-list--regular_1a8kl_226","basic-list--medium":"_basic-list--medium_1a8kl_237","basic-list--regular-margin":"_basic-list--regular-margin_1a8kl_251","basic-list--normal-margin":"_basic-list--normal-margin_1a8kl_254","basic-list--small-margin":"_basic-list--small-margin_1a8kl_257"},pt={components:{PageContents:$,PageHead:H,PageTitle:U,BasicBox:D,UnitText:R,KeyValue:N,KeyValueItem:S,KeyValueTitle:A,KeyValueText:z,FormList:W,FormListItem:j,FormInvalid:q,FormInvalidMessage:G,FormHelpText:J,BasicInput:M,BasicSelect:Q,InputBlock:C,InputBlockCell:L,BasicButton:X,ButtonList:Y,ButtonListItem:Z},setup(){const a={ui:{header:O()}},g=tt({amountError:!1,termError:!1,paymentDateError:!1,accountError:!1,carOwnerError:!1});return et(()=>{a.ui.header.setActive(()=>"inventoryFinance002")}),lt(()=>{a.ui.header.setActive()}),{state:g}}},ft=o("div",null,[o("h3",{class:"text-title-2 font-weight-medium"},"20고5678"),o("p",{class:"text-body-3 color-gray-tertiary row-margin-item-small"}," BMW 5시리즈(7세대) 520d M스포츠 패키지 플러스 2021 ")],-1),bt={class:"row-margin-container-medium row-margin-bottom-none"},yt=o("div",{class:"text-body-1"},"만원",-1),kt={class:"row-margin-block-small row-margin-bottom-none"},It=o("h3",{class:"text-title-1 row-margin-contents"},"서류등록",-1);function Bt(a,g,Ft,_,ht,wt){const b=l("PageTitle"),y=l("PageHead"),k=l("KeyValueTitle"),I=l("UnitText"),B=l("KeyValueText"),v=l("KeyValueItem"),F=l("KeyValue"),h=l("BasicBox"),p=l("BasicInput"),n=l("InputBlockCell"),i=l("InputBlock"),c=l("FormInvalidMessage"),u=l("FormInvalid"),m=l("FormListItem"),d=l("BasicSelect"),f=l("FormHelpText"),w=l("FormList"),P=l("BasicButton"),T=l("ButtonListItem"),x=l("ButtonList"),E=l("PageContents");return at(),ot(E,null,{default:e(()=>[t(y,null,{default:e(()=>[t(b,null,{default:e(()=>[r("금융정보를 입력해 주세요")]),_:1})]),_:1}),t(h,null,{default:e(()=>[ft,t(F,{margin:"regular",classNames:{wrap:"row-margin-item-regular"}},{default:e(()=>[t(v,{classNames:{item:"text-body-1"},verticalAlign:"center"},{default:e(()=>[t(k,{classNames:{title:"color-black"}},{default:e(()=>[r("한도금액")]),_:1}),t(B,null,{default:e(()=>[t(I,{rightUnit:"원",align:"right"},{default:e(()=>[r("10,000,000")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),o("div",bt,[t(w,null,{default:e(()=>[t(m,{titleText:"대출신청금액",target:"#IF_P02_p002_amount"},{default:e(()=>[t(u,{error:_.state.amountError},{default:e(()=>[t(i,{error:_.state.amountError},{innerRight:e(()=>[yt]),default:e(()=>[t(n,{flexible:!0},{default:e(()=>[t(p,{align:"right",useDelete:!1,pattern:"\\d*",title:"대출신청금액",id:"IF_P02_p002_amount"})]),_:1})]),_:1},8,["error"]),t(c,null,{default:e(()=>[r("Error Message")]),_:1})]),_:1},8,["error"])]),_:1}),t(m,{titleText:"대출신청기간",target:"#IF_P02_p002_term",selectOnly:!0},{default:e(()=>[t(u,{error:_.state.termError},{default:e(()=>[t(i,{error:_.state.termError},{default:e(()=>[t(n,{flexible:!0},{default:e(()=>[t(d,{options:[{value:"1",label:"3개월"},{value:"2",label:"5개월"}],title:"대출신청기간",inputId:"IF_P02_p002_term"})]),_:1})]),_:1},8,["error"]),t(c,null,{default:e(()=>[r("Error Message")]),_:1})]),_:1},8,["error"])]),_:1}),t(m,{titleText:"결제일자",target:"#IF_P02_p002_paymentDate",selectOnly:!0},{default:e(()=>[t(u,{error:_.state.paymentDateError},{default:e(()=>[t(i,{error:_.state.paymentDateError},{default:e(()=>[t(n,{flexible:!0},{default:e(()=>[t(d,{options:[{value:"1",label:"1일"},{value:"2",label:"5일"},{value:"3",label:"11일"},{value:"4",label:"15일"},{value:"5",label:"21일"}],title:"결제일자",inputId:"IF_P02_p002_paymentDate"})]),_:1})]),_:1},8,["error"]),t(c,null,{default:e(()=>[r("Error Message")]),_:1})]),_:1},8,["error"])]),_:1}),t(m,{titleText:"계좌선택",target:"#IF_P02_p002_account",selectOnly:!0},{default:e(()=>[t(u,{error:_.state.accountError},{default:e(()=>[t(i,{error:_.state.accountError},{default:e(()=>[t(n,{flexible:!0},{default:e(()=>[t(d,{options:[{value:"1",label:"하나 123-456-7890123"},{value:"2",label:"신한 123-456-7890123"},{value:"3",label:"우리 123-456-7890123"}],title:"계좌선택",inputId:"IF_P02_p002_account"})]),_:1})]),_:1},8,["error"]),t(c,null,{default:e(()=>[r("Error Message")]),_:1}),t(f,null,{default:e(()=>[r("재고금융 대출금 송금계좌 및 자동이체 계좌")]),_:1})]),_:1},8,["error"])]),_:1}),t(m,{titleText:"차량 전 소유주",target:"#IF_P02_p002_CarOwner"},{default:e(()=>[t(u,{error:_.state.carOwnerError},{default:e(()=>[t(i,{error:_.state.carOwnerError},{default:e(()=>[t(n,{flexible:!0},{default:e(()=>[t(p,{title:"차량 전 소유주",id:"IF_P02_p002_CarOwner"})]),_:1})]),_:1},8,["error"]),t(c,null,{default:e(()=>[r("Error Message")]),_:1}),t(f,null,{default:e(()=>[r(" 차량 전 소유주 정보를 정확히 입력 해 주시기 바랍니다. ")]),_:1})]),_:1},8,["error"])]),_:1})]),_:1})]),o("section",kt,[It,o("ul",{class:s(a.$style.logs)},[o("li",{class:s(a.$style.logs__item)},[o("div",{class:s(a.$style.logs__block)},[o("div",{class:s(a.$style.logs__row)},[o("div",{class:s(a.$style.logs__contents)},[o("h3",{class:s(a.$style.logs__title)},"서류등록",2),o("ul",{class:s([a.$style["basic-list"],a.$style["basic-list--regular"],"row-margin-item"])},[o("li",{class:s([a.$style["basic-list__item"],"text-body-4 font-weight-regular"])},[o("div",{class:s(a.$style["basic-list__symbol"])},"※",2),o("div",{class:s(a.$style["basic-list__content"])}," 2022.12.28 11:34 ",2)],2)],2)],2),o("div",{class:s(a.$style.logs__right)},[o("button",{type:"button",class:s(a.$style.logs__link),onClick:g[0]||(g[0]=(...V)=>a.layer001Open&&a.layer001Open(...V))},[o("span",{class:s(a.$style["logs__link-text"])},"상세보기",2)],2)],2)],2)],2)],2)],2)]),t(x,null,{default:e(()=>[t(T,null,{default:e(()=>[t(P,null,{default:e(()=>[r("저장")]),_:1})]),_:1})]),_:1})]),_:1})}const vt={$style:dt},Nt=K(pt,[["render",Bt],["__cssModules",vt]]);export{Nt as default};
//# sourceMappingURL=IF_P02_p002-93199d29.js.map
