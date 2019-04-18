import React from 'react';
import { connect } from 'react-redux';

// import Header from './Header';
import Table from './Table';
import { setPage } from '../store/actions/allActions/contentAction';
import { sortByYear, sortByTitle } from '../store/actions/allActions/sortActions';

import '../styles/index.css';


class App extends React.Component {
    //data request
    componentDidMount() {
        this.props.setPage(1, 1, 10, '');
    }

    //page rendering
    render() {
        // eslint-disable-next-line no-unused-vars
        const { isLoading, data } = this.props.content;

        if (isLoading) return <div className='lds-ripple'><div></div><div></div></div>;

        return (
            <Table
                setPage={this.props.setPage}
                sortByYear={this.props.sortByYear}
                sortByTitle={this.props.sortByTitle}
                sort={this.props.sort}
                content={this.props.content}
            />
        )
    }
}

//connecting data from redux store
const mapStateToProps = (store) => {
    return {
        content: store.content,
        sort: store.sort
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setPage: (pageNumber, leftBorder, rightBorder, query) => dispatch(setPage(pageNumber, leftBorder, rightBorder, query)),
        sortByYear: ((fieldName, type) => dispatch(sortByYear(fieldName, type))),
        sortByTitle: ((fieldName, type) => dispatch(sortByTitle(fieldName, type)))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);