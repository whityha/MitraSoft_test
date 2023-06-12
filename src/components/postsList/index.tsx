import { useState } from 'react';
import { ListGroup } from 'react-bootstrap';

import { usePosts } from '@/hooks/usePosts';
import { useAppSelector } from '@/hooks/useRedux';

import PaginationComponent from '../pagination';

import Post from './post';

const PostList = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const MAX_POSTS_IN_PAGE = useAppSelector((root) => root.maxPostsInPage);
    const posts = usePosts();
    return (
        <>
            <PaginationComponent
                contentLength={posts.length}
                currentPage={currentPage}
                changeCurrentPage={setCurrentPage}
            />
            <ListGroup as="ol" numbered>
                {posts
                    .slice(
                        (currentPage - 1) * MAX_POSTS_IN_PAGE,
                        (currentPage - 1) * MAX_POSTS_IN_PAGE + MAX_POSTS_IN_PAGE
                    )
                    .map(({ id, title, body, userId, comments }) => (
                        <Post
                            key={id}
                            body={body}
                            userId={userId}
                            title={title}
                            id={id}
                            comments={comments}
                        />
                    ))}
            </ListGroup>
        </>
    );
};

export default PostList;
