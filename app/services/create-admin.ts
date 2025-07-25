import type { CreateAdminType } from "~/parsers/create-admin";
import { api } from "~/utils/api";

const { BASE_URL } = api();

class AdminMapper {
  static toAPI(data: CreateAdminType): AdminAPIProps {
    return {
      name: data.employee.name,
      last_name: data.employee.lastName,
      birth_date: data.employee.birthDate,
      telephone: data.employee.telephone,
      position: data.employee.position,
      is_resident: Boolean(data.employee.isResident),
      block: data.employee.block,
      apartment: data.employee.apartment,
      email: data.employee.email,
    };
  }
}

class CondominiumAdministratorMapper {
  static toAPI(data: CreateAdminType) {
    return {
      name: data.condominiumAdministrator.name,
      contact: data.condominiumAdministrator.contact,
      address: data.condominiumAdministrator.address,
      telephone: data.condominiumAdministrator.telephone,
      counsil: data.condominiumAdministrator.counsil,
      email: data.condominiumAdministrator.email,
      door_keeper_chief: data.condominiumAdministrator.doorKeeperChief,
      reception_telephone: data.condominiumAdministrator.receptionTelephone,
    };
  }
}

type AdminAPIProps = {
  name: string;
  last_name: string;
  birth_date?: string;
  telephone: string;
  position: string;
  is_resident: boolean;
  block?: string;
  apartment?: string;
  email: string;
};

export async function createAdmin(data: CreateAdminType) {
  const url = new URL(BASE_URL + "/register/admin");
  const headers = new Headers({ "Content-type": "application/json" });

  const body = {
    condominium: { ...data.condominium },
    employees: data.employees.map((e) => ({
      last_name: "",
      telephone: "",
      position: "",
      is_resident: false,
      email: e.email,
      name: e.name,
      password: "0123456",
      is_register_completed: false,
      permission: "ADMIN",
    })),
    condominiumAdministrator: CondominiumAdministratorMapper.toAPI(data),
    employee: {
      ...AdminMapper.toAPI(data),
      password: data.employee.password,
      permission: "ADMIN",
    },
  };

  const res = await fetch(url, {
    method: "POST",
    headers,
    body: JSON.stringify(body),
  });

  if (res.status >= 400 && res.status < 500) {
    const json = (await res.json()) as { status: string; message: string };
    return {
      error: {
        message: "Algo deu errado. Entre em contato com o suporte",
        code: JSON.stringify(json),
      },
    };
  }

  return { data: await res.json() };
}
