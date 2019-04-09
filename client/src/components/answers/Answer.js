import React, { Component } from 'react';
import {Container, Card, Image, Grid } from 'semantic-ui-react';
import AnswerList from './AnswerList';
import axios from 'axios';



class Answer extends Component {
  state = { answers: [] }



  // componentDidMount() {
  //   const { id } = this.props.match.params
  //   // grab post from db
  //   axios.get(`/api/departments/${id}`)
  //     .then( res => {
  //       this.setState({ products: res.data })
  //     })
  //     .catch( err => {
  //       console.log(err)
  //     })
  // }

  // displayDepartment = () => {
  //   return this.state.products.map( product => <ProductList key={product.id} {...product} />)

  // }

  // componentDidMount() {
  //   axios.get(`/api/departments/${this.props.id}/products`)
  //     .then( res => {
  //       this.setState({ products: res.data })
  //     })
  //     .catch( err => {
  //       console.log(err)
  //     })
  // }
  
  render() {
    const { body } = this.props


      return(
        <>
        <Grid>
        <Grid.Column>
        <Card>
  
        <Card.Content>{body}</Card.Content>
        </Card>
        </Grid.Column>
        </Grid>
        </>


    )
  }
}


export default Answer
