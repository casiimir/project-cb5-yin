import { useState, useEffect, useContext } from 'react';
import { GET } from "@/utils/http";
import AppContext from "@/store/context";
import ModalInput from "../modalInput/ModalInput";
import styles from "./index.module.scss"

const FormSearch = () => {

    const [location, setLocation]= useState(null)
    const [data, setData] = useState([])
    const [openModal,setOpenModal]= useState(false)
    const {state} = useContext(AppContext)

    useEffect(() => {
         GET(`hotels/locations?locale=it&name=${location}`)
        .then((res) => { if (Array.isArray(res)){
            console.log(res)
            setData(res)}})   
    }, [location])

   
   
    const onHandleChangeInput = (value) =>{
            setLocation(value)
            if(openModal && value === ""){
                setOpenModal(false)
            }else if(!openModal) setOpenModal(true)
        }

  return (
    <form className={styles.FormSearch}>

           <div className={styles.wrapper}>
                <input value={state.location.label ? state.location.label : location} onChange={(e) => onHandleChangeInput (e.target.value)} type="search" placeholder="Dove ti va di andare?"/>
              { openModal && <ModalInput setOpenModal={setOpenModal} data={data} /> }
              <div className={styles.wrapDate}>
                <input  type="date"   />
                <input  type="date" />
              </div>  
                
                <input type="text" />
                <input value="Cerca" type="submit" />

           </div>

        


    </form>
  )
}




export default FormSearch
