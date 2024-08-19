import './App.css';
import { calculateAge } from './utils/calculateAge';
import { useEffect, useRef, useState } from 'react';

function App() {
  const [age, setAge] = useState([]);
  const dobRef = useRef(null)
  const [isEntered, setIsEntered] = useState(false)
  const btnClickHandler = () => {
    if (dobRef.current.value) {
      setIsEntered(true)
    } else {
      alert('Enter your date of birth')
    }
  }

  useEffect(() => {

    const interval = setInterval(() => {

      if (dobRef.current.value) {
        const age = calculateAge(dobRef.current.value);
        setAge(age);
      }
    }, 1);

    return () => clearInterval(interval);

  }, []);

  return (
    <>
      <header className="bg- text-white p-3 mb-4 text-center">
        <h1 className="display-4">Age Calculator</h1>
      </header>
      <div className="container-sm">
        <div className="form-group mb-3">
          <label htmlFor="date" className="form-label h5">Enter your date of birth</label>
          <input
            ref={dobRef}
            className="form-control form-control-lg"
            type="date"
            name="date"
            id="date"
            onChange={() => {
              setIsEntered(false);
            }}
          />
        </div>
        <div className="d-grid gap-2 mb-4">
          <button className="btn btn-primary btn-lg" onClick={btnClickHandler}>
            Calculate
          </button>
        </div>
        {isEntered ? (
          <div className="container-sm d-flex flex-column align-items-center justify-content-center text-center mt-5">
            <p className="lead text-muted mb-4 line-gap">
              <span className="fixed-width-3 display-6">{age[0]}</span> years
              <span className="fixed-width-3 display-6"> {age[1]} </span> months
              <span className="fixed-width-3 display-6"> {age[2]} </span> days
              <span className="fixed-width-3 display-6"> {age[3]} </span> hours
              <span className="fixed-width-3 display-6"> {age[4]} </span> minutes
              <span className="fixed-width-3 display-6"> {age[5]} </span> seconds
              <span className="fixed-width-4 display-6"> {age[6]} </span> milliseconds
            </p>
          </div>
        ) : (
          <p className="text-center text-muted mt-4">Enter your date of birth and click the Calculate button</p>
        )}
      </div>
    </>

  );
}

export default App;
