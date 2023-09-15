import {connectDB} from "@/util/database"
import {ObjectId} from "mongodb";
import styles from './page.module.css'
import Cart from "@/components/Cart";

export default async function Detail(props){
    const client= await connectDB
    const db=client.db("shop")
    let result=await db.collection('new').findOne({_id: new ObjectId(props.params.id)});
    console.log(result)
    return(
       <div className={styles.detail}>
            {/* <h3 className={styles.h3}>상세페지</h3> */}
            <div  className={styles.detailWrap}>
                <div className={styles.imgWrap}>
                    <img src={result.image} alt={result.title} />
                </div>
                <div className={styles.text}>
                    <h4  className={styles.h4}>{result.title}</h4>
                    <p  className={styles.description}>{result.description}</p>
                    <p  className={styles.price}>{result.price}</p>
                    <p  className={styles.card}>{result.card}</p>
                    <p  className={styles.dilivery}><span>배송비</span>만원이상 무료배송(사이즈교환1회무료)</p>
                    <p  className={styles.color}><span className={styles.span}>색상</span><input type="text" /></p>
                    <p  className={styles.size}><span className={styles.span}>사이즈</span><input type="text" /></p>
                    <Cart result={result} />
                </div>

            </div>
       </div>
    )
}