<template>
    <div>
        <div class="up">
            <el-button type="success" @click="doAdd()">新建</el-button>

            <div class="item">
                <span>教师编号</span>
                <el-input v-model="queryEntity.teacherNo" />
                <el-button type="success" @click="byTeacherNo()">根据教师编号查询</el-button>
            </div>

            <div class="item">
                <span>学校</span>
                <el-select v-model="queryEntity.school" placeholder="请选择所属学校" @change="changeSchool">
                    <el-option v-for="item in schoolArr" :key="item.id" :label="item.schoolName" :value="item.schoolName" />
                </el-select>
                <el-button type="success" @click="bySchool()">根据学校查询</el-button>
            </div>

            <el-button type="success" @click="clear()">清空</el-button>
        </div>

        <div class="down">
            <div class="lst">
                <ListView :data="data" :column="column" title="教师列表">
                    <slot>
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

        <el-dialog v-model="visible" v-if="visible" width="33%" title="教师信息">
            <TeacherEdit :id="choiceId" @doCancel="doCancel"></TeacherEdit>
        </el-dialog>
    </div>
</template>
<script>
import ListView from '../../../components/list-view/list-view.vue';
import {
    del, al,
    allSchool,
    getTeachersBySchool,
    getTeacherByTeacherNo
} from "@/http/teacherApi/teacherApi"
import { success, fail } from "@/utils/msg/msg";
import TeacherEdit from '../../../components/teacherEdit/teacherEdit.vue';
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
            queryEntity: {
                school: '',
                teacherNo: ''
            }
        };
    },
    methods: {
        bySchool(){
            getTeachersBySchool(this.queryEntity).then(resp=>{
                console.log('bySchool:' + JSON.stringify(resp))
                this.data = resp.msg == '成功' ? resp.data.teachers : []
            })
        },
        byTeacherNo(){
            getTeacherByTeacherNo(this.queryEntity).then(resp=>{
                console.log('byTeacherNo:' + JSON.stringify(resp))
                if(resp.msg == '成功'){
                    this.data = []
                    this.data.push(resp.data.teacher)
                }else{
                    this.data = []
                }
            })
        },
        query() {
            console.log('name' + this.studentName)
            getStudentByStudentName({ studentName: this.studentName }).then(resp => {
                this.data = resp.msg == '没有数据' ? [] : resp.data.students
                console.log('按照姓名查询:' + JSON.stringify(resp))
            })
        },
        clear() {
            this.queryEntity = {
                school: '',
                teacherNo: ''
            }
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
            al().then(resp => {
                // console.log('收到回复：' + JSON.stringify(resp.data))
                this.data = resp.data.teachers
                this.data.forEach(item=>{
                    item.createTime = item.createTime.split('T')[0]
                    item.updateTime = item.updateTime.split('T')[0]
                })
            })

            allSchool().then(resp => {
                this.schoolArr = resp.data.schools
            })
        },
        //规定列表每列名称和显示的属性
        buildColumn() {
            return [
                // { prop: "id", label: "编号", width: 100 },
                { prop: "createTime", label: "创建时间", width: 200 },
                { prop: "updateTime", label: "更新时间", width: 200 },
                { prop: "school", label: "学校", width: 200 },
                { prop: "depart", label: "学院", width: 100 },
                { prop: "professional", label: "职称", width: 100 },
                { prop: "teacherName", label: "教师姓名", width: 100 },
                { prop: "userId", label: "用户编号", width: 100 },
                { prop: "teacherNo", label: "教师编号", width: 100 },
            ];
        }
    },
    components: { ListView, TeacherEdit }
}
</script>
<style  scoped>
.lst {
    display: flex;
    justify-content: center;
    height: 800px;
    overflow-y: auto;
    overflow-x: hidden;
}
.item{
    display: flex;
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
</style>
