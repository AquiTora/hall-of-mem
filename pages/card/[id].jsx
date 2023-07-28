import Head from "next/head";
import { getAllPostIds, getPersonData } from "../../Service/PageServiсe";
import Card from "../../components/Card/Card";

export async function getStaticPaths() {
    const paths = getAllPostIds();

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const postData = await getPersonData(params.id);

    console.log('postData', postData);
    
    return {
        props: {
            postData,
        },
    };
}

const card = (props) => {
    return (
        <div>
            <Card 
                content={props.postData}
            />
        </div>
    )
}

export default card;