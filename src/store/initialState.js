import $ from 'jquery'

export default {
    blog: {
      loading: false,
      posts: [],
      articleNum: 0,
      alterArticleState: (e) => {
        // e.preventDefault()
        let updatedArticleNum = $(e.target).attr('articlenum');
        console.log('e.target:', e.target)
        console.log('e.articleNum:', $(e.target).attr('articlenum'))
        // this.props.history.push('/Blog' + `${this.props.path}`);
        console.log('e.target.href', e.target.href)
        // this.history.push(e.target.href);
        console.log('updatedArticleNum', updatedArticleNum)
        this.setState({
          articleNum: updatedArticleNum
        })
      } 
    }
  }