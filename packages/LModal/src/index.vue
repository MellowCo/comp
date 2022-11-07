<template>
  <el-dialog :visible.sync="_show" v-bind="dialogConfig" v-on="$listeners">
    <slot></slot>
    <template #footer>
      <div v-if="showFooter">
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
      </div>
    </template>
  </el-dialog>
</template>

<script>
import { defaultDialogConfig } from './config';

export default {
  name: 'LModal',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    submit: {
      type: Function,
      default: () => {}
    },
    showFooter: {
      type: Boolean,
      default: true
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
        await this.submit()
        this._show = false
      } finally {
        this.submitLoading = false
      }
    },
  },
}
</script>
