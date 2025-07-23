import type { CreateAdminType } from "~/parsers/create-admin";
import { api } from "~/utils/api";

const { BASE_URL } = api();

export async function createAdmin(data: CreateAdminType) {
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
