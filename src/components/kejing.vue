<template>
  <div class="app-3">
      <div class="app-3-1">
        <div class="el">
          <el-input placeholder="课程ID/名称" v-model="input" clearable></el-input>
        </div>
        <div class="el1">
          <el-select v-model="select" slot="prepend" placeholder="课程类型">
            <el-option label="综合素质" value="1"></el-option>
            <el-option label="教育教学能力" value="2"></el-option>
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
        <div class="app-3-4">+添加课程</div>
        <div class="app-3-3">
          <el-table
          ref="multipleTable"
          border
          :data="tableData"
          tooltip-effect="dark"
          style="width: 100%;font-size:11px;"
          @selection-change="handleSelectionChange">
          <el-table-column
            type="selection"
            width="55">
          </el-table-column>
          <el-table-column
            label="课程"
            width="80">
            <template slot-scope="scope">{{ scope.row.date }}</template>
          </el-table-column>
          <el-table-column
            prop="name"
            label="课程名称"
            width="80">
          </el-table-column>
          <el-table-column
            prop="address"
            label="课程图片"
            width="80"
            show-overflow-tooltip>
          </el-table-column>
          <el-table-column
            prop="time"
            width="80"
            label="课程时长">
          </el-table-column>
          <el-table-column
            prop="zhang"
            width="74"
            label="课程章节">
          </el-table-column>
          <el-table-column
            prop="thue"
            width="70"
            label="讲师">
          </el-table-column>
          <el-table-column
            prop="lei"
            width="80"
            label="课程类型">
          </el-table-column>
          <el-table-column
            prop="much"
            width="70"
            label="在线人数">
          </el-table-column>
          <el-table-column
            prop="mian"
            width="70"
            label="活动价">
          </el-table-column>
          <el-table-column
            prop="tian"
            width="130"
            label="添加时间">
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
  data() {
      return {
        valueS:false,
        input: '',
        select:'',
        tableData: [{
          date: '2019999',
          name: '教学观',
          address: '图片',
          time:'20小时',
          zhang:'98小节',
          thue:'王昭君',
          lei:'综合素质',
          much:'123',
          mian:'￥99',
          tian:'2017-07-19 14:48:11'
        }, {        
          date: '2019999',
          name: '教学观',
          address: '图片',
          time:'20小时',
          zhang:'98小节',
          thue:'王昭君',
          lei:'综合素质',
          much:'123',
          mian:'￥99',
          tian:'2017-07-19 14:48:11'
        }, {
          date: '2019999',
          name: '教学观',
          address: '图片',
          time:'20小时',
          zhang:'98小节',
          thue:'王昭君',
          lei:'综合素质',
          much:'123',
          mian:'￥99',
          tian:'2017-07-19 14:48:11'
        }, {
          date: '2019999',
          name: '教学观',
          address: '图片',
          time:'20小时',
          zhang:'98小节',
          thue:'王昭君',
          lei:'综合素质',
          much:'123',
          mian:'￥99',
          tian:'2017-07-19 14:48:11'
        }, {
          date: '2019999',
          name: '教学观',
          address: '图片',
          time:'20小时',
          zhang:'98小节',
          thue:'王昭君',
          lei:'综合素质',
          much:'123',
          mian:'￥99',
          tian:'2017-07-19 14:48:11'
        }, {
          date: '2019999',
          name: '教学观',
          address: '图片',
          time:'20小时',
          zhang:'98小节',
          thue:'王昭君',
          lei:'综合素质',
          much:'123',
          mian:'￥99',
          tian:'2017-07-19 14:48:11'
        }, {
          date: '2019999',
          name: '教学观',
          address: '图片',
          time:'20小时',
          zhang:'98小节',
          thue:'王昭君',
          lei:'综合素质',
          much:'123',
          mian:'￥99',
          tian:'2017-07-19 14:48:11'
        }],
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