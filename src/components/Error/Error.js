import React from 'react'
import './Error.css'

const Error = ({message}) => {
  return (
    <div className={` alert position-absolute`} role='alert'>
        {message}
    </div>
  )
}

export default Error