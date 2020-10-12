<template>
<div>

    <div class="main">
        <!-- 左侧二级菜单 -->
		<div class="sidebar">
			<ul class="silde-item">
				<li>
					商品分类
				</li>
				<li>
					王者荣耀
					<ul>
						1
					</ul>
				</li>
				<li>
					王者荣耀
					<ul>
							2
					</ul>
				</li>
				<li>
					王者荣耀
					<ul>
							3
					</ul>
				</li>
				
			</ul>
        </div>

	<!-- 中间轮播图 -->
	<div class="midle">
	<el-carousel trigger="click" height="370px">
      <el-carousel-item  v-for="(item,index) in url" :key="index">
        <img :src="item" alt="" class="midle-img">
      </el-carousel-item>
    </el-carousel>
	</div>

	<div class="right" v-show="planA">
		<img src="../../../img/f778738c-e4f8-4870-b634-56703b4acafe-1601981214369.gif" alt="123">
		<p>Hi~欢迎来到小郭的商城</p>
		<div class="btn">
		<el-button @click="Login">登录</el-button>
		<el-button>注册</el-button>
		</div>
	</div>
	
	<div class="right" v-show="planB">
		<img src="../../../img/f778738c-e4f8-4870-b634-56703b4acafe-1601981214369.gif" alt="123">
		<p>Hi~{{name}} 欢迎您</p>
		<div class="btn">
		<el-button @click="LoginOut">退出登录</el-button>
		<el-button>账号管理</el-button>
		</div>
	</div>
    </div>

	<!-- 商品界面 -->
	<div class="product">
		<div class="tit">商品<span class="hot">Hot~</span></div>
		<div class="product-list">
			<div class="product-item" v-for="(item,index) in product" :key="index">
				<img class="p-img" :src="item.cover" alt="">
				<ul class="more">
					<li>￥{{item.price}}</li>
					<li>{{item.commadity}}</li>
					<li>{{item.place}}</li>
					<el-button class="btn-more" @click="details(item._id)">查看详情</el-button>
				</ul>
			</div>
			
		</div>
	</div>

		</div>
</template>

<script>
import {GetSwippers} from '@/request/api';
import {GetProduct} from '@/request/api';
    export default {
		inject:['reload'],
		data() {
			return {
				url:'',
				product:'',
				name:'',
				planA:true,
				planB:false
            }
		},
		methods: {
				// 登录
				Login(){
                this.$router.push({
                    name:"Login"
                })
			},
			// 退出登录
			LoginOut(){
			localStorage.setItem('name','');
			this.$store.commit("setName",'');
			this.reload();
			},
			// 商品详情
			details(id){
				this.$router.push({
					name:'details',
					params:{
						id
					}
				});
				// console.log(id);
			}
			},
		created() {

			this.name= this.$store.state.uname;
			if(this.name ==''){
				this.planA = true;
				this.planB = false;
			}else{
				this.planA = false;
				this.planB = true;		
			}
			GetSwippers({
				num:1,
				page:2
			})
			.then((res) => {
				// console.log(res);
				this.url=res.data[0].url;
				// console.log(this.url);
			}).catch((err) => {
				console.log(err);
			});
			GetProduct()
			.then((res) => {
				// console.log(res.data);
				this.product=res.data
			}).catch((err) => {
				console.log(err);
			});

		},
   


    }
</script>

<style scoped>
.main{
	display: flex;
	justify-content: center;
}
.sidebar {
	height: 360px;
	width: 234px;
	background: rgba(0, 0, 0, .6);
	/* padding-top: 20px; */
	padding-bottom: 10px;
}
.sidebar>ul{
	width: 100%;
	line-height: 40px;
	text-indent: 3em;
	position: relative;
}
.sidebar>ul>li:first-child{
	background-color: red;
}
.sidebar>ul>li:nth-child(n+2):hover{
	cursor: pointer;
	background-color: #fff;
}
.sidebar>ul>li:nth-child(n+2):hover>ul{
		display: block;
}
.sidebar>ul>li:nth-child(n+2)>ul{
	width: 800px;
	height: 370px;
	position: absolute;
	top: 0;
	left: 100%;
	display: none;
	z-index: 5;
	-webkit-box-shadow: 0 15px 30px rgba(0,0,0,0.1);    /*添加阴影*/
            box-shadow: 0 15px 30px rgba(0,0,0,0.1);
            -webkit-transform: translate3d(0, -2px, 0);     /*向上浮动*/
            transform: translate3d(0, -2px, 0);
	border: 1px solid #ccc;
	background-color: #fff;


}
/* 轮播图 */
 

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .el-carousel{
	  width: 800px;
  }
 .midle-img{
	 width: 100%;
	 height: 100%;
 }
/* 右边用户界面 */
.right{
	width: 300px;
	height: 368px;
	border: 1px solid #ccc;
}
.right>img{
	width: 100px;
	height: 100px;
	display: block;
	position: relative;
	top: -40px;
	right: -90px;
	border-radius: 50%;
	border: 1px solid #000;
}
.right>p{
	margin-top: 60px;
	text-align: center;
}
.btn{
	margin-top: 30px;
	display: flex;
	justify-content: center;
}

/* 商品界面 */
.product{
	width: 1200px;
	height: 100vh;
	margin: 60px auto;
	border-top: 2px solid #ccc;
}
.tit{
	font-size: 30px;
	width: 200px;
	height: 100px;
	/* margin-top:50px;  */
	line-height: 40px;
	margin: 30px auto;
}
.hot{
	width: 100%;
	padding-left: 10px;
	font-size: 18px;
	color: red;
}
.product-list{
	width: 100%;
	display: flex;
	flex-wrap: wrap;
}
.product-item{
	width: 350px;
	height: 200px;
	display: flex;
	position: relative;
	justify-content: space-around;
	padding: 20px 15px 0 10px;
	margin-right: 25px;
	border-radius: 5px;
	margin-bottom: 50px;

	background: #fff;
            -webkit-transition: all .2s linear; /*渐变效果*/
            transition: all .2s linear;
}
.product-item:hover{
	z-index: 2; /*设置在顶层显示*/
            -webkit-box-shadow: 0 15px 30px rgba(0,0,0,0.1);    /*添加阴影*/
            box-shadow: 0 15px 30px rgba(0,0,0,0.1);
            -webkit-transform: translate3d(0, -2px, 0);     /*向上浮动*/
            transform: translate3d(0, -2px, 0);
}
.p-img{
	width: 140px;
	height: 150px;
}
.more{
	padding: 0 15px;
}
.more li{
	padding: 8px 0;
}
.more li:nth-child(1){
	color: red;
	font-size: 18px;
	font-weight: 700;
}
.more li:nth-child(2){

	font-size: 13px;

}
.more li:nth-child(3){
color: #9d9d9d;
	font-size: 13px;

}
.more .btn-more{
position: absolute;
bottom: 25px;
right: 25px;
}

</style>