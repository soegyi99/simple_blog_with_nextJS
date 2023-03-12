import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

import BlogDetailss from "../../components/home/blogs/blog details/blog-details"



function BlogDetails (props) {

    
   
    return(
        <BlogDetailss blog={props.blog}  />
    )
}

export function getStaticProps (context) {

    const { params } = context
    const { blogId } = params
    console.log(blogId)

  function getBlogdata () {
    const filepath = path.join(process.cwd(),'data')
    const blogfilepath = path.join(filepath,`${blogId}.md`)
    const blogdata = fs.readFileSync(blogfilepath,'utf-8')
    const {data,content} = matter(blogdata)

    return {
        blogId,
        ...data,
        content
    }
}

  return{
    props : {
        blog : getBlogdata()
    },
    revalidate : 10
}
}


export function getStaticPaths () {

    return {
        paths : [],
        fallback : 'blocking'
    }
   
}

export default BlogDetails


