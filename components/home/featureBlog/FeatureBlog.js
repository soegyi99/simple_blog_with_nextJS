import BlogsGrid from '../blogs/blogs-grid'
import classes from './FeatureBlog.module.css'

function FeatureBlogs ({blogs}) {
    return(
        <div className={classes.lateast} >
            <h2>Feature Blogs</h2>
            <BlogsGrid blogs={blogs} />
        </div>
    )
}

export default FeatureBlogs