import { celebrate, Joi, Segments } from 'celebrate';

export const addReservationValidator = celebrate({
  [Segments.BODY]: Joi.object().keys({
    date: Joi.date().required(),
    time: Joi.string()
      .regex(/^([0-9]{2})\:([0-9]{2})$/)
      .required(),
    type: Joi.string().valid('breakfast', 'lunch', 'dinner').required(),
    adults: Joi.number(),
    kids: Joi.number(),
    babies: Joi.number(),
    userId: Joi.number(),
    clientNotes: Joi.string().allow(''),
  }),
});

export const updateReservationValidator = celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    reservationId: Joi.number().required(),
  }),
  [Segments.BODY]: Joi.object().keys({
    date: Joi.date().required(),
    time: Joi.string()
      .regex(/^([0-9]{2})\:([0-9]{2})$/)
      .required(),
    type: Joi.string().valid('breakfast', 'lunch', 'dinner').required(),
    adults: Joi.number(),
    kids: Joi.number(),
    babies: Joi.number(),
    clientNotes: Joi.string().allow(''),
  }),
});
