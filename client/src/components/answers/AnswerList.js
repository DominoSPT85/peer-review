import React from 'react';
import Answer from './Answer';
import axios from "axios";
import { Header } from 'semantic-ui-react';
import AnswerForm from './AnswerForm'


class AnswerList extends React.Component {
  state = { answers: [], editing: false }

  componentDidMount() {
    const id = this.props.id
    axios.get(`/api/posts/${id}/answers`)
      .then( res => {
        this.setState({ answers: res.data, });
      })
      .catch( err => {
        console.log(err);
      })
  }

  addAnswer = (body) => {
    const id = this.props.id
    axios.post(`/api/posts/${id}/answers`, { body })
    .then( res => {
      const { answers } = this.state;
      this.setState({ answers: [...answers, res.data] });    })
    .catch( err => {
      console.log(err);
    })
  }

  editAnswer = (id, post, answer) => {
    axios.put(`/api/posts/${post}/answers/${id}`, answer)
    .then( res => {
      const answers = this.state.answers.map( a => {
      if (a.id === id)
        return res.data;
      return a;
    });
      this.setState({ answers, });
    })
  }

  deleteAnswer = (id, post) => {
    axios.delete(`/api/posts/${post}/answers/${id}`)
    .then( res => {
      const { answers } = this.state;
      this.setState({ answers: answers.filter(a => a.id !== id) })
    })
  }
  
  render() {
    const { editAnswer } = this.props
    return(
      <div>
        <AnswerForm {...this.props} editAnswer={editAnswer} addAnswer={this.addAnswer} />
        <Header as="h3" textAlign="center">All Answers</Header>
        <ul>
          {
        this.state.answers.map( (a, i) => {
          return(
          <Answer
          key={i}
          {...a}
          answers={this.state.answers}
          editAnswer={this.editAnswer}
          toggleEdit={this.toggleEdit}
          deleteAnswer={this.deleteAnswer}
          />
          )
        })

          }
        </ul>

      </div>
    )
  }
}


export default AnswerList;
