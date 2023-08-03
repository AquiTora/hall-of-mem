import styles from "./Cards.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import Pagination from '../Pagination/Pagination';

const CardsOnPage = ({ index, pageSize, cards }) => {
    let pageCards = [];

    for (let i = 0; i < pageSize; i++) {
        pageCards.push(cards[i + index])
    }

    return (
        <>
            {pageCards.map((card) => {
                return (
                    <div className={styles.card}>
                        <div className={styles.card__title}>
                            <Image 
                                src={card.photos[0]}
                                height={108}
                                width={108}
                                alt='photo'
                            />
                            <h1>{card.title}</h1>
                        </div>

                        <div className={styles.card__content}>
                            <p>{card.content}</p> 
                            <Link 
                                href={`/card/${card.id}`}
                            >
                                Узнать больше
                            </Link>
                        </div>                        
                    </div>
                )
            })}
        </>
    )
}

const Cards = ({ cards, maxPage }) => {
    // Указывает на то, сколько карточек будет на одной странице
    const pageSize = 3;
    const [currentPage, setCurrentPage] = useState(1);
    const [pageIndex, setPageIndex] = useState(0);

    return (
        <div className={styles.cards}>
            <CardsOnPage 
                index={pageIndex}
                pageSize={pageSize}
                cards={cards}
            />            
            <Pagination 
                pageSize={pageSize}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                pageIndex={pageIndex}
                setPageIndex={setPageIndex}
                cardsSize={cards.length}
            />
        </div> 
    ) 
}

export default Cards;