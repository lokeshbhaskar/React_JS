import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
function App() {
  const [count, setCount] = useState(0)
  let  myObj={
    userName: "Lokesh",
    age: 22
  }
  let newArray =[1,2,3]
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>tailwind css</h1>
       <Card userName="Reactlecture" btnText="click me" />
       <Card userName="Rachel" btnText="Visit me" />
    </>
  )
}

export default App
