import React from 'react'

export const Modal = () => {
  return (
    <div className="container__modal">
            <img src='../../../assets/NoResults.png' alt="" className="img__modal" />
            <div className="content__message">
              <p className="message">No results found</p>
            </div>
    </div>
  )
}
