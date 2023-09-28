import { allBlogs } from "./everyBlog.js"









const main = document.querySelector('main')


allBlogs.forEach((blog, index) => {

    const blog_container = document.createElement('div')
    blog_container.key = index
    blog_container.setAttribute('class', 'blogContainer')


    const all_Content = document.createElement('div')
    all_Content.setAttribute('class', 'allContent')





    const blog_title = document.createElement('p')
    blog_title.setAttribute('class', 'blogTitle')
    blog_title.innerText = blog.title

    const blog_author = document.createElement('p')
    blog_author.setAttribute('class', '"blogAuthor')
    blog_author.innerText = `by: ${blog.authur}`

    const blog_body = document.createElement('p')
    blog_body.setAttribute('class', 'blogContent')
    blog_body.innerText = blog.body

    const btn_container = document.createElement('div')
    btn_container.setAttribute('class', 'buttonContainer')
    const view_btn = document.createElement('button')
    view_btn.setAttribute('class', 'viewButton')
    view_btn.innerText = 'View'

    view_btn.addEventListener('click', () => {
        let params = new URLSearchParams();
        params.set('blogId', blog.id);
        window.location.href = `blog.html?${params.toString()}`
    })
    btn_container.appendChild(view_btn)


    // blog_container.appendChild(blog_title)
    // blog_container.appendChild(blog_author)
    // blog_container.appendChild(blog_body)


    all_Content.appendChild(blog_title)
    all_Content.appendChild(blog_author)
    all_Content.appendChild(blog_body)
    blog_container.appendChild(all_Content)
    blog_container.appendChild(btn_container)
    main.appendChild(blog_container)
})


