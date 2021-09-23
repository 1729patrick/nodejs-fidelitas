import { Users } from '../../database';
import bcrypt from 'bcryptjs';
import { User } from '../../../types/models/user';
import { ErrorType } from '../../../types/error';

export default async (user: User): Promise<User> => {
  const checkEmail = await Users().where({ email: user.email }).first();
  if (checkEmail) {
    throw Error(ErrorType.EmailAlreadyExists);
  }

  const checkPhone = await Users().where({ phone: user.phone }).first();
  if (checkPhone) {
    throw Error(ErrorType.PhoneAlreadyExists);
  }

  user.password = bcrypt.hashSync(user.password, 10);

  const checkInvitationCode = await Users()
    .where({ referralCode: user.invitationCode })
    .first();

  if (!checkInvitationCode) {
    throw new Error(ErrorType.InvalidInvitationCode);
  }

  user.referralCode = user.email;

  const [createdUserId] = (await Users().insert(user).returning('id')) || [];

  if (!createdUserId) {
    throw new Error(ErrorType.UnhandledError);
  }

  user.referralCode = `${user.firstName}${createdUserId}`;

  const [createdUser] = await Users()
    .where({ id: createdUserId })
    .update(user)
    .returning('*');

  return createdUser;
};
