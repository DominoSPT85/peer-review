import React, { useState } from 'react';
import {Header, Button, Icon, Divider} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import PostForm from './PostForm';

const Post = ({ id, title, body, editPost, deletePost, post }) => {
  const [editing, toggleEdit] = useState(false)

  // this.setState({ editing: false })


  return (
    <div>
      <div>
        <div className="center">
        <Link to={{
          pathname: `/postlist/${id}`,
          state: {
            id: id,
            post: {...post}
          }
        }}>
        <Header as="h2">{title}</Header>
        </Link>

          <p>{body}</p>

            <Button
            icon
            color="blue"
            textAlign="left"
            size="mini"
            onClick={() => toggleEdit(!editing)}
            >
            <Icon name="edit" />
          </Button>
          <Button
            icon
            color="red"

            size="mini"
            onClick={() => deletePost(id)}
            style={{ marginLeft: "15px", }}
            >
            <Icon name="trash" />
          </Button>
          <Divider/>
        </div>
        { editing ? <PostForm id={id} title={title} body={body} editPost={editPost} deletePost={deletePost} post={post} toggleEdit={toggleEdit} editing={editing} /> : null }
      </div>

    </div>
  )
}


export default Post;
