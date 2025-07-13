import { InputWithLabel } from "../input-with-label";
import { SectionContainer } from "../section-container";
import { SectionTitle } from "../section-title";
import { Box } from "../ui/box";
import { Text } from "../ui/text";
import { EmailInput } from "./email-input";
import { Item } from "./item";
import { TelephoneInput } from "./telephone-input";

export function EmployeesInformation() {
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
