<script>
  export default {
  data() {
    return {
      formConfig: {
        config:{
          size: 'medium',
          labelWidth: '200px',
        },
        data: {
          name: null,
          info: null,
        },
        formItem: [
          { comp: 'input', prop: 'name', label: '姓名', span: 12 },
          { comp: 'textarea', prop: 'info', label: '简述', span: 12 },
        ],
      },
    }
  }
}
</script>

<template>
  <div>
    <LForm ref="formRef" v-bind="formConfig" />
    <div style="display: flex;justify-content: center;margin: 20px;">
      {{ formConfig.data }}
    </div>
  </div>
</template>
  