import React, { Component } from 'react';
import { Button, Comment, Form, Header } from 'semantic-ui-react';
import axios from 'axios';

class AnswerForm extends Component {
  state = { body: ''}

  handleSubmit = (e) => {
    e.preventDefault();
    const id = this.props.match.params.id
    const { body }  = this.state
    axios.post(`/api/posts/${id}/answers`, { body })
    .then( res => {
      this.props.history.push("/viewpost")
    })
    .catch( err => {
      console.log(err);
    })
    this.setState({ body: "" });
  }
 
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value, });
  };

  render() {
    const { body } = this.state
    return(
      <Form onSubmit={this.handleSubmit}>
  
      <Form.TextArea
           label="Answer"
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