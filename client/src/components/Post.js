import React from 'react';
import { connect } from 'react-redux';
import { updatePost, deletePost } from '../actions/posts';
import { Card, Button } from 'semantic-ui-react';

class Post extends React.Component {
  state = {
    editing: false,
    title: this.props.p.title,
    body: this.props.p.body,
  }

  toggleEdit = () => {
    this.setState({ editing: !this.state.editing })
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
      user_id: this.props.p.user_id
    }
    this.props.dispatch(updatePost(this.props.p.id, post))
    this.setState({ editing: false })
  }

  render() {
    const { p } = this.props;
    if (this.state.editing) {
      return(
        <div>
          <form onSubmit={this.handleSubmit}>
            <input
              name="title"
              onChange={this.handleChange}
              value={this.state.title}
            />
            <input
              name="body"
              onChange={this.handleChange}
              value={this.state.body}
            />
            <button type="submit">Update Post</button>
          </form>
        </div>
      )
    } else {
      return(
        <Card style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '5px',
        }}>
          <Card.Header>
            {p.title}
          </Card.Header>
          <Card.Description>
            {p.body}
          </Card.Description>
          <Card.Content extra>
            <Button onClick={this.toggleEdit} color="blue">Edit Post</Button>
            <Button onClick={() => this.props.dispatch(deletePost(p.id))} color="red">Delete Post</Button>
          </Card.Content>
        </Card>
      )
    }
  }
}

export default connect()(Post);
