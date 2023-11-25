<template>
    <div class="myself">
      <el-card style="width: 800px; margin-left: 10px; margin-top: 10px;" shadow="hover">
        <el-form label-width="80px" size="small">
   
          <el-upload 
              class="avatar-uploader"
              :class="{disabled : pud }"
              :limit = "limitCount"
              :action="'http://localhost:9090/file/upload'"
              :show-file-list="true"
              list-type="picture-card"
              :on-change="onChange"
              :auto-upload="false"
              :on-success="handleAvatarSuccess">
            <img v-if="form.avatarUrl" :src="form.avatarUrl" class="avatar">
            <i v-else class="el-icon-plus"></i>
          </el-upload>
   
          <el-form-item label="用户名" style="margin-left: 200px; margin-top: -150px">
            <el-input v-model="form.username" disabled autocomplete="off" style="width: 400px"></el-input>
          </el-form-item>
          <el-form-item label="昵称" style="margin-left: 200px">
            <el-input v-model="form.nickname" autocomplete="off" style="width: 400px"></el-input>
          </el-form-item>
          <el-form-item label="性别" style="margin-left: 200px">
            <el-select v-model="form.sex" placeholder="请选择您的性别" style="width: 400px">
              <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="邮箱" style="margin-left: 200px">
            <el-input v-model="form.email" autocomplete="off" style="width: 400px"></el-input>
          </el-form-item>
          <el-form-item label="电话" style="margin-left: 200px">
            <el-input v-model="form.phone" autocomplete="off" style="width: 400px"></el-input>
          </el-form-item>
          <el-form-item label="地址" style="margin-left: 200px" >
            <el-input type="textarea" v-model="form.address" autocomplete="off" style="width: 400px"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="save">保 存</el-button>
            <el-button type="primary" @click="sign"><i class="el-icon-location" />定位</el-button>
            <el-button style="margin-left: 400px;" type="primary" @click="quit">退出登录</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </div>
</template>
   
<script>
import { routerKey } from 'vue-router';
import store from '../store/index'
import router from '../router/index'


export default {
  name: "Person",
  data() {
    return {
      form: {},
      pud : false,
      limitCount : 1,
      user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : {},
      options: [{
        value: '男',
        label: '男'
      }, {
        value: '女',
        label: '女'
      }],
      value: ''
    }
  },
  mounted() {

   
    // 获取地理位置
    var geolocation = new BMapGL.Geolocation();
    geolocation.getCurrentPosition(function(r){
      if(this.getStatus() == BMAP_STATUS_SUCCESS){
        const province = r.address.province
        const city = r.address.city
        localStorage.setItem("location", province + city)
      }
    });
  },
   
  created() {
    this.load()
  },
  methods: {

    quit(){
      localStorage.setItem('token',null);
      store.commit('remove');
      router.push('/login')
    },
    onChange(file,filelist) {
      this.pud = filelist.length >= this.limitCount;
    },
    load() {
      const username = this.user.username
      if (!username) {
        this.$message.error("当前无法获取用户信息!请登录!")
        return
      }
      this.request.get("/user/username/" + username).then(res => {
        // console.log(res)
        this.form = res.data
      })
    },
    sign() {
      const location = localStorage.getItem("location")
      const username = this.user.username
   
      this.request.post("/sign", { user: username, location: location }).then(res => {
        if (res.code === '200') {
          this.$message.success("打卡成功")
        } else {
          this.$message.error(res.msg)
        }
      })
    },
    save() {
      this.request.post("/user", this.form).then(res => {
        if (res.data) {
          this.$message.success("保存成功")
          this.load()
   
          this.$emit('refreshUser')
        } else {
          this.$message.error("保存失败")
        }
      })
    },
    // 头像上传
    handleAvatarSuccess(res) {
      // res就是头像文件路径
      this.form.avatarUrl = res
      pud = true;
    },
  }
}
</script>
   
<style>

.myself {
  width: 48%;
  padding-left: 22%;
  padding-top : 55px;
}


.disabled .el-upload--picture-card {
  display: none;
}


  .avatar-uploader {
    text-align: left;
    padding-top: 50px;
    padding-left: 66px;
  }
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 138px;
    height: 138px;
    line-height: 138px;
    text-align: center;
  }
  .avatar {
    width: 160px;
    height: 160px;
    display: block;
  }
  </style>