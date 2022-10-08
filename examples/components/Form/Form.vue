<script>
import { requireRule } from '../../../packages'

export default {
  data(){
    return {
      formConfig: {
        data: {
          name: '',
          region: '',
          date: [],
          delivery: false,
          type: [],
          resource: '',
          desc: '',
        },
        formItem: [
          {
            comp: 'input',
            prop: 'name',
            label: '活动名称',
            span: 24,
            rules: [
              requireRule('请输入活动名称'),
            ],
          },
          {
            comp: 'select',
            prop: 'region',
            label: '活动区域',
            span: 24,
            rules: [
              requireRule('请选择活动区域'),
            ],
          },
          {
            comp: 'dayToDay',
            prop: 'date',
            label: '活动时间',
            span: 24,
            rules: [
              requireRule('请选择活动时间'),
            ],
          },
          {
            comp: 'switch',
            prop: 'delivery',
            label: '即时配送',
            span: 24,
          },
          {
            comp: 'checkbox',
            prop: 'type',
            label: '活动性质',
            span: 24,
            rules: [
              requireRule('请至少选择一个活动性质'),
            ],
          },
          {
            comp: 'radio',
            prop: 'resource',
            label: '特殊资源',
            span: 24,
            rules: [
              requireRule('请选择活动资源'),
            ],
          },
          {
            comp: 'textarea',
            prop: 'desc',
            label: '活动形式',
            span: 24,
            rules: [
              requireRule('请填写活动形式'),
            ],
          },
        ],
        options: {
          region: [
            { label: '区域一', value: 'shanghai' },
            { label: '区域二', value: 'beijing' },
          ],
          type: [
            { label: '美食/餐厅线上活动', value: 0 },
            { label: '地推活动', value: 1 },
            { label: '线下主题活动', value: 2 },
            { label: '单纯品牌曝光', value: 3 },
          ],
          resource: [
            { label: '线上品牌商赞助', value: 0 },
            { label: '线下场地免费', value: 1 },
          ],
        },
      },
    }
  },
  methods: {
    async valid(){
      await this.$refs.formRef.validate()
      this.$message.success('校验成功')
    },
    resetFields(){
      this.$refs.formRef.resetFields()
    },
    clearValidate(){
      this.$refs.formRef.clearValidate()
    },
  },
}
</script>

<template>
  <div>
    <LForm ref="formRef" v-bind="formConfig" />

    <el-button type="primary" @click="valid"> 校验 </el-button>

    <el-button type="warning" @click="clearValidate"> 清楚校验 </el-button>

    <el-button type="danger" @click="resetFields"> 重置 </el-button>

    <div style="padding: 30px">
      {{ formConfig.data }}
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>
