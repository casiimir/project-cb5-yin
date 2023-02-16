import Header from "@/components/header";
import HeroBanner from "@/components/HeroBanner";
import Footer from "@/components/footer";
import styles from "./index.module.scss";

const MainLayout = ({ children }) => {
  return (
    <div className={styles.Layout}>
      <Header />
      <HeroBanner />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
