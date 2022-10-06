<script>
export default {
  data(){
    return {
      formConfig: {
        data: {
          sex: null,
          address: null,
        },
        formItem: [
          { comp: 'select', prop: 'sex', label: '性别' },
          { comp: 'select', prop: 'address', label: '地址', optionLabel: 'key', optionValue: 'val' },
        ],
        options: {
          sex: [
            { label: '男', value: 1 },
            { label: '女', value: 0 },
          ],
          address: [
            { key: '北京', val: 1 },
            { key: '杭州', val: 2 },
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

<style lang="scss" scoped>

</style>
