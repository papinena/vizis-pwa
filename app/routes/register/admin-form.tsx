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
import { zodResolver } from "@hookform/resolvers/zod";
import { CreateAdminSchema } from "~/parsers/create-admin";
import { Camera } from "lucide-react";
import { Image } from "~/components/ui/image";

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
      administer: "",
      contact: "",
      administerAddress: "",
      administerTelephone: "",
      administerEmail: "",
      observations: "",
      porteiroChefe: "",
      portariaTelephone: "",
      condominiumUsefulInformation: "",
      employeeName1: "",
      employeeEmail1: "",
      employeeName2: "",
      employeeEmail2: "",
      employeeName3: "",
      employeeEmail3: "",
    },
    resolver: zodResolver(CreateAdminSchema),
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
              <Box className="gap-12 m-auto">
                <Box className="flex-1 flex-col h-32 justify-center items-center w-32 m-auto rounded-2xl bg-gray-400">
                  <Image className="h-16 ml-3 w-16" src="/image 27.svg" />
                  <Text>+ foto</Text>
                </Box>
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
