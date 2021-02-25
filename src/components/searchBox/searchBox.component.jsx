
import React from 'react';
import './searchBox.style.css';

const SearchBox = ({placeHolder, handleChange}) => (

    <input 
        className='search'
        type='search' 
        placeholder={placeHolder}
        onChange={handleChange}    
    />
    
);

export default SearchBox;





