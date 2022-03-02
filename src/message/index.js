// 通过节流来控制message的展示
import {Message} from 'element-ui';

const showMessageFunc = function () {
  const messageList = [];
  return function (options) {
    const index = messageList.findIndex(
      item => item.type === options.type && item.message === options.message
    );
    if (index >= 0) {
      return messageList[index].$ele;
    }
    const ele = Message(options);
    messageList.push({
      type: options.type,
      message: options.message,
      $ele: ele
    });
    setTimeout(() => {
      messageList.splice(index, 1);
    }, options.duration || 3000);
    return ele;
  };
};
const showMessage = showMessageFunc();

const MyMessage = function (options) {
  if (!['[object Object]', '[object String]', '[object Number]'].includes(Object.prototype.toString.call(options))) {
    options = {
      message: ''
    };
  }
  if (['string', 'number'].includes(typeof options)) {
    options = {
      message: `${options}`
    };
  }
  return showMessage(options);
};

['success', 'warning', 'info', 'error'].forEach(type => {
  MyMessage[type] = options => {
    if (!['[object Object]', '[object String]', '[object Number]'].includes(Object.prototype.toString.call(options))) {
      options = {
        message: ''
      };
    }
    if (['string', 'number'].includes(typeof options)) {
      options = {
        message: `${options}`
      };
    }
    options.type = type;
    return MyMessage(options);
  };
});

MyMessage.close = Message.close;
MyMessage.closeAll = Message.closeAll;

export default MyMessage;
