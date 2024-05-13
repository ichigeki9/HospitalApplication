import styles from "./NavMenu.module.css";
import ambulance from "../../assets/ambulance.svg";
import apps from "../../assets/app.svg";

export function NavMenu() {
	return (
		<div className={styles.container}>
			<div className={styles.iconBox}>
				<a href="/proceApp">
                    <p>ProceduteApp</p>
					<img src={apps} />
				</a>
			</div>
			<div className={styles.iconBox}>
				<a href="/transportApp">
                <p>TransportApp</p>
					<img src={ambulance} />
				</a>
			</div>
		</div>
	);
}
