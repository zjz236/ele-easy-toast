import { ElMessageOptions, CloseEventHandler } from 'element-ui/types/message';
declare const MyMessage: {
  (options: ElMessageOptions): any;
  close: CloseEventHandler;
  closeAll: any;
};
export default MyMessage;
