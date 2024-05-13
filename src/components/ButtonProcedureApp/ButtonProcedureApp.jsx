
import styles from './ButtonProcedureApp.module.css'


export function ButtonProcedureApp(props) {

    

    return(
        <button disabled={props.disabled} className={styles.btn} onClick={props.onClick} style={{ backgroundColor: props.active ? "#95f170" : 'none', border: props.disabled && ' 1px solid rgba(0, 0, 0, 0.3)' ,backgroundColor:props.disabled && 'white' }}
        
        >{props.title}</button>
    )
}