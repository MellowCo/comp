import dayjs from 'dayjs'
import { CheckboxGroup, DatePicker, Input, RadioGroup, Select, Slider, Switch } from 'element-ui'

// import 'element-ui/lib/theme-chalk/input.css'
// import 'element-ui/lib/theme-chalk/select.css'
// import 'element-ui/lib/theme-chalk/date-picker.css'
// import 'element-ui/lib/theme-chalk/checkbox-group.css'
// import 'element-ui/lib/theme-chalk/radio-group.css'
// import 'element-ui/lib/theme-chalk/switch.css'
// import 'element-ui/lib/theme-chalk/slider.css'

export const dayOptions = {
  shortcuts: [
    {
      text: '本周',
      onClick(picker){
        const start = dayjs()
          .startOf('week')
          .toDate()
        const end = dayjs()
          .endOf('week')
          .toDate()
        picker.$emit('pick', [ start, end ])
      },
    },
    {
      text: '本月',
      onClick(picker){
        const start = dayjs()
          .startOf('month')
          .toDate()
        const end = dayjs()
          .endOf('month')
          .toDate()
        picker.$emit('pick', [ start, end ])
      },
    },
    {
      text: '上个月',
      onClick(picker){
        const start = dayjs()
          .subtract(1, 'month')
          .startOf('month')
          .toDate()
        const end = dayjs()
          .subtract(1, 'month')
          .endOf('month')
          .toDate()
        picker.$emit('pick', [ start, end ])
      },
    },
    {
      text: '本年',
      onClick(picker){
        const start = dayjs()
          .startOf('year')
          .toDate()
        const end = dayjs()
          .endOf('year')
          .toDate()
        picker.$emit('pick', [ start, end ])
      },
    },
    {
      text: '去年',
      onClick(picker){
        const start = dayjs()
          .subtract(1, 'year')
          .startOf('year')
          .toDate()
        const end = dayjs()
          .subtract(1, 'year')
          .endOf('year')
          .toDate()
        picker.$emit('pick', [ start, end ])
      },
    },
  ],
}

export const defaultItemConfig = {
  select: {
    filterable: true,
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

export const componentsMap = {
  // select 选择器
  'el-select': Select,
  'select': Select,

  // 时间选择器
  'dayToDay': DatePicker,
  'month': DatePicker,
  'year': DatePicker,
  'el-date-picker': DatePicker,

  // input 输入
  'input': Input,
  'readonly': Input,
  'el-input': Input,
  'textarea': Input,

  // switch
  'switch': Switch,
  'el-switch': Switch,

  // el-checkbox
  'checkbox': CheckboxGroup,
  'el-checkbox-group': CheckboxGroup,

  // el-radio
  'radio': RadioGroup,
  'el-radio-group': RadioGroup,

  // el-slider
  'slider': Slider,
  'el-slider': Slider,
}
