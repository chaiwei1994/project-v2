<template>
  <div class="login">
    <el-card class="box-card">
        <div slot="header" class="clearfix">
            <span>通用后台管理系统</span>
        </div>
        <el-form 
        :label-position="labelPosition"
         label-width="80px" 
         :model="form"
         ref="form"
         >
            <el-form-item label="用户名" prop="userName"
            :rules="[
                {required:true, message:'请输入用户名', trigger:'blur'},
                {min:4, max:10, message:'长度在4-10位字符之间', trigger:'blur'},
            ]">

                <el-input v-model="form.userName"/>
            </el-form-item>
            <el-form-item label="密码" prop="password"
            :rules="[
                {required:true, message:'请输入密码', trigger:'blur'},
                {min:6, max:12, message:'长度在6-12位字符之间', trigger:'blur'},
            ]">
                <el-input v-model="form.password" type="password"/>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="login(form)">登录</el-button>
            </el-form-item>
        </el-form>  
    </el-card>

  </div>
</template>

<script>
export default {
    data(){
        return{
            form:{
                userName: '',
                password: '',
            }
        }
    },
    methods:{
        login(){
            this.$refs.form.validate((valid)=>{
                if(valid){
                    console.log(this.form)
                }else{
                    console.error(this.form)
                }
            })
        }
    }
}
</script>

<style lang="scss">
.login{
    width: 100%;
    height:100%;
    position: absolute;
    background-color: #409EFF;
    .box-card{
        width: 450px;
        margin:200px auto;
        .el-card__header{
            font-size:28px;
        }
        .el-button{
            width: 100%;
        }
    }
}
</style>