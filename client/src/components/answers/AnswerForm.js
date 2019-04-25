import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import RTE from '../RTE';

class AnswerForm extends Component {
  state = { body: ''}

  componentDidMount() {
    if (this.props.id) {
      const { body } = this.props
      this.setState({ body })
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { body } = this.state
    if (this.props.id) {
      this.props.editAnswer(this.props.id, {...this.state});
      this.props.toggleEdit(!this.props.editing)
    }
    else {
      this.props.addAnswer(body);
    }
    this.setState({ body: "", });
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value, });
  };

  render() {
    const { body } = this.state
    const { addAnswer } = this.props
    return(
  
      <RTE id={this.props.id} addAnswer={addAnswer} />
      
  
    

      // <Form onSubmit={this.handleSubmit}>
  
      // <Form.TextArea
      //      label="Answer"
      //      required
      //      placeholder="Type your answer here"
      //      name="body"
      //      value={body}
      //      onChange={this.handleChange}
      //    />
      //    <Form.Button>Submit</Form.Button>
      // </Form>
    )
  }

}

export default AnswerForm;