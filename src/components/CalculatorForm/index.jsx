import { CalculatorIcon, DollarSignIcon, EuroIcon } from "lucide-react";
import styles from "./styles.module.css";
import { Input } from "../Input";
import { RadioButton } from "../RadioButton";

export function CalculatorForm() {
  return (
    <>
      <form action="">
        <Input
          label={"Mortgage Amount"}
          icon={<DollarSignIcon />}
          type={"number"}
          id={"mortgage-amount"}
          iconPosition={"left"}
        />

        <div className={styles.parameters}>
          <div>
            <Input
              label={"Mortgage Term"}
              icon={"year"}
              type={"number"}
              id={"mortgage-term"}
              iconPosition={"right"}
            />
          </div>

          <div>
            <Input
              label={"Interest Rate"}
              icon={"%"}
              type={"number"}
              id={"interest-rate"}
              iconPosition={"right"}
            />
          </div>
        </div>

        <div className={styles.mortgageType}>
          <p>Mortgage Type</p>
          <RadioButton text={"Repayment"} id={"repayment"} name={"type"} value={"repayment"} />
          
          <RadioButton text={"Interest Only"} id={"interest"} name={"type"} value={"interest"} />
          
        </div>
      </form>
      <button>
        <CalculatorIcon />
        Calculate Repayments
      </button>
    </>
  );
}
