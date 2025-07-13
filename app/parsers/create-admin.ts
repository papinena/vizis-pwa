import z from "zod";

export const CreateAdminSchema = z
  .object({
    adminName: z.string().min(4, "Mínimo de 4 caracteres"),
    adminLastName: z.string().min(4, "Mínimo de 4 caracteres"),
    telephone: z
      .string({ error: "Obrigatório" })
      .min(9, { error: "Mínimo de 9 dígitos" }),
    position: z.string().min(2, { error: "Mínimo de 2 caracteres" }),
    isResident: z.boolean({ error: "Obrigatório" }),
    blockAndApartment: z.string(),
    email: z.email({ error: "Email inválido" }),
    confirmEmail: z.email({ error: "Email inválido" }),
    password: z.string().min(4, { error: "Mínimo de 4 caracteres" }),
    confirmPassword: z.string().min(4, { error: "Mínimo de 4 caracteres" }),
    administer: z.string(),
    contact: z.string(),
    administerAddress: z.string(),
    administerTelephone: z.string(),
    administerEmail: z.email("Email inválido").optional().or(z.literal("")),
    observations: z.string(),
    porteiroChefe: z.string(),
    portariaTelephone: z.string(),
    employeeName1: z.string().optional(),
    employeeEmail1: z.email("Email inválido").optional().or(z.literal("")),
    employeeName2: z.string().optional(),
    employeeEmail2: z.email("Email inválido").optional().or(z.literal("")),
    employeeName3: z.string().optional(),
    employeeEmail3: z.email("Email inválido").optional().or(z.literal("")),
    condominiumUsefulInformation: z.string(),
    photo: z
      .any()
      .optional()
      .refine(
        (files) => !files || files.length === 0 || files[0].size <= 5000000,
        "Max 5MB"
      )
      .refine(
        (files) =>
          !files || files.length === 0 || files[0].type.startsWith("image/"),
        "Apenas imagens"
      ),
  })
  .refine((schema) => schema.password === schema.confirmPassword, {
    message: "As senhas devem ser iguais",
    path: ["confirmPassword"],
  })
  .refine((schema) => schema.confirmEmail === schema.email, {
    message: "O email deve ser igual",
    path: ["confirmEmail"],
  });
