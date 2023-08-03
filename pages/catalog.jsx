import { getAllPerson } from '../Service/PageServiсe';
import Header from '../components/Header/Header';
import Cards from '../components/Cards/Cards';

export default function catalog (props) {
    return (
        <div>
            <Header />
            <Cards 
                cards={props.data.persons}
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