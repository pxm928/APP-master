import Vue from 'vue'
import Router from 'vue-router'
import Reg from '@/components/Reg'
import Index from '@/components/Index'
import Login from '@/components/Login'
import Personal from '@/components/personal'
import PersonalIndex from '@/components/personal/index'
import PersonalDetails from '@/components/personal/personalDetails'
import EditName from '@/components/personal/editName'
import address from '@/components/personal/address'

import lunbo from '@/components/lunbo'
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/Reg',
      name: 'Reg',
      component: Reg
  },
  {
     path:'/Login',
     name: 'Login',
     component: Login
  },
  {
      path:'/lunbo',
      name:'lonbo',
      component:lunbo
  },
  {
     path:'/Personal',
     name:'personal',
     component:Personal,
     children:[
          {
            path:'index',
            name:'PersonalIndex',
            component:PersonalIndex
          },
           {
             path:'personalDetails',
             name:'personalDetails',
             component:PersonalDetails
          },
          {
            path:'editName',
            name:'editName',
            component:EditName
          },
          {
             path:'address',
             name:'address',
             component:address
          }

      ]
  }/*,
  {
     path:'/personalDetails',
     name:'personalDetails',
     component:personalDetails
  }*/
  // {
  //   path: '/vux',
  //   name: 'VuxDemo',
  //   component: VuxDemo
  // }
  ]
})
