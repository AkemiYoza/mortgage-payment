import { CalculatorIcon, DollarSignIcon, EuroIcon } from "lucide-react";
import styles from "./styles.module.css";

export function CalculatorForm() {
  return (
    <>
        <form action="">
      <label htmlFor="mortgage-amount">Mortgage Amount</label>

      <div className={styles.inputBox}>
        <div className={styles.icon}>
          <DollarSignIcon />
        </div>
        <input className={styles.input} type="number" id="mortgage-amount" required />
      </div>

      <div className={styles.parameters}>
        <div>
          <label htmlFor="mortgage-term">Mortgage Term</label>
          <div className={styles.inputBox}>
            <input className={styles.input} type="number" id="mortgage-term" required />
            <span className={styles.icon}>years</span>
          </div>
        </div>

        <div>
          <label htmlFor="interest-rate">Interest Rate</label>
          <div className={styles.inputBox}>
            <input className={styles.input} type="number" id="interest-rate" required />
            <span className={styles.icon}>%</span>
          </div>
        </div>
      </div>

      <div className={styles.mortgageType}>
        <p>Mortgage Type</p>
       
        <label className={styles.radioContainer} htmlFor="repayment">  
            <input  id="repayment" type="radio" name="type" value="repayment" />
            <span className={styles.radioCustom}></span>
            Repayment
        </label>
    
    
        <label className={styles.radioContainer} htmlFor="interest">
            <input  id="interest" type="radio" name="type" value="interest" />
            <span className={styles.radioCustom}></span>
            Interest Only
        </label>
        

        
      </div>

    </form>
    <button>
        <CalculatorIcon />
        Calculate Repayments
      </button>
    </>
    
  );
}
