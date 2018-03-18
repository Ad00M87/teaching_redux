import React from 'react';
import { connect } from 'react-redux';
import { updatePost } from '../actions/posts';

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
      id: this.props.p.id,
      title: this.state.title,
      body: this.state.body,
      user_id: this.props.p.id
    }
    this.props.dispatch(updatePost(post))
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
        <div>
          <h3>{p.title}</h3>
          <p>{p.body}</p>
          <button onClick={this.toggleEdit}>Edit Post</button>
          <button>Delete Post</button>
        </div>
      )
    }
  }
}

export default connect()(Post);
