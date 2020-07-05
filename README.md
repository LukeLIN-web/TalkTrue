# TalkTrue

A evaluation system for teacher and courses in ZJU. 内网版浙大查老师（CC98言果平台）

为啥要叫这个？

因为言果合起来就是课，我自己瞎想了一个”**言之凿凿，真者为果**"的意思，因为这个项目的初步计划就是建立基于实名和匿名共存的课程评价体系，希望鼓励大家说真话，给出最真实的评价。

## 运行

```cmd
    git clone https://github.com/zjufishboy/TalkTrue.git
    cd ./Talktrue/front-end/
    yarn
    yarn start
```

## 功能设计

- 首页
  - 内容：热词词云、搜索栏、高分推荐
- 教师详情页面
  - 教师信息、教师开班、教师评分、评论
- 课程详情页面
  - 课程内容、授课教师组、课程评分、评论

## 算法初步设计

- 教师评分：课程评分加权0.5+个人评分0.5
- 课程评分：课程评分加权

也就是说，每个课程-老师会单独有一个分数，但是可以单独给老师打分，其中老师的分数会由开课评分加权后加上个人评分的一半
课程评分就直接是开课的每个老师的课程评分。

这么设计的考量是因为有的老师可能不适合开其中一门课，但另外一门课讲的很好，我不希望这种情况的老师被埋没。

## 项目更新记录

2020.7.5 1:18:24 项目技术路线制定

> 打算采用React+React-router-dom+mobx的技术路线，因为这是我最近比较熟悉的一个技术框架
> 打包使用webpack和一堆乱七八糟的loader+plugin,具体自己在packages.json里看吧。

2020.7.6 3:07:40 项目架构完成

> 干活速度实在不行，分的模块有点多，今天把状态存储和i18n文案做了一下。页面设计欠缺，明天晚上再看看。

## 项目目前预览

![设计稿0.2.1](./src/image/sample.png)