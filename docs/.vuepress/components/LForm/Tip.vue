
<script>
export default {
  data(){
    return {
      formConfig: {
        data: {
          input: null,
        },
        formItem: [
          { comp: 'input', prop: 'input', label: '输入', tip: '这是一段帮助文字啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊' },
        ],
      },
    }
  },
}
</script>

<template>
  <div>
    <LForm v-bind="formConfig" />
    <div style="display: flex; justify-content: center; margin: 20px">
      {{ formConfig.data }}
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>
