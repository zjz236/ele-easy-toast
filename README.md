## EleEasyToast

> 对elementUI的Message和Notification的节流二次封装

```javascript
// main.js
import Vue from 'vue';
/** **/
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import EasyToast from 'ele-easy-toast';

Vue.use(ElementUI);
// 切记要放在'Vue.use(ElementUI)'后面
Vue.use(EasyToast);
/** **/
```



## Message 消息提示

### 全局方法

EasyToast 为 Vue.prototype 添加了全局方法 $message。因此在 vue instance 中可以采用本页面中的方式调用 `Message`。

### 单独引用

单独引入 `Message`：

```javascript
import { Message } from 'ele-easy-toast';
```

此时调用方法为 `Message(options)`。我们也为每个 type 定义了各自的方法，如 `Message.success(options)`。并且可以调用 `Message.closeAll()` 手动关闭所有实例。

### Options

| 参数                     | 说明                                          | 类型           | 可选值                     | 默认值 |
| :----------------------- | :-------------------------------------------- | :------------- | :------------------------- | :----- |
| message                  | 消息文字                                      | string / VNode | —                          | —      |
| type                     | 主题                                          | string         | success/warning/info/error | info   |
| iconClass                | 自定义图标的类名，会覆盖 `type`               | string         | —                          | —      |
| dangerouslyUseHTMLString | 是否将 message 属性作为 HTML 片段处理         | boolean        | —                          | false  |
| customClass              | 自定义类名                                    | string         | —                          | —      |
| duration                 | 显示时间, 毫秒。设为 0 则不会自动关闭         | number         | —                          | 3000   |
| showClose                | 是否显示关闭按钮                              | boolean        | —                          | false  |
| center                   | 文字是否居中                                  | boolean        | —                          | false  |
| onClose                  | 关闭时的回调函数, 参数为被关闭的 message 实例 | function       | —                          | —      |
| offset                   | Message 距离窗口顶部的偏移量                  | number         | —                          | 20     |

### 方法

调用 `Message` 或 `this.$message` 会返回当前 Message 的实例。如果需要手动关闭实例，可以调用它的 `close` 方法。

| 方法名 | 说明               |
| :----- | :----------------- |
| close  | 关闭当前的 Message |





## Notification 通知

### 全局方法

EasyToast 为 `Vue.prototype` 添加了全局方法 `$notify`。因此在 vue instance 中可以采用本页面中的方式调用 Notification。

### 单独引用

单独引入 Notification：

```javascript
import { Notification } from 'ele-easy-toast';
```

此时调用方法为 `Notification(options)`。我们也为每个 type 定义了各自的方法，如 `Notification.success(options)`。并且可以调用 `Notification.closeAll()` 手动关闭所有实例。

### Options

| 参数                     | 说明                                                         | 类型             | 可选值                                      | 默认值    |
| :----------------------- | :----------------------------------------------------------- | :--------------- | :------------------------------------------ | :-------- |
| title                    | 标题                                                         | string           | —                                           | —         |
| message                  | 说明文字                                                     | string/Vue.VNode | —                                           | —         |
| dangerouslyUseHTMLString | 是否将 message 属性作为 HTML 片段处理                        | boolean          | —                                           | false     |
| type                     | 主题样式，如果不在可选值内将被忽略                           | string           | success/warning/info/error                  | —         |
| iconClass                | 自定义图标的类名。若设置了 `type`，则 `iconClass` 会被覆盖   | string           | —                                           | —         |
| customClass              | 自定义类名                                                   | string           | —                                           | —         |
| duration                 | 显示时间, 毫秒。设为 0 则不会自动关闭                        | number           | —                                           | 4500      |
| position                 | 自定义弹出位置                                               | string           | top-right/top-left/bottom-right/bottom-left | top-right |
| showClose                | 是否显示关闭按钮                                             | boolean          | —                                           | true      |
| onClose                  | 关闭时的回调函数                                             | function         | —                                           | —         |
| onClick                  | 点击 Notification 时的回调函数                               | function         | —                                           | —         |
| offset                   | 偏移的距离，在同一时刻，所有的 Notification 实例应当具有一个相同的偏移量 | number           | —                                           | 0         |

### 方法

调用 `Notification` 或 `this.$notify` 会返回当前 Notification 的实例。如果需要手动关闭实例，可以调用它的 `close` 方法。

| 方法名 | 说明                    |
| :----- | :---------------------- |
| close  | 关闭当前的 Notification |

参考链接：

[https://element.eleme.cn/#/zh-CN/component/notification](https://element.eleme.cn/#/zh-CN/component/notification)

[https://element.eleme.cn/#/zh-CN/component/message](https://element.eleme.cn/#/zh-CN/component/message)
