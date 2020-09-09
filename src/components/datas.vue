<template>
  <div class="app-4">
      <div class="app-4-1">
          <div class="app-4-2">
              <div style="width:150px;height:100px;border:0.5px solid #ccc;border-radius:5px;overflow: hidden;">
                  <div style="display:flex;margin:20px 0px 0px 20px;">
                      <div style="font-size:25px;font-weight:bold;">0</div>
                      <div><img width="40px;" style="margin-left:60px;" src="img/2.png"/></div>
                  </div>
                  <div class="jin">今日订单总数</div>
              </div>
              <div style="margin-left:80px;width:150px;height:100px;border:0.5px solid #ccc;border-radius:5px;overflow: hidden;">
                  <div style="display:flex;margin:20px 0px 0px 20px;">
                      <div style="font-size:25px;font-weight:bold;">90.00</div>
                      <div><img width="40px;" style="margin-left:10px;" src="img/2.png"/></div>
                  </div>
                  <div class="jin" style="background:#3295f8">今日订单总数</div>
              </div>
              <div style="margin-left:80px;width:150px;height:100px;border:0.5px solid #ccc;border-radius:5px;overflow: hidden;">
                  <div style="display:flex;margin:20px 0px 0px 20px;">
                      <div style="font-size:25px;font-weight:bold;">0</div>
                      <div><img width="40px;" style="margin-left:60px;" src="img/2.png"/></div>
                  </div>
                  <div class="jin" style="background:#ffcc99">今日订单总数</div>
              </div>
              <div style="margin-left:80px;width:150px;height:100px;border:0.5px solid #ccc;border-radius:5px;overflow: hidden;">
                  <div style="display:flex;margin:20px 0px 0px 20px;">
                      <div style="font-size:25px;font-weight:bold;">0</div>
                      <div><img width="40px;" style="margin-left:60px;" src="img/2.png"/></div>
                  </div>
                  <div class="jin" style="background:#C9C9C9">今日订单总数</div>
              </div>
          </div>
          <div style="margin:60px 0px 0px 80px;font-size:14px;">订单统计</div>
          <div class="kuang">
              <div class="kuang1">
                  <div class="kuang1-1" style="margin-top:0px;">
                      <div>本月订单总数</div>
                      <div>4230</div>
                      <div><span style="color:#50e22c">上升10%</span>同比上月</div>
                  </div>
                  <div class="kuang1-1">
                      <div>本周订单总数</div>
                      <div>342</div>
                      <div><span style="color:#ea944a">下降10%</span>同比上周</div>
                  </div>
                  
              </div>
              <div style="margin-left:20px;"><ve-line :data="chartData" style="width:600px" :settings="chartSettings"></ve-line></div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
data () {
    this.chartSettings = {
      area: true
    }
    return {
      chartData: {
        columns: ['日期', '访问用户'],
        rows: [
          { '日期': '1/1', '访问用户': 1393},
          { '日期': '1/2', '访问用户': 3530},
          { '日期': '1/3', '访问用户': 2923},
          { '日期': '1/4', '访问用户': 1723},
          { '日期': '1/5', '访问用户': 3792 },
          { '日期': '1/6', '访问用户': 4593}
        ]
      }
    }
  }
}
</script>

<style>
    .app-4{
        margin:70px 0px 0px -1020px;
    }
    .app-4-1{
        width: 1007px;
        height: 600px;
        background: #fff;
        padding-top: 30px;
    }
    .jin{
        font-size: 13px;
        width:100%;
        height: 30px;
        color:#fff;
        background: #40ccbfd6;
        margin-top: 17px;
        line-height: 30px;
        text-indent: 55px;
    }
    .app-4-2{
        display: flex;
        justify-content: center;
    }
    .kuang{
        width:850px;
        height:360px;
        border:0.5px solid rgb(218, 216, 216);
        border-radius: 5px;
        margin:30px 0px 0px 80px;
        display: flex;
    }
    .kuang1{
        border-right: 0.5px solid #ccc;
        width: 200px;
        height: 330px;
        padding-top: 30px;
    }
    .kuang1-1{
        font-size:12px;
        margin:20px 0px 0px 30px;
    }
    .kuang1-1 div:nth-child(2){
        font-size:22px;
        font-weight: bold;
    }
    .el-menu-item-group>ul{
        margin-top: -20px;
    }
</style>