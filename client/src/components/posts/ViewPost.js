import React from 'react';
import ShowPost from './ShowPost';
import AnswerList from '../answers/AnswerList';
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
      <ShowPost key={post.id} {...post} post={post} />

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