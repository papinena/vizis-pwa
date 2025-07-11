import { Text } from "~/components/ui/text";
import { Box } from "~/components/ui/box";
import { Label } from "~/components/ui/label";
import { Input } from "~/components/ui/input";
import type { ReactNode } from "react";
import { Button } from "~/components/ui/button";

const themes = [
  "Alimento",
  "Eletrônico",
  "Musica",
  "Artesanato",
  "Esporte",
  "Pet",
  "Aula coletiva",
  "Festa",
  "Reciclagem",
  "Brinquedo",
  "Imóvel",
  "Roupa",
  "Costura",
  "Infantil",
  "Serviço",
  "Decoração",
  "Livro",
  "Transporte",
];

function InputWithLabel({ label }: { label: string }) {
  return (
    <Box className="flex-col gap-1.5 flex-1">
      <Label>{label}</Label>
      <Input />
    </Box>
  );
}

function Item({ children }: { children: ReactNode }) {
  return <Box className="gap-9">{children}</Box>;
}

function ThemeItem({ children }: { children: ReactNode }) {
  return (
    <Box className="border basis-[calc((100%-1rem)/3)] p-2 text-center border-gray-200 rounded-lg">
      <Text>{children}</Text>
    </Box>
  );
}

export default function Home() {
  return (
    <Box className="flex-1 flex-col w-full">
      <Box className="flex-col  px-2 pb-9 pt-1.5 flex-1 bg-white rounded-lg">
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
                <InputWithLabel label="Apartamento* (ex: 702)" />
                <InputWithLabel label="Bloco (se houver)" />
              </Item>
              <Item>
                <InputWithLabel label="Data de Nasc (xx/xx/xxxx)" />
                <InputWithLabel label="Telefone / Whatsapp*" />
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
            <Text className="text-[#4B4C4D]">
              Selecione temas do seu interesse*:
            </Text>
            <Box className="w-full flex flex-wrap gap-2">
              {themes.map((t) => (
                <ThemeItem key={t}>{t}</ThemeItem>
              ))}
              <Box className="w-full items-center gap-3">
                <Text>Outro</Text>
                <Input />
              </Box>
            </Box>
          </Box>
          <Button className="mx-20" size={"lg"}>
            Enviar
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
