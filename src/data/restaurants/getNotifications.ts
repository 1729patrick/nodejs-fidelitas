import { Notification } from "../../../types/models/notification";
import { Notifications } from "../../database";

export default async (restaurantId: string): Promise<Notification[]> => {
  const notifications = await Notifications()
    .select("notifications.*")
    .where("restaurantId", restaurantId)
    .orderBy("notifications.createdAt", "desc");

  return notifications;
};
