import z from "zod";

export const CreateAdminSchema = z
  .object({
    adminName: z.string().min(4, "Mínimo de 4 caracteres"),
    adminLastName: z.string().min(4, "Mínimo de 4 caracteres"),
    telephone: z
      .string()
      .regex(
        /^\(\d{2}\) \d{5}-\d{4}$/,
        "O telefone deve estar no formato (XX) XXXXX-XXXX"
      ),
    position: z.string().min(2, { error: "Mínimo de 2 caracteres" }),
    isResident: z.boolean({ error: "Obrigatório" }),
    blockAndApartment: z.string(),
    email: z.email({ error: "Email inválido" }),
    confirmEmail: z.email({ error: "Email inválido" }),
    password: z
      .string()
      .min(8, { error: "A senha deve ter no mínimo 8 caracteres" })
      .regex(/\d/, { error: "A senha deve conter ao menos um número" })
      .regex(/[^a-zA-Z0-9]/, {
        error: "A senha deve conter ao menos um caractere especial",
      }),
    confirmPassword: z
      .string()
      .min(8, { error: "A senha deve ter no mínimo 8 caracteres" })
      .regex(/\d/, { error: "A senha deve conter ao menos um número" })
      .regex(/[^a-zA-Z0-9]/, {
        error: "A senha deve conter ao menos um caractere especial",
      }),
    administer: z.string(),
    condominiumName: z.string().min(2, { error: "Mínimo de 2 caracteres" }),
    contact: z.string(),
    administerAddress: z.string(),
    administerTelephone: z.string(),
    administerEmail: z.email("Email inválido").optional().or(z.literal("")),
    observations: z.string(),
    doorKeeperChief: z.string(),
    receptionTelephone: z.string(),
    employees: z
      .array(
        z.object({
          name: z.string().min(2, { error: "Mínimo de 2 caracters" }),
          email: z.email(),
        })
      )
      .min(1, { error: "Mínimo de um funcionário" }),
    condominiumUsefulInformation: z.string(),
  })
  .refine((schema) => schema.password === schema.confirmPassword, {
    message: "As senhas devem ser iguais",
    path: ["confirmPassword"],
  })
  .refine((schema) => schema.confirmEmail === schema.email, {
    message: "O email deve ser igual",
    path: ["confirmEmail"],
  });
