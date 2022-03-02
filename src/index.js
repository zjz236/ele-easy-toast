import Message from './message';
import Notification from './notification';

export { Message, Notification };

const install = function (Vue) {
  Vue.prototype.$message = Message;
  Vue.prototype.$notify = Notification;
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  Message,
  Notification,
  version: '1.0.0'
};
