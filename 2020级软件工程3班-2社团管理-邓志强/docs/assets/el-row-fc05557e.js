import{q as c,d as n,z as p,G as a,au as f,bn as m,o as g,K as d,w,a1 as y,L as _,M as o,N as v,W as R,a4 as b,a8 as h}from"./index-d7bbc15e.js";const C=["start","center","end","space-around","space-between","space-evenly"],S=["top","middle","bottom"],j=c({tag:{type:String,default:"div"},gutter:{type:Number,default:0},justify:{type:String,values:C,default:"start"},align:{type:String,values:S,default:"top"}}),k=n({name:"ElRow"}),x=n({...k,props:j,setup(r){const t=r,s=p("row"),l=a(()=>t.gutter);f(m,{gutter:l});const u=a(()=>{const e={};return t.gutter&&(e.marginRight=e.marginLeft=`-${t.gutter/2}px`),e}),i=a(()=>[s.b(),s.is(`justify-${t.justify}`,t.justify!=="start"),s.is(`align-${t.align}`,t.align!=="top")]);return(e,z)=>(g(),d(R(e.tag),{class:_(o(i)),style:v(o(u))},{default:w(()=>[y(e.$slots,"default")]),_:3},8,["class","style"]))}});var $=b(x,[["__file","/home/runner/work/element-plus/element-plus/packages/components/row/src/row.vue"]]);const K=h($);export{K as E};
