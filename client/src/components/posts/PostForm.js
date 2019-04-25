import React from "react";
import { Form, Grid, Divider, } from "semantic-ui-react";
import './PostForm.css'

class PostForm extends React.Component {
 state = { title: '', body: '' };

 componentDidMount() {
    if (this.props.id) {
      const { title, body } = this.props
      this.setState({ title, body })
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { title, body } = this.state
    if (this.props.id) {
      this.props.editPost(this.props.id, {...this.state});
      this.props.toggleEdit(!this.props.editing)
    }
    else {
      this.props.addPost(title, body);
    }
    this.setState({ title: "", body: "", });
  }

 handleChange = (e) => {
   this.setState({ [e.target.name]: e.target.value, });
 };

 render() {
   return (
     <Form class="ui form" onSubmit={this.handleSubmit}>
         <div class="field">
         <Form.Input
           className='PostForm'
           label="Title"
           required
           placeholder="Title"
           name="title"
           value={this.state.title}
           onChange={this.handleChange}
         />
         </div>
         <div class='field'>
         <Form.TextArea
           className='PostForm'
           label="Question"
           required
           placeholder="Question"
           name="body"
           value={this.state.body}
           onChange={this.handleChange}
         />
         </div>
      <Form.Button>Submit</Form.Button>
     </Form>
   )
 }
}

export default PostForm;
