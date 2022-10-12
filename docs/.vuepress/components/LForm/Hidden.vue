
<script>
export default {
  data(){
    return {
      formConfig: {
        data: {
          input: null,
          textarea: null,
        },
        formItem: [
          { comp: 'input', prop: 'input', label: '输入' },
          { comp: 'textarea', prop: 'textarea', label: '文本', hidden: true },
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
