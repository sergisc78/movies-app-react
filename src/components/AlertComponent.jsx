import React from 'react'

export const AlertComponent = ({ message }) => {
  return (
    <div className="container">
      <div className="alert alert-danger border border-2 border-danger mx-auto w-75 mt-1 mb-2" role="alert">
        <span>{message}</span>
      </div>
    </div>
  )
}
