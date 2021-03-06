import Vue from 'vue'
import Router from 'vue-router'
import home from '../components/home'
import listOrder from '../views/listOrder'
import userManage from '../views/userManage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
      children:[
        {
          path:"/listOrder",
          name:"listOrder",
          component:listOrder
        },{
          path:"/userManage",
          name:"userManage",
          component:userManage
        }
      ]
    }
  ]
})
