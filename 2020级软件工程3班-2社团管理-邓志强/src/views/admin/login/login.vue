<template>
    <div class="loginbody">
        <div class="logindata">
            <div class="logintext">
                <h2 style="color: skyblue;">登录</h2>
            </div>

            <div class="formdata">
                <el-form ref="form" :model="entity" :rules="rules">
                    <el-form-item prop="username">
                        <el-input v-model="entity.userName" clearable placeholder="请输入账号"></el-input>
                    </el-form-item>
                    <el-form-item prop="password">
                        <el-input v-model="entity.password" clearable placeholder="请输入密码" show-password></el-input>
                    </el-form-item>
                </el-form>
            </div>

            <!-- <div class="big"> -->
            <!-- <div class="item">
                <span>账号</span>
                <el-input v-model="entity.userName"/>
            </div>

            <div class="item">
                <span>密码</span>
                <el-input v-model="entity.password" />
            </div> -->

            <div class="butt">
                <div class="btnDiv" v-show="isLogin == true">
                    <el-button type="primary" @click.native.prevent="doLogin">登录</el-button>
                    <el-button type="primary" @click="isLogin = false">去注册</el-button>
                </div>

                <div class="btnDiv" v-show="isLogin == false">
                    <el-button type="primary" @click.native.prevent="doEnroll">注册</el-button>
                    <el-button type="primary" @click="isLogin = true">去登录</el-button>
                </div>
            </div>
            <!-- </div> -->

        </div>
    </div>
</template>
<script>
import {
    register,
    login,
} from "@/http/userInfoApi/userInfoApi"
import { success, fail } from "@/utils/msg/msg";
export default {
    data() {
        return {
            entity: {
                password: '',
                userName: ''
            },
            isLogin: true,
            rules: {
                acc: [{ required: true, message: "请输入账号", trigger: "blur" }],
                pwd: [{ required: true, message: "请输入密码", trigger: "blur" }]
            },
        }
    },
    methods: {
        doLogin() {
            console.log('登录：' + JSON.stringify(this.entity))
            login(this.entity).then(rsep => {
                console.log('登录结果:' + JSON.stringify(rsep))
                if (rsep.msg != '成功') {
                    fail(rsep.msg)
                } else {
                    success('登录成功')
                    this.$router.push('/home')
                }
            })
        },
        doEnroll() {
            register(this.entity).then(rsep => {
                console.log('注册结果:' + JSON.stringify(rsep))
                if (rsep.msg != '成功') {
                    fail(rsep.msg)
                } else {
                    success('注册成功')
                }
            })
        }
    },
}
</script>
<style scoped>
.item {
    display: flex;
    justify-content: space-between;
}

.big {
    width: 500px;
    padding: 10px 15px;
}

.ha {
    display: flex;
    justify-content: center;
}

.loginbody {
    width: 100%;
    height: 100%;
    min-width: 1000px;
    background-image: url("@/assets/login.jpg");
    /* background-image: url("../assets/dz.jpg"); */
    background-size: 100% 100%;
    background-position: center center;
    overflow: auto;
    background-repeat: no-repeat;
    position: fixed;
    line-height: 100%;
    padding-top: 150px;
}

.logintext {
    margin-bottom: 20px;
    line-height: 50px;
    text-align: center;
    font-size: 30px;
    font-weight: bolder;
    color: white;
    text-shadow: 2px 2px 4px #000000;
}

.logindata {
    width: 400px;
    height: 300px;
    transform: translate(-50%);
    margin-left: 50%;
}

.tool {
    display: flex;
    justify-content: space-between;
    color: #606266;
}

.butt {
    margin-top: 10px;
    text-align: center;
    margin-left: -55px;
    width: 500px;
}

.shou {
    cursor: pointer;
    color: #606266;
}
</style>
