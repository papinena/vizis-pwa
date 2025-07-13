import { Text } from "~/components/ui/text";
import { Box } from "~/components/ui/box";
import { Label } from "~/components/ui/label";
import { Input } from "~/components/ui/input";
import type { InputHTMLAttributes, ReactNode } from "react";
import { Button } from "~/components/ui/button";
import { Checkbox } from "~/components/ui/checkbox";
import { cn } from "~/lib/utils";

function InputWithLabel({ label }: { label: string }) {
  return (
    <Box className="flex-col gap-1.5 flex-1">
      <Label className="flex-1">{label}</Label>
      <Input />
    </Box>
  );
}

function PasswordInput({
  inputProps,
  label,
}: {
  label?: string;
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
}) {
  return (
    <Box className="flex-col gap-1.5 flex-1">
      <Label>{label ?? "Senha"}</Label>
      <Input type="password" {...inputProps} />
    </Box>
  );
}

function NameInput({
  inputProps,
  label,
}: {
  label?: string;
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
}) {
  return (
    <Box className="flex-col gap-1.5 flex-1">
      <Label className="flex-1">{label ?? "Nome"}</Label>
      <Input {...inputProps} />
    </Box>
  );
}

function TelephoneInput({
  inputProps,
  label,
}: {
  label?: string;
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
}) {
  return (
    <Box className="flex-col gap-1.5 flex-1">
      <Label className="flex-1">{label ?? "Telefone"}</Label>
      <Input {...inputProps} />
    </Box>
  );
}

function EmailInput({
  label,
  inputProps,
}: {
  label?: string;
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
}) {
  return (
    <Box className="flex-col gap-1.5 flex-1">
      <Label className="flex-1">{label ?? "Email"}</Label>
      <Input type="email" {...inputProps} />
    </Box>
  );
}

function Item({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <Box className={cn("gap-9", className)}>{children}</Box>;
}

function SectionContainer({ children }: { children: ReactNode }) {
  return <Box className="flex-col gap-3">{children}</Box>;
}

function Textarea() {
  return (
    <textarea className="appearance-none resize-none w-full rounded-lg flex-1 border border-gray-400" />
  );
}

function BasicInformation() {
  return (
    <SectionContainer>
      <SectionTitle>Informações básicas</SectionTitle>
      <Box className="flex-col gap-3">
        <Item>
          <TelephoneInput label="Telefone / Whatsapp*" />
          <InputWithLabel label="Cargo no condomínio*" />
        </Item>
        <Item>
          <Box className="flex-1 flex-col gap-2">
            <Text>É morador?*</Text>
            <Box className="w-full gap-3">
              <Box className="gap-1.5 flex-1">
                <Checkbox className="h-7 w-7" />
                <Label>Sim</Label>
              </Box>
              <Box className="gap-1.5 flex-1">
                <Checkbox className="h-7 w-7" />
                <Label>Não</Label>
              </Box>
            </Box>
          </Box>
          <InputWithLabel label="Bloco e apartamento" />
        </Item>
        <Item>
          <EmailInput />
          <EmailInput label="Confirme seu email*" />
        </Item>
        <Item>
          <Box className="flex-col w-full gap-3">
            <Item>
              <PasswordInput label="Crie uma senha*" />
              <PasswordInput label="Confirme seu senha*" />
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

function CondominiumInformation() {
  return (
    <SectionContainer>
      <SectionTitle>Sobre o condomínio</SectionTitle>
      <Box className="w-full flex flex-wrap gap-2">
        <Item>
          <InputWithLabel label="Administradora" />
          <InputWithLabel label="Contato" />
        </Item>
        <Item>
          <InputWithLabel label="Endereço da Administradora" />
        </Item>
        <Item>
          <TelephoneInput />
          <EmailInput />
        </Item>
        <Item className="w-full">
          <Textarea />
        </Item>
        <Item>
          <InputWithLabel label="Porteiro Chefe" />
          <TelephoneInput label="Telefone Portaria" />
        </Item>
      </Box>
    </SectionContainer>
  );
}

function SectionTitle({
  children,
  className,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <Text className={cn("text-[#4B4C4D] flex-1", className)}>{children}</Text>
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
  return (
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
          <Button className="mx-20" size={"lg"}>
            Enviar
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
