import $ from 'jquery'
import store from '../store'

export default {
    blog: {
      loading: false,
      posts: [],
      articleNum: 0,
      alterArticleState: (e) => {
        let updatedArticleNum = 0;
				updatedArticleNum = $(e.target).attr('articlenum');
        // e.preventDefault()
        // console.log('e.target:', e.target)
        console.log('e.articleNum:', $(e.target).attr('articlenum'))
        // this.props.history.push('/Blog' + `${this.props.path}`);      } 
				let action = { type: 'CHANGEARTICLE', articleNum: updatedArticleNum} 
        store.dispatch(action)
      } 
    }
  }