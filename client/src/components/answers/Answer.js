import React from 'react';
import {Button, Icon, Grid, Divider, Segment } from 'semantic-ui-react';

const Answer = ({ id, body, post_id, updateAnswer, deleteAnswer }) => (
  <div >
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
      </div>

    </div>

  </div>
)


export default Answer;
