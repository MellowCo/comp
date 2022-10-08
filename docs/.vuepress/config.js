module.exports ={
  title: '@meoc/comp',
  description: 'element-ui 二次封装',
  themeConfig: {
    sidebar: [
      {
        title: 'LForm',
        collapsable: false,
        children: [ 
          '/guide/l-form/example',
          '/guide/l-form/options',
          '/guide/l-form/use',
          '/guide/l-form/event',
          '/guide/l-form/v-if',
          '/guide/l-form/rules',
          '/guide/l-form/config',
        ],
      },
      {
        title: 'LTable',
        collapsable: false,
        children: [ 
          '/guide/l-table/use',
          '/guide/l-table/options',
        ],
      },
      {
        title: 'LContent',
        collapsable: false,
        children: [ 
          '/guide/l-content/use',
          '/guide/l-content/options',
        ],
      },
      {
        title: 'LFormModal',
        collapsable: false,
        children: [ 
          '/guide/l-from-modal/use',
          '/guide/l-from-modal/options',
        ],
      },
      {
        title: 'LTableModal',
        collapsable: false,
        children: [ 
          '/guide/l-table-modal/use',
          '/guide/l-table-modal/options',
        ],
      }
    ]
  },
  chainWebpack (config) {
    config.resolve.alias.set('core-js/library/fn', 'core-js/features');
  },
  plugins: [
    '@vuepress-reco/extract-code'
  ]
}
