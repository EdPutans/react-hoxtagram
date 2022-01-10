import React from 'react'

const CommentForm = ({ handlePostComment }) => {
  const [comment, setComment] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault()
    handlePostComment(comment)
    setComment('')
  }

  return (
    <form className="comment-form" onSubmit={handleSubmit}>
      <input
        className="comment-input"
        value={comment}
        onChange={e => setComment(e.target.value)}
        placeholder="Add a comment..."
      />
      <button className="comment-button" type="submit" onClick={handleSubmit}>Post</button>
    </form>
  )
}

export default CommentForm
