<template>
  <div style="margin: 30px 0">
    <el-button @click="onShow">show modal</el-button>
    <LModal :show.sync="show" v-bind="modalConfig">
      <div style="background-color: skyblue">自定义slot</div>
    </LModal>
  </div>
</template>

<script>
import { successMessage } from '@meoc/comp'

function submitApi(){
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, 2000);
  })
}

export default {
  data(){
    return {
      show: false,
      modalConfig: {
        title: 'slot',
        submit: this.submit,
      }
    }
  },
  methods: {
    onShow(){
      this.show = true
    },
    async submit(){
      await submitApi()
      successMessage('关闭了')
    }
  },
}
</script>
