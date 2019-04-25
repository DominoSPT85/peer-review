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

  editAnswer = (id, answer) => {
    const postId = this.props.id
    axios.put(`/api/posts/${postId}/answers/${id}`, answer)
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
    return(
      <div>
        
        <Header as="h3" textAlign="center">All Answers</Header>
        <br />
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
        <AnswerForm addAnswer={this.addAnswer} />
      </div>
    )
  }
}


export default AnswerList;