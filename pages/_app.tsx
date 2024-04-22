import Layout from "@components/layout";
import Head from "next/head";
import { SWRConfig } from "swr";
import "../global.css";

export default function App({ Component, pageProps }: any) {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <SWRConfig
        value={{
          fetcher: (url: string) =>
            fetch(url).then((response) => response.json()),
        }}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SWRConfig>
    </>
  );
}
