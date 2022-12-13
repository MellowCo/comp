<template>
  <LContent ref="contentRef" v-bind="contentConfig">
    <template #test="{ row }">
      <el-button type="primary" v-if="row.show" @click="handleClick(row)"
        >导出</el-button
      >
    </template>
  </LContent>
</template>

<script>
function fetchList({ page, size }){
  const data = {
    list: Array.from({ length: 10 })
      .map(() => ({
        date: `2016-05-02 page: ${page}`,
        name: `王小虎 size: ${size}`,
        address: '上海市普陀区金沙江路 1518 弄',
        show: Math.random() > 0.5
      })),
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
        tableConfig: {
          data: [],
          columns: [
            { field: 'date', title: '日期' },
            { field: 'name', title: '姓名' },
            { field: 'address', title: '地址' },
            { field: 'show', title: 'show' },
            { title: '操作按钮', slotName: 'test' }
          ],
          total: 0,
        },
        tableSlots: [ 'test' ],
        ajax: {
          query: this.queryList,
          output: this.outputExcel
        }
      }
    }
  },
  mounted(){
    this.$refs.contentRef.query()
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
    },
    handleClick(row){
      console.log(row);
    }
  },
}
</script>
