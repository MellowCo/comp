module.exports ={
  title: '@meoc/comp',
  description: 'element-ui 二次封装',
  themeConfig: {
    sidebar: [
      {
        title: 'LForm',
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
        children: [ 
          '/guide/l-table/use',
          '/guide/l-table/options',
        ],
      },
      {
        title: 'LContent',
        children: [ 
          '/guide/l-content/use',
          '/guide/l-content/options',
        ],
      },
      {
        title: 'LFormModal',
        children: [ 
          '/guide/l-from-modal/use',
          '/guide/l-from-modal/options',
        ],
      },
      {
        title: 'LTableModal',
        children: [ 
          '/guide/l-table-modal/use',
          '/guide/l-table-modal/options',
        ],
      },
      {
        title: 'LModal',
        children: [ 
          '/guide/l-modal/use',
          '/guide/l-modal/options',
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
