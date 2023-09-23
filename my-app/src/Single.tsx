import styles from "./style.module.css"
import {AiFillDelete} from "react-icons/ai"
import {AiFillEdit} from "react-icons/ai"
import { useState } from "react"
interface arr{
    id:number;
    name:string;
  }
interface param{
    it : arr
    vals : arr[]
    setVals: React.Dispatch<React.SetStateAction<arr[]>>
}
const Single = ({it,vals,setVals}:param) => {
    const [ed,setEd] = useState<boolean>(false)
    const [nw,setNew] = useState<string>(" ")

    const del = (id:number) => {
       setVals(vals.filter((it) => id !== it.id))
    }

    const fun = (e : React.SyntheticEvent<EventTarget>) =>{
        e.preventDefault()
        setEd(false)
        }
return(
    
    <>
    
    <form onSubmit={fun} className={styles.sin}>
    {ed ?(
        <input   value={nw} onChange={(e) => {setNew(e.target.value)}}/>
):
    <span>{it.name}</span>}
    
    <div>
    <span onClick={() => {del(it.id)}}><AiFillDelete/></span>
    <span onClick={() => {setEd(!ed)}}><AiFillEdit/></span>
    </div>
    </form>
    </>
)
}
export default Single