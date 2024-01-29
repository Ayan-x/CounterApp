// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';



function App() {

  const[count,setCount] = useState(0);

function decreaseHandler(){
  setCount(count-1);
}
function increaseHandler(){
  setCount(count+1);
}
function resetHandler(){
  setCount(0);
}


  return (
    <div className="App w-[100vw] h-[100vh] flex flex-col justify-center 
    items-center bg-gray-700 gap-10">
      <div className=' text-blue-700 font-medium text-2xl'>
        Increment & Decrement
      </div>
      <div className='bg-white flex flex-row justify-center 
      gap-12 py-3 rounded-sm text-[25px] text-gray-700'>
      <button onClick={decreaseHandler} className='border-r-2 text-center
       w-20 border-gray-200 text-5xl'>
        -
      </button>
      <div className='font-bold gap-12 text-5xl'>
        {count}
      </div>
      <button onClick={increaseHandler} className='border-l-2 text-center
       w-20 border-gray-200 text-5xl'>
        +
      </button> 
      </div>
      <button onClick={resetHandler} className='bg-blue-600 rounded-sm px-5 py-2
       text-white'>
        Reset
      </button>
    </div>
  );
}

export default App;
