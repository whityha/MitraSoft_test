import { ListGroup } from 'react-bootstrap';

import { usePosts } from '@/hooks/usePosts';

import Post from './post';

const PostList = () => {
    const posts = usePosts();
    return (
        <ListGroup as="ol" numbered>
            {posts.map(({ id, title, body, userId, comments }) => (
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
    );
};

export default PostList;
