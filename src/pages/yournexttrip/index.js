import React, { useContext, useEffect, useState } from "react";
import MainLayout from "@/layout/mainLayout/MainLayout";
import { getFavouritesFromLS } from "@/utils/utils";
import styles from "@/styles/Favourites.module.scss";
import Review from "@/atoms/Review/Review";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import CloseBtn from "@/atoms/CloseBtn/CloseBtn";
import Button from "@/atoms/Button/Button";
import AppContext from "@/store/context";
import Stars from "@/atoms/Stars/Stars";
import Head from "next/head";

function nextTrip() {
  const { state, dispatch } = useContext(AppContext);

  const router = useRouter();

  useEffect(() => {
    dispatch({ type: "SET_FAVOURITES", payload: getFavouritesFromLS() });
  }, []);
  return (
    <>
      <Head>
        <title>Booking | My Wish List</title>
        <meta name="description" content="Booking | My Wish List" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="https://cf.bstatic.com/static/img/b25logo/favicon/ebc77706da3aae4aee7b05dadf182390f0d26d11.ico"
        />
      </Head>
      <MainLayout>
        <div className={styles.headerWrapper}>
          <div className={styles.headerContainer}>
            <h1>Il tuo prossimo viaggio</h1>
            <p>
              <Image
                src={"heartred.svg"}
                width={14}
                height={14}
                alt="WishList"
              />{" "}
              Le tue strutture salvate
            </p>
          </div>
        </div>
        <div className={styles.FavouritesWrapper}>
          {!state.favourites || state.favourites.length === 0 ? (
            <>
              <div className={styles.noFav}>
                <div className={styles.icon}>
                  <Image
                    src={"heart.svg"}
                    width={40}
                    height={40}
                    alt="WishList"
                  />
                </div>
                <div className={styles.content}>
                  <h1>
                    Salva e condividi le strutture che ti piacciono di più
                  </h1>
                  <>
                    <p>
                      Grazie alle liste, puoi salvare le tue strutture preferite
                      e condividerle con gli amici da qualunque dispositivo,
                      quando vuoi.
                    </p>
                  </>
                  <br></br>
                  <span>
                    <h4>Comincia subito:</h4>
                    <br></br>
                    <ol>
                      <li>
                        Trova una struttura in cui ti piacerebbe soggiornare.
                      </li>
                      <li>Vai su “Aggiungi alla lista desideri”.</li>
                      <li>
                        Torna su questa pagina per consultare i tuoi preferiti
                        ogni volta che vuoi.
                      </li>
                    </ol>
                  </span>
                  <Link href={"/"}>
                    <Button
                      style="submit"
                      content="Trova la tua struttura ideale"
                    />
                  </Link>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className={styles.Fav}>
                {state.favourites?.map((el, idx) => (
                  <div key={idx} className={styles.Card}>
                    <div className={styles.ImageWrapper}>
                      <Image
                        src={el.main_photo_url.replace("square60", "square500")}
                        alt="image"
                        fill
                        sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                        priority
                      />
                    </div>
                    <div className={styles.Cardinfo}>
                      <div>
                        <div className={styles.CardHeader}>
                          <h3>{el.name}</h3>
                          <CloseBtn data={el} />
                        </div>
                        <div className={styles.star}>
                          <Stars number={el.class} />
                        </div>
                      </div>
                      <div className={styles.review}>
                        <Review data={el} />
                      </div>
                      <div className={styles.address}>
                        <div className={styles.country}>
                          <Image
                            src={`https://flagcdn.com/${el?.countrycode}.svg`}
                            width={25}
                            height={20}
                            alt="flag"
                          />
                          <span>
                            <p>
                              {el.country}, {el.city}
                              <br></br>
                              {el.address}
                            </p>
                          </span>
                        </div>
                      </div>
                      <div className={styles.input}>
                        <Button
                          onClick={() => router.push(`hotel/${el.hotel_id}`)}
                          style="submit"
                          content="Vedi struttura"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </MainLayout>
    </>
  );
}
export default nextTrip;
