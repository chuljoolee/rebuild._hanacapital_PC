import{_ as b}from"./index-edc21cc3.js";import{r as f,e as c,z as n,o,c as i,n as _,G as g}from"./vendor-2be1e024.js";const y={"car-emblem":"_car-emblem_zhbxx_1","car-emblem__img":"_car-emblem__img_zhbxx_11","car-emblem--size-medium":"_car-emblem--size-medium_zhbxx_22","car-emblem--code":"_car-emblem--code_zhbxx_38"},u="/rebuild._hanacapital_PC/",d=()=>({wrap:"",img:""}),z={props:{classNames:{Type:Object,default(){return d()}},size:{Type:String,default:null},code:{Type:String,default:null},src:{Type:String,default:null},name:{Type:String,default:null}},setup(e){const s=f({isError:!1}),l=c(()=>{const{classNames:m}=e;return Object.assign(d(),m)}),r=c(()=>{const{code:m,src:a=""}=e;return m?`${u}images/car-emblem/${m}.svg`:typeof a=="string"&&a.length?a.match(/^\//)?u+a.replace(/^\//,""):a:""}),t=()=>{s.isError=!0};return n(()=>e.code,()=>{s.isError=!1}),n(()=>e.src,()=>{e.code||(s.isError=!1)}),{state:s,customClassNames:l,imgSrc:r,onError:t}}},E=["src","alt"];function h(e,s,l,r,t,m){return o(),i("span",{class:_([e.$style["car-emblem"],{"is-error":r.state.isError,[e.$style[`car-emblem--size-${l.size}`]]:l.size,[e.$style["car-emblem--code"]]:l.code},r.customClassNames.wrap])},[r.imgSrc.length?(o(),i("img",{key:0,src:r.imgSrc,alt:l.name,class:_([e.$style["car-emblem__img"],r.customClassNames.img]),onError:s[0]||(s[0]=(...a)=>r.onError&&r.onError(...a))},null,42,E)):g("",!0)],2)}const C={$style:y},N=b(z,[["render",h],["__cssModules",C]]);export{N as C};
//# sourceMappingURL=CarEmblem-d9b54f63.js.map
