<script>
export default {
  data(){
    return {
      tableConfig: {
        data: [ {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
          url: 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg'
        } ],
        columns: [
          { field: 'date', title: '日期' },
          { field: 'name', title: '姓名' },
          { field: 'address', title: '地址' },
          { title: '操作按钮', field: 'url', type: 'img', imgW: '100%', imgH: '150px' },
        ],
      },
    }
  }
}
</script>

<template>
  <div>
    <LTable v-bind="tableConfig"> </LTable>
  </div>
</template>

