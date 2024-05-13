import styles from "./ModalSelectInput.module.css"

export function ModalSelectInput(props) {
                    return (
                        <div className={styles.inputBox}>
                        <label htmlFor="time">Czas pobytu pacjenta:{""}</label>
                        <select
                            name="time"
                            defaultValue="null"
                            >
                            <option value={""}>Wybierz</option>
                            <option value={200}>Do godziny</option>
                            <option value={400}>1-3 h</option>
                            <option value={600}>3-6 h</option>
                            <option value={800}>Powyżej 6 h</option>
                        </select>
                    </div>
    )
}







// onChange={}
// onChange={(e) => {
// 	props.setSpecData((prevValue) => {
// 		if (e.target.value === "") {
// 			return { ...prevValue, priceTime: "", time: "" };
// 		} else {
// 			return {
// 				...prevValue,
// 				priceTime: e.target.value,
// 				time: e.target.selectedOptions[0].text,
// 			};
// 		}
// 	});
// }}
// onChange={(e) => console.log(e.target.selectedOptions[0].text)}