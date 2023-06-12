import { ListGroup } from 'react-bootstrap';

import { Post as TPost } from '@/types';

import Avatar from './avatar';
import Comments from './comments';

const Post = ({ id, body, title, userId, comments }: TPost) => {
    return (
        <ListGroup.Item className="d-flex gap-3">
            <Avatar id={userId} />
            <div className="me-auto">
                {userId}
                <p className="fw-bold">{title}</p>
                {body}
                <Comments id={id} comments={comments} />
            </div>
        </ListGroup.Item>
    );
};

export default Post;
