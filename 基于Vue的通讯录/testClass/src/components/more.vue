<template>
  <div class="more">
   
        <div class="iconfont up">
          人
          <input type="file" id="img-up">
        </div>
        <ul class="com">
        <li>姓名：<p>{{phonebook.name}}</p></li>
        <li>手机:<p>{{phonebook.phone}}</p></li>
        <li>公司:<p>{{phonebook.company}}</p></li>
        <li>地址:<p>{{phonebook.address}}</p></li>
        <!-- <li>地址:<p>{{phonebook.id}}</p></li> -->

     
        </ul>
        <div class="sub">
          <button @click="edit(phonebook.id)">编辑</button>
          <button @click="del(phonebook.id)">删除</button>
        </div>

  </div>
</template>

<script>

export default {
  name: "more",
  data() {
    return {
      phonebook:{},
      txt:''
    };
  },
  created() {
     const id=this.$route.params.id;
    this.getphone(id);
 
    
  
  },
  
  methods:{
    getphone(id){
      this.axios.get(`http://localhost:5566/phonebook/${id}`)
      .then((res)=>{
        this.phonebook=res.data;
        console.log(this.phonebook);
    
      })
    },
    edit(id){
     
            this.$router.push({
                name:'editTonxun',
                params:{
                  id
                }
              })
      
    },
    del(id){
      var c=confirm('你想好了删除吗？');
      console.log(c);
      if(c==true){

        this.axios.delete(`http://localhost:5566/phonebook/${id}`)
        .then((res)=>{
          console.log(res);
          if(res.statusText=='OK'){
            alert('删除成功,拜拜了您');
            this.$router.push(
              {
                name:'tongxunlu'
              }
            )
          }
          
        })


      }
    }
  }, 
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.more {
  width: 1000px;
  height: 100%;
  margin: 0 auto;
  padding-top:20px ;
  background-color: #f8f8f8;
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
  line-height: 70px;
  justify-content: center;
}
.com>li>p{
  font-size: 22px;
  border: none;
  outline: none;
  margin-left: 20px;
  margin-bottom: 50px; 
  line-height: 35px;
  border-left: 1px solid #ccc;
  background-color: #f8f8f8;
  text-indent: 1em;
  width: 200px;
  height: 40px;
}
.sub{
  display: flex;
  flex-direction: column;
  align-items: center;

}
.sub>button{
  width: 300px;
  height: 50px;
  outline: none;
  font-size: 22px;
  cursor: pointer;
 margin-top: 50px;
  border-radius: 20px;
}
</style>
