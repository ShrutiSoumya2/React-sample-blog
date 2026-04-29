import React from 'react'
import Data from '../Data'
import { Link } from 'react-router-dom'

const Bollywood = () => {

  const BollywoodData = Data.filter((item) => item.category === 'Bollywood')
  console.log(BollywoodData)

  return (
    <div>
      {BollywoodData.map((bollydata) => (
        <React.Fragment key={bollydata.id}>
          <Link to={`/post/${bollydata.id}`}>
            <h1>{bollydata.title}</h1>
            <img src={bollydata.img_url} alt={bollydata.title} />
          </Link>
        </React.Fragment>
      ))}
      ) </div>
  )
}
export default Bollywood