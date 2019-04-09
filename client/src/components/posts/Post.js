import React from 'react';
import {Header, Button, Icon} from 'semantic-ui-react';

const Post = ({ id, title, body, updatePost, deletePost }) => (
  <div >
    <div >
      <div className="center">
          <Header as="h2" style={{ marginLeft: "15px" }}>{title}</Header>
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