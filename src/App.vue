<template>
  <div>
      <div style="display:flex;">
          <div class="app-1">
              <div class="app-1-2">
                  <div class="app-1-1">logo</div>
              </div>
              <el-row>
                <el-col :span="12">
                    <el-menu
                    default-active="2"
                    class="el-menu-vertical-demo"
                    @open="handleOpen"
                    @close="handleClose"
                    background-color="#545c64"
                    text-color="#fff"
                    active-text-color="#ffd04b">
                    <el-submenu index="1">
                        <template slot="title">
                        <span>课程管理</span>
                        </template>
                        <el-menu-item-group>
                        <router-link tag="span" to="/kemian"><el-menu-item index="1-1">免费课</el-menu-item></router-link>
                        <router-link tag="span" to="/kejing"><el-menu-item index="1-2">精品课</el-menu-item></router-link>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="3">
                        <template slot="title">
                        <span>综合素质题库管理</span>
                        </template>
                        <el-menu-item-group>
                        <router-link tag="span" to="/zongkao"><el-menu-item index="3-1">考试大纲</el-menu-item></router-link>
                        <router-link tag="span" to="/zongli"><el-menu-item index="3-2">历史真题</el-menu-item></router-link>
                        <router-link tag="span" to="/zongmo"><el-menu-item index="3-3">模拟试卷</el-menu-item></router-link>
                        <router-link tag="span" to="/zongxuan"><el-menu-item index="3-4">选择题</el-menu-item></router-link>
                        <router-link tag="span" to="/zongjian"><el-menu-item index="3-5">简答题</el-menu-item></router-link>
                        <router-link tag="span" to="/zongcai"><el-menu-item index="3-6">材料分析题</el-menu-item></router-link>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="4">
                        <template slot="title">
                        <span>教育教学能力题库管理</span>
                        </template>
                        <el-menu-item-group>
                        <router-link tag="span" to="/zongkao"><el-menu-item index="4-1">考试大纲</el-menu-item></router-link>
                        <router-link tag="span" to="/zongli"><el-menu-item index="4-2">历史真题</el-menu-item></router-link>
                        <router-link tag="span" to="/zongmo"><el-menu-item index="4-3">模拟试卷</el-menu-item></router-link>
                        <router-link tag="span" to="/zongxuan"><el-menu-item index="4-4">选择题</el-menu-item></router-link>
                        <router-link tag="span" to="/zongjian"><el-menu-item index="4-5">简答题</el-menu-item></router-link>
                        <router-link tag="span" to="/zongcai"><el-menu-item index="4-6">材料分析题</el-menu-item></router-link>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="5">
                        <template slot="title">
                        <span>学院成果管理</span>
                        </template>
                        <el-menu-item-group>
                        <router-link tag="span" to="/xuetong"><el-menu-item index="5-1">同学说</el-menu-item></router-link>
                        <router-link tag="span" to="/xuetongs"><el-menu-item index="5-2">同学感言</el-menu-item></router-link>
                        <router-link tag="span" to="/xueshang"><el-menu-item index="5-3">上课笔记</el-menu-item></router-link>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-menu-item index="10">
                        <span slot="title"><router-link tag="div" to="/order">订单管理</router-link></span>
                    </el-menu-item>
                    <el-submenu index="6">
                        <template slot="title">
                        <span>数据中心</span>
                        </template>
                        <el-menu-item-group>
                        <router-link tag="div" to="/datas"><el-menu-item index="6-1">数据概览</el-menu-item></router-link>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="7">
                        <template slot="title">
                        <span>运营管理</span>
                        </template>
                        <el-menu-item-group>
                        <router-link tag="div" to="/operate"><el-menu-item index="7-1">多人拼团</el-menu-item></router-link>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-menu-item index="8">
                        <span slot="title"><router-link tag="div" to="/user">用户管理</router-link></span>
                    </el-menu-item>
                    <el-menu-item index="9">
                        <span slot="title"><router-link tag="div" to="/guanli">登录账号管理</router-link></span>
                    </el-menu-item>
                    </el-menu>
                </el-col>
              </el-row>
          </div>
          <div style="width:200px;"></div>
          <right></right>
          <keep-alive include="kemian">
          <router-view></router-view>
          </keep-alive>
      </div>
  </div>
</template>
<script>
import right from '@/components/right.vue'

export default {
    components:{
        right
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>

<style>
    .app-1-1{
        width: 150px;
        height: 20px;
        background: #ccc;
        text-align: center;
        line-height: 20px;
        color: #fff;
        border-radius: 5px;
        font-size: 13px;
        margin: 0 auto;
        margin-bottom: 10px;
        
    }
    .app-1{
        position:fixed;
        top:8px;
        left:7px;
        overflow: scroll;
        height: 100%;
    }
    .app-1::-webkit-scrollbar {
        display: none; /* Chrome Safari */
    }
    .el-col-12{
        width: 201px !important;
    }
    .app-1-2{
        width:200px;
        height:25px;
        background: #545c64;
        padding-top: 25px;
    }
</style>
