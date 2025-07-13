import { InputWithLabel } from "../input-with-label";
import { SectionContainer } from "../section-container";
import { SectionTitle } from "../section-title";
import { Textarea } from "../text-area";
import { Box } from "../ui/box";
import { EmailInput } from "./email-input";
import { Item } from "./item";
import { TelephoneInput } from "./telephone-input";
import { useFormContext } from "react-hook-form";
import type { CondominiumInformationFormData } from "interfaces/basic-information-admin-register-form";
import { Label } from "../ui/label";

export function CondominiumInformation() {
  const {
    register,
    formState: { errors },
  } = useFormContext<CondominiumInformationFormData>();

  return (
    <SectionContainer>
      <SectionTitle>Sobre o condomínio</SectionTitle>
      <Box className="w-full flex flex-wrap gap-2">
        <Item>
          <InputWithLabel
            label="Administradora"
            {...register("administer")}
            error={errors.administer?.message}
          />
          <InputWithLabel
            label="Contato"
            {...register("contact")}
            error={errors.contact?.message}
          />
        </Item>
        <Item className="w-full">
          <InputWithLabel
            label="Endereço da Administradora"
            {...register("administerAddress")}
            error={errors.administerAddress?.message}
          />
        </Item>
        <Item>
          <TelephoneInput
            label="Telefone"
            {...register("administerTelephone")}
            error={errors.administerTelephone?.message}
          />
          <EmailInput
            label="Email"
            {...register("administerEmail")}
            error={errors.administerEmail?.message}
          />
        </Item>
        <Item className="w-full">
          <Box className="flex flex-1 w-full flex-col gap-1.5">
            <Label>Sub-síndico e Conselheiros</Label>
            <Textarea
              className="min-h-20"
              {...register("observations")}
              error={errors.observations?.message}
            />
          </Box>
        </Item>
        <Item>
          <InputWithLabel
            label="Porteiro Chefe"
            {...register("doorKeeperChief")}
            error={errors.doorKeeperChief?.message}
          />
          <TelephoneInput
            label="Telefone Portaria"
            {...register("receptionTelephone")}
            error={errors.receptionTelephone?.message}
          />
        </Item>
      </Box>
    </SectionContainer>
  );
}
