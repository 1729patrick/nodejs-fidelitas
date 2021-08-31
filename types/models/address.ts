export type Address = {
  id: number;
  lat?: number;
  long?: number;
  line1: string;
  line2?: string;
  postalCode: string;
  city: string;
  responsible: string;
  phone: string;
  notes?: string;
  primary: boolean;
  userId?: number;
  createdAt: string;
  updatedAt: string;
};
