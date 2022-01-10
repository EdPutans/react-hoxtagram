import React, { useState } from 'react'

const PostForm = ({ handleNewPost }) => {
  const [title, setTitle] = useState('');
  const [imgUrl, setImgUrl] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    handleNewPost(title, imgUrl)
    setTitle('')
    setImgUrl('')
  }

  return (
    <form className="comment-form image-card" onSubmit={handleSubmit}>
      <h2 className="title">New Post</h2>
      <input
        value={title}
        onChange={e => setTitle(e.target.value)}
        className="comment-input"
        type="text"
        name="title"
        id="title"
        placeholder="Add a title..."
      />
      <input
        value={imgUrl}
        onChange={e => setImgUrl(e.target.value)}
        className="comment-input"
        type="url"
        name="image"
        id="image"
        placeholder="Add an image url..."
      />
      <button className="comment-button" type="submit" onClick={handleSubmit}>Post</button>
    </form>
  )
}

export default PostForm;
