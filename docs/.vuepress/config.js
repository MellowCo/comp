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
