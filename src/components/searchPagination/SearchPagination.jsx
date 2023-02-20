import styles from "./index.module.scss"
import Image from "next/image"


const SearchPagination = ({navigation, setNavigation}) => {
    
  return (
    <nav className={styles.searchPagination} >
    {navigation > 0 && <button className={styles.btnArrow} onClick={() => setNavigation((prevState) => prevState - 1)}>
    <Image
              className={styles.svg}
              src="/arrowleft.svg"
              alt="arrowleft"
              width={20}
              height={20}
              priority
            />
    </button>}
        
        <ol>
        {
            navigation > 0 && <li><button>{navigation}</button></li>
        }
            
            <li><button>{navigation + 1}</button></li>
            <li><button>{navigation + 2}</button></li>
        </ol>
        <button className={styles.btnArrow} onClick={() => setNavigation((prevState) => prevState + 1)}>
        <Image
              className={styles.svg}
              src="/arrowright.svg"
              alt="arrowright"
              width={20}
              height={20}
              priority
            />
        </button>
    </nav>
  )
}

export default SearchPagination