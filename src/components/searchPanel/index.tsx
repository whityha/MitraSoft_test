import { ChangeEvent, useState } from 'react';
import FormControl from 'react-bootstrap/FormControl';

import { usePosts } from '@/hooks/usePosts';
import { useAppDispatch } from '@/hooks/useRedux';
import { SET_MODIFIED_POSTS } from '@/redux/actions';

const SearchPanel = () => {
    const [searchValue, setSearchValue] = useState('');
    const posts = usePosts('global');
    const dispatch = useAppDispatch();

    const handleSearchValue = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
        const modifiedPosts = posts.filter(({ title }) => title.includes(e.target.value));
        dispatch(SET_MODIFIED_POSTS(modifiedPosts));
    };
    const clearSearchValue = () => {
        setSearchValue('');
        dispatch(SET_MODIFIED_POSTS(undefined));
    };
    return (
        <div className="position-relative w-100">
            <span
                onClick={clearSearchValue}
                className="position-absolute cursor-pointer"
                style={{
                    right: '20px',
                    top: '5px',
                    cursor: 'pointer',
                }}
            >
                x
            </span>
            <FormControl
                onChange={handleSearchValue}
                value={searchValue}
                type="text"
                placeholder="Поиск по title (hot search)"
            />
        </div>
    );
};

export default SearchPanel;
