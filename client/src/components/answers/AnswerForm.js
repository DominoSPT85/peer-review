import React, { Component } from 'react';
import { Button, Comment, Form, Header } from 'semantic-ui-react'

class AnswerForm extends Component {
  state = { body: ''}

  componentDidMount() {
    if (this.props.id) {
      const { body, id } = this.props
      this.setState({ body, id })
    } 
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if (this.props.id) {
      this.props.editAnswer(this.state)
      this.props.toggleEdit()
    } else {
      this.props.addAnswer(this.state)
    }
    this.setState({ body: ''})
  }

  render() {
    const { body } = this.state
    return(
      <form onSubmit={this.handleSubmit}>
  
        <input 
          placeholder='Enter Text Here'
          name='body'
          value={body}
          size='75'
          onChange={this.handleChange}
        />
        <input
          type='submit'
          value='Submit'
        />
      </form>
    )
  }

}

export default AnswerForm;