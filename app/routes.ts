import { type RouteConfig, layout, route } from "@react-router/dev/routes";

export default [
  route("register", "./routes/layout.tsx", [
    layout("./routes/register/layout.tsx", [
      route("user", "./routes/register/user.tsx", [
        route("form", "./routes/register/user-form.tsx"),
      ]),
      route("admin", "./routes/register/admin.tsx", [
        route("form", "./routes/register/admin-form.tsx"),
      ]),
    ]),
  ]),
] satisfies RouteConfig;
