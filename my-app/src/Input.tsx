import styles from './style.module.css'

interface arr{
    id:number;
    name:string;
  }
interface param{
    val:string;
    vals: arr[]
    setVal: React.Dispatch<React.SetStateAction<string>>
    setVals: React.Dispatch<React.SetStateAction<arr[]>>
}
const Input = ({val,setVal,vals,setVals}:param) => {
    console.log(vals)
const fun = (e : React.SyntheticEvent<EventTarget>) =>{
e.preventDefault()
setVals([...vals,{id:Date.now(),name:val}])
setVal("")
}
    return(
    <>
    <form onSubmit={fun}>
    <input className={styles.inp} value={val} onChange={(e) => {setVal(e.target.value)}}/>
    <input type='submit' className={styles.bt} value="GO" />
    </form>
    </>
    )
}
export default Input