import styles from "./index.module.scss";
import { FaRegUserCircle } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import Button from "@/atoms/Button/Button";
import Navbar from "@/components/navbar"
import AppContext from "@/store/context";
import { useContext } from "react";
import { cases } from "@/store/reducers";
import Link from "next/link";

const Header = () => {
  const {state, dispatch} = useContext(AppContext);

  console.log(state)

  const logout= () => {


    dispatch({ type: cases.SET_AUTH, payload: {status: false, username: ""}})
  }


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
            <h3>{state.auth.username}</h3>
            
            <Button type="primary" content="Iscriviti" />
            {state.auth.username ? <Button onClick={logout} type="primary"  content="Logout" /> : <Link href={"/login"}><Button type="primary" content="Accedi" /></Link>}
            <Link href={"/login"}>
            </Link>
          </div>
        </div>
        <div className={styles.mobileIcons}>
          <Button type="icon" content={<FaRegUserCircle />} />
          <Button type="icon" content={<FiMenu />} />
        </div>
      </div>
      <div>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
