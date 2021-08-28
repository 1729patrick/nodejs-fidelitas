export enum ErrorType {
  UserAlreadyExists = "USERNAME_ALREADY_EXISTS",
  EmailAlreadyExists = "EMAIL_ALREADY_EXISTS",
  PhoneAlreadyExists = "PHONE_ALREADY_EXISTS",
  InvalidEmail = "INVALID_EMAIL",
  InvalidPassword = "INVALID_PASSWORD",
  UnhandledError = "UNHANDLED_ERROR",
}

export type Error = {
  status?: number;
  message?: string;
  error: ErrorType;
};
