import { useEffect, useState } from "react";
import { getAllPerson, getPageNumber } from "../Service/PageServiсe";
import Header from "../components/Header/Header";
import Cards from "../components/Cards/Cards";
import Link from "next/link";

export default function Index (props) {
    const [cards, setCards] = useState(props.data.persons);
    console.log(props.maxPages);

    return (
        <div>
            <Header />
            <Link href='catalog/page=1'>Каталог</Link>
            <Cards 
                cards={cards}
                maxPage={props.maxPage}
            />
        </div>
    )
}

export async function getServerSideProps() {
    let data = await getAllPerson();

    return {
        props: {
            data
        },
    };
}