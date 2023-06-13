<template>
    <div>
        <div class="up">
            <el-button type="success" @click="doAdd()">新建</el-button>

            <div class="item">
                <span>学校</span>
                <el-select v-model="queryEntity.schoolId" placeholder="请选择所属学校">
                    <el-option v-for="item in schoolArr" :key="item.id" :label="item.schoolName" :value="item.id" />
                </el-select>
            </div>

            <div class="item">
                <span>用户类型</span>
                <el-select v-model="queryEntity.userType" placeholder="请选择用户类型">
                    <el-option v-for="item in userTypeArr" :key="item" :label="item" :value="item" />
                </el-select>
            </div>

            <el-button type="primary" @click="query()">查询</el-button>
            <el-button type="success" @click="clear()">清空</el-button>
        </div>

        <div class="down">
            <div class="lst">
                <ListView :data="data" :column="column" title="用户信息列表">
                    <slot>
                        <el-table-column label="绑定" width="100">
                            <template #default="scope">
                                <span>{{ scope.row.binding == 0 ? '未绑定' : '已绑定' }}</span>
                            </template>
                        </el-table-column>

                        <el-table-column label="状态" width="100">
                            <template #default="scope">
                                <span>{{ scope.row.state == 0 ? '未激活' : '已激活' }}</span>
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

        <el-dialog v-model="visible" v-if="visible" width="33%" title="用户信息">
            <UserInfoEdit :id="choiceId" @doCancel="doCancel"></UserInfoEdit>
        </el-dialog>
    </div>
</template>
<script>
import ListView from '../../../components/list-view/list-view.vue';
import {
    allUserInfo,
    del,
    allSchool,
    getAssitentFoSelectByUserTypeBySchoolId
} from "@/http/userInfoApi/userInfoApi"
import { success, fail } from "@/utils/msg/msg";
import UserInfoEdit from '../../../components/userInfoEdit/userInfoEdit.vue';
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
                schoolId: '',
                userType: ''
            },
            userTypeArr: ['学生','教师','教辅','管理员'],
        };
    },
    methods: {
        query() {
            console.log('name' + this.studentName)
            getAssitentFoSelectByUserTypeBySchoolId(this.queryEntity).then(resp => {
                this.data = !!resp.data ? resp.data.userinfos : []
                console.log('query:' + JSON.stringify(resp))
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
            allUserInfo().then(resp => {
                // console.log('收到回复：' + JSON.stringify(resp.data))
                this.data = resp.data.userinfos

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
                // { prop: "binding", label: "绑定", width: 200 },
                { prop: "email", label: "邮箱", width: 100 },
                { prop: "mobile", label: "电话", width: 100 },
                // { prop: "password", label: "密码", width: 100 },
                // { prop: "state", label: "状态", width: 100 },
                { prop: "userName", label: "账号", width: 100 },
                { prop: "userType", label: "用户类型", width: 100 },
            ];
        }
    },
    components: { ListView, UserInfoEdit }
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
