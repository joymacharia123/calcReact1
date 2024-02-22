import './App.css'
import { useState } from 'react'

const App = ()=>{

  const [num, setNum] = useState(0)
  const [num2, setNum2] = useState(0)
  const [operator, setOperator] = useState('')

  const handleNumber = (e)=>{
    if(num === 0){
      setNum(e.target.innerText)
    } else{
      setNum(num + e.target.innerText)
    }
  }

  const handleOperator = (e)=>{
    setNum2(num)
    setOperator(e.target.innerText)
    setNum(0)
  }

  const handleClear = (e)=>{
    setNum(0);
    setNum2(0);
  }

  const handleResult = ()=>{
    switch(operator){
      case 'x':
        setNum (parseFloat(num2) * parseFloat(num))
        break
        case '-':
          setNum (parseFloat(num2) - parseFloat(num))
          break
          case'+':
          setNum (parseFloat(num2) + parseFloat(num))
          break
          case'/':
          setNum (parseFloat(num2) / parseFloat(num))
          break
          case'%':
          setNum (parseFloat(num2) * (parseFloat(num)/100))
          break

    }

  }
  return(
    <>
    <div className="w-screen h-screen bg-blue-200 flex items-center justify-center">
      <div className="w-1/4 h-5/6 bg-black text-white">
        <div className="w-100 flex justify-end pr-20 text-3x1">{num}</div>
        <div className="flex w-100 flex-wrap justify-center gap-4">
          <button onClick={handleClear} className="w-20 h-20 rounded-full bg-gray-400 text-black">AC</button>
          <button className="w-20 h-20 rounded-full bg-gray-400 text-black">+/-</button>
          <button onClick={handleOperator} className="w-20 h-20 rounded-full bg-gray-400 text-black">%</button>
          <button onClick={handleOperator} className="w-20 h-20 rounded-full bg-orange-500 text-black">/</button>
          <button onClick={handleNumber} className="w-20 h-20 rounded-full bg-gray-400 text-black">7</button>
          <button onClick={handleNumber} className="w-20 h-20 rounded-full bg-gray-400 text-black">8</button>
          <button onClick={handleNumber} className="w-20 h-20 rounded-full bg-gray-400 text-black">9</button>
          <button onClick={handleOperator} className="w-20 h-20 rounded-full bg-orange-500 text-black">x</button>
          <button onClick={handleNumber} className="w-20 h-20 rounded-full bg-gray-400 text-black">4</button>
          <button onClick={handleNumber} className="w-20 h-20 rounded-full bg-gray-400 text-black">5</button>
          <button onClick={handleNumber} className="w-20 h-20 rounded-full bg-gray-400 text-black">6</button>
          <button onClick={handleOperator} className="w-20 h-20 rounded-full bg-orange-500 text-black">-</button>
          <button onClick={handleNumber} className="w-20 h-20 rounded-full bg-gray-400 text-black">1</button>
          <button onClick={handleNumber} className="w-20 h-20 rounded-full bg-gray-400 text-black">2</button>
          <button onClick={handleNumber} className="w-20 h-20 rounded-full bg-gray-400 text-black">3</button>
          <button onClick={handleOperator} className="w-20 h-20 rounded-full bg-orange-500 text-black">+</button>
          <button onClick={handleNumber} className="w-20 h-20 rounded-full bg-gray-400 text-black">0</button>
          <button className="w-20 h-20 rounded-full bg-gray-400 text-black"></button>
          <button onClick={handleNumber} className="w-20 h-20 rounded-full bg-gray-400 text-black">.</button>
          <button onClick={handleResult} className="w-20 h-20 rounded-full bg-orange-500 text-black">=</button>
        </div>
      </div>

    </div>
    </>
  )
}

export default App
