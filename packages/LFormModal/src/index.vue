<template>
  <el-dialog
    :visible.sync="_show"
    v-bind="dialogConfig"
    v-on="$listeners"
    @close="handleClose"
  >
    <slot name="top"></slot>
    <LForm ref="formRef" v-bind="formConfig"></LForm>
    <slot name="bottom"></slot>

    <template #footer>
      <el-button icon="el-icon-close" size="mini" @click="_show = false"
        >取 消</el-button
      >
      <el-button
        :loading="submitLoading"
        icon="el-icon-check"
        size="mini"
        type="primary"
        @click="onSubmit"
        >确 定</el-button
      >
    </template>
  </el-dialog>
</template>

<script>
import { defaultDialogConfig } from './config';

export default {
  name: 'LFormModal',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    formConfig: {
      type: Object,
      default: () => ({})
    },
    submit: {
      type: Function,
      default: () => {}
    }
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
    }
  },
  data(){
    return {
      submitLoading: false
    }
  },
  methods: {
    async onSubmit(){
      try {
        this.submitLoading = true
        await this.$refs.formRef.validate()
        await this.submit()
        this._show = false
      } finally {
        this.submitLoading = false
      }
    },
    handleClose(){
      this.$refs.formRef.resetFields()
    }
  },
}
</script>

<style lang="scss" scoped>

</style>
