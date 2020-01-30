import $ from 'jquery'

export default {
    blog: {
      loading: false,
      posts: [],
      articleNum: 0,
      alterArticleState: (e) => {
        e.preventDefault()
        console.log('e.target:', e.target)
        console.log('e.articleNum:', $(e.target).attr('articlenum'))
        this.props.history.push('/Blog' + `${this.props.path}`);
      } 
    }
  }