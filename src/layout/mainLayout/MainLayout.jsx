import Header from "@/components/header";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import styles from "./index.module.scss";

const MainLayout = ({ children }) => {
  return (
    <div className={styles.Layout}>
      <Header />
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
