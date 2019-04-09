import React from 'react';
import Posts from './Posts';
import PostForm from './PostForm';
import axios from "axios";
import {Header} from 'semantic-ui-react';



class PostList extends React.Component { 
  state = {posts: [], }

  componentDidMount() {
    axios.get("/api/posts")
      .then( res => {
        this.setState({ posts: res.data, });
      })
      .catch( err => {
        console.log(err);
      })
  }
    updatePost = (id) => {
      axios.put(`/api/posts/${id}`)
      .then( res => {
        const posts = this.state.posts.map( p => {
        if (p.id === id)
          return res.data;
        return p;
      });
        this.setState({ posts, });
      })
    }
  
    deletePost = (id) => {
      axios.delete(`/api/posts/${id}`)
      .then( res => {
        const { posts } = this.state;
        this.setState({ posts: posts.filter(p => p.id !== id) })
      })
    }
  render() {
    return(
      <div>
        <PostForm addPosts={this.addPosts} />
        <Header as="h3" textAlign="center">All posts</Header>
        <ul>
          {
        this.state.posts.map( (d, i) => {
          return(
          <Posts
          key={i}
          {...d}
          posts={this.state.posts}
          updatePost={this.updatePost}
          deletePost={this.deletePost}
          />
          )
        })
        
          }
        </ul>
        
      </div>
    )
  }
}
  
 
export default PostList;