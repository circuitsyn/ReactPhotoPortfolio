/**
* Blog Reducer
*/
import initialState from '../../store/initialState'
// import * as types from './types'

export default function blogReducer(state = initialState.blog, action) {
  switch (action.type) {
    case 'BLOG_LOADING':
      return {
        ...state,
        loading: action.isLoading
      }
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