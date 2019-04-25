import React from "react";
import axios from "axios";

const PostContext = React.createContext();
export const PostConsumer = PostContext.Consumer;

export class PostProvider extends React.Component {
  state = { posts: [], editPost: (id, post) => this.editPost(id, post) };

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
  
  addPost = (title, body) => {
    axios.post('/api/posts', { title, body })
    .then( res => {
      const { posts } = this.state;
      this.setState({ posts: [...posts, res.data] });
    })
  }

  editPost = (id, post) => {
   axios.put(`/api/posts/${id}`, post)
    .then( res => {
      const posts = this.state.posts.map( p => {
      if (p.id === id)
        return res.data;
      return p;
    });
      this.setState({ posts, });
    })
    window.location.reload()
  }

  deletePost = (id) => {
    axios.delete(`/api/posts/${id}`)
    .then( res => {
      const { posts } = this.state;
      this.setState({ posts: posts.filter(p => p.id !== id) })
    })
    window.location.href='/'
  }
  
  
  render() {
    return (
      <PostContext.Provider value={{
        ...this.state,
        getAllPosts: this.getAllPosts,
        getPost: this.getPost,
        addPost: this.addPost,
        editPost: this.editPost,
        deletePost: this.deletePost,
      }}>
        { this.props.children }
      </PostContext.Provider>
    )
  }
}