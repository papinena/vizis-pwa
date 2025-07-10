import { Text } from "~/components/ui/text";
import type { Route } from "./+types/home";
import { Box } from "~/components/ui/box";
import { Label } from "~/components/ui/label";
import { Input } from "~/components/ui/input";
import type { ReactNode } from "react";

export function meta({}: Route.MetaArgs) {
  return [{ title: "" }, { name: "", content: "" }];
}

function InputWithLabel({ label }: { label: string }) {
  return (
    <Box className="flex-col gap-1.5">
      <Label>{label}</Label>
      <Input />
    </Box>
  );
}

function Item({ children }: { children: ReactNode }) {
  return <Box className="gap-9">{children}</Box>;
}

export default function Home() {
  return (
    <Box className="flex-1 flex-col">
      <Box className="flex-col mx-5 my-3 px-2 py-1.5 flex-1 bg-white rounded-lg">
        <Box className="flex-col gap-5 mx-auto">
          <Box className="flex-col">
            <Text variant="title">Cadastro</Text>
            <Box className="gap-12">
              <Box className="w-20 h-20 bg-gray-400" />
              <Box className="flex-col gap-3">
                <InputWithLabel label="nome" />
                <InputWithLabel label="sobrenome" />
              </Box>
            </Box>
          </Box>
          <Box className="flex-col">
            <Text>Informações básicas</Text>
            <Item>
              <InputWithLabel label="Apartamento" />
              <InputWithLabel label="Bloco (se houver)" />
            </Item>
            <Item>
              <InputWithLabel label="Data de Nasc" />
              <InputWithLabel label="Telefone / Whatsapp" />
            </Item>
            <Item>
              <InputWithLabel label="Email" />
              <InputWithLabel label="Confirme seu email" />
            </Item>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
