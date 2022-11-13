import { notification } from "antd";
import { NotificationType } from "../types";

export const showNotification = (type: NotificationType, message: string, description: string) => {
  notification[type]({ message, description });
};
