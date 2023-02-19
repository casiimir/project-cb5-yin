import styles from "./index.module.scss";
import { FaRegUserCircle } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import Button from "@/atoms/Button/Button";
import Navbar from "@/components/navbar";
import AppContext from "@/store/context";
import { useContext } from "react";
import { cases } from "@/store/reducers";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const { state, dispatch } = useContext(AppContext);

  const logout = () => {
    dispatch({
      type: cases.SET_AUTH,
      payload: { status: false, username: "" },
    });
  };

  return (
    <header className={styles.Header}>
      <div className={styles.wrapperHeader}>
        <div className={styles.headerTop}>
          <Link href={"/"}>
            <div className={styles.headerLogo}>
              <img width="140px" src="/bookingWhite.svg" alt="" />
            </div>
          </Link>

          <div className={styles.userSection}>
            <div className={styles.userCurrency}>
              <Button style="currency" content="EUR" />
            </div>
            <Image
              className={styles.userLanguage}
              width={24}
              height={24}
              src="https://t-cf.bstatic.com/design-assets/assets/v3.56.0/images-flags/It@3x.png"
            />
            <Button style="icon" content={<FaRegUserCircle />} />
            <div className={styles.mobileBtnsLogin}>
              <Button style="icon" content={<FiMenu />} />
            </div>
            <h3 className={styles.desktopBtnsLogin}>{state.auth.username}</h3>
            <div className={styles.desktopBtnsLogin}>
              <Button style="primary" content="Iscriviti" />
              {state.auth.username ? (
                <Button onClick={logout} style="primary" content="Logout" />
              ) : (
                <Link href={"/login"}>
                  <Button style="primary" content="Accedi" />
                </Link>
              )}
              <Link href={"/login"}></Link>
            </div>
          </div>
        </div>
        <div>
          <Navbar />
        </div>
      </div>
    </header>
  );
};

export default Header;
