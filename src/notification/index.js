// 通过节流来控制Notification的展示
import { Notification } from 'element-ui';

const showNotificationFunc = function () {
  const notificationList = [];
  return function (options) {
    const index = notificationList.findIndex(
      item =>
        item.type === options.type &&
        item.message === options.message &&
        item.title === options.title
    );
    if (index >= 0) {
      return notificationList[index].$ele;
    }
    const ele = Notification(options);
    notificationList.push({
      type: options.type,
      message: options.message,
      title: options.title,
      $ele: ele
    });
    setTimeout(() => {
      notificationList.splice(index, 1);
    }, options.duration || 4500);
    return ele;
  };
};
const showNotification = showNotificationFunc();

const MyNotification = function (options) {
  options = options || {};
  if (typeof options === 'string') {
    options = {
      message: options
    };
  }
  return showNotification(options);
};

['success', 'warning', 'info', 'error'].forEach(type => {
  MyNotification[type] = options => {
    if (typeof options === 'string') {
      options = {
        message: options
      };
    }
    options.type = type;
    return MyNotification(options);
  };
});

MyNotification.close = Notification.close;
MyNotification.closeAll = Notification.closeAll;

export default MyNotification;
