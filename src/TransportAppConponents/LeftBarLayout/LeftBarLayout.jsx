import styles from "./LeftBarLayout.module.css"

export function LeftBarLayout ({children}) {
    return <div className={styles.leftBarLayout}>
        {children}
    </div>
}