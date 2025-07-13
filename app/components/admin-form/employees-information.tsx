import { InputWithLabel } from "../input-with-label";
import { SectionContainer } from "../section-container";
import { SectionTitle } from "../section-title";
import { Box } from "../ui/box";
import { Text } from "../ui/text";
import { EmailInput } from "./email-input";
import { Item } from "./item";
import { useFormContext } from "react-hook-form";
import type { EmployeesInformationFormData } from "interfaces/basic-information-admin-register-form";

export function EmployeesInformation() {
  const { register } = useFormContext<EmployeesInformationFormData>();

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
          <InputWithLabel label="Nome" {...register("employeeName1")} />
          <EmailInput label="Email" {...register("employeeEmail1")} />
        </Item>
        <Item>
          <InputWithLabel label="Nome" {...register("employeeName2")} />
          <EmailInput label="Email" {...register("employeeEmail2")} />
        </Item>
        <Item>
          <InputWithLabel label="Nome" {...register("employeeName3")} />
          <EmailInput label="Email" {...register("employeeEmail3")} />
        </Item>
      </Box>
    </SectionContainer>
  );
}
