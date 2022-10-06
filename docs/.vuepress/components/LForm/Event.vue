<script>
  import { errorNotify, successMessage, successNotify } from '@meoc/comp'
  
  export default {
    data() {
      return {
        formConfig: {
          data: {
            value: null,
          },
          formItem: [
            {
              comp: 'input',
              prop: 'value',
              label: 'event',
              span: 12,
              handle: {
                focus: this.handleEventFocus,
                input: this.handleEventInput,
                clear: this.handleEventClear,
                blur: this.handleEventBlur,
              },
              config:{
                placeholder: "focus input clear blur 事件监听"
              }
            },
          ],
  
        },
      }
    },
    methods: {
      handleEventFocus() {
        errorNotify('event focus')
      },
      handleEventInput(e) {
        successMessage(`event input ${e}`)
      },
      handleEventClear() {
        successNotify('event clear')
      },
      handleEventBlur(){
        successNotify('event blur')
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
  
  