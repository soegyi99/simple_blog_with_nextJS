import Link from "next/link"
import classes from './nav.module.css'

function Nav () {
    return (
        <div className={classes.header} >
           <div className="logo" >
            <Link href='/' >
              <div className={classes.logo} >Ambatukum's blog</div>
            </Link>
           </div>
           <ul>
            <li>
                <Link href='/blogs' >Blogs</Link>
            </li>
            <li>
                <Link href='/contact' >Contact</Link>
            </li>
           </ul>
        </div>
    )
}

export default Nav