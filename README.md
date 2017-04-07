# 原生js实现的简单模态窗

引入modal.css和modal.js，在需要调出弹窗的地方，写入以下代码：

```javascript
Modal(options).init()
```

`options`为可选的输入参数对象：

```javascript
{
  title: '提示',             // 弹窗标题，默认 “提示”
  content: '',              // 弹窗主体内容，默认为空
  confirmBtnText: '确认',    // 确认按钮文字，默认“确认”
  confirmBtnHandler: null,  // 确认按钮绑定的事件，默认关闭弹窗事件
  isNeedConfirmBtn: true,   // 是否需要“确认”按钮，默认 true
  cancelBtnText: '取消',     // 取消按钮文字，默认“取消”
  cancelBtnHandler: null,    // 取消按钮绑定的事件，默认关闭弹窗事件
  isNeedCancelBtn: true,     // 是否需要“取消”按钮，默认 true
  ignoreBackdropClick: false // 是否忽略点击背景色关闭弹窗功能，默认不忽略
}
```

