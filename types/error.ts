export enum ErrorType {
  EmailAlreadyExists = 'EMAIL_ALREADY_EXISTS',
  PhoneAlreadyExists = 'PHONE_ALREADY_EXISTS',
  InvalidEmail = 'INVALID_EMAIL',
  InvalidPassword = 'INVALID_PASSWORD',
  UnhandledError = 'UNHANDLED_ERROR',
  TokenNotProvided = 'TOKEN_NOT_PROVIDED',
  InvalidToken = 'INVALID_TOKEN',
  RestaurantNotFound = 'RESTAURANT_NOT_FOUND',
  InvalidInvitationCode = 'INVALID_INVITATION_CODE_ERROR',
}

export type Error = {
  status?: number;
  message?: string;
  error: ErrorType;
};
