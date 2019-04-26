import React from 'react';
import Post from './Post';
import PostForm from './PostForm';
import axios from "axios";
import {Header, Form, Divider, Grid, Segment, Button, Accordion } from 'semantic-ui-react';



class PostList extends React.Component {
 state = { posts: [], editing: false }

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


 render() {
   return(
     <div>
      <Accordion>
      <PostForm addPost={this.addPost} />
      </Accordion>
       <Header as="h3" textAlign="center">Current Posts</Header>
       <Divider />
        <Grid centered>

               {
               this.state.posts.map( (d, i) => {
               return(

               <Post
               key={i}
               {...d}
               posts={this.state.posts}
               toggleEdit={this.toggleEdit}
               editPost={this.editPost}
               deletePost={this.deletePost}
               />

               )
             })

               }


       </Grid>
     </div>
   )
 }
}


export default PostList;
