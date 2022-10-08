import LContent from './src/index'

LContent.install = function(vue){
  vue.component(LContent.name, LContent)
}

export default LContent
