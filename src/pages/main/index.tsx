import { useEffect } from 'react';

import PostList from '@/components/postsList';
import SearchPanel from '@/components/searchPanel';
import SortDropdown from '@/components/sortDropdown';
import { usePosts } from '@/hooks/usePosts';
import { useAppDispatch } from '@/hooks/useRedux';
import { FETCH_POSTS } from '@/redux/actions';

const MainPage = () => {
    const dispatch = useAppDispatch();
    const posts = usePosts();

    useEffect(() => {
        posts.length || dispatch(FETCH_POSTS());
    }, []);

    return (
        <div>
            <div className="d-flex flex-column m-3 gap-3">
                <SortDropdown />
                <SearchPanel />
            </div>
            <PostList />
        </div>
    );
};

export default MainPage;
