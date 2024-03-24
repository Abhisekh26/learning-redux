import React from 'react'
import { sliceactions } from '../Data/data'
import {useSelector,useDispatch} from 'react-redux'
function Display() {
    const dispatch= useDispatch()
    const selector=useSelector((state)=> state.counter)
    function incre(){
     dispatch(sliceactions.increment())
    }
    function decre(){
    dispatch(sliceactions.decrement())
    }
  return (
    <div>
        {selector}
        <button onClick={incre}>Increment</button>
        <button onClick={decre}>Decrement</button>
    </div>
  )
}

export default Display