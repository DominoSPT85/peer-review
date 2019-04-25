import React, { useState } from 'react';
import {Header, Button, Icon, Card, Grid, Divider, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import PostForm from './PostForm';
import  './Post.css';

const Post = ({ id, title, body, editPost, deletePost, post }) => {
  const [editing, toggleEdit] = useState(false)

  return (
    <div>
      <Grid  divided>
      <Grid.Column>
            <Card>
              <div class='ui center aligned top segment'>
              <Link to={{
                pathname: `/postlist/${id}`,
                state: {
                  id: id,
                  post: {...post}
                }
              }}>
              <Card.Header>{title}</Card.Header>
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
          <Card.Description>{body}</Card.Description>

          <Divider/>

          <Grid padded>
            <Grid.Row>

              <div className="buttons">

                <a href='/upload'><Button size="mini" style={{minWidth:"7.4em", minHeight:"3.6em"}}> Upload</Button></a>

                <Link to={{
                  pathname: `/postlist/${id}`,
                  state: {
                    id: id,
                    post: {...post}
                  }
                }}>
                <Button size="mini" color="blue"> Post Answer </Button></Link>

                <Link to={{
                  pathname: `/postlist/${id}`,
                  state: {
                    id: id,
                    post: {...post}
                  }
                }}> <Button color="blue" size="mini"> View Answers </Button> </Link>

              </div>
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
