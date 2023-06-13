import{aj as r,_ as F,d as I,o as c,c as g,a as h,b as s,w as a,F as p,E as t,e as $,j as D,f as v,g as z,h as d,Z as V,K as _,i as A,k as B,ak as q,al as U,l as N}from"./index-d7bbc15e.js";import{c as S}from"./cloneDeep-23e9d014.js";const L=l=>r.request({url:"api/classroom/add",method:"post",data:l}),P=()=>r.request({url:"api/classroom/all",method:"get"}),O=l=>r.request({url:"api/classroom/delete",method:"get",params:l}),W=l=>r.request({url:"api/classroom/edit",method:"post",data:l}),T=l=>r.request({url:"api/classroom/one",method:"get",params:{id:l}}),j=()=>r.request({url:"api/building/all",method:"get"}),K=()=>r.request({url:"api/school/all",method:"get"}),M=I({data(){return{classrooms:[],page:{total:0,current:1,size:5},dialogFormVisible:!1,classroom:{building:"",id:null,name:"",school:""},formLabelWidth:80,searchId:"",buildings:[],schools:[]}},mounted(){this.getClassroomsPage(1),this.getAllBuildingData(),this.getAllSchoolData()},methods:{toEdit(l){console.log(l),this.dialogFormVisible=!0,this.classroom=S(l)},getClassroomsPage(l){this.page.size,P().then(e=>{console.log(e),e.success?(this.classrooms=e.data.classrooms,this.page={total:e.data.classrooms.length,current:e.data.current,size:e.data.size}):console.log(e.msg)}).catch(e=>{console.log(e)})},del(l){console.log(l),O({id:l}).then(i=>{if(i.success)this.getClassroomsPage(this.page.current);else return console.log(i.msg),!1}).catch(i=>{})},addOrUpdateClassroom(){const l=this.classroom;l.id?W(l).then(e=>{e.success?(this.dialogFormVisible=!1,this.getClassroomsPage(this.page.current),t.success(e.msg)):t.error(e.msg)}).catch(e=>{t.error("网络错误，请联系管理员")}):L(l).then(e=>{e.success?(this.dialogFormVisible=!1,this.getClassroomsPage(this.page.current),t.success(e.msg)):t.error(e.msg)}).catch(e=>{t.error("网络错误，请联系管理员")})},toAdd(){this.dialogFormVisible=!0,this.classroom={building:"",id:null,name:"",school:""}},searchClassroom(){const l=parseInt(this.searchId);if(isNaN(l)){t.warning("请输入有效的教室ID");return}console.log("Searching classroom with ID:",l),T(l).then(e=>{if(console.log("Search result:",e),e.success){const i=e.data.classinfo;this.classrooms=[i],this.page={total:1,current:1,size:this.page.size}}else t.error(e.msg)}).catch(e=>{t.error("网络错误，请联系管理员")})},getAllBuildingData(){j().then(l=>{console.log(l),l.success?this.buildings=l.data.buildings:console.log(l.msg)}).catch(l=>{console.log(l)})},getAllSchoolData(){K().then(l=>{console.log(l),l.success?this.schools=l.data.schools:console.log(l.msg)}).catch(l=>{console.log(l)})}}}),Z={class:"classrooms"},G={class:"classroom-tools"},H={class:"dialog-footer"};function J(l,e,i,Q,R,X){const n=$,f=D,m=A,k=v,u=B,b=q,C=U,w=N,E=z;return c(),g(p,null,[h("div",Z,[h("div",G,[s(n,{type:"warning",onClick:l.toAdd},{default:a(()=>[d("添加")]),_:1},8,["onClick"]),s(f,{modelValue:l.searchId,"onUpdate:modelValue":e[0]||(e[0]=o=>l.searchId=o),placeholder:"请输入教室ID",clearable:"",style:{width:"120px"}},null,8,["modelValue"]),s(n,{type:"primary",onClick:l.searchClassroom},{default:a(()=>[d("搜索")]),_:1},8,["onClick"])]),s(k,{data:l.classrooms,style:{width:"100%"}},{default:a(()=>[s(m,{fixed:"",prop:"id",label:"ID",width:"150"}),s(m,{prop:"name",label:"教室名称",width:"120"}),s(m,{prop:"building",label:"所在建筑",width:"120"}),s(m,{prop:"school",label:"所属学校",width:"120"}),s(m,{fixed:"right",label:"功能管理",width:"120"},{default:a(o=>[s(n,{link:"",type:"primary",size:"small",onClick:y=>l.toEdit(o.row)},{default:a(()=>[d("更新")]),_:2},1032,["onClick"]),s(n,{link:"",type:"primary",size:"small",onClick:y=>l.del(o.row.id)},{default:a(()=>[d("删除")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])]),s(E,{modelValue:l.dialogFormVisible,"onUpdate:modelValue":e[5]||(e[5]=o=>l.dialogFormVisible=o),title:"教室编辑"},{footer:a(()=>[h("span",H,[s(n,{onClick:e[4]||(e[4]=o=>l.dialogFormVisible=!1)},{default:a(()=>[d("Cancel")]),_:1}),s(n,{type:"primary",onClick:l.addOrUpdateClassroom},{default:a(()=>[d("保存")]),_:1},8,["onClick"])])]),default:a(()=>[s(w,{model:l.classroom},{default:a(()=>[s(u,{label:"教室名称","label-width":l.formLabelWidth},{default:a(()=>[s(f,{modelValue:l.classroom.name,"onUpdate:modelValue":e[1]||(e[1]=o=>l.classroom.name=o),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),s(u,{label:"所在建筑","label-width":l.formLabelWidth},{default:a(()=>[s(C,{modelValue:l.classroom.building,"onUpdate:modelValue":e[2]||(e[2]=o=>l.classroom.building=o),placeholder:"请选择所在建筑"},{default:a(()=>[(c(!0),g(p,null,V(l.buildings,o=>(c(),_(b,{key:o.id,label:`${o.id}（${o.name}）`,value:o.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1},8,["label-width"]),s(u,{label:"所属学校","label-width":l.formLabelWidth},{default:a(()=>[s(C,{modelValue:l.classroom.school,"onUpdate:modelValue":e[3]||(e[3]=o=>l.classroom.school=o),placeholder:"请选择所属学校"},{default:a(()=>[(c(!0),g(p,null,V(l.schools,o=>(c(),_(b,{key:o.id,label:`${o.id}（${o.schoolName}）`,value:o.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1},8,["label-width"])]),_:1},8,["model"])]),_:1},8,["modelValue"])],64)}const ll=F(M,[["render",J]]);export{ll as default};
