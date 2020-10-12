<template>
    <div class="details">
        {{this.$route.params.id}}
        <div class="product-list">
			<div class="product-item">
				<img class="p-img" :src="this.product.cover" alt="">
				<ul class="more">
					<li>￥{{product.price}}</li>
					<li>{{product.commadity}}</li>
					<li>{{product.place}}</li>
					<el-button class="btn-more" @click="addShop">加入购物车</el-button>
					<el-button class="btn-more">立即购买</el-button>
				</ul>
			</div>
			
		</div>
    </div>
</template>

<script>
import {GetOneProduct} from '@/request/api';
    export default {
        data() {
            return {
                product:'',
                id:'',
                number:0,
                
            }
        },
        created() {
            this.id=this.$route.params.id;
            GetOneProduct(this.id)
			.then((res) => {
				this.product=res.data
			}).catch((err) => {
				console.log(err);
			});
        },
        methods: {
            addShop(){
                this.$router.push({
                    name:'addSuccess',
                    params:this.id
                })
                
                
            }
        },
    }
</script>

<style scoped>
.details{
    padding-top: 40px;
    border-top: 2px solid #ccc;
}
.product-item{
    display: flex;
}
</style>