<template>
    <div class="login">
      <el-card class="box-card">
          <div slot="header" class="clearfix">
              <span>通用后台管理系统</span>
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
  export default {
      data(){
        const validateName = (rule,value,callback)=>{
            //请输入4-10位用户名
            let reg = /^[a-zA-Z0-9]{4,10}$/;
            if(value === ''){
                callback(new Error('请输入用户名'))
            }else if(!reg.test(value)){
                callback(new Error('请输入4-10位用户名'))
            }else{
                callback()
            }
        }
        const validatePassword= (rule,value,callback)=>{
            //请输入6-12位密码 包含大小写字母数字和特殊字符
            let reg = /^\S*(?=\S{6,12})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/;
            if(value === ''){
                callback(new Error('请输入密码 '))
            }else if(!reg.test(value)){
                callback(new Error('6-12位密码包含大小写字母数字和特殊字符'))
            }else{
                callback()
            }
        }
          return{
              form:{
                  userName: '',
                  password: '',
              },
              rules:{
                userName:[{validator: validateName,trigger: 'blur',required:true}],
                password:[{validator:validatePassword,trigger: 'blur',required:true}]
              }
          }
      },
      methods:{
          login(){
              this.$refs.form.validate((valid)=>{
                    if(valid){


                        // 传参并指定回调执行函数为onBack
                        // this.$http.jsonp('http://apis.juhe.cn/fapigx/esports/query',{
                        //     params:{},
                        //     jsonp: 'onBack'
                        // }).then(res=>{
                        //     console.log(res)
                        // })

                    //   console.log(this.form)
                    this.$router.push('./home')
                      this.axios.get('https://rapserver.sunmi.com/app/mock/340/login',this.form).then(res=>{
                        if(res.data.status === 200){
                            localStorage.setItem('userName',res.data.username)
                            this.$message.success(res.data.message||'登录成功')
                            this.$router.push('./home')
                        }
                      }).catch(err=>{
                        console.log(err)
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