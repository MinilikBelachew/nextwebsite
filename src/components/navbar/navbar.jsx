import Link from "next/link"
import Links from "./link/link"
import styles from "./navbar.module.css"

const NavBar =() => {
    return(
        <div className={styles.container}>
            <Link href="/"  className={styles.logo} >Logo</Link>
          <Links/>
        </div>
    )
}
export default NavBar