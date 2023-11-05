import './App.css'
import { useState } from "react";


export default function App() {

  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: ""
  })

  const [submitted, setSubmitted] = useState(false); 
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  }

  const handleFirstNameInputChange = (e) => {
    setValues({ ...values, firstName: e.target.value })
  }

  const handleLastNameInputChange = (e) => {
    setValues({ ...values, lastName: e.target.value })
  }

  const handleEmailInputChange = (e) => {
    setValues({ ...values, email: e.target.value })
  }

  

  return (
    <div className='App'>
      <div className='container'>

        <form onSubmit={handleSubmit}>
          {submitted ? <div className="success-msg">Success! Thank You For Registering</div> : null}

          <div className="ip1">
            <input
              value={values.firstName}
              className="first-name"
              placeholder="First Name"
              name="firstName"
              onChange={handleFirstNameInputChange}
            />
            {values.firstName==="" ? <span>Please enter a first name</span>: null}


            <input
              value={values.lastName}
              className="last-name"
              placeholder="Last Name"
              name="lastName"
              onChange={handleLastNameInputChange}
            />
            {values.lastName ==="" ? <span>Please enter a last name</span> : null}


            <input
              value={values.email}
              className="email"
              placeholder="Email"
              name="email"
              onChange={handleEmailInputChange}
            />
            {values.email==="" ? <span>please enter an email</span> : null}


          </div>

          <div className="ip2">
            <button type="submit">Register</button>
          </div>
        </form>
      </div>
    </div>
  )
}
