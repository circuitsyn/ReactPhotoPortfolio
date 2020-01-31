import * as contentful from 'contentful'
import * as actions from './blog/actions'

const client = contentful.createClient({
    space: process.env.REACT_APP_CONTENT_SPACE_ID,
    accessToken: process.env.REACT_APP_CONTENT_API_KEY
})

const error = err => console.log(err)

export function loadBlog() {
  return dispatch =>
    client.getEntries()
      .then(({items}) => {
        dispatch(actions.loadBlogSuccess(items))
      })
      .catch(error)
}