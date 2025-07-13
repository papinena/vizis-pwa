import type { InputHTMLAttributes } from "react";
import { Box } from "../ui/box";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Text } from "../ui/text";

export function PasswordInput({
  label,
  error,
  ...props
}: InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
}) {
  return (
    <Box className="flex-col gap-1.5 flex-1">
      <Label>{label ?? "Senha"}</Label>
      <Input type="password" {...props} />
      {error && <Text className="text-red-500 text-sm">{error}</Text>}
    </Box>
  );
}
