import Vue from 'vue'  
import {RouterMount,createRouter} from 'uni-simple-router'  
let vm = new Vue()
const router = createRouter({  
 platform: process.env.VUE_APP_PLATFORM,  
 routes: [...modules]  
})  
router.beforeEach((to, from, next) => {  
  let tmp = vm.getDate('user')
  if (!tmp && to.name !== 'login' && to.name !== 'Register') {
    Toast.succeed('您需要先登录哦！', 1500)
    next({ path: '/login' })
    return
  }
  next()
next()  
})  
router.afterEach((to, from) => {  
})  
Vue.use(router);  
export {  
router,  
RouterMount  
}