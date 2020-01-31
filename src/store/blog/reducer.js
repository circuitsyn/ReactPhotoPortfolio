/* Blog Reducer */
import initialState from '../../store/initialState'

export default function blogReducer(state = initialState.blog, action) {
  switch (action.type) {
    case 'LOAD_BLOG_POSTS_SUCCESS':
      return {
        ...state,
        posts: action.posts,
        loading: false
      }
    default:
      return state
  }
}