<template>
  <el-dialog :visible.sync="_show" v-bind="dialogConfig" v-on="$listeners">
    <LContent ref="contentRef" v-bind="contentConfig">
      <template #btn>
        <el-button
          v-if="showSelect"
          size="mini"
          type="primary"
          icon="el-icon-check"
          @click="getSelect"
          >选择</el-button
        >
      </template>
    </LContent>
  </el-dialog>
</template>

<script>
import { defaultDialogConfig } from './config';
import { errorNotify } from '../../utils';

export default {
  name: 'LTableModal',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    contentConfig: {
      type: Object,
      default: () => ({})
    },
  },
  computed: {
    _show: {
      get(){
        return this.show
      },
      set(v){
        this.$emit('update:show', v)
      }
    },
    dialogConfig(){
      return { ...defaultDialogConfig, ...this.$attrs }
    },
    showSelect(){
      const { columns } = this.contentConfig.tableConfig
      return columns.some(({ type }) => [ 'checkbox', 'radio' ].includes(type))
    },
    isRadio(){
      const { columns } = this.contentConfig.tableConfig
      return columns.some(({ type }) => type === 'radio')
    }
  },
  methods: {
    query(page, size){
      this.$nextTick(() => {
        this.$refs.contentRef.query(page, size)
      })
    },
    getSelect(){
      if(this.isRadio){
        this.getRadio()
      }else{
        this.getCheckbox()
      }

      this._show = false
    },
    getRadio(){
      const tableRef = this.$refs.contentRef.getTableRef()
      const selects = tableRef.method('getRadioRecord')

      if(!selects){
        errorNotify('请选择数据')
        return
      }

      this.$emit('onSelect', selects)
      tableRef.method('clearRadioRow')
    },
    getCheckbox(){
      const tableRef = this.$refs.contentRef.getTableRef()
      const selects = tableRef.method('getCheckboxRecords')

      if(selects.length === 0){
        errorNotify('请选择数据')
        return
      }

      this.$emit('onSelect', selects)
      tableRef.method('clearCheckboxRow')
    }
  },
}
</script>

<style lang="scss" scoped>

</style>
