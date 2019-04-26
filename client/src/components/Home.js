import React from 'react';
import { Header, Container } from 'semantic-ui-react';
import PostList from './posts/PostList';


const Home = () => (
  <>
  <Container>
    <br />
    <Header as="h1" textAlign="center">Peer Review</Header>
    <br />
    <br />
    <PostList/>
  </Container>

  </>
)



export default Home;
