<script>
  export default {
    data() {
      return {
        formConfig: {
          data: {
            value: null
          },
          formItem: [
            { comp: 'slot', slotName:'mySlot', label: '插槽' },
          ],
        },
      }
    },
  }
  </script>
  
  <template>
    <div>
      <LForm v-bind="formConfig">
        <template #mySlot>
          <div style="color:red">这个一个自定义slot</div>
        </template>
      </LForm>
      <div style="display: flex;justify-content: center;margin: 20px;">
        {{ formConfig.data }}
      </div>
    </div>
  </template>
