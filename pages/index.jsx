import { useEffect, useState } from "react";
import { getAllPerson } from "../Service/PageServiсe";
import Header from "../components/Header/Header";
import Cards from "../components/Cards/Cards";
import Link from "next/link";

export default function Index (props) {
    const [cards, setCards] = useState(props.data.persons);

    return (
        <div>
            <Header />
            <Cards 
                cards={cards}
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