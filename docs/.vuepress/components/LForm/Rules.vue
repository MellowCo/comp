<script>
import { requireRule, successMessage } from '@meoc/comp'

export default {
  data() {
    return {
      formConfig: {
        config:{
          rules: {
            info: requireRule("请输入简述")
          }
        },
        data: {
          name: null,
          info: null,
        },
        formItem: [
          { comp: 'input', prop: 'name', label: '姓名', rules: requireRule("请输入姓名") },
          { comp: 'textarea', prop: 'info', label: '简述' },
        ],
      },
    }
  },
  methods: {
    async valid() {
      await this.$refs.formRef.validate()
        successMessage('校验成功')
      },
      resetFields() {
        this.$refs.formRef.resetFields()
      },
      clearValidate() {
        this.$refs.formRef.clearValidate()
      },
  },
}
</script>

<template>
  <div>
    <LForm ref="formRef" v-bind="formConfig" />
    <div style="display: flex; justify-content: center; margin: 20px">
      {{ formConfig.data }}
    </div>

    <div style="display: flex; justify-content: center">
      <el-button type="primary" @click="valid"> 校验 </el-button>

      <el-button type="warning" @click="clearValidate"> 清楚校验 </el-button>

      <el-button type="danger" @click="resetFields"> 重置 </el-button>
    </div>
  </div>
</template>
