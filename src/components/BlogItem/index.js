import {Link} from 'react-router-dom'

import './index.css'

const BlogItem = props => {
  const {blogList} = props
  const {title, imageUrl, author, avatarUrl, id, topic} = blogList
  return (
    <Link to={`blogs/${id}`}>
      <div className="container">
        <div>
          <img src={imageUrl} className="img" alt={imageUrl} />
        </div>
        <div className="center">
          <p>{topic}</p>
          <h1>{title}</h1>
          <div className="profile">
            <img src={avatarUrl} className="img1" alt={avatarUrl} />
            <p>{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem
