import React from 'react';
import {Header, Button, Icon} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Post = ({ id, title, body, updatePost, deletePost, post }) => (
  <div >
    <div >
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
          color="red" 
          size="tiny" 
          onClick={() => deletePost(id)} 
          style={{ marginLeft: "15px", }}
          >
          <Icon name="trash" />
        </Button>
      </div>
    </div>
    
  </div>
)


export default Post;