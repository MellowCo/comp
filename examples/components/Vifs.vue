<script>
export default {
  data(){
    return {
      formConfig: {
        data: {
          show1: null,
          show2: null,
        },
        formItem: [
          { comp: 'select', prop: 'show1', label: '条件1', span: 6 },
          { comp: 'select', prop: 'show2', label: '条件2', span: 6 },
          {
            comp: 'input',
            prop: 'i1',
            label: 'input1',
            span: 6,
            vIf: {
              // 当 show1 = 1 而且 show2 = 2 时 显示
              props: [ 'show1', 'show2' ],
              values: [ 1, 2 ],
              flag: '&&',
            },
          },
          {
            comp: 'input',
            prop: 'i2',
            label: 'input2',
            span: 6,
            vIf: {
              // 当 show1 = 2 或者 show2 = 1 时 显示
              props: [ 'show1', 'show2' ],
              values: [ 2, 1 ],
              flag: '||',
            },
          },
        ],
        options: {
          show1: [
            { label: '显示 input1 条件1', value: 1 },
            { label: '显示 input2', value: 2 },
          ],
          show2: [
            { label: '显示 input2', value: 1 },
            { label: '显示 input1 条件2', value: 2 },
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

