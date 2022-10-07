# 参数配置

## LTable Attributes
| 参数    | 说明     | 类型    | 可选值      | 默认值 |
|---------|----------|---------|-------------|--------|
| total | 总条目数，与 [el-pagination](https://element.eleme.cn/#/zh-CN/component/pagination#attributes) 作用相同 | number | - | - |
| pageCount | 总页数，与 [el-pagination](https://element.eleme.cn/#/zh-CN/component/pagination#attributes) 作用相同 | number| - |-|
| pageSize | 每页显示条目个数，用于 `fetch` 中 `size` 参数 | number | - | 15 |
| fetch | 表格的网络请求方法 | (page,size) => {} | - | - |
| 其他参数 | 与 [vxetable](https://vxetable.cn/v3/#/grid/api) 相同 | - | - |

## columns
新增 `slotName` 与 `btns`

| 参数    | 说明     | 类型    | 可选值      | 默认值 |
|---------|----------|---------|-------------|--------|
| slotName | 指定插槽名称，[示例](/guide/l-table/use.md#自定义插槽) | number | - | - |
| btns | 生成操作按钮，[示例](/guide/l-table/use.md#操作按钮) | number| - |-|

## LTable Methods
| 方法名    | 说明     | 参数    |
|---------|----------|---------|
| query | 执行表格查询 `fetch` 方法，[示例](/guide/l-table/use.md#网络请求分页) | - |
