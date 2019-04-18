import React from 'react';

import Search from './Search';
// import Pagination from './Pagination';
import { pageRange, Pagination } from './Pagination';

const Header = (props) => (
    <div className='page-header'>
        <Search 
            content={props.content}
            setPage={props.setPage}
        />
        <Pagination 
            setPage={props.setPage}
            content={props.content}
        />
    </div>
)

export default Header;