
import { Notification } from "../../../types/models/notification";
import { Notifications } from "../../database";

export default async (id: number,
): Promise<Notification[]> => {
  const notification = await Notifications()
    .select('notifications.*')
    .where('notifications.id', id)
    .update({status: 'DELETED' })
    .returning('*')

  return notification;
};
