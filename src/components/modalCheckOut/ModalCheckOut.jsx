import styles from "./index.module.scss";
import { FiX } from "react-icons/fi";
import Button from "@/atoms/Button/Button";
import { useRouter } from "next/router";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

const ModalCheckOut = ({ showCheckoutModal, setShowCheckoutModal }) => {
  const router = useRouter();
  const { width, height } = useWindowSize();
  return (
    <>
      {showCheckoutModal && (
        <>
          <div className={styles.ModalCheckOut}>
            <Confetti
              width={width}
              height={height}
              numberOfPieces={100}
              initialVelocityY={3}
              colors={["#0071c2", "#ffff", "#febb02"]}
            />
            <div
              className={styles.overlay}
              onClick={() => {
                setShowCheckoutModal(false);
              }}
            ></div>
            <div className={styles.content}>
              <i className={styles.close}>
                <FiX
                  onClick={() => {
                    setShowCheckoutModal(false);
                  }}
                />
              </i>
              <div className={styles.text}>
                <h2>Congratulazioni!</h2>
                <h4>La tua prenotazione è confermata</h4>
              </div>

              <Button
                style={"submit"}
                content={"Torna alla home"}
                onClick={() => router.push("/")}
              />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ModalCheckOut;
