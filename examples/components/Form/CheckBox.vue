<script>
export default {
  data(){
    return {
      formConfig: {
        data: {
          type: [],
        },
        formItem: [
          { comp: 'checkbox', prop: 'type', label: '活动性质', span: 12 },
        ],
        options: {
          type: [
            { label: '美食/餐厅线上活动', value: 0 },
            { label: '地推活动', value: 1 },
            { label: '线下主题活动', value: 2 },
            { label: '单纯品牌曝光', value: 3 },
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

