
import { RestaurantFacilities } from "../../database";
import {Facility} from "../../../types/models/facility";

export default async (restaurantId: number): Promise<Facility[]> => {
  const facilities = await RestaurantFacilities()
    .select( 'facilities.*')
      .select()
      .where("restaurantId", restaurantId)
      .leftJoin('facilities', 'facilities.id', 'restaurantFacilities.facilityId')
      .returning('*')
    ;

  return facilities;
};
