<template>
  <div class="app-3">
      <div class="app-6">
          <div class="id">
          <div>professionalDesc:</div>
          <div><el-input  style="margin:-5px 0px 0px 10px"  v-model="ee"></el-input></div>
        </div>
        <div class="id">
          <div>professionalName:</div>
          <div><el-input  style="margin:-5px 0px 0px 10px"  v-model="rr"></el-input></div>
        </div>
        <el-button style="margin-left:70px;" class="button" @click="add()" type="primary">添加</el-button>
      </div>
  </div>
</template>

<script>
import qs from "qs"
export default {
    data() {
        return {
            ee:"",
            rr:""
        }
    },
    methods: {
        add(){
            if(this.ee != '' && this.rr != ''){
            let data = qs.stringify({
                professionalName: this.ee,
                professionalDesc: this.rr
            })
            this.axios.post("http://139.9.169.87:8081/examsystem/addProfessional",data,
            {
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
            
        }else{
            this.$message('不能为空!!!!!!!');
        }
    },
}
}
</script>

<style>

</style>