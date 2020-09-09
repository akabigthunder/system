<template>
  <div>
      <div class="app-2">
        <div class="app-2-1">
          <div>页面导航</div>
          <div>头像</div>
          <div>admin</div>
          <div><router-link to="/deng" tag="span">退出</router-link></div>
        </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
    /* .app-2{
        position: fixed;
        top:8px;
        left:208px;
        z-index:2;
    } */
    .app-2-1{
        display: flex;
        width: 100%;
        height:60px;
        background: #fff;
    }
    .app-2-1 div:nth-child(1){
        margin: 18px;
        color: #b5b5b5;
        font-size: 13px;
    }
    .app-2-1 div:nth-child(2){
        width: 30px;
        height: 30px;
        background: #ccc;
        border-radius: 100%;
        font-size: 10px;
        text-align: center;
        line-height: 30px;
        color: #fff;
        margin: 10px 0px 0px 800px;
    }
    .app-2-1 div:nth-child(3){
        font-size: 12px;
        margin: 15px;
    }
    .app-2-1 div:nth-child(4){
        font-size: 12px;
        margin: 15px;
        color: #808080;
        cursor: pointer;
    }
</style>