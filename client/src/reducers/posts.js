const posts = (state = [], action) => {
  switch(action.type) {
    case 'GET_POSTS':
      return action.posts;
    case 'ADD_POST':
      return [action.post, ...state];
    case 'UPDATE_POST':
    return state.map( p => {
      if (p.id === action.post.id)
        return action.post
      return p
      });
    default:
      return state;
  }
}

export default posts;
