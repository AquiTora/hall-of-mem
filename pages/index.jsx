import { useEffect, useState } from "react";
import { getAllPerson } from "../Service/PageServiсe";
import Header from "../components/Header/Header";
import Cards from "../components/Cards/Cards";
import Link from "next/link";
import Pagination from '../components/Pagination/Pagination';

export default function Index (props) {
    const [cards, setCards] = useState(props.data.persons);
    // const [currentPage, setCurrentPage] = useState(1);
    // const pageSize = 2;

    // const onPageChange = (page) => {
    //     setCurrentPage(page);
    // };

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