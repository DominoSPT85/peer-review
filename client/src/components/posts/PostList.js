import React from 'react';
import Post from './Post';
import PostForm from './PostForm';
import axios from "axios";
import {Header, Divider, Grid, Segment, Form } from 'semantic-ui-react';



class PostList extends React.Component {
 state = { posts: [], editing: false, search_term: ""}

 componentDidMount() {
   axios.get("/api/posts")
     .then( res => {
       this.setState({ posts: res.data, });
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
   }

   deletePost = (id) => {
     axios.delete(`/api/posts/${id}`)
     .then( res => {
       const { posts } = this.state;
       this.setState({ posts: posts.filter(p => p.id !== id) })
     })
   }

   handleChange = (e) => {
    this.setState({ search_term: e.target.value })
  }

  listPosts = () => {
    const { posts } = this.state;
    return posts.map((post, i) => {
     return (
      <>
        <Post
              key={i}
              {...post}
              posts={this.state.posts}
              toggleEdit={this.toggleEdit}
              editPost={this.editPost}
              deletePost={this.deletePost}
              /></>
    )}
  )};
 
  searchPost = () => {
    const { search_term, posts } = this.state;
    if (search_term) {
      let filtered_posts = posts.filter( e =>
         e.title.includes(search_term) || e.body.includes(search_term)
      );
    return (
      filtered_posts.map( (post, i) =>
      <Post
      key={i}
      {...post}
      posts={this.state.posts}
      toggleEdit={this.toggleEdit}
      editPost={this.editPost}
      deletePost={this.deletePost}
      />
        )
      )
    }
  };
 
  render() {
    const { search_term, } = this.state;
    return (
      <>
        <Form.Input
          placeholder="Search Here..."
          value={search_term}
          onChange={this.handleChange}
        >
        </Form.Input>
        <Divider hidden />
      
          <Grid divided="vertically">
            <Grid.Row columns={4} textAlign="center">
              <Grid.Column>
                Title
              </Grid.Column>
              <Grid.Column>
                Body
              </Grid.Column>
              
            </Grid.Row>          
              { (search_term.length > 0) ?
                this.searchPost()
                :
                this.listPosts()
              }
          </Grid>
      </>
    )
  }
 
};


export default PostList;
