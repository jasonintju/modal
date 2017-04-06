# 原生js实现的简单弹窗，类似Bootstrap模态窗效果

暂时只支持在js中调用，调用方法为

```
Modal(options).init()
```

`options`为可选的输入参数对象：

```
{
  title: '提示',             // 弹窗标题
  content: '',              // 弹窗主体内容
  confirmBtnText: '确认',    // 确认按钮文字
  confirmBtnHandler: null,  // 确认按钮绑定的事件
  cancelBtnText: '取消',     // 取消按钮文字
  cancelBtnHandler: null    // 取消按钮绑定的事件
}
```
---
持续优化ing

都不敢相信这也能成为一个插件，哈哈哈，就那么几十行代码！！！
功能上肯定还有很多不足，会继续完善的。
