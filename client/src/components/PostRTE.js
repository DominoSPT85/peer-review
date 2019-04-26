import React, {Fragment} from "react";
import { render } from "react-dom";
import brace from "brace";
import AceEditor from "react-ace";
import axios from 'axios';
import { Form, Grid, Divider, } from "semantic-ui-react";

class RTE extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }
  state = { title: '', body: '' };
    

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

  
   

  componentDidMount() {
    if (this.props.id) {
      const { title, body } = this.props
      this.setState({ title, body })
    }
  }

 

  onChange(newValue) {
    this.state.body = newValue;

}
handleChange = (e) => {
  this.setState({ [e.target.name]: e.target.value, });
};
  


  render() {
    const { body, title } = this.state
  
    return(
      <Fragment>
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
      <AceEditor
      style={{border: "1px solid black", width: '100%', color: 'black' }}
       value="// Enter text here."
       mode=""
       onLoad={this.onLoad}
       onChange={this.onChange}
       fontSize={14}
       showPrintMargin={false}
       showGutter={true}
       highlightActiveLine={true}
       setOptions={{
       enableLiveAutocompletion: false,
       showLineNumbers: true,
       tabSize: 2,
       wrapEnabled: true,
       required: true,
       minLines: 10,
       maxLines: 30,
       
       
       }}/>
      
 
  
    
    
    <button type='submit' onClick={this.handlePostSubmit}>Submit</button>
    </Fragment>

    )
  }
}
export default RTE;