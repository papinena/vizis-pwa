import { Text } from "~/components/ui/text";
import { Box } from "~/components/ui/box";
import { Label } from "~/components/ui/label";
import { Input } from "~/components/ui/input";
import type { ReactNode } from "react";
import { Button } from "~/components/ui/button";
import { Checkbox } from "~/components/ui/checkbox";
import { cn } from "~/lib/utils";

function InputWithLabel({ label }: { label: string }) {
  return (
    <Box className="flex-col gap-1.5 flex-1">
      <Label>{label}</Label>
      <Input />
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

function ThemeItem({ children }: { children: ReactNode }) {
  return (
    <Box className="border basis-[calc((100%-1rem)/3)] p-2 text-center border-gray-200 rounded-lg">
      <Text>{children}</Text>
    </Box>
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
                <InputWithLabel label="Nome*" />
                <InputWithLabel label="Sobrenome*" />
              </Box>
            </Box>
          </Box>
          <Box className="flex-col gap-3">
            <Text className="text-[#4B4C4D]">Informações básicas</Text>
            <Box className="flex-col gap-3">
              <Item>
                <InputWithLabel label="Telefone / Whatsapp*" />
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
                <InputWithLabel label="Email*" />
                <InputWithLabel label="Confirme seu email*" />
              </Item>
              <Item>
                <Box className="flex-col w-full gap-3">
                  <Item>
                    <InputWithLabel label="Crie uma senha*" />
                    <InputWithLabel label="Confirme seu senha*" />
                  </Item>
                  <Box className="flex-col">
                    <Text>8 caracteres</Text>
                    <Text>Pelo menos 1 caracter especial</Text>
                    <Text>Pelo menos 1 numeral</Text>
                  </Box>
                </Box>
              </Item>
            </Box>
          </Box>
          <Box className="flex-col w-full">
            <Text className="text-[#4B4C4D]">Sobre o condomínio</Text>
            <Box className="w-full flex flex-wrap gap-2">
              <Item>
                <InputWithLabel label="Administradora" />
                <InputWithLabel label="Contato" />
              </Item>
              <Item>
                <InputWithLabel label="Endereço da Administradora" />
              </Item>
              <Item>
                <InputWithLabel label="Telefone" />
                <InputWithLabel label="Email" />
              </Item>
              <Item>
                <textarea />
              </Item>
              <Item>
                <InputWithLabel label="Porteiro Chefe" />
                <InputWithLabel label="Telefone Portaria" />
              </Item>
            </Box>
          </Box>
          <Box className="flex-col w-full">
            <Box className="flex flex-row items-center w-full">
              <Text className="text-[#4B4C4D] flex-1">Sobre o condomínio</Text>
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
                <InputWithLabel label="Telefone" />
                <InputWithLabel label="Email" />
              </Item>
              <Item>
                <InputWithLabel label="Porteiro Chefe" />
                <InputWithLabel label="Telefone Portaria" />
              </Item>
            </Box>
          </Box>
          <Box className="flex-col w-full">
            <Box className="flex flex-row items-center gap-1 w-full">
              <Text className="text-[#4B4C4D]">Funcionários</Text>
              <Text className="text-[8px] pt-2">
                (autorizados a postar pelo condomínio)
              </Text>
            </Box>
            <Box className="w-full flex flex-wrap gap-2">
              <Item>
                <InputWithLabel label="Nome" />
                <InputWithLabel label="Email" />
              </Item>
              <Item>
                <InputWithLabel label="Nome" />
                <InputWithLabel label="Email" />
              </Item>
              <Item>
                <InputWithLabel label="Nome" />
                <InputWithLabel label="Email" />
              </Item>
            </Box>
          </Box>
          <Box className="flex-col w-full">
            <Text className="text-[#4B4C4D]">
              Inclua informações úteis para o condomínio
            </Text>
            <textarea />
          </Box>
          <Button className="mx-20" size={"lg"}>
            Enviar
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
