import{P as u}from"./PageContents-d463cb78.js";import{B as _}from"./BasicButton-bf947aac.js";import{B as f,a as B}from"./ButtonListItem-e4b61907.js";import{A as d}from"./AlertSystem-b3117b6c.js";import{_ as C}from"./index-edc21cc3.js";import{b as g,h as o,k,w as e,o as A,i as n,l as L}from"./vendor-2be1e024.js";import"./PopupTitle-ea521636.js";import"./PopupText-57167ba9.js";import"./AlertPopup-20ed3ed4.js";const x={components:{PageContents:u,BasicButton:_,ButtonList:f,ButtonListItem:B,AlertSystem:d},setup(){const s=g(null),a=t=>{s.value.open(t)};return{alert:s,alertOpen001:()=>{a({title:"타이틀",buttons:[{callback:t=>{console.log("확인"),t()},closeAfterCallback:()=>{console.log("[확인] 닫는 애니메이션 끝난 후 호출 될 함수")}}]})}}}};function b(s,a,r,t,w,O){const l=o("BasicButton"),c=o("ButtonListItem"),m=o("ButtonList"),i=o("AlertSystem"),p=o("PageContents");return A(),k(p,null,{default:e(()=>[n(m,{classNames:{wrap:"row-margin-none"},align:"full"},{default:e(()=>[n(c,null,{default:e(()=>[n(l,{onClick:t.alertOpen001},{default:e(()=>[L("얼럿")]),_:1},8,["onClick"])]),_:1})]),_:1}),n(i,{ref:"alert"},null,512)]),_:1})}const G=C(x,[["render",b]]);export{G as default};
//# sourceMappingURL=GuideAlert003-027267d7.js.map
