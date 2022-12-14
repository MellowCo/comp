<script >
import { errorNotify, isFunction } from '../../utils'
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
    async validate(){
      try {
        await this.$refs.formRef.validate()
      } catch (e){
        errorNotify('请检查必选项！！！')
        throw new Error('require form')
      }
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
    showItem(item){
      const { vIf, vElse } = item

      if(!vIf && !vElse)
        return true

      return vIf ? this.generateIf(vIf) : !this.generateIf(vElse)
    },
    generateIf(ifOptions){
      if(isFunction(ifOptions))
        return ifOptions()

      if(ifOptions.prop){
        const { prop, value } = ifOptions 
        return this.data[prop] === value
      }

      const { props: _p, values, flag } = ifOptions 

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
      <template v-for="(item, index) in formItem">
        <el-col
          v-if="showItem(item)"
          v-show="!item.hidden"
          :key="index"
          :span="item.span || 6"
        >
          <div
            style="font-size: 20px; font-weight: 700"
            v-if="item.comp === 'title'"
          >
            {{ item.label }}
          </div>

          <el-form-item
            v-else
            :prop="item.prop"
            :label="item.label"
            :rules="item.rules"
            :label-width="item.labelWidth"
            style="width: 100%"
          >
            <!-- 插槽 -->
            <slot v-if="item.comp === 'slot'" :name="item.slotName" />

            <component
              :is="componentsMap[item.comp]"
              v-else
              v-model="data[item.prop]"
              style="width: 100%"
              v-bind="{ ...defaultItemConfig[item.comp], ...item }"
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
                  {{ cItem[item.optionLabel || "label"] }}
                </el-checkbox>
              </template>

              <!-- el-radio -->
              <template v-if="item.comp.includes('radio')">
                <el-radio
                  v-for="(rItem, rIndex) in options[item.prop]"
                  :key="rIndex"
                  :label="rItem[item.optionValue || 'value']"
                >
                  {{ rItem[item.optionLabel || "label"] }}
                </el-radio>
              </template>

              <template v-if="item.appendText" #append>
                {{ item.appendText }}
              </template>
            </component>

            <div style="text-align: left; font-size: 0.75rem" v-if="item.tip">
              {{ item.tip }}
            </div>
          </el-form-item>
        </el-col>
      </template>

      <slot name="end"></slot>
    </el-row>
  </el-form>
</template>

