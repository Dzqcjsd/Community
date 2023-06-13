<template>
    <div>
        <el-form :model="entity" label-width="120px">
            <el-form-item label="教师姓名">
                <el-input v-model="entity.teacherName" />
            </el-form-item>

            <el-form-item label="教师编号">
                <el-input v-model="entity.teacherNo" />
            </el-form-item>

            <el-form-item label="用户编号">
                <el-input v-model="entity.userId" />
            </el-form-item>

            <el-form-item label="所属学校">
                <el-select v-model="entity.school" placeholder="请选择所属学校" @change="changeSchool">
                    <el-option v-for="item in schoolArr" :key="item.id" :label="item.schoolName" :value="item.schoolName" />
                </el-select>
            </el-form-item>

            <el-form-item label="所属学院">
                <el-select v-model="entity.depart" placeholder="请选择所属学院">
                    <el-option v-for="item in departArr" :key="item.id" :label="item.departName" :value="item.departName" />
                </el-select>
            </el-form-item>

            <el-form-item label="职称">
                <el-select v-model="entity.professional" placeholder="请选择" @change="changeDepart">
                    <el-option v-for="item in professionalArr" :key="item" :label="item" :value="item" />
                </el-select>
            </el-form-item>

            <el-form-item label="创建时间">
                <el-date-picker v-model="entity.createTime" type="datetime" placeholder="Select date and time" />
            </el-form-item>

            <el-form-item label="更新时间">
                <el-date-picker v-model="entity.updateTime" type="datetime" placeholder="Select date and time" />
            </el-form-item>
            
        </el-form>

        <div class="btnDiv">
            <el-button type="primary" @click="sure">确定</el-button>
            <el-button @click="doCancel">取消</el-button>
        </div>
    </div>
</template>
<script>
import { one, add, edit } from "@/http/teacherApi/teacherApi"
import { success, fail } from "@/utils/msg/msg";
import { al, allSchool,getBySchoolId } from "@/http/departmentApi/departmentApi";
export default {
    props: { id: Number },
    mounted() {
        console.log('mounted' + this.id)
        this.get()
        this.allSchool()
    },
    data() {
        return {
            entity: {
                id: 0,
                createTime: '',
                depart: '',
                professional: '',
                school: '',
                teacherName: '',
                teacherNo: '',
                updateTime: '',
                userId: 0
            },
            professionalArr: ['助教','讲师','副教授','教授'],
            departArr: [],
            schoolArr: [],
        }
    },
    methods: {
        getDepartBySchoolId(schoolId) {
            getBySchoolId({ schoolId: schoolId }).then(resp => {
                this.departArr = resp.msg != '没有数据' ? resp.data.departments : []
            })
        },
        changeSchool(a) {
            console.log('选中的学校:' + a)
            this.schoolArr.forEach(item => {
                if (item.schoolName == a) {
                    console.log('school:' + JSON.stringify(item))
                    this.getDepartBySchoolId(item.id)
                }
            })
        },
        allSchool() {
            allSchool().then(resp => {
                this.schoolArr = resp.data.schools
            })
        },
        sure() {
            this.id == 0 ? this.add() : this.edit()
        },
        add() {
            console.log('新建的:' + JSON.stringify(this.entity))
            add(this.entity).then(resp => {
                success('新建成功')
                this.doCancel()
            })
        },
        edit() {
            edit(this.entity).then(resp => {
                success('已保存')
                this.doCancel()
            })
        },
        doCancel() {
            this.$emit('doCancel')
        },
        get() {
            if (this.id != 0) {
                one({ id: this.id }).then(resp => {
                    console.log('id:' + this.id + '  编辑时one收到的:' + JSON.stringify(resp))
                    if (!!resp.data) {
                        this.entity = resp.data.teacher
                    }
                })
            }
        },
    },
}
</script>
<style  scoped>
.btnDiv {
    margin-top: 10px;
    display: flex;
    justify-content: center;
}
</style>
