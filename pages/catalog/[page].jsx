import Head from "next/head";
import { getPageNumber, getAllPerson } from "../../Service/PageServiсe";
import Card from "../../components/Card/Card";
import Cards from '../../components/Cards/Cards';

export async function getStaticPaths() {
    const paths = getPageNumber();

    console.log(paths);

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps() {
    let data = await getAllPerson();

    return {
        props: {
            data
        },
    };
}

export default function page (props) {
    return (
        <Cards 
            cards={props.data.persons}
        />
    )
}