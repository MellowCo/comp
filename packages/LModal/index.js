import LModal from './src/index'

LModal.install = function(vue){
  vue.component(LModal.name, LModal)
}

export default LModal
