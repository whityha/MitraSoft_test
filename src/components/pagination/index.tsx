import { Form, Pagination } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

import { useAppSelector } from '@/hooks/useRedux';
import { SET_MAX_POSTS_IN_PAGE } from '@/redux/actions';

interface PaginationComponent {
    contentLength: number;
    currentPage: number;
    changeCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

const PaginationComponent = ({
    currentPage,
    changeCurrentPage,
    contentLength,
}: PaginationComponent) => {
    const dispatch = useDispatch();
    const MAX_POSTS_IN_PAGE = useAppSelector((root) => root.maxPostsInPage);
    const minPages = 1;
    const maxPages = Math.ceil(contentLength / MAX_POSTS_IN_PAGE);
    const nextPage = () => changeCurrentPage((prevPage: number) => prevPage + 1);
    const prevPage = () => changeCurrentPage((prevPage: number) => prevPage - 1);
    const handleCurrentPage = (pageNumber: number) => () => changeCurrentPage(pageNumber);
    const changeMaxPostsInPage = (e: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(SET_MAX_POSTS_IN_PAGE(Number(e.target.value)));
    };
    return (
        <div className="d-flex m-3 gap-3 flex-column">
            <Form.Select onChange={changeMaxPostsInPage}>
                <option value={5}>Выберите количество элементов на странице</option>
                <option value={1}>1</option>
                <option value={6}>6</option>
                <option value={10}>10</option>
                <option value={15}>15</option>
            </Form.Select>
            <Pagination className="justify-content-center">
                <Pagination.First
                    onClick={handleCurrentPage(1)}
                    disabled={minPages === currentPage}
                />
                <Pagination.Prev disabled={minPages === currentPage} onClick={prevPage} />
                {minPages !== currentPage && (
                    <Pagination.Item onClick={handleCurrentPage(currentPage - 1)}>
                        {currentPage - 1}
                    </Pagination.Item>
                )}
                <Pagination.Item active>{currentPage}</Pagination.Item>
                {maxPages !== currentPage && (
                    <Pagination.Item onClick={handleCurrentPage(currentPage + 1)}>
                        {currentPage + 1}
                    </Pagination.Item>
                )}

                {/* {maxPages !== currentPage && <Pagination.Ellipsis />} */}
                <Pagination.Next onClick={nextPage} disabled={maxPages === currentPage} />
                <Pagination.Last
                    disabled={maxPages === currentPage}
                    onClick={handleCurrentPage(maxPages)}
                />
            </Pagination>
        </div>
    );
};

export default PaginationComponent;
