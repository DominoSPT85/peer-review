import React, { useState } from 'react';
import {Header, Button, Icon, Divider, Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import PostForm from './PostForm';

const Post = ({ id, title, body, editPost, deletePost, post }) => {
  const [editing, toggleEdit] = useState(false)

  return (
    <div>
      <div>
        <Grid>
        <Grid.Row>
          <Grid.Column width={15}>
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
            </div>
          </Grid.Column>
          <Grid.Column>
            <Button
              icon
              inverted color="blue invert"
              floated="right"
              size="mini"
              onClick={() => toggleEdit(!editing)}
            >
              <Icon name="edit" />
            </Button>
            <Divider hidden/>

            <Button
                  icon
                  inverted color="red"
                  floated="right"
                  size="mini"
                  onClick={() => deletePost(id)}
                  >
                    <Icon name="trash" />
            </Button>
          </Grid.Column>
        </Grid.Row>
        

      </Grid>
      { editing ? <PostForm id={id} title={title} body={body} editPost={editPost} deletePost={deletePost} post={post} toggleEdit={toggleEdit} editing={editing} /> : null }

    </div>
  </div>
  )
}


export default Post;
