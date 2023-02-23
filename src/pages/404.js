import FormSearchPages from "@/components/formSearchPages/FormSearchPages";
import Link from "next/link";
import styles from "@/styles/404.module.scss";
import MainLayout from "@/layout/mainLayout/MainLayout";

const QuattroZeroQuattro = () => {
  return (
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

        <FormSearchPages />

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
          <div className={styles.otherOption}>
            <h3>Strutture consigliate</h3>
            <Link href={"/hotel/1377073"}>
              <li>Riu Plaza Berlin</li>
            </Link>
            <Link href={"/hotel/1676161"}>
              <li>Maritim Hotel Plaza Tirana</li>
            </Link>
          </div>
        </div>
      </MainLayout>
    </div>
  );
};

export default QuattroZeroQuattro;
