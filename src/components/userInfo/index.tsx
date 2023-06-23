import { ListGroup } from 'react-bootstrap';

import { USER_INFO } from '@/constants';
import { User } from '@/types';

const UserInfo = ({ user }: { user: User }) => {
    return (
        <ListGroup as="ul">
            {USER_INFO.map(({ label, id, value }) => (
                <ListGroup.Item key={id} as="li" className="fw-bold">
                    {label}: <span className="fw-normal">{user[`${value}`]}</span>
                </ListGroup.Item>
            ))}
        </ListGroup>
    );
};

export default UserInfo;
