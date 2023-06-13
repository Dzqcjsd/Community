<template>
    <div>
        <el-form :model="entity" label-width="120px">
            <el-form-item label="社团地址">
                <el-input v-model="entity.address" />
            </el-form-item>

            <el-form-item label="社团会长">
                <el-input v-model="entity.charger" />
            </el-form-item>

            <el-form-item label="社团描述">
                <el-input v-model="entity.description" type="textarea" :rows="3" />
            </el-form-item>

            <el-form-item label="社团地址">
                <el-input v-model="entity.address" />
            </el-form-item>

            <el-form-item label="邮箱">
                <el-input v-model="entity.email" />
            </el-form-item>

            <el-form-item label="logo">
                <el-input v-model="entity.logo" />
            </el-form-item>

            <el-form-item label="电话">
                <el-input v-model="entity.mobile" />
            </el-form-item>

            <el-form-item label="名称">
                <el-input v-model="entity.name" />
            </el-form-item>



            <el-form-item label="导师">
                <el-input v-model="entity.teachers" />
            </el-form-item>
            <el-form-item label="版本">
                <el-input v-model="entity.version" />
            </el-form-item>
            <el-form-item label="微信">
                <el-input v-model="entity.weixin" />
            </el-form-item>

            <el-form-item label="创办时间">
                <el-date-picker v-model="entity.createTime" type="datetime" placeholder="Select date and time" />
            </el-form-item>

            <el-form-item label="更新时间">
                <el-date-picker v-model="entity.updateTime" type="datetime" placeholder="Select date and time" />
            </el-form-item>

            <el-form-item label="学校">
                <el-select v-model="entity.schoolId" placeholder="请选择" @change="changeSchool">
                    <el-option v-for="item in schoolArr" :key="item.id" :label="item.schoolName" :value="item.id" />
                </el-select>
            </el-form-item>

            <el-form-item label="学院">
                <el-select v-model="entity.depart" placeholder="请选择">
                    <el-option v-for="item in departArr" :key="item.id" :label="item.departName" :value="item.id" />
                </el-select>
            </el-form-item>

            <el-form-item label="状态">
                <el-select v-model="entity.status" placeholder="请选择">
                    <el-option v-for="item in statusArr" :key="item.value" :label="item.label" :value="item.label" />
                </el-select>
            </el-form-item>

            <el-form-item label="类型">
                <el-select v-model="entity.type" placeholder="请选择">
                    <el-option v-for="item in typeArr" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
            </el-form-item>
        </el-form>

        <div class="btnDiv">
            <el-button type="primary" @click="sure">确定</el-button>
            <el-button @click="doCancel">取消</el-button>
        </div>
    </div>
</template>
<script>
import { one, add, edit, getDepartBySchoolId, allSchool } from "@/http/communityApi/communityApi"
import { success, fail } from "@/utils/msg/msg";
import { al } from "@/http/school/schoolApi";
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
                address: '',
                charger: '',
                createTime: '',
                deleted: 0,
                depart: '',

                description: '',
                email: '',
                logo: '',
                mobile: 0,
                name: '',

                schoolId: '',
                status: 0,
                logo: '',
                mobile: 0,
                name: '',

                teachers: '',
                通用社团: 0,
                updateTime: '',
                version: 0,
                weixin: ''
            },
            statusArr: [
                { value: 0, label: '审核' },
                { value: 1, label: '激活' },
                { value: 2, label: '终止' }
            ],
            typeArr: [
                { value: 0, label: '通用社团' },
                { value: 1, label: '专业社团' },
            ],
            schoolArr: [],
            departArr: []
        }
    },
    methods: {
        changeSchool(schoolId) {
            console.log('到这了' + schoolId)
            getDepartBySchoolId({ schoolId: schoolId }).then(resp => {
                console.log('收到的：' + JSON.stringify(resp))
                this.departArr = resp.msg != '没有数据' ? resp.data.departments : []
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
                    console.log('编辑学院收到的:' + JSON.stringify(resp))
                    this.entity = resp.data.community
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
