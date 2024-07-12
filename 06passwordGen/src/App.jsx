import { useState, useCallback, useEffect, useRef } from 'react'

import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  //useRef hook
  const passwordRef= useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numAllowed) string += "0123456789"
    if (charAllowed) string += " ! @ # $ % ^ & * ( ) - _ = + \ | [ ] { } ; : / ? . >"
    for (let i = 0; i <=length; i++) {
      let char = Math.floor(Math.random() * string.length + 1)
      pass += string.charAt(char)
    }
    setPassword(pass)
  },[length, numAllowed, charAllowed, setPassword])

  const CopyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select()
    //passwordRef.current?.setSelectionRange(0,3) 
    window.navigator.clipboard.writeText(password)
  },[password])


  useEffect(()=>{
      passwordGenerator()
  },[length,numAllowed,charAllowed,passwordGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg 
       px-4 py-3 my-8 text-orange-500 bg-gray-900'>
        <h1 className='text-white text-center'>
          Password Generator
        </h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text"
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='Password'
            readOnly
            ref={passwordRef}
          />
          <button onClick={CopyPasswordToClipboard}
          className='text-black bg-yellow-500 px-3 py-0.5 shrink-0 outline-none'>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range"
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label>Length:{length}</label>
          </div>
          <div className='flex text-sm gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={numAllowed}
              id='numberInput'
              onChange={() => {
                setNumAllowed((prev) => !prev)
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className='flex text-sm gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id='numberInput'
              onChange={() => {
                setCharAllowed((prev) => !prev)
              }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}
export default App
