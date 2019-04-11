import React from 'react';

import Search from './Search';
// import Pagination from './Pagination';
import { pageRange, Pagination } from './Pagination';

const Header = (props) => (
    <div className='page-header'>
        <Search searchShow={props.searchShow} query={props.query}/>
        <Pagination changePage={props.changePage} pageCount={props.pageCount} pageState={props.pageState}/>
    </div>
)

export default Header;