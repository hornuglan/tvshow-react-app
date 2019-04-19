import React from 'react';

import App from './App';
import Header from './Header';

import '../styles/index.css';

export const ASC_ORDER = "ASC";
export const DESC_ORDER = "DESC";

class Table extends React.Component {
    render() {
        return(
            <div className='container'>
                <Header 
                    setPage={this.props.setPage} 
                    searchShow={this.props.searchShow} 
                    content={this.props.content}
                />
                <table>
                    <thead className='table-header'>
                        <tr className='thead-row'>
                            <th className='thead-cell'>&#8470;</th>
                            <th className='thead-cell'>Poster</th>
                            <th className='thead-cell' onClick={() => this.props.sortByTitle(this.props.sort.fieldName, this.props.sort.type)}>Title</th>
                            <th className='thead-cell'>Genres</th>
                            <th className='thead-cell' onClick={() => this.props.sortByYear(this.props.sort.fieldName, this.props.sort.type)}>Year</th>
                            <th className='thead-cell'>Country</th>
                        </tr>
                    </thead>
                    <tbody className='table-body'>
                        {applySortRules(this.props.content.data, this.props.sort.fieldName, this.props.sort.type).map((item, index) => (
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

export default Table;

//general function to define when and how to sort by year and by title
export const applySortRules = (data, fieldName, type) => {
    if(!fieldName || !type) {
        return data
    }
    // console.log(this.state.sortRules);
    if (fieldName === "year") {
        if (type === ASC_ORDER) {
           return data.sort(((a, b) => a.show.year - b.show.year))
        } else if (type === DESC_ORDER) {
            return data.sort(((a, b) => b.show.year - a.show.year));
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
            return data.sort(compare);
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
            return data.sort(compareReverse);
        } else {
            console.log("Error occured in applySortRules with title sorting")
        }
    }
}
