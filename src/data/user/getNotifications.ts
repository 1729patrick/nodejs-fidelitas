import { Notification } from "../../../types/models/notification";
import { Notifications } from "../../database";

export default async (userId: number): Promise<Notification[]> => {
  const notifications = await Notifications()
    .select("notifications.*", "read")
    .where("userId", userId)
    .leftJoin(
      "userNotifications",
      "notifications.id",
      "userNotifications.notificationId"
    )
    .orderBy("notifications.createdAt", "desc");

  return notifications;
};
