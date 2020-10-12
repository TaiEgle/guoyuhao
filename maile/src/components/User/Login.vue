<template>
    <div class="Login">
        <div class="login-tap">
      
        <el-form :model="ruleForm" status-icon label-width="100px" class="demo-ruleForm">
            <h3>登录</h3>
    <el-input type="text" v-model="ruleForm.uname" placeholder="用户名" prefix-icon="el-icon-user-solid"></el-input>
    <el-input type="password" v-model="ruleForm.pwd" placeholder="密码" prefix-icon="el-icon-lock"></el-input>
    <el-button @click="LoginBtn">登录</el-button>
        </el-form>
         </div>
    </div>
</template>

<script>
import {Login} from '@/request/api'
import {mapMutations} from 'vuex'
    export default {
        data() {
            return {
                ruleForm:{
                    uname:'',
                    pwd:''
                },
                name:'',
            }
        },
        methods: {
            ...mapMutations([
                'setToken',
            ]),

            LoginBtn(){
                console.log(this.ruleForm);
                Login(this.ruleForm)
             .then((res) => {
                 console.log(res);
                
                if(res.meta.status==200){
                localStorage.setItem('token',res.data.token);
                localStorage.setItem('name',res.data.unmae);
                this.setToken(res.data.token);
                this.$store.commit("setName",res.data.unmae);
                             this.$message({
                                message:'您已成功登陆!',
                                type:'success'
                                 });
                   setTimeout(()=>{
                            this.$router.push({
                                    name:'index'
                                    })
                   },2500)
                            
                    }else {
                        // alert(res.meta.msg);
                        this.$message({
                                message:res.meta.msg,
                                type:'error'
                                 });
                    }

                 }).catch((err) => {
                     console.log(err);
                     });
                                          
                     }
        },
        created() {
            // this.name=showName;
        },
        computed: {
        // ...mapState({'uname'})
        
      }
    }
</script>

<style scoped>
    .login-tap{
        width: 300px;
        height: 250px;
        text-align: center;
        margin: 100px auto;
        padding: 25px;
        border: 1px solid #000;
    }
    .demo-ruleForm .el-input{
        margin: 15px 0; 
    }
    .demo-ruleForm .el-button{
            width: 120px;          
    }
    
</style>