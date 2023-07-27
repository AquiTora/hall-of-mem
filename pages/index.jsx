import { useEffect, useState } from "react";
import { Person } from "../Service/PageServive";
import Header from "../components/Header/Header";
import Cards from "../components/Cards/Cards";

export default function Index (props) {
    const [cards, setCards] = useState(props.data.person);

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
    let data = await Person();

    return {
        props: {
            data
        },
    };
}