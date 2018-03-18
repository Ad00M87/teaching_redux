import axios from 'axios'

export const getPosts = () => {
  return dispatch => {
    axios.get('/api/posts')
    .then( res => {
      dispatch({ type: 'GET_POSTS', posts: res.data })
    })
  }
}

export const newPost = (post) => dispatch => {
  axios.post('/api/posts', post)
    .then( res => {
      dispatch({ type: 'ADD_POST', post: res.data })
    })
}

export const updatePost = (id, post) => dispatch => {
  axios.put(`/api/posts/${id}`, { post })
    .then( res => {
      dispatch({ type: 'UPDATE_POST', post: res.data })
    })
}

export const deletePost = (id) => dispatch => {
  axios.delete(`/api/posts/${id}`)
    .then( res => {
      dispatch({ type: 'DELETE_POST', post: res.data })
    })
}
