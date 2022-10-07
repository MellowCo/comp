import Vue from 'vue'
import LComp from '../packages'

import Element from 'element-ui'
import App from './App.vue'
import 'element-ui/lib/theme-chalk/index.css'

import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'


Vue.config.productionTip = false

Vue.use(Element)
Vue.use(LComp)
Vue.use(VXETable)


new Vue({
  render: h => h(App),
})
  .$mount('#app')
