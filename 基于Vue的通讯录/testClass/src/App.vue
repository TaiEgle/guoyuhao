<template>
  <div id="app" >
      <h1>待办事项<span class="tit" v-if="planB">({{count}})</span></h1>
    <ul>
      <li :key="index" v-for="(item,index) in list"><span :class="{comp:item.com}"> {{item.content}} </span><span><button @click="com1(index)">完成</button><button @click="com2(index)">删除</button></span></li>
      <li><h2 class="no" v-show="plan">您已经没有待办事项！！！</h2></li>
      <li>添加事项 <input type="text" @keyup.13="com3" v-model="msg"></li>
     
    </ul>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      list:[{
        id:1,
        content:'吃饭',
        com:false
      },
      {
        id:2,
        content:'睡觉',
        com:false
      },
      {
        id:3,
        content:'打游戏',
        com:false
      }
       ],
       plan:false,
       msg:'',
       planB:true
    }
  },
  methods:{
    com1(i){
      this.list[i].com=true;
      const c= this.list.every(todo => {
        return todo.com;
      });
        console.log(c);
         if(c){
         alert("最后一个待办时间已完成")
    }
    },
    com2(i){
      console.log(this.list[i]);
      this.list.splice(i,1)
      var len=this.list.length;
      if(len==0){
        this.plan=true;
        this.planB=false;
      }
    },
    com3(){
      console.log('回车');
      console.log(this.msg);
      console.log(this.list);
      const last={
        id:this.list.length+1,
        content:this.msg,
        com:false
      }
      this.list.push(last);
      this.msg='';
    }

  },
  computed:{
    count(){
      return this.list.length;
    }
  }
      
  }

</script>

<style scoped>
ul{
  
  list-style: none;
  background-color: #ccc;

}
h1,ul{
  width: 1200px;
  height: 100%;
  margin: 50px auto;
}
ul li{
  font-size: 22px;
  line-height: 45px;
  display: flex;
  justify-content: space-between;
}
button{
  margin-right: 15px;
  width: 100px;
  height: 35px;
}
input{
  height: 30px;
  width: 60%;
  outline: none;
  font-size: 20px;
  text-indent: 1em;
}
.comp{
  text-decoration: line-through;
  color: red;
}
.no{
  margin: 30px auto;
  color: red;
}
.tit{
  font-size: 20px;
 
  color: red;
}
</style>
