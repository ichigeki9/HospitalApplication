import styles from "./LoginLayout.module.css";

export function LoginLayout({ children }) {
	return <div className={styles.container}>{children}</div>;
}
