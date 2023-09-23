import styles from './style.module.css'
import Single from './Single'
interface arr{
    id:number;
    name:string;
  }
  interface param{
    
    vals: arr[]
    
    setVals: React.Dispatch<React.SetStateAction<arr[]>>
}

const Output = ({vals,setVals}:param) => {
    return(
        <>
        <div className={styles.out}>
 {vals.map(item => <Single it = {item}  vals = {vals} setVals={setVals} />)
}
</div>
</>
)
}
export default Output