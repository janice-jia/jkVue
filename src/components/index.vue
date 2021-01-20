<template>
<div class="container">
    <el-row class="avatar">
        <el-col :span="6">
            <el-avatar :size="size" :src="circleUrl"></el-avatar>
        </el-col>
        <el-col :span="18">
             <div class="text item">
                XXXXX工
            </div>
            <div class="text item">
                【公寓科】
            </div>
        </el-col>
    </el-row>

    <div class="nav">
        <el-breadcrumb separator="/" class="">
            <el-breadcrumb-item :to="{ path: '/' }">宿管管理</el-breadcrumb-item>
        </el-breadcrumb>
    </div>

    <el-row type="flex" class="home-nav">
        <el-col :span="6">
            <router-link class="houseLink" :to="{name: 'publish'}">
                <i class="el-icon-time"></i>
                <div class="grid-content bg-purple">实时查寝</div>
            </router-link>
        </el-col>
        <el-col :span="6">
            <i class="el-icon-circle-plus"></i>
            <div class="grid-content bg-purple">实习请加上报</div>
        </el-col>
        <el-col :span="6">
            <i class="el-icon-document-copy"></i>
            <div class="grid-content bg-purple">宿管综合报表</div>
        </el-col>
        <el-col :span="6">
            <i class="el-icon-tickets"></i>
            <div class="grid-content bg-purple">学院宿管报表</div>
        </el-col>
    </el-row>

    <div class="nav">
        <el-breadcrumb separator="/" class="">
            <el-breadcrumb-item :to="{ path: '/' }">更多</el-breadcrumb-item>
        </el-breadcrumb>
    </div>

    <el-row type="flex" class="home-nav">
        <el-col :span="6">
            <i class="el-icon-phone-outline"></i>
            <div class="grid-content bg-purple">联系技术人员</div>
        </el-col>
        <el-col :span="6">
            <i class="el-icon-user-solid"></i>
            <div class="grid-content bg-purple">登录/退出</div>
        </el-col>
    </el-row>
    <bottomCom></bottomCom>
</div>

</template>

<script type="text/ecmascript-6">
import bottomCom from './bottomCom.vue';

import {Toast, Cell} from 'mint-ui';
export default {
    name: 'index',
    data () {
        return {
            circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
        }
    },
    beforeCreated(){
        // //获取城市列表
        // this.getCity();
    },
    created () {
    },
    mounted(){
       
    },
    components: {
        bottomCom
    },
    methods: {
        
    }
}
</script>
