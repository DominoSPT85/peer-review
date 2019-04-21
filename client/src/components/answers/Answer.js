import React from 'react';
import {Button, Icon} from 'semantic-ui-react';

const Answer = ({ id, body, post_id, updateAnswer, deleteAnswer }) => (
  <div >
    <div >
      <div textAlign="center">
        <p>{body}</p>
        <Button
          icon
          color="red"
          size="tiny"
          onClick={() => deleteAnswer(id, post_id)}
          style={{ marginLeft: "15px", }}
          >
          <Icon name="trash" />
        </Button>
      </div>
    </div>

  </div>
)


export default Answer;
