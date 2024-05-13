import styles from "./TransportListContainer.module.css"

export function TransportListContainer ({children}) {
   return <div className={styles.transportList}>
    {children}
    </div>
}