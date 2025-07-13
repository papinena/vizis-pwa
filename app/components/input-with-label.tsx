import type { InputHTMLAttributes } from "react";
import { Box } from "./ui/box";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Text } from "./ui/text";

export function InputWithLabel({
  label,
  error,
  ...props
}: InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
}) {
  return (
    <Box className="flex-col gap-1.5 flex-1">
      <Label className="flex-1">{label}</Label>
      <Input {...props} />
      {error && <Text className="text-red-500 text-sm">{error}</Text>}
    </Box>
  );
}
