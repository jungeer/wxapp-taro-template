<div align="center">
  <h1>
    <a href="https://github.com/jungeer/wxapp-taro-template">小程序项目模板</a>
  </h1>
</div>

## 开发前须知

请认真阅读，了解对应开发规范

## 简介

小程序初始化项目模板

## 如何运行

```bash
yarn   #依赖安装
yarn dev:weapp   #开发编译
yarn build:weapp   #生产编译
```

## 项目技术栈

- [Taro-cli](https://taro-docs.jd.com/docs)
- [Nut-UI4.0](https://nutui.jd.com/h5/vue/4x/#/zh-CN/guide/intro)
- [Vue3.0](https://cn.vuejs.org/)
- [Pinia](https://pinia.vuejs.org/)
- [Typescript](https://www.tslang.cn/docs/home.html)
- [Vueuse](https://vueuse.org/)
- [Lodash](https://www.lodashjs.com/)
- [Dayjs](https://dayjs.fenxianglu.cn/)

## 代码规范工具

- [eslint](https://eslint.bootcss.com/docs/rules/)
- [stylelint](https://www.npmjs.com/package/stylelint-config-standard)
- [commitlint](https://commitlint.js.org/#/?id=getting-started)

```bash
- `feat` 增加新功能
- `fix` 修复问题/BUG
- `style` 代码风格相关无影响运行结果的
- `perf` 优化/性能提升
- `refactor` 重构
- `revert` 撤销修改
- `test` 测试相关
- `docs` 文档/注释
- `chore` 依赖更新/脚手架配置修改等
- `workflow` 工作流改进
- `ci` 持续集成
- `types` 类型定义文件更改
- `wip` 开发中
```

- prettier
- editorconfig

## 命名规范

[遵守团队命名规范]

## 项目目录说明

```bash
├── config    #打包编译配置
│   ├── dev.js   #开发环境编译配置
│   ├── index.js   #通用编译配置
│   └── prod.js   #生产环境编译配置
├── src   #程序主目录
│   ├── api   #api相关
│   │   ├── modules   #api模块化管理，存放对应功能/业务模块api文件 ex.user.ts, goods.ts
│   │   │   └── index.ts
│   │   └── request.ts   #请求主方法封装
│   ├── app.config.ts   #项目页面主配置文件
│   ├── app.scss   #项目全局样式文件
│   ├── app.ts   #项目主入口文件
│   ├── assets   #静态文件存放目录，图片/JS静态文件/CSS静态文件等
│   │   └── images   #图片存放目录
│   │       └── tabbar   #存放tabbar图标
│   │           ├── index.png
│   │           ├── index-light.png
│   │           ├── my.png
│   │           └── my-light.png
│   ├── components   #组件目录，放业务组件与通用组件，通用组件以 base-xxx 命名
│   │   └── base-demo
│   │       └── index.vue
│   ├── constants   #常量文件存放目录
│   │   └── tabbar.ts
│   ├── hooks   #存放hook文件
│   │   └── index.ts
│   ├── index.html
│   ├── pages   #页面主目录，包括tabbar导航页面，分包页面，分包以tabbar模块分别命名，ex.index, my
│   │   ├── index   #首页分包目录
│   │   │   └── index-page
│   │   │       ├── index.config.ts
│   │   │       └── index.vue
│   │   ├── my   #我的分包目录
│   │   │   └── my-page
│   │   │       ├── index.config.ts
│   │   │       └── index.vue
│   │   └── tabbar   #存放tabbar底部导航页
│   │       ├── index
│   │       │   ├── index.config.ts
│   │       │   └── index.vue
│   │       └── my
│   │           ├── index.config.ts
│   │           └── index.vue
│   ├── store   #pinia状态管理
│   │   ├── index.ts
│   │   └── modules   #pinia状态管理模块化
│   │       ├── index
│   │       │   └── index.ts
│   │       └── user
│   │           └── index.ts
│   └── utils   #工具类封装
│       └── index.ts
├── types   #type类型定义
│   ├── global.d.ts
│   └── vue.d.ts
├── README.md
├── package.json
└── yarn.lock
├── project.config.json
├── tsconfig.json
├── babel.config.js
├── commitlint.config.js
├── .editorconfig
├── .eslintrc
├── .prettierr.js
├── .stylelintrc.json
├── components.d.ts
```
