import React from "react";
import axios from "axios";

const PostContext = React.createContext();
export const PostConsumer = PostContext.Consumer;

export class PostProvider extends React.Component {
  state = { posts: [], };

  getAllPosts = () => {
    axios.get("/api/posts")
    .then( res => {
      this.setState({ posts: res.data, });
    })
    .catch( err => {
      console.log(err);
    })
  }
  
  getPost = () => {
    const id = this.props.match.params.id
    axios.post(`/api/posts/${id}`)
    .then( res => {
      this.setState({ post: res.data, });
    })
    .catch( err => {
      console.log(err);
    })
  }
  
  addPost = (post) => {
    axios.post('/api/posts', { post })
      .then( res => {
        const {posts} = this.state
        this.setState({ posts: [...posts, res.data ]})
      })
      .catch( err => {
        console.log(err)
      })
  }

  updatePost = (post) => {
    axios.put(`/api/posts/${post.id}`, { post })
    .then( res => {
      const posts = this.state.posts.map( p => {
        if (p.id === post.id)
          return res.data
        return p
      })
      this.state.setState({ posts })
    })
    .catch( err => {
      console.log(err)
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
    return (
      <PostContext.Provider value={{
        ...this.state,
        getAllPosts: this.getAllPosts,
        getPost: this.getPost,
        addPost: this.addPost,
        updatePost: this.updatePost,
        deletePost: this.deletePost,
      }}>
        { this.props.children }
      </PostContext.Provider>
    )
  }
}