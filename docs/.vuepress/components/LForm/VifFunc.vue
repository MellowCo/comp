<script>
  export default {
    data() {
      return {
        formConfig: {
          data: {
            show: null,
          },
          formItem: [
            { comp: 'select', prop: 'show', label: '控制显示', span: 6 },
            {
              comp: 'input',
              prop: 'i1',
              label: 'input1',
              span: 6,
              vIf: this.showFunction,
            }
          ],
          options: {
            show: [
              { label: '显示 input1', value: 1 },
              { label: '显示xxx', value: 2 },
            ],
          },
        },
      }
    },
    methods: {
      showFunction() {
        return this.formConfig.data.show === 1
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
  
  