import styles from './styles.module.css'

export function ResultScreen() {
    return (
        <div className={styles.resultScreen}>
            <h1>Your results</h1>
            <p>Your results are shown below based on the information you provided. To adjust the results, edit the form and click "calculate repayments" again.</p>
            <div className={styles.resultBox}>
                <p>Your monthly repayments</p>
                <p className={styles.monthlyRepay}>£1,797.74</p>
                <p>Total you'll repay over the term</p>
                <p className={styles.totalResult}>£539,322.94</p>
            </div>
        </div>
    )
}