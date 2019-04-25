import React, { useState } from 'react';
import {Header, Button, Icon, Card, Grid, Divider } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import PostForm from './PostForm';

const Post = ({ id, title, body, editPost, deletePost, post }) => {

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
        <Divider hidden/>
        <Divider/>

        </Link>
        <Card.Content>
          <Card.Description>{body}</Card.Description>


          <Grid>
            <Grid.Row>
              < div class="ui bottom segment">
              <a href='/upload'><Button size="mini"> Upload </Button></a>
              <Link to={{
                pathname: `/postlist/${id}`,
                state: {
                  id: id,
                  post: {...post}
                }
              }}> <Button color="blue" size="mini"> Post Answer </Button></Link>


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
        </Card>
        <Divider hidden />
        </Grid.Column>
        </Grid>
    </div>
  )
}


export default Post;
