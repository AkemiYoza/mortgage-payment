import styles from './styles.module.css'

export function Heading() {
    return (
        <header className={styles.heading}>
            <h1>Mortgage Calculator</h1>
            <button>Clear All</button>
        </header>
    )
}