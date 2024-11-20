import React from 'react'

const PropsData = ({name, age,style,background}) => {
  return (
    <div className={`${background}`}>
      <p className={`${style}`}>Hello my name {name}</p>
      <p>My age is {age}</p>
    </div>
  )
}

export default PropsData
