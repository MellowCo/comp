import LTable from './src/index'

LTable.install = function(vue){
  vue.component(LTable.name, LTable)
}

export default LTable
