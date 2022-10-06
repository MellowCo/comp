<script>
  export default {
    data() {
      return {
        formConfig: {
          data: {
            resource: null,
          },
          formItem: [
            { comp: 'radio', prop: 'resource', label: '特殊资源', span: 12 },
          ],
          options: {
            resource: [
              { label: '线上品牌商赞助', value: 0 },
              { label: '线下场地免费', value: 1 },
            ],
          },
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
  
  