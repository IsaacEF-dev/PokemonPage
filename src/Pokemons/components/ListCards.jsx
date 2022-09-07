import React from 'react'
import { Cards } from './Cards'

export const ListCards = () => {
  return (
    <>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          {
            <Cards/>
          }
        </div>
      </div>
    </>
  )
}
