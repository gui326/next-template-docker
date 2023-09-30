export default function users(state = null, action: any) {
  switch (action.type) {
    case "LOGAR":
      return action.users;

    case "DESLOGAR":
      return null;

    default:
      return state;
  }
}
