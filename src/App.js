import React, {useState} from 'react'
import './App.css'
import Modal from './components/Modal'

function App () {
  const [isModalOpen, setisModalOpen] = useState(false)
  return (
    <div className='app'>

      <div className="img-container">
        <img className="landing-img" src="https://images.unsplash.com/photo-1506220926022-cc5c12acdb35?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt='img'/>
      </div>

      <button onClick={()=>{
        setisModalOpen(true);
      }}>Click Me</button>

      <Modal isModalOpen={isModalOpen}/>
    </div>
  )
}

export default App
