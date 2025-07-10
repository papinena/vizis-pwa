import { Text } from "~/components/ui/text";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [{ title: "" }, { name: "", content: "" }];
}

export default function Home() {
  return <Text>hi</Text>;
}
