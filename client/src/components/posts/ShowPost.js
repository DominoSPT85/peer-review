import React from 'react';
import {Header} from 'semantic-ui-react';

const ShowPost = ({ title, body }) => {
  return (
    <div className="center">
      <Header as="h2">{title}</Header>
      <p>{body}</p>
    </div>
  )
}


export default ShowPost;
