import React, { useEffect, useMemo } from "react";
import type { AppProps } from "next/app";
import { Provider, useDispatch, useSelector } from "react-redux";
import { SnackbarProvider } from "notistack";

import "../styles/globals.css";
import store from "../store";
import { logar } from "@/store/modules/users/action";
import LoadingFull from "@/components/LoadingFull";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <SnackbarProvider maxSnack={3} autoHideDuration={2000}>
        <Component {...pageProps} />

        <WrapperComponent />
      </SnackbarProvider>
    </Provider>
  );
};

const WrapperComponent = () => {
  const dispatch = useDispatch();

  const loadingFull: any = useSelector((state: any) => state.loadingFull);

  const memoLoadingFull = useMemo(() => {
    return <LoadingFull open={loadingFull} />;
  }, [loadingFull]);

  useEffect(() => {
    const userData = JSON.parse(localStorage?.getItem("user")!);

    if (userData) {
      dispatch(logar(userData));
    }
  }, []);

  return <>{memoLoadingFull}</>;
};

export default MyApp;
