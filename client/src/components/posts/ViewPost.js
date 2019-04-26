import React from 'react';
import PostHeader from './PostHeader';
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
      <PostHeader key={post.id} {...post} post={post} />
      <br />
      <br />
      <hr />

      <Header>Post an answer:</Header>
      <AnswerList id={parseInt(this.props.match.params.id)} />
      </>
    )
  }
}


export default ViewPost;
