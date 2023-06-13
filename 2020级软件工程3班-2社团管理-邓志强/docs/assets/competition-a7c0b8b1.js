import{aj as u,_ as C,d as E,o as P,c as k,a as g,b as o,w as a,F as y,E as m,e as v,f as z,g as F,h as r,i as L,j as U,k as W,l as I}from"./index-d7bbc15e.js";import{E as $}from"./el-pagination-d6b221c8.js";import{c as A}from"./cloneDeep-23e9d014.js";const q=e=>u.request({url:"api/competition/add",method:"post",data:e}),B=e=>u.request({url:"api/competition/delete",params:e}),D=e=>u.request({url:"api/competition/edit",method:"post",data:e}),N=e=>u.request({url:"api/competition/page",method:"post",data:e}),T=E({data(){return{competitions:[],page:{total:0,current:1,size:10},dialogFormVisible:!1,competition:{id:"",name:0,start:"",end:0,homePage:0,type:"",level:"",organizer:0,schoolId:""},formLabelWidth:80}},mounted(){this.getcompetitionsPage(1)},methods:{toEdit(e){console.log(e),this.dialogFormVisible=!0,this.competition=A(e)},getcompetitionsPage(e){N({schoolId:1,current:e,size:5}).then(n=>{console.log(n);const h=n.data;this.competitions=h.page.records,this.page=page}).catch(n=>{console.log(n)})},currentchange(e){this.getcompetitionsPage(e),this.page.current=e},del(e){console.log(e),B({id:e}).then(n=>{if(n.success)this.getcompetitionsPage(this.page.current),this.page.total%this.page.size==1?this.getAdCatesPage(this.page.current-1):this.getAdCatesPage(this.page.current);else return console.log(n.msg),!1}).catch(n=>{})},toAdd(){this.dialogFormVisible=!0,this.competition={id:"",name:"",start:"",end:"",homePage:"",type:"",level:"",organizer:"",schoolId:""}},save(){const e=this.competition;e.id==0?q(e).then(t=>{if(t.success)this.dialogFormVisible=!1,this.getcompetitionsPage(this.page.current),m(t.msg);else return m(t.msg),!1}).catch(t=>{m("网络错误联系管理员")}):D(e).then(t=>{if(t.success)this.dialogFormVisible=!1,this.getcompetitionsPage(this.page.current),m(t.msg);else return m(t.msg),!1}).catch(t=>{m("网络错误联系管理员")})}}}),j={class:"competitions"},_={class:"competition-tools"},M={class:"dialog-footer"};function G(e,t,n,h,H,J){const p=v,i=L,c=z,f=$,s=U,d=W,b=I,V=F;return P(),k(y,null,[g("div",j,[g("div",_,[o(p,{type:"warning",onClick:e.toAdd},{default:a(()=>[r("添加")]),_:1},8,["onClick"])]),o(c,{data:e.competitions,style:{width:"100%"}},{default:a(()=>[o(i,{prop:"id",label:"竞赛编号",width:"150"}),o(i,{prop:"name",label:"竞赛名称",width:"150"}),o(i,{prop:"start",label:"开始时间",width:"150"}),o(i,{prop:"end",label:"结束时间",width:"150"}),o(i,{prop:"homePage",label:"竞赛官网",width:"150"}),o(i,{prop:"type",label:"竞赛类型",width:"150"}),o(i,{prop:"level",label:"竞赛等级",width:"150"}),o(i,{prop:"organizer",label:"主办单位",width:"150"}),o(i,{prop:"schoolId",label:"学校",width:"150"}),o(i,{fixed:"right",label:"操作",width:"120"},{default:a(l=>[o(p,{link:"",type:"primary",size:"small",onClick:w=>e.toEdit(l.row)},{default:a(()=>[r("更新")]),_:2},1032,["onClick"]),o(p,{link:"",type:"primary",size:"small",onClick:w=>e.del(l.row.id)},{default:a(()=>[r("删除")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"]),o(f,{layout:"prev, pager, next","page-size":e.page.size,total:e.page.total,onCurrentChange:e.currentchange},null,8,["page-size","total","onCurrentChange"])]),o(V,{modelValue:e.dialogFormVisible,"onUpdate:modelValue":t[9]||(t[9]=l=>e.dialogFormVisible=l),title:"广告类型编辑"},{footer:a(()=>[g("span",M,[o(p,{onClick:t[8]||(t[8]=l=>e.dialogFormVisible=!1)},{default:a(()=>[r("Cancel")]),_:1}),o(p,{type:"primary",onClick:e.save},{default:a(()=>[r(" 保存 ")]),_:1},8,["onClick"])])]),default:a(()=>[o(b,{model:e.competition},{default:a(()=>[o(d,{label:"竞赛名称","label-width":e.formLabelWidth},{default:a(()=>[o(s,{modelValue:e.competition.name,"onUpdate:modelValue":t[0]||(t[0]=l=>e.competition.name=l),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),o(d,{label:"开始时间","label-width":e.formLabelWidth},{default:a(()=>[o(s,{modelValue:e.competition.start,"onUpdate:modelValue":t[1]||(t[1]=l=>e.competition.start=l),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),o(d,{label:"结束时间","label-width":e.formLabelWidth},{default:a(()=>[o(s,{modelValue:e.competition.end,"onUpdate:modelValue":t[2]||(t[2]=l=>e.competition.end=l),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),o(d,{label:"竞赛官网","label-width":e.formLabelWidth},{default:a(()=>[o(s,{modelValue:e.competition.homePage,"onUpdate:modelValue":t[3]||(t[3]=l=>e.competition.homePage=l),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),o(d,{label:"竞赛类型","label-width":e.formLabelWidth},{default:a(()=>[o(s,{modelValue:e.competition.type,"onUpdate:modelValue":t[4]||(t[4]=l=>e.competition.type=l),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),o(d,{label:"竞赛等级","label-width":e.formLabelWidth},{default:a(()=>[o(s,{modelValue:e.competition.level,"onUpdate:modelValue":t[5]||(t[5]=l=>e.competition.level=l),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),o(d,{label:"主办单位","label-width":e.formLabelWidth},{default:a(()=>[o(s,{modelValue:e.competition.organizer,"onUpdate:modelValue":t[6]||(t[6]=l=>e.competition.organizer=l),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),o(d,{label:"学校","label-width":e.formLabelWidth},{default:a(()=>[o(s,{modelValue:e.competition.schoolId,"onUpdate:modelValue":t[7]||(t[7]=l=>e.competition.schoolId=l),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"])]),_:1},8,["model"])]),_:1},8,["modelValue"])],64)}const R=C(T,[["render",G]]);export{R as default};
