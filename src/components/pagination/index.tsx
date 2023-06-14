import { Form, Pagination } from 'react-bootstrap';

import { useAppDispatch, useAppSelector } from '@/hooks/useRedux';
import { SET_MAX_POSTS_IN_PAGE } from '@/redux/actions';

import { MAX_POSTS_OPTIONS } from './config';

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
    const dispatch = useAppDispatch();
    const MAX_POSTS_IN_PAGE = useAppSelector(
        ({ PostsListReducer }) => PostsListReducer.maxPostsInPage
    );

    const minPages = 1;
    const maxPages = Math.ceil(contentLength / MAX_POSTS_IN_PAGE);

    const nextPage = () => changeCurrentPage((prevPage: number) => prevPage + 1);
    const prevPage = () => changeCurrentPage((prevPage: number) => prevPage - 1);
    const handleCurrentPage = (pageNumber: number) => () => changeCurrentPage(pageNumber);

    const changeMaxPostsInPage = (e: React.ChangeEvent<HTMLSelectElement>) => {
        changeCurrentPage(1);
        dispatch(SET_MAX_POSTS_IN_PAGE(Number(e.target.value)));
    };
    return (
        <div className="d-flex m-3 gap-3 flex-column">
            <Form.Select onChange={changeMaxPostsInPage}>
                {MAX_POSTS_OPTIONS.map(({ id, value, text }) => (
                    <option key={id} value={value}>
                        {text}
                    </option>
                ))}
            </Form.Select>
            <div className="d-flex flex-column">
                <span className="mb-3">
                    Показано <b>{MAX_POSTS_IN_PAGE}</b> постов из <b>{contentLength}</b>
                </span>
                <Pagination>
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
                    <Pagination.Next onClick={nextPage} disabled={maxPages === currentPage} />
                    <Pagination.Last
                        disabled={maxPages === currentPage}
                        onClick={handleCurrentPage(maxPages)}
                    />
                </Pagination>
            </div>
        </div>
    );
};

export default PaginationComponent;
