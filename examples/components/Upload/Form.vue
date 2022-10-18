<script>
export default {
  data(){
    return {
      formConfig: {
        data: {
          text: '',
          imgs: [
            'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
            'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
          ]
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

