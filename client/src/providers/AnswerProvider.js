import React from "react";
import axios from "axios";

const AnswerContext = React.createContext();
export const AnswerConsumer = AnswerContext.Consumer;

export class AnswerProvider extends React.Component {
  state = { answers: [], };

  getAllAnswers = (post) => {
    axios.get(`/api/posts/${post.id}/answers`)
    .then( res => {
      this.setState({ answers: res.data, });
    })
    .catch( err => {
      console.log(err);
    })
  }
  
  getAnswer = (id) => {
    axios.post(`/api/posts/${post.id}/answers/${id}`)
    .then( res => {
      this.setState({ answer: res.data, });
    })
    .catch( err => {
      console.log(err);
    })
  }
  
  addAnswer = (body) => {
    const { body }  = this.state
    axios.post(`/api/posts/${post.id}/answers/${id}`, { body })
    .then( res => {
      this.props.history.push("/viewpost")
    })
    .catch( err => {
      console.log(err);
    })
  }

  updateAnswer = (id) => {
    axios.put(`/api/posts/${post.id}/answers/${id}`)
    .then( res => {
      const answers = this.state.answers.map( a => {
      if (a.id === id)
        return res.data;
      return a;
    });
      this.setState({ answers, });
    })
  }

  deleteAnswer = (id) => {
    axios.delete(`/api/posts/${post.id}/answers/${id}`)
    .then( res => {
      const { answers } = this.state;
      this.setState({ anwswers: answers.filter(a => a.id !== id) })
    })
  }
  
  
  render() {
    return (
      <AnswerContext.Provider value={{
        ...this.state,
        getAllAnswers: this.getAllAnswers,
        getAnswer: this.getAnswer,
        addAnswer: this.addAnswer,
        updateAnswer: this.updateAnswer,
        deleteAnswer: this.deleteAnswer,
      }}>
        { this.props.children }
      </AnswerContext.Provider>
    )
  }
}