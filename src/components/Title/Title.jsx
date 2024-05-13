import React from 'react'
import'./Title.css'


// props method
const Title = ({subTitle , title}) => {
  return (
    <div className='title'>
        <p>{subTitle}</p>
        <h2>{title}</h2>
    </div>
  )
}

export default Title