import { InputWithLabel } from "../input-with-label";
import { SectionContainer } from "../section-container";
import { SectionTitle } from "../section-title";
import { Box } from "../ui/box";
import { useForm, Controller } from "react-hook-form";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";
import { Text } from "../ui/text";
import { EmailInput } from "./email-input";
import { Item } from "./item";
import { PasswordInput } from "./password-input";
import { TelephoneInput } from "./telephone-input";
import { Button } from "../ui/button";

// Form data type
type BasicInformationFormData = {
  telephone: string;
  position: string;
  isResident: boolean;
  blockAndApartment: string;
  email: string;
  confirmEmail: string;
  password: string;
  confirmPassword: string;
};

export function BasicInformation() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<BasicInformationFormData>({
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

  const onSubmit = (data: BasicInformationFormData) => {
    console.log("Form submitted:", data);
  };

  return (
    <SectionContainer>
      <SectionTitle>Informações básicas</SectionTitle>
      <Box className="flex-col gap-3">
        <Item>
          <TelephoneInput
            label="Telefone / Whatsapp*"
            error={errors.telephone?.message}
            {...register("telephone")}
          />
          <InputWithLabel
            label="Cargo no condomínio*"
            {...register("position")}
            error={errors.position?.message}
          />
        </Item>
        <Item>
          <Box className="flex-1 flex-col gap-2">
            <Text>É morador?*</Text>
            <Controller
              name="isResident"
              control={control}
              render={({ field }) => (
                <Box className="w-full gap-3">
                  <Box className="gap-1.5 flex-1">
                    <Checkbox
                      className="h-7 w-7"
                      checked={field.value === true}
                      onCheckedChange={() => field.onChange(true)}
                    />
                    <Label>Sim</Label>
                  </Box>
                  <Box className="gap-1.5 flex-1">
                    <Checkbox
                      className="h-7 w-7"
                      checked={field.value === false}
                      onCheckedChange={() => field.onChange(false)}
                    />
                    <Label>Não</Label>
                  </Box>
                </Box>
              )}
            />
            {errors.isResident && (
              <Text className="text-red-500 text-sm">
                {errors.isResident.message}
              </Text>
            )}
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
      <Button onClick={handleSubmit(onSubmit)} className="mx-20" size={"lg"}>
        Enviar
      </Button>
    </SectionContainer>
  );
}
