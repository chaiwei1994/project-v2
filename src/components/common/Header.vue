<template>
  <div class="header">
    <el-header>
        <div class="title">
            后台管理系统
        </div>  
        <div>{{ name }}</div>
    </el-header>
  </div>
</template>

<script>
import { getToken } from '@/utils/setToken.js'
export default {
    data(){
        return{
            name:"",
        }
    },
    created(){
        this.name = getToken('userName')
    }
}
</script>

<style lang="scss" soped>
    .header{
        .el-header{
            background: #2578b5;
            color: #ffffff;
            line-height: 60px;
            display: flex;
            justify-content: space-between;
            .title{
                width:200px;
                font-size: 24px;
            }
        }
    }
</style>