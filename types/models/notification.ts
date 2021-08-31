export type Notification = {
  id: number;
  type: "email" | "pushNotification" | "sms";
  title: string;
  description: string;
  restaurantId: number;
  createdAt: string;
  updatedAt: string;
};
