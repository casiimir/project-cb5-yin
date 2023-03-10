import styles from "./index.module.scss";

function HotelGallery({ galleryData }) {
  if (!galleryData) return <div>Loading</div>;

  return (
    <div className={styles.Gallery}>
      <div className={styles.GalleryTop}>
        <div className={styles.GalleryTopWrapper}>
          <img
            className={styles.GalleryWrapperTopImg}
            src={galleryData[1]?.url_max}
            alt="Image"
          />
          <img
            className={styles.GalleryWrapperBottomImg}
            src={galleryData[2]?.url_max}
            alt="Image"
          />
        </div>
        <div className={styles.GalleryTopImg}>
          <img
            src={galleryData[0]?.url_max}
            alt={galleryData[0]?.tags[0]?.tag}
          />
        </div>
      </div>
      <div className={styles.GalleryBottom}>
        {galleryData.map((photo, id) => {
          if (id < 3 || id > 7) return undefined;
          return (
            <div key={id}>
              <img
                className={styles.GalleryBottomImg}
                src={photo?.url_max}
                alt={photo?.tags[0]?.tag}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HotelGallery;
