import {Component} from 'react'
import './index.css'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here

class Comments extends Component {
  state = {commentList: [], name: '', comment: ''}

  onAddComment = event => {
    event.preventDefault()
    const {name, comment} = this.state

    const iniitalBgClassname = `initial-container ${
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    }`

    const newComment = {
      id: uuidv4(),
      name,
      comment,
      isLiked: false,
      iniitalBgClassname,
    }
    this.setState(prevState => ({
      commentList: [...prevState.commentList, newComment],
      name: '',
      comment: '',
    }))
  }

  deleteComment = id => {
    const {commentList} = this.state

    this.setState({
      commentList: commentList.filter(eachComment => eachComment.id !== id),
    })
  }

  nameInputEntry = event => {
    this.setState({name: event.target.value})
  }

  onCommentEntry = event => {
    this.setState({comment: event.target.value})
  }

  likeBtnClick = id => {
    this.setState(prevState => ({
      commentList: prevState.commentList.map(eachComment => {
        if (eachComment.id === id) {
          return {...eachComment, isLiked: !eachComment.isLiked}
        }
        return eachComment
      }),
    }))
  }

  render() {
    const {name, comment, commentList} = this.state
    const commentsCount = commentList.length

    return (
      <div className="bg-container">
        <div className="app-container">
          <h1 className="header">Hey, Your Comments are valuable!</h1>
          <div className="comment-container-wrapper">
            <form className="form" onSubmit={this.onAddComment}>
              <p className="subtitle">How do you feel about our service?</p>
              <input
                className="name-input"
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={this.nameInputEntry}
              />
              <textarea
                className="comment-input"
                value={comment}
                type="textarea"
                rows="6"
                placeholder="Your Comment"
                onChange={this.onCommentEntry}
              />
              <button className="button" type="submit">
                Add Comment
              </button>
            </form>
            <img
              src="./commentimg.svg"
              alt="comments"
              className="comment-image"
            />
          </div>
          <hr className="line" />
          <p className="count">
            <span className="comments-count">{commentsCount}</span> Comments
          </p>

          <ul className="comment-list-container">
            {commentList.map(eachComment => (
              <CommentItem
                key={eachComment.id}
                details={eachComment}
                likeBtnClick={this.likeBtnClick}
                initialBgColor={this.initialBgColor}
                deleteComment={this.deleteComment}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Comments
