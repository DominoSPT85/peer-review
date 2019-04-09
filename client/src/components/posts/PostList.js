import React from 'react';
import Posts from './Posts';
import PostForm from './PostForm';
import axios from "axios";
import {Header} from 'semantic-ui-react';



class PostList extends React.Component { 
  state = {posts: [], }

  componentDidMount() {
    axios.get("/api/postlist")
      .then( res => {
        this.setState({ posts: res.data, });
      })
      .catch( err => {
        console.log(err);
      })
  }
    updatePosts = (id) => {
      axios.put(`/api/postlist/${id}`)
      .then( res => {
        const posts = this.state.posts.map( p => {
        if (p.id === id)
          return res.data;
        return p;
      });
        this.setState({ posts, });
      })
    }
  
    deletePosts = (id) => {
      axios.delete(`/api/postlist/${id}`)
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
          <posts
          key={i}
          {...d}
          posts={this.state.posts}
          updateposts={this.updatePosts}
          deleteposts={this.deletePosts}
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