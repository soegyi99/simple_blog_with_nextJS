import Image from 'next/image'
import classes from './blog-details.module.css'
import ReactMarkdown from 'react-markdown'


function BlogDetailss ({blog}) {
   
   
    return(
      
            <article className={classes.content} >
            <header>
                <h1>{blog.title}</h1>
                <Image src={`/images/blogs/${blog.image}`} width={200} height={150} alt={blog.title} />
            </header>
            <ReactMarkdown>{blog.content}</ReactMarkdown>
            </article> 
    )
}

export default BlogDetailss