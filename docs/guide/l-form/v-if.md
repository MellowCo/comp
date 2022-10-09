# 控制表单项显示

## 单个判断条件
单个判断条件

通过 `vIf` 中 `prop` 和 `value` 字段，指定判断条件

<demo-block>
<LForm-Vif slot="source"/>
<<< @/.vuepress/components/LForm/Vif.vue
</demo-block>


## 多个判断条件
多个判断条件

通过 `vIf` 中 `props` 和 `values` 字段，指定多个判断条件

`flag` 为 `&&` 或 `||` 指定判断逻辑

<demo-block>
<LForm-Vifs slot="source"/>
<<< @/.vuepress/components/LForm/Vifs.vue
</demo-block>


## 自定义判断条件
设置 `vIf` 为函数，在函数中范围 boolean ，控制表单项显示

<demo-block>
<LForm-VifFunc slot="source"/>
<<< @/.vuepress/components/LForm/VifFunc.vue
</demo-block>


## vElse

<demo-block>
<LForm-VElse slot="source"/>
<<< @/.vuepress/components/LForm/VElse.vue
</demo-block>
