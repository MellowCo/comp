import LForm from './LForm/index'
import LTable from './LTable/index'
import LContent from './LContent/index'
import LFormModal from './LFormModal/index'
import LTableModal from './LTableModal/index'

const components = {
  LForm,
  LTable,
  LContent,
  LFormModal,
  LTableModal
}

const install = function(Vue){
  for (const key in components){
    const component = components[key]

    // 将组件绑定到Vue上
    Vue.component(component.name, component)
  }
}
export default {
  install,
  LForm,
  LTable,
  LContent,
  LFormModal,
  LTableModal
}

export * from './utils'
