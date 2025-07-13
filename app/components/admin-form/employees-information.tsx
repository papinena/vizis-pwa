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
  const {
    register,
    formState: { errors },
  } = useFormContext<EmployeesInformationFormData>();

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
          <InputWithLabel
            label="Nome"
            {...register("employeeName1")}
            error={errors.employeeName1?.message}
          />
          <EmailInput
            label="Email"
            {...register("employeeEmail1")}
            error={errors.employeeEmail1?.message}
          />
        </Item>
        <Item>
          <InputWithLabel
            label="Nome"
            {...register("employeeName2")}
            error={errors.employeeName2?.message}
          />
          <EmailInput
            label="Email"
            {...register("employeeEmail2")}
            error={errors.employeeEmail2?.message}
          />
        </Item>
        <Item>
          <InputWithLabel
            label="Nome"
            {...register("employeeName3")}
            error={errors.employeeName3?.message}
          />
          <EmailInput
            label="Email"
            {...register("employeeEmail3")}
            error={errors.employeeEmail3?.message}
          />
        </Item>
      </Box>
    </SectionContainer>
  );
}
