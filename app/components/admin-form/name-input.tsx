import type { InputHTMLAttributes } from "react";
import { Box } from "../ui/box";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

export function NameInput({
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
