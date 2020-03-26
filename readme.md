xkToast 组件.

## 使用方法
**VM.xkToast(content, type)**
```javascript
import Vue from 'vue'
import xkToast from 'xk-toast'

Vue.use(xkToast)

Vue.component('some-component', {
  // ...
  methods: {
    doSomething: function () {
      this.xkToast('成功！', 'success')
    }
  }
}) 
```

## 传入参数
 - content: 提示内容.
 - type: 提示类型, success || caution || error || info.
 - position: 弹窗位置, "top" || "center" || "bottom".
