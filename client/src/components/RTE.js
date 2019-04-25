import React, {Fragment} from "react";
import { render } from "react-dom";
import brace from "brace";
import AceEditor from "react-ace";
import "brace/mode/java";
import "brace/theme/github";
import axios from 'axios';

class RTE extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }
  state = {body:""};
    

  handleSubmit = (e) => {
    e.preventDefault();
    const { body }  = this.state
    this.props.addAnswer(body);
    this.setState({ body: '' })
   }

   

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

  // handleChange = (newV) => {
  //   console.log('', newV)
  //   // this.setState({ body: { newV } });
  // };  

  onChange(newValue) {
    this.state.body = newValue;

}
  
  // addAnswer = (body) => {
  //   const id = this.props.id
  //   axios.post(`/api/posts/${id}/answers`, { body })
  //   .then( res => {
  //     const { answers } = this.state;
  //     this.setState({ answers: [...answers, res.data] });    })
  //   .catch( err => {
  //     console.log(err);
  //   })
  // }

  render() {
    const { body } = this.state
  
    return(
      <Fragment>
      <AceEditor
       placeholder=""
       mode="javascript"
       theme="monokai"
       onLoad={this.onLoad}
       onChange={this.onChange}
       fontSize={14}
       showPrintMargin={true}
       showGutter={true}
       highlightActiveLine={true}
       setOptions={{
       enableBasicAutocompletion: true,
       enableLiveAutocompletion: false,
       enableSnippets: true,
       showLineNumbers: true,
       tabSize: 2,
       
       }}/>
      
 
  
    
    
    <button type='submit' onClick={this.handleSubmit}>Submit</button>
    </Fragment>

    )
  }
}
export default RTE;
