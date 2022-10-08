<script>
import { successMessage } from '@meoc/comp'
export default {
  data(){
    return {
      tableConfig: {
        data: [ {
          date: '2016-05-02',
          name: '王小虎1',
          address: '上海市普陀区金沙江路 1518 弄',
        }, {
          date: '2016-05-04',
          name: '王小虎2',
          address: '上海市普陀区金沙江路 1517 弄',
        }, {
          date: '2016-05-04',
          name: '王小虎3',
          address: '上海市普陀区金沙江路 1517 弄',
        }, {
          date: '2016-05-04',
          name: '王小虎4',
          address: '上海市普陀区金沙江路 1517 弄',
        } ],
        columns: [
          { type: 'checkbox', width: '50' },
          { field: 'date', title: '日期' },
          { field: 'name', title: '姓名' },
          { field: 'address', title: '地址' },
        ],
      },
    }
  },
  methods: {
    toggle(){
      this.$refs.tableRef.method('toggleCheckboxRow', this.tableConfig.data[1])
    },
    setCheckbox(){
      this.$refs.tableRef.method('setCheckboxRow', [ this.tableConfig.data[2], this.tableConfig.data[3] ], true)
    },
    setAll(){
      this.$refs.tableRef.method('setAllCheckboxRow', true)
    },
    clearCheck(){
      this.$refs.tableRef.method('clearCheckboxRow')
    },
    getCheck(){
      const data = this.$refs.tableRef.method('getCheckboxRecords')
      successMessage(JSON.stringify(data))
    }
  }
}
</script>

<template>
  <div>
    <div style="margin-bottom: 20px">
      <el-button @click="toggle" size="mini">切换第二行选中</el-button>

      <el-button size="mini" @click="setCheckbox">设置第三、四行选中</el-button>

      <el-button size="mini" @click="setAll">设置所有行选中</el-button>
      <el-button size="mini" @click="clearCheck">清除所有行选中</el-button>
      <el-button size="mini" @click="getCheck">获取选中</el-button>
    </div>
    <LTable ref="tableRef" v-bind="tableConfig"> </LTable>
  </div>
</template>
