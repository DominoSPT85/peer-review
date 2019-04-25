import React, {useState} from 'react';
import {Button, Icon, Divider} from 'semantic-ui-react';
import AnswerForm from './AnswerForm'

const Answer = ({ id, body, post_id, editAnswer, deleteAnswer }) => {
  const [editing, toggleEdit] = useState(false)

  return(
    <div >
    
        <div class="content">
          <p>{body}</p>
          <Button
            icon
            color="blue"
            textAlign="left"
            size="mini"
            onClick={() => toggleEdit(!editing)}
            >
            <Icon name="edit" />
          </Button>
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
        { editing ? <AnswerForm id={id} body={body} editAnswer={editAnswer} deleteAnswer={deleteAnswer} post_id={post_id} toggleEdit={toggleEdit} editing={editing} /> : null }
      </div>
    
  )
}


export default Answer;
