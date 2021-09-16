import database, { Facilities} from "../../database";

import {Facility} from "../../../types/models/facility";

export default async (): Promise<Facility[]> => {
  const facilities = await Facilities()
    .select("facilities.*")
    .returning('*');

  return facilities;
};
