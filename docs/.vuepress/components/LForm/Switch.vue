<script>
  export default {
    data() {
      return {
        formConfig: {
          data: {
            delivery: null
          },
          formItem: [
            { comp: 'switch', prop: 'delivery', label: 'ε³ζΆιι' },
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
  
  