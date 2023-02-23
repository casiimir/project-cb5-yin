import React, { useEffect, useState } from "react";
import MainLayout from "@/layout/mainLayout/MainLayout";
import { getFavouritesFromLS } from "@/utils/utils";
import styles from "@/styles/Favourites.module.scss";
import Review from "@/atoms/Review/Review";
import Image from "next/image";

function nextTrip() {
  const [favourites, setFavuorites] = useState(null);

  useEffect(() => {
    const fav = getFavouritesFromLS();
    setFavuorites(fav);
  }, []);

  return (
    <MainLayout>
      <div className={styles.FavouritesWrapper}>
        {!favourites ? (
          <h2>No results</h2>
        ) : (
          <>
            {favourites.map((el, idx) => (
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

                <h3>{el.name}</h3>
                <div>
                  <p>
                    {el.country} {el.city} {el.address}
                  </p>
                  <Review data={el} />
                </div>
                <button>Vedi struttura</button>
              </div>
            ))}
          </>
        )}
      </div>
    </MainLayout>
  );
}

export default nextTrip;
