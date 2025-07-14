import { InputWithLabel } from "../input-with-label";
import { SectionContainer } from "../section-container";
import { SectionTitle } from "../section-title";
import { Box } from "../ui/box";
import { Controller, useFormContext } from "react-hook-form";
import { Text } from "../ui/text";
import { EmailInput } from "./email-input";
import { Item } from "./item";
import { PasswordInput } from "./password-input";
import { TelephoneInput } from "./telephone-input";
import type { BasicInformationFormData } from "interfaces/basic-information-admin-register-form";
import { IsResidentCheckbox } from "~/components/is-resident-checkbox";

export function BasicInformation() {
  const { register, control, formState } =
    useFormContext<BasicInformationFormData>();
  const errors = formState.errors;

  return (
    <SectionContainer>
      <SectionTitle>Informações básicas</SectionTitle>
      <Box className="flex-col gap-3">
        <Item>
          <TelephoneInput
            label="Telefone / Whatsapp"
            error={errors.telephone?.message}
            {...register("telephone")}
          />
          <InputWithLabel
            label="Cargo no condomínio"
            {...register("position")}
            error={errors.position?.message}
          />
        </Item>
        <Item>
          <Box className="flex-1 flex-col gap-2">
            <Controller
              name="isResident"
              control={control}
              render={({ field }) => (
                <IsResidentCheckbox
                  value={field.value}
                  onChange={field.onChange}
                  error={errors.isResident?.message}
                />
              )}
            />
          </Box>
          <InputWithLabel
            label="Bloco e apartamento"
            {...register("blockAndApartment")}
            name="blockAndApartment"
            error={errors.blockAndApartment?.message}
          />
        </Item>
        <Item>
          <EmailInput error={errors.email?.message} {...register("email")} />
          <EmailInput
            label="Confirme seu email*"
            {...register("confirmEmail")}
            error={errors.confirmEmail?.message}
          />
        </Item>
        <Item>
          <Box className="flex-col w-full gap-3">
            <Item>
              <PasswordInput
                label="Crie uma senha*"
                {...register("password")}
                error={errors.password?.message}
              />
              <PasswordInput
                label="Confirme sua senha*"
                {...register("confirmPassword")}
                error={errors.confirmPassword?.message}
              />
            </Item>
            <Box className="flex-col">
              <Text className="text-sm text-gray-400">8 caracteres</Text>
              <Text className="text-sm text-gray-400">
                Pelo menos 1 caracter especial
              </Text>
              <Text className="text-sm text-gray-400">
                Pelo menos 1 numeral
              </Text>
            </Box>
          </Box>
        </Item>
      </Box>
    </SectionContainer>
  );
}
