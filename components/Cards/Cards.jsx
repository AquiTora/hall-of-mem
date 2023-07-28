import styles from "./Cards.module.scss";
import Image from "next/image";
import Link from "next/link";

const Cards = ({ cards }) => {
    return (
        <div className={styles.cards}>
            {cards.map((item) => {
                return (
                    <div className={styles.card}>
                        <div className={styles.card__title}>
                            <Image 
                                src={item.photos[0]}
                                height={108}
                                width={108}
                                alt='photo'
                            />
                            <h1>{item.title}</h1>
                        </div>

                        <div className={styles.card__content}>
                            <p>{item.content}</p> 
                            <Link 
                                href={`/card/${item.id}`}
                            >
                                Узнать больше
                            </Link>
                        </div>                        
                        
                    </div>
                )
            })}
        </div> 
    ) 
}

export default Cards;