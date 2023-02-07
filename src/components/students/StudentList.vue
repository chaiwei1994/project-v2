<template>
  <div class="studentsList">
    <!--查询、重置  -->
    <el-form :inline="true" :model="formInline" class="demo-form-inline" size="small">
      <el-form-item label="姓名">
        <el-input v-model="formInline.name" placeholder="请输入姓名查询"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="query">查询</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="reset">重置</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="compData" border style="width: 100%">
      <el-table-column prop="name" label="姓名" align="center">
      </el-table-column>
      <el-table-column prop="sex_des" label="性别" align="center">
      </el-table-column>
      <el-table-column prop="age" align="center" label="年龄">
      </el-table-column>
      <el-table-column prop="class" label="学号" align="center">
      </el-table-column>
      <el-table-column prop="state_des" label="状态" align="center">
      </el-table-column>
      <el-table-column prop="address" label="地址" align="center">
      </el-table-column>
      <el-table-column prop="phone" label="联系方式" align="center">
      </el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <el-popconfirm
            title="确定要删除吗？"
            @confirm="del(scope.row)"
            >
            <el-button
            type="danger"
            size="mini"
            slot="reference"
            icon="el-icon-delete"
          ></el-button>
          </el-popconfirm>

        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[10, 20,50, 100]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>
  </div>
</template>

<script>
import {  studentDel, studentData } from "@/api/api.js";
// 
export default {
  data() {
    return {
      tableData: [],
      currentPage: 1, //当前页码
      total: 0, //总条数
      pageSize: 10,//每页显示条数
      formInline:{
        name:'',
      }
    };
  },
  computed:{
    compData(){
        return this.tableData.slice((this.currentPage-1)*this.pageSize,this.currentPage*this.pageSize)
    }
  },
  created() {
    this.getStudentList();
  },
  methods: {
    handleSizeChange(val) {
      this.pageSize = val;
      this.currentPage = 1;
        console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.currentPage = val;
    },
    getStudentList(params) {
      studentData(params).then((res) => {
        if (res.status === 200) {
          this.tableData = res.data;
          this.total = res.total;
          console.log("学生列表数据", res.data);
          this.tableData.forEach((item) => {
            item.sex === 1 ? (item.sex_des = "男") : (item.sex_des = "女");
            item.state === "1"
              ? (item.state_des = "已入学")
              : item.state === "2"
              ? (item.state_des = "未入学")
              : (item.state_des = "休学中");
          });
        }
      });
    },
    del(row){
      console.log(row)
      studentDel(row.id).then(res=>{
        if(res.status === 200){
          this.$message.success(res.message);
          this.getStudentList()
        }
      })
    },
    query(){
      this.getStudentList(this.formInline)
    },
    reset(){
      this.formInline = {}
      this.getStudentList(this.formInline)

    }
  },
};
</script>

<style lang="scss">
.studentsList{
  .demo-form-inline,.el-form-item{
    text-align: left;
  }
  .el-pagination{
    text-align: left;
    margin-top: 20px;
  }
}
</style>