import React from 'react';
import Answer from './Answer';
import axios from "axios";
import { Header,  Grid, Divider } from 'semantic-ui-react';
import AnswerForm from './AnswerForm'


class AnswerList extends React.Component {
  state = {answers: [], }

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

    // updateAnswer = (id, post) => {
    //   axios.put(`/api/posts/${post.id}/answers/${id}`)
    //   .then( res => {
    //     const answers = this.state.answers.map( a => {
    //     if (a.id === id)
    //       return res.data;
    //     return a;
    //   });
    //     this.setState({ answers, });
    //   })
    // }

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
        <AnswerForm addAnswer={this.addAnswer} />
        <Header as="h3" textAlign="center">All Answers</Header>
        <ul>
          {
        this.state.answers.map( (a, i) => {
          return(
          <Answer
          key={i}
          {...a}
          answers={this.state.answers}
          updateAnswer={this.updateAnswer}
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
