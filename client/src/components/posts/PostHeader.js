import React from 'react';
import {Header, Button, Icon, Segment } from 'semantic-ui-react';
import PostForm from './PostForm';
import { PostConsumer } from '../../providers/PostProvider';

class PostHeader extends React.Component {
  state = { editing: false }
 
  toggleEdit = () => this.setState({ editing: !this.state.editing, });

  render() {
    const { id, title, body } = this.props 
    return (
      <div>
        <Segment padded>
        <Header as="h3">{title}</Header>
        <Button
          icon
          inverted color="blue"
          floated="right"
          size="mini"
          onClick={() => this.toggleEdit(!this.state.editing)}
        >
          <Icon name="edit" />
        </Button>
        <br />
        <br />
        <Button
          icon
          inverted color="red"
          floated="right"
          size="mini"
          onClick={() => this.props.deletePost(id)}
        >
          <Icon name="trash" />
        </Button>
        <br />
        <p>{body}</p>
        { this.state.editing ? <PostForm id={id} title={title} body={body} editPost={this.props.editPost} deletePost={this.props.deletePost} toggleEdit={this.toggleEdit} editing={this.state.editing} /> : null }
        </Segment>
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
