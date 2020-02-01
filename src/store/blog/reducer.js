/* Blog Reducer */
import initialState from '../../store/initialState'

export default function blogReducer(state = initialState.blog, action) {
  console.log('state:', state)
  console.log('initialState.blog:', initialState.blog)
  console.log('action:', action)
  console.log('action.type:', action.type)

  switch (action.type) {
    case 'LOAD_BLOG_POSTS_SUCCESS':
      return {
        ...state,
        posts: action.posts,
      }
    case 'CHANGE_ARTICLE_NUM':
      return {
        articleNum: action.articleNum
      }
    default:
      return state
  }
}