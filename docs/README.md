# @meoc/comp

* 基于 element-ui form二次封装
* 基于 vxe-table table二次封装

## 前置条件
1. [element-ui](https://element.eleme.cn/#/zh-CN/component/installation)
```shell
npm i element-ui
```

```js
// main.js
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
```

2. [vxe-table](https://vxetable.cn/v3/#/table/start/install)
```shell
npm install xe-utils vxe-table@legacy
```

```js
import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'

Vue.use(VXETable)
```



## 安装
```shell
npm i @meoc/comp
```
* main.js
```js
import LComp from '@meoc/comp'

Vue.use(LComp)
```

