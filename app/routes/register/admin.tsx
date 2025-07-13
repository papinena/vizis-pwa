import { Link } from "react-router";
import { Box } from "~/components/ui/box";
import { Image } from "~/components/ui/image";
import { Text } from "~/components/ui/text";

export default function AdminIndex() {
  return (
    <Box className="flex-1 h-full w-full">
      <Box className="flex  flex-1 flex-col">
        <Box className="relative items-start w-full z-1">
          <Image className="w-full" src="/register-admin-image-card.svg" />
          <Image
            className="absolute left-32 top-18 h-8 w-8"
            src="/Group 152.svg"
          />
        </Box>
        <Box className="p-5 flex-col gap-5 flex rounded-2xl -mt-16 flex-1 z-1 bg-white h-full w-full">
          <Text className="text-green-primary">
            Olá, <strong>Administração do Condomínio XXX</strong>, sejam
            bem-vindos(as) ao Vizis!
          </Text>
          <Text className="font-bold">
            O Vizis tem uma área exclusiva para você e seu time!
          </Text>
          <Text>
            Nela você pode fazer
            <strong className="text-green-primary  mx-1">
              a gestão dos moradores, compartilhar informações
            </strong>
            relevantes sobre o condomínio,
            <strong className="text-green-primary mx-1">
              divulgar benfeitorias
            </strong>
            realizadas e se aproximar dos moradores.
          </Text>
          <Text> Aproveite!</Text>
          <Link
            className="bg-green-primary rounded-sm flex p-2 mx-5 justify-center"
            to={"./form"}
          >
            <Text className="font-normal text-white">Cadastre-se já!</Text>
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
