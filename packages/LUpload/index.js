import LUpload from './src/index'

LUpload.install = function(vue){
  vue.component(LUpload.name, LUpload)
}

export default LUpload
