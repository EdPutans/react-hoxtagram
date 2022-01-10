import React from 'react'
import './styles.css'

const CommentList = ({ comments }) => {
  if (!comments) return null;

  return (
    <ul className="comments">
      {comments.map(({ content, id }) => <li key={id}>{content}</li>)}
    </ul>
  )
}

export default CommentList
