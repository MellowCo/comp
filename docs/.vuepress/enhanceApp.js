import LComp from '@meoc/comp';
import ElementUI from 'element-ui'

import 'element-ui/lib/theme-chalk/index.css'
import './public/css/index.css'

import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'

export default ({
  Vue, // VuePress 正在使用的 Vue 构造函数
}) => {
  Vue.use(ElementUI)
  Vue.use(LComp)
  Vue.use(VXETable)
}
