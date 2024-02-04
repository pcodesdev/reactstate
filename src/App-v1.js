import React,  { useState } from "react"; 

import "./../index.css"

function App() {

  const messages = [
    "Learn React ⚛️",
    "Apply for jobs 💼",
    "Invest your new income 🤑",
  ];

  // use state function
  // all react functions that starts with the work "use" are called hooks
  // setStep is a setter function that updates the step variable without mutating it.
  const [step, setStep] = useState(1)
  const [isOpen, setIsOpen] = useState(true)


  function handlePrevious(){
    // prevent the state change from going below 1
    if(step > 1){
    setStep(step => step -1)
    }
    
  }

  function handleNext(){
    // prevent the state change from going above 3
    if(step < 3){
    setStep(step => step + 1)
  }
}

  

  return (
    <React.Fragment>
      {/* the state depends on the previous state */}
      <button className="close" onClick={() => setIsOpen((open) => !open)}>&times;</button>
    {
    isOpen && (<div className="steps">
      <div className="numbers">
        <div className={step >=1 ? "active" : ""}>1</div>
        <div className={step >=2 ? "active" : ""}>2</div>
        <div className={step >=3 ? "active" : ""}>3</div>
      </div>
      {/* arrays are 0 indexed we start counting from 0 */}
      <p className='message'>Step {step} {messages[step-1]}</p>
      <div className="buttons">
        {/* callback function is a function that is called at a later time */}
        <button style={{backgroundColor: "#7950f2 ", color: "#fff"}} 
        onClick={()=>handlePrevious()}>Previous</button>
        <button style={{backgroundColor: "#7950f2 ", color: "#fff"}}
        onClick={handleNext}>Next</button>
      </div>
    </div>)
    }

    
    </React.Fragment>
  )
}

export default App

// Starting a new project- next lecture 