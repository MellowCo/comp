# 参数配置

## LContent Attributes
| 参数    | 说明     | 类型    | 可选值      | 默认值 |
|---------|----------|---------|-------------|--------|
| formConfig | [LForm Attributes](/guide/l-form/options.md#lform-attributes) | object | - | - |
| tableConfig | [LTable Attributes](/guide/l-table/options.md#ltable-attributes) | object| - |-|
| ajax | 搜索和导出的ajax方法 | {query:()=>{},output:()=>{}} | - | - |
| btnSpan | 操作按钮占据的列数 | number | - | 6 |
| tableSlots | 表格插槽 | string[] | - | [] |

## LContent Methods
| 方法名    | 说明     | 参数    |
|---------|----------|---------|
| query | 执行查询方法，[示例](/guide/l-content/use.md) | - |
| getFormRef | 获取form ref | - |
| getTableRef | 获取table ref | - |
