import React from 'react';
import Post from './Post';
import PostForm from './PostForm';
import axios from "axios";
import {Header, Divider, Grid, Segment } from 'semantic-ui-react';



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
   
 render() {
   return(
     <div>
       <PostForm addPost={this.addPost} />
       <Header as="h3" textAlign="center">All posts</Header>
       <Divider />
        <Grid padding columns='equal' >



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
