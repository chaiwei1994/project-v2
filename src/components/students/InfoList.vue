<template>
  <div class="infoList">
    <el-form :inline="true"  class="demo-form-inline" size="small">
      <el-button type="primary" @click="addStudent">新增</el-button>
    </el-form>
    <el-table :data="compData" border style="width: 100%;margin-top:10px;">
      <el-table-column prop="name" label="姓名" align="center">
      </el-table-column>
      <el-table-column prop="sex" label="性别" align="center">
        <template slot-scope="scope">
          {{ scope.row.sex === "1" ? '男':'女' }}
        </template>
      </el-table-column>
      <el-table-column prop="age" align="center" label="年龄">
      </el-table-column>
      <el-table-column prop="father" label="父亲姓名" align="center">
      </el-table-column>
      <el-table-column prop="mother" label="母亲姓名" align="center">
      </el-table-column>
      <el-table-column prop="time" label="入校时间" align="center">
      </el-table-column>
      <el-table-column prop="address" label="家庭住址" align="center">
      </el-table-column>
      <el-table-column prop="phone" label="联系方式" align="center">
      </el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <el-button
            size="mini"
            icon="el-icon-edit"
            @click="edit(scope.row)"
          ></el-button>
          <el-button
            type="danger"
            size="mini"
            icon="el-icon-delete"
            @click="del(scope.row)"
          ></el-button>
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
    <el-dialog :title="state ? '添加学生信息' : '修改学生信息'" :visible.sync="dialogFormVisible" width="500px">
      <el-form :model="form" :rules="rules" ref="form">
        <el-form-item label="姓名" :label-width="formLabelWidth" prop="name">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="性别" :label-width="formLabelWidth" prop="sex">
          <el-radio label="1" v-model="form.sex">男</el-radio>
          <el-radio label="2" v-model="form.sex">女</el-radio>
        </el-form-item>
        <el-form-item label="年龄" :label-width="formLabelWidth" prop="age">
          <el-input v-model="form.age" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="父亲姓名" :label-width="formLabelWidth" prop="father">
          <el-input v-model="form.father" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="母亲姓名" :label-width="formLabelWidth" prop="mother">
          <el-input v-model="form.mother" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="入校时间" :label-width="formLabelWidth" prop="time">
          <el-date-picker
            v-model="form.time"
            type="date"
            format="yyyy 年 MM 月 dd 日"
            value-format="yyyy-MM-dd"
            placeholder="选择日期"
            >
          </el-date-picker>
        </el-form-item> 
        <el-form-item label="家庭住址" :label-width="formLabelWidth" prop="address">
          <el-input v-model="form.address" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="联系方式" :label-width="formLabelWidth" prop="phone">
          <el-input v-model="form.phone" autocomplete="off"></el-input>
        </el-form-item>        
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="sure(form)">确 定</el-button>
      </div>
    </el-dialog>  
  </div>
</template>

<script>
import { getInfo, info, infoDel } from '@/api/api.js'
export default {
  data(){
    return {
      currentPage: 1,
      pageSize:10,
      tableData:[],
      dialogFormVisible: false,
      form:{
        id:'',
        name:'', 
        sex: '1',
        age: '',
        father: '',
        madther: '',
        address: '',
        time: '',
        phone: '',
      },
      state: true,
      formLabelWidth:"80px",
      rules:{
        name: [{required: true,message:'请输入姓名'}],
        sex: [{required: true}],
        age: [{required: true,message:'请输入年龄'}],
        address: [{required: true,message:'请输入地址'}],
        time: [{required: true,message:'请选择时间'}],
        phone: [{required: true,message:'请输入联系方式'}],
      },
      total:0,
    }
  },
  computed:{
    compData(){
        return this.tableData.slice((this.currentPage-1)*this.pageSize,this.currentPage*this.pageSize)
    }
  },
  methods:{
    getData(){
      getInfo().then((res)=>{
        this.tableData = res.data;
        this.total = res.total
      })
    },
    del(row){
      console.log(row)
      infoDel(row.id).then(res=>{
        if(res.status === 200){
          this.$message.success('删除成功！')
          this.getData()
        }
      })
    },
    edit(row){
      this.dialogFormVisible = true;
      this.state = false;
      this.form = {...row};
      console.log(row)
    },
    addStudent(){
      this.dialogFormVisible = true
      this.$refs.form.resetFields()
      this.state = true;
      this.form = {
        id:'',
        name:'', 
        sex: '1',
        age: '',
        father: '',
        mather: '',
        address: '',
        time: '',
        phone: '',
      }
    },
    sure(form){
      console.log(form)
      this.$refs.form.validate(valid=>{
        if(valid){
          if(this.state){
            info('post',this.form).then((res)=>{
              if(res.status === 200){
                this.getData()
                this.$message.success('新增成功！')
                this.dialogFormVisible = false
                this.$refs.form.resetFields()
              }
            })
          }else{
            info('put',this.form).then((res)=>{
              if(res.status === 200){
                this.getData()
                this.$message.success('修改成功！')
                this.dialogFormVisible = false
                this.$refs.form.resetFields()
              }
            })
          }
        }
      })
    },
    handleSizeChange(val) {
      this.pageSize = val;
      this.currentPage = 1;
        console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.currentPage = val;
    },
  },
  created(){
    this.getData()
  }
}
</script>

<style lang="scss">
.infoList{
  .demo-form-inline,.el-form-item{
    text-align: left;
  }
  .el-pagination{
    text-align: left;
    margin-top: 20px;
  }
}
</style>