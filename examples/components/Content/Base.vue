<template>
  <LContent ref="contentRef" v-bind="contentConfig"></LContent>
</template>

<script>
import { requireRule } from '../../../packages';

function fetchList({ page, size }){
  const data = {
    list: Array(10)
      .fill({
        date: `2016-05-02 page: ${page}`,
        name: `王小虎 size: ${size}`,
        address: '上海市普陀区金沙江路 1518 弄',
      }),
    total: 100
  }

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data)
    }, 2000);
  })
}

function excel(){
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, 2000);
  })
}

export default {
  data(){
    return {
      contentConfig: {
        formConfig: {
          data: {
            name: '',
            sex: '',
          },
          formItem: [
            { comp: 'input', prop: 'name', label: '姓名', rules: requireRule('请填写姓名') },
            { comp: 'select', prop: 'sex', label: '性别', rules: requireRule('请选择性别') }
          ],
          options: {
            sex: [
              { label: '男', value: 1 },
              { label: '女', value: 2 },
            ]
          }
        },
        tableConfig: {
          data: [],
          columns: [
            { field: 'date', title: '日期' },
            { field: 'name', title: '姓名' },
            { field: 'address', title: '地址' },
          ],
          total: 0,
        },
        ajax: {
          query: this.queryList,
          output: this.outputExcel
        }
      }
    }
  },
  mounted(){
    this.$refs.contentRef.query();
  },
  methods: {
    async queryList(page, size){
      const { list, total } = await fetchList({
        page, size
      })
      this.contentConfig.tableConfig.data = list
      this.contentConfig.tableConfig.total = total
    },
    async outputExcel(){
      await excel()
    }
  },
}
</script>

<style lang="scss" scoped>

</style>
