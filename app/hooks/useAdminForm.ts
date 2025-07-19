import { useEffect, useState } from "react";
import type z from "zod";
import { CreateAdminSchema } from "~/parsers/create-admin";

const defaultValues = {
  adminName: "",
  adminLastName: "",
  telephone: "",
  position: "",
  isResident: undefined,
  blockAndApartment: "",
  email: "",
  confirmEmail: "",
  password: "",
  confirmPassword: "",
  administer: "",
  contact: "",
  administerAddress: "",
  administerTelephone: "",
  administerEmail: "",
  observations: "",
  doorKeeperChief: "",
  receptionTelephone: "",
  condominiumUsefulInformation: "",
  employees: [],
  condominiumName: "",
};

const STORAGE_KEY = "admin-form-fields";

export function useAdminForm() {
  const [fields, setFields] = useState<typeof defaultValues>(() => {
    if (typeof window === "undefined") return defaultValues;
    const storedValues = localStorage.getItem(STORAGE_KEY);
    if (!storedValues) return defaultValues;

    return JSON.parse(storedValues);
  });

  function setLocalStorageFields(f: typeof fields) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(f));
  }

  function _setFields(f: typeof fields) {
    setFields(f);
    setLocalStorageFields(f);
  }

  return { fields, setFields: _setFields };
}
