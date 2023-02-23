import { useState } from "react";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";
import styles from "./index.module.scss";
import Link from "next/link";

const ModalCheckOut = () => {
  const [showModal, setShowModal] = useState(false);

  let audio = new Audio("/SuperMarioBros.mp3");
  const start = () => {
    audio.play();
  };

  //   const onHandleClose = () => setShowModal(false);
  const onHandleShow = () => setShowModal(true);

  const onHandleModal = () => setShowModal(false);

  const { width, height } = useWindowSize();
  return (
    <>
      <button className={styles.Btn} onClick={() => { onHandleShow(); start();}}>
        Prenota subito
      </button>
      {showModal && (
        <>
          <div className={styles.ModalCheckOut}>
            <div className={styles.content}>
              <div className={styles.close}>
                <p onClick={onHandleModal}>X</p>
              </div>
              <div className={styles.write}>
                <h3>Congratulazioni</h3>
                <h4>La tua prenotazione è andata a buon fine</h4>
                <Link href={"/"}>
                  <p>Vai alla Home</p>
                </Link>
              </div>
            </div>
          </div>

          <div onClick={onHandleModal} className={styles.overlay}>
            <Confetti
              width={width}
              height={height}
              numberOfPieces={100}
              initialVelocityY={3}
              colors={["#0071c2", "#ffff", "#febb02"]}
            />
          </div>
        </>
      )}
    </>
  );
};

export default ModalCheckOut;
