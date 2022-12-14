# 基本使用

<demo-block>
<LTable-Base slot="source"/>
<<< @/.vuepress/components/LTable/Base.vue
</demo-block>

## 自定义插槽
在 `columns` 中 设置 `slotName` 指定插槽

<demo-block>
<LTable-Slot slot="source"/>
<<< @/.vuepress/components/LTable/Slot.vue
</demo-block>


## 操作按钮
`type` 为 `btn`, 在 `columns` 中 设置 `btns` 生成按钮

<demo-block>
<LTable-Btns slot="source"/>
<<< @/.vuepress/components/LTable/Btns.vue
</demo-block>

## 图片
`type` 为 `img`, 通过 `imgW`,`imgH` 调整宽高

<demo-block>
<LTable-Img slot="source"/>
<<< @/.vuepress/components/LTable/Img.vue
</demo-block>

## 网络请求分页
设置 `fetch` 网络请求方法

使用 `query` 方法 触发表格请求

<demo-block>
<LTable-Page slot="source"/>
<<< @/.vuepress/components/LTable/Page.vue
</demo-block>

## vxe-table methods

<demo-block>
<LTable-Method slot="source"/>
<<< @/.vuepress/components/LTable/Method.vue
</demo-block>
