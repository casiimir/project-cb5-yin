import React, { useContext, useEffect, useState } from "react";
import MainLayout from "@/layout/mainLayout/MainLayout";
import { getFavouritesFromLS } from "@/utils/utils";
import styles from "@/styles/Favourites.module.scss";
import Review from "@/atoms/Review/Review";
import Image from "next/image";
import { useRouter } from "next/router";
import Heart from "@/atoms/Heart/Heart";
import AppContext from "@/store/context";

function nextTrip() {
  const { state, dispatch } = useContext(AppContext);

  const router = useRouter();

  useEffect(() => {
    dispatch({ type: "SET_FAVOURITES", payload: getFavouritesFromLS() });
  }, []);

  return (
    <MainLayout>
      <div className={styles.FavouritesWrapper}>
        {!state.favourites ? (
          <h2>No results</h2>
        ) : (
          <>
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

                <div className={styles.CardHeader}>
                  <h3>{el.name}</h3>
                  <Heart data={el} />
                </div>
                <div className={styles.Cardinfo}>
                  <div className={styles.country}>
                    <Image
                      src={`https://flagcdn.com/${el?.countrycode}.svg`}
                      width={20}
                      height={15}
                      alt="flag"
                    />

                    <p>{el.country}</p>
                  </div>
                  <p className={styles.address}>
                    {el.city} {el.address}
                  </p>
                  <Review data={el} />
                </div>

                <button onClick={() => router.push(`hotel/${el.hotel_id}`)}>
                  Vedi struttura
                </button>
              </div>
            ))}
          </>
        )}
      </div>
    </MainLayout>
  );
}

export default nextTrip;
