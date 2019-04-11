import React from 'react';

import Header from './Header';

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
        // return `https://api.trakt.tv/shows/watched?extended=full&page=${pageNumber}&limit=15`;
        // Устанавливаем поисковый запрос, если нужно или берем его из стейта.
        // Если нужно добавляем в url и pageNumber.
        query = query || this.state.query;
        if (pageNumber && query) {
            return `https://api.trakt.tv/shows/watched?extended=full&page=${pageNumber}&limit=15&query=${query}`
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
        const traktSearchUrl = `https://api.trakt.tv/search/show?extended=full&query=${query}`;
        if(query === '') return;
        this.setState({
            query: query
        })
        // this.loadData(this.createUrl(1, query));
        this.loadData(traktSearchUrl);

    }

    applySortRules = (fieldName, type) => {
        console.log(this.state.sortRules);
        fieldName = fieldName || this.state.sortRules.fieldName;
        type = type || this.state.sortRules.type;
        if (fieldName === "year") {
            if (type === ASC_ORDER) {
                console.log("второе действие")
                this.sortField(((a,b) => a.show.year - b.show.year), fieldName, type)
            } else if (type === DESC_ORDER) {
                this.sortField(((a,b) => b.show.year - a.show.year), fieldName, type)
            } else {
                console.log("OCHEN ERROR, CHOTO-TO SLOMALOS V YEAR")
            }
        }

        if (fieldName === "title") {
            if (type === ASC_ORDER) {
            const compare = (a, b) => {
                if(a.show.title > b.show.title) {
                    return 1;
                }
                if(a.show.title < b.show.title) {
                    return -1;
                }
                return 0;
              };
                this.sortField(compare, fieldName, type);
            } else if (type === DESC_ORDER) {
                const compareReverse = (a, b) => {
                    if(a.show.title > b.show.title) {
                        return -1;
                    }
                    if(a.show.title < b.show.title) {
                        return 1;
                    }
                    return 0;
                  };
                this.sortField(compareReverse, fieldName, type);
            } else {
                console.log("OCHEN ERROR, CHOTO-TO SLOMALOS V TITLE")
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
        console.log("третье действие");
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
            pageState: {...this.state.pageState, pageNumber, leftBorder, rightBorder}
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
        const { isLoading, data } = this.state;

        if (isLoading) return <div className='loader'></div>;

        return (
            <div className='container'>
                <Header searchShow={this.searchShow} changePage={this.changePage} pageCount={this.state.pageCount} pageState={this.state.pageState} query={this.state.query}  />
                <table>
                    <thead className='table-header'>
                        <tr className='thead-row'>
                            <th className='thead-cell'>&#8470;</th>
                            <th className='thead-cell'>Poster</th>
                            <th className='thead-cell' onClick={this.sortByTitle}>Title</th>
                            <th className='thead-cell'>Genres</th>
                            <th className='thead-cell' onClick={this.sortByYear}>Year</th>
                            <th className='thead-cell'>Country</th>
                        </tr>
                    </thead>
                    <tbody className='table-body'>
                        {data.map((item, index) => (
                            <tr className='tbody-row'>
                                <td className='tbody-cell'>{index + 1}</td>
                                <td className='tbody-cell'>
                                    <img className='poster' alt='' src={item.poster} /> 
                                </td>
                                <td className='tbody-cell'>{item.show.title ? item.show.title : ''}</td>
                                <td className='tbody-cell'>{item.show.genres ? (item.show.genres).join(', ') : ''}</td>
                                <td className='tbody-cell'>{item.show.year ? item.show.year : ''}</td>
                                <td className='tbody-cell'>{item.show.country ? item.show.country.toUpperCase() : ''}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default App;