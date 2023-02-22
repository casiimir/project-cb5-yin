import React, { useEffect, useState } from "react";
import MainLayout from "@/layout/mainLayout";
import { getFavouritesFromLS } from "@/utils/utils";
import styles from "@/styles/Favourites.module.scss";
import Review from "@/atoms/Review/Review";

function nextTrip() {
  const [favourites, setFavuorites] = useState(null);

  useEffect(() => {
    const fav = getFavouritesFromLS();
    setFavuorites(fav);
  }, []);

  return (
    <MainLayout>
      <div className={styles.FavouritesWrapper}>
        {favourites &&
          favourites.map((el, idx) => (
            <div key={idx} className={styles.Card}>
              <img src={el.main_photo_url} alt="image" />
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
      </div>
    </MainLayout>
  );
}

export default nextTrip;
