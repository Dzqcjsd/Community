<template>
    <div>
        <el-form :model="entity" label-width="120px">
            <el-form-item label="绑定">
                <el-input v-model="entity.binding" />
            </el-form-item>

            <el-form-item label="邮箱">
                <el-input v-model="entity.email" />
            </el-form-item>

            <el-form-item label="密码">
                <el-input v-model="entity.password" />
            </el-form-item>


            <el-form-item label="账号">
                <el-input v-model="entity.userName" />
            </el-form-item>

            <el-form-item label="状态">
                <el-input v-model="entity.state" />
            </el-form-item>

            <el-form-item label="电话">
                <el-input v-model="entity.mobile" />
            </el-form-item>

            <el-form-item label="token">
                <el-input v-model="entity.token" />
            </el-form-item>


            <el-form-item label="用户类型">
                <el-select v-model="entity.userType" placeholder="请选择" @change="changeDepart">
                    <el-option v-for="item in userTypeArr" :key="item" :label="item" :value="item" />
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
import { one, add, edit } from "@/http/userInfoApi/userInfoApi"
import { success, fail } from "@/utils/msg/msg";
export default {
    props: { id: Number },
    mounted() {
        console.log('mounted' + this.id)
        this.get()
    },
    data() {
        return {
            entity: {
                id: 0,
                createTime: '',
                binding: '',
                deleted:0,
                email:'',
                mobile:'',
                password: '',
                state: '',
                token: '',
                userType: '',
                updateTime: '',
                userName: 0
            },
            userTypeArr: ['学生','教师','教辅','管理员'],
        }
    },
    methods: {
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
                        this.entity = resp.data.userinfo
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
