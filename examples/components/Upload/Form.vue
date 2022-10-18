<script>
export default {
  data(){
    return {
      formConfig: {
        data: {
          text: '',
          imgs: []
        },
        formItem: [
          {
            comp: 'input',
            prop: 'text',
            label: 'text',
            span: 6,
          },
          {
            comp: 'upload',
            prop: 'imgs',
            label: 'imgs',
            span: 6,
            action: '/api/xxxxxx',
            limit: 5
          }
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

