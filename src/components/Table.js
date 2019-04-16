import React from 'react';

import App from './App';
import Header from './Header';

import '../styles/index.css';

class Table extends React.Component {
    render() {
        return(
            <div className='container'>
                <Header 
                    setPage={this.props.setPage} 
                    searchShow={this.props.searchShow} 
                    changePage={this.props.changePage} 
                    pageCount={this.props.pageCount} 
                    pageState={this.props.pageState} 
                    query={this.props.query} 
                />
                <table>
                    <thead className='table-header'>
                        <tr className='thead-row'>
                            <th className='thead-cell'>&#8470;</th>
                            <th className='thead-cell'>Poster</th>
                            <th className='thead-cell' onClick={this.props.sortByTitle}>Title</th>
                            <th className='thead-cell'>Genres</th>
                            <th className='thead-cell' onClick={this.props.sortByYear}>Year</th>
                            <th className='thead-cell'>Country</th>
                        </tr>
                    </thead>
                    <tbody className='table-body'>
                        {this.props.data.map((item, index) => (
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