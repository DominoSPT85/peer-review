import React from 'react';
import {Header, Button, Icon, Divider } from 'semantic-ui-react';
import PostForm from './PostForm';
import { PostConsumer } from '../../providers/PostProvider';

class PostHeader extends React.Component {
  state = { editing: false }
 
  toggleEdit = () => this.setState({ editing: !this.state.editing, });

  render() {
    const { id, title, body } = this.props 
    return (
      <div>
        <Header>{title}</Header>
        <br />
        <p>{body}</p>
        <Button
          icon
          inverted color="blue"
          floated="right"
          size="mini"
          onClick={() => this.toggleEdit(!this.state.editing)}
        >
          <Icon name="edit" />
        </Button>
        <Button
          icon
          inverted color="red"
          floated="right"
          size="mini"
          onClick={() => this.props.deletePost(id)}
        >
          <Icon name="trash" />
        </Button>
        { this.state.editing ? <PostForm id={id} title={title} body={body} editPost={this.props.editPost} deletePost={this.props.deletePost} toggleEdit={this.toggleEdit} editing={this.state.editing} /> : null }
      </div>
    )
  }
}

const ConnectedPostHeader = (props) => {
  return (
    <PostConsumer>
      {value => ( <PostHeader
        {...props}
        editPost={value.editPost}
        deletePost={value.deletePost}
      />)}
    </PostConsumer>
  )
}

export default ConnectedPostHeader;
