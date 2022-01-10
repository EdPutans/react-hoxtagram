import React from 'react'
import ImageCard from '../ImageCard'

const ImageList = ({ images, getHandlePostComment, getHandleLike }) => {
  return (
    images.map(image => (
      <ImageCard
        key={image.id}
        image={image}
        handlePostComment={getHandlePostComment(image.id)}
        handleLike={getHandleLike(image.id)}
      />
    ))
  )
}

export default ImageList
