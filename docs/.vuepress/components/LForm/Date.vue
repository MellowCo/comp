<script>
export default {
  data() {
    return {
      formConfig: {
        data: {
          year: null,
          month: null,
          dayToDay: [],
        },
        formItem: [
          { comp: 'year', prop: 'year', label: '年' },
          { comp: 'month', prop: 'month', label: '月' },
          { comp: 'dayToDay', prop: 'dayToDay', label: '起始时间', span:10 },
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
