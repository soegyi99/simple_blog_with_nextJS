import AllBlogs from "../../components/home/blogs/All-blogs"
import { getAllBlogs } from "../../utlities/blog-utli"
import Head from "next/head"
function Allblog (props) {
    
    

    return(
        <div>
            <Head>
                <title>BLOG/blogs</title>
            </Head>
            <AllBlogs blogs={props.blogs} />
        </div>
    )
}

export function getStaticProps () {
    const allBlogs = getAllBlogs()

    return{
        props : {
            blogs : allBlogs
        }
    }
}

export default Allblog