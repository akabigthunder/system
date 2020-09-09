<template>
  <div class="app-3">
      <div class="app-3-1">
        <div class="el">
          <el-input placeholder="查询" v-model="input" clearable></el-input>
        </div>
        <div class="el1">
          <el-select v-model="select" slot="prepend" placeholder="2019年考试大纲">
            <el-option label="2018年考试大纲" value="1"></el-option>
            <el-option label="2017年考试大纲" value="2"></el-option>
          </el-select>
        </div>
        <div class="el2">
          <input type="button" value="查询" class="bu"/>
        </div>
        <div class="el2">
          <input type="button" value="重置" class="bu1"/>
        </div>
      </div>
      <div class="app-3-2">
        <div class="app-3-4">+添加考试大纲</div>
        <div class="app-3-3">
          <el-table
          ref="multipleTable"
          border
          :data="tableData"
          tooltip-effect="dark"
          style="width: 100%;font-size:11px;"
        >
          <el-table-column
            type="selection"
            width="55">
          </el-table-column>
         
          <el-table-column
            prop="Title"
            label="Title"
            width="250">
          </el-table-column>
          <el-table-column
            prop="Content"
            width="314"
            label="Content">
          </el-table-column>
          <el-table-column
            prop="Prize"
            width="314"
            label="Prize">
          </el-table-column>
          <el-table-column
            prop="do"
            width="100"
            label="操作">
            <template slot-scope="scope">
              <span
                size="mini"
                style="color:#1cb3fb;cursor: pointer;"
                @click="handleEdit(scope.$index, scope.row)">查看</span>
              <span
                size="mini"
                style="margin-left:5px;color:#1cb3fb;cursor: pointer;"
                @click="handleEdit(scope.$index, scope.row)">编辑</span>
              <span
                size="mini"
                style="margin-left:5px;color:#1cb3fb;cursor: pointer;"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">删除</span>
            </template>
          </el-table-column>
        </el-table>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  created(){
    this.axios.get("http://47.111.250.151:8081/api/Question/GetQuestion")
    .then(res => {
      const dd = res.data;
      console.log(dd);
      this.tableData=dd.rows

    })
  },
  data() {
      return {
        valueS:false,
        input: '',
        select:'',
        tableData: [],
        multipleSelection: []
      }
    },
    methods:{
      handleDelete(handleSelectionChange,i){
        this.tableData.splice(i,1);
      }
    }
}
</script>

<style>
  .app-3{
    margin:70px 0px 0px -1020px;
  }
  .app-3-1{
    width: 1007px;
    height: 60px;
    background: #fff;
    display: flex;
  }
  .app-3-2{
    width: 1007px;
    height: 500px;
    background: #fff;
    margin-top:20px;
    padding-top:20px;
  }
  .app-3-3{
    width:970px;
    margin-left:20px;
    margin-top:20px;
  }
  .app-3-4{
    width:100px;
    height:30px;
    color:#fff;
    background: rgb(78, 159, 252);
    text-align: center;
    line-height: 30px;
    font-size: 12px;
    border-radius: 5px;
    margin-left:20px;
    cursor: pointer;
  }
  .el{
    width:230px;
    margin-left:20px;
    padding-top:14px;
  }
  .el-input__inner{
    font-size: 11px;
    height:30px;
  }
  .el1{
    margin: 14px 0px 0px 20px;
  }
  .el-input__prefix{
    top:-5px;
  }
  .el2{
    margin:14px 0px 0px 20px;
  }
  .bu{
    background: rgb(101, 185, 253);
    color:#fff;
    border:1px solid rgb(101, 185, 253);
    font-size:12px;
    border-radius: 5px;
    height:30px;
    width:70px;
  }
  .bu1{
    background: #fff;
    border:1px solid #ccc;
    font-size:12px;
    border-radius: 5px;
    height:30px;
    width:70px;
  }
  .el-table .cell{
    line-height:11px;
  }
</style>