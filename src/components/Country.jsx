import React from 'react'

const Country = ({data}) => {
  return (
    <div className='country-container my-10'>
      <img src={data} alt="" />
    </div>
  )
}

export default Country
