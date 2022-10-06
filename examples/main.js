import Vue from 'vue'
import LComp from '../packages'

import Element from 'element-ui'
import App from './App.vue'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

Vue.use(Element)
Vue.use(LComp)

new Vue({
  render: h => h(App),
})
  .$mount('#app')
