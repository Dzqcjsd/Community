<template>
    <div class="header">
        <div class="up">
            <el-button type="success" @click="doAdd()">新建</el-button>
        </div>

        <div class="down">
            <div class="lst">
                <ListView :data="data" :column="column" title="报名列表">
                    <slot>

                        <el-table-column label="状态" width="80">
                            <template #default="scope">
                                <span v-if="scope.row.checked == 0">审核</span>
                                <span v-if="scope.row.checked == 1">激活</span>
                                <span v-if="scope.row.checked == 2">休学</span>
                                <span v-if="scope.row.checked == 3">毕业</span>
                            </template>
                        </el-table-column>

                        <el-table-column label="操作" width="200">
                            <template #default="scope">
                                <el-button type="primary" @click="doEdit(scope.row.id)">编辑</el-button>
                                <el-button type="danger" @click="doDelete(scope.row.id)">删除</el-button>
                            </template>
                        </el-table-column>
                    </slot>
                </ListView>
            </div>
        </div>

        <el-dialog v-model="visible" v-if="visible" width="30%" title="报名信息">
            <SignEdit :id="choiceId" @doCancel="doCancel"></SignEdit>
        </el-dialog>
    </div>
</template>
<script>
import ListView from '../../../components/list-view/list-view.vue';
import { del, allSign } from "@/http/communitySignupApi/communitySignupApi"
import { success, fail } from "@/utils/msg/msg";
import SignEdit from '../../../components/signEdit/signEdit.vue';
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
            allSign().then(resp => {
                console.log('收到回复：' + JSON.stringify(resp.data))
                this.data = resp.data.communitySignups
            })
        },
        //规定列表每列名称和显示的属性
        buildColumn() {
            return [
                { prop: "id", label: "编号", width: 100 },
                { prop: "communityId", label: "社团id", width: 100 },
                { prop: "createTime", label: "创建时间", width: 200 },
                { prop: "studentId", label: "学生id", width: 100 },
            ];
        }
    },
    components: { ListView, SignEdit }
}
</script>
<style  scoped>
.lst {
    display: flex;
    justify-content: center;
    height: 800px;
    overflow-y: auto;
}
.up {
    display: flex;
    justify-content: center;
}

.down {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    width: 100;
}
.header{
    position: relative;
}
.up{
    position: absolute;
    right:400px;
    top: 10px;
}
</style>
