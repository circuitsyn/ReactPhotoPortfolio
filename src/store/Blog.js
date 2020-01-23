import * as contentful from 'contentful'
import * as actions from './blog/actions'
// import dotenv from "dotenv";

const client = contentful.createClient({
    space: process.env.REACT_APP_CONTENT_SPACE_ID,
    accessToken: process.env.REACT_APP_CONTENT_API_KEY
})

const error = err => console.log(err)

export function loadBlog() {
  return dispatch => {
    dispatch (actions.blogLoading())
    return client.getEntries()
      .then(({items}) => {
        dispatch(actions.loadBlogSuccess(items))
      })
      .catch(error => {
        console.log(error)
        dispatch(actions.blogLoading(false))
      })
}
}