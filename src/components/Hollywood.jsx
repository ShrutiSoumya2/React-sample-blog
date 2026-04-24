import React from 'react'
import Data from '../Data'
const Hollywood = () => {

  const HollywoodData = Data.filter((item) => item.category === 'Hollywood')
  console.log(HollywoodData)
  return (
    <div>{HollywoodData.map((hollydata) => (
      <>
        <h1>{hollydata.title}</h1>
        <img src={hollydata.img_url}/>
      </>
    ))}
    </div>

  )
}

export default Hollywood