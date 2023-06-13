import{aj as b,_ as D,d as v,o as F,c as k,b as l,w as t,a as i,F as C,E as u,l as N,e as E,g as q,f as U,ab as n,h as p,k as L,j as W,i as $}from"./index-d7bbc15e.js";import{E as y}from"./index-d5b03631.js";const B=e=>b.request({url:"api/major/page",method:"post",data:e}),O=e=>b.request({url:"api/dormitory/add",method:"post",data:e}),T=e=>b.request({url:"api/dormitory/delete",method:"get",params:e}),I=e=>b.request({url:"api/dormitory/edit",method:"post",data:e}),_=e=>b.request({url:"api/dormitory/one",method:"get",params:e}),j=()=>b.request({url:"api/dormitory/all",method:"get"}),f={getPage:B,add:O,remove:T,update:I,select:_,entire:j};const S=v({components:{ElMessageBox:y,ElMessage:u},data(){return{list:[],dormitory:{},dialogFormVisible:!1,queryForm:{id:""},dialogVisible:!1,dialogData:{},sortOrder:"asc"}},mounted(){this.fetchData(),this.sortData()},methods:{toggleSortOrder(){this.sortOrder=this.sortOrder==="asc"?"desc":"asc",this.sortData()},sortData(){this.sortOrder==="asc"?this.list.sort((e,o)=>e.id-o.id):this.list.sort((e,o)=>o.id-e.id)},fetchData(){f.entire().then(e=>{console.log(e),this.list=e.data.dormitories})},handleQuery(){const e={id:this.queryForm.id};f.select(e).then(o=>{console.log(o),this.dialogData=o.data.dormitory,this.dialogVisible=!0}).catch(o=>{y.alert("查询失败，请重试","错误",{confirmButtonText:"确定",type:"error"}),console.error(o)})},handleDelete(e){const o={id:e};y.confirm("您是否需要删除该宿舍?","提示",{confirmButtonText:"是",cancelButtonText:"否",type:"warning"}).then(()=>{f.remove(o).then(h=>{h.success?(u({type:"success",message:"删除成功"}),this.fetchData()):u({type:"error",message:"网络出问题，联系管理员"})})}).catch(()=>{u({type:"warning",message:"删除取消"})})},handleEdit(e){this.dialogFormVisible=!0;const o={id:e};f.select(o).then(h=>{this.dormitory=h.data.dormitory})},toAdd(){this.dormitory={},this.dialogFormVisible=!0},confirm(){this.dormitory.id==null?f.add(this.dormitory).then(e=>{e.success?(u({type:"success",message:"添加成功"}),this.fetchData()):u({type:"error",message:"网络出问题，联系管理员"}),this.dialogFormVisible=!1}):(f.update(this.dormitory).then(e=>{e.success?(u({type:"success",message:"编辑成功"}),this.fetchData()):u({type:"error",message:"网络出问题，联系管理员"})}),this.dialogFormVisible=!1)}}}),z={slot:"footer",class:"footer-container"},A={class:"root"},M={class:"dialog-footer"},Q={class:"box"},P={class:"query-form"},G={class:"add"},H={class:"table"};function J(e,o,h,K,R,X){const d=L,g=N,m=E,V=q,s=W,r=$,w=U;return F(),k(C,null,[l(V,{modelValue:e.dialogVisible,"onUpdate:modelValue":o[1]||(o[1]=a=>e.dialogVisible=a),title:"查询结果",width:"30%"},{default:t(()=>[l(g,{model:e.dialogData},{default:t(()=>[l(d,{label:"宿舍名称"},{default:t(()=>[i("span",null,n(e.dialogData.name),1)]),_:1}),l(d,{label:"宿舍长编号"},{default:t(()=>[i("span",null,n(e.dialogData.leader),1)]),_:1}),l(d,{label:"总床位数"},{default:t(()=>[i("span",null,n(e.dialogData.maxNumber),1)]),_:1}),l(d,{label:"空位数"},{default:t(()=>[i("span",null,n(e.dialogData.leftNumber),1)]),_:1}),l(d,{label:"入住人数"},{default:t(()=>[i("span",null,n(e.dialogData.liveNumber),1)]),_:1}),l(d,{label:"宿舍状态"},{default:t(()=>[i("span",null,n(e.dialogData.status),1)]),_:1}),l(d,{label:"宿舍备注"},{default:t(()=>[i("span",null,n(e.dialogData.comment),1)]),_:1}),l(d,{label:"学校"},{default:t(()=>[i("span",null,n(e.dialogData.school),1)]),_:1}),l(d,{label:"宿舍类型"},{default:t(()=>[i("span",null,n(e.dialogData.type),1)]),_:1}),l(d,{label:"建筑"},{default:t(()=>[i("span",null,n(e.dialogData.building),1)]),_:1})]),_:1},8,["model"]),i("div",z,[l(m,{onClick:o[0]||(o[0]=a=>e.dialogVisible=!1)},{default:t(()=>[p("关闭")]),_:1})])]),_:1},8,["modelValue"]),i("div",A,[l(V,{modelValue:e.dialogFormVisible,"onUpdate:modelValue":o[14]||(o[14]=a=>e.dialogFormVisible=a),title:"宿舍表单"},{footer:t(()=>[i("div",M,[l(m,{onClick:o[12]||(o[12]=a=>e.dialogFormVisible=!1),class:"cancel-button"},{default:t(()=>[p("取消")]),_:1}),l(m,{type:"primary",onClick:o[13]||(o[13]=a=>e.confirm()),class:"confirm-button"},{default:t(()=>[p("确定")]),_:1})])]),default:t(()=>[l(g,{model:e.dormitory},{default:t(()=>[l(d,{label:"宿舍名称","label-width":e.formLabelWidth},{default:t(()=>[l(s,{modelValue:e.dormitory.name,"onUpdate:modelValue":o[2]||(o[2]=a=>e.dormitory.name=a),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(d,{label:"宿舍长编号","label-width":e.formLabelWidth},{default:t(()=>[l(s,{modelValue:e.dormitory.leader,"onUpdate:modelValue":o[3]||(o[3]=a=>e.dormitory.leader=a),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(d,{label:"总床位数","label-width":e.formLabelWidth},{default:t(()=>[l(s,{modelValue:e.dormitory.maxNumber,"onUpdate:modelValue":o[4]||(o[4]=a=>e.dormitory.maxNumber=a),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(d,{label:"空位数","label-width":e.formLabelWidth},{default:t(()=>[l(s,{modelValue:e.dormitory.leftNumber,"onUpdate:modelValue":o[5]||(o[5]=a=>e.dormitory.leftNumber=a),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(d,{label:"入住人数","label-width":e.formLabelWidth},{default:t(()=>[l(s,{modelValue:e.dormitory.liveNumber,"onUpdate:modelValue":o[6]||(o[6]=a=>e.dormitory.liveNumber=a),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(d,{label:"宿舍状态","label-width":e.formLabelWidth},{default:t(()=>[l(s,{modelValue:e.dormitory.status,"onUpdate:modelValue":o[7]||(o[7]=a=>e.dormitory.status=a),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(d,{label:"宿舍备注","label-width":e.formLabelWidth},{default:t(()=>[l(s,{modelValue:e.dormitory.comment,"onUpdate:modelValue":o[8]||(o[8]=a=>e.dormitory.comment=a),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(d,{label:"学校","label-width":e.formLabelWidth},{default:t(()=>[l(s,{modelValue:e.dormitory.school,"onUpdate:modelValue":o[9]||(o[9]=a=>e.dormitory.school=a),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(d,{label:"宿舍类型","label-width":e.formLabelWidth},{default:t(()=>[l(s,{modelValue:e.dormitory.type,"onUpdate:modelValue":o[10]||(o[10]=a=>e.dormitory.type=a),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(d,{label:"建筑","label-width":e.formLabelWidth},{default:t(()=>[l(s,{modelValue:e.dormitory.building,"onUpdate:modelValue":o[11]||(o[11]=a=>e.dormitory.building=a),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"])]),_:1},8,["model"])]),_:1},8,["modelValue"]),i("div",Q,[i("div",P,[l(g,{model:e.queryForm,inline:""},{default:t(()=>[l(d,{label:""},{default:t(()=>[l(s,{modelValue:e.queryForm.id,"onUpdate:modelValue":o[15]||(o[15]=a=>e.queryForm.id=a),placeholder:"请输入宿舍ID",clearable:""},null,8,["modelValue"])]),_:1}),l(d,null,{default:t(()=>[l(m,{type:"primary",onClick:e.handleQuery},{default:t(()=>[p("查询")]),_:1},8,["onClick"])]),_:1})]),_:1},8,["model"])]),i("div",G,[l(m,{type:"success",plain:"",onClick:e.toAdd,class:"add-button"},{default:t(()=>[p("新增")]),_:1},8,["onClick"])]),l(m,{onClick:e.toggleSortOrder},{default:t(()=>[p("切换排序")]),_:1},8,["onClick"])]),i("div",H,[l(w,{data:e.list,style:{width:"100%"}},{default:t(()=>[l(r,{fixed:"",prop:"id",label:"ID",width:"80",align:"center"}),l(r,{prop:"name",label:"宿舍名称",width:"100",align:"center"}),l(r,{prop:"leader",label:"宿舍长编号",width:"100",align:"center"}),l(r,{prop:"maxNumber",label:"总床位数",width:"100",align:"center"}),l(r,{prop:"leftNumber",label:"空位数",width:"100",align:"center"}),l(r,{prop:"liveNumber",label:"入住人数",width:"100",align:"center"}),l(r,{prop:"status",label:"宿舍状态",width:"100",align:"center"}),l(r,{prop:"comment",label:"宿舍备注",width:"200",align:"center"}),l(r,{prop:"school",label:"学校",width:"150",align:"center"}),l(r,{prop:"type",label:"宿舍类型",width:"100",align:"center"}),l(r,{prop:"building",label:"建筑",width:"100",align:"center"}),l(r,{fixed:"right",label:"权限",width:"150",align:"center"},{default:t(a=>[l(m,{type:"info",plain:"",size:"small",onClick:c=>e.handleEdit(a.row.id),class:"edit-button"},{default:t(()=>[p("编辑")]),_:2},1032,["onClick"]),l(m,{type:"danger",plain:"",size:"small",onClick:c=>e.handleDelete(a.row.id),class:"delete-button"},{default:t(()=>[p("删除")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])])])],64)}const x=D(S,[["render",J],["__scopeId","data-v-53c17540"]]);export{x as default};
