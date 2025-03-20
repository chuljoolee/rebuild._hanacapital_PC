import{_ as v,I as F,a as T,B as S,b as N}from"./index-edc21cc3.js";import{L as H}from"./LocationBar-db944bfe.js";import{F as j,a as R}from"./FormListItem-30525d66.js";import{P as V}from"./PageContents-d463cb78.js";import{S as A}from"./StepProgress-54ad3148.js";import{P as O,a as U}from"./PageTitle-05d4d7f6.js";import{P as q}from"./PageHeadRow-08e456fb.js";import{P as z}from"./PageMainText-67af7690.js";import{F as W}from"./FormInvalid-0068421a.js";import{B as $}from"./BasicSelect-4f243716.js";import{F as D}from"./FormInvalidMessage-6f01a88b.js";import{B as G}from"./BasicButton-bf947aac.js";import{B as J,a as K}from"./ButtonListItem-e4b61907.js";import{C as Q,a as X}from"./CheckBoxObject-b704a477.js";import{C as Y}from"./CheckBoxLabelText-2b144b3f.js";import{B as Z,a as ee}from"./BoxCheckLabel-e4547158.js";import{B as te}from"./BoxCheckObject-2754bb90.js";import{B as ae,a as _e}from"./BoxCheckListItem-e04e0454.js";import{r as le,f as re,I as oe,h as a,k as se,w as t,o as ie,i as e,l as _,a as p}from"./vendor-2be1e024.js";import"./check-l-e3d092e7.js";const ne={"basic-list":"_basic-list_15w4r_1","basic-list__item":"_basic-list__item_15w4r_7","basic-list__symbol":"_basic-list__symbol_15w4r_26","basic-list__content":"_basic-list__content_15w4r_80","basic-list--regular":"_basic-list--regular_15w4r_85","basic-list--medium":"_basic-list--medium_15w4r_96","basic-list--regular-margin":"_basic-list--regular-margin_15w4r_110","basic-list--normal-margin":"_basic-list--normal-margin_15w4r_113","basic-list--small-margin":"_basic-list--small-margin_15w4r_116","agree-list":"_agree-list_15w4r_120","agree-list__container":"_agree-list__container_15w4r_123","agree-list__right":"_agree-list__right_15w4r_128","agree-list__all":"_agree-list__all_15w4r_139","agree-list__all-head":"_agree-list__all-head_15w4r_152","agree-list__all-checkbox":"_agree-list__all-checkbox_15w4r_159","agree-list__all-contents":"_agree-list__all-contents_15w4r_163","agree-list__depth":"_agree-list__depth_15w4r_166","agree-list__depth-item":"_agree-list__depth-item_15w4r_183","agree-list__depth-head":"_agree-list__depth-head_15w4r_190","agree-list__depth-title":"_agree-list__depth-title_15w4r_195","agree-list__depth-checkbox":"_agree-list__depth-checkbox_15w4r_201","agree-list__depth-contents":"_agree-list__depth-contents_15w4r_205","agree-list__list":"_agree-list__list_15w4r_208","agree-list__item":"_agree-list__item_15w4r_213","agree-list__head":"_agree-list__head_15w4r_219","agree-list__checkbox":"_agree-list__checkbox_15w4r_230","agree-list__link":"_agree-list__link_15w4r_234","agree-list__link-text":"_agree-list__link-text_15w4r_279","agree-list__contents":"_agree-list__contents_15w4r_297","agree-list__list--secondary":"_agree-list__list--secondary_15w4r_304","agree-list__list--secondary-no-padding":"_agree-list__list--secondary-no-padding_15w4r_322","agree-list__list--tertiary":"_agree-list__list--tertiary_15w4r_325","agree-list__list--tertiary-no-padding":"_agree-list__list--tertiary-no-padding_15w4r_346"};const ce={components:{PageContents:V,LocationBar:H,PageHead:O,PageTitle:U,PageHeadRow:q,StepProgress:A,PageMainText:z,FormList:j,FormListItem:R,InputBlock:F,InputBlockCell:T,BasicInput:S,FormInvalid:W,BasicSelect:$,FormInvalidMessage:D,BasicButton:G,ButtonList:J,ButtonListItem:K,CheckBox:Q,CheckBoxLabelText:Y,CheckBoxObject:X,BoxCheck:Z,BoxCheckLabel:ee,BoxCheckObject:te,BoxCheckList:ae,BoxCheckListItem:_e},setup(){const i={ui:{header:N()}},d=le({idNumberError:!1,mailError:!1,homeNumberError:!1,phoneError:!1,addressError001:!1,addressError002:!1,dayError001:!1,bankError:!1,dateError:!1,MethodSelectError:!1,addressMethodSelectError:!1,amountError:!1,rateError:!1,methodError:!1,commissionError:!1,residenceTypeError:!1,additionalTypeError:!1,routeError:!1,objectError:!1,ownerError:!1,domesticBankNameError:!1});return re(()=>{i.ui.header.setActive(()=>"personalLoan")}),oe(()=>{i.ui.header.setActive()}),{state:d}}},me={class:"marginWrap"};function de(i,d,fe,s,ge,pe){const h=a("LocationBar"),k=a("PageTitle"),B=a("StepProgress"),b=a("PageHeadRow"),w=a("PageMainText"),x=a("PageHead"),l=a("BoxCheckLabel"),r=a("BoxCheck"),o=a("BoxCheckListItem"),u=a("BoxCheckList"),n=a("FormInvalid"),c=a("FormListItem"),P=a("BasicInput"),m=a("InputBlockCell"),y=a("BasicSelect"),M=a("InputBlock"),I=a("FormInvalidMessage"),E=a("FormList"),f=a("BasicButton"),g=a("ButtonListItem"),C=a("ButtonList"),L=a("PageContents");return ie(),se(L,null,{head:t(()=>[e(h,{data:[{text:"홈",to:"/main/home"},{text:"진행상태 조회",to:"/"},{text:"온라인 약정",to:"/"}]})]),default:t(()=>[e(x,null,{default:t(()=>[e(b,null,{right:t(()=>[e(B,{total:5,current:2})]),default:t(()=>[e(k,{align:"left"},{default:t(()=>[_("온라인 약정")]),_:1})]),_:1}),e(w,{align:"left"},{default:t(()=>[_("청구서 수령방법을 입력해 주세요")]),_:1})]),_:1}),p("div",null,[e(E,null,{default:t(()=>[e(c,{titleText:"전문금융소비자 해당여부",forceFocus:!0},{default:t(()=>[e(n,{error:s.state.typeError},{default:t(()=>[e(u,{wrap:!0,col:3,classNames:{wrap:"row-margin-block-small"}},{default:t(()=>[e(o,null,{default:t(()=>[e(r,{name:"My_P03_l017_chk",id:"My_P03_l017_chk001",defaultChecked:!0},{default:t(()=>[e(l,null,{default:t(()=>[_("온라인(SMS)")]),_:1})]),_:1})]),_:1}),e(o,null,{default:t(()=>[e(r,{name:"My_P03_l017_chk",id:"My_P03_l017_chk002"},{default:t(()=>[e(l,null,{default:t(()=>[_("이메일")]),_:1})]),_:1})]),_:1}),e(o,null,{default:t(()=>[e(r,{name:"My_P03_l017_chk",id:"My_P03_l017_chk003"},{default:t(()=>[e(l,null,{default:t(()=>[_("이메일 + 우편")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["error"])]),_:1}),e(c,{titleText:"이메일",target:"#MI_P01_p005_EmailId"},{default:t(()=>[e(n,{error:s.state.mailError},{default:t(()=>[e(M,{error:s.state.mailError},{default:t(()=>[e(m,{flexible:!0},{default:t(()=>[e(P,{title:"이메일 아이디",id:"My_P03_l017_EmailId"})]),_:1}),e(m,{margin:"regular"},{default:t(()=>[_("@")]),_:1}),e(m,{margin:"regular",flexible:!0},{default:t(()=>[e(y,{options:[{value:"1",label:"naver.com"},{value:"2",label:"hanmail.net"},{value:"3",label:"gmail.com"},{value:"4",label:"nate.com"},{value:"5",label:"paran.com"},{value:"6",label:"dreamwiz.com"},{value:"7",label:"yahoo.com"},{value:"8",label:"freechal.com"},{value:"9",label:"직접입력"}],title:"이메일 도메인",placeholder:"선택"},null,8,["options"])]),_:1})]),_:1},8,["error"]),e(I,null,{default:t(()=>[_("Error Message")]),_:1})]),_:1},8,["error"])]),_:1}),p("section",me,[e(c,{titleText:"우편 수령지",forceFocus:!0},{default:t(()=>[e(n,{error:s.state.typeError},{default:t(()=>[e(u,{wrap:!0,col:3,classNames:{wrap:"row-margin-block-small"}},{default:t(()=>[e(o,null,{default:t(()=>[e(r,{name:"My_P03_l017_chk02",id:"My_P03_l017_chk004"},{default:t(()=>[e(l,null,{default:t(()=>[_("등본지")]),_:1})]),_:1})]),_:1}),e(o,null,{default:t(()=>[e(r,{name:"My_P03_l017_chk02",id:"My_P03_l017_chk005"},{default:t(()=>[e(l,null,{default:t(()=>[_("실거주지")]),_:1})]),_:1})]),_:1}),e(o,null,{default:t(()=>[e(r,{name:"My_P03_l017_chk02",id:"My_P03_l017_chk006"},{default:t(()=>[e(l,null,{default:t(()=>[_("직장/사업장")]),_:1})]),_:1})]),_:1}),e(o,null,{default:t(()=>[e(r,{name:"My_P03_l017_chk02",id:"My_P03_l017_chk007"},{default:t(()=>[e(l,null,{default:t(()=>[_("직장")]),_:1})]),_:1})]),_:1}),e(o,null,{default:t(()=>[e(r,{name:"My_P03_l017_chk02",id:"My_P03_l017_chk08"},{default:t(()=>[e(l,null,{default:t(()=>[_("사업장")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["error"])]),_:1})])]),_:1})]),e(C,null,{default:t(()=>[e(g,null,{default:t(()=>[e(f,{line:!0,theme:"quaternary"},{default:t(()=>[_("이전")]),_:1})]),_:1}),e(g,null,{default:t(()=>[e(f,null,{default:t(()=>[_("다음")]),_:1})]),_:1})]),_:1})]),_:1})}const ue={$style:ne},Re=v(ce,[["render",de],["__cssModules",ue],["__scopeId","data-v-258f21d7"]]);export{Re as default};
//# sourceMappingURL=My_P03_l017-b83c7666.js.map
