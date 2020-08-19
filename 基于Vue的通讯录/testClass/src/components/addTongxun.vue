<template>
  <div class="addtongxun">
      <div class="add">
        <div class="iconfont up">
          &#xe63a;
          <input type="file" id="img-up">
        </div>
        <ul class="com">
        <li>姓名：<input type="text" placeholder="姓名" v-model="p.name"></li>
        <li>手机<input type="text" placeholder="手机" v-model="p.phone"></li>
        <li>公司<input type="text" placeholder="公司" v-model="p.company"></li>  
        <li>地址<input type="text" placeholder="地址" v-model="p.address"></li>  
        </ul>
        <div class="sub">
          <button @click="tijiao">保存</button>
          <button @click="quxiao">取消</button>
        </div>
      </div>
  </div>
</template>

<script>

export default {
  name: 'addtongxun',
  data () {
    return {
      p:{}
    }
  },
  methods:{
    
    tijiao(){
      this.axios.post('http://localhost:5566/phonebook',this.p).then((res) => {
        if(res.data.id){
          alert('添加成功');
          this.$router.push({
            name:'tongxunlu'
          })

        }
        console.log(res);
      }).catch((err) => {
        console.log(err);
      });
      

    },
    quxiao(){
      var c=confirm('你确定不保存退出吗？');
      console.log(c);
      if(c==true){
        this.$router.push({
          path:'/'

          } )
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.add{
  padding-top:20px ;
  background-color: #f8f8f8;
  width: 1000px;
  height: 100%;
  margin: 0 auto;
   padding-bottom: 100px;
  /* background-color: #000; */
}
ul{
  list-style: none;
  margin: 0;
  padding: 0;
}
.up{
  width: 150px;
  height: 150px;
  text-align: center;
  line-height: 150px;
  border-radius: 50%;
  margin: 20px auto;
  border: 1px solid #000;
  font-size: 90px;

  position: relative;
}
#img-up{
  cursor: pointer;
  width: 100%;
  height: 100%;
  left: 0;
  outline: none;
  opacity: 0;
  position: absolute;
}
.com{
  width: 800px;
  height: 100%;
  margin: 0 auto;
  /* background-color: #000; */
}
.com>li{
  font-size: 25px;
  display: flex;
  justify-content: space-around;
}
.com>li>input{
  font-size: 22px;
  border: none;
  outline: none;
  margin-bottom: 70px;
  border-left: 1px solid #ccc;
  background-color: #f8f8f8;
  text-indent: 1em;
  width: 600px;
  height: 40px;
}
.sub{
  display: flex;
  justify-content: space-around;
}
.sub>button{
  width: 200px;
  height: 50px;
  outline: none;
  font-size: 22px;
  cursor: pointer;
 
  border-radius: 20px;
}
</style>
