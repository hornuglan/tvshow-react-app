import React from 'react';
import { connect } from 'react-redux';

// import Header from './Header';
import Table from './Table';
import { setPage } from '../store/actions/allActions/paginationActions';

import '../styles/index.css';

const ASC_ORDER = "ASC";
const DESC_ORDER = "DESC";

class App extends React.Component {
    state = {
        traktUrl: 'https://api.trakt.tv/shows/watched?extended=full&page=1&limit=15',
        imagesApiKey: 'ddc2447b6b87e0d850a8c2f4136ffe12',
        isLoading: true,
        pageState: {
            pageNumber: 1,
            leftBorder: 1,
            rightBorder: 10
        },
        sortRules: {
            fieldName: null,
            type: null
        },
        query: ''
    };

    createUrl = (pageNumber, query) => {
        //generating search request, adding page number or query for search if necessary
        query = query || this.state.query;
        if (pageNumber && query) {
            return `https://api.trakt.tv/search/show?extended=full&page=${pageNumber}&limit=15&query=${query}`
        } else if (query) {
            return `https://api.trakt.tv/search/show?extended=full&query=${query}`
        } else if (pageNumber) {
            return `https://api.trakt.tv/shows/watched?extended=full&page=${pageNumber}&limit=15`
        } else {
            return `https://api.trakt.tv/shows/watched?extended=full&page=1&limit=15`
        }
    }

    //loading main data, method is using for main data request and pagination
    loadData = (url, query) => {
        const requestData = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "trakt-api-key": "57e8bf0c5577c8bd768ff34d11b4338b78f56fba6ced125f36bd017d79a968b6",
                "trakt-api-version": "2"
            }
        };

        fetch(url, requestData)
            .then(response => {
                let responsePageCount = response.headers.get('X-Pagination-Page-Count');
                this.setState({
                    pageCount: responsePageCount,
                });
                return response.json();
            })
            .then(responseData => {
                responseData.forEach(element => {
                    this.getPoster(element)
                });
                this.setState({
                    isLoading: false,
                    data: responseData,
                });
                this.applySortRules();
            })
    }

    //shows search
    searchShow = (query) => {
        if (query === '') return;
        this.setState({
            query: query
        })
        this.loadData(this.createUrl(this.state.pageNumber, query));

    }

    //general function to define when and how to sort by year and by title
    applySortRules = (fieldName, type) => {
        // console.log(this.state.sortRules);
        fieldName = fieldName || this.state.sortRules.fieldName;
        type = type || this.state.sortRules.type;
        if (fieldName === "year") {
            if (type === ASC_ORDER) {
                this.sortField(((a, b) => a.show.year - b.show.year), fieldName, type)
            } else if (type === DESC_ORDER) {
                this.sortField(((a, b) => b.show.year - a.show.year), fieldName, type)
            } else {
                console.log("Error occured in applySortRules with year sorting")
            }
        }

        if (fieldName === "title") {
            if (type === ASC_ORDER) {
                const compare = (a, b) => {
                    if (a.show.title > b.show.title) {
                        return 1;
                    }
                    if (a.show.title < b.show.title) {
                        return -1;
                    }
                    return 0;
                };
                this.sortField(compare, fieldName, type);
            } else if (type === DESC_ORDER) {
                const compareReverse = (a, b) => {
                    if (a.show.title > b.show.title) {
                        return -1;
                    }
                    if (a.show.title < b.show.title) {
                        return 1;
                    }
                    return 0;
                };
                this.sortField(compareReverse, fieldName, type);
            } else {
                console.log("Error occured in applySortRules with title sorting")
            }
        }
    }

    //sorting shows by year
    sortByYear = () => {
        if (this.state.sortRules.fieldName === "year" && this.state.sortRules.type === ASC_ORDER) {
            this.applySortRules('year', DESC_ORDER);
        } else {
            this.applySortRules('year', ASC_ORDER);
        }
    }

    //sorting shows by title
    sortByTitle = () => {
        if (this.state.sortRules.fieldName === "title" && this.state.sortRules.type === ASC_ORDER) {
            this.applySortRules('title', DESC_ORDER);
        } else {
            this.applySortRules('title', ASC_ORDER);
        }
    }

    sortField = (compare, fieldName, type) => {
        const data = this.state.data;
        console.log(data);
        data.sort(compare);
        this.setState({
            data: data,
            sortRules: {
                fieldName, type
            }
        })
        console.log(data);
    }

    //pagination
    changePage = (pageNumber, leftBorder, rightBorder) => {
        //request for the next/previous page data
        this.setState({
            isLoading: true,
            pageState: { ...this.state.pageState, pageNumber, leftBorder, rightBorder }
        });

        this.loadData(this.createUrl(pageNumber));
    }

    //data request
    componentDidMount() {
        this.loadData(this.createUrl(1));
    }

    //getting shows posters
    getPoster = (item) => {
        fetch(`https://webservice.fanart.tv/v3/tv/${item.show.ids.tvdb}?api_key=${this.state.imagesApiKey}`)
            .then(response => {
                return response.json();
            })
            .then(responseData => {
                if (responseData.tvposter) {
                    let element = this.state.data.find(element => element.show.ids.tvdb === item.show.ids.tvdb);
                    element.poster = responseData.tvposter[0].url;
                    this.setState({ data: this.state.data })
                }
            })
    }

    //page rendering
    render() {
        // eslint-disable-next-line no-unused-vars
        const { isLoading, data } = this.state;

        if (isLoading) return <div className='lds-ripple'><div></div><div></div></div>;

        return (
            <Table
                setPage={this.props.setPage}
                data={this.state.data} 
                searchShow={this.searchShow} 
                changePage={this.changePage} 
                pageCount={this.state.pageCount} 
                pageState={this.state.pageState} 
                query={this.state.query}
                sortByTitle={this.sortByTitle}
                sortByYear={this.sortByYear}
            />
        )
    }
}

//connecting data from redux store
const mapStateToProps = (store) => {
    console.log(store);
    store = store.pagination;
    return {
            pageNumber: store.pageNumber,
            leftBorder: store.leftBorder,
            rightBorder: store.rightBorder
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setPage: (pageNumber) => dispatch(setPage(pageNumber))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);