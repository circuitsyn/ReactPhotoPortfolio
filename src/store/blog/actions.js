/* Blog Actions */

export function loadBlogSuccess(posts) {
  return { type: 'LOAD_BLOG_POSTS_SUCCESS', posts}
}