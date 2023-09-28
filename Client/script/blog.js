let params = new URLSearchParams(window.location.search)
let blogId = params.get('blogId')


const [blog] = allBlogs.filter(blog => blog.id === blogId)