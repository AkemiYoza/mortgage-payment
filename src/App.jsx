import { CalculatorForm } from "./components/CalculatorForm";
import { Heading } from "./components/Heading";
import { StartScreen } from "./components/StartScreen";
import { ResultScreen } from './components/ResultScreen';

import './global.css'

function App() {
  

  return (
    <div className="container">
      <div className="mortgageBox">
        <Heading />
        <CalculatorForm />
      </div>
      <div className="resultBox">
        {/* <StartScreen /> */}
        <ResultScreen />
      </div>
    </div>
    
      
  )
}

export default App
