import React from "react";
import { Form, } from "semantic-ui-react";
import './PostForm.css'

class PostForm extends React.Component {
 state = { title: '', body: '', };

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
      this.props.toggleState();
    }
    this.setState({ title: "", body: "" });
  }

 handleChange = (e) => {
   this.setState({ [e.target.name]: e.target.value, });
 };

 render() {
   return (
     <>
    <div class="ui one column stackable center aligned page grid">
      <div class="column sixteen wide">
     <Form class="ui form" onSubmit={this.handleSubmit}>
        <br/>
         <div class="field">
         <Form.Input
           className='PostForm'
           label="Title"
           required
           placeholder="What is your question?"
           name="title"
           value={this.state.title}
           onChange={this.handleChange}
         />
         </div>
         <div class='field'>
         <Form.TextArea
           className='PostForm'
           label="Problem Summary"
           required
           placeholder = 'Explain what you need help with'
           name="body"
           value={this.state.body}
           onChange={this.handleChange}
         />
         <br/>
        </div>
         <div class="ui one column stackable center aligned page grid">
          <div class="column twelve wide">
      <Form.Button onClick="closeForm">Submit Question</Form.Button>
        </div>
      </div>
     </Form>
     </div>
     </div>
     </>
     
    
     
     
   )
 }
}

export default PostForm;
