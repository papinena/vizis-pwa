import { Text } from "~/components/ui/text";
import { Box } from "~/components/ui/box";
import { Button } from "~/components/ui/button";
import { useForm, FormProvider } from "react-hook-form";
import { InputWithLabel } from "~/components/input-with-label";
import { NameInput } from "~/components/admin-form/name-input";
import { SectionTitle } from "~/components/section-title";
import { Item } from "~/components/admin-form/item";
import { SectionContainer } from "~/components/section-container";
import { BasicInformation } from "~/components/admin-form/basic-information";
import { CondominiumInformation } from "~/components/admin-form/condominium-information";
import { EmployeesInformation } from "~/components/admin-form/employees-information";
import { Textarea } from "~/components/text-area";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const Schema = z
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

export function UserParser(data: unknown) {
  return Schema.safeParse(data);
}

export default function AdminForm() {
  const methods = useForm({
    defaultValues: {
      adminName: "",
      adminLastName: "",
      telephone: "",
      position: "",
      isResident: false,
      blockAndApartment: "",
      email: "",
      confirmEmail: "",
      password: "",
      confirmPassword: "",
      condominiumUsefulInformation: "",
    },
    resolver: zodResolver(Schema),
  });

  const onSave = (data: any) => {
    console.log("Form submitted:", data);
  };

  return (
    <FormProvider {...methods}>
      <Box className="flex-1 flex-col w-full">
        <Box className="flex-col  px-2 pb-9 pt-1.5 flex-1 bg-white rounded-lg border-green-primary border-2">
          <Box className="flex-col gap-5 mx-auto">
            <Box className="flex-col">
              <Text variant="title">Cadastro</Text>
              <Box className="gap-12">
                <Box className="w-20 h-20 bg-gray-400" />
                <Box className="flex-col gap-3">
                  <NameInput
                    label="Nome"
                    {...methods.register("adminName", { required: true })}
                    error={methods.formState.errors.adminName?.message}
                  />
                  <InputWithLabel
                    label="Sobrenome"
                    error={methods.formState.errors.adminLastName?.message}
                    {...methods.register("adminLastName", { required: true })}
                  />
                </Box>
              </Box>
            </Box>
            <BasicInformation />
            <CondominiumInformation />
            <EmployeesInformation />
            <SectionContainer>
              <SectionTitle>
                Inclua informações úteis para o condomínio
              </SectionTitle>
              <Item className="w-full">
                <Textarea
                  className="min-h-20"
                  {...methods.register("condominiumUsefulInformation")}
                />
              </Item>
            </SectionContainer>
            <Button
              onClick={methods.handleSubmit(onSave)}
              className="mx-20 bg-green-primary hover:bg-green-primary/90"
              size={"lg"}
            >
              Enviar
            </Button>
          </Box>
        </Box>
      </Box>
    </FormProvider>
  );
}
