<template>
    <div class="big">
        <div class="up">

            <!-- <el-menu :default-active="activeIndex" class="el-menu-vertical-demo" mode="vertical" :router="true"> -->
                <!-- <h5 class="mb-2">社团管理平台</h5>
                <el-sub-menu index="">
                    <el-menu-item-group title="">
                        <el-menu-item index="/home/schoolManage">校园管理</el-menu-item>
                        <el-menu-item index="/home/studentManage">学生管理</el-menu-item>
                        <el-menu-item index="/home/teacherManage">教师管理</el-menu-item>
                        <el-menu-item index="/home/communityManage">社团管理</el-menu-item>
                        <el-menu-item index="/home/signManage">报名管理</el-menu-item>
                        <el-menu-item index="/home/userInfo">用户信息管理</el-menu-item>
                    </el-menu-item-group>
                </el-sub-menu> -->
               
                  
                <el-menu :default-active="activeIndex" class="el-menu-vertical-demo" mode="vertical" :router="true">
                           <el-col :span="12">
                            <h5 class="mb-2">社团管理平台</h5>
                        <el-sub-menu index="1">
                            <template #title>
                                <el-icon>
                                    <location />
                                </el-icon>
                                <span>老师及系统管理员</span>
                            </template>
                            <el-menu-item-group title="系统管理员">
                                <el-menu-item index="/home/schoolManage">学校管理</el-menu-item>
                                <el-menu-item index="/home/teacherManage">教师管理</el-menu-item>
                                <el-menu-item index="/home/userInfo">用户信息管理</el-menu-item>
                            </el-menu-item-group>
                            <el-menu-item-group title="老师">
                                <el-menu-item index="/home/studentManage">学生管理</el-menu-item>
                                <el-menu-item index="/home/communityManage">社团管理</el-menu-item>
                            </el-menu-item-group>
                        </el-sub-menu>
                        <el-sub-menu index="2">
                            <template #title>
                                <el-icon>
                                    <icon-menu />
                                </el-icon>
                                <span>学生</span>
                            </template>
                            <el-menu-item-group title="学生">
                                <el-menu-item index="/home/signManage">报名管理</el-menu-item>
                                <el-menu-item index="/home/communityShow">社团信息</el-menu-item>
                            </el-menu-item-group>
                        </el-sub-menu>
                </el-col>
            </el-menu>
                <!-- <el-menu-item index="/home/schoolManage">校园管理</el-menu-item>
                <el-menu-item index="/home/studentManage">学生管理</el-menu-item>
                <el-menu-item index="/home/teacherManage">教师管理</el-menu-item>
                <el-menu-item index="/home/communityManage">社团管理</el-menu-item>
                <el-menu-item index="/home/signManage">报名管理</el-menu-item>
                <el-menu-item index="/home/mobile">mobile登录</el-menu-item>
                <el-menu-item index="/home/userInfo">用户信息管理</el-menu-item> -->
            <!-- </el-menu> -->
        </div>

        <div class="down">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            activeIndex: '/home/schoolManage'
        }
    },
    methods: {
    },
}
</script>
<style  scoped>
.up {
    width: 10%;
    height: 100%;
    border-right: 1px solid gainsboro;
    position: absolute;
}

.down {
    width: 88%;
    height: 100%;
    overflow-y: auto;
    position: absolute;
    left: 11%;
}

.big {
    width: 100%;
    height: 100%;
    padding: 0px;
    display: flex;
}
</style>
