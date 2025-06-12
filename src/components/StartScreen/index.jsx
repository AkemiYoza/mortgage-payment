import styles from './styles.module.css'
import startImg from '../../assets/illustration-empty.svg'

export function StartScreen(){
    return (
        <div className={styles.resultScreen}>
            <img src={startImg} alt="Calculator image" />
            <p>Results shown here</p>
            <p>Complete the form and click "calculate repayments" to see what your monthly repayments would be.</p>
        </div>
    )
}