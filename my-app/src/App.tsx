import React,{FC} from "react"
import Input from "./Input"
import Output from "./Output"
import styles from "./style.module.css"
import { useState } from "react"
const App : FC = () =>{
interface arr{
  id:number;
  name:string;
}
const [val,setVal] = useState<string>("")
const [vals,setVals] = useState<arr[]>([])
  return(
<>
<div className={styles.h1}>
<h1>TASKIFY APP</h1>
</div>
<Input val={val} setVal={setVal} vals ={vals} setVals={setVals}/>
<Output vals ={vals} setVals={setVals} />
</>
  )
}
export default App