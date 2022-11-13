import React from 'react'

const  NotFound = () => {
  window.top.document.title = '404 - Page Not Found'
  return (
    <div className='notfound d-flex justify-content-center align-items-center' style={{height:'500px'}}> 
      <h1>404 - Page Not Found </h1>
      </div>
  )
}

export default NotFound