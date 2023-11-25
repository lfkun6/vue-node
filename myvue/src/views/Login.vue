<template>
    <div class="login">
        <div class = 'login-body'>
        <div class = 'login-panel'>
            <div class = 'login-title'>用户登录</div>
            <el-from :model = 'fromData' >
            <el-form-item class="loginForm" label = '账号'>
                <el-input style="margin-right: 56px;" v-model="fromData.account" placeholder = '请输入账号'></el-input>
            </el-form-item>
            <el-form-item class="loginForm" label = '密码'>
                <el-input type="password" show-password style="margin-right: 56px;" v-model="fromData.password" placeholder = '请输入密码' ></el-input>
            </el-form-item>
            <div class="tiparea">
              <p style="margin-right: 36px;">
                还没有账号？现在
                <router-link to="/register">注册</router-link>
              </p>
            </div>
            </el-from>
            <el-button @click ='login' type = 'primary' style = "width : 60%;margin-left: 20%;">登录</el-button>
        </div>
    </div>
    </div>
    </template>
    
<script setup>
import axios from 'axios'
import {reactive, ref} from 'vue';
import router from '../router/index'
import { encrypt , decrypt } from '../assets/js/aes'
import store from '../store/index'
    
function login(){
    fromData.password = encrypt(fromData.password);
    axios.get('http://127.0.0.1:4000/login',{
        params :{
            name : fromData.account,
            password : fromData.password
        }
    }).then(res =>{
        if(res.data.status == 200){
            //let token = res.data.data.body.token;
            let token = res.data;
            console.log(token);
            localStorage.setItem('token',token);
            store.commit('increment');
            router.push('/')
            alert('登录成功');
        }
        else {
            alert('用户名或密码错误')
        }
    }).catch(err =>{
        console.log('登录失败' + err)
    })
}
    
const fromData = reactive({});
</script>
    
<style >
    
.login {
    width: 100%;
    height: calc(100vh);
}
    
.login-body {
    width : 100%;
    height: calc(90vh);
    background-image: url('../assets/login.jpg');
    background-size : cover;
    background-position: center;
        
}
.login-panel {
    
    border-radius : 10px;
    float : right;
    margin-top : 100px;
    width: 380px;
    height: calc(30vh);
    margin-right: 100px;
    background : #fff;
 }
.login-title {
    font-size: 18px;
    text-align: center;
    margin-top: 15px;
    margin-bottom: 15px;
}
.tiparea {
    text-align: right;
    font-size: 12px;
    color: #333;
}
.tiparea p a {
    color: #409eff;
}
    
.loginForm {
    margin-left : 20px;
}
    
</style>