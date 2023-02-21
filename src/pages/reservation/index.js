import FormReservation from "@/components/formReservation";
import MainLayout from "@/layout/mainLayout";

export default function Reservation() {
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
          <FormReservation />
        </MainLayout>
      </main>
    </>
  );
}
