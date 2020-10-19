import React from 'react';

const SearchBar = () => {
    const Styling = {width:"20rem", background:"#FFFFFF", border:"none", padding:"0.5rem"};
    return (
        <input
        style={Styling}
        id='keyword'
        type='text'
        placeholder='Search by Keyword'
        />

    );
}

export default SearchBar;