<template>
    <div class="header">
        <div class="up">
            <el-button type="success" @click="doAdd()">新建社团</el-button>
        </div>

        <div class="down">
            <div class="lst">
                <ListView :data="data" :column="column" title="社团列表">
                    <slot>
                        <el-table-column label="状态" width="80">
                            <template #default="scope">
                                <span v-if="scope.row.status == 0">审核</span>
                                <span v-if="scope.row.status == 1">激活</span>
                                <span v-if="scope.row.status == 2">终止</span>
                            </template>
                        </el-table-column>

                        <el-table-column label="类型" width="80">
                            <template #default="scope">
                                <span v-if="scope.row.type == 0">通用社团</span>
                                <span v-if="scope.row.type == 1">专业社团</span>
                            </template>
                        </el-table-column>

                        <!-- <el-table-column label="logo" width="100">
                            <template #default="scope">
                                <img :src="scope.row.logo" style="width: 80px;height: 60px;"/>
                            </template>
                        </el-table-column> -->

                        <el-table-column fixed="right" label="操作" width="200">
                            <template #default="scope">
                                <el-button type="primary"  @click="doEdit(scope.row.id)">编辑</el-button>
                                <el-button type="danger"  @click="doDelete(scope.row.id)">删除</el-button>
                            </template>
                        </el-table-column>
                    </slot>
                </ListView>
            </div>
        </div>

        <el-dialog v-model="visible" v-if="visible" width="30%" title="社团信息">
            <div class="dia">
                <CommunityEdit :id="choiceId" @doCancel="doCancel"></CommunityEdit>
            </div>
        </el-dialog>
    </div>
</template>
<script>
import ListView from '../../../components/list-view/list-view.vue';
import { del, allConmmunity } from "@/http/communityApi/communityApi"
import { success, fail } from "@/utils/msg/msg";
import CommunityEdit from '../../../components/communityEdit/communityEdit.vue';
export default {
    mounted() {
        this.column = this.buildColumn()
        this.all()
    },
    data() {
        return {
            data: [],
            column: [],
            visible: false,
            choiceId: 0,
            schoolArr: [],
            schoolId: '',
        };
    },
    methods: {
        clear() {
            this.schoolId = ''
            this.all()
        },
        doEdit(id) {
            this.choiceId = id
            this.visible = true
            console.log('编辑的id:' + this.choiceId + '  visible:' + this.visible)
        },
        doAdd() {
            console.log('触发了添加方法')
            this.choiceId = 0
            this.visible = true
        },
        doCancel() {
            this.visible = false
            this.all()
        },
        doDelete(id) {
            console.log('删除的id:' + id)
            del({ id: id }).then(resp => {
                success('删除成功')
                this.all()
            })
        },
        all() {
            allConmmunity().then(resp => {
                console.log('收到回复：' + JSON.stringify(resp.data))
                this.data = resp.data.communities
                
                this.data.forEach(item=>{
                    item.createTime = item.createTime.split('T')[0]
                    item.updateTime = item.updateTime.split('T')[0]
                })
            })
        },
        //规定列表每列名称和显示的属性
        buildColumn() {
            return [
                { prop: "id", label: "编号", width: 100 },
                { prop: "address", label: "地址", width: 100 },
                { prop: "charger", label: "会长", width: 100 },
                { prop: "createTime", label: "创办时间", width: 200 },
                { prop: "depart", label: "学院Id", width: 80 },
                { prop: "description", label: "描述", width: 200 },

                { prop: "email", label: "邮箱", width: 100 },
                { prop: "mobile", label: "电话", width: 100 },
                { prop: "name", label: "名称", width: 200 },
                { prop: "schoolId", label: "学校Id", width: 80 },
                { prop: "teachers", label: "导师", width: 100 },

                { prop: "updateTime", label: "更新时间", width: 100 },
                { prop: "version", label: "版本", width: 100 },
                { prop: "weixin", label: "微信", width: 100 },
            ];
        }
    },
    components: { ListView, CommunityEdit }
}
</script>
<style  scoped>
.up {
    display: flex;
    justify-content: center;
}

.dia{
    height: 600px;
    overflow-y: auto;
}

.lst {
    width: 1700px;
    display: flex;
    justify-content: center;
    height: 800px;
    overflow-y: auto;
}

.down {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    width: 1700px;
    overflow-x: auto;
    margin-left: 100px;
}
.header{
    position: relative;
}
.up{
    position: absolute;
    right:20px;
    top: 10px;
}
</style>
