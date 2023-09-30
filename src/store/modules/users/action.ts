export function logar(users: {
  name: string;
  email: string;
  role: "ADMIN" | "COMUM";
}) {
  return {
    type: "LOGAR",
    users,
  };
}

export function deslogar() {
  return {
    type: "DESLOGAR",
  };
}
