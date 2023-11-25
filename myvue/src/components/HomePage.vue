<template>
    <el-container class="homepage">
        <div class="title">
            <el-row class="title-row">
                <el-col style="height:100%;padding-top: 50px;" span="20" :offset="8">
                    <el-image id="title-icon" :src="imageUrl"></el-image>|
                    <el-image id="title-font" :src="imgWz"></el-image>
                </el-col>
            </el-row>
        </div>
        <div class="header">
            <el-row class="header-row">
                <el-col class="header-row-col"  :span="2" :offset="4" ><div style="position: absolute;padding-top:14px;"><router-link to="/body" class="router-">网站首页</router-link></div></el-col>
                <el-col class="header-row-col"  :span="2"><div style="position: absolute;padding-top:14px;"><router-link to="/about" class="router-">关于我们</router-link></div></el-col>
                <el-col class="header-row-col"  :span="2"><div style="position: absolute;padding-top:14px;"><router-link to="/map" class="router-">产品中心</router-link></div></el-col>
                <el-col class="header-row-col"  :span="2"><div style="position: absolute;padding-top:14px;"><router-link to="/body" class="router-">新闻动态</router-link></div></el-col>
                <el-col class="header-row-col"  :span="2"><div style="position: absolute;padding-top:14px;"><router-link to="/body" class="router-">科研成果</router-link></div></el-col>
                <el-col class="header-row-col" :span="4" id="search"><el-input style="width: 100%;"></el-input></el-col>
                <el-col class="header-row-col" :span="2">
                    <el-button style="margin-top:10px;background-color:#41853e;border-color:#41853e;" type="primary" icon="el-icon-search">
                        <el-icon><Search /></el-icon>搜索
                    </el-button>
                </el-col>
                <el-col v-if="store.state.token" class="header-row-col" id="text" :span="1" :offset="1" key="token">
                    <div style="position: absolute;padding-top:14px;">
                        <router-link to="/myself" class="router-">个人中心</router-link>
                    </div>
                </el-col>
                <el-col v-else class="header-row-col"  :span="1" :offset="1" key="!token">
                    <div style="position: absolute;padding-top:14px;">
                        <router-link to="/login" class="router-">登录</router-link>
                    </div>
                </el-col>                
                <el-col class="header-row-col" :span="1">
                    <el-avatar  style="margin-top:5px;" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
                </el-col> 
            </el-row>
        </div>
        <el-main style="padding:0px;height: calc(110vh);">
            <router-view redirect = '/login' class="main-body"></router-view>
        </el-main>
        <el-footer style="width: 100%;margin-bottom: 50px;">
            
        </el-footer>
    </el-container>
</template>

<script  setup>
import { colors } from 'debug/src/browser';
import imageurl from '../assets/icon.jpg';
import image from '../assets/wz.jpg';
import router from '../router/index'
import store from '../store/index'

let imageUrl = imageurl;
let imgWz = image;


</script>

<style scoped>



.homepage {
    width: 100%;
    height: calc(140vh);
}

.router- {

    color:aliceblue;
    height : 50px;
    text-decoration:none;

    position: relative;

}

#search {
    /* margin-top :10px; */
    padding-top:10px;
    bottom : 10px;
}

.title {
    width : 100%;
    height : 150px;
}

.title-row {
    height:100%;
}


#title-icon {
    padding-top:50px;
}

#title-font {
    padding-left: 20px;
    margin-bottom: 0px;
}
.header {
    background-color :#41853e;
    height : 50px;
}
.header-row {
    height : 100%;
}
.header-row-col {
    height : 100%;
    /* margin-top : 15px; */
    font-size : 15px;
    color :floralwhite;
    text-align : center;
}

#header-row-span {
    width:100%;
    height: 100%;
}

.main-body {
    width:100%;
    height: calc(100vh);
}
</style>