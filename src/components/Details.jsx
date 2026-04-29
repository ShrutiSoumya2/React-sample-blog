import React from 'react'
import Data from '../Data'

const Details = () => {
    const {id} = useParams()
    const post = Data.find((item) => item.id ===id)
  return (
    <div>
      <h1>{post.title}</h1>
      <img src={post.img_url}/>
      <p>{post.description}</p>
    </div>
  )
}

export default Details