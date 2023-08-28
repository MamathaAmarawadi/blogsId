// Write your JS code here

import {Component} from 'react'

import './index.css'

class BlogItemDetails extends Component {
  componentDidMount() {
   this.blogsData()
  }
  blogsData=()=>{
    console.log(this.props)
  }

  render() {
    return (
      <div>
        <h1>nksjfis</h1>
        <p>fnsi</p>
      </div>
    )
  }
}

export default BlogItemDetails
