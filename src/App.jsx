import { useState, useEffect, useCallback } from 'react'
import './App.css'
//@ts-ignore
import logo from './assets/hoxtagram-logo.png'
import PostForm from './components/PostForm'
import ImageList from './components/ImageList'

function App() {
  const [images, setImages] = useState([])

  const getImages = useCallback(() =>
    fetch('http://localhost:3000/images')
      .then(r => r.json())
      .then(r => {
        setImages(r)
      })
    , [setImages])

  useEffect(() => {
    getImages()
  }, [])

  const getHandlePostComment = useCallback(imageId => comment => {
    return fetch('http://localhost:3000/comments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        imageId,
        content: comment
      })
    }).then(() => getImages())
  }, [getImages])

  const handleNewPost = useCallback((title, imgUrl) => {
    return fetch('http://localhost:3000/images', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title,
        image: imgUrl,
        likes: 0
      })
    }).then(() => getImages())
  }, [getImages])

  const getHandleLike = useCallback(imageId => () => {
    return fetch(`http://localhost:3000/images/${imageId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ likes: images.find(img => img.id === imageId).likes + 1 })
    }).then(() => getImages())
  }, [images, getImages])

  return (
    <>
      <img className="logo" src={logo} />
      <section className="image-container">
        <ImageList images={images} getHandlePostComment={getHandlePostComment} getHandleLike={getHandleLike} />
        <PostForm handleNewPost={handleNewPost} />
      </section>
    </>
  )
}

export default App
