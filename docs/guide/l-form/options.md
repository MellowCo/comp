# 参数配置

## LForm Methods
| 方法名    | 说明     | 参数    |
|---------|----------|---------|
| validate | 对整个表单进行校验的方法，传入一个回调函数，在校验成功后执行 | () => {} |
| validateField	 |  对部分表单字段进行校验的方法，[与element-ui相同](https://element.eleme.cn/#/zh-CN/component/form#form-methods)	| - |
| resetFields | 对整个表单进行重置，将所有字段值重置为初始值并移除校验结果，[与element-ui相同](https://element.eleme.cn/#/zh-CN/component/form#form-methods)| - |
| clearValidate | 移除表单项的校验结果。传入待移除的表单项的 prop 属性或者 prop 组成的数组，如不传则移除整个表单的校验结果，[与element-ui相同](https://element.eleme.cn/#/zh-CN/component/form#form-methods)| - |

## LForm Attributes
| 参数    | 说明     | 类型    | 可选值      | 默认值 |
|---------|----------|---------|-------------|--------|
| config | el-form的配置参数，[见 element-ui](https://element.eleme.cn/#/zh-CN/component/form#form-attributes) | object | - | { inline: false, labelWidth: '80px' } |
| data | 表单的数据对象 | object| - |-|
| options | select check radio 的选项数据 | object | - | - |
| formItem |　表单组件配置对象 | FormItem | - | - |

## FormItem
| 参数    | 说明     | 类型    | 可选值      | 默认值 |
|---------|----------|---------|-------------|--------|
| prop |　表单域 data 字段 | string  | - | - |
| label | 标签文本 | string | - | - |
| span | el-form-item 占据的列数 | number | - | 6 |
| optionLabel | select option 中显示的 label 字段，对应 options 中的数据 | - | - |
| optionValue | select option 中显示的 value 字段，对应 options 中的数据 | - | - |
| appendText | input append 显示的文本内容，[见 element-ui](https://element.eleme.cn/#/zh-CN/component/input#fu-he-xing-shu-ru-kuang) | - | - |
| comp | 渲染的表单组件名称，与<a href="#componentMap">componentsMap</a>，[defaultItemConfig](#defaultItemConfig)关联 | string | - | - |
| slotName | 插槽名称，当 comp 为slot时使用 | string | - | - |
| handle | 每项表单组件的时间设置，[见 element-ui](https://element.eleme.cn/#/zh-CN/component/input#input-events) | object | - | - |
| vIf | v-if，控制 el-form-item 显示 | {prop,value}<br>{props,values,flag}<br>()=>boolean | - | - |
| vElse | v-if，控制 el-form-item 显示 | {prop,value}<br>{props,values,flag}<br>()=>boolean | - | - |
| hidden | v-show ，隐藏当前表单组件 | boolean | - | true |
| tip | 提示文本 | string | - | '' |
| 其他参数 | 每项表单组件的属性设置，[见 element-ui](https://element.eleme.cn/#/zh-CN/component/input#input-attributes) | object | - | - |


## componentMap
与 FormItem comp 字段关联，指定生成的组件
```ts
export const componentsMap = {
  // select 选择器
  'el-select': 'el-select',
  'select': 'el-select',

  // 时间选择器
  'dayToDay': 'el-date-picker',
  'month': 'el-date-picker',
  'year': 'el-date-picker',
  'el-date-picker': 'el-date-picker',

  // input 输入
  'input': 'el-input',
  'readonly': 'el-input',
  'el-input': 'el-input',
  'textarea': 'el-input',

  // switch
  'switch': 'el-switch',
  'el-switch': 'el-switch',

  // el-checkbox
  'checkbox': 'el-checkbox-group',
  'el-checkbox-group': 'el-checkbox-group',

  // el-radio
  'radio': 'el-radio-group',
  'el-radio-group': 'el-radio-group',

  // el-slider
  'slider': 'el-slider',
  'el-slider': 'el-slider',
}
```

## defaultItemConfig
与 FormItem comp 字段关联，指定生成组件的默认设置
```js
export const defaultItemConfig = {
  select: {
    filterable: true,
    clearable: true
  },
  dayToDay: {
    type: 'daterange',
    rangeSeparator: '至',
    startPlaceholder: '开始日期',
    endPlaceholder: '结束日期',
    pickerOptions: dayOptions,
    valueFormat: 'yyyy-MM-dd',
  },
  month: {
    type: 'month',
    valueFormat: 'yyyy-MM',
    placeholder: '选择月',
  },
  year: {
    type: 'year',
    placeholder: '选择年',
    valueFormat: 'yyyy',
  },
  input: {
    clearable: true,
    type: 'input',
    placeholder: '请输入',
    clearable: true
  },
  readonly: {
    type: 'input',
    readonly: true,
  },
  textarea: {
    type: 'textarea',
    rows: 2,
    placeholder: '请输入内容',
  },
}
```
