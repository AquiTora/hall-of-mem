import styles from "./Cards.module.scss";
import Image from "next/image";
import Link from "next/link";

const Cards = ({ cards }) => {
    return (
        <div className={styles.cards}>
            {cards.map((item) => {
                return (
                    <div className={styles.cards__card}>
                        <Image 
                            src='/jpg/test1.jpg'
                            height={108}
                            width={108}
                            alt='photo'
                        />
                        <h1>{item.title}</h1>
                        <p>{item.content}</p>  
                    </div>
                )
            })}
        </div> 
    ) 
}

export default Cards;