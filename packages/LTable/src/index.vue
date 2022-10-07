<script>
import { defaultPageConfig, defaultTableConfig, defaultTableColumnConfig, defaultBtnConfig } from './config'
import { nanoid } from '../../utils'

export default {
  name: 'LTable',
  props: {
    total: {
      type: Number,
      default: undefined
    },
    pageCount: {
      type: Number,
      default: undefined
    },
    pageSize: {
      type: Number,
      default: 15
    },
    pageConfig: {
      type: Object,
      default: () => ({})
    },
    fetch: {
      type: Function,
      default: () => {}
    }
  }, 
  data(){
    return {
      defaultTableConfig, 
      defaultTableColumnConfig,
      defaultPageConfig,
      defaultBtnConfig,
      loading: false,
      currentPage: 1,
      currentPageSize: 15
    }
  },
  computed: {
    tableConfig(){
      const { columns } = this.$attrs
      // 将 slotName 提取到 slots.default 中
      columns.forEach(column => {
        const { slotName, slots, btns } = column

        if(btns){
          // 添加按钮组 slot
          const nanoName = nanoid()
          column.slots = {
            ...slots,
            default: nanoName
          } 

          column.slotName = nanoName
          return
        }
      
        if(slotName){
          column.slots = {
            ...slots,
            default: slotName
          }
        }
      });


      return { ...defaultTableConfig, ...this.$attrs }
    },
    // 生成插槽
    slots(){
      const { columns } = this.tableConfig    

      const slots = []
      columns.forEach(({ slotName, btns }) => {
        slotName && slots.push({ slotName, btns })
      })

      return slots
    }
  },
  created(){
    this.currentPageSize = this.pageSize;
  },
  methods: {
    // 翻页
    async onCurrentChange(currentPage){
      this.currentPage = currentPage
      await this.query()
    },
    async onSizeChange(currentPageSize){
      this.currentPageSize = currentPageSize
      this.currentPage = 1
      await this.query()
    },
    async query(){
      try {
        this.loading = true
        await this.fetch(this.currentPage, this.currentPageSize)
      } finally {
        this.loading = false
      }
    }
  },
}
</script>

<template>
  <div v-loading="loading">
    <vxe-grid class="mytable-scrollbar" v-bind="tableConfig" v-on="$listeners">
      <template
        v-for="({ slotName, btns }, index) in slots"
        #[slotName]="{ row, rowIndex, column }"
      >
        <!-- 按钮组 -->
        <div v-if="btns" :key="index">
          <el-button
            v-for="(btn, bIndex) in btns"
            :key="bIndex"
            @click="btn.click(row)"
            v-bind="{ ...defaultBtnConfig, ...btn }"
            >{{ btn.text }}</el-button
          >
        </div>

        <!-- 自定义插槽 通过 slots 动态生成插槽-->
        <slot
          :name="slotName"
          :row="row"
          :row-index="rowIndex"
          :column="column"
        />
      </template>
    </vxe-grid>

    <div style="margin-top: 24px; text-align: right">
      <el-pagination
        v-bind="{
          total,
          pageCount,
          pageSize,
          ...defaultPageConfig,
          ...pageConfig,
        }"
        :current-page.sync="currentPage"
        @size-change="onSizeChange"
        @current-change="onCurrentChange"
      />
    </div>
  </div>
</template>


<style >
/*滚动条整体部分*/
.mytable-scrollbar ::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}
/*滚动条的轨道*/
.mytable-scrollbar ::-webkit-scrollbar-track {
  background-color: #fff;
}
/*滚动条里面的小方块，能向上向下移动*/
.mytable-scrollbar ::-webkit-scrollbar-thumb {
  border: 1px solid #f1f1f1;
  border-radius: 5px;
  background-color: #bfbfbf;
  box-shadow: inset 0 0 6px rgba(0,0,0,.3);
}
.mytable-scrollbar ::-webkit-scrollbar-thumb:hover {
  background-color: #a8a8a8;
}
.mytable-scrollbar ::-webkit-scrollbar-thumb:active {
  background-color: #787878;
}
/*边角，即两个滚动条的交汇处*/
.mytable-scrollbar ::-webkit-scrollbar-corner {
  background-color: #fff;
}
</style>
