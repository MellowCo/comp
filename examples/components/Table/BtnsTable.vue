<script>
import { errorNotify, successMessage } from '../../../packages'
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
          { field: 'date', title: '日期' },
          { field: 'name', title: '姓名' },
          { field: 'address', title: '地址' },
          { title: '操作按钮', type: 'btn',
            btns: [
              {
                text: '删除',
                click: () => errorNotify('删除')
              },
              {
                type: 'primary',
                icon: 'el-icon-edit',
                size: 'medium',
                text: '编辑',
                click: (row) => {
                  successMessage(`编辑，${JSON.stringify(row)}`)
                }
              },
              {
                type: 'danger',
                icon: 'el-icon-edit',
                text: 'func',
                click: () => {
                  this.func()
                }
              }
            ] },
        ],
      },
      show: false
    }
  },
  methods: {
    func(){
      successMessage('methods: func')
    }
  },
}
</script>

<template>
  <div>
    <LTable v-bind="tableConfig"> </LTable>
  </div>
</template>

