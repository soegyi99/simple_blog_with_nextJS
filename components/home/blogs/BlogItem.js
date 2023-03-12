import classes from './blogs-item.module.css'
import Link from 'next/link'
import Image from 'next/image'

function BlogItem ({blog}) {
    const date = new Date(blog.date).toLocaleDateString('en-US',{day:'numeric',month:'long',year:'numeric'})

    
    return (
        <li className={classes.post} >
            <Link href={`/blogs/${blog.blogId}`} >
            <div className={classes.image} >
            <Image src={`/images/blogs/${blog.image}`} alt={blog.title} layout='responsive' width={300} height={200} />
            </div>
            <div className={classes.content} >
                <h3>{blog.title}</h3>
                <time>{date}</time>
                <p>{blog.excerpt}</p>
            </div>
            </Link>
        </li>
    )
}

export default BlogItem