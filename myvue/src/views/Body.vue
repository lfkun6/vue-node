<template>
    <div class="hoem-body">
      <div id="home">
        <div style="font-size: 20pt;color: azure;padding-top:200px;font-family: '黑体';">{{ title }}</div>
        <div style="font-size: 50pt;color: azure;padding-top:20px;"> {{ description }}</div>
      </div>
      <div class="home-main">
         
      </div>
    </div>
    
  </template>
  
  <script>
  export default {
    data() {
      return {
        title: '我们为您提供高品质有机产品',
        description: '倡导绿色农业 · ​创造健康生活'
      };
    }
  };
  </script>
  
<style scoped>

.hoem-body {
  width: 100%;
  height:calc(95vh);
}

#home {
  font-family: Arial, sans-serif;
  text-align: center;
  color: #333;
  height: 685px;
  background-image: url('../assets/banner.jpg');
}
  
</style>
  