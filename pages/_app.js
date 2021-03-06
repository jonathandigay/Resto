import "../styles/globals.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";
import Script from "next/script";
import { AuthProvider } from "../context/AuthProvider";
import { ToogleProvider } from "../context/Toogle";
import Layout from "../components/Layout";
import { useState } from "react";
import "aos/dist/aos.css";
import { OrderContext } from "../context/orderContext";
import { LoaderContext } from "../context/loader";

function MyApp({ Component, Props }) {
  const [isLoader, setIsLoader] = useState(false);
  const [isOrder, setIsOrder] = useState();
  const [reject, setReject] = useState();
  const [approve, setApproved] = useState();
  const [completed, setCompleted] = useState();
  const [rejectinfo, setRejectinfo] = useState();
  const [isCancel, setIsCancel] = useState();

  const ordervalue = {
    isOrder,
    setIsOrder,
    reject,
    setReject,
    isCancel,
    setIsCancel,
    rejectinfo,
    setRejectinfo,
    completed,
    setCompleted,
    approve,
    setApproved,
  };
  return (
    <>
      <Head>
        <title>Resto | Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/assets/resto.png" />
      </Head>
      <Script
        src="https://kit.fontawesome.com/fe2e019d14.js"
        crossOrigin="anonymous"
      ></Script>
      <OrderContext.Provider value={ordervalue}>
        <LoaderContext.Provider value={{ isLoader, setIsLoader }}>
          <AuthProvider>
            <ToogleProvider>
              <Layout>
                <Component {...Props} />
              </Layout>
            </ToogleProvider>
          </AuthProvider>
        </LoaderContext.Provider>
      </OrderContext.Provider>
    </>
  );
}

export default MyApp;
