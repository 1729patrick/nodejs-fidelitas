import database, { Restaurants } from "../../database";
import { ErrorType } from "../../types/error";
import { Restaurant } from "../../types/models/restaurant";

export default async (id: number): Promise<Restaurant | any> => {
  const restaurant = await Restaurants()
    .where("restaurants.id", id)
    .select(
      "restaurants.*",
      database.raw(`ROW_TO_JSON(addresses) AS address`),
      database.raw(`ROW_TO_JSON("workHours") AS workHour`),
      database.raw(
        `JSON_AGG(
          DISTINCT JSONB_BUILD_OBJECT(
            'id', contacts.id,
            'contact', contacts.contact,
            'type', contacts.type
          )
        ) as contacts`
      ),
      database.raw(
        `JSON_AGG(
          DISTINCT JSONB_BUILD_OBJECT(
            'id', facilities.id,
            'title', facilities.title
          )
        ) as facilities`
      )
    )
    .leftJoin("addresses", "restaurants.addressId", "addresses.id")
    .leftJoin("workHours", "restaurants.workHoursId", "workHours.id")
    .leftJoin("contacts", "restaurants.id", "contacts.restaurantId")
    .leftJoin(
      "restaurantFacilities",
      "restaurants.id",
      "restaurantFacilities.restaurantId"
    )
    .leftJoin(
      "facilities",
      "facilities.id",
      "=",
      "restaurantFacilities.facilityId"
    )
    .groupBy("restaurants.id", "addresses.*", "workHours.*")
    .debug(true);
  // .first();

  if (!restaurant) {
    throw new Error(ErrorType.RestaurantNotFound);
  }

  return restaurant;
};
