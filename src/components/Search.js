import React from 'react';

class Search extends React.Component {
    queryRef = React.createRef();

    handleKeyPress = (event) => {
        if(event.charCode === 13) {
            this.props.searchShow(this.queryRef.current.value);
        } else {
            console.log('error');
        }
    }
    render() {
        return(
            <div className='search'>
        <input 
        className='search-input' 
        type='text' 
        defaultValue={this.props.query}
        ref={this.queryRef} 
        placeholder='Search for shows' 
        onKeyPress={this.handleKeyPress}>
        </input>
        <button 
        type='submit'
        className='search-button'
        onClick={() => this.props.searchShow(this.queryRef.current.value)}
        >Go!</button>
    </div>
        )
    }
}

export default Search;