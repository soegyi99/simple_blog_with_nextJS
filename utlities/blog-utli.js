import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const filepath = path.join(process.cwd(),'data')

export function getBlogsFilename () {
    return fs.readdirSync(filepath)
}

export function getBlogData (blogIndentifier) {
    const Blogslug = blogIndentifier.replace(/\.md$/,'')
    const blogfilepath = path.join(filepath,`${Blogslug}.md`)
    const blogdata = fs.readFileSync(blogfilepath,'utf-8')

    const {data,content} = matter(blogdata)
    
   

    return {
        blogId : Blogslug,
        ...data,
        content
    }
    }

export function getAllBlogs () {

    const blogsFile = getBlogsFilename()
    const allBlogs = blogsFile.map(blogFile => {
        return getBlogData(blogFile)
    })

    const sortedBlogs = allBlogs.sort((blogA,blogB) => blogA.date > blogB.date ? -1 : 1)

    return sortedBlogs

}

export function getFeaturedBlogs () {
    const allBlogs = getAllBlogs() 

    const featuredBlogs = allBlogs.filter(blog => blog.isFeatured)

    return featuredBlogs
}