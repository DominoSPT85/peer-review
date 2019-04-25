import React from "react";
import { Form, Grid, Divider, } from "semantic-ui-react";
import PostRTE from '../PostRTE';

class PostForm extends React.Component {
 state = { title: '', body: '' };

 componentDidMount() {
    if (this.props.id) {
      const { title, body } = this.props
      this.setState({ title, body })
    }
  }

  handlePostSubmit = (e) => {
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
  const { addPost } = this.props
   return (
    
     <Form onSubmit={this.handlePostSubmit}>
       <Form.Group widths="equal">
         <Form.Input
           label="Title"
           required
           placeholder="Title"
           name="title"
           value={this.state.title}
           onChange={this.handleChange}
         />
        
        </Form.Group>
        <PostRTE id={this.props.id} addPost={addPost} />
     </Form>
   )
 }
}

export default PostForm;
