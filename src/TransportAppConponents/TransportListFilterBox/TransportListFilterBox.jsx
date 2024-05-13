import styles from "./TransportListFilterBox.module.css";

export function TransportListFilterBox() {
	return (
		<>
			<div className={styles.filterBox}>
				<div className={styles.lp}>
					<p>Lp.</p>
				</div>
				<div>
					<p>Data</p>
				</div>
				<div>
					<p>Godzina</p>
				</div>
				<div>
					<p>Z</p>
				</div>
				<div>
					<p>Do</p>
				</div>
				<div>
					<p>Szacowany Czas</p>
				</div>
				<div>
					<p>info</p>
				</div>
			</div>
		</>
	);
}
