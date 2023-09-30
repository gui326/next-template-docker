interface actionProps {
  type: "LOADINGFULL" | undefined;
  loadingFull: boolean;
}

export default function loadingFull(state = false, action: actionProps) {
  switch (action.type) {
    case "LOADINGFULL":
      return action.loadingFull;

    default:
      return state;
  }
}
