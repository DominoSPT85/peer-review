import React from 'react';
import Post from './Post';
import PostForm from './PostForm';
import axios from "axios";
import {Header, Divider, Grid, Input, Accordion } from 'semantic-ui-react';
import TruncateString from 'react-truncate-string';




class PostList extends React.Component {
 state = { posts: [], editing: false, search_term: "", activeIndex: -1 }
// fix
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

    handleClick = (e, titleProps) => {
      const { index } = titleProps
      const { activeIndex } = this.state
      const newIndex = activeIndex === index ? -1 : index
     
      this.setState({ activeIndex: newIndex })
     };

     toggleState = () => {
       this.setState({ activeIndex: -1 })
     }

    render() {
      const { search_term, } = this.state;
      const { activeIndex } = this.state;
      return (
        <>
        <div class="ui one column stackable center aligned page grid">
        <Accordion fluid styled>
          <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}>
            
            <Header as="h3" textAlign="center">Click here to post a question</Header>
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 0}>
            <PostForm addPost={this.addPost} toggleState={this.toggleState} />
          </Accordion.Content>
        </Accordion>
        <div class="column twelve wide">
        <br/>
        <Header as="h2" textAlign="center">All Questions</Header>
          <Input
            flex
            textAlignment={'center'}
            style={{ width:"550px", height:'40px', }}
            //lots of tabs on focus placeholder, text to the right
            focus placeholder="                                                                                      Search"
            value={search_term}
            onChange={this.handleChange}
          >
          </Input>
            </div>
          </div>
          <Divider hidden />
        <Divider />
        <br/>
          <Grid centered>
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
