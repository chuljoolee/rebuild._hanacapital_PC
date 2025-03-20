import{P as z}from"./PageContents-d463cb78.js";import{B as P}from"./BasicButton-bf947aac.js";import{B as $,a as M}from"./ButtonListItem-e4b61907.js";import{_ as L,U as H,I as O,a as V,B as q}from"./index-edc21cc3.js";import{P as G}from"./PopupTitle-ea521636.js";import{P as j}from"./PopupButton-acb37510.js";import{M as A,a as D}from"./ModalPopupHead-ada6ef9e.js";import{F as J,a as K}from"./FormListItem-30525d66.js";import{F as Q}from"./FormInvalid-0068421a.js";import{F as R}from"./FormInvalidMessage-6f01a88b.js";import{S as W}from"./SecurityInput-c5e2ac46.js";import{r as X,b as v,h as o,o as F,k,w as t,i as e,l as n,a as l,n as a}from"./vendor-2be1e024.js";const Y={"notice-section":"_notice-section_822as_1","notice-section__title":"_notice-section__title_822as_4","basic-list":"_basic-list_822as_13","basic-list__item":"_basic-list__item_822as_19","basic-list__symbol":"_basic-list__symbol_822as_38","basic-list__content":"_basic-list__content_822as_92","basic-list--regular":"_basic-list--regular_822as_97","basic-list--medium":"_basic-list--medium_822as_108","basic-list--regular-margin":"_basic-list--regular-margin_822as_122","basic-list--normal-margin":"_basic-list--normal-margin_822as_125","basic-list--small-margin":"_basic-list--small-margin_822as_128"},Z={components:{UiLayer:H,PopupTitle:G,PopupButton:j,ModalPopup:A,ModalPopupHead:D,BasicButton:P,ButtonList:$,ButtonListItem:M,InputBlock:O,InputBlockCell:V,FormList:J,FormListItem:K,FormInvalid:Q,FormInvalidMessage:R,BasicInput:q,SecurityInput:W},setup(){const s=X({idError:!1,idNumberError:!1}),_=v(null);return{state:s,layer:_}}},x={class:"row-margin-container-medium"};function tt(s,_,u,i,C,h){const m=o("PopupButton"),p=o("PopupTitle"),d=o("ModalPopupHead"),c=o("BasicInput"),r=o("InputBlockCell"),f=o("InputBlock"),b=o("FormInvalidMessage"),y=o("FormInvalid"),B=o("FormListItem"),w=o("SecurityInput"),E=o("FormList"),g=o("BasicButton"),I=o("ButtonListItem"),N=o("ButtonList"),T=o("ModalPopup"),S=o("UiLayer");return F(),k(S,{ref:"layer"},{default:t(U=>[e(T,null,{head:t(()=>[e(d,null,{right:t(()=>[e(m,{onClick:nt=>U.close()},null,8,["onClick"])]),default:t(()=>[e(p,null,{default:t(()=>[n("공동인증센터")]),_:1})]),_:2},1024)]),foot:t(()=>[e(N,{wrap:!0,align:"center",classNames:{wrap:"row-margin-none"}},{default:t(()=>[e(I,null,{default:t(()=>[e(g,{size:"regular",line:!0,theme:"quaternary"},{default:t(()=>[n("삭제")]),_:1})]),_:1}),e(I,null,{default:t(()=>[e(g,{size:"regular"},{default:t(()=>[n("등록")]),_:1})]),_:1})]),_:1})]),default:t(()=>[e(E,null,{default:t(()=>[e(B,{titleText:"아이디",target:"#Member_P02_l001_id"},{default:t(()=>[e(y,{error:i.state.idError},{default:t(()=>[e(f,{error:i.state.idError},{default:t(()=>[e(r,{flexible:!0},{default:t(()=>[e(c,{title:"아이디",id:"Member_P02_l001_id"})]),_:1})]),_:1},8,["error"]),e(b,null,{default:t(()=>[n("Error Message")]),_:1})]),_:1},8,["error"])]),_:1}),e(B,{titleText:"주민등록번호",target:"#Member_P02_l001_id"},{default:t(()=>[e(y,{error:i.state.idNumberError},{default:t(()=>[e(f,{error:i.state.idNumberError},{default:t(()=>[e(r,{flexible:!0},{default:t(()=>[e(c,{type:"number",pattern:"\\d*",title:"주민등록번호 앞 6자리",id:"Member_P02_l001_id"})]),_:1}),e(r,{type:"sub"},{default:t(()=>[n("-")]),_:1}),e(r,{flexible:!0},{default:t(()=>[e(w,{title:"주민등록번호 뒤 7자리",dot:[!0,!0,!0,!1,!1,!1,!1]})]),_:1})]),_:1},8,["error"]),e(b,null,{default:t(()=>[n("Error Message")]),_:1})]),_:1},8,["error"])]),_:1})]),_:1}),l("div",x,[l("section",{class:a(s.$style["notice-section"])},[l("h3",{class:a(s.$style["notice-section__title"])},"공동인증서 등록",2),l("ul",{class:a(s.$style["basic-list"])},[l("li",{class:a(s.$style["basic-list__item"])},[l("div",{class:a(s.$style["basic-list__symbol"])},null,2),l("div",{class:a(s.$style["basic-list__content"])}," 개인/개인사업자 회원은 공동인증서 로그인을 위해 공동인증서 등록이 필요합니다. ",2)],2),l("li",{class:a(s.$style["basic-list__item"])},[l("div",{class:a(s.$style["basic-list__symbol"])},null,2),l("div",{class:a(s.$style["basic-list__content"])}," 공동인증서를 등록하여 로그인 시 사용하세요. (법인 회원은 별도 등록 불필요) ",2)],2)],2)],2),l("section",{class:a(s.$style["notice-section"])},[l("h3",{class:a(s.$style["notice-section__title"])},"공동인증서 삭제",2),l("ul",{class:a(s.$style["basic-list"])},[l("li",{class:a(s.$style["basic-list__item"])},[l("div",{class:a(s.$style["basic-list__symbol"])},null,2),l("div",{class:a(s.$style["basic-list__content"])}," 등록했던 공동인증서를 삭제할 수 있습니다. 공동인증서를 삭제할 경우, 로그인 등을 위해 공동인증서를 다시 등록해야 합니다. ",2)],2)],2)],2)])]),_:2},1024)]),_:1},512)}const et={$style:Y},st=L(Z,[["render",tt],["__cssModules",et]]),ot={components:{PageContents:z,BasicButton:P,ButtonList:$,ButtonListItem:M,Member_P02_l001:st},setup(){const s=v(null);return{layer001:s,layer001Open:(u={})=>{s.value.layer.open(u.target)}}}},lt=l("br",null,null,-1);function at(s,_,u,i,C,h){const m=o("BasicButton"),p=o("ButtonListItem"),d=o("ButtonList"),c=o("Member_P02_l001"),r=o("PageContents");return F(),k(r,null,{default:t(()=>[e(d,{classNames:{wrap:"row-margin-none"},align:"full"},{default:t(()=>[e(p,null,{default:t(()=>[e(m,{onClick:i.layer001Open},{default:t(()=>[n(" 공동인증서 등록"),lt,n("Member_P02_l001 ")]),_:1},8,["onClick"])]),_:1})]),_:1}),e(c,{ref:"layer001"},null,512)]),_:1})}const gt=L(ot,[["render",at]]);export{gt as default};
//# sourceMappingURL=GuideSign001-803a45c2.js.map
