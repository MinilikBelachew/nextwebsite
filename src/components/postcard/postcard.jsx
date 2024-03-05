import Image from "next/image"
import Link from "next/link"
import styles from "./postcard.module.css"
const Postcard =() => {
    return(
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.imgcontainer}>
                    <Image src="/image.jpg" alt="" fill className={styles.img} />

                </div>
                <span className={styles.date}>01.02.03</span>

            </div>
            <div className={styles.bottom}>
                <h1 className={styles.title}>Title </h1>
                <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam eligendi, aspernatur deserunt nihil aliquam vero corrupti. Magnam commodi, alias sit placeat fugit quod quo sequi similique, corrupti doloremque atque quia?</p>
                <Link className={styles.link} href="/blog/post"> Read More</Link>

            </div>
        </div>
    )
}
export default Postcard