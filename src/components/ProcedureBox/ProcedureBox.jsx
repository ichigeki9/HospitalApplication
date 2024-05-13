import { InputCheckbox } from '../InputCheckbox/InputCheckbox'
import styles from './ProcedureBox.module.css'

export function ProcedureBox(props) {


    const procedureList = props.proc



        const laboListCheck =  procedureList.map((obj, index) => {
            
             return (
                 <li key={obj.name}><InputCheckbox name={obj.name} checkVal={obj.isCheck} proc={obj.idProc} index={index} /></li>
             )
         })
        

    


    return (
        <div className={styles.procedureBox}>
             <fieldset className={styles.fieldset}>
             <legend>{procedureList[0].category}</legend>
            <ul> 
               {laboListCheck}
            </ul>
             </fieldset>
        </div>
    )
}