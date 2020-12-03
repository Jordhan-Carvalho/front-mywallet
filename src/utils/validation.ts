import Joi from "joi";

import { User } from "../types/types";

const userRegex = /[a-zA-Z0-9.]+/;
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{4,10}$/;

const userSchema = Joi.object({
  name: Joi.string().pattern(userRegex).min(2).required().messages({
    "string.pattern.base": "campo usuario invalido",
  }),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .lowercase()
    .required(),
  password: Joi.string().pattern(passwordRegex).required().messages({
    "string.pattern.base":
      "Senha tem que ter pelo menos 1 letra 1 caracter especial e 1 letra",
  }),
  confirmPassword: Joi.any().valid(Joi.ref("password")).required().messages({
    "any.only": "Confirmacao de senha diferente",
  }),
});

const validateSignup = (userForm: User) => {
  if (userSchema.validate(userForm, { abortEarly: false }).error) {
    throw new Error(
      userSchema.validate(userForm, { abortEarly: false }).error?.message
    );
  }
};

const userSignInSchema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .lowercase()
    .required(),
  password: Joi.string().min(2).required().messages({
    "string.base": `Tem que ser texto`,
    "string.min": "Senha tem que ser maior que 2 carc",
  }),
});

const validateSignin = (email: string, password: string) => {
  if (
    userSignInSchema.validate({ email, password }, { abortEarly: false }).error
  ) {
    throw new Error(
      userSignInSchema.validate(
        { email, password },
        { abortEarly: false }
      ).error?.message
    );
  }
};

export { validateSignup, validateSignin };
