import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';

import { PAGES } from '@/routes';
import { Post } from '@/types';

const Avatar = ({ id }: Pick<Post, 'id'>) => {
    return (
        <Link to={`${PAGES.DETAILS}/${id}`}>
            <Image src="/assets/avatar-icon.svg" width={40} roundedCircle />
        </Link>
    );
};

export default Avatar;
