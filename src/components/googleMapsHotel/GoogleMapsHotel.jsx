import styles from "./index.module.scss"

const GoogleMapsHotel = ({positionData}) => {
  return (
    <div className={styles.maps}>
     <img src={positionData?.map_preview_url} alt="local_img" /> 
     <h2>PROVA PROVA SA SA SA PROVA</h2>
    </div>
  )
}

export default GoogleMapsHotel;
