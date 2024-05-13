import { Button } from "../Button/Button"
import { InputText } from "../inputText/inputText"
import styles from "./LoginBoxItem.module.css"

export function LoginBoxItem () {

    return (
        <div className={styles.box}>
             <InputText defVal={"Login"} type={"text"} /> 
			<InputText defVal={"Hasło"} type={"password"} />
           <a href="/menu"><Button title={'Zaloguj'}/></a>  
        </div>
        
    )
}