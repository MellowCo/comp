<script>
export default {
  data(){
    return {
      tableConfig: {
        data: [  
          {
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄',
          }, 
          {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄',
          }, 
          {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄',
          }, 
        ],
        columns: [
          { field: 'date', title: '日期' },
          { field: 'name', title: '姓名' },
          { field: 'address', title: '地址' },
        ],
      },
    }
  },
}
</script>

<template>
  <div>
    <LTable v-bind="tableConfig" />
  </div>
</template>
