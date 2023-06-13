<template>
    <div class="ha">

        <div class="big">
            <div class="item">
                <span>邮箱</span>
                <el-input v-model="entity.email"/>
            </div>

            <div class="item">
                <span>密码</span>
                <el-input v-model="entity.password" />
            </div>

            <div class="item" v-show="isLogin == false">
                <span>用户账号</span>
                <el-input v-model="entity.userName" />
            </div>

            <div class="btnDiv" v-show="isLogin == true">
                <el-button type="primary"  @click="doLogin">登录</el-button>
                <el-button type="primary"  @click="isLogin = false">去注册</el-button>
            </div>

            <div class="btnDiv" v-show="isLogin == false">
                <el-button type="primary"  @click="doEnroll">注册</el-button>
                <el-button type="primary"  @click="isLogin = true">去登录</el-button>
            </div>
        </div>

    </div>
</template>
<script>
import {
    eLogin,
    eRegister,
    tLogin
} from "@/http/mobileApi/mobileApi"
import { success, fail } from "@/utils/msg/msg";
export default {
    data() {
        return {
            entity:{
                email:'',
                password:'',
                userName:''
            },
            isLogin:true
        }
    },
    methods: {
        doLogin(){
            console.log('登录：' + JSON.stringify(this.entity))
            eLogin(this.entity).then(rsep=>{
                console.log('登录结果:' + JSON.stringify(rsep))
                if(rsep.msg != '成功'){
                    fail(rsep.msg)
                }else{
                    success('登录成功')
                }
            })
        },
        doEnroll(){
            eRegister(this.entity).then(rsep=>{
                console.log('注册结果:' + JSON.stringify(rsep))
                if(rsep.msg != '成功'){
                    fail(rsep.msg)
                }else{
                    success('登录成功')
                }
            })
        }
    },
}
</script>
<style scoped>

.item{
    display: flex;
    justify-content: space-between;
}

.big{
    width: 500px;
    padding: 10px 15px;
}
.ha{
    display: flex;
    justify-content: center;
}
</style>
