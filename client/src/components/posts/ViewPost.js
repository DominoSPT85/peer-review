import React from 'react';
import Post from './Post';
import AnswerList from '../answers/AnswerList';
import { Header, Divider } from 'semantic-ui-react';
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
      <Divider hidden/>
      <Divider hidden/>
      <Post key={post.id} {...post} post={post} />

      <hr />

      <Header as='h3'>Answers</Header>
      <p>Post an answer:</p>
      <AnswerList id={parseInt(this.props.match.params.id)} />
      <hr />
      </>
    )
  }
}


export default ViewPost;
