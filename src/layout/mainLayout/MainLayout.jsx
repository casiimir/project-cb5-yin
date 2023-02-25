import Header from "@/components/header/Header";
import HeroBanner from "@/components/heroBanner/HeroBanner";
import Footer from "@/components/footer/Footer";
import styles from "./index.module.scss";
import { useRouter } from "next/router";
import { useContext, useLayoutEffect, useState } from "react";
import MainModal from "@/components/mainModal/MainModal";
import AppContext from "@/store/context";
import { useWindowSize } from "react-use";

const MainLayout = ({ children }) => {
  const [banner, setBanner] = useState();
  const router = useRouter();
  const { width } = useWindowSize();
  const { state } = useContext(AppContext);
  const [layoutType, setlayoutType] = useState();

  useLayoutEffect(() => {
    setBanner(router.pathname === "/");
  }, []);

  useLayoutEffect(() => {
    setlayoutType(router.pathname == "/mywishlist" ? "mywishlist" : "");
  }, [router.isReady]);

  return (
    <div
      className={
        layoutType === "mywishlist"
          ? `${styles.MainLayoutWish}`
          : `${styles.MainLayout}`
      }
    >
      {state.showModal && width < 1024 && <MainModal />}
      <Header />
      {banner && <HeroBanner />}
      <div className={styles.Main}>{children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
