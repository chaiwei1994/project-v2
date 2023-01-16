<template>
    <div class="login">
      <el-card class="box-card">
          <div slot="header" class="clearfix">
              <span>后台管理系统</span>
          </div>
          <el-form 
           label-width="80px" 
           :model="form"
           ref="form"
           :rules="rules"
           >
              <el-form-item label="用户名" prop="userName">
                  <el-input v-model="form.userName"/>
              </el-form-item>
              <el-form-item label="密码" prop="password">
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
  import { nameRule , passRule} from '../utils/validate'
  import { setToken } from '../utils/setToken.js'
  import { login } from '../api/api.js'
  export default {
      data(){
          return{
              form:{
                  userName: '',
                  password: '',
              },
              rules:{
                userName:[{validator: nameRule,trigger: 'blur',required:true}],
                password:[{validator:passRule,trigger: 'blur',required:true}]
              }
          }
      },
      methods:{
          login(){
              this.$refs.form.validate((valid)=>{
                    if(valid){
                        // this.service.post('/login',this.form)
                        login(this.form)
                        .then(res=>{
                            if(res.status === 200){
                                console.log('22222',res)
                                setToken('token',res.token)
                                setToken('userName',this.form.userName)
                                this.$message.success(res.message)
                                this.$router.push('./home')
                            }
                        })
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
      background: url('../assets/images/bg.png') center no-repeat;
      .el-card{
        background: #65768557;
      }
      .box-card{
          width: 450px;
          margin:200px auto;
          color:#ffffff;
          .el-form .el-form-item__label{
            width:100px;
            color: #ffffff;
          }
          .el-card__header{
              font-size:28px;
          }
          .el-button{
              width: 100%;
          }
      }
  }
  </style>