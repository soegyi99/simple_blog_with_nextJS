import classes from './all-blogs.module.css'
import BlogsGrid from './blogs-grid'

function AllBlogs ({blogs}) {
    return (
        <div className={classes.posts} >
            <h1>All Blogs</h1>
            <BlogsGrid blogs={blogs} />
        </div>
    )
}

export default AllBlogs