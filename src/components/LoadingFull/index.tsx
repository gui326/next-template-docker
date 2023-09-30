import { Backdrop, CircularProgress } from "@mui/material";

import { TextLoading } from "./styled";

export default function LoadingFull({ open }: { open: boolean }) {
  if (!open) {
    return null;
  }

  return (
    <Backdrop
      sx={{
        color: "#fff",
        flexDirection: "column",
        zIndex: (theme) => theme.zIndex.drawer + 1000,
      }}
      open={Boolean(open)}
    >
      <CircularProgress color="inherit" sx={{ color: "var(--red-500)" }} />

      <TextLoading>Aguarde, carregando...</TextLoading>
    </Backdrop>
  );
}
