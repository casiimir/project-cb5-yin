import FormReservation from "@/components/formReservation/FormReservation";
import MainLayout from "@/layout/mainLayout/MainLayout";
import Head from "next/head";
import BookingDetails from "@/components/bookingDetails/BookingDetails";
import styles from "@/styles/reservation.module.scss";
import CardReservation from "@/components/cardReservation/CardReservation";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Loader from "@/atoms/Loader/Loader";
import { GET } from "@/utils/http";
import ModalCheckOut from "@/components/modalCheckOut";
import DateFormReservation from "@/components/dateFormReservation/DateFormReservation";

export default function Reservation() {
  const [results, setResults] = useState({});
  const [loading, setLoading] = useState(true);
  const [showCheckoutModal, setShowCheckoutModal] = useState(false);
  const [dates, setDates] = useState({
    check_in: "",
    check_out: "",
  });

  const router = useRouter();

  const { pid, check_in, check_out } = router.query;

  useEffect(() => {
    if (router.query.check_in && router.query.check_out) {
      setDates({ check_in: check_in, check_out: check_out });
    }
  }, []);

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
        <title>Booking | The best Booking clone built with NextJS</title>
        <meta
          name="description"
          content="Booking | The best Booking clone built with NextJS"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="https://cf.bstatic.com/static/img/b25logo/favicon/ebc77706da3aae4aee7b05dadf182390f0d26d11.ico"
        />
      </Head>

      <ModalCheckOut
        showCheckoutModal={showCheckoutModal}
        setShowCheckoutModal={setShowCheckoutModal}
      />
      <MainLayout>
        <div
          onClick={() => setShowCheckoutModal(false)}
          className={styles.overlay}
        ></div>
        <div className={styles.container}>
          {loading ? (
            <div className={styles.loadingWrapper}>
              <Loader />
            </div>
          ) : (
            <>
              <div className={styles.wrapper}>
                <BookingDetails
                  results={results}
                  check_in={dates.check_in}
                  check_out={dates.check_out}
                />
                <DateFormReservation dates={dates} setDates={setDates} />
              </div>
              <div className={styles.wrap}>
                <h2>Le tue informazioni</h2>
                <CardReservation results={results} />
                <FormReservation setShowCheckoutModal={setShowCheckoutModal} />
              </div>
            </>
          )}
        </div>
      </MainLayout>
    </>
  );
}
