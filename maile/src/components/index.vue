<template>
    <div class="index">
    
<el-menu
  :default-active="activeIndex2"
  class="el-menu-demo"
  mode="horizontal"
  @select="handleSelect"
  background-color="#ccc"
  text-color="#fff"
  active-text-color="#ffd04b">
  <el-menu-item index="1">处理中心</el-menu-item>


  <el-menu-item index="2">成秦</el-menu-item>
  
</el-menu>

    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>