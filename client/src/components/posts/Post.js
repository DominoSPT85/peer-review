import React, { useState } from 'react';
import {Header, Button, Icon, Card, Grid, Divider, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import PostForm from './PostForm';

const Post = ({ id, title, body, editPost, deletePost, post }) => {
  const [editing, toggleEdit] = useState(false)

  // this.setState({ editing: false })


  return (
    <div>
      <Grid  divided>
      <Grid.Column>
            <Card style={ {width: '100%', color: 'black' } }>
              <div className="center">
              <Link to={{
                pathname: `/postlist/${id}`,
                state: {
                  id: id,
                  post: {...post}
                }
              }}>
              <Card.Header textAlign="center">{title}</Card.Header>
              <Button
              icon
              inverted color="blue"
              floated="right"
              size="mini"
              onClick={() => toggleEdit(!editing)}
              >
              <Icon name="edit" />
            </Button>
            <Button
              icon
              inverted color="red"
              floated="right"
              size="mini"
              onClick={() => deletePost(id)}

              >
              <Icon name="trash" />
            </Button>
        <Divider hidden/>
        <Divider/>

        </Link>
        <Card.Content>
          <Card.Description height='auto'><pre>{body}</pre></Card.Description>

          <Divider/>
          <Grid>
            <Grid.Row>
              <Button color="blue" style={{padding: ''}}> Upload </Button>
              <Button color="blue"> Post Answer </Button>
              <Button color="blue"> View Answers </Button>
            </Grid.Row>
          </Grid>

          </Card.Content>
        </div>
        { editing ? <PostForm id={id} title={title} body={body} editPost={editPost} deletePost={deletePost} post={post} toggleEdit={toggleEdit} editing={editing} /> : null }
        </Card>
        <Divider hidden />
        </Grid.Column>
        </Grid>
    </div>
  )
}


export default Post;
