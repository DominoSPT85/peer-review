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
            <Grid.Column width={15} row={25}>
              <pre style={{ 
                borderLeft: '2px solid gray',
                borderRight: '3px solid gray', 
                paddingLeft: '10px', 
                backgroundColor: 'lightgray'}}>
                {body}
              </pre>
            </Grid.Column>
            <Grid.Column>
       
            </Grid.Column>
            <Grid.Row>
              <Button
                icon
                inverted color="red"
                textAlign="left"
                size="mini"
                onClick={() => deleteAnswer(id, post_id)}
                >
                <Icon name="trash" />
                </Button>
                <Button
              icon
              color="blue"
              textAlign="left"
              size="mini"
              
              onClick={() => toggleEdit(!editing)}
              >
              <Icon name="edit" />
            </Button>
            </Grid.Row>
            </Grid.Row>

          </Grid>
        { editing ? <AnswerForm id={id} body={body} editAnswer={editAnswer} deleteAnswer={deleteAnswer} post_id={post_id} toggleEdit={toggleEdit} editing={editing} /> : null }
      </div>

    </div>
  )
}


export default Answer;