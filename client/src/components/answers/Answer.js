import React, {useState} from 'react';
import {Button, Icon, Grid, Divider, Segment } from 'semantic-ui-react';
import AnswerForm from './AnswerForm'

const Answer = ({ id, body, post_id, editAnswer, deleteAnswer }) => {
  const [editing, toggleEdit] = useState(false)

  return(
    <div >

      <div>
      <Grid>

          <Grid.Row>
            <Grid.Column width={15}>
              <p>{body}</p>
            </Grid.Column>
            <Grid.Column>
            <Button
              icon
              color="blue"
              textAlign="left"
              size="mini"
              onClick={() => toggleEdit(!editing)}
              >
              <Icon name="edit" />
            </Button>
            </Grid.Column>
            <Grid.Column>
              <Button
                icon
                inverted color="red"
                floated="right"
                size="mini"
                onClick={() => deleteAnswer(id, post_id)}
                >
                <Icon name="trash" />
                </Button>
            </Grid.Column>
            </Grid.Row>

          </Grid>
        { editing ? <AnswerForm id={id} body={body} editAnswer={editAnswer} deleteAnswer={deleteAnswer} post_id={post_id} toggleEdit={toggleEdit} editing={editing} /> : null }
      </div>

    </div>
  )
}


export default Answer;
