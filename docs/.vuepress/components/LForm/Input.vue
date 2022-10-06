<script>
  export default {
    data() {
      return {
        formConfig: {
          data: {
            input: null,
            textarea: null,
            readonly: '只读 readonly',
            appendText: null,
          },
          formItem: [
            { comp: 'input', prop: 'input', label: '输入' },
            { comp: 'textarea', prop: 'textarea', label: '文本' },
            { comp: 'readonly', prop: 'readonly', label: '只读' },
            { comp: 'input', appendText: '元', prop: 'appendText', label: '后缀' },
          ],
        },
      }
    },
  }
  </script>
  
  <template>
    <div>
      <LForm v-bind="formConfig" />
      <div style="display: flex;justify-content: center;margin: 20px;">
        {{ formConfig.data }}
      </div>
    </div>
  </template>
  
  <style lang="scss" scoped>
  
  </style>
  