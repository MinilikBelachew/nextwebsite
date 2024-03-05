import styles from './home.module.css'
import Image from "next/image"

const Home = () => {
  return(
   <div className={styles.container}>
    <div className={styles.textcontainer}>
      <h1 className={styles.title}> Newness blooms from vibrant minds,
Shaping worlds unseen, one kind at a time.</h1>
<p className={styles.desc}>Creativity sparks like a vibrant flame,
Transforming the ordinary, never the same.
It's the artist's brushstroke, the writer's vivid phrase,
A wellspring of ideas lighting up our days.</p>
<div className={styles.buttons}>
  <button className={styles.button}> Abebe</button>
  <button className={styles.button}> oliyad </button>
</div>
<div className={styles.brad}>
  <Image src="/brands.png" alt="" fill className={styles.brandimg}/>
</div>

    </div>
    <div className={styles.imagecontainer}>
      <Image src="/hero.gif" alt="" fill className={styles.heroimage}/>

    </div>
    </div>
  );
};

export default Home;