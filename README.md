# 说明文档

# 1.如何安装

```js
npm install wenjuan-cli -g
```

# 2.如何使用

## 2.1.创建项目

Vue项目模块的基础配置已经设置：

- 常用的目录结构（你可以在此基础上修改）
- vue.config.js（其中配置了别名，你可以自行修改和配置更多）
- axios（网络请求axios的安装以及二次封装）
- vue-router（router的安装和配置）
- vuex（vuex的安装和配置）
- 创建项目：

```js
wj create project_name
```



## 2.2 项目开发

目前脚手架拟提供下面的这些功能：

- 创建Vue组件（已完成）
- 创建Vue页面，并配置路由（未完成）
- 创建Vuex子模块（未完成）

### 创建组件

```
wj addcpn NavHeader # 默认的安装路径是src/component，后面会做相应的调整
```

