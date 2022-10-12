# 组件使用

## DatePicker 日期选择器
对 [DatePicker](https://element.eleme.cn/#/zh-CN/component/date-picker) 默认配置 

`comp` 为 `month`，生成月选择器  

`comp` 为 `year`，生成年选择器  

`comp` 为 `dayToDay`，生成选择日期范围  

<demo-block>
<LForm-Date slot="source"/>
<<< @/.vuepress/components/LForm/Date.vue
</demo-block>

## Input 输入框
`comp` 为 `input` 和 `el-input`，生成 Input 输入框，`input` 有默认配置

`comp` 为 `textarea`，生成 textarea 输入框   

`comp` 为 `readonly`，生成只读的 Input 输入框   

添加`appendText`，生成带后缀的 Input 输入框  

<demo-block>
<LForm-Input slot="source"/>
<<< @/.vuepress/components/LForm/Input.vue
</demo-block>

## Select 选择器
`comp` 为 `select` 和 `el-select`，生成 Select 选择器，`select` 有默认配置

设置 `options` 字段配置下拉数据，与 `prop` 字段关联

使用 `optionLabel` 和 `optionValue`，自定义label，value字段，

<demo-block>
<LForm-Select slot="source"/>
<<< @/.vuepress/components/LForm/Select.vue
</demo-block>

## Checkbox 多选框
`comp` 为 `checkbox` 和 `el-checkbox-group`，生成 Checkbox 多选框

设置 `options` 字段配置多选数据，与 `prop` 字段关联

使用 `optionLabel` 和 `optionValue`，自定义label，value字段，

<demo-block>
<LForm-CheckBox slot="source"/>
<<< @/.vuepress/components/LForm/CheckBox.vue
</demo-block>

## Radio 单选框
`comp` 为 `radio` 和 `el-radio-group`，生成 Radio 单选框

设置 `options` 字段配置多选数据，与 `prop` 字段关联

使用 `optionLabel` 和 `optionValue`，自定义 Radio 显示的label，value字段，

<demo-block>
<LForm-Radio slot="source"/>
<<< @/.vuepress/components/LForm/Radio.vue
</demo-block>

## Switch 开关

<demo-block>
<LForm-Switch slot="source"/>
<<< @/.vuepress/components/LForm/Switch.vue
</demo-block>


## Slider 开关

<demo-block>
<LForm-Slider slot="source"/>
<<< @/.vuepress/components/LForm/Slider.vue
</demo-block>

## slot 自定义插槽

<demo-block>
<LForm-Slot slot="source"/>
<<< @/.vuepress/components/LForm/Slot.vue
</demo-block>


## 帮助信息

<demo-block>
<LForm-Tip slot="source"/>
<<< @/.vuepress/components/LForm/Tip.vue
</demo-block>
