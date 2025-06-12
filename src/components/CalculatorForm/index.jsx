import { CalculatorIcon } from 'lucide-react'
import styles from './styles.module.css'



export function CalculatorForm() {
    return (
        <form action="">
            <label htmlFor="mortgage-amount">Mortgage Amount</label>
            <input type="number" />

            <div className={styles.parameters}>
                <label htmlFor="mortgage-term">Mortgage Term</label>
                <input type="number" />

                <label htmlFor="interest-rate">Interest Rate</label>
                <input type="number" />
            </div>

            <div className={styles.mortgageType}>
                <input id="repayment" type="radio" name='type' value="repayment" />
                <label htmlFor="repayment">Repayment</label>

                <input id="interest" type="radio" name='type' value="interest" />
                <label htmlFor="interest">Interest Only</label>
            </div>

            <button>
                <CalculatorIcon />
                Calculate Repayments
            </button>
        </form>
    )
}