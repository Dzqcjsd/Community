import{aj as V,_ as w,d as B,o as C,c as E,b as a,w as o,a as f,am as j,E as g,e as F,f as M,g as k,h as m,i as z,j as S,k as N,l as T}from"./index-d7bbc15e.js";import{E as $}from"./el-pagination-d6b221c8.js";/* empty css                   */import{E as v}from"./index-d5b03631.js";const r=e=>V.request(e),p={getMajorByPage:e=>r({url:"api/major/page",method:"post",data:e}),deleteById:e=>r({url:"api/major/delete",method:"get",params:e}),updateById:e=>r({url:"api/major/edit",method:"post",data:e}),queryById:e=>r({url:"api/major/one",method:"get",params:e}),addOne:e=>r({url:"api/major/add",method:"post",data:e}),getMajorForSelectByDepartId:e=>r({url:"api/major/getMajorForSelectByDepartId",method:"get",params:e}),getMajorsForSelectBySchoolId:e=>r({url:"api/major/getMajorsForSelectBySchoolId",method:"get",params:e}),getMajorsForSelectByDepart:e=>r({url:"api/major/getMajorsForSelectByDepart",method:"get",params:e}),getColumns:e=>r({url:"api/major/colums",method:"get",params:e}),getAll:()=>r({url:"api/major/all",method:"get"})};const Y=B({data(){return{tableData:[],page:1,total:0,limit:10,major:{},dialogFormVisible:!1,majorName:"",majorDesc:"",schoolId:"",departId:"",formLabelWidth:"120px"}},methods:{fetchData(e){this.page=e;const t={current:e,size:this.limit};p.getMajorByPage(t).then(s=>{const c=s.data.page;this.tableData=c.records,this.tableData.forEach(i=>{i.createTime=j(i.createTime).format("YYYY-MM-DD HH:mm:ss"),i.updateTime=j(i.createTime).format("YYYY-MM-DD HH:mm:ss")}),this.total=c.total})},handleDelete(e){const t={id:e};v.confirm("你确定删除该行数据吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{p.deleteById(t).then(s=>{console.log(s),s.success?(g({type:"success",message:"删除成功"}),this.fetchData(1)):g({type:"error",message:"删除失败"})})}).catch(()=>{g({type:"warning",message:"取消删除"})})},handleEdit(e){this.dialogFormVisible=!0,p.queryById({id:e}).then(t=>{const s=t.data;this.major=s.major,this.majorName=s.major.majorName,this.majorDesc=s.major.majorDesc,this.schoolId=s.major.schoolId,this.departId=s.major.departId})},toAdd(){this.major={},this.dialogFormVisible=!0},execute(){if(this.major.id)p.updateById(this.major).then(e=>{e.data.success?(this.$message({type:"success",message:"编辑成功"}),this.fetchData(1)):this.$message({type:"error",message:"编辑失败"})}),this.dialogFormVisible=!1;else{const e={majorName:this.majorName,majorDesc:this.majorDesc,schoolId:this.schoolId,departId:this.departId};p.addOne(e).then(t=>{t.data.success?(this.$message({type:"success",message:"添加成功"}),this.fetchData(1)):this.$message({type:"error",message:"添加失败"}),this.dialogFormVisible=!1})}},changeSize(e){this.limit=e,this.fetchData(this.page)}},mounted(){this.fetchData(1)}}),L={class:""},U={class:"table"},W={class:"dialog-footer"};function q(e,t,s,c,i,H){const n=F,d=z,b=M,y=$,u=S,h=N,D=T,I=k;return C(),E("div",L,[a(n,{type:"success",size:"small",onClick:e.toAdd},{default:o(()=>[m("添加")]),_:1},8,["onClick"]),f("div",U,[a(b,{data:e.tableData,style:{width:"100%"}},{default:o(()=>[a(d,{fixed:"",prop:"id",label:"编号",width:"150",align:"center"}),a(d,{prop:"majorName",label:"专业名称",width:"210",align:"center"}),a(d,{prop:"majorDesc",label:"专业描述",width:"120",align:"center"}),a(d,{prop:"departId",label:"学院编号",width:"120",align:"center"}),a(d,{prop:"schoolId",label:"学校编号",width:"120",align:"center"}),a(d,{prop:"createTime",label:"创建时间",width:"250",align:"center"}),a(d,{prop:"updateTime",label:"更新时间",width:"250",align:"center"}),a(d,{fixed:"right",label:"操作",width:"180",align:"center"},{default:o(l=>[a(n,{size:"small",onClick:_=>e.handleEdit(l.row.id)},{default:o(()=>[m("编辑")]),_:2},1032,["onClick"]),a(n,{size:"small",type:"danger",onClick:_=>e.handleDelete(l.row.id)},{default:o(()=>[m("删除")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])]),a(y,{"current-page":e.page,total:e.total,"page-size":e.limit,"page-sizes":[5,10,20,30,40,50,100],style:{padding:"30px 0","text-align":"center"},layout:"sizes, prev, pager, next, jumper, ->, total, slot",onCurrentChange:e.fetchData,onSizeChange:e.changeSize},null,8,["current-page","total","page-size","onCurrentChange","onSizeChange"]),a(I,{modelValue:e.dialogFormVisible,"onUpdate:modelValue":t[5]||(t[5]=l=>e.dialogFormVisible=l),title:"添加/编辑"},{footer:o(()=>[f("span",W,[a(n,{onClick:t[4]||(t[4]=l=>e.dialogFormVisible=!1)},{default:o(()=>[m("取消")]),_:1}),a(n,{type:"primary",onClick:e.execute},{default:o(()=>[m("确定")]),_:1},8,["onClick"])])]),default:o(()=>[a(D,{model:e.major},{default:o(()=>[a(h,{label:"专业名称","label-width":e.formLabelWidth},{default:o(()=>[a(u,{modelValue:e.majorName,"onUpdate:modelValue":t[0]||(t[0]=l=>e.majorName=l),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),a(h,{label:"专业描述","label-width":e.formLabelWidth},{default:o(()=>[a(u,{modelValue:e.majorDesc,"onUpdate:modelValue":t[1]||(t[1]=l=>e.majorDesc=l),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),a(h,{label:"学校编号","label-width":e.formLabelWidth},{default:o(()=>[a(u,{modelValue:e.schoolId,"onUpdate:modelValue":t[2]||(t[2]=l=>e.schoolId=l),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),a(h,{label:"学院编号","label-width":e.formLabelWidth},{default:o(()=>[a(u,{modelValue:e.departId,"onUpdate:modelValue":t[3]||(t[3]=l=>e.departId=l),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"])]),_:1},8,["model"])]),_:1},8,["modelValue"])])}const J=w(Y,[["render",q],["__scopeId","data-v-8bd773c2"]]);export{J as default};
