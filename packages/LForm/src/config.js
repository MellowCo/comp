import dayjs from 'dayjs'

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
  },
  readonly: {
    type: 'input',
    readonly: true,
  },
  textarea: {
    type: 'textarea',
    rows: 2,
    placeholder: '请输入内容',
    clearable: true
  },
}

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

  // el-input-number
  'number': 'el-input-number',

  'upload': 'LUpload'
}
