<template>
  <div class="app-3" style="width:970px;height:500px;background:#fff;padding-top:30px;padding-left:40px;">
      <input type="text" v-model="list.date"/>
      <input type="text" v-model="list.name"/>
      <input type="text" v-model="list.address"/>
      <input type="text" v-model="list.time"/>
      <input type="text" v-model="list.zhang"/>
      <input type="text" v-model="list.thue"/>
      <input type="text" v-model="list.lei"/>
      <input type="text" v-model="list.much"/>
      <input type="text" v-model="list.tian"/>      
      <div><button @click="tj()">添加</button></div>
  </div>
</template>

<script>
export default {
    name:"aaa",
    data() {
        return {
            list:'',
            index:''
        }
    },
    created(){
        this.list = this.$route.params.list
        this.index = this.$route.params.index
    
},
methods:{
    tj(){
        this.$router.push({
            name:"kemian",
            params:{
                list:this.list
            }
        })
    }
}
}
</script>

<style>

</style>