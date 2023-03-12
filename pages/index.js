import FeatureBlogs from "../components/home/featureBlog/FeatureBlog"
import Hero from "../components/home/hero/Hero"
import {getFeaturedBlogs} from '../utlities/blog-utli'
import Head from "next/head"


function Home (props) {

    

    return(
        <div>
            <Head>
                <title>BLOG</title>
            </Head>
            <Hero />
            <FeatureBlogs blogs={props.blogs} />
        </div>
    )
}

export function getStaticProps () {
    const featureBlogs = getFeaturedBlogs()

    return{
        props : {
            blogs:featureBlogs
        }
    }
}

export default Home