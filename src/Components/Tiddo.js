import React, { useState } from 'react'
import './Index.css'


const Tiddo = (props) => {

    // console.log('props', props)

  return (
    <div className='Ola'>
      <div className='Hola'>
        <h4>{ props.name.naam }</h4>
      </div>
      <div className='Hola'>
        <h4>{ props.name2.age }</h4>
      </div>
      {/* <div className='Hola'>
        <h4>{ props.name3 }</h4>
      </div> */}
    </div>
  )
}

export default Tiddo;