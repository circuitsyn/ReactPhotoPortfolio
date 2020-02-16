/* Blog Reducer */
import initialState from '../../store/initialState'

export default function blogReducer(state = initialState.blog, action) {

  switch (action.type) {
    case 'LOAD_BLOG_POSTS_SUCCESS':
      return {
        ...state,
        posts: action.posts,
      }
    case 'CHANGE_ARTICLE_NUM':
      return {
        ...state,
        articleNum: action.articleNum
      }
    case 'CHANGE_LATEST':
      return {
        ...state,
        articleNum: 0
      }
    case 'CHANGE_PAGE_TITLE':
      return {
        ...state,
        navTitle: action.navTitle
      }
    default:
      return state
  }
}