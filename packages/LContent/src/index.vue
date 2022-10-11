<template>
  <div>
    <LForm ref="formRef" v-bind="formConfig">
      <template #end>
        <el-col :span="btnSpan">
          <div
            style="display: flex; justify-content: center; margin-bottom: 18px"
          >
            <el-button
              v-if="showSearchBtn"
              :loading="searchLoading"
              size="mini"
              type="primary"
              icon="el-icon-search"
              @click="onSearch"
              >搜索</el-button
            >
            <el-button
              v-if="showOutPutBtn"
              :loading="outputLoading"
              size="mini"
              icon="el-icon-upload2"
              type="warning"
              @click="onOutPut"
              >导出</el-button
            >
            <el-button
              v-if="showSearchBtn"
              size="mini"
              icon="el-icon-refresh"
              @click="onReset"
              >重置</el-button
            >

            <slot name="btn"></slot>
          </div>
        </el-col>
      </template>
    </LForm>
    <slot name="center"></slot>
    <LTable ref="tableRef" v-bind="tableConfig" :fetch="search"></LTable>
  </div>
</template>

<script>
import { successMessage } from '../../utils';


export default {
  name: 'LContent',
  props: {
    formConfig: {
      type: Object,
      default: () => ({})
    },
    tableConfig: {
      type: Object,
      default: () => ({})
    },
    btnSpan: {
      type: Number,
      default: 6
    },
    ajax: {
      type: Object,
      default: () => ({
        query: null,
        output: null
      })
    }
  },
  data(){
    return {
      searchLoading: false,
      outputLoading: false
    }
  },
  computed: {
    showSearchBtn(){
      return this.ajax.query 
    },
    showOutPutBtn(){
      return this.ajax.output
    }
  },
  methods: {
    query(){
      this.$refs.tableRef.query()
    },
    async search(page, size){
      try {
        this.searchLoading = true
        await this.$refs.formRef.validate()
        await this.ajax.query(page, size)
      } finally {
        this.searchLoading = false
      }
    },
    onSearch(){
      this.$refs.tableRef.query(1)
    },
    async onOutPut(){
      try {
        this.outputLoading = true
        await this.$refs.formRef.validate()
        await this.ajax.output()
        successMessage('导出成功')
      } finally {
        this.outputLoading = false
      }
    },
    onReset(){
      this.$refs.formRef.resetFields()
    },
    getFormRef(){
      return this.$refs.formRef
    },
    getTableRef(){
      return this.$refs.tableRef
    }
  },
}
</script>

<style lang="scss" scoped>

</style>
