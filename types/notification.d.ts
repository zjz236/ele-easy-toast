import { ElNotificationOptions } from 'element-ui/types/notification';
declare const MyNotification: {
  (options: any): ElNotificationOptions;
  close(): void;
  closeAll(): void;
};
export default MyNotification;
