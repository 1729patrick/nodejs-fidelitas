import { Notification } from "../../../types/models/notification";
import { Notifications } from "../../database";

export default async (title: string,
                      description: string,
                      type: any,
                      restaurantId: number): Promise<Notification[]> => {
  const notifications = await Notifications()
    .insert({
      title,
      description,
      type,
      restaurantId
    }).returning('*')

  return notifications;
};
