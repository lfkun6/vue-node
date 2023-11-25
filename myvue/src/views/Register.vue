<template>
    <div class="register">
        <div class = 'login-body'>
        <div class = 'login-panel'>
            <div class = 'login-title'>用户注册</div>
            <el-from :model = 'fromData'>
            <el-form-item style="margin-left: 20px;" label = '账号'>
                <el-input style="margin-right: 56px;" v-model="fromData.name" placeholder = '请输入账号'></el-input>
            </el-form-item>
            <el-form-item style="margin-left: 20px;" label = '密码'>
                <el-input type="password" show-password style="margin-right: 56px;" v-model="fromData.password" placeholder = '请输入密码' ></el-input>
            </el-form-item>
            <!-- <el-form-item label = ''>
                <el-input v-model="fromData.password" placeholder = '请再次输入密码' ></el-input>
            </el-form-item> -->
            </el-from>
            <el-button @click ='register' type = 'primary' style = "width : 60%;margin-left: 20%;margin-top: 10px;">注册</el-button>
        </div>
        </div>
    </div>
</template>
    
<script setup>
import axios from 'axios'
import {reactive, ref} from 'vue'
import router from '../router/index'
import { encrypt, decrypt } from '../assets/js/aes'
    
var fromData = reactive({
    
});
let password;
function register(){
    fromData.password = encrypt(fromData.password);
    axios.post('http://127.0.0.1:4000/register',fromData).then(res =>{
        console.log(res.data.status)
        if(res.data.status == 200){
            alert('注册成功');
            router.push('/login')
        }
        else {
            alert('注册失败')
        }
    }).catch(err =>{
        console.log('未知错误' + err);
    })
}
    
</script>
    
<style scoped>
.login-body {
    width : 100%;
    height: calc(90vh);
    /* calc(100vh); */
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
    
.register {
    width: 100%;
    height: calc(95vh);
}
</style>
    