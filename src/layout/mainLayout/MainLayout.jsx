import Header from "@/components/header/Header";
import HeroBanner from "@/components/heroBanner/HeroBanner";
import Footer from "@/components/footer/Footer";
import styles from "./index.module.scss";
import { useRouter } from "next/router";
import { useContext, useLayoutEffect, useState } from "react";
import MainModal from "@/components/mainModal/MainModal";
import AppContext from "@/store/context";

const MainLayout = ({ children }) => {
  const [banner, setBanner] = useState();
  const router = useRouter();
  const { state } = useContext(AppContext);

  useLayoutEffect(() => {
    setBanner(router.pathname === "/");
  }, []);

  return (
    <div className={styles.MainLayout}>
      {state.showModal && <MainModal />}
      <Header />
      {banner && <HeroBanner />}
      <div className={styles.Main}>{children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
