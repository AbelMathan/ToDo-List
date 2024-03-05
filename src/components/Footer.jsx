import React from 'react'

const Footer = ({items,setItems}) => {
    const noOfItems =items.length

    const clearList=()=>{
    setItems([])
    }
    return (
    <footer className=' flex justify-center relative bg-gray-800 h-10 p-2  '>
    <div className='text-white' >
    { noOfItems===1 ?
     <p>{noOfItems} Task</p> : <p>{noOfItems} Tasks</p>
    } 
    </div> 
     <button
        type='submit'
        onClick={clearList}
        className='bg-red-800 text-white rounded-full pr-2 pl-2  ml-5'
        > Clear All
    </button>
    </footer>
  )
}

export default Footer
