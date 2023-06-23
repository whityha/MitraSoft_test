import { ListGroup } from 'react-bootstrap';

import { PostComment } from '@/types';

const CommentText = ({ comments }: { comments: PostComment[] }) => {
    return (
        <ListGroup>
            {comments.map(({ id, email, body }) => (
                <ListGroup.Item key={id}>
                    <p className="fw-bold">email: {email}</p>
                    <span>{body}</span>
                </ListGroup.Item>
            ))}
        </ListGroup>
    );
};

export default CommentText;
