import { Dropdown } from 'react-bootstrap';

import { usePosts } from '@/hooks/usePosts';
import { useAppDispatch } from '@/hooks/useRedux';
import { SET_MODIFIED_POSTS } from '@/redux/actions';

const SortDropdown = () => {
    const dispatch = useAppDispatch();
    const posts = usePosts();

    const handleLinearSort = () => {
        const linearSortedPosts = [...posts.sort((a, b) => (a.title > b.title ? 1 : -1))];
        dispatch(SET_MODIFIED_POSTS(linearSortedPosts));
    };
    const handleReverseSort = () => {
        const reverseSortedPosts = [
            ...posts.sort((a, b) => (a.title > b.title ? 1 : -1)).reverse(),
        ];
        dispatch(SET_MODIFIED_POSTS(reverseSortedPosts));
    };
    return (
        <Dropdown>
            <Dropdown.Toggle id="dropdown-basic">Сортировать по заголовкам</Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item onClick={handleLinearSort} href="">
                    по возрастанию (A - Z)
                </Dropdown.Item>
                <Dropdown.Item onClick={handleReverseSort} href="">
                    по убыванию (Z - A)
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default SortDropdown;
