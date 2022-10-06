import LForm from './LForm/index'
import LTable from './LTable/index'

const components = {
  LForm,
  LTable,
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
  ...components,
}

export * from './utils'
