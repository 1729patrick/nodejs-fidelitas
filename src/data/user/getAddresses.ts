import { Addresses } from "../../database";
import { Address } from "../../../types/models/address";

export default async (userId: number): Promise<Address[]> => {
  const addresses = await Addresses().where("addresses.userId", userId);

  return addresses;
};
