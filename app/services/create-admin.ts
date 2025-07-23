import { api } from "~/utils/api";

type CreateAdminProps = {
  employee: {
    name: string;
    last_name: string;
    email: string;
    password: string;
    telephone: string;
    position: string;
    is_resident: boolean;
    block?: string;
    apartment?: string;
  };
  condominium: {
    name: string;
    info?: string;
  };
  condominiumAdministrator: {
    name: string;
    contact?: string;
    address?: string;
    telephone?: string;
    email?: string;
    sub_trustee?: string;
    doorKeeperChief?: string;
    receptionTelephone?: string;
  };
  addedEmployees: { name: string; email: string }[];
};

const { BASE_URL } = api();

export async function createAdmin(data: CreateAdminProps) {
  const url = new URL(BASE_URL + "/register/admin");
  const headers = new Headers({ "Content-type": "application/json" });

  const res = await fetch(url, {
    method: "POST",
    headers,
    body: JSON.stringify(data),
  });

  if (res.status >= 400 && res.status < 500) {
    const json = (await res.json()) as { status: string; message: string };
    return { error: json };
  }

  return { data: await res.json() };
}
