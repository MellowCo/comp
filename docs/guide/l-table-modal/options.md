# 参数配置

## LTableModal Attributes
| 参数    | 说明     | 类型    | 可选值      | 默认值 |
|---------|----------|---------|-------------|--------|
| contentConfig | [LContent Attributes](/guide/l-content/options.md#lcontent-attributes) | object | - | - |
| show | 显示弹出，与 `.sync` 一起使用 | boolean| - |-|
| submit | 表单提交方法 | ()=>{} | - | - |
| 其他参数 | 与 [el-dialog](https://element.eleme.cn/#/zh-CN/component/dialog#attributes) 相同 | - | - | - |

## LTableModal Events
| 事件名称	| 说明	| 回调参数 |
| --------- | ----|-----------|
| onSelect | 点击 `选择按钮` 的回调，当配置 `columns`，`type` 为 `radio` 或 `checkbox` 时显示 `选择按钮` | (selects) => {}|
