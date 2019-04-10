import React from 'react';
import Post from './Post';
import AnswerList from '../answers/AnswerList';
import AnswerForm from '../answers/AnswerForm';
import { Header } from 'semantic-ui-react';
import axios from 'axios';


class ViewPost extends React.Component {
  state = {post: '', }

  componentDidMount() {
    const id = parseInt(this.props.match.params.id)
    axios.get(`/api/posts/${id}`)

      .then( res => {
        
        this.setState({ post: res.data, });
      })
      .catch( err => {
        console.log(err);
      })
  }

  render() {
    const { post } = this.state
    return (
      <>
      <Post key={post.id} {...post} post={post} />

      <hr />

      <Header as='h3'>Answers</Header>
      <AnswerList />
      <hr />
      <p>Post an answer:</p>
      <AnswerForm addAnswers={this.addAnswers} id={this.state.post.id}/>
      </>
    )
  }
}


export default ViewPost;