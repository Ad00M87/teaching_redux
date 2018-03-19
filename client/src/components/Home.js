import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { getPosts, newPost } from '../actions/posts';
import Post from './Post';
import {
  Card,
  Grid,
  Divider,
  Container,
  Form,
  Button,
} from 'semantic-ui-react';

class Home extends Component {

  state = {
    title: '',
    body: '',
  }

  componentDidMount() {
    this.props.dispatch(getPosts())
  }

  handleChange = (e) => {
    let { name, value } = e.target;
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let post = {
      title: this.state.title,
      body: this.state.body,
      user_id: this.props.coolPerson.id
    }
    this.props.dispatch(newPost(post))
    this.setState({ title: '', body: '' })
  }

  render() {
    return (
      <Container>
        <Divider hidden />
        <Header textAlign="center">Welcome: {this.props.coolPerson.name}</Header>
        <Divider />
        <div>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group widths="equal">
              <Form.Field>
                <label>Title</label>
                <input
                  name="title"
                  onChange={this.handleChange}
                  value={this.state.title}
                />
              </Form.Field>
              <Form.Field>
                <label>Body</label>
                <input
                  name="body"
                  onChange={this.handleChange}
                  value={this.state.body}
                />
              </Form.Field>
            </Form.Group>
            <Button type="submit">Add Post</Button>
          </Form>
        </div>
        <Divider />
        <Card.Group>
          { this.props.posts.map( p => {
            return(
              <Post key={p.id} p={p} />
            )
          })}
        </Card.Group>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    coolPerson: state.user,
    posts: state.posts,
  }
}

export default connect(mapStateToProps)(Home);
