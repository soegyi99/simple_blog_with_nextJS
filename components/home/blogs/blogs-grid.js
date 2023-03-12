import classes from './blogs-grid.module.css'
import BlogItem from './BlogItem'

function BlogsGrid ({blogs}) {


    return(
        <div className={classes.grid} >
            {blogs.map(blog => {
                return <BlogItem key={blog.blogId} blog={blog} />
            })}
        </div>
    )
}

export default BlogsGrid