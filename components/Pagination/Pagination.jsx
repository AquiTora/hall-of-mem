import styles from './Pagination.module.scss';
import { useRouter } from 'next/router';

const Pagination = ({ pageSize, currentPage, setCurrentPage, pageIndex, setPageIndex, cardsSize }) => {
    const router = useRouter();
    let pageNumb = Math.ceil(cardsSize / pageSize);

    function handleChangePageUp(currentPage, pageIndex) {
        setCurrentPage(currentPage + 1);
        setPageIndex(pageIndex + 3);
    }

    function handleChangePageDown(currentPage, pageIndex) {
        setCurrentPage(currentPage - 1);
        setPageIndex(pageIndex - 3);
    }
    
    if (currentPage === 1) {
        return (
            <div>
                <button>{currentPage}</button>
                <button 
                    onClick={() => {
                        handleChangePageUp(currentPage, pageIndex)
                    }}
                >
                    {currentPage + 1}
                </button>
            </div>
        )
    } else if (currentPage === pageNumb) {
        return (
            <div>
                <button
                    onClick={() => {
                        handleChangePageDown(currentPage, pageIndex)
                    }}
                >
                    {currentPage - 1}
                </button>
                <button>{currentPage}</button>
            </div>
        )
    } else {
        return (
            <div>
                <button>{currentPage - 1}</button>
                <button>{currentPage}</button>
                <button>{currentPage + 1}</button>
            </div>
        )
    }
};

export default Pagination;