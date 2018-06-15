import Vue from 'vue'
import Router from 'vue-router'
import classify from "../components/classify/classify.vue"
import index from '../components/indexNav.vue'
import news from '../components/news/news'
import message from '../components/message/message'
import newsReady from '../components/newsReady/newsReady'
import address from '../components/address/address'
import registerCompany from '../components/registerCompany/registerCompany'
import keepAccount from '../components/keepAccount/keepAccount'
import TrademarkRegister from '../components/TrademarkRegister/TrademarkRegister'
import businessChange from '../components/businessChange/businessChange'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/classify',
      name: 'classify',
      component: classify
    },
    {
        path: '/news',
        name: 'news',
        component: news
    },
    {
        path: '/message',
        name: 'message',
        component: message
    },
    {
      path: '/newsReady',
      name: 'newsReady',
      component: newsReady
  },
  {
    path: '/registerCompany',
    name: 'registerCompany',
    component: registerCompany
},
{
  path: '/keepAccount',
  name: 'keepAccount',
  component: keepAccount
},
{
  path: '/TrademarkRegister',
  name: 'TrademarkRegister',
  component: TrademarkRegister
},
{
  path: '/businessChange',
  name: 'businessChange',
  component: businessChange
},
  {
    path: '/address',
    name: 'address',
    component: address
},
    {
      // 初始化重定向到index页面
      path:'*',
      redirect:"/index",
    }
  ]
})