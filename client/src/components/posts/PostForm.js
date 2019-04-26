import React from "react";
import { Form, Segment, Accordion } from "semantic-ui-react";
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

handleClick = (e, titleProps) => {
 const { index } = titleProps
 const { activeIndex } = this.state
 const newIndex = activeIndex === index ? -1 : index

 this.setState({ activeIndex: newIndex })
};

 render() {
  const { activeIndex } = this.state
   return (
     <>
    <div class="ui one column stackable center aligned page grid">
      <div class="column sixteen wide">
      <Segment padded>
    <Accordion fluid styled>
        <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}>
          
          <h3 textAlign="center">Click here to post a question</h3>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
     
     
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
      <Form.Button>Submit Question</Form.Button>
        </div>
      </div>
     </Form>
     
     
     </Accordion.Content>
     
     </Accordion>
     </Segment>
     </div>
     </div>
     </>
     
    
     
     
   )
 }
}

export default PostForm;
