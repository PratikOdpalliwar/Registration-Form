import './App.css'

export default function App() {
  return (
    <div className='App'>
      <div className='container'>
      <form>
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

        <button type="submit">Register</button>
      </form>
      </div>
    </div>
  )
}
