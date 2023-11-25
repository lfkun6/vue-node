<template>
    <div class="common-layout">
    <el-container>
      <el-aside width="200px" >
        <div class="aside-body">
            <el-button class="map-aside">
                <el-icon   :size="36" style=" color: #4d95f5;"><MapLocation /></el-icon>在线地图
            </el-button>
        </div>
        <div class="aside-body">
            <el-button class="map-aside">
                <el-icon :size="36" style=" color: #4d95f5;"><PieChart /></el-icon>专题图层
            </el-button>
        </div>
        <div class="aside-body">
            <el-button class="map-aside">
                <el-icon :size="36" style=" color: #4d95f5;"><Histogram /></el-icon>开发资源
            </el-button>
        </div>
        <div class="aside-body">
            <el-button class="map-aside">
                <el-icon :size="36" style=" color: #4d95f5;"><Lightning /></el-icon>在线更新
            </el-button>
        </div>
        <div class="aside-body">
            <el-button class="map-aside">
                <el-icon :size="36" style=" color: #4d95f5;"><ScaleToOriginal /></el-icon>标准地图
            </el-button>
        </div>
        <div class="aside-body">
            <el-button class="map-aside" >
                <el-icon :size="36" style="color: #4d95f5; "><Document /></el-icon>成果目录
            </el-button>
        </div>
        
      </el-aside>
      <el-main style="padding : 0px;">
        <div id="map" class="home-map"></div>
      </el-main>
    </el-container>
  </div>
</template>


<script setup>
import useMap from '../hooks/useMap'
import { ref , onMounted } from 'vue'

let gaoDeMap = ref(null)

onMounted(() =>{
    gaoDeMap = useMap();
})

</script>


<style>

.home-map {
    width : 100%;
    height: 720px;
}

.aside-body {
    width: 100%;
    height: 120px;
    
}

.map-aside {
    width : 100%;
    height: 120px;
    font-size : 24px;
    background-color: aliceblue;
}
</style>