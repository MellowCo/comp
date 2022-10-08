<template>
  <div style="margin: 30px 0">
    <el-button @click="onShow">show modal</el-button>
    <LTableModal
      ref="modalRef"
      :show.sync="show"
      v-bind="modalConfig"
      @open="initTable"
      @onSelect="handleSelect"
    />
  </div>
</template>

<script>
import { successMessage } from '@meoc/comp'

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
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data)
    }, 2000);
  })
}

export default {
  data(){
    return {
      show: false,
      modalConfig: {
        title: '多选',
        contentConfig: {
          formConfig: {
            data: {
              name: '',
              sex: '',
            },
            formItem: [
              { comp: 'input', prop: 'name', label: '姓名' },
              { comp: 'select', prop: 'sex', label: '性别' }
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
              { type: 'checkbox', width: '50' },
              { field: 'date', title: '日期' },
              { field: 'name', title: '姓名' },
              { field: 'address', title: '地址' },
            ],
            total: 0,
          },
          ajax: {
            query: this.queryList,
          }
        }
      }
    }
  },
  methods: {
    onShow(){
      this.show = true
    },
    initTable(){
      this.$refs.modalRef.query(1)
    },
    async queryList(page, size){
      const { list, total } = await fetchList({
        page, size
      })
      this.modalConfig.contentConfig.tableConfig.data = list
      this.modalConfig.contentConfig.tableConfig.total = total
    },
    handleSelect(selects){
      successMessage(selects)
    }
  },
}
</script>

