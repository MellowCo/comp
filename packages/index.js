import LForm from './LForm/index'
import LTable from './LTable/index'
import LContent from './LContent/index'
import LFormModal from './LFormModal/index'
import LTableModal from './LTableModal/index'
import LModal from './LModal/index'
import LUpload from './LUpload/index'

const components = {
  LForm,
  LTable,
  LContent,
  LFormModal,
  LTableModal,
  LModal,
  LUpload
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
  LTableModal,
  LModal,
  LUpload
}

export * from './utils'
