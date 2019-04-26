import React, { useState } from 'react';
import {Button, Card, Grid, Divider } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import PostForm from './PostForm';
import  './Post.css';
import Truncate from 'react-truncate';


const Post = ({ id, title, body, editPost, deletePost, post }) => {
  const [editing, toggleEdit] = useState(false)

  return (
    <div>
      <Grid  divided>
      <Grid.Column>
            <Card>
              <div class='ui center aligned top segment'>
              <Card.Header>{title}</Card.Header>
        <Divider hidden/>
        <Divider/>
        <Card.Content>
          <Card.Description>
            <Truncate lines={8} ellipsis={<span>...</span>}>
            {body}
            </Truncate>
          </Card.Description>


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
