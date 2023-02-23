import FormReservation from "@/components/formReservation/FormReservation";
import MainLayout from "@/layout/mainLayout/MainLayout";
import ModalCheckOut from "@/components/modalCheckOut/ModalCheckOut";
import Head from "next/head";
import BookingDetails from "@/components/bookingDetails/BookingDetails";
import styles from "@/styles/reservation.module.scss";
import CardReservation from "@/components/cardReservation/CardReservation";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Loader from "@/atoms/Loader/Loader";
import { GET } from "@/utils/http";

export default function Reservation() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  const router = useRouter();
  const { pid } = router.query;
  useEffect(() => {
    setLoading(true);
    if (router.isReady) {
      GET(`hotels/data?hotel_id=${pid}&locale=it`)
        .then((res) => {
          console.log(res);
          setResults(res);
        })
        .finally(() => setLoading(false));
    }
  }, [router.isReady]);

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
      {loading ? (
        <>
          <MainLayout>
            <div className={styles.container}>
              <div className={styles.wrapper}>
                <BookingDetails />
              </div>
              <div className={styles.wrap}>
                <CardReservation results={results} />
                <FormReservation />
                <ModalCheckOut />
              </div>
            </div>
          </MainLayout>
        </>
      ) : (
        <Loader />
      )}
      <main className={styles.main}></main>
    </>
  );
}
