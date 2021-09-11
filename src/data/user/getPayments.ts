import { Payments } from '../../database';
import { Payment } from '../../../types/models/payment';

export default async (userId: number): Promise<Payment[]> => {
  const payments = await Payments().where('payments.userId', userId);

  return payments;
};
