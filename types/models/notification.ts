export type NotificationStatus =
  | "ACTIVE"
  | "DELETED";


export type Notification = {
  id: number;
  type: "email" | "pushNotification" | "sms";
  title: string;
  description: string;
  status: NotificationStatus;
  restaurantId: number;
  createdAt: string;
  updatedAt: string;
};
