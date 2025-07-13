import { InputWithLabel } from "../input-with-label";
import { SectionContainer } from "../section-container";
import { SectionTitle } from "../section-title";
import { Textarea } from "../text-area";
import { Box } from "../ui/box";
import { EmailInput } from "./email-input";
import { Item } from "./item";
import { TelephoneInput } from "./telephone-input";

export function CondominiumInformation() {
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
