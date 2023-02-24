import React from "react";
import MainLayout from "@/layout/mainLayout/MainLayout";
import SearchWrapper from "@/components/searchPage/SearchWrapper";
import Head from "next/head";

function Search() {
  return (
    <>
      <Head>
        <title>Booking | Ricerca il tuo soggiorno ideale</title>
        <meta
          name="description"
          content="Booking | Ricerca il tuo soggiorno ideale"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="https://cf.bstatic.com/static/img/b25logo/favicon/ebc77706da3aae4aee7b05dadf182390f0d26d11.ico"
        />
      </Head>
      <MainLayout>
        <SearchWrapper />
      </MainLayout>
    </>
  );
}

export default Search;
