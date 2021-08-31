import database, { Achievements } from "../../database";
import { Achievement } from "../../../types/models/achievement";

export default async (restaurantId: number): Promise<Achievement[]> => {
  const achievements = await Achievements()
    .select("achievements.*", database.raw(`ROW_TO_JSON(products) AS product`))
    .where("achievements.restaurantId", restaurantId)
    .leftJoin("products", "products.id", "achievements.productId");

  return achievements;
};
