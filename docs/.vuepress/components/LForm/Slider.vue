<script>
  export default {
    data() {
      return {
        formConfig: {
          data: {
            value: null
          },
          formItem: [
            { comp: 'slider', prop: 'value', label: 'slider' },
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
  
  