import Image from "next/image"
import style from "./single.module.css"
const SinglePostPage = () => {
    return (
        <div className={style.container}>
            <div className={style.imagecontainer}>
                <Image src="/imagefive.jpg" alt="" fill className={style.img} />
            </div>
            <div className={style.textcontainer}>
                <h1 className={style.title}>Title</h1>
                <div className={style.detail}>
                    <Image  src="/imagesix.jpg" className={style.avatar} height={50} width={50} alt="" />
                    <div className={style.detailtext}>
                        <span className={style.detailtitle}> Author</span>
                        <span className={style.detailvalue}> Minilik BElachew</span>
                    </div>
                    <div className={style.detailtext}>
                        <span className={style.detailtitle}> Published</span>
                        <span className={style.detailvalue}> 1.1.2020</span>
                    </div>
                </div>
                <div className={style.content}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae ut quae, voluptate, laudantium inventore cum nostrum distinctio praesentium facilis deleniti laboriosam voluptatem cumque debitis natus nobis ex ipsum, qui quis!</div>
            </div>
        </div>
    )
}
export default SinglePostPage