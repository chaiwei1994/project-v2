### Vue CLI
局部安装vue-cli 2.9.6 和项目创建：
```cmd
npm init -y # 初始化项目依赖文件
cnpm i -D vue-cli # 安装脚手架
npx vue -V # 查看vue-cli版本号
npx vue init webpack project-one # 创建项目
```
项目创建过程图示:
<img src="./1.jpg">
项目目录图示
<img src="./2.jpg">

局部安装vue-cli 4.5.15 和项目创建：
```cmd
npm init -y # 初始化项目依赖文件
cnpm i -D @vue/cli # 安装脚手架
npx vue -V # 查看vue-cli版本号
npx vue create project-two # 创建项目
# OR
npx vue ui # 创建项目
```
项目创建过程图示:
<img src="./3.jpg">
项目目录图示
<img src="./4.jpg">


全局安装vue-cli 2.9.6 和项目创建：
```cmd
npm i webpack -g # 安装webpack
npm i vue-cli -g # 安装脚手架
vue init webpack demo # 创建项目
```

全局安装vue-cli 4.5.15 和项目创建：
```cmd
npm install -g @vue/cli # 用npm安装脚手架
# OR
yarn global add @vue/cli # 用yarn 安装脚手架

vue create my-project # 创建项目
# OR
vue ui # 创建项目
```
