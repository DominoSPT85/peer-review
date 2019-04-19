import React, { useState } from 'react';
import {Header, Button, Icon} from 'semantic-ui-react';
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
        <Header as="h2" style={{ marginLeft: "15px" }}>{title}</Header>
        </Link>
          <p>{body}</p>
            <Button 
            icon 
            color="blue" 
            size="tiny" 
            onClick={() => toggleEdit(!editing)} 
            style={{ marginLeft: "15px", }}
            >
            <Icon name="edit" />
          </Button>
          <Button 
            icon 
            color="red" 
            size="tiny" 
            onClick={() => deletePost(id)} 
            style={{ marginLeft: "15px", }}
            >
            <Icon name="trash" />
          </Button>
        </div>
        { editing ? <PostForm id={id} title={title} body={body} editPost={editPost} deletePost={deletePost} post={post} toggleEdit={toggleEdit} editing={editing} /> : null }
      </div>
      
    </div>
  )
}


export default Post;