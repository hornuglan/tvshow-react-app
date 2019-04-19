import React from 'react';

class Search extends React.Component {
    queryRef = React.createRef();

    //setting search using Enter key
    handleKeyPress = (event) => {
        if(event.charCode === 13) {
            this.props.setPage(1, 1, 10, this.queryRef.current.value);
        } else {
            console.log('Error in search using keycode');
        }
    }
    //rendering search input
    render() {
        return(
            <div className='search'>
        <input 
            className='search-input' 
            type='text' 
            defaultValue={this.props.content.query}
            ref={this.queryRef} 
            placeholder='Search for shows' 
            onKeyPress={this.handleKeyPress}>
        </input>
        <button 
            type='submit'
            className='search-button'
            onClick={() => this.props.setPage(1, 1, 10, this.queryRef.current.value)}
        >
        Go!
        </button>
    </div>
        )
    }
}

export default Search;