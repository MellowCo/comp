<script>
export default {
  data(){
    return {
      formConfig: {
        data: {
          show: 1,
        },
        formItem: [
          { comp: 'select', prop: 'show', label: 'vlse显示', span: 6 },
          {
            comp: 'input',
            prop: 'i1',
            label: 'input1',
            span: 6,
            vElse: {
              prop: 'show', value: 2,
            },
          },
          {
            comp: 'input',
            prop: 'i2',
            label: 'input2',
            span: 6,
            vElse: {
              prop: 'show', value: 1,
            },
          },
        ],
        options: {
          show: [
            { label: '显示 input1', value: 1 },
            { label: '显示 input2', value: 2 },
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
    <div style="display: flex; justify-content: center; margin: 20px">
      {{ formConfig.data }}
    </div>
  </div>
</template>

