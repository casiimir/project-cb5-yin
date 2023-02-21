import FormReservation from "@/components/formReservation";
import MainLayout from "@/layout/mainLayout";
import Head from "next/head";
import BookingDetails from "@/components/bookingDetails";
import styles from "../../styles/reservation.module.scss";
import CardReservation from "@/components/cardReservation";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Loader from "@/atoms/Loader/Loader";
import { GET } from "@/utils/http";

export default function Reservation() {
  const [results, setResults] = useState({});
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
        <Loader />
      ) : (
        <>
          <main className={styles.main}>
            <MainLayout>
              <div className={styles.container}>
                <div className={styles.wrapper}>
                  <BookingDetails results={results} />
                </div>
                <div className={styles.wrap}>
                  <CardReservation results={results} />
                  <FormReservation />
                </div>
              </div>
            </MainLayout>
          </main>
        </>
      )}
    </>
  );
}
