import React from 'react';
import Answer from './Answer';
import axios from "axios";
import { Header } from 'semantic-ui-react';



class AnswerList extends React.Component { 
  state = {answers: [], }

  componentDidMount() {
    const id = this.props.id
    debugger
    axios.get(`/api/posts/${id}/answers`)
      .then( res => {
        this.setState({ answers: res.data, });
      })
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
  
    // deletePost = (id, post) => {
    //   axios.delete(`/api/posts/${post.id}/answers/${id}`)
    //   .then( res => {
    //     const { answers } = this.state;
    //     this.setState({ posts: answers.filter(a => a.id !== id) })
    //   })
    // }
  render() {
    return(
      <div>
        <Header as="h3" textAlign="center">All Answers</Header>
        <ul>
          {
        this.state.answers.map( (d, i) => {
          return(
          <Answer
          key={i}
          {...d}
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