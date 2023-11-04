import './App.css'
import { useState } from "react";
export default function App() {

  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: ""
  })

  const [submitted, setSubmitted] = useState(false);

  const handleFirstNameInputChange = (e) => {
    setValues({ ...values, firstName: e.target.value })
  }

  const handleLastNameInputChange = (e) => {
    setValues({ ...values, lastName: e.target.value })
  }

  const handleEmailInputChange = (e) => {
    setValues({ ...values, email: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className='App'>
      <div className='container'>

        <form onSubmit={handleSubmit}>
          {submitted ? <div className="success-msg">Success! Thank You For Registering</div> : null}

          <div className="ip1">
            <input
              className="first-name"
              placeholder="First Name"
              name="firstName"
              onChange={handleFirstNameInputChange}
            />

            
            <input
              className="last-name"
              placeholder="Last Name"
              name="lastName"
              onChange={handleLastNameInputChange}
            />
            <input
              className="email"
              placeholder="Email"
              name="email"
              onChange={handleEmailInputChange}
            />
          </div>

          <div className="ip2">
            <button type="submit">Register</button>
          </div>
        </form>
      </div>
    </div>
  )
}
