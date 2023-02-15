import Head from "next/head";
import MainLayout from "@/layout/mainLayout";
import styles from "@/styles/Home.module.scss";
import FormSearch from "@/components/formSearch";
import { useReducer } from "react";
import reducer from "@/store/reducers";
import initialValue from './../store/state';
import AppContext from "@/store/context";
import HotelList from "@/components/hotelList";

export default function Home() {
  const [state, dispatch] = useReducer(reducer, initialValue);
 
  return (
    <>
      <Head>
        <title>
          Booking.com | Sito ufficiale | I migliori hotel, voli, noleggi auto e
          alloggi{" "}
        </title>
        <meta
          name="description"
          content="Booking.com | Sito ufficiale | I migliori hotel, voli, noleggi auto e alloggi  "
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="https://cf.bstatic.com/static/img/b25logo/favicon/ebc77706da3aae4aee7b05dadf182390f0d26d11.ico"
        />
      </Head>
      
      <main className={styles.main}>
      <AppContext.Provider value={{state, dispatch}}>
        <MainLayout> 
          <FormSearch />
          <HotelList />
        </MainLayout>
      </AppContext.Provider>
        
      </main>
    </>
  );
}
