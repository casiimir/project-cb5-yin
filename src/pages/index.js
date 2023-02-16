import Head from "next/head";
import MainLayout from "@/layout/mainLayout";
import styles from "@/styles/Home.module.scss";
import FormSearch from "@/components/formSearch";
import WorkTeam from "../components/workTeam";
import HotelList from "@/components/hotelList";
import FilterHotelList from "@/components/FilterHotelList";

export default function Home() {
  return (
    <>
      <Head>
        <title>Book Yin | Un clone in NextJS creato con gustoso diletto</title>
        <meta
          name="description"
          content="Book Yin | Un clone in NextJS creato con gustoso diletto"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="https://cf.bstatic.com/static/img/b25logo/favicon/ebc77706da3aae4aee7b05dadf182390f0d26d11.ico"
        />
      </Head>

      <main className={styles.main}>
        <MainLayout>
          <FormSearch />
          <FilterHotelList />
          <HotelList />
          <WorkTeam />
        </MainLayout>
      </main>
    </>
  );
}
