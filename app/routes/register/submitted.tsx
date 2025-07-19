import { useSearchParams } from "react-router";
import { Box } from "~/components/ui/box";
import { Image } from "~/components/ui/image";
import { Text } from "~/components/ui/text";

export default function AdminIndex() {
  const [searchParams] = useSearchParams();
  const type = searchParams.get("type");

  return (
    <Box className="flex-1 h-full w-full">
      <Box className="flex  flex-1 flex-col">
        <Box className="relative items-start w-full z-1">
          <Image className="w-full" src="/Group 55.svg" />
        </Box>
        <Box className="p-5 text-center flex-col gap-5 flex rounded-2xl -mt-16 flex-1 z-1 bg-white h-full w-full">
          <Text
            className={
              (type == "admin" ? "text-green-primary" : "text-blue-primary") +
              " font-bold"
            }
          >
            Cadastro realizado com sucesso!
          </Text>
          <Text>
            Para garantir sua segurança, o acesso será aprovado pela
            Administração do Condomínio. Assim que liberado, você passa a contar
            com uma rede de apoio para chamar de sua :-)
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
