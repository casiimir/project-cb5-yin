import styles from "./index.module.scss"

const FormSearch = () => {
  return (
    <form className={styles.FormSearch}>

           <div className={styles.wrapper}>
                <input type="search" placeholder="Dove ti va di andare?"/>
              <div className={styles.wrapDate}>
                <input type="date" />
                <input type="date" />
              </div>  
                
                <input type="text" />
                <input value="Cerca" type="submit" />

           </div>

        


    </form>
  )
}

export default FormSearch
