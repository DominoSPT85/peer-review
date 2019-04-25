import React from 'react';
import {Header} from 'semantic-ui-react';

const ShowPost = ({ title, body }) => {
  return (
    <div className="center">
      <Header as="h2">{title}</Header>
      <pre style={{border: '3px solid gray', paddingLeft: '10px', backgroundColor: '#D7D7D7'}}>{body}</pre>
    </div>
  )
}


export default ShowPost;