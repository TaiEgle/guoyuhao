<template>
    <div class="index">
<!-- 通栏标题 -->
<el-menu
  class="el-menu-demo"
  mode="horizontal"
  background-color="#333"
>
  <!-- <el-menu-item index="1">处理中心</el-menu-item> -->
    <span class="top-left">嗨~欢迎来到小郭商城</span>
    <ul class="top-right">
        <li v-show="planB" style="cursor: text; color:red">您好,{{name}}</li>
        <li @click="Login" v-show="planA">亲~请登录</li>
        <li v-show="planA">免费注册</li>
        <li>个人中心</li>
        <li>我的购物车</li>
        <li>管理员通道</li>
        <li>联系客服</li>
        <li>网站导航</li>
    </ul> 
</el-menu>
<!-- 第二栏搜索栏 -->
<div class="head">
    <div class="logo">
    <img src="../../img/f778738c-e4f8-4870-b634-56703b4acafe-1601981214369.gif" alt="logo">
    </div>
    <div class="search">
        <el-input placeholder="请输入内容" :clearable=true v-model="searchText" class="input-with-select"><el-button slot="append" icon="el-icon-search" @click="search"></el-button></el-input>
        <ul class="tit">
            <li>至尊宝</li>
            <li>霸王别姬</li>
            <li>大圣娶亲</li>
            <li>王者荣耀点卷</li>
        </ul>
    </div>
    <div class="shop">
        <el-badge :value="shopCarCount" :max="99" class="item">
        <el-button class="shopCar"><i class="el-icon-shopping-cart-2"></i>购物车</el-button>
        </el-badge>
    </div>
</div>
<div class="main">
    <router-view></router-view>
</div>
    </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
    export default {
        inject:['reload'],
        data() {
            return {
                searchText:'',
                name:'',
                planA:true,
                planB:false,
                shopCarCount:0,
            }
        },methods: {
            search(){
                console.log(this.searchText);
            },
            Login(){
                this.$router.push({
                    name:"Login"
                })
            }
        },
        computed: {
             ...mapState({
             uname:state=>state.uname
        })
       
        },
        created() {
            this.name= this.$store.state.uname;
            this.name= this.$store.state.uname;
			if(this.name ==''){
				this.planA = true;
				this.planB = false;
			}else{
				this.planA = false;
				this.planB = true;		
			}
        },
    }
</script>

<style scoped>
.top-left{
    color: #9d9d9d;
    margin-left: 30px;
    line-height: 40px;
    outline: none;
    
    

}
.top-right{
    color: #9d9d9d;
    display: flex;
    width: 40%;
    float: right;
    font-size: 14px;
    padding: 10px 0;
    outline: none;
    margin-right: 100px;
    justify-content: space-around;
}
.top-right li{
    cursor: pointer;
}
.top-right li:nth-child(2){
    margin-left: -20px;
    color: red;
}
.top-right li:hover{
    color: #fff;
}
.head{
    width: 1400px;
    height: 200px;
    margin: 0 auto;
    display: flex;
}
.logo{
    flex: 1;
    text-align: center;
}
.logo>img{
    width: 150px;
    height: 150px;
    margin-top: 15px;
    border-radius: 50%;
}
.search{
    flex: 2;
    width: 500px;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
}
.tit{
    display: flex;
    width: 500px;
    font-size: 14px;
    color: #9d9d9d;
}
.tit li{
    cursor: pointer;
    text-indent: 1em;
    margin: 5px 15px 0 0;
}
.tit li:hover{
    color: red;
}
.shop{
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
}
.input-with-select{
    width: 500px; 
}
.shopCar{
    width: 200px;
    height: 40px;
    border: none;
    background-color: #ccc;
}
.shopCar:hover{
        z-index: 2; /*设置在顶层显示*/
            -webkit-box-shadow: 0 15px 30px rgba(0,0,0,0.1);    /*添加阴影*/
            box-shadow: 0 15px 30px rgba(0,0,0,0.1);
            -webkit-transform: translate3d(0, -2px, 0);     /*向上浮动*/
            transform: translate3d(0, -2px, 0);
}
.shopCar i{
    font-size: 18px;
    text-indent: -25px;
    margin-right: 15px;
}
.main{
    width: 1400px;
    margin: 0 auto;
}
</style>