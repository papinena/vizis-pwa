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
