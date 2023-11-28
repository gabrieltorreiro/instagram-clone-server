import { checkSchema } from "express-validator";

export const userValidator = {
  show: checkSchema({
    id: {
      in: ["params"],
      isUUID: {
        errorMessage: "O id deve ser um uuid válido",
      },
    },
  }),
  create: checkSchema(
    {
      email: {
        isEmail: {
          errorMessage: "O email deve ser válido",
        },
      },
      username: {
        isLength: {
          errorMessage: "O username deve ter entre 3 e 20 caracteres",
          options: { min: 3, max: 20 },
        },
      },
      password: {
        isStrongPassword: {
          errorMessage:
            "A senha deve ser forte, contendo pelo menos 8 caracteres, uma letra maiúscula, uma letra minúscula, um número e um símbolo",
        },
      },
    },
    ["body"],
  ),
};
