import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';

class AnswerForm extends Component {
  state = { body: ''}

  handleSubmit = (e) => {
    e.preventDefault();
    const { body }  = this.state
    this.props.addAnswer(body);
    this.setState({ body: '' })
   }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value, });
  };

  render() {
    const { body } = this.state
    return(
      <Form
      onSubmit={this.handleSubmit}>

      <Form.TextArea
           label="Answer"
           required
           placeholder="Type your answer here"
           name="body"
           value={body}
           onChange={this.handleChange}
         />
         <Form.Button>Submit</Form.Button>
      </Form>
    )
  }

}

export default AnswerForm;
