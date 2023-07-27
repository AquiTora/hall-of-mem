import { useEffect, useState } from "react";
import { Person } from "../Service/PageServive";
import Header from "../components/Header/Header";

export default function Index (props) {
    const [cards, setCards] = useState(props.data.person);

    console.log('cards', cards);

    return (
        <div>
            <Header />
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