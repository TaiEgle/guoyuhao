<template>
  <div class="tongxunlu">
<ul>
    <li><h3>联系人</h3></li>
    <li :key="index" v-for="(item,index) in phonebook" @click="more(item.id)">{{item.name}}</li>  
 
    </ul> 
  </div>
</template>

<script>

export default {
  name: 'tongxunlu',
  data () {
    return {
      phonebook:[]
    }
  },
  methods:{
    more(id){
     this.$router.push({
       name:'more',
       params:{
         id
       }
     })
    },
    getphone(){
      this.axios.get("http://localhost:5566/phonebook").then((res)=>{
        // console.log(res.data);
        this.phonebook=res.data
    
      })
    }
  },
  created(){
    this.getphone();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  border: 1px solid #000;
  border-bottom: none;
  margin: 0;
  padding: 0;
  font-size: 18px;
  line-height: 40px;
  width: 1000px;
  height: 100%;
  margin:0 auto;
  text-indent: 2em;
  /* padding: 0; */
  list-style: none;
}
ul li:first-child{
  background-color: #ccc;
}
ul li:nth-child(n+2){
  background-color:cornsilk;
  cursor: pointer;
  padding: 15px 0;
  border-bottom: 1px solid #ccc;
}
</style>
