<script>
  export default {
  data() {
    return {
      formConfig: {
        data: {
          num: null,
        },
        formItem: [
          {
            comp: 'slider',
            prop: 'num',
            label: 'num',
            range: true,
            showStops: true,
            max: 10,
            span: 12,
          },
        ],
      },
    }
  }
}
</script>

<template>
  <div>
    <LForm ref="formRef" v-bind="formConfig" />
    <div style="display: flex; justify-content: center; margin: 20px">
      {{ formConfig.data }}
    </div>
  </div>
</template>
  