// Write your code here
import './index.css'
import {formatDistanceToNow} from 'date-fns'

const CommentItem = props => {
  const {details, likeBtnClick, deleteComment} = props
  const {id, name, comment, isLiked, iniitalBgClassname} = details
  const nameInitial = name.slice(0, 1)
  const time = formatDistanceToNow(new Date())
  const likeBtnClass = isLiked ? 'active like-button' : 'like-button'

  const onLikeButtonClicked = () => {
    likeBtnClick(id)
  }

  const onDeleteClick = () => {
    deleteComment(id)
  }

  const likeOrUnlikeImage = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  return (
    <li className="comment-list-item">
      <div className="comment-header-section">
        <div className={iniitalBgClassname}>
          <p className="initial">{nameInitial}</p>
        </div>
        <div>
          <div className="name-time-container">
            <h1 className="name">{name}</h1>
            <p className="time">{time}</p>
          </div>
          <p className="comment">{comment}</p>
        </div>
      </div>
      <div className="like-delete-container">
        <button
          className={likeBtnClass}
          type="button"
          onClick={onLikeButtonClicked}
        >
          <img src={likeOrUnlikeImage} className="like-btn-img" alt="like" />
          Like
        </button>
        <button
          className="delete-btn"
          type="button"
          testid="delete"
          onClick={onDeleteClick}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
            className="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default CommentItem
