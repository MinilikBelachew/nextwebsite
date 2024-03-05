
import Image from "next/image"
import styles from "./about.module.css"
const AboutPage = () => {
    return (
        <div className={styles.continer}>
            <div className={styles.textcontainer}>
                <h2 className={styles.subtitle}>About Agency </h2>
                <h1 className={styles.title}>
                    Creativity is the spark that ignites endless possibilities,
                    lighting the path towards positive change and boundless inspiration.
                    </h1>
                <p className={styles.desc}>Creativity paints the world with vibrant hues of imagination,
                    infusing joy into every stroke of innovation.
                    It dances with curiosity,
                    guiding us to discover new horizons and shape brighter tomorrows.
                    In its embrace, we find the power to transform challenges into opportunities and
                    dreams into reality, nurturing a tapestry of hope and endless potential.
                    With each act of creation, we celebrate the beauty of the human spirit and
                    the limitless depths of our collective imagination
                    </p>
                    
                <div className={styles.boxes}>
                    <div className={styles.box}>
                    <h1> 10 k+</h1>
                    <p>year of experience</p>
                    </div>
                    <div className={styles.box}>
                    <h1> 10 k+</h1>
                    <p>year of experience</p>
                    </div>
                    <div className={styles.box}>
                    <h1> 10 k+</h1>
                    <p>year of experience</p>
                    </div>
                </div>

            </div>


            <div className={styles.imagecontainer}>
                <Image src="/about.png" alt="" fill  className={styles.img}/>
            </div>

        </div>
    )
}
export default AboutPage