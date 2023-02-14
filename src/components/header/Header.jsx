import styles from "./index.module.scss";
import { FaRegUserCircle } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import Button from "@/atoms/Button/Button";

const Header = () => {
  return (
    <header className={styles.Header}>
      <div className={styles.headerWrapper}>
        <img
          className={styles.logo}
          width="150px"
          src="/bookingWhite.svg"
          alt=""
        />
        <div className={styles.desktopWrapper}>
          <div className={styles.otherBtns}>
            <Button type="icon" content="EUR" className="Currency" />
            <Button type="icon" content="LANG" className="Language" />
          </div>

          <div className={styles.Login}>
            <Button type="primary" content="Iscriviti" />
            <Button type="primary" content="Accedi" />
          </div>
        </div>
        <div className={styles.mobileIcons}>
          <Button type="icon" content={<FaRegUserCircle />} />
          <Button type="icon" content={<FiMenu />} />
        </div>
      </div>
    </header>
  );
};

export default Header;
