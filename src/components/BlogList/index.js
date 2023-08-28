// Write your JS code here

import {Component} from 'react'
import Loader from 'react-loader-spinner'
import BlogItem from '../BlogItem'

class BlogList extends Component {
  state = {blogsData: [], isLoading: true}

  componentDidMount() {
    this.function()
  }

  function = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    //  console.log(data)
    const updatedData = data.map(e => ({
      id: e.id,
      imageUrl: e.image_url,
      title: e.title,
      author: e.author,
      avatarUrl: e.avatar_url,
      topic: e.topic,
    }))
    this.setState({blogsData: updatedData, isLoading: false})
  }

  render() {
    const {blogsData, isLoading} = this.state

    return (
      <div>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          blogsData.map(e => <BlogItem key={e.id} blogList={e} />)
        )}
      </div>
    )
  }
}

export default BlogList
