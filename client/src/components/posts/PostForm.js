import React from "react";
import { Form, } from "semantic-ui-react";

class PostForm extends React.Component {
 state = { title: '', body: '' };

 handleSubmit = (e) => {
  e.preventDefault();
  const { title, body }  = this.state
  this.props.addPost(title, body);
  this.setState({ title: '', body: '' })
 }

 handleChange = (e) => {
   this.setState({ [e.target.name]: e.target.value, });
 };

 render() {
   return (
     <Form onSubmit={this.handleSubmit}>
       <Form.Group widths="equal">
         <Form.Input
           label="Title"
           placeholder="Title"
           name="title"
           value={this.state.title}
           onChange={this.handleChange}
         />
         <Form.TextArea
           label="Question"
           placeholder="Question"
           name="body"
           value={this.state.body}
           onChange={this.handleChange}
         />
        </Form.Group>
      <Form.Button>Submit</Form.Button>
     </Form>
   )
 }
}

export default PostForm;