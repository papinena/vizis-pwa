import { Text } from "~/components/ui/text";
import { Box } from "~/components/ui/box";
import { Button } from "~/components/ui/button";
import { useForm, Controller, FormProvider } from "react-hook-form";
import { TelephoneInput } from "~/components/admin-form/telephone-input";
import { InputWithLabel } from "~/components/input-with-label";
import { EmailInput } from "~/components/admin-form/email-input";
import { NameInput } from "~/components/admin-form/name-input";
import { SectionTitle } from "~/components/section-title";
import { Item } from "~/components/admin-form/item";
import { SectionContainer } from "~/components/section-container";
import { BasicInformation } from "~/components/admin-form/basic-information";
import type { BasicInformationFormData } from "interfaces/basic-information-admin-register-form";

function Textarea() {
  return (
    <textarea className="appearance-none resize-none w-full rounded-lg flex-1 border border-gray-400" />
  );
}

function CondominiumInformation() {
  return (
    <SectionContainer>
      <SectionTitle>Sobre o condomínio</SectionTitle>
      <Box className="w-full flex flex-wrap gap-2">
        <Item>
          <InputWithLabel name="administer" label="Administradora" />
          <InputWithLabel name="contact" label="Contato" />
        </Item>
        <Item>
          <InputWithLabel
            name="administer-address"
            label="Endereço da Administradora"
          />
        </Item>
        <Item>
          <TelephoneInput name="telephone" />
          <EmailInput name="email" />
        </Item>
        <Item className="w-full">
          <Textarea />
        </Item>
        <Item>
          <InputWithLabel name="porteiro-chefe" label="Porteiro Chefe" />
          <TelephoneInput label="Telefone Portaria" />
        </Item>
      </Box>
    </SectionContainer>
  );
}

function EmployeesInformation() {
  return (
    <SectionContainer>
      <Box className="flex flex-row items-center w-full">
        <SectionTitle className="flex-1">Funcionários</SectionTitle>
        <Text className="text-[8px] flex-1 pt-2">
          (autorizados a postar pelo condomínio)
        </Text>
      </Box>
      <Box className="w-full flex flex-wrap gap-2">
        <Item>
          <InputWithLabel label="Administradora" />
          <InputWithLabel label="Contato" />
        </Item>
        <Item className="w-full">
          <InputWithLabel label="Endereço da Administradora" />
        </Item>
        <Item>
          <TelephoneInput label="Telefone" />
          <EmailInput />
        </Item>
        <Item>
          <InputWithLabel label="Porteiro Chefe" />
          <TelephoneInput label="Telefone Portaria" />
        </Item>
      </Box>
    </SectionContainer>
  );
}

export default function AdminForm() {
  const methods = useForm({
    defaultValues: {
      telephone: "",
      position: "",
      isResident: false,
      blockAndApartment: "",
      email: "",
      confirmEmail: "",
      password: "",
      confirmPassword: "",
    },
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
                  <NameInput label="Nome*" />
                  <InputWithLabel label="Sobrenome*" />
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
                <Textarea />
              </Item>
            </SectionContainer>
            <Button
              onClick={methods.handleSubmit(onSave)}
              className="mx-20"
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
