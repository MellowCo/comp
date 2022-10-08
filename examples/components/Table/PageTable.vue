<script>

function fetchList({ page, size }){
  const data = {
    list: Array.from({ length: 10 })
      .map(() => ({
        date: `2016-05-02 page: ${page}`,
        name: `王小虎 size: ${size}`,
        address: '上海市普陀区金沙江路 1518 弄',
      })),
    total: 100
  }
  console.log(data);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data)
    }, 2000);
  })
}

export default {
  data(){
    return {
      tableConfig: {
        data: [],
        columns: [
          { field: 'date', title: '日期' },
          { field: 'name', title: '姓名' },
          { field: 'address', title: '地址' },
        ],
        total: 0,
        fetch: this.queryList
      },
    }
  },
  mounted(){
    this.$refs.tableRef.query();
  },
  methods: {
    async queryList(page, size){
      const { list, total } = await fetchList({
        page, size
      })
      this.tableConfig.data = list
      this.tableConfig.total = total
    }
  },
}
</script>

<template>
  <div>
    <LTable ref="tableRef" v-bind="tableConfig" />
  </div>
</template>

