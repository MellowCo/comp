<script >
// interface FormItem {
//   /**
//    * 表单data字段
//    */
//   prop: string

//   /**
//    * 表单标签
//    */
//   label: string

//   /**
//    * 表单域标签的的宽度，例如 '50px'
//    */
//   labelWidth: string

//   /**
//    * 表单验证规则
//    */
//   rules: []

//   /**
//    * el-form-item 占几个位置
//    */
//   span: string

//   /**
//    * select option 显示的label字段
//    * @default label
//    */
//   optionLabel: string

//   /**
//    * select option value字段
//    * @default value
//    */
//   optionValue: string

//   /**
//    * 插槽
//    */
//   slotName?: string

//   /**
//    * 表单组件名称
//    */
//   comp: string

//   /**
//    * input append 显示的文本内容
//    * @example 元 %
//    */
//   appendText: string

//   /**
//    * 每项表单组件的设置
//    * el-input
//    */
//   config: any

//   /**
//    * 每项表单组件的事件
//    */
//   handle: {}

//   vIf: IVif | IVifs | IVifFunc
// }

// interface IVif {
//   prop: string
//   value: any
// }

// interface IVifs {
//   props: string[]
//   values: any[]
//   flag: '&&' | '||'
// }

// type IVifFunc = () => Boolean

import { isFunction } from '@meoc/utils'
import { errorNotify } from '../../utils'
import { componentsMap, defaultItemConfig } from './config'

export default {
  name: 'LForm',
  computed: {
    _config(){
      return { inline: false, labelWidth: '80px', ...this.config }
    }
  },
  data(){
    return {
      componentsMap, defaultItemConfig
    }
  },
  props: {
  /**
   * El-Form Attributes
   * @link https://element.eleme.cn/#/zh-CN/component/form
   */
    config: {
      type: Object,
      default: () => ({}),
    },

    /**
   * 表单数据对象
   */
    data: {
      type: Object,
      default: () => ({}),
    },

    /**
   * el-select option数据对象
   */
    options: {
      type: Object,
      default: () => ({}),
    },

    /**
   * el-form-item 配置对象
   */
    formItem: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
  /**
   * 对整个表单进行校验的方法
   * @link https://element.eleme.cn/#/zh-CN/component/form#form-methods
   */
    validate(func){
      this.$refs.formRef.validate((valid) => {
        if(valid)
          func()
        else
          errorNotify('请选择必选项！！！')
      })
    },

    /**
   * 对部分表单字段进行校验的方法
   * @link https://element.eleme.cn/#/zh-CN/component/form#form-methods
   */
    validateField(props, callback){
      this.$refs.formRef.validateField(props, callback)
    },

    /**
   * 对整个表单进行重置，将所有字段值重置为初始值并移除校验结果
   * @link https://element.eleme.cn/#/zh-CN/component/form#form-methods
   */
    clearValidate(props){
      this.$refs.formRef.clearValidate(props)
    },

    /**
   * 移除表单项的校验结果。
   * @link https://element.eleme.cn/#/zh-CN/component/form#form-methods
   */
    resetFields(){
      this.$refs.formRef.resetFields()
    },
    // 是否显示
    generateIf(item){
      const { vIf } = item

      if(!vIf)
        return true

      if(isFunction(vIf))
        return vIf()

      if(vIf.prop){
        const { prop, value } = vIf 
        return this.data[prop] === value
      }

      const { props: _p, values, flag } = vIf 

      const arr = _p.map((prop, index) => {
        return this.data[prop] === values[index]
      })

      if(flag === '&&')
        return arr.every(item => item)
      else
        return arr.some(item => item)
    },
  },
}
</script>

<template>
  <el-form ref="formRef" :model="data" size="mini" v-bind="_config">
    <el-row :gutter="15">
      <template v-for="(item, index) in formItem" >
        <el-col v-if="generateIf(item)" :key="index" :span="item.span || 6">
          <el-form-item :prop="item.prop" :label="item.label" :rules="item.rules" :label-width="item.labelWidth" style="width: 100%">
            <!-- 插槽 -->
            <slot v-if="item.comp === 'slot'" :name="item.slotName" />

            <component
              :is="componentsMap[item.comp]"
              v-else
              v-model="data[item.prop]"
              style="width: 100%"
              v-bind="{ ...defaultItemConfig[item.comp], ...item.config }"
              v-on="item.handle"
            >
              <!-- el-option -->
              <template v-if="item.comp.includes('select')">
                <el-option
                  v-for="(oItem, oIndex) in options[item.prop]"
                  :key="oIndex"
                  :label="oItem[item.optionLabel || 'label']"
                  :value="oItem[item.optionValue || 'value']"
                />
              </template>

              <!-- el-checkbox -->
              <template v-if="item.comp.includes('checkbox')">
                <el-checkbox
                  v-for="(cItem, cIndex) in options[item.prop]"
                  :key="cIndex"
                  :label="cItem[item.optionValue || 'value']"
                >
                  {{ cItem[item.optionLabel || 'label'] }}
                </el-checkbox>
              </template>

              <!-- el-radio -->
              <template v-if="item.comp.includes('radio')">
                <el-radio
                  v-for="(rItem, rIndex) in options[item.prop]"
                  :key="rIndex"
                  :label="rItem[item.optionValue || 'value']"
                >
                  {{ rItem[item.optionLabel || 'label'] }}
                </el-radio>
              </template>

              <template v-if="item.appendText" #append>
                {{ item.appendText }}
              </template>
            </component>
          </el-form-item>
        </el-col>
      </template>
    </el-row>
  </el-form>
</template>

