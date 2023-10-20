import './App.css'

export default function App() {
  return (
    <div className='App'>
      <div className='container'>
      <form>
        <div className="ip1">
          <input
          type="text"
          placeholder="First Name"
          />
        <input
          type="text"
          placeholder="Last Name"
          />
        <input
          type="text"
          placeholder="Email"
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
