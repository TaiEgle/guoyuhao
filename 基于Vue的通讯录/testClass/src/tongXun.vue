<template>
  <div class="tonxun">

    <div class="head">
 <h2 @click="index">通讯录</h2>
 <span class="iconfont icon1" @click="add">&#xe61f;</span>  
    </div>
    
     <router-view />
  </div>
</template>

<script>

export default {
  name: 'tongxun',
  data () {
    return {

    }
  },

  methods:{
    index(){
      this.$router.push({
        name:'tongxunlu'
      })
    },
    add(){
      this.$router.push({
        name:'addtongxun'
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="../static/index.css">

</style>

<style scoped>

.head{
  width: 900px;
  height: 100%;
  line-height: 40px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.head>h2{
  cursor: pointer;
}
.icon1{
  font-size: 45px;
  cursor: pointer;
}
router-link{
  text-decoration: none;
  color: aqua;
}
.router-link-active{
  text-decoration: none;
}
</style>
