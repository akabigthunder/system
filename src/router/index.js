import Vue from 'vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import deng from '@/components/deng.vue'
import kemian from '@/components/kemian.vue'
import kejing from '@/components/kejing.vue'
import zongkao from '@/components/zongkao.vue'
import zongli from '@/components/zongli.vue'
import zongmo from '@/components/zongmo.vue'
import zongxuan from '@/components/zongxuan.vue'
import zongjian from '@/components/zongjian.vue'
import zongcai from '@/components/zongcai.vue'
import xuetong from '@/components/xuetong.vue'
import xuetongs from '@/components/xuetongs.vue'
import xueshang from '@/components/xueshang.vue'
import order from '@/components/order.vue'
import datas from '@/components/datas.vue'
import operate from '@/components/operate.vue'
import user from '@/components/user.vue'
import guanli from '@/components/guanli.vue'
import mianlook from '@/components/mianlook.vue'
import kmtian from '@/components/kmtian.vue'
import aa from '@/components/aa.vue'
import ww from '@/components/ww.vue'
import tian from '@/components/tian.vue'
import shan from '@/components/shan.vue'

Vue.use(ElementUI);
Vue.use(VueRouter)

  const routes = [
    {
      path: '/deng',
      name: 'deng',
      component: deng,
    },
    {
      path: '/kemian',
      name: 'kemian',
      component: kemian
    },
    {
      path: '/kejing',
      name: 'kejing',
      component: kejing
    },
    {
      path: '/zongkao',
      name: 'zongkao',
      component: zongkao
    },
    {
      path: '/zongli',
      name: 'zongli',
      component: zongli
    },
    {
      path: '/zongmo',
      name: 'zongmo',
      component: zongmo
    },
    {
      path: '/zongxuan',
      name: 'zongxuan',
      component: zongxuan
    },
    {
      path: '/zongjian',
      name: 'zongjian',
      component: zongjian
    },
    {
      path: '/zongcai',
      name: 'zongcai',
      component: zongcai
    },
    {
      path: '/xuetong',
      name: 'xuetong',
      component: xuetong
    },
    {
      path: '/xuetongs',
      name: 'xuetongs',
      component: xuetongs
    },
    {
      path: '/xueshang',
      name: 'xueshang',
      component: xueshang
    },
    {
      path: '/order',
      name: 'order',
      component: order
    },
    {
      path: '/datas',
      name: 'datas',
      component: datas
    },
    {
      path: '/operate',
      name: 'operate',
      component: operate
    },
    {
      path: '/user',
      name: 'user',
      component: user
    },
    {
      path: '/guanli',
      name: 'guanli',
      component: guanli
    },
    {
      path: '/mianlook',
      name: 'mianlook',
      component: mianlook
    },
    {
      path: '/kmtian',
      name: 'kmtian',
      component: kmtian
    },
    {
      path: '/aa',
      name: 'aa',
      component: aa
    },
    {
      path: '/ww',
      name: 'ww',
      component: ww
    },
    {
      path: '/tian',
      name: 'tian',
      component: tian
    },
    {
      path: '/shan',
      name: 'shan',
      component: shan
    }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
