import React, {useState} from 'react';
import {Button, Icon, Grid, Segment } from 'semantic-ui-react';
import AnswerForm from './AnswerForm'

const Answer = ({ id, body, post_id, editAnswer, deleteAnswer }) => {
  const [editing, toggleEdit] = useState(false)

  return(

    <div class="ui one column stackable center aligned page grid">
      <div class="column sixteen wide">
      <Segment padded>
            <p>{body}</p>
            <Button
              icon
              inverted color="blue"
              size="mini"
              onClick={() => toggleEdit(!editing)}
              >
              <Icon name="edit" />
            </Button>
              <Button
                icon
                inverted color="red"
                size="mini"
                onClick={() => deleteAnswer(id, post_id)}
                >
                <Icon name="trash" />
                </Button>
      </Segment>
        { editing ? <AnswerForm id={id} body={body} editAnswer={editAnswer} deleteAnswer={deleteAnswer} post_id={post_id} toggleEdit={toggleEdit} editing={editing} /> : null }
      </div>

    </div>
  )
}


export default Answer;
