import React, { Component } from 'react';
import axios from 'axios';
import Answer from './Answer';
import AnswerForm from './AnswerForm';

class AnswerList extends Component {

  state = { answers: [] }


  componentDidMount() {
    axios.get('/api/answers')
      .then( res => {
        this.setState({ answers: res.data })
      })
      .catch( err => {
        console.log(err)
      })
  }

  displayAnswer = () => {
    // editAnswer={this.editAnswer} add back in later once defined
    return this.state.answers.map( d => <Answer key={d.id} {...d} />)
  }

  addAnswer = (answer) => {
    axios.post(`/api/${post.id}/answers`,  answer )
      .then( res => {
        const { answers } = this.state
        this.setState({ answers: [...answers, res.data] })
      })
      .catch( err => {
        console.log(err)
      })
  }

  editAnswer = (answer) => {
    axios.put(`/api/answers/${answer.id}`, { answer })
      .then( res => {
        const answers = this.state.answers.map( p => {
          if (p.id === answer.id)
            return res.data
          return p
        })
        this.setState({ answers })
      })
      .catch( err => {
        console.log(err)
      })
  }

  render() {


    return(
      <div>
      
        { this.displayAnswer() }
        <AnswerForm addAnswer={this.addAnswer} editAnswer={this.editAnswer} />
    </div>

    )
  }
}

export default AnswerList
