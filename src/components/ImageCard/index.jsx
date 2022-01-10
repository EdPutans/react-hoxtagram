import React from 'react'
import CommentForm from '../CommentForm';
import CommentList from '../CommentList'
import './styles.css';

const ImageCard = ({ image: { title, likes, image, comments }, handlePostComment, handleLike }) => {

  return (
    <article className="image-card">
      <h2 className="title">{title}</h2>
      <img src={`src/${image.slice(2, image.length)}`} className="image" />
      <div className="likes-section">
        <span className="likes">{likes} {likes === 1 ? 'like' : 'likes'}</span>
        <button className="like-button" onClick={handleLike}>♥</button>
      </div>
      <CommentList comments={comments} />
      <CommentForm handlePostComment={handlePostComment} />
    </article>
  )
}

export default ImageCard
