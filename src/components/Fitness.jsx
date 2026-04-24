import React from 'react'
import Data from '../Data'

const Fitness = () => {
  const FitnessData = Data.filter((item) => item.category === 'Fitness')
  console.log(FitnessData)
  return (
    <div>{FitnessData.map((fitnessdata) => (
      <>
        <h1>{fitnessdata.title}</h1>
        <img src={fitnessdata.img_url}/>
      </>
    ))} 
    </div>
  )
}

export default Fitness