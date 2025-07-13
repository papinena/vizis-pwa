import { Box } from "~/components/ui/box";
import { Label } from "~/components/ui/label";
import { Input } from "~/components/ui/input";
import type { InputHTMLAttributes } from "react";
import { Text } from "../ui/text";

export function EmailInput({
  label,
  error,
  ...props
}: InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
}) {
  return (
    <Box className="flex-col gap-1.5 flex-1">
      <Label className="flex-1">{label ?? "Email"}</Label>
      <Input type="email" {...props} />
      {error && <Text className="text-red-500 text-sm">{error}</Text>}
    </Box>
  );
}
