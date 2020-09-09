<template>
  <div class="app-3">
      <sss :ee="aa"></sss> 
      <div class="app-3-1">
        <div class="el">
         <el-input
          v-model="searchValue"
          size="mini"
          clearable
          placeholder="请输入编号或城市"
          style="width:220px"
        ></el-input>
        </div>
        <div class="el2">
           <el-button type="primary" style="margin-left: 10px;" size="mini" @click="doFilter">搜索</el-button>
        </div>
        <div class="el2">
          <input type="button" value="重置" class="bu1"/>
        </div>
      </div>
      <div class="app-3-2">
        <div class="app-3-4"><router-link tag="div" to="/kmtian">+添加课程</router-link></div>
        <div class="app-3-3">
          <el-table
        
          ref="multipleTable"
          border
          :data="filterTableData"
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
            width="100">
          </el-table-column>
          <el-table-column
            prop="time"
            width="100"
            label="课程时长">
          </el-table-column>
          <el-table-column
            prop="zhang"
            width="84"
            label="课程章节">
          </el-table-column>
          <el-table-column
            prop="thue"
            width="80"
            label="讲师">
          </el-table-column>
          <el-table-column
            prop="lei"
            width="80"
            label="课程类型">
          </el-table-column>
          <el-table-column
            prop="much"
            width="80"
            label="在线人数">
          </el-table-column>
          <el-table-column
            prop="mian"
            width="80"
            label="是否免费">
          <template scope="scope">
            <el-switch
                on-color="#5B7BFA"
                off-color="#dadde5"
                v-model="scope.row.menusstate" 
                @change=change(scope.$index,scope.row)                
            >
            </el-switch>
            </template>
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
              <router-link tag="span" to="/mianlook">
              <span
                size="mini"
                style="color:#1cb3fb;cursor: pointer;"
                @click="handleEdit(scope.$index, scope.row)">查看</span></router-link>
              <span
                size="mini"
                style="margin-left:5px;color:#1cb3fb;cursor: pointer;"
                @click="handleEdita(scope.$index, scope.row)">编辑</span>
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
import sss from '@/components/sss'
export default {
   components:[
        sss
    ],
  name:'kemian',
  data() {
      return {
        aa:111111,
        multipleSelection: [],
        searchValue: "",
        tableData: [],
        currentPage: 1,
        pageSize: 8,
        totalItems: 0,
        filterTableData: [],
        flag: false,
        rowClass: "",
          valueS:false,
          input: '',
          select:'',
          resData: [{
            date: '1111',
            name: '教学观',
            address: '图片',
            time:'20小时',
            zhang:'98小节',
            thue:'王昭君',
            lei:'综合素质',
            much:'123',
            mian:'aaa',
            tian:'2017-07-19 14:48:11'
          }, {        
            date: '66666',
            name: '教学观',
            address: '图片',
            time:'20小时',
            zhang:'98小节',
            thue:'王昭君',
            lei:'综合素质',
            much:'123',
            mian:'aaa',
            tian:'2017-07-19 14:48:11'
          }, {
            date: '333333',
            name: '教学观',
            address: '图片',
            time:'20小时',
            zhang:'98小节',
            thue:'王昭君',
            lei:'综合素质',
            much:'123',
            mian:'aaa',
            tian:'2017-07-19 14:48:11'
          }, {
            date: '2222222',
            name: '教学观',
            address: '图片',
            time:'20小时',
            zhang:'98小节',
            thue:'王昭君',
            lei:'综合素质',
            much:'123',
            mian:'aaa',
            tian:'2017-07-19 14:48:11'
          }, {
            date: '666666666',
            name: '教学观',
            address: '图片',
            time:'20小时',
            zhang:'98小节',
            thue:'王昭君',
            lei:'综合素质',
            much:'123',
            mian:'aaa',
            tian:'2017-07-19 14:48:11'
          }, {
            date: '2019999',
            name: '教学观',
            address: '图片11',
            time:'20小时',
            zhang:'98小节',
            thue:'王昭君',
            lei:'综合素质',
            much:'123',
            mian:'aaa',
            tian:'2017-07-19 14:48:11'
          }, {
            date: '888888',
            name: '教学观',
            address: 'sb',
            time:'20小时',
            zhang:'98小节',
            thue:'王昭君',
            lei:'综合素质',
            much:'123',
            mian:'aaa',
            tian:'2017-07-19 14:48:11'
          }],
          
          list:{
            date: '',
            name: '',
            address: '',
            time:'',
            zhang:'',
            thue:'',
            lei:'',
            much:'',
            tian:''
          },
          list1:'',
          indexa:''
        }
    },
    beforeRouteEnter (to, from, next) {
      // ...
      if(to.name!='deng'){
        let token = sessionStorage.getItem('token');
        if(token == null){
          next('/deng') 
        }else if(token != null){
          next();
        }else{
           next(false)
        }
      }else{
        next()
      }
    },
    beforeMount() {
    this.mockRequset();
  },
    methods:{
    // 前端搜z索功能需要区分是否检索,因为对应的字段的索引不同
    doFilter() {
      this.tableData = [];
      this.filterTableData = [];
      this.resData.filter(item => {
        if ("date" in item || "address" in item) {
          // 按编号或地区查询
          if (
            item.date.indexOf(this.searchValue.toUpperCase()) > -1 ||
            item.address.indexOf(this.searchValue) > -1
          ) {
            this.filterTableData.push(item);
            console.log(this.filterTableData);
          }
        }
      });
      // 页面数据改变重新统计数据数量和当前页
     
      this.totalItems = this.filterTableData.length;
      // 渲染表格,根据值
      this.currentChangePage(this.filterTableData);
      // 页面初始化数据需要判断是否检索过
      this.flag = true;
    },
    
      handleDelete(index){
        this.resData.splice(index,1);
        this.$message("删除成功！！！")
      },
       handleSelectionChange(val) {
      console.log("handleSelectionChange--", val);
      this.multipleSelection = val;
    },  
    //修改
    handleEdita(index,val){
      this.$router.push({
        name:'aa',
        params:{
          list:this.resData[index],
          index:index
        }
      })
      console.log(index,val)
    },
    created(){
      this.list1 = this.$route.params.list
      this.index = this.$route.params.index
      console.log(this.list1)
    }
    },
    //添加
    activated(){
      this.filterTableData=this.resData
       if(this.$route.params.mz){
        console.log(this.$route.params.mz)
        this.resData.push(this.$route.params.mz)
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
    width: 100%;
    height: 500px;
    background: #fff;
    margin-top:20px;
    padding-top:20px;
  }
  .app-3-3{
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
    line-height:15px !important;
  }
</style>