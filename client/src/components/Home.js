import React from 'react';
import { Link } from 'react-router-dom';
import { Header, Container } from 'semantic-ui-react';
import PostList from './posts/PostList';


const Home = () => (
  <>
  <Container>
    <br />
    <Header as="h1" textAlign="center">Peer Review</Header>
    <PostList/>
  </Container>

  </>
)



export default Home;
