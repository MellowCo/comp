<script>
export default {
  data(){
    return {
      tableConfig: {
        data: [ {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
        } ],
        columns: [
          { prop: 'date', label: '日期' },
          { prop: 'name', label: '姓名' },
          { prop: 'address', label: '地址' },
        ],
        showPage: false,
      },
      defaultTableConfig: {
        stripe: true,
        border: true,
        size: 'mini',
        highlightCurrentRow: true,
      },
    }
  },
}
</script>

<template>
  <div>
    <LTable v-bind="tableConfig" />

    <el-table :data="tableConfig.data" v-bind="defaultTableConfig" v-on="$attrs">
      <el-table-column v-for="(column, index) in tableConfig.columns" v-bind="column" :key="index">
        <template
          v-if="column.slotName"
          #default="{ row }"
        >
          <slot
            :row="row"
            :name="column.slotName"
          />
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

