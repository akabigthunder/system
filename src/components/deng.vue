<template>
  <div class="app1">
    <div class="app1-1">
      <div class="logo">LOGO</div>
      <div class="zang">账号登录</div>
      <div class="input">
        <el-input
          v-model="zhanghao"
          required
          style="font-size:12px;"
          placeholder="请输入账号"
          prefix-icon="el-icon-user"
        ></el-input>
        <el-input
          v-model="pwd"
          type="password"
          required
          style="margin-top:15px;font-size:12px;"
          placeholder="请输入登录密码"
          prefix-icon="el-icon-unlock"
        ></el-input>
        <el-button
          :plain="true"
          type="primary"
          @click="tol"
          style="width:300px;margin-top:15px;font-size:12px;"
        >登录</el-button>
        <div class="ji">
          <input type="checkbox" />
          <span>记住登录状态</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      zhanghao: "",
      pwd: ""
    };
  },
  methods: {
    tol() {
      if(this.zhanghao != '' || this.pwd != ''){
      let that = this;
      this.$axios
        .post(
          "http://139.9.169.87:8081/examsystem/login?username=" +
            that.zhanghao +
            "&password=" +
            that.pwd
        )
        .then(res => {
          console.log(res.data);
          if (res.data.success){ 
            sessionStorage.setItem("token", res.data.data.token);
            this.$router.push({
              path: "/kemian"
            });
          }
        });
      }else{
         this.$message('账号密码不能为空');
      }

      // if(this.zhanghao != '' || this.pwd != ''){
      //     if(this.zhanghao == 'thunder' && this.pwd == '1234567'){
      //         this.$router.push({
      //             path:'/kemian'
      //         })
      //     }else{
      //         this.$message('账号或密码不正确');
      //     }
      // }else{
      //     this.$message('账号密码不能为空');
      // }
    }
  }
};
</script>

<style>
body {
  height: 550px;
  background: #e6e6e6;
}
.app1 {
  padding-top: 80px;
  width: 100%;
  height: 100%;
  background: #e6e6e6;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}
.app1-1 {
  width: 350px;
  height: 400px;
  background: #fff;
  border-radius: 10px;
  margin: 0 auto;
}
.logo {
  width: 100px;
  height: 100px;
  border-radius: 100%;
  background: #fff;
  color: rgb(180, 180, 180);
  text-align: center;
  line-height: 100px;
  font-weight: bold;
  margin: 0 auto;
  position: relative;
  top: -50px;
}
.zang {
  color: rgb(47 163 245);
  width: 300px;
  height: 30px;
  text-align: center;
  border-bottom: 1px solid rgb(47 163 245);
  margin: 0 auto;
  margin-top: -30px;
  font-weight: bold;
  font-size: 13px;
}
.input {
  width: 300px;
  margin: 0 auto;
  margin-top: 20px;
}
.ji {
  font-size: 12px;
  margin-top: 10px;
}
.ji span {
  color: #ccc;
  position: relative;
  left: 6px;
  top: -2px;
}
</style>