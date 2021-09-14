import { Notification } from "../../../types/models/notification";
import { Notifications } from "../../database";

export default async (restaurantId: number): Promise<Notification[]> => {
  const notifications = await Notifications()
    .select("notifications.*")
    .where("restaurantId", restaurantId)
    .where("notifications.status", "ACTIVE")
    .orderBy("notifications.createdAt", "desc");

  return notifications;
};
