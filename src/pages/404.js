import FormSearchPages from "@/components/formSearchPages/FormSearchPages";
import Link from "next/link";
import styles from "@/styles/404.module.scss";
import MainLayout from "@/layout/mainLayout/MainLayout";
import Head from "next/head";

const QuattroZeroQuattro = () => {
  return (
    <>
      <Head>
        <title>Booking | Errore 404</title>
        <meta name="description" content="Booking | Errore 404" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="https://cf.bstatic.com/static/img/b25logo/favicon/ebc77706da3aae4aee7b05dadf182390f0d26d11.ico"
        />
      </Head>
      <div>
        <MainLayout>
          <div className={styles.quattrozeroquattro}>
            <div className={styles.wrap}>
              <h2>404</h2>
            </div>
            <div className={styles.wrapper}>
              <h1>Pagina non trovata</h1>
              <p>ti aiutiamo a trovare quello che stavi cercando</p>
            </div>
          </div>
          <div className={styles.listOptions}>
            <div className={styles.otherOption}>
              <h3> Altre opzioni</h3>
              <Link href={"/"}>
                <li>Vai alla Home</li>
              </Link>
              <Link href={"/aboutUs"}>
                <li>About Us</li>
              </Link>
            </div>
          </div>
        </MainLayout>
      </div>
    </>
  );
};

export default QuattroZeroQuattro;
