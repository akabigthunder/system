<template>
  <div class="app-3">
      <div class="app-6">
          <div class="id">
          <div>professionalDesc:</div>
          <div><el-input  style="margin:-5px 0px 0px 10px"  v-model="qq"></el-input></div>
        </div>
        <div class="id">
          <div>professionalName:</div>
          <div><el-input  style="margin:-5px 0px 0px 10px"  v-model="ll"></el-input></div>
        </div>
        <el-button style="margin-left:70px;" class="button" @click="upd()" type="primary">修改</el-button>
      </div>
  </div>
</template>

<script>
import qs from "qs"
export default {
    data() {
        return {
            ll:this.$route.params.qq.professionalDesc,
            qq:this.$route.params.qq.professionalName,
        }
    },
    methods:{
        upd(){
            let data = qs.stringify({
                id:this.$route.params.qq.id,
                professionalName: this.ll,
                professionalDesc: this.qq
            })
            this.axios.post("http://139.9.169.87:8081/examsystem/updateProfessional",data,{
                headers:{
                    Accept: "application/json",
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            })
            .then(res=>{
                console.log(res);
                this.$router.push({
                    path:"/zongli"
                })
            })
        }
    }
}
</script>

<style>

</style>