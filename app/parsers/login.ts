import { z } from "zod";

export const LoginSchema = z.object({
  email: z
    .string({ message: "O e-mail é obrigatório" })
    .email("O e-mail é inválido"),
  password: z
    .string({ message: "A senha é obrigatória" })
    .min(1, "A senha é obrigatória"),
});

export type LoginType = z.infer<typeof LoginSchema>;
